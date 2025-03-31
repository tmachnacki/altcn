"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sliderVariants = cva(
  "aria-invalid:**:data-[slot=slider-range]:bg-destructive aria-invalid:**:data-[slot=slider-thumb]:border-destructive aria-invalid:**:data-[slot=slider-thumb]:ring-border-destructive-faded",
  {
    variants: {
      variant: {
        primary:
          "**:data-[slot=slider-range]:bg-primary **:data-[slot=slider-thumb]:border-primary **:data-[slot=slider-thumb]:ring-border-primary-faded **:data-[slot=slider-track]:bg-accent aria-invalid:**:data-[slot=slider-track]:bg-destructive-muted",

        "primary-muted":
          "**:data-[slot=slider-range]:bg-primary **:data-[slot=slider-thumb]:border-primary **:data-[slot=slider-thumb]:ring-border-primary-faded **:data-[slot=slider-track]:bg-primary-muted aria-invalid:**:data-[slot=slider-track]:bg-destructive-muted",

        "primary-faded":
          "**:data-[slot=slider-range]:bg-primary **:data-[slot=slider-thumb]:border-primary **:data-[slot=slider-thumb]:ring-border-primary-faded **:data-[slot=slider-track]:bg-primary-faded **:data-[slot=slider-track]:inset-ring-1 **:data-[slot=slider-track]:inset-ring-border-primary-faded aria-invalid:**:data-[slot=slider-track]:bg-destructive-faded aria-invalid:**:data-[slot=slider-track]:inset-ring-border-destructive-faded",

        secondary:
          "**:data-[slot=slider-range]:bg-secondary **:data-[slot=slider-thumb]:border-secondary **:data-[slot=slider-thumb]:ring-border-secondary-faded **:data-[slot=slider-track]:bg-accent aria-invalid:**:data-[slot=slider-track]:bg-destructive-muted",

        "secondary-muted":
          "**:data-[slot=slider-range]:bg-secondary **:data-[slot=slider-thumb]:border-secondary **:data-[slot=slider-thumb]:ring-border-secondary-faded **:data-[slot=slider-track]:bg-secondary-muted aria-invalid:**:data-[slot=slider-track]:bg-destructive-muted",

        "secondary-faded":
          "**:data-[slot=slider-range]:bg-secondary **:data-[slot=slider-thumb]:border-secondary **:data-[slot=slider-thumb]:ring-border-secondary-faded **:data-[slot=slider-track]:bg-secondary-faded **:data-[slot=slider-track]:inset-ring-1 **:data-[slot=slider-track]:inset-ring-border-secondary-faded aria-invalid:**:data-[slot=slider-track]:bg-destructive-faded aria-invalid:**:data-[slot=slider-track]:inset-ring-border-destructive-faded",
      },
    },
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
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root> &
  VariantProps<typeof sliderVariants>) {
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
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={`slider-thumb-${index}`}
          className="block size-4 shrink-0 rounded-full border bg-background shadow-sm hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
