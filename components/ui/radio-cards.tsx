"use client";

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "~/lib/utils";

import { Label } from "~/components/ui/label";
import {
  RadioGroup,
  RadioGroupContext,
  RadioGroupItem,
} from "~/components/ui/radio-group";

const radioCardItemVariants = cva(
  [
    "text-sm leading-normal font-normal [--accent-text:var(--color-accent-foreground)] [--muted-text:var(--color-muted-foreground)]",
    "relative flex items-start gap-3 rounded-lg p-4 outline -outline-offset-1 outline-border",
    "hover:z-10 hover:not-has-data-[state=checked]:not-has-disabled:bg-faded",
    "has-data-[state=checked]:not-has-focus-visible:z-20",
    "has-disabled:cursor-not-allowed has-disabled:opacity-50",
    "has-focus-visible:z-30 has-focus-visible:outline-2",
    "has-aria-invalid:outline-destructive/35 has-aria-invalid:has-focus-visible:outline-destructive has-aria-invalid:has-data-[state=checked]:bg-destructive-faded has-aria-invalid:has-data-[state=checked]:[--accent-text:var(--color-destructive-accent-foreground)] has-aria-invalid:has-data-[state=checked]:[--muted-text:var(--color-destructive-muted-foreground)] has-aria-invalid:has-data-[state=checked]:not-has-focus-visible:outline-destructive/50",
  ],
  {
    variants: {
      variant: {
        base: [
          "has-focus-visible:outline-outline has-data-[state=checked]:bg-faded has-data-[state=checked]:[--accent-text:var(--color-accent-foreground)] has-data-[state=checked]:[--muted-text:var(--color-muted-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-hover-border",
        ],
        primary: [
          "has-focus-visible:outline-primary has-data-[state=checked]:bg-primary-faded has-data-[state=checked]:[--accent-text:var(--color-primary-accent-foreground)] has-data-[state=checked]:[--muted-text:var(--color-primary-muted-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-primary/50",
        ],
        secondary: [
          "has-focus-visible:outline-secondary has-data-[state=checked]:bg-secondary-faded has-data-[state=checked]:[--accent-text:var(--color-secondary-accent-foreground)] has-data-[state=checked]:[--muted-text:var(--color-secondary-muted-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-secondary/50",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

function RadioCards({
  variant = "primary",
  className,
  ...props
}: React.ComponentProps<typeof RadioGroup>) {
  return (
    <RadioGroup
      data-slot="radio-cards"
      className={cn("relative isolate", className)}
      variant={variant}
      {...props}
    />
  );
}

function RadioCardsItem({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof Label> & {
  variant?: React.ComponentProps<typeof RadioGroupItem>["variant"];
}) {
  const context = React.useContext(RadioGroupContext);
  return (
    <Label
      data-slot="radio-cards-item"
      className={cn(
        radioCardItemVariants({ variant: variant || context.variant }),
        "group/radio-card-item",
        className
      )}
      {...props}
    />
  );
}

function RadioCardsItemContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="radio-cards-item-content"
      className={cn("flex-1", className)}
      {...props}
    />
  );
}

function RadioCardsItemLabel({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="radio-cards-item-label"
      className={cn(
        "block text-sm/4 font-medium text-(--accent-text)",
        className
      )}
      {...props}
    />
  );
}

function RadioCardsItemDescription({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="radio-cards-item-description"
      className={cn("block font-normal text-(--muted-text)", className)}
      {...props}
    />
  );
}

function RadioCardsItemRadio({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof RadioGroupItem>) {
  return (
    <RadioGroupItem
      variant={variant}
      className={cn("focus-visible:outline-none", className)}
      {...props}
    />
  );
}

export {
  RadioCards,
  RadioCardsItem,
  RadioCardsItemContent,
  RadioCardsItemLabel,
  RadioCardsItemDescription,
  RadioCardsItemRadio,
};
