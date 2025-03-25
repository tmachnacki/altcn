"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const switchVariants = cva(
  [
    "group/switch peer relative isolate inline-flex w-8 shrink-0 items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
        false:
          "h-[calc(var(--spacing)*4.5)] border border-transparent data-[state=unchecked]:inset-shadow-sm",
        true: "h-3",
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
  thin = false,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-variant={variant}
      data-thin={thin}
      className={cn(switchVariants({ variant, thin }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none absolute left-0 z-10 inline-block size-4 rounded-full bg-background shadow-sm ring-0 transition-transform  data-[state=unchecked]:translate-x-0 dark:bg-foreground",
          thin ? "border border-border data-[state=checked]:translate-x-[calc(100%+1px)]" : "data-[state=checked]:translate-x-[calc(100%-2px)]",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
