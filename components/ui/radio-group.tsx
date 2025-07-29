"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

const radioVariants = tv({
  slots: {
    root: [
      "group/radio peer touch-target",

      "relative size-4.5 shrink-0 grow-0 items-center justify-center rounded-full sm:size-4",

      "hover:not-aria-invalid:data-[state=unchecked]:inset-ring-hover-border",

      "outline-offset-2 focus-visible:outline-2",

      "disabled:pointer-events-none disabled:opacity-50 disabled:data-[state=checked]:text-muted-foreground",

      "aria-invalid:text-destructive-accent-foreground/15 aria-invalid:outline-destructive aria-invalid:disabled:data-[state=checked]:text-destructive-muted-foreground",
    ],
    indicator: [
      "absolute top-1/2 left-1/2 block size-full -translate-x-1/2 -translate-y-1/2 scale-40 rounded-full bg-current opacity-0",
      "group-hover/radio:group-not-data-[state=checked]/radio:opacity-100 group-data-[state=checked]/radio:opacity-100",
    ],
  },
  variants: {
    variant: {
      // -- base --
      contrast: {
        root: [
          "outline-outline",
          "data-[state=checked]:bg-contrast data-[state=checked]:text-contrast-foreground hover:data-[state=checked]:bg-hover-contrast",
        ],
      },
      base: {
        root: [
          "outline-outline",
          "data-[state=checked]:bg-base-bg data-[state=checked]:text-base-foreground hover:data-[state=checked]:bg-hover-base",
        ],
      },
      accent: {
        root: [
          "outline-outline",
          "bg-muted text-accent-foreground/15 hover:bg-hover-muted data-[state=checked]:text-accent-foreground",
          "aria-invalid:data-[state=checked]:text-destructive-accent-foreground",
        ],
      },
      muted: {
        root: [
          "outline-outline",
          "bg-muted text-accent-foreground/15 hover:bg-hover-muted data-[state=checked]:text-muted-foreground",
          "aria-invalid:data-[state=checked]:text-destructive-muted-foreground",
        ],
      },

      // -- primary --
      primary: {
        root: [
          "outline-primary",
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground hover:data-[state=checked]:bg-hover-primary",
        ],
      },
      "primary-accent": {
        root: [
          "outline-primary",
          "bg-primary-muted text-primary-accent-foreground/15 hover:bg-hover-primary-muted data-[state=checked]:text-primary-accent-foreground",
          "aria-invalid:data-[state=checked]:text-destructive-accent-foreground",
        ],
      },
      "primary-muted": {
        root: [
          "outline-primary",
          "bg-primary-muted text-primary-accent-foreground/15 hover:bg-hover-primary-muted data-[state=checked]:text-primary-muted-foreground",
          "aria-invalid:data-[state=checked]:text-destructive-muted-foreground",
        ],
      },

      // -- secondary --
      secondary: {
        root: [
          "outline-secondary",
          "data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground hover:data-[state=checked]:bg-hover-secondary",
        ],
      },
      "secondary-accent": {
        root: [
          "outline-secondary",
          "bg-secondary-muted text-secondary-accent-foreground/15 hover:bg-hover-secondary-muted data-[state=checked]:text-secondary-accent-foreground",
          "aria-invalid:data-[state=checked]:text-destructive-accent-foreground",
        ],
      },
      "secondary-muted": {
        root: [
          "outline-secondary",
          "bg-secondary-muted text-secondary-accent-foreground/15 hover:bg-hover-secondary-muted data-[state=checked]:text-secondary-muted-foreground",
          "aria-invalid:data-[state=checked]:text-destructive-muted-foreground",
        ],
      },
    },
  },
  compoundVariants: [
    {
      variant: ["base", "primary", "secondary", "contrast"],
      className: {
        root: [
          "bg-background text-foreground/15 shadow-xs inset-ring inset-ring-border not-disabled:data-[state=checked]:inset-ring-0 dark:data-[state=unchecked]:bg-faded",

          "hover:not-aria-invalid:data-[state=unchecked]:inset-ring-hover-border",

          "disabled:shadow-none disabled:inset-ring-border disabled:data-[state=checked]:bg-faded disabled:data-[state=unchecked]:bg-faded",

          "aria-invalid:text-destructive-accent-foreground/15 aria-invalid:inset-ring-destructive aria-invalid:data-[state=checked]:bg-destructive aria-invalid:data-[state=checked]:text-destructive-foreground hover:aria-invalid:data-[state=checked]:bg-hover-destructive aria-invalid:disabled:data-[state=checked]:bg-destructive-faded aria-invalid:disabled:data-[state=unchecked]:bg-destructive-faded dark:aria-invalid:data-[state=unchecked]:bg-destructive-faded",
        ],
      },
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
      className: {
        root: [
          "disabled:bg-muted",
          "aria-invalid:bg-destructive-muted hover:aria-invalid:bg-hover-destructive-muted",
        ],
      },
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

type RadioProps = React.ComponentProps<typeof RadioGroupPrimitive.Item> &
  VariantProps<typeof radioVariants> & {
    classNames?: {
      root?: string;
      indicator?: string;
    };
  };

function Radio({ variant, classNames, className, ...props }: RadioProps) {
  const context = React.useContext(RadioGroupContext);
  const { root, indicator } = radioVariants({
    variant: variant || context.variant,
  });

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio"
      className={root({ className: [classNames?.root, className] })}
      {...props}
    >
      <span
        data-slot="radio-indicator"
        role="presentation"
        className={indicator({ className: [classNames?.indicator] })}
      />
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, Radio, RadioGroupContext, radioVariants };
