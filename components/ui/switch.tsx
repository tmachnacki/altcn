"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const switchVariants = cva(
  [
    "peer relative isolate inline-flex h-5 w-9 shrink-0 items-center rounded-full p-[2px] transition-colors data-[state=checked]:inset-shadow-sm",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:data-[state=checked]:bg-base-500 disabled:data-[state=unchecked]:bg-accent",
    "aria-invalid:outline-destructive aria-invalid:data-[state=checked]:bg-destructive aria-invalid:data-[state=unchecked]:bg-destructive-muted",
  ],
  {
    variants: {
      variant: {
        // -- primary --
        primary: [
          "outline-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-accent",
        ],
        "primary-muted": [
          "outline-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-muted",
        ],

        // -- secondary --
        secondary: [
          "outline-secondary data-[state=checked]:bg-secondary data-[state=unchecked]:bg-accent",
        ],
        "secondary-muted": [
          "outline-secondary data-[state=checked]:bg-secondary data-[state=unchecked]:bg-secondary-muted",
        ],
      },
      thin: {
        undefined: null,
        null: null,
        false: null,
        true: "h-2.5 p-0 focus-visible:outline-offset-[3px] data-[state=unchecked]:shadow-none",
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
          "pointer-events-none block size-4 rounded-full bg-background shadow-sm outline-0 transition-transform group-aria-invalid/switch:group-data-[state=unchecked]/switch:outline-1 group-aria-invalid/switch:group-data-[state=unchecked]/switch:outline-destructive data-[state=unchecked]:translate-x-0 dark:bg-foreground",
          thin
            ? "border border-border data-[state=checked]:translate-x-[calc(--spacing(5)+1px)]"
            : "data-[state=checked]:translate-x-4",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
