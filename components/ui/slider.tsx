"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

const sliderVariants = tv({
  base: [
    "peer touch-target relative flex w-full touch-none items-center select-none data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:[--slider-range-bg:var(--color-base-bg)] data-[disabled]:[--slider-thumb-border:var(--color-base-bg)] data-[disabled]:[--slider-thumb-ring:var(--color-faded-border)]",
    "aria-invalid:[--slider-range-bg:var(--color-destructive)] aria-invalid:[--slider-thumb-border:var(--color-destructive)] aria-invalid:[--slider-thumb-ring:var(--color-destructive-faded-border)]",
  ],
  variants: {
    variant: {
      contrast: [
        "[--slider-track-bg:var(--color-muted)]",
        "[--slider-range-bg:var(--color-contrast)]",
        "[--slider-thumb-border:var(--color-contrast)]",
        "[--slider-thumb-ring:var(--color-faded-border)]",
      ],
      "contrast-faded": [
        "[--slider-track-bg:var(--color-faded)] [--slider-track-inset-ring:var(--color-faded-border)]",
        "[--slider-range-bg:var(--color-contrast)]",
        "[--slider-thumb-border:var(--color-contrast)]",
        "[--slider-thumb-ring:var(--color-faded-border)]",
      ],

      base: [
        "[--slider-track-bg:var(--color-muted)]",
        "[--slider-range-bg:var(--color-base-bg)]",
        "[--slider-thumb-border:var(--color-base-bg)]",
        "[--slider-thumb-ring:var(--color-faded-border)]",
      ],
      faded: [
        "[--slider-track-bg:var(--color-faded)] [--slider-track-inset-ring:var(--color-faded-border)]",
        "[--slider-range-bg:var(--color-base-bg)]",
        "[--slider-thumb-border:var(--color-base-bg)]",
        "[--slider-thumb-ring:var(--color-faded-border)]",
      ],

      primary: [
        "[--slider-track-bg:var(--color-muted)]",
        "[--slider-range-bg:var(--color-primary)]",
        "[--slider-thumb-border:var(--color-primary)]",
        "[--slider-thumb-ring:var(--color-primary-faded-border)]",
      ],
      "primary-muted": [
        "[--slider-track-bg:var(--color-primary-muted)]",
        "[--slider-range-bg:var(--color-primary)]",
        "[--slider-thumb-border:var(--color-primary)]",
        "[--slider-thumb-ring:var(--color-primary-faded-border)]",
      ],
      "primary-faded": [
        "[--slider-track-bg:var(--color-primary-faded)] [--slider-track-inset-ring:var(--color-primary-faded-border)]",
        "[--slider-range-bg:var(--color-primary)]",
        "[--slider-thumb-border:var(--color-primary)]",
        "[--slider-thumb-ring:var(--color-primary-faded-border)]",
      ],

      secondary: [
        "[--slider-track-bg:var(--color-muted)]",
        "[--slider-range-bg:var(--color-secondary)]",
        "[--slider-thumb-border:var(--color-secondary)]",
        "[--slider-thumb-ring:var(--color-secondary-faded-border)]",
      ],
      "secondary-muted": [
        "[--slider-track-bg:var(--color-secondary-muted)]",
        "[--slider-range-bg:var(--color-secondary)]",
        "[--slider-thumb-border:var(--color-secondary)]",
        "[--slider-thumb-ring:var(--color-secondary-faded-border)]",
      ],
      "secondary-faded": [
        "[--slider-track-bg:var(--color-secondary-faded)] [--slider-track-inset-ring:var(--color-secondary-faded-border)]",
        "[--slider-range-bg:var(--color-secondary)]",
        "[--slider-thumb-border:var(--color-secondary)]",
        "[--slider-thumb-ring:var(--color-secondary-faded-border)]",
      ],
    },
  },
  compoundVariants: [
    {
      variant: [
        "contrast",
        "base",
        "primary",
        "primary-muted",
        "secondary",
        "secondary-muted",
      ],
      className: [
        "data-[disabled]:[--slider-track-bg:var(--color-muted)]",
        "aria-invalid:[--slider-track-bg:var(--color-destructive-muted)]",
      ],
    },
    {
      variant: ["contrast-faded", "faded", "primary-faded", "secondary-faded"],
      className: [
        "data-[disabled]:[--slider-track-bg:var(--color-faded)] data-[disabled]:[--slider-track-inset-ring:var(--color-faded-border)]",
        "aria-invalid:[--slider-track-bg:var(--color-destructive-faded)] aria-invalid:[--slider-track-inset-ring:var(--color-destructive-faded-border)]",
      ],
    },
  ],
  defaultVariants: {
    variant: "primary",
  },
});

type SliderProps = React.ComponentProps<typeof SliderPrimitive.Root> &
  VariantProps<typeof sliderVariants> & {
    classNames?: {
      root?: string;
      track?: string;
      range?: string;
      thumb?: string;
    };
  };

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  orientation = "horizontal",
  variant,
  classNames,
  ...props
}: SliderProps) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      data-variant={variant}
      defaultValue={defaultValue}
      orientation={orientation}
      value={value}
      min={min}
      max={max}
      className={cn(sliderVariants({ variant }), classNames?.root, className)}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "relative grow overflow-hidden rounded-full bg-(--slider-track-bg) data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 sm:data-[orientation=horizontal]:h-1.5 sm:data-[orientation=vertical]:w-1.5",
          variant?.includes("faded") &&
            "inset-ring inset-ring-(--slider-track-inset-ring)",
          classNames?.track
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "absolute bg-(--slider-range-bg) data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
            classNames?.range
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={`slider-thumb-${index}`}
          className={cn(
            "block size-5 shrink-0 rounded-full border border-(--slider-thumb-border) bg-background shadow-sm ring-0 ring-(--slider-thumb-ring) transition-shadow hover:ring-4 focus:ring-4 focus:outline-hidden data-[disabled]:pointer-events-none data-[disabled]:bg-base-200 sm:size-4 sm:hover:ring-[3px] sm:focus:ring-4 dark:data-[disabled]:bg-base-800",
            classNames?.thumb
          )}
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider, sliderVariants };
