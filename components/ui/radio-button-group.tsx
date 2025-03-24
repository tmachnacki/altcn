"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const radioButtonGroupItemVariants = cva(
  [
    "peer size-4 shrink-0 rounded-full border border-input shadow-xs hover:border-border-hover dark:not-data-[state=checked]:bg-faded",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50 disabled:hover:border-input",
    "aria-invalid:border-destructive aria-invalid:outline-destructive",
  ],
  {
    variants: {
      variant: {
        primary:
          "outline-primary data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        secondary:
          "outline-secondary data-[state=checked]:border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground",
        destructive:
          "outline-destructive data-[state=checked]:border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

const RadioButtonGroupVariantsContext = React.createContext<
  VariantProps<typeof radioButtonGroupItemVariants>
>({ variant: "primary" });

function RadioButtonGroup({
  className,
  variant = "primary",
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> &
  VariantProps<typeof radioButtonGroupItemVariants>) {
  return (
    <RadioButtonGroupVariantsContext.Provider value={{ variant }}>
      <RadioGroupPrimitive.Root
        data-slot="radio-group"
        className={cn("grid gap-3", className)}
        {...props}
      />
    </RadioButtonGroupVariantsContext.Provider>
  );
}

function RadioButtonGroupItem({
  variant: variantOverride,
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> &
  VariantProps<typeof radioButtonGroupItemVariants>) {
  const { variant: variantFromContext } = React.useContext(
    RadioButtonGroupVariantsContext,
  );
  const variant = variantOverride ?? variantFromContext;

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      data-variant={variant}
      className={cn(radioButtonGroupItemVariants({ variant }), className)}
      {...props}
    />
  );
}

export { RadioButtonGroup, RadioButtonGroupItem };
