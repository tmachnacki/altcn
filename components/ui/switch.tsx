"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const switchVariants = cva(
  [
    "peer inline-flex h-[calc(var(--spacing)*4.5)] w-8 shrink-0 items-center rounded-full border border-transparent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        // -- primary --
        primary: [
          "focus-visible:outline-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-accent",
        ],
        "primary-muted": [
          "focus-visible:outline-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-muted",
        ],

        // -- secondary --
        secondary: [
          "focus-visible:outline-secondary data-[state=checked]:bg-secondary data-[state=unchecked]:bg-accent",
        ],
        "secondary-muted": [
          "focus-visible:outline-secondary data-[state=checked]:bg-secondary data-[state=unchecked]:bg-secondary-muted",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

function Switch({
  className,
  variant = "primary",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ variant }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-4 rounded-full bg-background shadow-xs ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:bg-foreground",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
