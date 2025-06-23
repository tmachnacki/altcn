"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon } from "lucide-react";

import { cn } from "~/lib/utils";

const radioCardsItemVariants = cva(
  [
    "flex items-start justify-start gap-2 rounded-md bg-background px-4 py-3.5 text-start shadow-xs inset-ring inset-ring-border *:not-data-[slot=radio-cards-indicator]:flex-1",
    "hover:not-disabled:not-data-[state=checked]:shadow-md hover:not-disabled:not-data-[state=checked]:not-aria-invalid:inset-ring-hover-border dark:hover:not-disabled:not-data-[state=checked]:not-aria-invalid:shadow-muted-foreground/20",
    "disabled:cursor-not-allowed disabled:bg-faded disabled:opacity-50 disabled:shadow-none disabled:[--radio-cards-indicator-bg:var(--color-base-bg)] disabled:[--radio-cards-indicator-text:var(--color-base-foreground)] disabled:data-[state=checked]:shadow-none data-[state=checked]:disabled:inset-ring-base-bg",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "data-[state=checked]:inset-ring-2",
    "aria-invalid:inset-ring-destructive aria-invalid:outline-destructive aria-invalid:[--radio-cards-indicator-bg:var(--color-destructive)] aria-invalid:[--radio-cards-indicator-text:var(--color-destructive-foreground)] aria-invalid:data-[state=checked]:shadow-md aria-invalid:data-[state=checked]:shadow-destructive/50",
  ],
  {
    variants: {
      variant: {
        primary:
          "outline-primary [--radio-cards-indicator-bg:var(--color-primary)] [--radio-cards-indicator-text:var(--color-primary-foreground)] data-[state=checked]:shadow-md data-[state=checked]:shadow-primary/50 data-[state=checked]:inset-ring-primary",
        secondary:
          "outline-secondary [--radio-cards-indicator-bg:var(--color-secondary)] [--radio-cards-indicator-text:var(--color-secondary-foreground)] data-[state=checked]:shadow-md data-[state=checked]:shadow-secondary/50 data-[state=checked]:inset-ring-secondary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

function RadioCards({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-cards"
      className={cn("", className)}
      {...props}
    />
  );
}

function RadioCardsItem({
  variant = "primary",
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> &
  VariantProps<typeof radioCardsItemVariants>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-cards-item"
      data-variant={variant}
      className={cn(
        radioCardsItemVariants({ variant }),
        "group/radio-cards-item",
        className
      )}
      {...props}
    />
  );
}

function RadioCardsIndicator({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Indicator>) {
  return (
    <RadioGroupPrimitive.Indicator
      data-slot="radio-cards-indicator"
      aria-hidden="true"
      className={cn(
        "relative inline-flex size-4 shrink-0 grow-0 items-center justify-center self-start rounded-full bg-(--radio-cards-indicator-bg) text-(--radio-cards-indicator-text)",
        className
      )}
      {...props}
    >
      <CheckIcon className="size-3 stroke-3 text-current" />
    </RadioGroupPrimitive.Indicator>
  );
}
export { RadioCards, RadioCardsItem, RadioCardsIndicator };
