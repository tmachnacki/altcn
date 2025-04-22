import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { CircleIcon, LucideProps, XIcon } from "lucide-react";

import { cn } from "~/lib/utils";

import { Tron } from "~/components/ui/tron";

const badgeVariants = cva(
  [
    "relative isolate inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-xs leading-none font-medium whitespace-nowrap",
    "focus-visible:outline-2 focus-visible:outline-offset-1",
    "[&_svg:not([class*='size-'])]:size-3 [&>svg]:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        // -- base --
        outline: "",

        base: [
          "bg-base-bg text-base-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-base-200)/20%)]",
          "[a&]:hover:bg-base-bg/90",
          "[button&]:hover:bg-base-bg/90",
        ],

        accent: [
          "bg-accent text-accent-foreground",
          "[a&]:hover:bg-base-200 dark:[a&]:hover:bg-base-800",
          "[button&]:hover:bg-base-200 dark:[button&]:hover:bg-base-800",
        ],

        muted: [
          "bg-muted text-muted-foreground",
          "[a&]:hover:bg-accent",
          "[button&]:hover:bg-accent",
        ],

        surface: [
          "bg-faded text-accent-foreground inset-ring inset-ring-border-faded",
          "[a&]:hover:bg-muted",
          "[button&]:hover:bg-muted",
        ],

        faded: [
          "bg-faded text-muted-foreground inset-ring inset-ring-border-faded",
          "[a&]:hover:bg-muted",
          "[button&]:hover:bg-muted",
        ],

        dotted: "[--badge-dot-text:var(--color-muted-foreground)]",

        // -- primary --
        primary: [
          "bg-primary text-primary-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-primary-200)/20%)]",
          "[a&]:hover:bg-primary/90",
          "[button&]:hover:bg-primary/90",
        ],

        "primary-accent": [
          "bg-primary-muted text-primary-accent-foreground",
          "[a&]:hover:bg-primary-muted/80",
          "[button&]:hover:bg-primary-muted/80",
        ],

        "primary-muted": [
          "bg-primary-muted text-primary-muted-foreground",
          "[a&]:hover:bg-primary-muted/80",
          "[button&]:hover:bg-primary-muted/80",
        ],

        "primary-surface": [
          "bg-primary-faded text-primary-accent-foreground inset-ring inset-ring-border-primary-faded",
          "[a&]:hover:bg-primary-muted/80",
          "[button&]:hover:bg-primary-muted/80",
        ],

        "primary-faded": [
          "bg-primary-faded text-primary-muted-foreground inset-ring inset-ring-border-primary-faded",
          "[a&]:hover:bg-primary-muted/80",
          "[button&]:hover:bg-primary-muted/80",
        ],

        "primary-tron": [
          "bg-background bg-[image:var(--primary-tron-bg-gradient)] text-primary-muted-foreground inset-ring inset-ring-border-primary-tron",
          "[--tron-beam:var(--color-primary)] [--tron-blur:var(--color-primary-tron-blur)]",
          "[a&]:hover:bg-[image:var(--hover-primary-tron-bg-gradient)] [a&]:hover:inset-ring-hover-border-primary-tron",
          "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
          "[button&]:hover:bg-[image:var(--hover-primary-tron-bg-gradient)] [button&]:hover:inset-ring-hover-border-primary-tron",
          "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
        ],

        "primary-dotted": "[--badge-dot-text:var(--color-primary)]",

        // -- secondary --
        secondary: [
          "bg-secondary text-secondary-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-secondary-700)/30%)]",
          "[a&]:hover:bg-secondary/90",
          "[button&]:hover:bg-secondary/90",
        ],

        "secondary-accent": [
          "bg-secondary-muted text-secondary-accent-foreground",
          "[a&]:hover:bg-secondary-muted/80",
          "[button&]:hover:bg-secondary-muted/80",
        ],

        "secondary-muted": [
          "bg-secondary-muted text-secondary-muted-foreground",
          "[a&]:hover:bg-secondary-muted/80",
          "[button&]:hover:bg-secondary-muted/80",
        ],

        "secondary-surface": [
          "bg-secondary-faded text-secondary-accent-foreground inset-ring inset-ring-border-secondary-faded",
          "[a&]:hover:bg-secondary-muted/80",
          "[button&]:hover:bg-secondary-muted/80",
        ],

        "secondary-faded": [
          "bg-secondary-faded text-secondary-muted-foreground inset-ring inset-ring-border-secondary-faded",
          "[a&]:hover:bg-secondary-muted/80",
          "[button&]:hover:bg-secondary-muted/80",
        ],

        "secondary-tron": [
          "bg-background bg-[image:var(--secondary-tron-bg-gradient)] text-secondary-muted-foreground inset-ring inset-ring-border-secondary-tron",
          "[--tron-beam:var(--color-secondary)] [--tron-blur:var(--color-secondary-tron-blur)]",
          "[a&]:hover:bg-[image:var(--hover-secondary-tron-bg-gradient)] [a&]:hover:inset-ring-hover-border-secondary-tron",
          "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
          "[button&]:hover:bg-[image:var(--hover-secondary-tron-bg-gradient)] [button&]:hover:inset-ring-hover-border-secondary-tron",
          "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
        ],

        "secondary-dotted": "[--badge-dot-text:var(--color-secondary)]",

        // destructive
        destructive: [
          "bg-destructive text-destructive-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-destructive-100)/40%)]",
          "[a&]:hover:bg-destructive/90",
          "[button&]:hover:bg-destructive/90",
        ],

        "destructive-accent": [
          "bg-destructive-muted text-destructive-accent-foreground",
          "[a&]:hover:bg-destructive-muted/80",
          "[button&]:hover:bg-destructive-muted/80",
        ],

        "destructive-muted": [
          "bg-destructive-muted text-destructive-muted-foreground",
          "[a&]:hover:bg-destructive-muted/80",
          "[button&]:hover:bg-destructive-muted/80",
        ],

        "destructive-surface": [
          "bg-destructive-faded text-destructive-accent-foreground inset-ring inset-ring-border-destructive-faded",
          "[a&]:hover:bg-destructive-muted/80",
          "[button&]:hover:bg-destructive-muted/80",
        ],

        "destructive-faded": [
          "bg-destructive-faded text-destructive-muted-foreground inset-ring inset-ring-border-destructive-faded",
          "[a&]:hover:bg-destructive-muted/80",
          "[button&]:hover:bg-destructive-muted/80",
        ],

        "destructive-tron": [
          "bg-background bg-[image:var(--destructive-tron-bg-gradient)] text-destructive-muted-foreground inset-ring inset-ring-border-destructive-tron",
          "[--tron-beam:var(--color-destructive)] [--tron-blur:var(--color-destructive-tron-blur)]",
          "[a&]:hover:bg-[image:var(--hover-destructive-tron-bg-gradient)] [a&]:hover:inset-ring-hover-border-destructive-tron",
          "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
          "[button&]:hover:bg-[image:var(--hover-destructive-tron-bg-gradient)] [button&]:hover:inset-ring-hover-border-destructive-tron",
          "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
        ],

        "destructive-dotted": "[--badge-dot-text:var(--color-destructive)]",

        // success
        success: [
          "bg-success text-success-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-success-200)/20%)]",
          "[a&]:hover:bg-success/90",
          "[button&]:hover:bg-success/90",
        ],

        "success-accent": [
          "bg-success-muted text-success-accent-foreground",
          "[a&]:hover:bg-success-muted/80",
          "[button&]:hover:bg-success-muted/80",
        ],

        "success-muted": [
          "bg-success-muted text-success-muted-foreground",
          "[a&]:hover:bg-success-muted/80",
          "[button&]:hover:bg-success-muted/80",
        ],

        "success-surface": [
          "bg-success-faded text-success-accent-foreground inset-ring inset-ring-border-success-faded",
          "[a&]:hover:bg-success-muted/80",
          "[button&]:hover:bg-success-muted/80",
        ],

        "success-faded": [
          "bg-success-faded text-success-muted-foreground inset-ring inset-ring-border-success-faded",
          "[a&]:hover:bg-success-muted/80",
          "[button&]:hover:bg-success-muted/80",
        ],

        "success-tron": [
          "bg-background bg-[image:var(--success-tron-bg-gradient)] text-success-muted-foreground inset-ring inset-ring-border-success-tron",
          "[--tron-beam:var(--color-success)] [--tron-blur:var(--color-success-tron-blur)]",
          "[a&]:hover:bg-[image:var(--hover-success-tron-bg-gradient)] [a&]:hover:inset-ring-hover-border-success-tron",
          "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
          "[button&]:hover:bg-[image:var(--hover-success-tron-bg-gradient)] [button&]:hover:inset-ring-hover-border-success-tron",
          "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
        ],

        "success-dotted": "[--badge-dot-text:var(--color-success)]",

        // warning
        warning: [
          "bg-warning text-warning-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-warning-700)/30%)]",
          "[a&]:hover:bg-warning/90",
          "[button&]:hover:bg-warning/90",
        ],

        "warning-accent": [
          "bg-warning-muted text-warning-accent-foreground",
          "[a&]:hover:bg-warning-muted/80",
          "[button&]:hover:bg-warning-muted/80",
        ],

        "warning-muted": [
          "bg-warning-muted text-warning-muted-foreground",
          "[a&]:hover:bg-warning-muted/80",
          "[button&]:hover:bg-warning-muted/80",
        ],

        "warning-surface": [
          "bg-warning-faded text-warning-accent-foreground inset-ring inset-ring-border-warning-faded",
          "[a&]:hover:bg-warning-muted/80",
          "[button&]:hover:bg-warning-muted/80",
        ],

        "warning-faded": [
          "bg-warning-faded text-warning-muted-foreground inset-ring inset-ring-border-warning-faded",
          "[a&]:hover:bg-warning-muted/80",
          "[button&]:hover:bg-warning-muted/80",
        ],

        "warning-tron": [
          "bg-background bg-[image:var(--warning-tron-bg-gradient)] text-warning-muted-foreground inset-ring inset-ring-border-warning-tron",
          "[--tron-beam:var(--color-warning)] [--tron-blur:var(--color-warning-tron-blur)]",
          "[a&]:hover:bg-[image:var(--hover-warning-tron-bg-gradient)] [a&]:hover:inset-ring-hover-border-warning-tron",
          "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
          "[button&]:hover:bg-[image:var(--hover-warning-tron-bg-gradient)] [button&]:hover:inset-ring-hover-border-warning-tron",
          "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
        ],

        "warning-dotted": "[--badge-dot-text:var(--color-warning)]",
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
          "bg-background text-foreground inset-ring inset-ring-border",
          "[a&]:hover:bg-muted [a&]:hover:inset-ring-hover-border",
          "[button&]:hover:bg-muted [button&]:hover:inset-ring-hover-border",
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
        className: "[--hover-badge-close-bg:var(--color-border-faded)]",
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
        className: "outline-primary",
      },
      {
        variant: [
          "primary-accent",
          "primary-muted",
          "primary-surface",
          "primary-faded",
          "primary-tron",
        ],
        className: "[--hover-badge-close-bg:var(--color-border-primary-faded)]",
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
        className: "outline-secondary",
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
          "[--hover-badge-close-bg:var(--color-border-secondary-faded)]",
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
        className: "outline-destructive",
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
          "[--hover-badge-close-bg:var(--color-border-destructive-faded)]",
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
        className: "outline-success",
      },
      {
        variant: [
          "success-accent",
          "success-muted",
          "success-surface",
          "success-faded",
          "success-tron",
        ],
        className: "[--hover-badge-close-bg:var(--color-border-success-faded)]",
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
        className: "outline-warning",
      },
      {
        variant: [
          "warning-accent",
          "warning-muted",
          "warning-surface",
          "warning-faded",
          "warning-tron",
        ],
        className: "[--hover-badge-close-bg:var(--color-border-warning-faded)]",
      },
    ],
    defaultVariants: {
      variant: "primary",
    },
  }
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
  // render as button or link
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
          <Tron
            side="top"
            type="beam"
            className="via-(--tron-beam) opacity-0"
          />
          <Tron
            side="top"
            type="blur"
            className="via-(--tron-blur) opacity-0"
          />
          <Tron
            side="bottom"
            type="beam"
            className="via-(--tron-beam) opacity-100"
          />
          <Tron
            side="bottom"
            type="blur"
            className="via-(--tron-blur) opacity-100"
          />
        </>
      )}
      {variant?.includes("dotted") && <BadgeDot />}
      <Slottable>{children}</Slottable>
    </Comp>
  );
}

function BadgeDot({ className, ...props }: LucideProps) {
  return (
    <CircleIcon
      data-slot="badge-dot"
      aria-hidden="true"
      className={cn(
        "size-1.5 shrink-0 fill-current stroke-current text-(--badge-dot-text)",
        className
      )}
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
        "relative -mx-1 inline-flex size-4 items-center justify-center rounded-xs opacity-70 -outline-offset-1 outline-current hover:bg-(--hover-badge-close-bg) hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2",
        className
      )}
      {...props}
    >
      <XIcon className="size-3 text-current" />
    </button>
  );
}

export { badgeVariants, Badge, BadgeDot, BadgeClose };
