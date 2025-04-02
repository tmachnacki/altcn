import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { XIcon, CircleIcon, LucideProps } from "lucide-react";

import { cn } from "@/lib/utils";

// TODO: better close colors
const badgeVariants = cva(
  [
    "relative isolate inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-xs leading-none font-medium whitespace-nowrap has-[[data-slot='badge-close']]:pr-1",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "[&_svg:not([class*='size-'])]:size-3 [&>svg]:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        // -- base --
        outline: "",

        base: [
          "bg-base-600 text-base-50",
          "**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-base-200/20",
          "[a&]:hover:bg-base-600/90",
        ],

        accent: [
          "bg-accent text-accent-foreground",
          "[a&]:hover:bg-base-200 dark:[a&]:hover:bg-base-800",
        ],

        muted: ["bg-muted text-muted-foreground", "[a&]:hover:bg-accent"],

        surface: [
          "bg-faded text-accent-foreground inset-ring inset-ring-border-faded",
          "[a&]:hover:bg-muted",
        ],

        faded: [
          "bg-faded text-muted-foreground inset-ring inset-ring-border-faded",
          "[a&]:hover:bg-muted",
        ],

        dotted:
          "**:data-[slot=badge-dot]:not-[[class*='text-']]:text-muted-foreground",

        // -- primary --
        primary: [
          "bg-primary text-primary-foreground",
          "**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-primary-200/20",
          "[a&]:hover:bg-primary/90",
        ],

        "primary-accent": [
          "bg-primary-muted text-primary-accent-foreground",
          "[a&]:hover:bg-primary-muted/80",
        ],

        "primary-muted": [
          "bg-primary-muted text-primary-muted-foreground",
          "[a&]:hover:bg-primary-muted/80",
        ],

        "primary-surface": [
          "bg-primary-faded text-primary-accent-foreground inset-ring inset-ring-border-primary-faded",
          "[a&]:hover:bg-primary-muted/80",
        ],

        "primary-faded": [
          "bg-primary-faded text-primary-muted-foreground inset-ring inset-ring-border-primary-faded",
          "[a&]:hover:bg-primary-muted/80",
        ],

        "primary-tron": [
          "bg-background bg-gradient-to-t from-primary/15 to-transparent text-primary-muted-foreground inset-ring inset-ring-primary/30",
          "*:data-[slot=tron-blur]:via-primary-tron-blur *:data-[slot=tron-wide]:via-primary",
          "[a&]:hover:bg-gradient-to-b [a&]:hover:from-primary/20 [a&]:hover:to-primary/[7%] [a&]:hover:inset-ring-primary/50 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-wide]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-wide]:data-[side=top]:opacity-100",
        ],

        "primary-dotted":
          "**:data-[slot=badge-dot]:not-[[class*='text-']]:text-primary",

        // -- secondary --
        secondary: [
          "bg-secondary text-secondary-foreground",
          "**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-secondary-700/30 dark:**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-secondary-800/30",
          "[a&]:hover:bg-secondary/90",
        ],

        "secondary-accent": [
          "bg-secondary-muted text-secondary-accent-foreground",
          "[a&]:hover:bg-secondary-muted/80",
        ],

        "secondary-muted": [
          "bg-secondary-muted text-secondary-muted-foreground",
          "[a&]:hover:bg-secondary-muted/80",
        ],

        "secondary-surface": [
          "bg-secondary-faded text-secondary-accent-foreground inset-ring inset-ring-border-secondary-faded",
          "[a&]:hover:bg-secondary-muted/80",
        ],

        "secondary-faded": [
          "bg-secondary-faded text-secondary-muted-foreground inset-ring inset-ring-border-secondary-faded",
          "[a&]:hover:bg-secondary-muted/80",
        ],

        "secondary-tron": [
          "bg-background bg-gradient-to-t from-secondary/10 to-transparent text-secondary-muted-foreground inset-ring inset-ring-secondary/30",
          "*:data-[slot=tron-blur]:via-secondary-tron-blur *:data-[slot=tron-wide]:via-secondary",
          "[a&]:hover:bg-gradient-to-b [a&]:hover:from-secondary/20 [a&]:hover:to-secondary/[7%] [a&]:hover:inset-ring-secondary/50 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-wide]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-wide]:data-[side=top]:opacity-100",
        ],

        "secondary-dotted":
          "**:data-[slot=badge-dot]:not-[[class*='text-']]:text-secondary",

        // destructive
        destructive: [
          "bg-destructive text-destructive-foreground",
          "**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-destructive-100/30 dark:**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-destructive-100/40",
          "[a&]:hover:bg-destructive/90",
        ],

        "destructive-accent": [
          "bg-destructive-muted text-destructive-accent-foreground",
          "[a&]:hover:bg-destructive-muted/80",
        ],

        "destructive-muted": [
          "bg-destructive-muted text-destructive-muted-foreground",
          "[a&]:hover:bg-destructive-muted/80",
        ],

        "destructive-surface": [
          "bg-destructive-faded text-destructive-accent-foreground inset-ring inset-ring-border-destructive-faded",
          "[a&]:hover:bg-destructive-muted/80",
        ],

        "destructive-faded": [
          "bg-destructive-faded text-destructive-muted-foreground inset-ring inset-ring-border-destructive-faded",
          "[a&]:hover:bg-destructive-muted/80",
        ],

        "destructive-tron": [
          "bg-background bg-gradient-to-t from-destructive/10 to-transparent text-destructive-muted-foreground inset-ring inset-ring-destructive/30",
          "*:data-[slot=tron-blur]:via-destructive-tron-blur *:data-[slot=tron-wide]:via-destructive",
          "[a&]:hover:bg-gradient-to-b [a&]:hover:from-destructive/20 [a&]:hover:to-destructive/[7%] [a&]:hover:inset-ring-destructive/50 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-wide]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-wide]:data-[side=top]:opacity-100",
        ],

        "destructive-dotted":
          "**:data-[slot=badge-dot]:not-[[class*='text-']]:text-destructive",

        // success
        success: [
          "bg-success text-success-foreground",
          "**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-success-300/20",
          "[a&]:hover:bg-success/90",
        ],

        "success-accent": [
          "bg-success-muted text-success-accent-foreground",
          "[a&]:hover:bg-success-muted/80",
        ],

        "success-muted": [
          "bg-success-muted text-success-muted-foreground",
          "[a&]:hover:bg-success-muted/80",
        ],

        "success-surface": [
          "bg-success-faded text-success-accent-foreground inset-ring inset-ring-border-success-faded",
          "[a&]:hover:bg-success-muted/80",
        ],

        "success-faded": [
          "bg-success-faded text-success-muted-foreground inset-ring inset-ring-border-success-faded",
          "[a&]:hover:bg-success-muted/80",
        ],

        "success-tron": [
          "bg-background bg-gradient-to-t from-success/10 to-transparent text-success-muted-foreground inset-ring inset-ring-success/30",
          "*:data-[slot=tron-blur]:via-success-tron-blur *:data-[slot=tron-wide]:via-success",
          "[a&]:hover:bg-gradient-to-b [a&]:hover:from-success/20 [a&]:hover:to-success/[7%] [a&]:hover:inset-ring-success/50 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-wide]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-wide]:data-[side=top]:opacity-100",
        ],

        "success-dotted":
          "**:data-[slot=badge-dot]:not-[[class*='text-']]:text-success",

        // warning
        warning: [
          "bg-warning text-warning-foreground",
          "**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-warning-700/30",
          "[a&]:hover:bg-warning/90",
        ],

        "warning-accent": [
          "bg-warning-muted text-warning-accent-foreground",
          "[a&]:hover:bg-warning-muted/80",
        ],

        "warning-muted": [
          "bg-warning-muted text-warning-muted-foreground",
          "[a&]:hover:bg-warning-muted/80",
        ],

        "warning-surface": [
          "bg-warning-faded text-warning-accent-foreground inset-ring inset-ring-border-warning-faded",
          "[a&]:hover:bg-warning-muted/80",
        ],

        "warning-faded": [
          "bg-warning-faded text-warning-muted-foreground inset-ring inset-ring-border-warning-faded",
          "[a&]:hover:bg-warning-muted/80",
        ],

        "warning-tron": [
          "bg-background bg-gradient-to-t from-warning/10 to-transparent text-warning-muted-foreground inset-ring inset-ring-warning/30",
          "*:data-[slot=tron-blur]:via-warning-tron-blur *:data-[slot=tron-wide]:via-warning",
          "[a&]:hover:bg-gradient-to-b [a&]:hover:from-warning/20 [a&]:hover:to-warning/[7%] [a&]:hover:inset-ring-warning/50 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-wide]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-wide]:data-[side=top]:opacity-100",
        ],

        "warning-dotted":
          "**:data-[slot=badge-dot]:not-[[class*='text-']]:text-warning",
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
        className: [
          "bg-transparent text-foreground inset-ring inset-ring-border",
          "[a&]:hover:bg-muted [a&]:hover:text-accent-foreground [a&]:hover:inset-ring-border-hover",
        ],
      },
      {
        variant: [
          "outline",
          "accent",
          "muted",
          "surface",
          "faded",
          "dotted",
          "primary-dotted",
          "secondary-dotted",
          "destructive-dotted",
          "success-dotted",
          "warning-dotted",
        ],
        className:
          "**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-base-500/20",
      },
      {
        variant: [
          "primary",
          "primary-accent",
          "primary-muted",
          "primary-surface",
          "primary-faded",
          "primary-tron",
        ],
        className: "focus-visible:outline-primary",
      },
      {
        variant: [
          "primary-accent",
          "primary-muted",
          "primary-surface",
          "primary-faded",
          "primary-tron",
        ],
        className:
          "**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-primary-600/20 dark:**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-primary-400/20",
      },
      {
        variant: [
          "secondary",
          "secondary-accent",
          "secondary-muted",
          "secondary-surface",
          "secondary-faded",
          "secondary-tron",
        ],
        className: "focus-visible:outline-secondary",
      },
      {
        variant: [
          "secondary-accent",
          "secondary-muted",
          "secondary-surface",
          "secondary-faded",
          "secondary-tron",
        ],
        className:
          "**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-secondary-600/20 dark:**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-secondary-400/20",
      },
      {
        variant: [
          "destructive",
          "destructive-accent",
          "destructive-muted",
          "destructive-surface",
          "destructive-faded",
          "destructive-tron",
        ],
        className: "focus-visible:outline-destructive",
      },
      {
        variant: [
          "destructive-accent",
          "destructive-muted",
          "destructive-surface",
          "destructive-faded",
          "destructive-tron",
        ],
        className:
          "**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-destructive-600/20 dark:**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-destructive-400/20",
      },
      {
        variant: [
          "success",
          "success-accent",
          "success-muted",
          "success-surface",
          "success-faded",
          "success-tron",
        ],
        className: "focus-visible:outline-success",
      },
      {
        variant: [
          "success-accent",
          "success-muted",
          "success-surface",
          "success-faded",
          "success-tron",
        ],
        className:
          "**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-success-600/20 dark:**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-success-400/20",
      },
      {
        variant: [
          "warning",
          "warning-accent",
          "warning-muted",
          "warning-surface",
          "warning-faded",
          "warning-tron",
        ],
        className: "focus-visible:outline-warning",
      },
      {
        variant: [
          "warning-accent",
          "warning-muted",
          "warning-surface",
          "warning-faded",
          "warning-tron",
        ],
        className:
          "**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-warning-600/20 dark:**:data-[slot=badge-close]:not-[[class*='hover:bg-']]:hover:bg-warning-400/20",
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
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {variant?.includes("tron") && (
        <>
          <span
            aria-hidden="true"
            data-slot="tron-wide"
            data-side="top"
            className="absolute top-0 left-[5%] block h-px w-[90%] bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 motion-reduce:transition-none"
          />
          <span
            aria-hidden="true"
            data-slot="tron-blur"
            data-side="top"
            className="absolute top-0 left-[20%] block h-px w-[60%] bg-gradient-to-r from-transparent to-transparent opacity-0 blur-sm transition-opacity duration-300 motion-reduce:transition-none"
          />
          <span
            aria-hidden="true"
            data-slot="tron-wide"
            data-side="bottom"
            className="absolute bottom-0 left-[5%] block h-px w-[90%] bg-gradient-to-r from-transparent to-transparent opacity-100 transition-opacity duration-300 motion-reduce:transition-none"
          />
          <span
            aria-hidden="true"
            data-slot="tron-blur"
            data-side="bottom"
            className="absolute bottom-0 left-[20%] block h-px w-[60%] bg-gradient-to-r from-transparent to-transparent opacity-100 blur-sm transition-opacity duration-300 motion-reduce:transition-none"
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
      className={cn("size-1.5 fill-current stroke-current", className)}
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
      <XIcon className="size-3 text-current" />
    </button>
  );
}

export { badgeVariants, Badge, BadgeDot, BadgeClose };
