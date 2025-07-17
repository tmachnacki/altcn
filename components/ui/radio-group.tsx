"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

const radioVariants = tv({
  base: [
    "peer inline-flex size-4 shrink-0 grow-0 items-center justify-center rounded-full",

    "hover:not-aria-invalid:data-[state=unchecked]:inset-ring-hover-border",

    "outline-offset-2 focus-visible:outline-2",

    "disabled:pointer-events-none disabled:text-muted-foreground disabled:opacity-50",

    "aria-invalid:outline-destructive aria-invalid:disabled:text-destructive-muted-foreground",
  ],
  variants: {
    variant: {
      // -- base --
      base: [
        "outline-outline",
        "text-base-foreground data-[state=checked]:bg-base-bg hover:data-[state=checked]:bg-hover-base",
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
        "text-primary-foreground data-[state=checked]:bg-primary hover:data-[state=checked]:bg-hover-primary",
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
        "text-secondary-foreground data-[state=checked]:bg-secondary hover:data-[state=checked]:bg-hover-secondary",
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
      variant: ["base", "primary", "secondary"],
      className: [
        "bg-background shadow-xs inset-ring inset-ring-border not-disabled:data-[state=checked]:inset-ring-0 dark:data-[state=unchecked]:bg-faded",

        "hover:not-aria-invalid:data-[state=unchecked]:inset-ring-hover-border",

        "disabled:data-[state=checked]:bg-faded disabled:data-[state=unchecked]:bg-faded disabled:shadow-none disabled:inset-ring-border",

        "aria-invalid:text-destructive-foreground aria-invalid:inset-ring-destructive aria-invalid:disabled:data-[state=checked]:bg-destructive-faded aria-invalid:disabled:data-[state=unchecked]:bg-destructive-faded aria-invalid:data-[state=checked]:bg-destructive hover:aria-invalid:data-[state=checked]:bg-hover-destructive dark:aria-invalid:data-[state=unchecked]:bg-destructive-faded",
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
      className: ["disabled:bg-muted", "aria-invalid:bg-destructive-muted hover:aria-invalid:bg-hover-destructive-muted"],
    },
  ],
  defaultVariants: {
    variant: "primary",
  },
});

const RadioGroupContext = React.createContext<
  VariantProps<typeof radioVariants>
>({});

function RadioGroup({
  className,
  variant = "primary",
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> &
  VariantProps<typeof radioVariants>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    >
      <RadioGroupContext.Provider value={{ variant }}>
        {children}
      </RadioGroupContext.Provider>
    </RadioGroupPrimitive.Root>
  );
}

function Radio({
  variant,
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> &
  VariantProps<typeof radioVariants>) {
  const context = React.useContext(RadioGroupContext);

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio"
      className={radioVariants({
        variant: variant || context.variant,
        className,
      })}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-indicator"
        className="size-full scale-40 rounded-full bg-current"
      />
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, Radio, RadioGroupContext, radioVariants };
