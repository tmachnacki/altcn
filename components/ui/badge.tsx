import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { XIcon, CircleIcon, LucideProps } from "lucide-react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "relative isolate inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5 rounded-md border px-2 py-1 text-xs leading-none font-medium whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 has-[[data-slot='badge-close']]:pr-1 [&_svg:not([class*='size-'])]:size-3 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        // base
        outline: "",

        accent:
          "border-transparent bg-accent text-accent-foreground [a&]:hover:bg-base-200 dark:[a&]:hover:bg-base-800",

        muted:
          "border-transparent bg-muted text-muted-foreground [a&]:hover:bg-accent",

        surface:
          "border-border-faded bg-faded text-accent-foreground hover:bg-muted",

        faded:
          "border-border-faded bg-faded text-muted-foreground [a&]:hover:bg-muted",

        dotted:
          "[&_[data-slot='badge-dot']:not([class*='fill-'])]:fill-muted-foreground [&_[data-slot='badge-dot']:not([class*='stroke-'])]:stroke-muted-foreground",

        // primary
        primary:
          "border-transparent bg-primary text-primary-foreground focus-visible:outline-primary [&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-primary-200/20 [a&]:hover:bg-primary/90",

        "primary-accent":
          "border-transparent bg-primary-muted text-primary-accent-foreground focus-visible:outline-primary [a&]:hover:bg-primary-muted/80",

        "primary-muted":
          "border-transparent bg-primary-muted text-primary-muted-foreground focus-visible:outline-primary [a&]:hover:bg-primary-muted/80",

        "primary-surface":
          "border-border-primary-faded bg-primary-faded text-primary-accent-foreground focus-visible:outline-primary [a&]:hover:bg-primary-muted/80",

        "primary-faded":
          "border-border-primary-faded bg-primary-faded text-primary-muted-foreground focus-visible:outline-primary [a&]:hover:bg-primary-muted/80",

        "primary-tron":
          "border-none bg-background bg-gradient-to-t from-primary/15 to-transparent text-primary-muted-foreground inset-ring inset-ring-border hover:bg-gradient-to-b hover:from-primary/20 hover:to-primary/[7%] hover:inset-ring-primary/50 focus-visible:outline-primary [&>[data-slot='tron-blur']]:via-purple-400 [&>[data-slot='tron-wide']]:via-primary",

        "primary-dotted":
          "[&_[data-slot='badge-dot']:not([class*='fill-'])]:fill-primary [&_[data-slot='badge-dot']:not([class*='stroke-'])]:stroke-primary",

        // secondary
        secondary:
          "border-transparent bg-secondary text-secondary-foreground focus-visible:outline-secondary [&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-secondary-700/30 dark:[&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-secondary-800/30 [a&]:hover:bg-secondary/90",

        "secondary-accent":
          "border-transparent bg-secondary-muted text-secondary-accent-foreground focus-visible:outline-secondary [a&]:hover:bg-secondary-muted/80",

        "secondary-muted":
          "border-transparent bg-secondary-muted text-secondary-muted-foreground focus-visible:outline-secondary [a&]:hover:bg-secondary-muted/80",

        "secondary-surface":
          "border-border-secondary-faded bg-secondary-faded text-secondary-accent-foreground focus-visible:outline-secondary [a&]:hover:bg-secondary-muted/70",

        "secondary-faded":
          "border-border-secondary-faded bg-secondary-faded text-secondary-muted-foreground focus-visible:outline-secondary [a&]:hover:bg-secondary-muted/70",

        "secondary-dotted":
          "[&_[data-slot='badge-dot']:not([class*='fill-'])]:fill-secondary [&_[data-slot='badge-dot']:not([class*='stroke-'])]:stroke-secondary",

        // destructive
        destructive:
          "border-transparent bg-destructive text-destructive-foreground focus-visible:outline-destructive [&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-destructive-100/30 dark:[&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-destructive-100/40 [a&]:hover:bg-destructive/90",

        "destructive-accent":
          "border-transparent bg-destructive-muted text-destructive-accent-foreground focus-visible:outline-destructive [a&]:hover:bg-destructive-muted/80",

        "destructive-muted":
          "border-transparent bg-destructive-muted text-destructive-muted-foreground focus-visible:outline-destructive [a&]:hover:bg-destructive-muted/80",

        "destructive-surface":
          "border-border-destructive-faded bg-destructive-faded text-destructive-accent-foreground focus-visible:outline-destructive [a&]:hover:bg-destructive-muted/70",

        "destructive-faded":
          "border-border-destructive-faded bg-destructive-faded text-destructive-muted-foreground focus-visible:outline-destructive [a&]:hover:bg-destructive-muted/70",

        "destructive-dotted":
          "[&_[data-slot='badge-dot']:not([class*='fill-'])]:fill-destructive [&_[data-slot='badge-dot']:not([class*='stroke-'])]:stroke-destructive",

        // success
        success:
          "border-transparent bg-success text-success-foreground focus-visible:outline-success [&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-success-300/20 [a&]:hover:bg-success/90",

        "success-accent":
          "border-transparent bg-success-muted text-success-accent-foreground focus-visible:outline-success [a&]:hover:bg-success-muted/80",

        "success-muted":
          "border-transparent bg-success-muted text-success-muted-foreground focus-visible:outline-success [a&]:hover:bg-success-muted/80",

        "success-surface":
          "border-border-success-faded bg-success-faded text-success-accent-foreground focus-visible:outline-success [a&]:hover:bg-success-muted/70",

        "success-faded":
          "border-border-success-faded bg-success-faded text-success-muted-foreground focus-visible:outline-success [a&]:hover:bg-success-muted/70",

        "success-dotted":
          "[&_[data-slot='badge-dot']:not([class*='fill-'])]:fill-success [&_[data-slot='badge-dot']:not([class*='stroke-'])]:stroke-success",

        // warning
        warning:
          "border-transparent bg-warning text-warning-foreground focus-visible:outline-warning [&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-warning-700/30 [a&]:hover:bg-warning/90",

        "warning-accent":
          "border-transparent bg-warning-muted text-warning-accent-foreground focus-visible:outline-warning [a&]:hover:bg-warning-muted/80",

        "warning-muted":
          "border-transparent bg-warning-muted text-warning-muted-foreground focus-visible:outline-warning [a&]:hover:bg-warning-muted/80",

        "warning-surface":
          "border-border-warning-faded bg-warning-faded text-warning-accent-foreground focus-visible:outline-warning [a&]:hover:bg-warning-muted/70",

        "warning-faded":
          "border-border-warning-faded bg-warning-faded text-warning-muted-foreground focus-visible:outline-warning [a&]:hover:bg-warning-muted/70",

        "warning-dotted":
          "[&_[data-slot='badge-dot']:not([class*='fill-'])]:fill-warning [&_[data-slot='badge-dot']:not([class*='stroke-'])]:stroke-warning",
      },
    },
    compoundVariants: [
      {
        variant: [
          "outline",
          "dotted",
          "primary-dotted",
          "secondary-dotted",
          "destructive-dotted",
          "success-dotted",
          "warning-dotted",
        ],
        className:
          "border-border bg-transparent text-foreground [a&]:hover:border-border-hover [a&]:hover:bg-muted [a&]:hover:text-accent-foreground",
      },
      {
        variant: [
          "outline",
          "accent",
          "muted",
          "surface",
          "faded",
          "primary-dotted",
          "secondary-dotted",
          "destructive-dotted",
          "success-dotted",
          "warning-dotted",
        ],
        className:
          "[&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-base-500/20",
      },
      {
        variant: [
          "primary-accent",
          "primary-muted",
          "primary-surface",
          "primary-faded",
        ],
        className:
          "[&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-primary-600/20 dark:[&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-primary-400/20",
      },
      {
        variant: [
          "secondary-accent",
          "secondary-muted",
          "secondary-surface",
          "secondary-faded",
        ],
        className:
          "[&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-secondary-600/20 dark:[&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-secondary-400/20",
      },
      {
        variant: [
          "destructive-accent",
          "destructive-muted",
          "destructive-surface",
          "destructive-faded",
        ],
        className:
          "[&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-destructive-600/20 dark:[&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-destructive-400/20",
      },
      {
        variant: [
          "success-accent",
          "success-muted",
          "success-surface",
          "success-faded",
        ],
        className:
          "[&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-success-600/20 dark:[&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-success-400/20",
      },
      {
        variant: [
          "warning-accent",
          "warning-muted",
          "warning-surface",
          "warning-faded",
        ],
        className:
          "[&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-warning-600/20 dark:[&_[data-slot='badge-close']:not([class*='hover:bg-'])]:hover:bg-warning-400/20",
      },
    ],
    defaultVariants: {
      variant: "primary",
    },
  },
);

// Use role="status" when badge is used to reflect a status (i.e., an invoice that is paid, pending, rejected)
function Badge({
  className,
  variant,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), "group/badge", className)}
      {...props}
    >
      {variant?.includes("tron") && (
        <>
          <span
            aria-hidden="true"
            data-slot="tron-wide"
            className="absolute inset-x-0 -top-px block h-[2px] w-full bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/badge:opacity-100 motion-reduce:transition-none"
          />
          <span
            aria-hidden="true"
            data-slot="tron-blur"
            className="absolute -top-px left-[20%] block h-[2px] w-[60%] bg-gradient-to-r from-transparent to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover/badge:opacity-100 motion-reduce:transition-none"
          />
          <span
            aria-hidden="true"
            data-slot="tron-wide"
            className="absolute inset-x-0 -bottom-px block h-[2px] w-full bg-gradient-to-r from-transparent to-transparent opacity-100 transition-opacity duration-300 group-hover/badge:opacity-0 motion-reduce:transition-none"
          />
          <span
            aria-hidden="true"
            data-slot="tron-blur"
            className="absolute -bottom-px left-[20%] block h-[2px] w-[60%] bg-gradient-to-r from-transparent to-transparent opacity-100 blur-sm transition-opacity duration-300 group-hover/badge:opacity-0 motion-reduce:transition-none"
          />
        </>
      )}
      <Slottable>{children}</Slottable>
    </Comp>
  );
}

function BadgeDot({ className, ...props }: LucideProps) {
  return (
    <CircleIcon
      data-slot="badge-dot"
      aria-hidden="true"
      className={cn("size-1.5", className)}
      {...props}
    />
  );
}

function BadgeClose({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="badge-close"
      type="button"
      aria-label={props["aria-label"] || "Remove"}
      className={cn(
        "relative inline-flex size-4 items-center justify-center rounded-xs opacity-70 outline-offset-0 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-current",
        className,
      )}
      {...props}
    >
      <XIcon className="size-3 text-inherit" />
    </button>
  );
}

export { badgeVariants, Badge, BadgeDot, BadgeClose };
