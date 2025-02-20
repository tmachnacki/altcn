import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-xs leading-none font-medium whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 has-[[data-slot='badge-close']]:pr-1 [&_svg:not([class*='size-'])]:size-3.5 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        // base
        accent:
          "bg-accent text-accent-foreground [a&]:hover:bg-base-200/60 dark:[a&]:hover:bg-base-800/70",
        outline:
          "bg-background text-foreground inset-ring shadow-xs inset-ring-border [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        muted:
          "bg-muted text-muted-foreground [a&]:hover:bg-base-200/60 dark:[a&]:hover:bg-base-800/70",
        faded:
          "bg-faded text-muted-foreground inset-ring inset-ring-border-faded [a&]:hover:bg-muted dark:[a&]:hover:bg-base-400/15",

        // primary
        primary:
          "bg-primary text-primary-foreground focus-visible:outline-primary [a&]:hover:bg-primary/90",
        primaryMuted:
          "bg-primary-muted text-primary-muted-foreground focus-visible:outline-primary [a&]:hover:bg-primary-muted/80",
        primaryFaded:
          "bg-primary-faded text-primary-muted-foreground inset-ring inset-ring-border-primary-faded focus-visible:outline-primary [a&]:hover:bg-primary-muted/70",

        // secondary
        secondary:
          "bg-secondary text-secondary-foreground focus-visible:outline-secondary [a&]:hover:bg-secondary/90",
        secondaryMuted:
          "bg-secondary-muted text-secondary-muted-foreground focus-visible:outline-secondary [a&]:hover:bg-secondary-muted/80",
        secondaryFaded:
          "bg-secondary-faded text-secondary-muted-foreground inset-ring inset-ring-border-secondary-faded focus-visible:outline-secondary [a&]:hover:bg-secondary-muted/70",

        // destructive
        destructive:
          "bg-destructive text-destructive-foreground focus-visible:outline-destructive [a&]:hover:bg-destructive/90",
        destructiveMuted:
          "bg-destructive-muted text-destructive-muted-foreground focus-visible:outline-destructive [a&]:hover:bg-destructive-muted/80",
        destructiveFaded:
          "bg-destructive-faded text-destructive-muted-foreground inset-ring inset-ring-border-destructive-faded focus-visible:outline-destructive [a&]:hover:bg-destructive-muted/70",

        // success
        success:
          "bg-success text-success-foreground focus-visible:outline-success [a&]:hover:bg-success/90",
        successMuted:
          "bg-success-muted text-success-muted-foreground focus-visible:outline-success [a&]:hover:bg-success-muted/80",
        successFaded:
          "bg-success-faded text-success-muted-foreground inset-ring inset-ring-border-success-faded focus-visible:outline-success [a&]:hover:bg-success-muted/70",

        // warning
        warning:
          "bg-warning text-warning-foreground focus-visible:outline-warning [a&]:hover:bg-warning/90",
        warningMuted:
          "bg-warning-muted text-warning-muted-foreground focus-visible:outline-warning [a&]:hover:bg-warning-muted/80",
        warningFaded:
          "bg-warning-faded text-warning-muted-foreground inset-ring inset-ring-border-warning-faded focus-visible:outline-warning [a&]:hover:bg-warning-muted/70",
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
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
}

function BadgeDot({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      data-slot="badge-dot"
      viewBox="0 0 6 6"
      aria-hidden="true"
      className={cn("size-1.5", className)}
      {...props}
    >
      <circle r={3} cx={3} cy={3} />
    </svg>
  );
}

// TODO: badge close variants
function BadgeClose({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="badge-close"
      type="button"
      className={cn(
        "group relative inline-flex size-4 items-center justify-center rounded-full text-current opacity-50",
        className,
      )}
      {...props}
    >
      <span className="sr-only">Remove</span>
      <XIcon data-slot="badge-close-icon" className="size-3" />
    </button>
  );
}

export { badgeVariants, Badge, BadgeDot, BadgeClose };
