"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

// import { buttonVariants } from "~/components/ui/button";
import { Tron } from "~/components/ui/tron";

const radioButtonVariants = tv({
  base: [
    "group/radio-button",
    "touch-target relative isolate inline-flex items-center justify-center gap-2 text-sm font-semibold whitespace-nowrap select-none",
    "active:opacity-80",
    "disabled:pointer-events-none disabled:line-through disabled:opacity-50 disabled:shadow-none",
    "outline-offset-2 focus-visible:outline-2",
    "aria-invalid:outline-destructive",
    "**:[svg]:pointer-events-none **:[svg]:shrink-0 **:[svg]:grow-0",
  ],
  variants: {
    shape: {
      box: "rounded-md",
      pill: "rounded-full",
    },
    variant: {
      // --- base ---
      outline: [
        "bg-background text-foreground shadow-xs inset-ring inset-ring-border",
        "hover:bg-base-50 hover:inset-ring-hover-border dark:hover:bg-base-900",
        "disabled:text-muted-foreground",
        "aria-invalid:inset-ring-destructive/50",
      ],

      base: ["bg-base-bg text-base-foreground shadow", "hover:bg-hover-base"],

      accent: ["bg-muted text-accent-foreground", "hover:bg-hover-muted"],

      muted: ["bg-muted text-muted-foreground", "hover:bg-hover-muted"],

      surface: [
        "bg-faded text-accent-foreground inset-ring inset-ring-faded-border",
        "hover:bg-hover-faded",
      ],

      faded: [
        "bg-faded text-muted-foreground inset-ring inset-ring-faded-border",
        "hover:bg-hover-faded",
      ],

      "base-shadow": [
        "bg-base shadow-base/50 text-base-foreground shadow-lg",
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
        "bg-primary-faded text-primary-accent-foreground inset-ring inset-ring-primary-faded-border",
        "hover:bg-hover-primary-faded",
      ],

      "primary-faded": [
        "bg-primary-faded text-primary-muted-foreground inset-ring inset-ring-primary-faded-border",
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
        "bg-secondary-faded text-secondary-accent-foreground inset-ring inset-ring-secondary-faded-border",
        "hover:bg-hover-secondary-faded",
      ],

      "secondary-faded": [
        "bg-secondary-faded text-secondary-muted-foreground inset-ring inset-ring-secondary-faded-border",
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
    },
    size: {
      xs: [
        "h-(--size-xs) gap-1.5 rounded-sm px-2 py-1 text-xs font-medium",
        "has-[[data-slot='spinner']]:px-2 has-[>svg]:px-2 **:data-[slot=spinner]:not-[[class*='size-']]:size-3.5 **:[svg]:not-[[class*='size-']]:size-3.5",
      ],

      sm: [
        "h-(--size-sm) rounded-md px-3 py-1.5",
        "has-[[data-slot='spinner']]:px-2.5 has-[>svg]:px-2.5 **:data-[slot=spinner]:not-[[class*='size-']]:size-4",
        "**:[svg]:not-[[class*='size-']]:size-4",
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
      className: [
        "aria-invalid:bg-destructive aria-invalid:text-destructive-foreground hover:aria-invalid:bg-hover-destructive",
      ],
    },
    {
      variant: ["accent", "primary-accent", "secondary-accent"],
      className: [
        "aria-invalid:bg-destructive-muted aria-invalid:text-destructive-accent-foreground hover:aria-invalid:bg-hover-destructive-muted",
      ],
    },
    {
      variant: ["muted", "primary-muted", "secondary-muted"],
      className: [
        "aria-invalid:bg-destructive-muted aria-invalid:text-destructive-muted-foreground hover:aria-invalid:bg-hover-destructive-muted",
      ],
    },
    {
      variant: ["surface", "primary-surface", "secondary-surface"],
      className: [
        "aria-invalid:bg-destructive-faded aria-invalid:text-destructive-accent-foreground aria-invalid:inset-ring-destructive-faded-border hover:aria-invalid:bg-hover-destructive-faded",
      ],
    },
    {
      variant: ["faded", "primary-faded", "secondary-faded"],
      className: [
        "aria-invalid:bg-destructive-faded aria-invalid:text-destructive-muted-foreground aria-invalid:inset-ring-destructive-faded-border hover:aria-invalid:bg-hover-destructive-faded",
      ],
    },
    {
      variant: ["primary-tron", "secondary-tron"],
      className: [
        "aria-invalid:bg-linear-(--destructive-tron-gradient) aria-invalid:text-destructive-muted-foreground aria-invalid:inset-ring-destructive-tron-border aria-invalid:[--tron-beam:var(--color-destructive)] aria-invalid:[--tron-blur:var(--color-destructive-tron-blur)] hover:aria-invalid:bg-linear-(--hover-destructive-tron-gradient) hover:aria-invalid:inset-ring-hover-destructive-tron-border",
      ],
    },
    {
      variant: ["base-shadow", "primary-shadow", "secondary-shadow"],
      className: [
        "aria-invalid:bg-destructive aria-invalid:text-destructive-foreground aria-invalid:shadow-destructive/50 hover:aria-invalid:bg-hover-destructive",
      ],
    },
    {
      variant: ["base-gradient", "primary-gradient", "secondary-gradient"],
      className: [
        "aria-invalid:bg-linear-(--destructive-gradient) aria-invalid:text-destructive-foreground hover:aria-invalid:bg-linear-(--hover-destructive-gradient)",
      ],
    },
    {
      variant: ["ghost", "primary-ghost", "secondary-ghost"],
      className: [
        "aria-invalid:text-destructive-muted-foreground hover:aria-invalid:bg-destructive-muted hover:aria-invalid:text-destructive-accent-foreground",
      ],
    },
  ],
  defaultVariants: {
    shape: "box",
    variant: "outline",
    size: "md",
  },
});

type RadioButtonGroupContextProps = {
  variants?: {
    checked?: VariantProps<typeof radioButtonVariants>["variant"];
    unchecked?: VariantProps<typeof radioButtonVariants>["variant"];
  };
  shape?: VariantProps<typeof radioButtonVariants>["shape"];
  size?: VariantProps<typeof radioButtonVariants>["size"];
};

const RadioButtonsGroupContext =
  React.createContext<RadioButtonGroupContextProps>({});

function RadioButtonGroup({
  className,
  variants = {
    checked: "primary",
    unchecked: "outline",
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

type RadioButtonProps = Omit<
  React.ComponentProps<typeof RadioGroupPrimitive.Item>,
  "checked"
> &
  Pick<RadioButtonGroupContextProps, "variants"> &
  Required<
    Pick<React.ComponentProps<typeof RadioGroupPrimitive.Item>, "checked">
  >;

function RadioButton({
  checked,
  variants,
  className,
  children,
  ...props
}: RadioButtonProps) {
  const context = React.useContext(RadioButtonsGroupContext);

  const _checkedVariant = variants?.checked || context.variants?.checked;
  const _uncheckedVariant = variants?.unchecked || context.variants?.unchecked;

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-button"
      checked={checked}
      className={cn(
        radioButtonVariants({
          shape: context.shape,
          variant: checked ? _checkedVariant : _uncheckedVariant,
        }),
        className
      )}
      {...props}
    >
      {((checked && _checkedVariant?.includes("tron")) ||
        (!checked && _uncheckedVariant?.includes("tron"))) && (
        <>
          <Tron
            data-shape={context.shape}
            side="top"
            type="beam"
            className="via-(--tron-beam) opacity-0 group-hover/radio-button:opacity-100"
          />
          <Tron
            side="top"
            type="blur"
            className="via-(--tron-blur) opacity-0 group-hover/radio-button:opacity-100"
          />
          <Tron
            data-shape={context.shape}
            side="bottom"
            type="beam"
            className="animate-in via-(--tron-beam) fade-in-0 group-hover/radio-button:opacity-0"
          />
          <Tron
            side="bottom"
            type="blur"
            className="animate-in via-(--tron-blur) fade-in-0 group-hover/radio-button:opacity-0"
          />
        </>
      )}
      {children}
    </RadioGroupPrimitive.Item>
  );
}

export { RadioButtonGroup, RadioButton, radioButtonVariants };
