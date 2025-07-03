import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

import { Tron } from "~/components/ui/tron";

const buttonVariants = cva(
  [
    "touch-target relative isolate inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold whitespace-nowrap select-none",
    "active:opacity-80",
    "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-disabled:shadow-none",
    "outline-offset-2 focus-visible:outline-2",
    "**:[svg]:pointer-events-none **:[svg]:shrink-0 **:[svg]:grow-0",
  ],
  {
    variants: {
      variant: {
        // --- base ---
        outline: [
          "border border-border bg-background text-foreground shadow-xs",
          "hover:border-hover-border hover:bg-faded",
        ],

        base: ["bg-base-bg text-base-foreground shadow", "hover:bg-hover-base"],

        accent: ["bg-muted text-accent-foreground", "hover:bg-hover-muted"],

        muted: ["bg-muted text-muted-foreground", "hover:bg-hover-muted"],

        surface: [
          "border border-border-faded bg-faded text-accent-foreground",
          "hover:bg-hover-faded",
        ],

        faded: [
          "border border-border-faded bg-faded text-muted-foreground",
          "hover:bg-hover-faded",
        ],

        ghost: ["bg-transparent text-foreground", "hover:bg-muted"],

        link: ["text-primary underline-offset-4", "hover:underline"],

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
          "border border-border-primary-faded bg-primary-faded text-primary-accent-foreground",
          "hover:bg-hover-primary-faded",
        ],

        "primary-faded": [
          "border border-border-primary-faded bg-primary-faded text-primary-muted-foreground",
          "hover:bg-hover-primary-faded",
        ],

        "primary-tron": [
          "bg-background bg-[image:var(--primary-tron-bg-gradient)] text-primary-muted-foreground shadow inset-ring inset-ring-border-primary-tron",
          "hover:bg-[image:var(--hover-primary-tron-bg-gradient)] hover:inset-ring-hover-border-primary-tron",
          "[--tron-beam:var(--color-primary)] [--tron-blur:var(--color-primary-tron-blur)]",
        ],

        "primary-shadow": [
          "bg-primary text-primary-foreground shadow-lg shadow-primary/50",
          "hover:bg-hover-primary",
        ],

        "primary-gradient": [
          "bg-gradient-to-br from-primary-700 to-primary-500 text-primary-foreground shadow dark:from-primary-600 dark:to-primary-400",
          "hover:from-primary-700/90 hover:to-primary-500/90 dark:hover:from-primary-600/90 dark:hover:to-primary-400/90",
        ],

        "primary-ghost": [
          "text-primary-muted-foreground",
          "hover:bg-primary-muted",
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
          "border border-border-secondary-faded bg-secondary-faded text-secondary-accent-foreground",
          "hover:bg-hover-secondary-faded",
        ],

        "secondary-faded": [
          "border border-border-secondary-faded bg-secondary-faded text-secondary-muted-foreground",
          "hover:bg-hover-secondary-faded",
        ],

        "secondary-tron": [
          "bg-background bg-[image:var(--secondary-tron-bg-gradient)] text-secondary-muted-foreground shadow inset-ring inset-ring-border-secondary-tron",
          "hover:bg-[image:var(--hover-secondary-tron-bg-gradient)] hover:inset-ring-hover-border-secondary-tron",
          "[--tron-beam:var(--color-secondary)] [--tron-blur:var(--color-secondary-tron-blur)]",
        ],

        "secondary-shadow": [
          "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/50",
          "hover:bg-hover-secondary",
        ],

        "secondary-gradient": [
          "bg-gradient-to-br from-secondary-500 to-secondary-300 text-secondary-foreground shadow",
          "hover:from-secondary-500/90 hover:to-secondary-300/90",
        ],

        "secondary-ghost": [
          "text-secondary-muted-foreground",
          "hover:bg-secondary-muted",
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
          "border border-border-destructive-faded bg-destructive-faded text-destructive-accent-foreground",
          "hover:bg-hover-destructive-faded",
        ],

        "destructive-faded": [
          "border border-border-destructive-faded bg-destructive-faded text-destructive-muted-foreground",
          "hover:bg-hover-destructive-faded",
        ],

        "destructive-tron": [
          "bg-background bg-[image:var(--destructive-tron-bg-gradient)] text-destructive-muted-foreground shadow inset-ring inset-ring-border-destructive-tron",
          "hover:bg-[image:var(--hover-destructive-tron-bg-gradient)] hover:inset-ring-hover-border-destructive-tron",
          "[--tron-beam:var(--color-destructive)] [--tron-blur:var(--color-destructive-tron-blur)]",
        ],

        "destructive-shadow": [
          "bg-destructive text-destructive-foreground shadow-lg shadow-destructive/50",
          "hover:bg-hover-destructive",
        ],

        "destructive-gradient": [
          "bg-gradient-to-br from-destructive-600 to-destructive-400 text-destructive-foreground shadow dark:from-destructive-800 dark:to-destructive-500",
          "hover:from-destructive-600/90 hover:to-destructive-400/90 dark:hover:from-destructive-800/90 dark:hover:to-destructive-500/90",
        ],

        "destructive-ghost": [
          "text-destructive-muted-foreground",
          "hover:bg-destructive-muted",
        ],
      },
      size: {
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

        sm: [
          "h-(--size-sm) rounded-md px-3 py-1.5",
          "has-[[data-slot='spinner']]:px-2.5 has-[>svg]:px-2.5 **:data-[slot=spinner]:not-[[class*='size-']]:size-4",
          "**:[svg]:not-[[class*='size-']]:size-4",
        ],

        xs: [
          "h-(--size-xs) gap-1.5 rounded-sm px-2 py-1 text-xs font-medium",
          "has-[[data-slot='spinner']]:px-2 has-[>svg]:px-2 **:data-[slot=spinner]:not-[[class*='size-']]:size-3.5 **:[svg]:not-[[class*='size-']]:size-3.5",
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
      },
    },
    compoundVariants: [
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
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

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
      className={cn(
        buttonVariants({ variant, size }),
        "group/button",
        className
      )}
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
