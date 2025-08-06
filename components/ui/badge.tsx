import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";
import { CircleIcon, XIcon } from "lucide-react";

import { cn } from "~/lib/utils";

import { Tron } from "~/components/ui/tron";

const badgeVariants = tv({
  base: [
    "group/badge [a&]:touch-target [button&]:touch-target",
    "relative isolate inline-flex h-[calc(var(--size-2xs)+(var(--spacing)*0.5))] w-fit shrink-0 grow-0 items-center justify-center gap-1.5 px-2 py-1 text-[0.8rem] leading-none font-medium whitespace-nowrap select-none sm:h-(--size-2xs) sm:text-xs",
    "[a&]:active:opacity-80 [button&]:active:opacity-80",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:shadow-none",
    "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
    "focus-visible:outline-2 focus-visible:outline-offset-1",
    "**:[svg]:pointer-events-none **:[svg]:not-[[class*='size-']]:size-(--icon-xs) sm:**:[svg]:not-[[class*='size-']]:size-(--icon-2xs)",
  ],
  variants: {
    shape: {
      box: "rounded-md",
      pill: "rounded-full",
    },
    variant: {
      // -- base --
      outline: "",

      contrast: [
        "bg-contrast text-contrast-foreground",
        "[a&]:hover:bg-hover-contrast",
        "[button&]:hover:bg-hover-contrast",
        "[--hover-badge-close-bg:--alpha(var(--color-contrast-foreground)/20%)]",
      ],

      "contrast-dotted": "[--badge-dot-text:var(--color-contrast)]",

      base: [
        "bg-base-bg text-base-foreground",
        "[a&]:hover:bg-hover-base",
        "[button&]:hover:bg-hover-base",
        "[--hover-badge-close-bg:--alpha(var(--color-base-foreground)/20%)]",
      ],

      accent: [
        "bg-muted text-accent-foreground",
        "[a&]:hover:bg-hover-muted",
        "[button&]:hover:bg-hover-muted",
        "[--hover-badge-close-bg:var(--color-hover-muted))]",
      ],

      muted: [
        "bg-muted text-muted-foreground",
        "[a&]:hover:bg-hover-muted",
        "[button&]:hover:bg-hover-muted",
        "[--hover-badge-close-bg:var(--color-hover-muted))]",
      ],

      surface: [
        "bg-faded text-accent-foreground inset-ring inset-ring-faded-border",
        "[a&]:hover:bg-hover-faded",
        "[button&]:hover:bg-hover-faded",
        "[--hover-badge-close-bg:var(--color-muted))]",
      ],

      faded: [
        "bg-faded text-muted-foreground inset-ring inset-ring-faded-border",
        "[a&]:hover:bg-hover-faded",
        "[button&]:hover:bg-hover-faded",
        "[--hover-badge-close-bg:var(--color-muted))]",
      ],

      "base-gradient": [
        "bg-linear-(--base-gradient) text-base-foreground",
        "[a&]:hover:bg-linear-(--hover-base-gradient)",
        "[button&]:hover:bg-linear-(--hover-base-gradient)",
        "[--hover-badge-close-bg:--alpha(var(--color-base-foreground)/20%)]",
      ],

      dotted: "[--badge-dot-text:var(--color-muted-foreground)]",

      // -- primary --
      primary: [
        "bg-primary text-primary-foreground",
        "[a&]:hover:bg-hover-primary",
        "[button&]:hover:bg-hover-primary",
        "[--hover-badge-close-bg:--alpha(var(--color-primary-foreground)/20%)]",
      ],

      "primary-accent": [
        "bg-primary-muted text-primary-accent-foreground",
        "[a&]:hover:bg-hover-primary-muted",
        "[button&]:hover:bg-hover-primary-muted",
        "[--hover-badge-close-bg:var(--color-hover-primary-muted))]",
      ],

      "primary-muted": [
        "bg-primary-muted text-primary-muted-foreground",
        "[a&]:hover:bg-hover-primary-muted",
        "[button&]:hover:bg-hover-primary-muted",
        "[--hover-badge-close-bg:var(--color-hover-primary-muted))]",
      ],

      "primary-surface": [
        "bg-primary-faded text-primary-accent-foreground inset-ring inset-ring-primary-faded-border",
        "[a&]:hover:bg-hover-primary-faded",
        "[button&]:hover:bg-hover-primary-faded",
        "[--hover-badge-close-bg:var(--color-primary-muted))]",
      ],

      "primary-faded": [
        "bg-primary-faded text-primary-muted-foreground inset-ring inset-ring-primary-faded-border",
        "[a&]:hover:bg-hover-primary-faded",
        "[button&]:hover:bg-hover-primary-faded",
        "[--hover-badge-close-bg:var(--color-primary-muted))]",
      ],

      "primary-tron": [
        "bg-background bg-linear-(--primary-tron-gradient) text-primary-accent-foreground inset-ring inset-ring-primary-tron-border",

        "[--tron-beam:var(--color-primary)] [--tron-blur:var(--color-primary-tron-blur)]",

        "[a&]:hover:bg-linear-(--hover-primary-tron-gradient) [a&]:hover:inset-ring-hover-primary-tron-border",
        "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

        "[button&]:hover:bg-linear-(--hover-primary-tron-gradient) [button&]:hover:inset-ring-hover-primary-tron-border",
        "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

        "[--hover-badge-close-bg:var(--color-primary-muted))]",
      ],

      "primary-gradient": [
        "bg-linear-(--primary-gradient) text-primary-foreground",
        "[a&]:hover:bg-linear-(--hover-primary-gradient)",
        "[button&]:hover:bg-linear-(--hover-primary-gradient)",
        "[--hover-badge-close-bg:--alpha(var(--color-primary-foreground)/20%)]",
      ],

      "primary-dotted": "[--badge-dot-text:var(--color-primary)]",

      // -- secondary --
      secondary: [
        "bg-secondary text-secondary-foreground",
        "[a&]:hover:bg-hover-secondary",
        "[button&]:hover:bg-hover-secondary",
        "[--hover-badge-close-bg:--alpha(var(--color-secondary-foreground)/20%)]",
      ],

      "secondary-accent": [
        "bg-secondary-muted text-secondary-accent-foreground",
        "[a&]:hover:bg-hover-secondary-muted",
        "[button&]:hover:bg-hover-secondary-muted",
        "[--hover-badge-close-bg:var(--color-hover-secondary-muted))]",
      ],

      "secondary-muted": [
        "bg-secondary-muted text-secondary-muted-foreground",
        "[a&]:hover:bg-hover-secondary-muted",
        "[button&]:hover:bg-hover-secondary-muted",
        "[--hover-badge-close-bg:var(--color-hover-secondary-muted))]",
      ],

      "secondary-surface": [
        "bg-secondary-faded text-secondary-accent-foreground inset-ring inset-ring-secondary-faded-border",
        "[a&]:hover:bg-hover-secondary-faded",
        "[button&]:hover:bg-hover-secondary-faded",
        "[--hover-badge-close-bg:var(--color-secondary-muted))]",
      ],

      "secondary-faded": [
        "bg-secondary-faded text-secondary-muted-foreground inset-ring inset-ring-secondary-faded-border",
        "[a&]:hover:bg-hover-secondary-faded",
        "[button&]:hover:bg-hover-secondary-faded",
        "[--hover-badge-close-bg:var(--color-secondary-muted))]",
      ],

      "secondary-tron": [
        "bg-background bg-linear-(--secondary-tron-gradient) text-secondary-accent-foreground inset-ring inset-ring-secondary-tron-border",

        "[--tron-beam:var(--color-secondary)] [--tron-blur:var(--color-secondary-tron-blur)]",

        "[a&]:hover:bg-linear-(--hover-secondary-tron-gradient) [a&]:hover:inset-ring-hover-secondary-tron-border",
        "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

        "[button&]:hover:bg-linear-(--hover-secondary-tron-gradient) [button&]:hover:inset-ring-hover-secondary-tron-border",
        "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

        "[--hover-badge-close-bg:var(--color-secondary-muted))]",
      ],

      "secondary-gradient": [
        "bg-linear-(--secondary-gradient) text-secondary-foreground",
        "[a&]:hover:bg-linear-(--hover-secondary-gradient)",
        "[button&]:hover:bg-linear-(--hover-secondary-gradient)",
        "[--hover-badge-close-bg:--alpha(var(--color-secondary-foreground)/20%)]",
      ],

      "secondary-dotted": "[--badge-dot-text:var(--color-secondary)]",

      // destructive
      destructive: [
        "bg-destructive text-destructive-foreground",
        "[a&]:hover:bg-hover-destructive",
        "[button&]:hover:bg-hover-destructive",
        "[--hover-badge-close-bg:--alpha(var(--color-destructive-foreground)/25%)] dark:[--hover-badge-close-bg:--alpha(var(--color-destructive-foreground)/30%)]",
      ],

      "destructive-accent": [
        "bg-destructive-muted text-destructive-accent-foreground",
        "[a&]:hover:bg-hover-destructive-muted",
        "[button&]:hover:bg-hover-destructive-muted",
        "[--hover-badge-close-bg:var(--color-hover-destructive-muted))]",
      ],

      "destructive-muted": [
        "bg-destructive-muted text-destructive-muted-foreground",
        "[a&]:hover:bg-hover-destructive-muted",
        "[button&]:hover:bg-hover-destructive-muted",
        "[--hover-badge-close-bg:var(--color-hover-destructive-muted))]",
      ],

      "destructive-surface": [
        "bg-destructive-faded text-destructive-accent-foreground inset-ring inset-ring-destructive-faded-border",
        "[a&]:hover:bg-hover-destructive-faded",
        "[button&]:hover:bg-hover-destructive-faded",
        "[--hover-badge-close-bg:var(--color-destructive-muted))]",
      ],

      "destructive-faded": [
        "bg-destructive-faded text-destructive-muted-foreground inset-ring inset-ring-destructive-faded-border",
        "[a&]:hover:bg-hover-destructive-faded",
        "[button&]:hover:bg-hover-destructive-faded",
        "[--hover-badge-close-bg:var(--color-destructive-muted))]",
      ],

      "destructive-tron": [
        "bg-background bg-linear-(--destructive-tron-gradient) text-destructive-accent-foreground inset-ring inset-ring-destructive-tron-border",

        "[--tron-beam:var(--color-destructive)] [--tron-blur:var(--color-destructive-tron-blur)]",

        "[a&]:hover:bg-linear-(--hover-destructive-tron-gradient) [a&]:hover:inset-ring-hover-destructive-tron-border",
        "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

        "[button&]:hover:bg-linear-(--hover-destructive-tron-gradient) [button&]:hover:inset-ring-hover-destructive-tron-border",
        "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

        "[--hover-badge-close-bg:var(--color-destructive-muted))]",
      ],

      "destructive-gradient": [
        "bg-linear-(--destructive-gradient) text-destructive-foreground",
        "[a&]:hover:bg-linear-(--hover-destructive-gradient)",
        "[button&]:hover:bg-linear-(--hover-destructive-gradient)",
        "[--hover-badge-close-bg:--alpha(var(--color-destructive-foreground)/25%)] dark:[--hover-badge-close-bg:--alpha(var(--color-destructive-foreground)/35%)]",
      ],

      "destructive-dotted": "[--badge-dot-text:var(--color-destructive)]",

      // success
      success: [
        "bg-success text-success-foreground",
        "[a&]:hover:bg-hover-success",
        "[button&]:hover:bg-hover-success",
        "[--hover-badge-close-bg:--alpha(var(--color-success-foreground)/20%)]",
      ],

      "success-accent": [
        "bg-success-muted text-success-accent-foreground",
        "[a&]:hover:bg-hover-success-muted",
        "[button&]:hover:bg-hover-success-muted",
        "[--hover-badge-close-bg:var(--color-hover-success-muted))]",
      ],

      "success-muted": [
        "bg-success-muted text-success-muted-foreground",
        "[a&]:hover:bg-hover-success-muted",
        "[button&]:hover:bg-hover-success-muted",
        "[--hover-badge-close-bg:var(--color-hover-success-muted))]",
      ],

      "success-surface": [
        "bg-success-faded text-success-accent-foreground inset-ring inset-ring-success-faded-border",
        "[a&]:hover:bg-hover-success-faded",
        "[button&]:hover:bg-hover-success-faded",
        "[--hover-badge-close-bg:var(--color-success-muted))]",
      ],

      "success-faded": [
        "bg-success-faded text-success-muted-foreground inset-ring inset-ring-success-faded-border",
        "[a&]:hover:bg-hover-success-faded",
        "[button&]:hover:bg-hover-success-faded",
        "[--hover-badge-close-bg:var(--color-success-muted))]",
      ],

      "success-tron": [
        "bg-background bg-linear-(--success-tron-gradient) text-success-accent-foreground inset-ring inset-ring-success-tron-border",

        "[--tron-beam:var(--color-success)] [--tron-blur:var(--color-success-tron-blur)]",

        "[a&]:hover:bg-linear-(--hover-success-tron-gradient) [a&]:hover:inset-ring-hover-success-tron-border",
        "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

        "[button&]:hover:bg-linear-(--hover-success-tron-gradient) [button&]:hover:inset-ring-hover-success-tron-border",
        "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

        "[--hover-badge-close-bg:var(--color-success-muted))]",
      ],

      "success-gradient": [
        "bg-linear-(--success-gradient) text-success-foreground",
        "[a&]:hover:bg-linear-(--hover-success-gradient)",
        "[button&]:hover:bg-linear-(--hover-success-gradient)",
        "[--hover-badge-close-bg:--alpha(var(--color-success-foreground)/20%)]",
      ],

      "success-dotted": "[--badge-dot-text:var(--color-success)]",

      // warning
      warning: [
        "bg-warning text-warning-foreground",
        "[a&]:hover:bg-hover-warning",
        "[button&]:hover:bg-hover-warning",
        "[--hover-badge-close-bg:--alpha(var(--color-warning-foreground)/20%)]",
      ],

      "warning-accent": [
        "bg-warning-muted text-warning-accent-foreground",
        "[a&]:hover:bg-hover-warning-muted",
        "[button&]:hover:bg-hover-warning-muted",
        "[--hover-badge-close-bg:var(--color-hover-warning-muted))]",
      ],

      "warning-muted": [
        "bg-warning-muted text-warning-muted-foreground",
        "[a&]:hover:bg-hover-warning-muted",
        "[button&]:hover:bg-hover-warning-muted",
        "[--hover-badge-close-bg:var(--color-hover-warning-muted))]",
      ],

      "warning-surface": [
        "bg-warning-faded text-warning-accent-foreground inset-ring inset-ring-warning-faded-border",
        "[a&]:hover:bg-hover-warning-faded",
        "[button&]:hover:bg-hover-warning-faded",
        "[--hover-badge-close-bg:var(--color-warning-muted))]",
      ],

      "warning-faded": [
        "bg-warning-faded text-warning-muted-foreground inset-ring inset-ring-warning-faded-border",
        "[a&]:hover:bg-hover-warning-faded",
        "[button&]:hover:bg-hover-warning-faded",
        "[--hover-badge-close-bg:var(--color-warning-muted))]",
      ],

      "warning-tron": [
        "bg-background bg-linear-(--warning-tron-gradient) text-warning-accent-foreground inset-ring inset-ring-warning-tron-border",

        "[--tron-beam:var(--color-warning)] [--tron-blur:var(--color-warning-tron-blur)]",

        "[a&]:hover:bg-linear-(--hover-warning-tron-gradient) [a&]:hover:inset-ring-hover-warning-tron-border",
        "[a&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [a&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [a&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

        "[button&]:hover:bg-linear-(--hover-warning-tron-gradient) [button&]:hover:inset-ring-hover-warning-tron-border",
        "[button&]:hover:*:data-[slot=tron-beam]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-beam]:data-[side=top]:opacity-100 [button&]:hover:*:data-[slot=tron-blur]:data-[side=bottom]:opacity-0 [button&]:hover:*:data-[slot=tron-blur]:data-[side=top]:opacity-100",

        "[--hover-badge-close-bg:var(--color-warning-muted))]",
      ],

      "warning-gradient": [
        "bg-linear-(--warning-gradient) text-warning-foreground",
        "[a&]:hover:bg-linear-(--hover-warning-gradient)",
        "[button&]:hover:bg-linear-(--hover-warning-gradient)",
        "[--hover-badge-close-bg:--alpha(var(--color-warning-foreground)/20%)]",
      ],

      "warning-dotted": "[--badge-dot-text:var(--color-warning)]",
    },
  },
  compoundVariants: [
    {
      variant: [
        "outline",
        "contrast-dotted",
        "dotted",
        "primary-dotted",
        "secondary-dotted",
        "destructive-dotted",
        "success-dotted",
        "warning-dotted",
      ],
      className: [
        "bg-background text-foreground inset-ring inset-ring-border",
        "[a&]:hover:bg-base-50 [a&]:hover:inset-ring-hover-border dark:[a&]:hover:bg-base-900",
        "[button&]:hover:bg-base-50 [button&]:hover:inset-ring-hover-border dark:[button&]:hover:bg-base-900",
        "[--hover-badge-close-bg:var(--color-muted)]",
      ],
    },
    {
      variant: [
        "outline",
        "contrast",
        "contrast-dotted",
        "base",
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
      className: ["outline-outline"],
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
  ],
  defaultVariants: {
    shape: "box",
    variant: "primary",
  },
});

// Use role="status" when badge is used to reflect a reactive status (i.e., an input device that becomes disconnected)
function Badge({
  className,
  shape = "box",
  variant = "primary",
  asChild = false,
  disabled,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
    disabled?: boolean;
  }) {
  // render as button or link
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      data-shape={shape}
      data-disabled={disabled || undefined}
      className={badgeVariants({
        variant,
        shape,
        className,
      })}
      {...props}
    >
      {variant?.includes("tron") && (
        <>
          <Tron
            side="top"
            type="beam"
            data-shape={shape}
            border="inset"
            className="via-(--tron-beam) opacity-0"
          />
          <Tron
            side="top"
            type="blur"
            border="inset"
            className="via-(--tron-blur) opacity-0"
          />
          <Tron
            side="bottom"
            type="beam"
            data-shape={shape}
            border="inset"
            className="via-(--tron-beam) opacity-100"
          />
          <Tron
            side="bottom"
            type="blur"
            border="inset"
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
        "size-2 shrink-0 grow-0 fill-current stroke-current text-(--badge-dot-text) sm:size-1.5",
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
        "touch-target relative -mr-1 inline-flex size-4.5 items-center justify-center rounded-sm opacity-70 -outline-offset-1 outline-current group-data-[shape=pill]/badge:rounded-full sm:size-4",
        "hover:bg-(--hover-badge-close-bg) hover:opacity-100",
        "active:opacity-80",
        "focus-visible:opacity-100 focus-visible:outline-1",
        className
      )}
      {...props}
    >
      <XIcon className="text-current" />
    </button>
  );
}

export { Badge, BadgeDot, BadgeClose, badgeVariants };
