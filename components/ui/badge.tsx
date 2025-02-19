import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 rounded-md px-2 py-1 text-xs leading-none font-medium whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 [&>svg]:pointer-events-none [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        // base
        accent:
          "bg-accent text-accent-foreground [a&]:hover:bg-base-200/60 dark:[a&]:hover:bg-base-800/70",
        outline:
          "text-foreground inset-ring shadow-xs inset-ring-border [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",

        // primary
        primary:
          "bg-primary text-primary-foreground shadow-sm focus-visible:outline-primary [a&]:hover:bg-primary/90",
        primaryMuted:
          "bg-primary-muted text-primary-muted-foreground focus-visible:outline-primary [a&]:hover:bg-primary-muted/80",
        primaryFaded:
          "bg-primary-faded text-primary-muted-foreground inset-ring inset-ring-border-primary-faded focus-visible:outline-primary [a&]:hover:bg-primary-muted/80",

        // secondary
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm focus-visible:outline-secondary [a&]:hover:bg-secondary/90",
        secondaryMuted:
          "bg-secondary-muted text-secondary-muted-foreground focus-visible:outline-secondary [a&]:hover:bg-secondary-muted/80",
        secondaryFaded:
          "bg-secondary-faded text-secondary-muted-foreground inset-ring inset-ring-border-secondary-faded focus-visible:outline-secondary [a&]:hover:bg-secondary-muted/80",

        // destructive
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm focus-visible:outline-destructive [a&]:hover:bg-destructive/90",
        destructiveMuted:
          "bg-destructive-muted text-destructive-muted-foreground focus-visible:outline-destructive [a&]:hover:bg-destructive-muted/80",
        destructiveFaded:
          "bg-destructive-faded text-destructive-muted-foreground inset-ring inset-ring-border-destructive-faded focus-visible:outline-destructive [a&]:hover:bg-destructive-muted/80",

        // success
        success:
          "bg-success text-success-foreground shadow-sm focus-visible:outline-success [a&]:hover:bg-success/90",
        successMuted:
          "bg-success-muted text-success-muted-foreground focus-visible:outline-success [a&]:hover:bg-success-muted/80",
        successFaded:
          "bg-success-faded text-success-muted-foreground inset-ring inset-ring-border-success-faded focus-visible:outline-success [a&]:hover:bg-success-muted/80",

        // warning
        warning:
          "bg-warning text-warning-foreground shadow-sm focus-visible:outline-warning [a&]:hover:bg-warning/90",
        warningMuted:
          "bg-warning-muted text-warning-muted-foreground focus-visible:outline-warning [a&]:hover:bg-warning-muted/80",
        warningFaded:
          "bg-warning-faded text-warning-muted-foreground inset-ring inset-ring-border-warning-faded focus-visible:outline-warning [a&]:hover:bg-warning-muted/80",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
