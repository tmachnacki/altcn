"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

import { Tron } from "~/components/ui/tron";

const toggleVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-2 rounded-md bg-transparent font-medium whitespace-nowrap text-subtle-foreground",
    "active:opacity-80",
    "disabled:pointer-events-none disabled:text-muted-foreground disabled:opacity-50",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "**:[svg]:pointer-events-none **:[svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        outline:
          "border border-border shadow-xs hover:bg-faded hover:text-muted-foreground data-[state=on]:bg-faded data-[state=on]:border-hover-border data-[state=on]:text-accent-foreground",

        base: "hover:bg-muted hover:text-muted-foreground data-[state=on]:bg-base-bg data-[state=on]:text-base-foreground",

        accent:
          "hover:bg-faded hover:text-muted-foreground data-[state=on]:bg-muted data-[state=on]:text-accent-foreground",

        muted:
          "hover:bg-faded hover:text-muted-foreground/80 data-[state=on]:bg-muted data-[state=on]:text-muted-foreground",

        surface:
          "hover:bg-faded hover:text-muted-foreground data-[state=on]:bg-faded data-[state=on]:text-accent-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-border-faded",

        faded:
          "hover:bg-faded hover:text-muted-foreground/80 data-[state=on]:bg-faded data-[state=on]:text-muted-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-border-faded",

        primary:
          "hover:bg-primary-faded hover:text-primary-muted-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",

        "primary-accent":
          "hover:bg-primary-faded hover:text-primary-muted-foreground data-[state=on]:bg-primary-muted data-[state=on]:text-primary-accent-foreground",

        "primary-muted":
          "hover:bg-primary-faded hover:text-primary-muted-foreground/80 data-[state=on]:bg-primary-muted data-[state=on]:text-primary-muted-foreground",

        "primary-surface":
          "hover:bg-primary-faded hover:text-primary-muted-foreground data-[state=on]:bg-primary-faded data-[state=on]:text-primary-accent-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-border-primary-faded",

        "primary-faded":
          "hover:bg-primary-faded hover:text-primary-muted-foreground/80 data-[state=on]:bg-primary-faded data-[state=on]:text-primary-muted-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-border-primary-faded",

        "primary-tron": [
          "hover:text-primary-muted-foreground hover:inset-ring hover:inset-ring-border-primary-faded data-[state=on]:bg-background data-[state=on]:bg-[image:var(--primary-tron-bg-gradient)] data-[state=on]:text-primary-muted-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-border-primary-tron",
          "[--tron-beam:var(--color-primary)] [--tron-blur:var(--color-primary-tron-blur)]",
        ],

        secondary:
          "hover:bg-secondary-faded hover:text-secondary-muted-foreground data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground",

        "secondary-accent":
          "hover:bg-secondary-faded hover:text-secondary-muted-foreground data-[state=on]:bg-secondary-muted data-[state=on]:text-secondary-accent-foreground",

        "secondary-muted":
          "hover:bg-secondary-faded hover:text-secondary-muted-foreground/80 data-[state=on]:bg-secondary-muted data-[state=on]:text-secondary-muted-foreground",

        "secondary-surface":
          "hover:bg-secondary-faded hover:text-secondary-muted-foreground data-[state=on]:bg-secondary-faded data-[state=on]:text-secondary-accent-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-border-secondary-faded",

        "secondary-faded":
          "hover:bg-secondary-faded hover:text-secondary-muted-foreground/80 data-[state=on]:bg-secondary-faded data-[state=on]:text-secondary-muted-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-border-secondary-faded",

        "secondary-tron": [
          "hover:text-secondary-muted-foreground hover:inset-ring hover:inset-ring-border-secondary-faded data-[state=on]:bg-background data-[state=on]:bg-[image:var(--secondary-tron-bg-gradient)] data-[state=on]:text-secondary-muted-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-border-secondary-tron",
          "[--tron-beam:var(--color-secondary)] [--tron-blur:var(--color-secondary-tron-blur)]",
        ],
      },
      size: {
        xs: "h-(--size-xs) min-w-(--size-xs) gap-1.5 rounded-sm px-1 text-xs **:[svg]:not-[[class*='size-']]:size-3.5",
        sm: "h-(--size-sm) min-w-(--size-sm) px-1.5 text-sm **:[svg]:not-[[class*='size-']]:size-4",
        md: "h-(--size-md) min-w-(--size-md) px-2 text-sm **:[svg]:not-[[class*='size-']]:size-4",
        lg: "h-(--size-lg) min-w-(--size-lg) px-2.5 text-base **:[svg]:not-[[class*='size-']]:size-5",
      },
    },
    compoundVariants: [
      {
        variant: ["outline", "base", "accent", "muted", "surface", "faded"],
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
        ],
        className: "outline-secondary",
      },
    ],
    defaultVariants: {
      variant: "accent",
      size: "md",
    },
  }
);

function Toggle({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(
        toggleVariants({ variant, size }),
        "group/toggle",
        className
      )}
      {...props}
    >
      {variant?.includes("tron") && (
        <>
          <Tron
            type="beam"
            side="bottom"
            className="via-(--tron-beam) opacity-0 group-data-[state=on]/toggle:opacity-100"
          />
          <Tron
            type="blur"
            side="bottom"
            className="via-(--tron-blur) opacity-0 group-data-[state=on]/toggle:opacity-100"
          />
        </>
      )}
      {children}
    </TogglePrimitive.Root>
  );
}

export { Toggle, toggleVariants };
