"use client";

import * as React from "react";
import { Progress as ProgressPrimitive } from "radix-ui";
import { tv, VariantProps } from "tailwind-variants";

const progressVariants = tv({
  slots: {
    root: "relative h-3 w-full overflow-hidden rounded-full sm:h-2",
    indicator: "h-full w-full flex-1 transition-all",
  },
  variants: {
    variant: {
      contrast: {
        root: "bg-muted",
        indicator: "bg-contrast",
      },
      "contrast-faded": {
        root: "bg-faded inset-ring inset-ring-faded-border",
        indicator: "bg-contrast",
      },

      base: {
        root: "bg-muted",
        indicator: "bg-base-bg",
      },
      faded: {
        root: "bg-faded inset-ring inset-ring-faded-border",
        indicator: "bg-base-bg",
      },

      primary: {
        root: "bg-muted",
        indicator: "bg-primary",
      },
      "primary-muted": {
        root: "bg-primary-muted",
        indicator: "bg-primary",
      },
      "primary-faded": {
        root: "bg-primary-faded inset-ring inset-ring-primary-faded-border",
        indicator: "bg-primary",
      },
      "primary-base-faded": {
        root: "bg-faded inset-ring inset-ring-faded-border",
        indicator: "bg-primary",
      },

      secondary: {
        root: "bg-muted",
        indicator: "bg-secondary",
      },
      "secondary-muted": {
        root: "bg-secondary-muted",
        indicator: "bg-secondary",
      },
      "secondary-faded": {
        root: "bg-secondary-faded inset-ring inset-ring-secondary-faded-border",
        indicator: "bg-secondary",
      },
      "secondary-base-faded": {
        root: "bg-faded inset-ring inset-ring-faded-border",
        indicator: "bg-secondary",
      },

      destructive: {
        root: "bg-muted",
        indicator: "bg-destructive",
      },
      "destructive-muted": {
        root: "bg-destructive-muted",
        indicator: "bg-destructive",
      },
      "destructive-faded": {
        root: "bg-destructive-faded inset-ring inset-ring-destructive-faded-border",
        indicator: "bg-destructive",
      },
      "destructive-base-faded": {
        root: "bg-faded inset-ring inset-ring-faded-border",
        indicator: "bg-destructive",
      },

      success: {
        root: "bg-muted",
        indicator: "bg-success",
      },
      "success-muted": {
        root: "bg-success-muted",
        indicator: "bg-success",
      },
      "success-faded": {
        root: "bg-success-faded inset-ring inset-ring-success-faded-border",
        indicator: "bg-success",
      },
      "success-base-faded": {
        root: "bg-faded inset-ring inset-ring-faded-border",
        indicator: "bg-success",
      },

      warning: {
        root: "bg-muted",
        indicator: "bg-warning",
      },
      "warning-muted": {
        root: "bg-warning-muted",
        indicator: "bg-warning",
      },
      "warning-faded": {
        root: "bg-warning-faded inset-ring inset-ring-warning-faded-border",
        indicator: "bg-warning",
      },
      "warning-base-faded": {
        root: "bg-faded inset-ring inset-ring-faded-border",
        indicator: "bg-warning",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> &
  VariantProps<typeof progressVariants> & {
    classNames?: {
      root?: string;
      indicator?: string;
    };
  };

function Progress({
  className,
  value,
  variant = "primary",
  classNames,
  ...props
}: ProgressProps) {
  const { root, indicator } = progressVariants({ variant });
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={root({ className: [classNames?.root, className] })}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={indicator({ className: [classNames?.indicator] })}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress, progressVariants };
