"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

import { buttonVariants } from "~/components/ui/button";
import { Tron } from "~/components/ui/tron";

const radioButtonVariants = tv({
  base: [
    "group/radio-button",
    "touch-target relative isolate inline-flex items-center justify-center font-semibold whitespace-nowrap select-none",
    "active:opacity-80",
    "disabled:pointer-events-none disabled:line-through disabled:opacity-50 disabled:data-[state=checked]:shadow-none disabled:data-[state=unchecked]:shadow-none",
    "outline-offset-2 focus-visible:outline-2",
    "aria-invalid:outline-destructive",
    "**:[svg]:pointer-events-none **:[svg]:shrink-0 **:[svg]:grow-0",
  ],
  variants: {
    shape: {
      box: "rounded-md",
      pill: "rounded-full",
    },
    unchecked: {
      // --- base ---
      outline: [
        "data-[state=unchecked]:bg-background data-[state=unchecked]:text-foreground data-[state=unchecked]:shadow-xs data-[state=unchecked]:inset-ring data-[state=unchecked]:inset-ring-border",
        "hover:data-[state=unchecked]:bg-base-50 hover:data-[state=unchecked]:inset-ring-hover-border dark:hover:data-[state=unchecked]:bg-base-900",
        "disabled:data-[state=unchecked]:text-muted-foreground",
        "aria-invalid:data-[state=unchecked]:inset-ring-destructive/50",
      ],

      accent: [
        "data-[state=unchecked]:bg-muted data-[state=unchecked]:text-accent-foreground",
        "hover:data-[state=unchecked]:bg-hover-muted",
      ],

      muted: [
        "data-[state=unchecked]:bg-muted data-[state=unchecked]:text-muted-foreground",
        "hover:data-[state=unchecked]:bg-hover-muted",
      ],

      surface: [
        "data-[state=unchecked]:bg-faded data-[state=unchecked]:text-accent-foreground data-[state=unchecked]:inset-ring data-[state=unchecked]:inset-ring-faded-border",
        "hover:data-[state=unchecked]:bg-hover-faded",
      ],

      faded: [
        "data-[state=unchecked]:bg-faded data-[state=unchecked]:text-muted-foreground data-[state=unchecked]:inset-ring data-[state=unchecked]:inset-ring-faded-border",
        "hover:data-[state=unchecked]:bg-hover-faded",
      ],

      "base-shadow": [
        "data-[state=unchecked]:bg-base data-[state=unchecked]:shadow-base/50 data-[state=unchecked]:text-base-foreground data-[state=unchecked]:shadow-lg",
        "hover:data-[state=unchecked]:bg-hover-base",
      ],

      "base-gradient": [
        "data-[state=unchecked]:bg-linear-(--base-gradient) data-[state=unchecked]:text-base-foreground data-[state=unchecked]:shadow",
        "hover:data-[state=unchecked]:bg-linear-(--hover-base-gradient)",
      ],

      ghost: [
        "data-[state=unchecked]:bg-transparent data-[state=unchecked]:text-foreground",
        "hover:data-[state=unchecked]:bg-muted hover:data-[state=unchecked]:text-accent-foreground",
      ],

      // --- primary ---
      "primary-accent": [
        "data-[state=unchecked]:bg-primary-muted data-[state=unchecked]:text-primary-accent-foreground",
        "hover:data-[state=unchecked]:bg-hover-primary-muted",
      ],

      "primary-muted": [
        "data-[state=unchecked]:bg-primary-muted data-[state=unchecked]:text-primary-muted-foreground",
        "hover:data-[state=unchecked]:bg-hover-primary-muted",
      ],

      "primary-surface": [
        "data-[state=unchecked]:bg-primary-faded data-[state=unchecked]:text-primary-accent-foreground data-[state=unchecked]:inset-ring data-[state=unchecked]:inset-ring-primary-faded-border",
        "hover:data-[state=unchecked]:bg-hover-primary-faded",
      ],

      "primary-faded": [
        "data-[state=unchecked]:bg-primary-faded data-[state=unchecked]:text-primary-muted-foreground data-[state=unchecked]:inset-ring data-[state=unchecked]:inset-ring-primary-faded-border",
        "hover:data-[state=unchecked]:bg-hover-primary-faded",
      ],

      "primary-tron": [
        "data-[state=unchecked]:bg-background data-[state=unchecked]:bg-linear-(--primary-tron-gradient) data-[state=unchecked]:text-primary-muted-foreground data-[state=unchecked]:shadow data-[state=unchecked]:inset-ring data-[state=unchecked]:inset-ring-primary-tron-border",
        "hover:data-[state=unchecked]:bg-linear-(--hover-primary-tron-gradient) hover:data-[state=unchecked]:inset-ring-hover-primary-tron-border",
        "[--tron-beam:var(--color-primary)] [--tron-blur:var(--color-primary-tron-blur)]",
      ],

      "primary-ghost": [
        "data-[state=unchecked]:text-primary-muted-foreground",
        "hover:data-[state=unchecked]:bg-primary-muted hover:data-[state=unchecked]:text-primary-accent-foreground",
      ],

      // secondary
      "secondary-accent": [
        "data-[state=unchecked]:bg-secondary-muted data-[state=unchecked]:text-secondary-accent-foreground",
        "hover:data-[state=unchecked]:bg-hover-secondary-muted",
      ],

      "secondary-muted": [
        "data-[state=unchecked]:bg-secondary-muted data-[state=unchecked]:text-secondary-muted-foreground",
        "hover:data-[state=unchecked]:bg-hover-secondary-muted",
      ],

      "secondary-surface": [
        "data-[state=unchecked]:bg-secondary-faded data-[state=unchecked]:text-secondary-accent-foreground data-[state=unchecked]:inset-ring data-[state=unchecked]:inset-ring-secondary-faded-border",
        "hover:data-[state=unchecked]:bg-hover-secondary-faded",
      ],

      "secondary-faded": [
        "data-[state=unchecked]:bg-secondary-faded data-[state=unchecked]:text-secondary-muted-foreground data-[state=unchecked]:inset-ring data-[state=unchecked]:inset-ring-secondary-faded-border",
        "hover:data-[state=unchecked]:bg-hover-secondary-faded",
      ],

      "secondary-tron": [
        "data-[state=unchecked]:bg-background data-[state=unchecked]:bg-linear-(--secondary-tron-gradient) data-[state=unchecked]:text-secondary-muted-foreground data-[state=unchecked]:shadow data-[state=unchecked]:inset-ring data-[state=unchecked]:inset-ring-secondary-tron-border",
        "hover:data-[state=unchecked]:bg-linear-(--hover-secondary-tron-gradient) hover:data-[state=unchecked]:inset-ring-hover-secondary-tron-border",
        "[--tron-beam:var(--color-secondary)] [--tron-blur:var(--color-secondary-tron-blur)]",
      ],

      "secondary-ghost": [
        "data-[state=unchecked]:text-secondary-muted-foreground",
        "hover:data-[state=unchecked]:bg-secondary-muted hover:data-[state=unchecked]:text-secondary-accent-foreground",
      ],
    },
    checked: {
      outline: [
        "data-[state=checked]:bg-background data-[state=checked]:text-foreground data-[state=checked]:shadow-xs data-[state=checked]:inset-ring data-[state=checked]:inset-ring-border",
        "hover:data-[state=checked]:bg-base-50 hover:data-[state=checked]:inset-ring-hover-border dark:hover:data-[state=checked]:bg-base-900",
        "disabled:data-[state=checked]:text-muted-foreground",
        "aria-invalid:data-[state=checked]:inset-ring-destructive/50",
      ],

      contrast: [
        "data-[state=checked]:bg-contrast data-[state=checked]:text-contrast-foreground",
        "hover:data-[state=checked]:bg-hover-contrast",
      ],

      base: [
        "data-[state=checked]:bg-base-bg data-[state=checked]:text-base-foreground data-[state=checked]:shadow",
        "hover:data-[state=checked]:bg-hover-base",
      ],

      accent: [
        "data-[state=checked]:bg-muted data-[state=checked]:text-accent-foreground",
        "hover:data-[state=checked]:bg-hover-muted",
      ],

      muted: [
        "data-[state=checked]:bg-muted data-[state=checked]:text-muted-foreground",
        "hover:data-[state=checked]:bg-hover-muted",
      ],

      surface: [
        "data-[state=checked]:bg-faded data-[state=checked]:text-accent-foreground data-[state=checked]:inset-ring data-[state=checked]:inset-ring-faded-border",
        "hover:data-[state=checked]:bg-hover-faded",
      ],

      faded: [
        "data-[state=checked]:bg-faded data-[state=checked]:text-muted-foreground data-[state=checked]:inset-ring data-[state=checked]:inset-ring-faded-border",
        "hover:data-[state=checked]:bg-hover-faded",
      ],

      "base-shadow": [
        "data-[state=checked]:bg-base data-[state=checked]:shadow-base/50 data-[state=checked]:text-base-foreground data-[state=checked]:shadow-lg",
        "hover:data-[state=checked]:bg-hover-base",
      ],

      "base-gradient": [
        "data-[state=checked]:bg-linear-(--base-gradient) data-[state=checked]:text-base-foreground data-[state=checked]:shadow",
        "hover:data-[state=checked]:bg-linear-(--hover-base-gradient)",
      ],

      // --- primary ---
      primary: [
        "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:shadow",
        "hover:data-[state=checked]:bg-hover-primary",
      ],

      "primary-accent": [
        "data-[state=checked]:bg-primary-muted data-[state=checked]:text-primary-accent-foreground",
        "hover:data-[state=checked]:bg-hover-primary-muted",
      ],

      "primary-muted": [
        "data-[state=checked]:bg-primary-muted data-[state=checked]:text-primary-muted-foreground",
        "hover:data-[state=checked]:bg-hover-primary-muted",
      ],

      "primary-surface": [
        "data-[state=checked]:bg-primary-faded data-[state=checked]:text-primary-accent-foreground data-[state=checked]:inset-ring data-[state=checked]:inset-ring-primary-faded-border",
        "hover:data-[state=checked]:bg-hover-primary-faded",
      ],

      "primary-faded": [
        "data-[state=checked]:bg-primary-faded data-[state=checked]:text-primary-muted-foreground data-[state=checked]:inset-ring data-[state=checked]:inset-ring-primary-faded-border",
        "hover:data-[state=checked]:bg-hover-primary-faded",
      ],

      "primary-tron": [
        "data-[state=checked]:bg-background data-[state=checked]:bg-linear-(--primary-tron-gradient) data-[state=checked]:text-primary-muted-foreground data-[state=checked]:shadow data-[state=checked]:inset-ring data-[state=checked]:inset-ring-primary-tron-border",
        "hover:data-[state=checked]:bg-linear-(--hover-primary-tron-gradient) hover:data-[state=checked]:inset-ring-hover-primary-tron-border",
        "[--tron-beam:var(--color-primary)] [--tron-blur:var(--color-primary-tron-blur)]",
      ],

      "primary-shadow": [
        "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:shadow-lg data-[state=checked]:shadow-primary/50",
        "hover:data-[state=checked]:bg-hover-primary",
      ],

      "primary-gradient": [
        "data-[state=checked]:bg-linear-(--primary-gradient) data-[state=checked]:text-primary-foreground data-[state=checked]:shadow",
        "hover:data-[state=checked]:bg-linear-(--hover-primary-gradient)",
      ],

      // secondary
      secondary: [
        "data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground data-[state=checked]:shadow",
        "hover:data-[state=checked]:bg-hover-secondary",
      ],

      "secondary-accent": [
        "data-[state=checked]:bg-secondary-muted data-[state=checked]:text-secondary-accent-foreground",
        "hover:data-[state=checked]:bg-hover-secondary-muted",
      ],

      "secondary-muted": [
        "data-[state=checked]:bg-secondary-muted data-[state=checked]:text-secondary-muted-foreground",
        "hover:data-[state=checked]:bg-hover-secondary-muted",
      ],

      "secondary-surface": [
        "data-[state=checked]:bg-secondary-faded data-[state=checked]:text-secondary-accent-foreground data-[state=checked]:inset-ring data-[state=checked]:inset-ring-secondary-faded-border",
        "hover:data-[state=checked]:bg-hover-secondary-faded",
      ],

      "secondary-faded": [
        "data-[state=checked]:bg-secondary-faded data-[state=checked]:text-secondary-muted-foreground data-[state=checked]:inset-ring data-[state=checked]:inset-ring-secondary-faded-border",
        "hover:data-[state=checked]:bg-hover-secondary-faded",
      ],

      "secondary-tron": [
        "data-[state=checked]:bg-background data-[state=checked]:bg-linear-(--secondary-tron-gradient) data-[state=checked]:text-secondary-muted-foreground data-[state=checked]:shadow data-[state=checked]:inset-ring data-[state=checked]:inset-ring-secondary-tron-border",
        "hover:data-[state=checked]:bg-linear-(--hover-secondary-tron-gradient) hover:data-[state=checked]:inset-ring-hover-secondary-tron-border",
        "[--tron-beam:var(--color-secondary)] [--tron-blur:var(--color-secondary-tron-blur)]",
      ],

      "secondary-shadow": [
        "data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground data-[state=checked]:shadow-lg data-[state=checked]:shadow-secondary/50",
        "hover:data-[state=checked]:bg-hover-secondary",
      ],

      "secondary-gradient": [
        "data-[state=checked]:bg-linear-(--secondary-gradient) data-[state=checked]:text-secondary-foreground data-[state=checked]:shadow",
        "hover:data-[state=checked]:bg-linear-(--hover-secondary-gradient)",
      ],
    },

    size: {
      "2xs": buttonVariants.variants.size["2xs"],

      xs: buttonVariants.variants.size["xs"],

      sm: buttonVariants.variants.size["sm"],

      md: buttonVariants.variants.size["md"],

      lg: buttonVariants.variants.size["lg"],

      "icon-xs": buttonVariants.variants.size["icon-xs"],

      "icon-sm": buttonVariants.variants.size["icon-sm"],

      "icon-md": buttonVariants.variants.size["icon-md"],

      "icon-lg": buttonVariants.variants.size["icon-lg"],
    },
  },
  compoundVariants: [
    {
      unchecked: [
        "outline",
        "accent",
        "muted",
        "surface",
        "faded",
        "base-gradient",
        "ghost",
      ],
      className: "data-[state=unchecked]:outline-outline",
    },
    {
      unchecked: [
        "primary-accent",
        "primary-muted",
        "primary-surface",
        "primary-faded",
        "primary-tron",
        "primary-ghost",
      ],
      className: "data-[state=unchecked]:outline-primary",
    },
    {
      unchecked: [
        "secondary-accent",
        "secondary-muted",
        "secondary-surface",
        "secondary-faded",
        "secondary-tron",
        "secondary-ghost",
      ],
      className: "data-[state=unchecked]:outline-secondary",
    },
    {
      unchecked: ["accent", "primary-accent", "secondary-accent"],
      className: [
        "aria-invalid:data-[state=unchecked]:bg-destructive-muted aria-invalid:data-[state=unchecked]:text-destructive-accent-foreground hover:aria-invalid:data-[state=unchecked]:bg-hover-destructive-muted",
      ],
    },
    {
      unchecked: ["muted", "primary-muted", "secondary-muted"],
      className: [
        "aria-invalid:data-[state=unchecked]:bg-destructive-muted aria-invalid:data-[state=unchecked]:text-destructive-muted-foreground hover:aria-invalid:data-[state=unchecked]:bg-hover-destructive-muted",
      ],
    },
    {
      unchecked: ["surface", "primary-surface", "secondary-surface"],
      className: [
        "aria-invalid:bg-destructive-faded aria-invalid:text-destructive-accent-foreground aria-invalid:inset-ring-destructive-faded-border hover:aria-invalid:bg-hover-destructive-faded",
      ],
    },
    {
      unchecked: ["faded", "primary-faded", "secondary-faded"],
      className: [
        "aria-invalid:bg-destructive-faded aria-invalid:text-destructive-muted-foreground aria-invalid:inset-ring-destructive-faded-border hover:aria-invalid:bg-hover-destructive-faded",
      ],
    },
    {
      unchecked: ["primary-tron", "secondary-tron"],
      className: [
        "aria-invalid:bg-linear-(--destructive-tron-gradient) aria-invalid:text-destructive-muted-foreground aria-invalid:inset-ring-destructive-tron-border aria-invalid:[--tron-beam:var(--color-destructive)] aria-invalid:[--tron-blur:var(--color-destructive-tron-blur)] hover:aria-invalid:bg-linear-(--hover-destructive-tron-gradient) hover:aria-invalid:inset-ring-hover-destructive-tron-border",
      ],
    },
    {
      unchecked: ["ghost", "primary-ghost", "secondary-ghost"],
      className: [
        "aria-invalid:text-destructive-muted-foreground hover:aria-invalid:bg-destructive-muted hover:aria-invalid:text-destructive-accent-foreground",
      ],
    },
    {
      checked: [
        "outline",
        "base",
        "accent",
        "muted",
        "surface",
        "faded",
        "base-gradient",
      ],
      className: "data-[state=checked]:outline-outline",
    },
    {
      checked: [
        "primary",
        "primary-accent",
        "primary-muted",
        "primary-surface",
        "primary-faded",
        "primary-tron",
        "primary-shadow",
        "primary-gradient",
      ],
      className: "data-[state=checked]:outline-primary",
    },
    {
      checked: [
        "secondary",
        "secondary-accent",
        "secondary-muted",
        "secondary-surface",
        "secondary-faded",
        "secondary-tron",
        "secondary-shadow",
        "secondary-gradient",
      ],
      className: "data-[state=checked]:outline-secondary",
    },
    {
      checked: ["base", "primary", "secondary", "contrast"],
      className: [
        "aria-invalid:data-[state=checked]:bg-destructive aria-invalid:data-[state=checked]:text-destructive-foreground hover:aria-invalid:data-[state=checked]:bg-hover-destructive",
      ],
    },
    {
      checked: ["accent", "primary-accent", "secondary-accent"],
      className: [
        "aria-invalid:data-[state=checked]:bg-destructive-muted aria-invalid:data-[state=checked]:text-destructive-accent-foreground hover:aria-invalid:data-[state=checked]:bg-hover-destructive-muted",
      ],
    },
    {
      checked: ["muted", "primary-muted", "secondary-muted"],
      className: [
        "aria-invalid:data-[state=checked]:bg-destructive-muted aria-invalid:data-[state=checked]:text-destructive-muted-foreground hover:aria-invalid:data-[state=checked]:bg-hover-destructive-muted",
      ],
    },
    {
      checked: ["surface", "primary-surface", "secondary-surface"],
      className: [
        "aria-invalid:data-[state=checked]:bg-destructive-faded aria-invalid:data-[state=checked]:text-destructive-accent-foreground aria-invalid:data-[state=checked]:inset-ring-destructive-faded-border hover:aria-invalid:data-[state=checked]:bg-hover-destructive-faded",
      ],
    },
    {
      checked: ["faded", "primary-faded", "secondary-faded"],
      className: [
        "aria-invalid:data-[state=checked]:bg-destructive-faded aria-invalid:data-[state=checked]:text-destructive-muted-foreground aria-invalid:data-[state=checked]:inset-ring-destructive-faded-border hover:aria-invalid:data-[state=checked]:bg-hover-destructive-faded",
      ],
    },
    {
      checked: ["primary-tron", "secondary-tron"],
      className: [
        "aria-invalid:data-[state=checked]:bg-linear-(--destructive-tron-gradient) aria-invalid:data-[state=checked]:text-destructive-muted-foreground aria-invalid:data-[state=checked]:inset-ring-destructive-tron-border aria-invalid:data-[state=checked]:[--tron-beam:var(--color-destructive)] aria-invalid:data-[state=checked]:[--tron-blur:var(--color-destructive-tron-blur)] hover:aria-invalid:data-[state=checked]:bg-linear-(--hover-destructive-tron-gradient) hover:aria-invalid:data-[state=checked]:inset-ring-hover-destructive-tron-border",
      ],
    },
    {
      checked: ["base-shadow", "primary-shadow", "secondary-shadow"],
      className: [
        "aria-invalid:data-[state=checked]:bg-destructive aria-invalid:data-[state=checked]:text-destructive-foreground aria-invalid:data-[state=checked]:shadow-destructive/50 hover:aria-invalid:data-[state=checked]:bg-hover-destructive",
      ],
    },
    {
      checked: ["base-gradient", "primary-gradient", "secondary-gradient"],
      className: [
        "aria-invalid:data-[state=checked]:bg-linear-(--destructive-gradient) aria-invalid:data-[state=checked]:text-destructive-foreground hover:aria-invalid:data-[state=checked]:bg-linear-(--hover-destructive-gradient)",
      ],
    },
  ],
  defaultVariants: {
    shape: "box",
    unchecked: "outline",
    checked: "primary",
    size: "md",
  },
});

type RadioButtonGroupContextProps = {
  variants?: {
    unchecked?: VariantProps<typeof radioButtonVariants>["unchecked"];
    checked?: VariantProps<typeof radioButtonVariants>["checked"];
  };
  shape?: VariantProps<typeof radioButtonVariants>["shape"];
  size?: VariantProps<typeof radioButtonVariants>["size"];
};

const RadioButtonsGroupContext =
  React.createContext<RadioButtonGroupContextProps>({});

function RadioButtonGroup({
  className,
  variants = {
    unchecked: "outline",
    checked: "primary",
  },
  shape = "box",
  size = "md",
  orientation = "horizontal",
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> &
  RadioButtonGroupContextProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-button-group"
      data-orientation={orientation}
      orientation={orientation}
      className={cn("grid gap-2", className)}
      {...props}
    >
      <RadioButtonsGroupContext.Provider value={{ variants, shape, size }}>
        {children}
      </RadioButtonsGroupContext.Provider>
    </RadioGroupPrimitive.Root>
  );
}

type RadioButtonProps = React.ComponentProps<typeof RadioGroupPrimitive.Item> &
  Pick<RadioButtonGroupContextProps, "variants">;

function RadioButton({
  variants,
  className,
  children,
  ...props
}: RadioButtonProps) {
  const context = React.useContext(RadioButtonsGroupContext);

  const _unchecked = variants?.unchecked || context.variants?.unchecked;
  const _checked = variants?.checked || context.variants?.checked;

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-button"
      className={cn(
        radioButtonVariants({
          shape: context.shape,
          unchecked: _unchecked,
          checked: _checked,
          size: context.size,
        }),
        className
      )}
      {...props}
    >
      {_checked?.includes("tron") && (
        <>
          <Tron
            data-shape={context.shape}
            side="top"
            type="beam"
            className="hidden via-(--tron-beam) opacity-0 group-hover/radio-button:opacity-100 group-data-[state=checked]/radio-button:block"
          />
          <Tron
            side="top"
            type="blur"
            className="hidden via-(--tron-blur) opacity-0 group-hover/radio-button:opacity-100 group-data-[state=checked]/radio-button:block"
          />
          <Tron
            data-shape={context.shape}
            side="bottom"
            type="beam"
            className="hidden via-(--tron-beam) opacity-100 group-hover/radio-button:opacity-0 group-data-[state=checked]/radio-button:block"
          />
          <Tron
            side="bottom"
            type="blur"
            className="hidden via-(--tron-blur) opacity-100 group-hover/radio-button:opacity-0 group-data-[state=checked]/radio-button:block"
          />
        </>
      )}
      {_unchecked?.includes("tron") && (
        <>
          <Tron
            data-shape={context.shape}
            side="top"
            type="beam"
            className="block via-(--tron-beam) opacity-0 group-hover/radio-button:opacity-100 group-data-[state=checked]/radio-button:hidden"
          />
          <Tron
            side="top"
            type="blur"
            className="block via-(--tron-blur) opacity-0 group-hover/radio-button:opacity-100 group-data-[state=checked]/radio-button:hidden"
          />
          <Tron
            data-shape={context.shape}
            side="bottom"
            type="beam"
            className="block via-(--tron-beam) opacity-100 group-hover/radio-button:opacity-0 group-data-[state=checked]/radio-button:hidden"
          />
          <Tron
            side="bottom"
            type="blur"
            className="block via-(--tron-blur) opacity-100 group-hover/radio-button:opacity-0 group-data-[state=checked]/radio-button:hidden"
          />
        </>
      )}
      {children}
    </RadioGroupPrimitive.Item>
  );
}

export { RadioButtonGroup, RadioButton, radioButtonVariants };
