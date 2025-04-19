"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const switchVariants = cva(
  [
    "peer relative isolate inline-flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition data-[state=unchecked]:inset-shadow-sm dark:data-[state=unchecked]:shadow-none",

    "focus-visible:outline-2 focus-visible:outline-offset-2",

    "disabled:cursor-not-allowed disabled:opacity-50 disabled:data-[state=checked]:bg-base-500 data-[state=unchecked]:disabled:bg-accent dark:data-[state=unchecked]:disabled:bg-faded dark:data-[state=unchecked]:disabled:inset-ring dark:data-[state=unchecked]:disabled:inset-ring-border",

    "aria-invalid:outline-destructive aria-invalid:data-[state=checked]:bg-destructive aria-invalid:data-[state=unchecked]:bg-destructive-muted aria-invalid:data-[state=unchecked]:inset-ring aria-invalid:data-[state=unchecked]:inset-ring-destructive dark:aria-invalid:data-[state=unchecked]:bg-destructive-faded dark:aria-invalid:data-[state=unchecked]:inset-ring",
  ],
  {
    variants: {
      variant: {
        // -- primary --
        primary: [
          "outline-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-accent",
          "dark:data-[state=unchecked]:bg-faded dark:data-[state=unchecked]:inset-ring dark:data-[state=unchecked]:inset-ring-border",
        ],
        "primary-muted": [
          "outline-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-muted",
          "dark:data-[state=unchecked]:bg-primary-faded dark:data-[state=unchecked]:inset-ring dark:data-[state=unchecked]:inset-ring-border-primary-faded",
        ],

        // -- secondary --
        secondary: [
          "outline-secondary data-[state=checked]:bg-secondary data-[state=unchecked]:bg-accent",
          "dark:data-[state=unchecked]:bg-faded dark:data-[state=unchecked]:inset-ring dark:data-[state=unchecked]:inset-ring-border",
        ],
        "secondary-muted": [
          "outline-secondary data-[state=checked]:bg-secondary data-[state=unchecked]:bg-secondary-muted",
          "dark:data-[state=unchecked]:bg-secondary-faded dark:data-[state=unchecked]:inset-ring dark:data-[state=unchecked]:inset-ring-border-secondary-faded",
        ],
      },
      thin: {
        true: "h-2.5 p-0 focus-visible:outline-offset-4 data-[state=unchecked]:shadow-none",
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
  thin,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-variant={variant}
      data-thin={thin}
      className={cn(
        switchVariants({ variant, thin }),
        "group/switch",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-4 rounded-full bg-background shadow-xs inset-ring inset-ring-border transition-all outline-none data-[disabled]:bg-base-50 dark:backdrop-blur-lg dark:data-[state=checked]:bg-foreground dark:data-[state=unchecked]:bg-white/25 dark:data-[state=unchecked]:data-[disabled]:bg-base-700",
          thin
            ? "data-[state=checked]:translate-x-[calc(--spacing(5)+1px)] data-[state=unchecked]:-translate-x-px"
            : "data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
