"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const progressVariants = cva(
  "relative h-2 w-full overflow-hidden rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-accent **:data-[slot=progress-indicator]:bg-primary",
        "primary-muted":
          "bg-primary-muted **:data-[slot=progress-indicator]:bg-primary",
        "primary-faded":
          "bg-primary-faded inset-ring inset-ring-border-primary-faded **:data-[slot=progress-indicator]:bg-primary",
        secondary: "bg-accent **:data-[slot=progress-indicator]:bg-secondary",
        "secondary-muted":
          "bg-secondary-muted **:data-[slot=progress-indicator]:bg-secondary",
        "secondary-faded":
          "bg-secondary-faded inset-ring inset-ring-border-secondary-faded **:data-[slot=progress-indicator]:bg-secondary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

function Progress({
  className,
  value,
  variant = "primary",
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> &
  VariantProps<typeof progressVariants>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(progressVariants({ variant }), className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
