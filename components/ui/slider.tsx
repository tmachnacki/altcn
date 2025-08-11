"use client";

import * as React from "react";
import { Slider as SliderPrimitive } from "radix-ui";
import { tv, type VariantProps } from "tailwind-variants";

const sliderVariants = tv({
  slots: {
    root: [
      "group/slider peer",
      "touch-target relative isolate flex w-full touch-none items-center select-none data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    ],
    track: [
      "relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 sm:data-[orientation=horizontal]:h-1.5 sm:data-[orientation=vertical]:w-1.5",
    ],
    range: [
      "absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
      "data-[disabled]:bg-base-bg",
      "data-[invalid]:bg-destructive",
    ],
    thumb: [
      "block size-5 shrink-0 rounded-full border bg-background shadow-sm ring-0 transition-shadow sm:size-4",
      "hover:ring-4 focus:ring-4 focus:outline-hidden sm:hover:ring-[3px] sm:focus:ring-[3px]",
      "data-[disabled]:pointer-events-none data-[disabled]:border-base-bg data-[disabled]:bg-base-200 data-[disabled]:shadow-none data-[disabled]:ring-faded-border dark:data-[disabled]:bg-base-800",
      "data-[invalid]:border-destructive data-[invalid]:ring-destructive-faded-border data-[invalid]:data-[disabled]:bg-destructive-100 dark:data-[invalid]:data-[disabled]:bg-destructive-950",
    ],
  },
  variants: {
    variant: {
      contrast: {
        range: "bg-contrast",
        thumb: "border-contrast ring-faded-border",
        track: "bg-muted",
      },
      "contrast-faded": {
        range: "bg-contrast",
        thumb: "border-contrast ring-faded-border",
        track: "bg-faded inset-ring inset-ring-faded-border",
      },

      base: {
        range: "bg-base-bg",
        thumb: "border-base-bg ring-faded-border",
        track: "bg-muted",
      },
      faded: {
        range: "bg-base-bg",
        thumb: "border-base-bg ring-faded-border",
        track: "bg-faded inset-ring inset-ring-faded-border",
      },

      primary: {
        range: "bg-primary",
        thumb: "border-primary ring-primary-faded-border",
        track: "bg-muted",
      },
      "primary-muted": {
        range: "bg-primary",
        thumb: "border-primary ring-primary-faded-border",
        track: "bg-primary-muted",
      },
      "primary-faded": {
        range: "bg-primary",
        thumb: "border-primary ring-primary-faded-border",
        track: "bg-primary-faded inset-ring inset-ring-primary-faded-border",
      },
      "primary-base-faded": {
        range: "bg-primary",
        thumb: "border-primary ring-primary-faded-border",
        track: "bg-faded inset-ring inset-ring-faded-border",
      },

      secondary: {
        range: "bg-secondary",
        thumb: "border-secondary ring-secondary-faded-border",
        track: "bg-muted",
      },
      "secondary-muted": {
        range: "bg-secondary",
        thumb: "border-secondary ring-secondary-faded-border",
        track: "bg-secondary-muted",
      },
      "secondary-faded": {
        range: "bg-secondary",
        thumb: "border-secondary ring-secondary-faded-border",
        track:
          "bg-secondary-faded inset-ring inset-ring-secondary-faded-border",
      },
      "secondary-base-faded": {
        range: "bg-secondary",
        thumb: "border-secondary ring-secondary-faded-border",
        track: "bg-faded inset-ring inset-ring-faded-border",
      },
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
      className: {
        track: "data-[disabled]:bg-muted data-[invalid]:bg-destructive-muted",
      },
    },
    {
      variant: [
        "contrast-faded",
        "faded",
        "primary-faded",
        "primary-base-faded",
        "secondary-faded",
        "secondary-base-faded",
      ],
      className: {
        track:
          "data-[disabled]:bg-faded data-[disabled]:inset-ring-faded-border data-[invalid]:bg-destructive-faded data-[invalid]:inset-ring-destructive-faded-border",
      },
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
  variant = "primary",
  "aria-invalid": ariaInvalid,
  classNames,
  ...props
}: SliderProps) {
  const { root, track, range, thumb } = sliderVariants({ variant });

  const _invalid =
    ariaInvalid === "true" || ariaInvalid === true ? true : undefined;

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
      defaultValue={defaultValue}
      orientation={orientation}
      value={value}
      min={min}
      max={max}
      aria-invalid={ariaInvalid}
      className={root({ className: [classNames?.root, className] })}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        data-invalid={_invalid}
        className={track({ className: [classNames?.track] })}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          data-invalid={_invalid}
          className={range({ className: [classNames?.range] })}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={`slider-thumb-${index}`}
          data-invalid={_invalid}
          className={thumb({ className: [classNames?.thumb] })}
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider, sliderVariants };
