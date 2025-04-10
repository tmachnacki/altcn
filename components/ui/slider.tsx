"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sliderVariants = cva(
  "aria-invalid:[--slider-range-bg:var(--color-destructive)] aria-invalid:[--slider-thumb-border:var(--color-destructive)] aria-invalid:[--slider-thumb-ring:var(--color-border-destructive-faded)]",
  {
    variants: {
      variant: {
        primary:
          "[--slider-track-bg:var(--color-accent)] aria-invalid:[--slider-track-bg:var(--color-destructive-muted)]",

        "primary-muted":
          "[--slider-track-bg:var(--color-primary-muted)] aria-invalid:[--slider-track-bg:var(--color-destructive-muted)]",

        "primary-faded":
          "[--slider-track-bg:var(--color-primary-faded)] *:data-[slot=slider-track]:inset-ring-1 *:data-[slot=slider-track]:inset-ring-border-primary-faded aria-invalid:[--slider-track-bg:var(--color-destructive-faded)] aria-invalid:*:data-[slot=slider-track]:inset-ring-border-destructive-faded",

        secondary:
          "[--slider-track-bg:var(--color-accent)] aria-invalid:[--slider-track-bg:var(--color-destructive-muted)]",

        "secondary-muted":
          "[--slider-track-bg:var(--color-secondary-muted)] aria-invalid:[--slider-track-bg:var(--color-destructive-muted)]",

        "secondary-faded":
          "[--slider-track-bg:var(--color-secondary-faded)] *:data-[slot=slider-track]:inset-ring-1 *:data-[slot=slider-track]:inset-ring-border-secondary-faded aria-invalid:[--slider-track-bg:var(--color-destructive-faded)] aria-invalid:*:data-[slot=slider-track]:inset-ring-border-destructive-faded",
      },
    },
    compoundVariants: [
      {
        variant: ["primary", "primary-muted", "primary-faded"],
        className:
          "[--slider-range-bg:var(--color-primary)] [--slider-thumb-border:var(--color-primary)] [--slider-thumb-ring:var(--color-border-primary-faded)]",
      },
      {
        variant: ["secondary", "secondary-muted", "secondary-faded"],
        className:
          "[--slider-range-bg:var(--color-secondary)] [--slider-thumb-border:var(--color-secondary)] [--slider-thumb-ring:var(--color-border-secondary-faded)]",
      },
    ],
    defaultVariants: {
      variant: "primary",
    },
  },
);

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  variant,
  classNames,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root> &
  VariantProps<typeof sliderVariants> & {
    classNames?: {
      slider?: string;
      sliderTrack?: string;
      sliderRange?: string;
      sliderThumb?: string;
    };
  }) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      data-variant={variant}
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        sliderVariants({ variant }),
        classNames?.slider,
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "relative grow overflow-hidden rounded-full bg-(--slider-track-bg) data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
          classNames?.sliderTrack,
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "absolute bg-(--slider-range-bg) data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
            classNames?.sliderRange,
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={`slider-thumb-${index}`}
          className={cn(
            "block size-4 shrink-0 rounded-full border border-(--slider-thumb-border) bg-background shadow-sm ring-0 ring-(--slider-thumb-ring) transition-shadow hover:ring-[3px] focus:ring-[3px] focus:outline-hidden disabled:pointer-events-none disabled:opacity-50",
            classNames?.sliderThumb,
          )}
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
