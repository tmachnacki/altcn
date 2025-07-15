"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

import { Tron } from "~/components/ui/tron";

const radioButtonsItemVariants = cva(
  [
    "touch-target relative isolate inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold whitespace-nowrap select-none",
    "active:opacity-80",
    "disabled:cursor-not-allowed disabled:line-through disabled:opacity-50 disabled:shadow-none",
    "outline-offset-2 focus-visible:outline-2",
    "aria-invalid:outline-destructive",
    "**:[svg]:pointer-events-none **:[svg]:shrink-0 **:[svg]:grow-0",
  ],
  {
    variants: {
      variant: {
        // --- base ---
        outline: [
          "bg-background text-foreground shadow-xs inset-ring inset-ring-border",
          "hover:not-disabled:bg-base-50 hover:not-disabled:not-aria-invalid:inset-ring-hover-border dark:hover:not-disabled:bg-base-900",
          "aria-invalid:inset-ring-destructive/50",
        ],

        base: [
          "bg-base-bg text-base-foreground shadow",
          "hover:not-disabled:not-aria-invalid:bg-hover-base",
        ],

        accent: [
          "bg-muted text-accent-foreground",
          "hover:not-disabled:not-aria-invalid:bg-hover-muted",
        ],

        muted: [
          "bg-muted text-muted-foreground",
          "hover:not-disabled:not-aria-invalid:bg-hover-muted",
        ],

        surface: [
          "bg-faded text-accent-foreground inset-ring inset-ring-faded-border",
          "hover:not-disabled:not-aria-invalid:bg-hover-faded",
        ],

        faded: [
          "bg-faded text-muted-foreground inset-ring inset-ring-faded-border",
          "hover:not-disabled:not-aria-invalid:bg-hover-faded",
        ],

        "base-shadow": [
          "bg-base text-base-foreground shadow-lg shadow-base/50",
          "hover:not-disabled:not-aria-invalid:bg-hover-base",
        ],

        "base-gradient": [
          "bg-linear-(--base-gradient) text-base-foreground shadow",
          "hover:not-disabled:not-aria-invalid:bg-linear-(--hover-base-gradient)",
        ],

        ghost: [
          "bg-transparent text-foreground",
          "hover:not-disabled:not-aria-invalid:bg-muted hover:not-disabled:not-aria-invalid:text-accent-foreground",
        ],

        // --- primary ---
        primary: [
          "bg-primary text-primary-foreground shadow",
          "hover:not-disabled:not-aria-invalid:bg-hover-primary",
        ],

        "primary-accent": [
          "bg-primary-muted text-primary-accent-foreground",
          "hover:not-disabled:not-aria-invalid:bg-hover-primary-muted",
        ],

        "primary-muted": [
          "bg-primary-muted text-primary-muted-foreground",
          "hover:not-disabled:not-aria-invalid:bg-hover-primary-muted",
        ],

        "primary-surface": [
          "bg-primary-faded text-primary-accent-foreground inset-ring inset-ring-primary-faded-border",
          "hover:not-disabled:not-aria-invalid:bg-hover-primary-faded",
        ],

        "primary-faded": [
          "bg-primary-faded text-primary-muted-foreground inset-ring inset-ring-primary-faded-border",
          "hover:not-disabled:not-aria-invalid:bg-hover-primary-faded",
        ],

        "primary-tron": [
          "bg-background bg-linear-(--primary-tron-gradient) text-primary-muted-foreground shadow inset-ring inset-ring-primary-tron-border",
          "hover:not-disabled:not-aria-invalid:bg-linear-(--hover-primary-tron-gradient) hover:not-disabled:not-aria-invalid:inset-ring-hover-primary-tron-border",
          "[--tron-beam:var(--color-primary)] [--tron-blur:var(--color-primary-tron-blur)]",
        ],

        "primary-shadow": [
          "bg-primary text-primary-foreground shadow-lg shadow-primary/50",
          "hover:not-disabled:not-aria-invalid:bg-hover-primary",
        ],

        "primary-gradient": [
          "bg-linear-(--primary-gradient) text-primary-foreground shadow",
          "hover:not-disabled:not-aria-invalid:bg-linear-(--hover-primary-gradient)",
        ],

        "primary-ghost": [
          "text-primary-muted-foreground",
          "hover:not-disabled:not-aria-invalid:bg-primary-muted hover:not-disabled:not-aria-invalid:text-primary-accent-foreground",
        ],

        // secondary
        secondary: [
          "bg-secondary text-secondary-foreground shadow",
          "hover:not-disabled:not-aria-invalid:bg-hover-secondary",
        ],

        "secondary-accent": [
          "bg-secondary-muted text-secondary-accent-foreground",
          "hover:not-disabled:not-aria-invalid:bg-hover-secondary-muted",
        ],

        "secondary-muted": [
          "bg-secondary-muted text-secondary-muted-foreground",
          "hover:not-disabled:not-aria-invalid:bg-hover-secondary-muted",
        ],

        "secondary-surface": [
          "bg-secondary-faded text-secondary-accent-foreground inset-ring inset-ring-secondary-faded-border",
          "hover:not-disabled:not-aria-invalid:bg-hover-secondary-faded",
        ],

        "secondary-faded": [
          "bg-secondary-faded text-secondary-muted-foreground inset-ring inset-ring-secondary-faded-border",
          "hover:not-disabled:not-aria-invalid:bg-hover-secondary-faded",
        ],

        "secondary-tron": [
          "bg-background bg-linear-(--secondary-tron-gradient) text-secondary-muted-foreground shadow inset-ring inset-ring-secondary-tron-border",
          "hover:not-disabled:not-aria-invalid:bg-linear-(--hover-secondary-tron-gradient) hover:not-disabled:not-aria-invalid:inset-ring-hover-secondary-tron-border",
          "[--tron-beam:var(--color-secondary)] [--tron-blur:var(--color-secondary-tron-blur)]",
        ],

        "secondary-shadow": [
          "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/50",
          "hover:not-disabled:not-aria-invalid:bg-hover-secondary",
        ],

        "secondary-gradient": [
          "bg-linear-(--secondary-gradient) text-secondary-foreground shadow",
          "hover:not-disabled:not-aria-invalid:bg-linear-(--hover-secondary-gradient)",
        ],

        "secondary-ghost": [
          "text-secondary-muted-foreground",
          "hover:not-disabled:not-aria-invalid:bg-secondary-muted hover:not-disabled:not-aria-invalid:text-secondary-accent-foreground",
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
        variant: ["base", "primary", "secondary"],
        className:
          "aria-invalid:bg-destructive aria-invalid:text-destructive-foreground hover:not-disabled:aria-invalid:bg-hover-destructive",
      },
      {
        variant: ["accent", "primary-accent", "secondary-accent"],
        className:
          "aria-invalid:bg-destructive-muted aria-invalid:text-destructive-accent-foreground hover:not-disabled:aria-invalid:bg-hover-destructive-muted",
      },
      {
        variant: ["muted", "primary-muted", "secondary-muted"],
        className:
          "aria-invalid:bg-destructive-muted aria-invalid:text-destructive-muted-foreground hover:not-disabled:aria-invalid:bg-hover-destructive-muted",
      },
      {
        variant: ["surface", "primary-surface", "secondary-surface"],
        className:
          "aria-invalid:bg-destructive-faded aria-invalid:text-destructive-accent-foreground aria-invalid:inset-ring-destructive-faded-border hover:not-disabled:aria-invalid:bg-hover-destructive-faded",
      },
      {
        variant: ["faded", "primary-faded", "secondary-faded"],
        className:
          "aria-invalid:bg-destructive-faded aria-invalid:text-destructive-muted-foreground aria-invalid:inset-ring-destructive-faded-border hover:not-disabled:aria-invalid:bg-hover-destructive-faded",
      },
      {
        variant: ["primary-tron", "secondary-tron"],
        className:
          "aria-invalid:bg-linear-(--destructive-tron-gradient) aria-invalid:text-destructive-muted-foreground aria-invalid:inset-ring-destructive-tron-border aria-invalid:[--tron-beam:var(--color-destructive)] aria-invalid:[--tron-blur:var(--color-destructive-tron-blur)] hover:not-disabled:aria-invalid:bg-linear-(--hover-destructive-tron-gradient) hover:not-disabled:aria-invalid:inset-ring-hover-destructive-tron-border",
      },
      {
        variant: ["base-shadow", "primary-shadow", "secondary-shadow"],
        className:
          "aria-invalid:bg-destructive aria-invalid:text-destructive-foreground aria-invalid:shadow-destructive/50 hover:not-disabled:aria-invalid:bg-hover-destructive",
      },
      {
        variant: ["base-gradient", "primary-gradient", "secondary-gradient"],
        className:
          "aria-invalid:bg-linear-(--destructive-gradient) aria-invalid:text-destructive-foreground hover:not-disabled:aria-invalid:bg-linear-(--hover-destructive-gradient)",
      },
      {
        variant: ["ghost", "primary-ghost", "secondary-ghost"],
        className:
          "aria-invalid:text-destructive-muted-foreground hover:not-disabled:aria-invalid:bg-destructive-muted hover:not-disabled:aria-invalid:text-destructive-accent-foreground",
      },
    ],
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

type RadioButtonsContextProps = {
  variants?: {
    checked?: VariantProps<typeof radioButtonsItemVariants>["variant"];
    unchecked?: VariantProps<typeof radioButtonsItemVariants>["variant"];
    size?: VariantProps<typeof radioButtonsItemVariants>["size"];
  };
};

const RadioButtonsContext = React.createContext<RadioButtonsContextProps>({});

function RadioButtons({
  className,
  variants = {
    checked: "primary",
    unchecked: "outline",
    size: "md",
  },
  orientation = "horizontal",
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> &
  RadioButtonsContextProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-buttons"
      orientation={orientation}
      data-orientation={orientation}
      className={cn("grid gap-2", className)}
      {...props}
    >
      <RadioButtonsContext.Provider value={{ variants }}>
        {children}
      </RadioButtonsContext.Provider>
    </RadioGroupPrimitive.Root>
  );
}

function RadioButtonsItem({
  checked,
  variants,
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
  variants?: {
    checked?: VariantProps<typeof radioButtonsItemVariants>["variant"];
    unchecked?: VariantProps<typeof radioButtonsItemVariants>["variant"];
  };
}) {
  const context = React.useContext(RadioButtonsContext);

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-buttons-item"
      checked={checked}
      className={cn(
        radioButtonsItemVariants({
          variant: checked
            ? variants?.checked || context.variants?.checked
            : variants?.unchecked || context.variants?.unchecked,
          size: context.variants?.size,
        }),
        "group/radio-buttons-item",
        className
      )}
      {...props}
    >
      {((checked &&
        (variants?.checked?.includes("tron") ||
          context.variants?.checked?.includes("tron"))) ||
        (!checked &&
          (variants?.unchecked?.includes("tron") ||
            context.variants?.unchecked?.includes("tron")))) && (
        <>
          <Tron
            side="top"
            type="beam"
            className="via-(--tron-beam) opacity-0 group-hover/radio-buttons-item:opacity-100"
          />
          <Tron
            side="top"
            type="blur"
            className="via-(--tron-blur) opacity-0 group-hover/radio-buttons-item:opacity-100"
          />
          <Tron
            side="bottom"
            type="beam"
            className="animate-in via-(--tron-beam) fade-in-0 group-hover/radio-buttons-item:opacity-0"
          />
          <Tron
            side="bottom"
            type="blur"
            className="animate-in via-(--tron-blur) fade-in-0 group-hover/radio-buttons-item:opacity-0"
          />
        </>
      )}
      {children}
    </RadioGroupPrimitive.Item>
  );
}

export { RadioButtons, RadioButtonsItem };
