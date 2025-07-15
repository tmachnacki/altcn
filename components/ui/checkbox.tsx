"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { tv, type VariantProps } from "tailwind-variants";
import { CheckIcon, MinusIcon } from "lucide-react";

const checkBoxVariants = tv({
  base: [
    "peer size-4 shrink-0 rounded-sm bg-background shadow-xs inset-ring inset-ring-border not-disabled:not-data-[state=unchecked]:inset-ring-0 dark:data-[state=unchecked]:bg-faded",
    "hover:not-aria-invalid:not-disabled:data-[state=unchecked]:inset-ring-hover-border",
    "outline-offset-2 focus-visible:outline-2",
    "disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50 disabled:inset-ring-border disabled:not-data-[state=unchecked]:text-muted-foreground",
    "aria-invalid:inset-ring-destructive aria-invalid:outline-destructive aria-invalid:not-data-[state=unchecked]:bg-destructive aria-invalid:not-data-[state=unchecked]:text-destructive-foreground dark:aria-invalid:data-[state=unchecked]:bg-destructive-faded",
  ],
  variants: {
    variant: {
      base: [
        "outline-outline",
        "not-data-[state=unchecked]:bg-base not-data-[state=unchecked]:text-base-foreground",
      ],
      primary: [
        "outline-primary",
        "not-data-[state=unchecked]:bg-primary not-data-[state=unchecked]:text-primary-foreground",
      ],
      secondary: [
        "outline-secondary",
        "not-data-[state=unchecked]:bg-secondary not-data-[state=unchecked]:text-secondary-foreground",
      ],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

function Checkbox({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkBoxVariants>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={checkBoxVariants({
        variant,
        className: ["group/checkbox", className],
      })}
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
