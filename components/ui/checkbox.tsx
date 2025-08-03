"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { tv, type VariantProps } from "tailwind-variants";
import { CheckIcon, MinusIcon } from "lucide-react";

const checkBoxVariants = tv({
  base: [
    "peer group/checkbox touch-target",
    "inline-flex size-4.5 shrink-0 grow-0 items-center justify-center rounded-sm sm:size-4",

    "hover:not-aria-invalid:data-[state=unchecked]:inset-ring-hover-border",

    "outline-offset-2 focus-visible:outline-2",

    "disabled:pointer-events-none disabled:text-muted-foreground disabled:opacity-50",

    "aria-invalid:outline-destructive aria-invalid:disabled:text-destructive-muted-foreground",
  ],
  variants: {
    variant: {
      // -- base --
      contrast: [
        "outline-outline",
        "text-contrast-foreground not-data-[state=unchecked]:bg-contrast hover:not-data-[state=unchecked]:bg-hover-contrast",
      ],
      base: [
        "outline-outline",
        "text-base-foreground not-data-[state=unchecked]:bg-base-bg hover:not-data-[state=unchecked]:bg-hover-base",
      ],
      accent: [
        "outline-outline",
        "bg-muted text-accent-foreground hover:bg-hover-muted",
        "aria-invalid:text-destructive-accent-foreground",
      ],
      muted: [
        "outline-outline",
        "bg-muted text-muted-foreground hover:bg-hover-muted",
        "aria-invalid:text-destructive-muted-foreground",
      ],

      // -- primary --
      primary: [
        "outline-primary",
        "text-primary-foreground not-data-[state=unchecked]:bg-primary hover:not-data-[state=unchecked]:bg-hover-primary",
      ],
      "primary-accent": [
        "outline-primary",
        "bg-primary-muted text-primary-accent-foreground hover:bg-hover-primary-muted",
        "aria-invalid:text-destructive-accent-foreground",
      ],
      "primary-muted": [
        "outline-primary",
        "bg-primary-muted text-primary-muted-foreground hover:bg-hover-primary-muted",
        "aria-invalid:text-destructive-muted-foreground",
      ],

      // -- secondary --
      secondary: [
        "outline-secondary",
        "text-secondary-foreground not-data-[state=unchecked]:bg-secondary hover:not-data-[state=unchecked]:bg-hover-secondary",
      ],
      "secondary-accent": [
        "outline-secondary",
        "bg-secondary-muted text-secondary-accent-foreground hover:bg-hover-secondary-muted",
        "aria-invalid:text-destructive-accent-foreground",
      ],
      "secondary-muted": [
        "outline-secondary",
        "bg-secondary-muted text-secondary-muted-foreground hover:bg-hover-secondary-muted",
        "aria-invalid:text-destructive-muted-foreground",
      ],
    },
  },
  compoundVariants: [
    {
      variant: ["base", "primary", "secondary", "contrast"],
      className: [
        "bg-background shadow-xs inset-ring inset-ring-border not-disabled:not-data-[state=unchecked]:inset-ring-0 dark:data-[state=unchecked]:bg-faded",

        "hover:not-aria-invalid:data-[state=unchecked]:inset-ring-hover-border",

        "disabled:bg-faded disabled:shadow-none disabled:inset-ring-border",

        "aria-invalid:text-destructive-foreground aria-invalid:inset-ring-destructive aria-invalid:not-data-[state=unchecked]:bg-destructive hover:aria-invalid:not-data-[state=unchecked]:bg-hover-destructive aria-invalid:disabled:bg-destructive-faded dark:aria-invalid:data-[state=unchecked]:bg-destructive-faded",
      ],
    },
    {
      variant: [
        "accent",
        "muted",
        "primary-accent",
        "primary-muted",
        "secondary-accent",
        "secondary-muted",
      ],
      className: [
        "disabled:bg-muted",
        "aria-invalid:bg-destructive-muted hover:aria-invalid:bg-hover-destructive-muted",
      ],
    },
  ],
  defaultVariants: {
    variant: "primary",
  },
});

function Checkbox({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkBoxVariants>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={checkBoxVariants({
        variant,
        className,
      })}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="relative inline-flex size-full items-center justify-center overflow-hidden"
      >
        <CheckIcon className="absolute top-1/2 left-1/2 hidden size-4 -translate-x-1/2 -translate-y-1/2 stroke-3 group-data-[state=checked]/checkbox:inline-block sm:size-3.5" />
        <MinusIcon className="absolute top-1/2 left-1/2 hidden size-4 -translate-x-1/2 -translate-y-1/2 stroke-3 group-data-[state=indeterminate]/checkbox:inline-block sm:size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox, checkBoxVariants };
