"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";
import { CircleIcon } from "lucide-react";

import { cn } from "~/lib/utils";

const radioGroupItemVariants = cva(
  [
    "peer size-4 shrink-0 rounded-full border border-border bg-background shadow-xs dark:not-data-[state=checked]:bg-faded",
    "hover:not-aria-invalid:not-disabled:data-[state=unchecked]:border-hover-border",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:data-[state=checked]:border-border disabled:data-[state=checked]:bg-muted disabled:data-[state=checked]:text-muted-foreground disabled:data-[state=unchecked]:border-border disabled:data-[state=unchecked]:bg-muted disabled:data-[state=unchecked]:text-muted-foreground",
    "aria-invalid:border-destructive aria-invalid:outline-destructive aria-invalid:disabled:bg-destructive-muted aria-invalid:data-[state=checked]:bg-destructive aria-invalid:data-[state=checked]:text-destructive-foreground dark:aria-invalid:data-[state=unchecked]:bg-destructive-faded",
  ],
  {
    variants: {
      variant: {
        primary:
          "outline-primary data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        secondary:
          "outline-secondary data-[state=checked]:border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const RadioGroupContext = React.createContext<
  VariantProps<typeof radioGroupItemVariants>
>({});

function RadioGroup({
  className,
  variant = "primary",
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> &
  VariantProps<typeof radioGroupItemVariants>) {
  return (
    <RadioGroupContext.Provider value={{ variant }}>
      <RadioGroupPrimitive.Root
        data-slot="radio-group"
        className={cn("grid gap-3", className)}
        {...props}
      />
    </RadioGroupContext.Provider>
  );
}

function RadioGroupItem({
  variant,
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> &
  VariantProps<typeof radioGroupItemVariants>) {
  const context = React.useContext(RadioGroupContext);

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      data-variant={variant || context.variant}
      className={cn(
        radioGroupItemVariants({ variant: variant || context.variant }),
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current stroke-none" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
