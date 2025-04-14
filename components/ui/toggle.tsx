"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 rounded-md bg-transparent font-medium whitespace-nowrap text-subtle-foreground",
    "disabled:pointer-events-none disabled:text-muted-foreground disabled:opacity-50",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        outline:
          "border border-border shadow-xs hover:bg-faded hover:text-muted-foreground data-[state=on]:bg-muted data-[state=on]:text-accent-foreground",

        base: "hover:bg-muted hover:text-muted-foreground data-[state=on]:bg-base-bg data-[state=on]:text-base-foreground",

        accent:
          "hover:bg-muted hover:text-muted-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",

        primary:
          "hover:bg-primary-faded hover:text-primary-muted-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",

        "primary-accent":
          "hover:bg-primary-faded hover:text-primary-muted-foreground data-[state=on]:bg-primary-muted data-[state=on]:text-primary-accent-foreground",
      },
      size: {
        default:
          "h-9 min-w-9 px-2 text-sm [&_svg:not([class*='size-'])]:size-4",
        sm: "h-8 min-w-8 px-1.5 text-sm [&_svg:not([class*='size-'])]:size-4",
        lg: "h-10 min-w-10 px-2.5 text-base [&_svg:not([class*='size-'])]:size-5",
        xs: "h-6 min-w-6 gap-1.5 px-1 text-xs [&_svg:not([class*='size-'])]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "default",
    },
  },
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
