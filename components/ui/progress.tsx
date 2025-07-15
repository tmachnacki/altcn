"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const progressVariants = cva(
  "relative h-2 w-full overflow-hidden rounded-full",
  {
    variants: {
      variant: {
        base: "bg-muted",
        faded: "bg-faded inset-ring inset-ring-faded-border",

        primary: "bg-muted",
        "primary-muted": "bg-primary-muted",
        "primary-faded":
          "bg-primary-faded inset-ring inset-ring-primary-faded-border",

        secondary: "bg-muted",
        "secondary-muted": "bg-secondary-muted",
        "secondary-faded":
          "bg-secondary-faded inset-ring inset-ring-secondary-faded-border",
      },
    },
    compoundVariants: [
      {
        variant: ["base", "faded"],
        className: "[--progress-indicator-bg:var(--color-base-bg)]",
      },
      {
        variant: ["primary", "primary-muted", "primary-faded"],
        className: "[--progress-indicator-bg:var(--color-primary)]",
      },
      {
        variant: ["secondary", "secondary-muted", "secondary-faded"],
        className: "[--progress-indicator-bg:var(--color-secondary)]",
      },
    ],
    defaultVariants: {
      variant: "primary",
    },
  }
);

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
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(progressVariants({ variant }), classNames?.root, className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "h-full w-full flex-1 bg-(--progress-indicator-bg) transition-all",
          classNames?.indicator
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
