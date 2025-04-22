"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon, MinusIcon } from "lucide-react";

import { cn } from "~/lib/utils";

const checkBoxVariants = cva(
  [
    "peer size-4 shrink-0 rounded-[4px] border border-border bg-background shadow-xs dark:data-[state=unchecked]:bg-faded",
    "hover:not-aria-invalid:not-disabled:data-[state=unchecked]:border-hover-border",
    "outline-offset-2 focus-visible:outline-2",
    "disabled:cursor-not-allowed disabled:border-border disabled:bg-muted disabled:opacity-50 disabled:not-data-[state=unchecked]:text-muted-foreground",
    "aria-invalid:border-destructive aria-invalid:outline-destructive aria-invalid:not-data-[state=unchecked]:bg-destructive aria-invalid:not-data-[state=unchecked]:text-destructive-foreground dark:aria-invalid:data-[state=unchecked]:bg-destructive-faded",
  ],
  {
    variants: {
      variant: {
        primary: [
          "outline-primary",
          "not-data-[state=unchecked]:border-primary not-data-[state=unchecked]:bg-primary not-data-[state=unchecked]:text-primary-foreground",
        ],
        secondary: [
          "outline-secondary",
          "not-data-[state=unchecked]:border-secondary not-data-[state=unchecked]:bg-secondary not-data-[state=unchecked]:text-secondary-foreground",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

function Checkbox({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkBoxVariants>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkBoxVariants({ variant }), "group/checkbox", className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current"
      >
        <CheckIcon className="block size-3.5 group-data-[state=indeterminate]/checkbox:hidden" />
        <MinusIcon className="hidden size-3 group-data-[state=indeterminate]/checkbox:block" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
