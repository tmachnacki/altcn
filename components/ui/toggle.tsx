"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { tv, type VariantProps } from "tailwind-variants";

import { Tron } from "~/components/ui/tron";

const toggleVariants = tv({
  base: [
    "group/toggle",
    "relative inline-flex items-center justify-center bg-transparent font-medium whitespace-nowrap text-subtle-foreground",
    "active:opacity-80",
    "data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground data-[disabled]:opacity-50",
    "focus-visible:z-20 focus-visible:outline-2 focus-visible:outline-offset-1",
    "**:[svg]:pointer-events-none **:[svg]:shrink-0 **:[svg]:grow-0 **:[svg]:not-[[class*='mx-']]:-mx-0.5",
  ],
  variants: {
    variant: {
      outline:
        "border border-border bg-transparent shadow-xs hover:bg-faded hover:text-muted-foreground data-[state=on]:border-hover-border data-[state=on]:bg-muted data-[state=on]:text-accent-foreground",

      contrast:
        "hover:bg-faded hover:text-muted-foreground data-[state=on]:bg-contrast data-[state=on]:text-contrast-foreground",

      base: "hover:bg-faded hover:text-muted-foreground data-[state=on]:bg-base-bg data-[state=on]:text-base-foreground",

      accent:
        "hover:bg-faded hover:text-muted-foreground data-[state=on]:bg-muted data-[state=on]:text-accent-foreground",

      muted:
        "hover:bg-faded hover:text-muted-foreground/80 data-[state=on]:bg-muted data-[state=on]:text-muted-foreground",

      surface:
        "hover:bg-faded hover:text-muted-foreground data-[state=on]:bg-faded data-[state=on]:text-accent-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-faded-border",

      faded:
        "hover:bg-faded hover:text-muted-foreground/80 data-[state=on]:bg-faded data-[state=on]:text-muted-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-faded-border",

      "base-gradient": [
        "hover:bg-faded hover:text-muted-foreground data-[state=on]:bg-linear-(--base-gradient) data-[state=on]:text-base-foreground",
      ],

      primary:
        "hover:bg-primary-faded hover:text-primary-muted-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",

      "primary-accent":
        "hover:bg-primary-faded hover:text-primary-muted-foreground data-[state=on]:bg-primary-muted data-[state=on]:text-primary-accent-foreground",

      "primary-muted":
        "hover:bg-primary-faded hover:text-primary-muted-foreground/80 data-[state=on]:bg-primary-muted data-[state=on]:text-primary-muted-foreground",

      "primary-surface":
        "hover:bg-primary-faded hover:text-primary-muted-foreground data-[state=on]:bg-primary-faded data-[state=on]:text-primary-accent-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-primary-faded-border",

      "primary-faded":
        "hover:bg-primary-faded hover:text-primary-muted-foreground/80 data-[state=on]:bg-primary-faded data-[state=on]:text-primary-muted-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-primary-faded-border",

      "primary-tron": [
        "hover:text-primary-muted-foreground hover:inset-ring hover:inset-ring-primary-faded-border data-[state=on]:bg-background data-[state=on]:bg-linear-(--primary-tron-gradient) data-[state=on]:text-primary-accent-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-primary-tron-border",
        "[--tron-beam:var(--color-primary)] [--tron-blur:var(--color-primary-tron-blur)]",
      ],

      "primary-gradient": [
        "hover:bg-primary-faded hover:text-primary-muted-foreground data-[state=on]:bg-linear-(--primary-gradient) data-[state=on]:text-primary-foreground",
      ],

      secondary:
        "hover:bg-secondary-faded hover:text-secondary-muted-foreground data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground",

      "secondary-accent":
        "hover:bg-secondary-faded hover:text-secondary-muted-foreground data-[state=on]:bg-secondary-muted data-[state=on]:text-secondary-accent-foreground",

      "secondary-muted":
        "hover:bg-secondary-faded hover:text-secondary-muted-foreground/80 data-[state=on]:bg-secondary-muted data-[state=on]:text-secondary-muted-foreground",

      "secondary-surface":
        "hover:bg-secondary-faded hover:text-secondary-muted-foreground data-[state=on]:bg-secondary-faded data-[state=on]:text-secondary-accent-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-secondary-faded-border",

      "secondary-faded":
        "hover:bg-secondary-faded hover:text-secondary-muted-foreground/80 data-[state=on]:bg-secondary-faded data-[state=on]:text-secondary-muted-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-secondary-faded-border",

      "secondary-tron": [
        "hover:text-secondary-muted-foreground hover:inset-ring hover:inset-ring-secondary-faded-border data-[state=on]:bg-background data-[state=on]:bg-linear-(--secondary-tron-gradient) data-[state=on]:text-secondary-accent-foreground data-[state=on]:inset-ring data-[state=on]:inset-ring-secondary-tron-border",
        "[--tron-beam:var(--color-secondary)] [--tron-blur:var(--color-secondary-tron-blur)]",
      ],

      "secondary-gradient": [
        "hover:bg-secondary-faded hover:text-secondary-muted-foreground data-[state=on]:bg-linear-(--secondary-gradient) data-[state=on]:text-secondary-foreground",
      ],
    },
    size: {
      "2xs": [
        "h-size-xs min-w-size-xs gap-1.5 rounded-sm px-1 text-[0.8rem]/4.5 sm:h-size-2xs sm:min-w-size-2xs sm:text-xs",
        "**:[svg]:not-[[class*='size-']]:size-icon-xs sm:**:[svg]:not-[[class*='size-']]:size-icon-2xs",
      ],
      xs: [
        "h-size-sm min-w-size-sm gap-1.5 rounded-md px-1.5 text-sm sm:h-size-xs sm:min-w-size-xs sm:rounded-sm sm:text-[0.8rem]/4.5",
        "**:[svg]:not-[[class*='size-']]:size-icon-sm sm:**:[svg]:not-[[class*='size-']]:size-icon-xs",
      ],
      sm: [
        "h-size-md min-w-size-md gap-2 rounded-md px-1.5 text-sm sm:h-size-sm sm:min-w-size-sm",
        "**:[svg]:not-[[class*='size-']]:size-icon-md sm:**:[svg]:not-[[class*='size-']]:size-icon-sm",
      ],
      md: [
        "h-size-lg min-w-size-lg gap-2 rounded-md px-2 text-base sm:h-size-md sm:min-w-size-md sm:text-sm",
        "**:[svg]:not-[[class*='size-']]:size-icon-lg sm:**:[svg]:not-[[class*='size-']]:size-icon-md",
      ],
      lg: [
        "h-size-xl min-w-size-xl gap-2.5 rounded-md px-2.5 text-lg sm:h-size-lg sm:min-w-size-lg sm:text-base",
        "**:[svg]:not-[[class*='size-']]:size-icon-xl sm:**:[svg]:not-[[class*='size-']]:size-icon-lg",
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
  ],
  defaultVariants: {
    variant: "accent",
    size: "md",
  },
});

function Toggle({
  className,
  variant = "accent",
  size = "md",
  children,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={toggleVariants({ variant, size, className })}
      {...props}
    >
      {variant?.includes("tron") && (
        <>
          <Tron
            type="beam"
            side="bottom"
            border="inset"
            className="via-(--tron-beam) opacity-0 group-data-[state=on]/toggle:opacity-100"
          />
          <Tron
            type="blur"
            side="bottom"
            border="inset"
            className="via-(--tron-blur) opacity-0 group-data-[state=on]/toggle:opacity-100"
          />
        </>
      )}
      {children}
    </TogglePrimitive.Root>
  );
}

export { Toggle, toggleVariants };
