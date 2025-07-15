import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";

import { Tron } from "~/components/ui/tron";

const buttonVariants = tv({
  base: [
    "touch-target relative isolate inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold whitespace-nowrap select-none",
    "active:opacity-80",
    "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-disabled:shadow-none",
    "outline-offset-2 focus-visible:outline-2",
    "**:[svg]:pointer-events-none **:[svg]:shrink-0 **:[svg]:grow-0",
  ],
  variants: {
    variant: {
      // --- base ---
      outline: [
        "border border-border bg-background text-foreground shadow-xs",
        "hover:border-hover-border hover:bg-base-50 dark:hover:bg-base-900",
      ],

      base: ["bg-base-bg text-base-foreground shadow", "hover:bg-hover-base"],

      accent: ["bg-muted text-accent-foreground", "hover:bg-hover-muted"],

      muted: ["bg-muted text-muted-foreground", "hover:bg-hover-muted"],

      surface: [
        "border border-faded-border bg-faded text-accent-foreground",
        "hover:bg-hover-faded",
      ],

      faded: [
        "border border-faded-border bg-faded text-muted-foreground",
        "hover:bg-hover-faded",
      ],

      "base-shadow": [
        "bg-base-bg text-base-foreground shadow-lg shadow-base-bg/50",
        "hover:bg-hover-base",
      ],

      "base-gradient": [
        "bg-linear-(--base-gradient) text-base-foreground shadow",
        "hover:bg-linear-(--hover-base-gradient)",
      ],

      ghost: [
        "bg-transparent text-foreground",
        "hover:bg-muted hover:text-accent-foreground",
      ],

      // --- primary ---
      primary: [
        "bg-primary text-primary-foreground shadow",
        "hover:bg-hover-primary",
      ],

      "primary-accent": [
        "bg-primary-muted text-primary-accent-foreground",
        "hover:bg-hover-primary-muted",
      ],

      "primary-muted": [
        "bg-primary-muted text-primary-muted-foreground",
        "hover:bg-hover-primary-muted",
      ],

      "primary-surface": [
        "border border-primary-faded-border bg-primary-faded text-primary-accent-foreground",
        "hover:bg-hover-primary-faded",
      ],

      "primary-faded": [
        "border border-primary-faded-border bg-primary-faded text-primary-muted-foreground",
        "hover:bg-hover-primary-faded",
      ],

      "primary-tron": [
        "bg-background bg-linear-(--primary-tron-gradient) text-primary-muted-foreground shadow inset-ring inset-ring-primary-tron-border",
        "hover:bg-linear-(--hover-primary-tron-gradient) hover:inset-ring-hover-primary-tron-border",
        "[--tron-beam:var(--color-primary)] [--tron-blur:var(--color-primary-tron-blur)]",
      ],

      "primary-shadow": [
        "bg-primary text-primary-foreground shadow-lg shadow-primary/50",
        "hover:bg-hover-primary",
      ],

      "primary-gradient": [
        "bg-linear-(--primary-gradient) text-primary-foreground shadow",
        "hover:bg-linear-(--hover-primary-gradient)",
      ],

      "primary-ghost": [
        "text-primary-muted-foreground",
        "hover:bg-primary-muted hover:text-primary-accent-foreground",
      ],

      // secondary
      secondary: [
        "bg-secondary text-secondary-foreground shadow",
        "hover:bg-hover-secondary",
      ],

      "secondary-accent": [
        "bg-secondary-muted text-secondary-accent-foreground",
        "hover:bg-hover-secondary-muted",
      ],

      "secondary-muted": [
        "bg-secondary-muted text-secondary-muted-foreground",
        "hover:bg-hover-secondary-muted",
      ],

      "secondary-surface": [
        "border border-secondary-faded-border bg-secondary-faded text-secondary-accent-foreground",
        "hover:bg-hover-secondary-faded",
      ],

      "secondary-faded": [
        "border border-secondary-faded-border bg-secondary-faded text-secondary-muted-foreground",
        "hover:bg-hover-secondary-faded",
      ],

      "secondary-tron": [
        "bg-background bg-linear-(--secondary-tron-gradient) text-secondary-muted-foreground shadow inset-ring inset-ring-secondary-tron-border",
        "hover:bg-linear-(--hover-secondary-tron-gradient) hover:inset-ring-hover-secondary-tron-border",
        "[--tron-beam:var(--color-secondary)] [--tron-blur:var(--color-secondary-tron-blur)]",
      ],

      "secondary-shadow": [
        "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/50",
        "hover:bg-hover-secondary",
      ],

      "secondary-gradient": [
        "bg-linear-(--secondary-gradient) text-secondary-foreground shadow",
        "hover:bg-linear-(--hover-secondary-gradient)",
      ],

      "secondary-ghost": [
        "text-secondary-muted-foreground",
        "hover:bg-secondary-muted hover:text-secondary-accent-foreground",
      ],

      // --- destructive ---
      destructive: [
        "bg-destructive text-destructive-foreground shadow",
        "hover:bg-hover-destructive",
      ],

      "destructive-accent": [
        "bg-destructive-muted text-destructive-accent-foreground",
        "hover:bg-hover-destructive-muted",
      ],

      "destructive-muted": [
        "bg-destructive-muted text-destructive-muted-foreground",
        "hover:bg-hover-destructive-muted",
      ],

      "destructive-surface": [
        "border border-destructive-faded-border bg-destructive-faded text-destructive-accent-foreground",
        "hover:bg-hover-destructive-faded",
      ],

      "destructive-faded": [
        "border border-destructive-faded-border bg-destructive-faded text-destructive-muted-foreground",
        "hover:bg-hover-destructive-faded",
      ],

      "destructive-tron": [
        "bg-background bg-linear-(--destructive-tron-gradient) text-destructive-muted-foreground shadow inset-ring inset-ring-destructive-tron-border",
        "hover:bg-linear-(--hover-destructive-tron-gradient) hover:inset-ring-hover-destructive-tron-border",
        "[--tron-beam:var(--color-destructive)] [--tron-blur:var(--color-destructive-tron-blur)]",
      ],

      "destructive-shadow": [
        "bg-destructive text-destructive-foreground shadow-lg shadow-destructive/50",
        "hover:bg-hover-destructive",
      ],

      "destructive-gradient": [
        "bg-linear-(--destructive-gradient) text-destructive-foreground shadow",
        "hover:bg-linear-(--hover-destructive-gradient)",
      ],

      "destructive-ghost": [
        "text-destructive-muted-foreground",
        "hover:bg-destructive-muted hover:text-destructive-accent-foreground",
      ],

      // --- success ---
      success: [
        "bg-success text-success-foreground shadow",
        "hover:bg-hover-success",
      ],

      "success-accent": [
        "bg-success-muted text-success-accent-foreground",
        "hover:bg-hover-success-muted",
      ],

      "success-muted": [
        "bg-success-muted text-success-muted-foreground",
        "hover:bg-hover-success-muted",
      ],

      "success-surface": [
        "border border-success-faded-border bg-success-faded text-success-accent-foreground",
        "hover:bg-hover-success-faded",
      ],

      "success-faded": [
        "border border-success-faded-border bg-success-faded text-success-muted-foreground",
        "hover:bg-hover-success-faded",
      ],

      "success-tron": [
        "bg-background bg-linear-(--success-tron-gradient) text-success-muted-foreground shadow inset-ring inset-ring-success-tron-border",
        "hover:bg-linear-(--hover-success-tron-gradient) hover:inset-ring-hover-success-tron-border",
        "[--tron-beam:var(--color-success)] [--tron-blur:var(--color-success-tron-blur)]",
      ],

      "success-shadow": [
        "bg-success text-success-foreground shadow-lg shadow-success/50",
        "hover:bg-hover-success",
      ],

      "success-gradient": [
        "bg-linear-(--success-gradient) text-success-foreground shadow",
        "hover:bg-linear-(--hover-success-gradient)",
      ],

      "success-ghost": [
        "text-success-muted-foreground",
        "hover:bg-success-muted hover:text-success-accent-foreground",
      ],

      // --- warning ---
      warning: [
        "bg-warning text-warning-foreground shadow",
        "hover:bg-hover-warning",
      ],

      "warning-accent": [
        "bg-warning-muted text-warning-accent-foreground",
        "hover:bg-hover-warning-muted",
      ],

      "warning-muted": [
        "bg-warning-muted text-warning-muted-foreground",
        "hover:bg-hover-warning-muted",
      ],

      "warning-surface": [
        "border border-warning-faded-border bg-warning-faded text-warning-accent-foreground",
        "hover:bg-hover-warning-faded",
      ],

      "warning-faded": [
        "border border-warning-faded-border bg-warning-faded text-warning-muted-foreground",
        "hover:bg-hover-warning-faded",
      ],

      "warning-tron": [
        "bg-background bg-linear-(--warning-tron-gradient) text-warning-muted-foreground shadow inset-ring inset-ring-warning-tron-border",
        "hover:bg-linear-(--hover-warning-tron-gradient) hover:inset-ring-hover-warning-tron-border",
        "[--tron-beam:var(--color-warning)] [--tron-blur:var(--color-warning-tron-blur)]",
      ],

      "warning-shadow": [
        "bg-warning text-warning-foreground shadow-lg shadow-warning/50",
        "hover:bg-hover-warning",
      ],

      "warning-gradient": [
        "bg-linear-(--warning-gradient) text-warning-foreground shadow",
        "hover:bg-linear-(--hover-warning-gradient)",
      ],

      "warning-ghost": [
        "text-warning-muted-foreground",
        "hover:bg-warning-muted hover:text-warning-accent-foreground",
      ],
    },
    size: {
      sm: [
        "h-(--size-sm) rounded-md px-3 py-1.5",
        "has-[[data-slot='spinner']]:px-2.5 has-[>svg]:px-2.5 **:data-[slot=spinner]:not-[[class*='size-']]:size-4",
        "**:[svg]:not-[[class*='size-']]:size-4",
      ],

      xs: [
        "h-(--size-xs) gap-1.5 rounded-sm px-2 py-1 text-xs font-medium",
        "has-[[data-slot='spinner']]:px-2 has-[>svg]:px-2 **:data-[slot=spinner]:not-[[class*='size-']]:size-3.5 **:[svg]:not-[[class*='size-']]:size-3.5",
      ],

      md: [
        "h-(--size-md) px-4 py-2",
        "has-[[data-slot='spinner']]:px-3 has-[>svg]:px-3 **:data-[slot=spinner]:not-[[class*='size-']]:size-4",
        "**:[svg]:not-[[class*='size-']]:size-4",
      ],

      lg: [
        "h-(--size-lg) gap-3 rounded-md px-6 py-2 text-base",
        "has-[[data-slot='spinner']]:px-4 has-[>svg]:px-4 **:data-[slot=spinner]:not-[[class*='size-']]:size-5",
        "**:[svg]:not-[[class*='size-']]:size-5",
      ],

      "icon-sm": [
        "size-(--size-sm)",
        "**:data-[slot=spinner]:not-[[class*='size-']]:size-4",
        "**:[svg]:not-[[class*='size-']]:size-4",
      ],

      "icon-xs": [
        "size-(--size-xs) rounded-sm",
        "**:data-[slot=spinner]:not-[[class*='size-']]:size-3.5",
        "**:[svg]:not-[[class*='size-']]:size-3.5",
      ],

      "icon-md": [
        "size-(--size-md)",
        "**:data-[slot=spinner]:not-[[class*='size-']]:size-4",
        "*:[svg]:not-[[class*='size-']]:size-4",
      ],

      "icon-lg": [
        "size-(--size-lg)",
        "**:data-[slot=spinner]:not-[[class*='size-']]:size-5",
        "**:[svg]:not-[[class*='size-']]:size-5",
      ],
    },
  },
  compoundVariants: [
    {
      variant: [
        "outline",
        "base",
        "accent",
        "muted",
        "surface",
        "faded",
        "base-gradient",
        "ghost",
      ],
      className: "outline-outline",
    },
    {
      variant: [
        "primary",
        "primary-accent",
        "primary-muted",
        "primary-surface",
        "primary-faded",
        "primary-tron",
        "primary-shadow",
        "primary-gradient",
        "primary-ghost",
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
        "secondary-shadow",
        "secondary-gradient",
        "secondary-ghost",
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
        "destructive-shadow",
        "destructive-gradient",
        "destructive-ghost",
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
        "success-shadow",
        "success-gradient",
        "success-ghost",
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
        "warning-shadow",
        "warning-gradient",
        "warning-ghost",
      ],
      className: "outline-warning",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    empty?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={buttonVariants({
        variant,
        size,
        className: ["group/button", className],
      })}
      {...props}
    >
      {variant?.includes("tron") && (
        <>
          <Tron
            side="top"
            type="beam"
            className="via-(--tron-beam) opacity-0 group-hover/button:opacity-100"
          />
          <Tron
            side="top"
            type="blur"
            className="via-(--tron-blur) opacity-0 group-hover/button:opacity-100"
          />
          <Tron
            side="bottom"
            type="beam"
            className="via-(--tron-beam) opacity-100 group-hover/button:opacity-0"
          />
          <Tron
            side="bottom"
            type="blur"
            className="via-(--tron-blur) opacity-100 group-hover/button:opacity-0"
          />
        </>
      )}
      <Slottable>{children}</Slottable>
    </Comp>
  );
}

export { Button, buttonVariants };
