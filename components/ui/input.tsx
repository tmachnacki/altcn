import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// TODO: better file input, sizes
const inputVariants = cva(
  [
    "flex h-9 w-full min-w-0 appearance-none rounded-md px-3 py-1 text-base md:text-sm",
    "selection:bg-primary selection:text-primary-foreground",
    "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:text-destructive-accent-foreground aria-invalid:selection:bg-destructive aria-invalid:selection:text-destructive-foreground aria-invalid:placeholder:text-destructive-muted-foreground",
  ],
  {
    variants: {
      variant: {
        // -- base --
        default: [
          "bg-background shadow-xs outline-1 -outline-offset-1 outline-border hover:outline-border-hover dark:bg-faded",
          "file:text-accent-foreground",
          "placeholder:text-muted-foreground",
          "disabled:bg-muted",
          "focus-visible:outline-2 focus-visible:outline-primary",
          "aria-invalid:outline-destructive dark:aria-invalid:bg-destructive-faded",
        ],

        muted: [
          "bg-muted -outline-offset-1 hover:not-focus-visible:bg-accent",
          "file:text-accent-foreground",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-primary",
          "aria-invalid:bg-destructive-muted/80 aria-invalid:hover:not-focus-visible:bg-destructive-muted aria-invalid:focus-visible:outline-destructive",
        ],

        underlined: [
          "rounded-none bg-transparent px-0.5 shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:shadow-[inset_0_-1px_0_0_var(--color-border-hover)]",
          "file:text-accent-foreground",
          "placeholder:text-muted-foreground",
          "focus-visible:shadow-[inset_0_-2px_0_0_var(--color-primary)]",
          "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:focus-visible:shadow-[inset_0_-2px_0_0_var(--color-destructive)]",
        ],

        // -- primary --
        primary: [
          "bg-primary-muted/80 text-primary-accent-foreground -outline-offset-1 hover:not-focus-visible:bg-primary-muted",
          "file:text-primary-accent-foreground",
          "placeholder:text-primary-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-primary",
          "aria-invalid:bg-destructive-muted/80 aria-invalid:not-focus-visible:hover:bg-destructive-muted aria-invalid:focus-visible:outline-destructive",
        ],

        // -- secondary --
        secondary: [
          "bg-secondary-muted/80 text-secondary-accent-foreground -outline-offset-1 hover:not-focus-visible:bg-secondary-muted",
          "selection:bg-secondary selection:text-secondary-foreground",
          "file:text-secondary-accent-foreground",
          "placeholder:text-secondary-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-secondary",
          "aria-invalid:bg-destructive-muted/80 aria-invalid:not-focus-visible:hover:bg-destructive-muted aria-invalid:focus-visible:outline-destructive",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Input({
  className,
  type,
  variant = "default",
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Input };
