import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { XIcon, CircleIcon, LucideProps } from "lucide-react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-xs leading-none font-medium whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 has-[[data-slot='badge-close']]:pr-1 [&_svg:not([class*='size-'])]:size-3 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        // base
        accent:
          "bg-accent text-accent-foreground [a&]:hover:bg-base-200 dark:[a&]:hover:bg-base-800",
        outline: "",
        muted: "bg-muted text-muted-foreground [a&]:hover:bg-accent",
        faded:
          "bg-faded text-muted-foreground inset-ring inset-ring-border-faded [a&]:hover:bg-muted",
        dotted: "",

        // primary
        primary:
          "bg-primary text-primary-foreground focus-visible:outline-primary [a&]:hover:bg-primary/90",
        "primary-muted":
          "bg-primary-muted text-primary-muted-foreground focus-visible:outline-primary [a&]:hover:bg-primary-muted/80",
        "primary-faded":
          "bg-primary-faded text-primary-muted-foreground inset-ring inset-ring-border-primary-faded focus-visible:outline-primary [a&]:hover:bg-primary-muted/70",
        "primary-dotted": "",

        // secondary
        secondary:
          "bg-secondary text-secondary-foreground focus-visible:outline-secondary [a&]:hover:bg-secondary/90",
        "secondary-muted":
          "bg-secondary-muted text-secondary-muted-foreground focus-visible:outline-secondary [a&]:hover:bg-secondary-muted/80",
        "secondary-faded":
          "bg-secondary-faded text-secondary-muted-foreground inset-ring inset-ring-border-secondary-faded focus-visible:outline-secondary [a&]:hover:bg-secondary-muted/70",
        "secondary-dotted": "",

        // destructive
        destructive:
          "bg-destructive text-destructive-foreground focus-visible:outline-destructive [a&]:hover:bg-destructive/90",
        "destructive-muted":
          "bg-destructive-muted text-destructive-muted-foreground focus-visible:outline-destructive [a&]:hover:bg-destructive-muted/80",
        "destructive-faded":
          "bg-destructive-faded text-destructive-muted-foreground inset-ring inset-ring-border-destructive-faded focus-visible:outline-destructive [a&]:hover:bg-destructive-muted/70",
        "destructive-dotted": "",

        // success
        success:
          "bg-success text-success-foreground focus-visible:outline-success [a&]:hover:bg-success/90",
        "success-muted":
          "bg-success-muted text-success-muted-foreground focus-visible:outline-success [a&]:hover:bg-success-muted/80",
        "success-faded":
          "bg-success-faded text-success-muted-foreground inset-ring inset-ring-border-success-faded focus-visible:outline-success [a&]:hover:bg-success-muted/70",
        "success-dotted": "",

        // warning
        warning:
          "bg-warning text-warning-foreground focus-visible:outline-warning [a&]:hover:bg-warning/90",
        "warning-muted":
          "bg-warning-muted text-warning-muted-foreground focus-visible:outline-warning [a&]:hover:bg-warning-muted/80",
        "warning-faded":
          "bg-warning-faded text-warning-muted-foreground inset-ring inset-ring-border-warning-faded focus-visible:outline-warning [a&]:hover:bg-warning-muted/70",
        "warning-dotted": "",
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
          "bg-transparent text-foreground inset-ring inset-ring-border [a&]:hover:bg-muted [a&]:hover:text-accent-foreground [a&]:hover:inset-ring-border-hover",
      },
    ],
    defaultVariants: {
      variant: "primary",
    },
  },
);

// Use role="status" when badge is used to reflect such an application state (i.e., an invoice that is paid, pending, rejected)
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
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

const badgeDotVariants = [
  "group-data-[variant=dotted]/badge:fill-muted-foreground group-data-[variant=dotted]/badge:stroke-muted-foreground",
  "group-data-[variant=primary-dotted]/badge:fill-primary group-data-[variant=primary-dotted]/badge:stroke-primary",
  "group-data-[variant=secondary-dotted]/badge:fill-secondary group-data-[variant=secondary-dotted]/badge:stroke-secondary",
  "group-data-[variant=destructive-dotted]/badge:fill-destructive group-data-[variant=destructive-dotted]/badge:stroke-destructive",
  "group-data-[variant=success-dotted]/badge:fill-success group-data-[variant=success-dotted]/badge:stroke-success",
  "group-data-[variant=warning-dotted]/badge:fill-warning group-data-[variant=warning-dotted]/badge:stroke-warning",
];

function BadgeDot({ className, ...props }: LucideProps) {
  return (
    <CircleIcon
      data-slot="badge-dot"
      aria-hidden="true"
      className={cn(badgeDotVariants, "size-1.5", className)}
      {...props}
    />
  );
}

const badgeCloseVariants = [
  "group-data-[variant=accent]/badge:hover:bg-base-500/20",
  "group-data-[variant=outline]/badge:hover:bg-base-500/20",
  "group-data-[variant=muted]/badge:hover:bg-base-500/20",
  "group-data-[variant=faded]/badge:hover:bg-base-500/20",
  "group-data-[variant=primary]/badge:hover:bg-primary-300/20",
  "group-data-[variant=primary-muted]/badge:hover:bg-primary-600/20 dark:group-data-[variant=primary-muted]/badge:hover:bg-primary-400/20",
  "group-data-[variant=primary-faded]/badge:hover:bg-primary-600/20 dark:group-data-[variant=primary-faded]/badge:hover:bg-primary-400/20",
  "group-data-[variant=secondary]/badge:hover:bg-secondary-700/20",
  "group-data-[variant=secondary-muted]/badge:hover:bg-secondary-600/20 dark:group-data-[variant=secondary-muted]/badge:hover:bg-secondary-400/20",
  "group-data-[variant=secondary-faded]/badge:hover:bg-secondary-600/20 dark:group-data-[variant=secondary-faded]/badge:hover:bg-secondary-400/20",
  "group-data-[variant=destructive]/badge:hover:bg-destructive-50/20",
  "group-data-[variant=destructive-muted]/badge:hover:bg-destructive-600/20 dark:group-data-[variant=destructive-muted]/badge:hover:bg-destructive-400/20",
  "group-data-[variant=destructive-faded]/badge:hover:bg-destructive-600/20 dark:group-data-[variant=destructive-faded]/badge:hover:bg-destructive-400/20",
  "group-data-[variant=success]/badge:hover:bg-success-300/20",
  "group-data-[variant=success-muted]/badge:hover:bg-success-600/20 dark:group-data-[variant=success-muted]/badge:hover:bg-success-400/20",
  "group-data-[variant=success-faded]/badge:hover:bg-success-600/20 dark:group-data-[variant=success-faded]/badge:hover:bg-success-400/20",
  "group-data-[variant=warning]/badge:hover:bg-warning-700/20",
  "group-data-[variant=warning-muted]/badge:hover:bg-warning-600/20 dark:group-data-[variant=warning-muted]/badge:hover:bg-warning-400/20",
  "group-data-[variant=warning-faded]/badge:hover:bg-warning-600/20 dark:group-data-[variant=warning-faded]/badge:hover:bg-warning-400/20",
];

function BadgeClose({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="badge-close"
      type="button"
      aria-label={props["aria-label"] || "Remove"}
      className={cn(
        badgeCloseVariants,
        "group/badge-close relative inline-flex size-4 items-center justify-center rounded-xs opacity-70 outline-offset-0 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-current",
        className,
      )}
      {...props}
    >
      <XIcon className="size-3 text-inherit" />
    </button>
  );
}

export { badgeVariants, Badge, BadgeDot, BadgeClose };
