"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

import { Checkbox } from "~/components/ui/checkbox";

const checkboxCardsItemVariants = tv({
  base: [
    "[--accent-text:var(--color-accent-foreground)] [--muted-text:var(--color-muted-foreground)]",

    "relative flex items-start gap-3 rounded-lg p-4 shadow-xs outline -outline-offset-1 outline-border",

    "hover:z-10 hover:not-has-data-[state=checked]:bg-faded",

    "has-data-[state=checked]:not-has-focus-visible:z-20",

    "has-disabled:pointer-events-none has-disabled:opacity-50 has-disabled:shadow-none has-disabled:has-data-[state=checked]:bg-faded has-disabled:has-data-[state=checked]:outline-outline/50 has-disabled:has-data-[state=checked]:[--accent-text:var(--color-accent-foreground)] has-disabled:has-data-[state=checked]:[--muted-text:var(--color-muted-foreground)]",

    "has-focus-visible:z-30 has-focus-visible:outline-2",

    "has-aria-invalid:outline-destructive/35 has-aria-invalid:has-focus-visible:outline-destructive has-aria-invalid:has-data-[state=checked]:bg-destructive-faded has-aria-invalid:has-data-[state=checked]:[--accent-text:var(--color-destructive-accent-foreground)] has-aria-invalid:has-data-[state=checked]:[--muted-text:var(--color-destructive-muted-foreground)] has-aria-invalid:has-data-[state=checked]:not-has-focus-visible:outline-destructive/50 hover:has-aria-invalid:has-data-[state=checked]:bg-hover-destructive-faded",
  ],
  variants: {
    variant: {
      base: [
        "has-focus-visible:outline-outline has-data-[state=checked]:bg-faded has-data-[state=checked]:[--accent-text:var(--color-accent-foreground)] has-data-[state=checked]:[--muted-text:var(--color-muted-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-outline/50 hover:has-data-[state=checked]:bg-hover-faded",
      ],
      primary: [
        "has-focus-visible:outline-primary has-data-[state=checked]:bg-primary-faded has-data-[state=checked]:[--accent-text:var(--color-primary-accent-foreground)] has-data-[state=checked]:[--muted-text:var(--color-primary-muted-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-primary/50 hover:has-data-[state=checked]:bg-hover-primary-faded",
      ],
      secondary: [
        "has-focus-visible:outline-secondary has-data-[state=checked]:bg-secondary-faded has-data-[state=checked]:[--accent-text:var(--color-secondary-accent-foreground)] has-data-[state=checked]:[--muted-text:var(--color-secondary-muted-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-secondary/50 hover:has-data-[state=checked]:bg-hover-secondary-faded",
      ],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const CheckboxCardsContext = React.createContext<
  VariantProps<typeof checkboxCardsItemVariants>
>({});

function CheckboxCards({
  variant = "primary",
  className,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof checkboxCardsItemVariants>) {
  return (
    <CheckboxCardsContext.Provider value={{ variant }}>
      <div
        data-slot="checkbox-cards"
        className={cn("relative isolate", className)}
        {...props}
      />
    </CheckboxCardsContext.Provider>
  );
}

function CheckboxCardsItem({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof checkboxCardsItemVariants>) {
  const context = React.useContext(CheckboxCardsContext);
  return (
    <LabelPrimitive.Root
      data-slot="checkbox-cards-item"
      className={checkboxCardsItemVariants({
        variant: variant || context.variant,
        className: ["group/checkbox-card-item", className],
      })}
      {...props}
    />
  );
}

function CheckboxCardsItemContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="checkbox-cards-item-content"
      className={cn("grid flex-1 gap-1.5", className)}
      {...props}
    />
  );
}

function CheckboxCardsItemLabel({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="checkbox-cards-item-label"
      role=""
      className={cn(
        "block text-sm/4 font-medium text-(--accent-text)",
        className
      )}
      {...props}
    />
  );
}

function CheckboxCardsItemDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="checkbox-cards-item-description"
      className={cn("block text-sm text-(--muted-text)", className)}
      {...props}
    />
  );
}

function CheckboxCardsItemCheckbox({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof Checkbox>) {
  const context = React.useContext(CheckboxCardsContext);
  return (
    <Checkbox
      variant={variant || context.variant}
      className={cn(
        "focus-visible:outline-none disabled:opacity-100",
        className
      )}
      {...props}
    />
  );
}

export {
  CheckboxCards,
  CheckboxCardsItem,
  CheckboxCardsItemContent,
  CheckboxCardsItemLabel,
  CheckboxCardsItemDescription,
  CheckboxCardsItemCheckbox,
  checkboxCardsItemVariants,
};
