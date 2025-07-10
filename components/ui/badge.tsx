import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { CircleIcon, XIcon } from "lucide-react";

import { cn } from "~/lib/utils";

import { Tron } from "~/components/ui/tron";

const badgeVariants = cva(
  [
    "relative isolate inline-flex h-6 w-fit shrink-0 grow-0 items-center justify-center gap-1.5 rounded-md px-2.5 py-1 text-xs leading-none font-medium whitespace-nowrap",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "**:[svg]:pointer-events-none **:[svg]:not-[[class*='size-']]:size-3",
  ],
  {
    variants: {
      variant: {
        // -- base --
        outline: "",

        base: [
          "bg-base text-base-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-base-200)/20%)]",
          "[a&]:hover:bg-hover-base",
          "[button&]:hover:bg-hover-base",
        ],

        accent: [
          "bg-muted text-accent-foreground",
          "[a&]:hover:bg-hover-muted",
          "[button&]:hover:bg-hover-muted",
        ],

        muted: [
          "bg-muted text-muted-foreground",
          "[a&]:hover:bg-hover-muted",
          "[button&]:hover:bg-hover-muted",
        ],

        surface: [
          "bg-faded text-accent-foreground inset-ring inset-ring-border-faded",
          "[a&]:hover:bg-hover-faded",
          "[button&]:hover:bg-hover-faded",
        ],

        faded: [
          "bg-faded text-muted-foreground inset-ring inset-ring-border-faded",
          "[a&]:hover:bg-hover-faded",
          "[button&]:hover:bg-hover-faded",
        ],

        "base-gradient": [
          "bg-linear-(--base-gradient) text-base-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-base-200)/20%)]",
          "[a&]:hover:bg-linear-(--hover-base-gradient)",
          "[button&]:hover:bg-linear-(--hover-base-gradient)",
        ],

        dotted: "[--badge-dot-text:var(--color-muted-foreground)]",

        // -- primary --
        primary: [
          "bg-primary text-primary-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-primary-200)/20%)]",
          "[a&]:hover:bg-hover-primary",
          "[button&]:hover:bg-hover-primary",
        ],

        "primary-accent": [
          "bg-primary-muted text-primary-accent-foreground",
          "[a&]:hover:bg-hover-primary-muted",
          "[button&]:hover:bg-hover-primary-muted",
        ],

        "primary-muted": [
          "bg-primary-muted text-primary-muted-foreground",
          "[a&]:hover:bg-hover-primary-muted",
          "[button&]:hover:bg-hover-primary-muted",
        ],

        "primary-surface": [
          "bg-primary-faded text-primary-accent-foreground inset-ring inset-ring-primary-border-faded",
          "[a&]:hover:bg-hover-primary-faded",
          "[button&]:hover:bg-hover-primary-faded",
        ],

        "primary-faded": [
          "bg-primary-faded text-primary-muted-foreground inset-ring inset-ring-primary-border-faded",
          "[a&]:hover:bg-hover-primary-faded",
          "[button&]:hover:bg-hover-primary-faded",
        ],

        "primary-tron": [
          "bg-background bg-linear-(--primary-tron-gradient) text-primary-muted-foreground inset-ring inset-ring-primary-border-tron",

          "[--tron-beam:var(--color-primary)] [--tron-blur:var(--color-primary-tron-blur)]",

          "[a&]:hover:bg-linear-(--hover-primary-tron-gradient) [a&]:hover:inset-ring-hover-primary-border-tron",
          "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

          "[button&]:hover:bg-linear-(--hover-primary-tron-gradient) [button&]:hover:inset-ring-hover-primary-border-tron",
          "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
        ],

        "primary-gradient": [
          "bg-linear-(--primary-gradient) text-primary-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-primary-200)/20%)]",
          "[a&]:hover:bg-linear-(--hover-primary-gradient)",
          "[button&]:hover:bg-linear-(--hover-primary-gradient)",
        ],

        "primary-dotted": "[--badge-dot-text:var(--color-primary)]",

        // -- secondary --
        secondary: [
          "bg-secondary text-secondary-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-secondary-700)/30%)]",
          "[a&]:hover:bg-hover-secondary",
          "[button&]:hover:bg-hover-secondary",
        ],

        "secondary-accent": [
          "bg-secondary-muted text-secondary-accent-foreground",
          "[a&]:hover:bg-hover-secondary-muted",
          "[button&]:hover:bg-hover-secondary-muted",
        ],

        "secondary-muted": [
          "bg-secondary-muted text-secondary-muted-foreground",
          "[a&]:hover:bg-hover-secondary-muted",
          "[button&]:hover:bg-hover-secondary-muted",
        ],

        "secondary-surface": [
          "bg-secondary-faded text-secondary-accent-foreground inset-ring inset-ring-secondary-border-faded",
          "[a&]:hover:bg-hover-secondary-faded",
          "[button&]:hover:bg-hover-secondary-faded",
        ],

        "secondary-faded": [
          "bg-secondary-faded text-secondary-muted-foreground inset-ring inset-ring-secondary-border-faded",
          "[a&]:hover:bg-hover-secondary-faded",
          "[button&]:hover:bg-hover-secondary-faded",
        ],

        "secondary-tron": [
          "bg-background bg-linear-(--secondary-tron-gradient) text-secondary-muted-foreground inset-ring inset-ring-secondary-border-tron",

          "[--tron-beam:var(--color-secondary)] [--tron-blur:var(--color-secondary-tron-blur)]",

          "[a&]:hover:bg-linear-(--hover-secondary-tron-gradient) [a&]:hover:inset-ring-hover-secondary-border-tron",
          "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

          "[button&]:hover:bg-linear-(--hover-secondary-tron-gradient) [button&]:hover:inset-ring-hover-secondary-border-tron",
          "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
        ],

        "secondary-gradient": [
          "bg-linear-(--secondary-gradient) text-secondary-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-secondary-700)/30%)]",
          "[a&]:hover:bg-linear-(--hover-secondary-gradient)",
          "[button&]:hover:bg-linear-(--hover-secondary-gradient)",
        ],

        "secondary-dotted": "[--badge-dot-text:var(--color-secondary)]",

        // destructive
        destructive: [
          "bg-destructive text-destructive-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-destructive-100)/40%)]",
          "[a&]:hover:bg-hover-destructive",
          "[button&]:hover:bg-hover-destructive",
        ],

        "destructive-accent": [
          "bg-destructive-muted text-destructive-accent-foreground",
          "[a&]:hover:bg-hover-destructive-muted",
          "[button&]:hover:bg-hover-destructive-muted",
        ],

        "destructive-muted": [
          "bg-destructive-muted text-destructive-muted-foreground",
          "[a&]:hover:bg-hover-destructive-muted",
          "[button&]:hover:bg-hover-destructive-muted",
        ],

        "destructive-surface": [
          "bg-destructive-faded text-destructive-accent-foreground inset-ring inset-ring-destructive-border-faded",
          "[a&]:hover:bg-hover-destructive-faded",
          "[button&]:hover:bg-hover-destructive-faded",
        ],

        "destructive-faded": [
          "bg-destructive-faded text-destructive-muted-foreground inset-ring inset-ring-destructive-border-faded",
          "[a&]:hover:bg-hover-destructive-faded",
          "[button&]:hover:bg-hover-destructive-faded",
        ],

        "destructive-tron": [
          "bg-background bg-linear-(--destructive-tron-gradient) text-destructive-muted-foreground inset-ring inset-ring-destructive-border-tron",

          "[--tron-beam:var(--color-destructive)] [--tron-blur:var(--color-destructive-tron-blur)]",

          "[a&]:hover:bg-linear-(--hover-destructive-tron-gradient) [a&]:hover:inset-ring-hover-destructive-border-tron",
          "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

          "[button&]:hover:bg-linear-(--hover-destructive-tron-gradient) [button&]:hover:inset-ring-hover-destructive-border-tron",
          "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
        ],

        "destructive-gradient": [
          "bg-linear-(--destructive-gradient) text-destructive-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-destructive-100)/40%)]",
          "[a&]:hover:bg-linear-(--hover-destructive-gradient)",
          "[button&]:hover:bg-linear-(--hover-destructive-gradient)",
        ],

        "destructive-dotted": "[--badge-dot-text:var(--color-destructive)]",

        // success
        success: [
          "bg-success text-success-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-success-200)/20%)]",
          "[a&]:hover:bg-hover-success",
          "[button&]:hover:bg-hover-success",
        ],

        "success-accent": [
          "bg-success-muted text-success-accent-foreground",
          "[a&]:hover:bg-hover-success-muted",
          "[button&]:hover:bg-hover-success-muted",
        ],

        "success-muted": [
          "bg-success-muted text-success-muted-foreground",
          "[a&]:hover:bg-hover-success-muted",
          "[button&]:hover:bg-hover-success-muted",
        ],

        "success-surface": [
          "bg-success-faded text-success-accent-foreground inset-ring inset-ring-success-border-faded",
          "[a&]:hover:bg-hover-success-faded",
          "[button&]:hover:bg-hover-success-faded",
        ],

        "success-faded": [
          "bg-success-faded text-success-muted-foreground inset-ring inset-ring-success-border-faded",
          "[a&]:hover:bg-hover-success-faded",
          "[button&]:hover:bg-hover-success-faded",
        ],

        "success-tron": [
          "bg-background bg-linear-(--success-tron-gradient) text-success-muted-foreground inset-ring inset-ring-success-border-tron",

          "[--tron-beam:var(--color-success)] [--tron-blur:var(--color-success-tron-blur)]",

          "[a&]:hover:bg-linear-(--hover-success-tron-gradient) [a&]:hover:inset-ring-hover-success-border-tron",
          "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

          "[button&]:hover:bg-linear-(--hover-success-tron-gradient) [button&]:hover:inset-ring-hover-success-border-tron",
          "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
        ],

        "success-gradient": [
          "bg-linear-(--success-gradient) text-success-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-success-200)/20%)]",
          "[a&]:hover:bg-linear-(--hover-success-gradient)",
          "[button&]:hover:bg-linear-(--hover-success-gradient)",
        ],

        "success-dotted": "[--badge-dot-text:var(--color-success)]",

        // warning
        warning: [
          "bg-warning text-warning-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-warning-700)/30%)]",
          "[a&]:hover:bg-hover-warning",
          "[button&]:hover:bg-hover-warning",
        ],

        "warning-accent": [
          "bg-warning-muted text-warning-accent-foreground",
          "[a&]:hover:bg-hover-warning-muted",
          "[button&]:hover:bg-hover-warning-muted",
        ],

        "warning-muted": [
          "bg-warning-muted text-warning-muted-foreground",
          "[a&]:hover:bg-hover-warning-muted",
          "[button&]:hover:bg-hover-warning-muted",
        ],

        "warning-surface": [
          "bg-warning-faded text-warning-accent-foreground inset-ring inset-ring-warning-border-faded",
          "[a&]:hover:bg-hover-warning-faded",
          "[button&]:hover:bg-hover-warning-faded",
        ],

        "warning-faded": [
          "bg-warning-faded text-warning-muted-foreground inset-ring inset-ring-warning-border-faded",
          "[a&]:hover:bg-hover-warning-faded",
          "[button&]:hover:bg-hover-warning-faded",
        ],

        "warning-tron": [
          "bg-background bg-linear-(--warning-tron-gradient) text-warning-muted-foreground inset-ring inset-ring-warning-border-tron",

          "[--tron-beam:var(--color-warning)] [--tron-blur:var(--color-warning-tron-blur)]",

          "[a&]:hover:bg-linear-(--hover-warning-tron-gradient) [a&]:hover:inset-ring-hover-warning-border-tron",
          "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

          "[button&]:hover:bg-linear-(--hover-warning-tron-gradient) [button&]:hover:inset-ring-hover-warning-border-tron",
          "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",
        ],

        "warning-gradient": [
          "bg-linear-(--warning-gradient) text-warning-foreground",
          "[--hover-badge-close-bg:--alpha(var(--color-warning-700)/30%)]",
          "[a&]:hover:bg-linear-(--hover-warning-gradient)",
          "[button&]:hover:bg-linear-(--hover-warning-gradient)",
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
          "[a&]:hover:bg-faded [a&]:hover:inset-ring-hover-border",
          "[button&]:hover:bg-faded [button&]:hover:inset-ring-hover-border",
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
          "primary-gradient",
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
        className: "[--hover-badge-close-bg:var(--color-primary-border-faded)]",
      },
      {
        variant: [
          "secondary",
          "secondary-accent",
          "secondary-muted",
          "secondary-surface",
          "secondary-faded",
          "secondary-tron",
          "secondary-gradient",
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
          "[--hover-badge-close-bg:var(--color-secondary-border-faded)]",
      },
      {
        variant: [
          "destructive",
          "destructive-accent",
          "destructive-muted",
          "destructive-surface",
          "destructive-faded",
          "destructive-tron",
          "destructive-gradient",
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
          "[--hover-badge-close-bg:var(--color-destructive-border-faded)]",
      },
      {
        variant: [
          "success",
          "success-accent",
          "success-muted",
          "success-surface",
          "success-faded",
          "success-tron",
          "success-gradient",
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
        className: "[--hover-badge-close-bg:var(--color-success-border-faded)]",
      },
      {
        variant: [
          "warning",
          "warning-accent",
          "warning-muted",
          "warning-surface",
          "warning-faded",
          "warning-tron",
          "warning-gradient",
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
        className: "[--hover-badge-close-bg:var(--color-warning-border-faded)]",
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

function BadgeDot({ className, ...props }: React.ComponentProps<"svg">) {
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
      aria-label={"Remove"}
      className={cn(
        "touch-target relative -mr-1 inline-flex size-4 items-center justify-center rounded-sm opacity-70 -outline-offset-1 outline-current hover:bg-(--hover-badge-close-bg) hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-1",
        className
      )}
      {...props}
    >
      <XIcon className="size-3 text-current" />
    </button>
  );
}

export { badgeVariants, Badge, BadgeDot, BadgeClose };
