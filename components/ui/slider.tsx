"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const sliderVariants = cva(
  [
    "relative flex w-full touch-none items-center select-none data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
    "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
    "aria-invalid:[--slider-range-bg:var(--color-destructive)] aria-invalid:[--slider-thumb-border:var(--color-destructive)] aria-invalid:[--slider-thumb-ring:var(--color-destructive-border-faded)]",
  ],
  {
    variants: {
      variant: {
        base: [
          "[--slider-track-bg:var(--color-muted)] aria-invalid:[--slider-track-bg:var(--color-destructive-muted)]",
          "[--slider-range-bg:var(--color-base)]",
          "[--slider-thumb-border:var(--color-base)]",
          "[--slider-thumb-ring:var(--color-border-faded)]",
        ],

        faded: [
          "[--slider-track-bg:var(--color-faded)] [--slider-track-inset-ring:var(--color-border-faded)] aria-invalid:[--slider-track-bg:var(--color-destructive-faded)] aria-invalid:[--slider-track-inset-ring:var(--color-destructive-border-faded)]",
          "[--slider-range-bg:var(--color-base)]",
          "[--slider-thumb-border:var(--color-base)]",
          "[--slider-thumb-ring:var(--color-border-faded)]",
        ],

        primary: [
          "[--slider-track-bg:var(--color-muted)] aria-invalid:[--slider-track-bg:var(--color-destructive-muted)]",
          "[--slider-range-bg:var(--color-primary)]",
          "[--slider-thumb-border:var(--color-primary)]",
          "[--slider-thumb-ring:var(--color-primary-border-faded)]",
        ],

        "primary-muted": [
          "[--slider-track-bg:var(--color-primary-muted)] aria-invalid:[--slider-track-bg:var(--color-destructive-muted)]",
          "[--slider-range-bg:var(--color-primary)]",
          "[--slider-thumb-border:var(--color-primary)]",
          "[--slider-thumb-ring:var(--color-primary-border-faded)]",
        ],

        "primary-faded": [
          "[--slider-track-bg:var(--color-primary-faded)] [--slider-track-inset-ring:var(--color-primary-border-faded)] aria-invalid:[--slider-track-bg:var(--color-destructive-faded)] aria-invalid:[--slider-track-inset-ring:var(--color-destructive-border-faded)]",
          "[--slider-range-bg:var(--color-primary)]",
          "[--slider-thumb-border:var(--color-primary)]",
          "[--slider-thumb-ring:var(--color-primary-border-faded)]",
        ],

        secondary: [
          "[--slider-track-bg:var(--color-muted)] aria-invalid:[--slider-track-bg:var(--color-destructive-muted)]",
          "[--slider-range-bg:var(--color-secondary)]",
          "[--slider-thumb-border:var(--color-secondary)]",
          "[--slider-thumb-ring:var(--color-secondary-border-faded)]",
        ],

        "secondary-muted": [
          "[--slider-track-bg:var(--color-secondary-muted)] aria-invalid:[--slider-track-bg:var(--color-destructive-muted)]",
          "[--slider-range-bg:var(--color-secondary)]",
          "[--slider-thumb-border:var(--color-secondary)]",
          "[--slider-thumb-ring:var(--color-secondary-border-faded)]",
        ],

        "secondary-faded": [
          "[--slider-track-bg:var(--color-secondary-faded)] [--slider-track-inset-ring:var(--color-secondary-border-faded)] aria-invalid:[--slider-track-bg:var(--color-destructive-faded)] aria-invalid:[--slider-track-inset-ring:var(--color-destructive-border-faded)]",
          "[--slider-range-bg:var(--color-secondary)]",
          "[--slider-thumb-border:var(--color-secondary)]",
          "[--slider-thumb-ring:var(--color-secondary-border-faded)]",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

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
          "relative grow overflow-hidden rounded-full bg-(--slider-track-bg) data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
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
            "block size-4 shrink-0 rounded-full border border-(--slider-thumb-border) bg-background shadow-sm ring-0 ring-(--slider-thumb-ring) transition-shadow hover:not-data-[disabled]:ring-[3px] focus:ring-[3px] focus:outline-hidden data-[disabled]:pointer-events-none",
            classNames?.thumb
          )}
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
