import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// TODO: better file input, sizes
const inputVariants = cva(
  [
    "flex h-9 w-full min-w-0 appearance-none rounded-md px-3 py-1 text-base outline-none md:text-sm",
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
          "border border-input bg-background shadow-xs hover:border-border-hover dark:bg-faded",
          "file:text-accent-foreground",
          "placeholder:text-muted-foreground",
          "disabled:bg-muted",
          "focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary",
          "aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive dark:aria-invalid:bg-destructive-faded",
        ],
        muted: [
          "bg-muted hover:not-focus-visible:bg-accent",
          "file:text-accent-foreground",
          "placeholder:text-muted-foreground",
          "focus-visible:ring-2 focus-visible:ring-primary",
          "aria-invalid:bg-destructive-muted aria-invalid:hover:not-focus-visible:bg-destructive-muted/70 aria-invalid:focus-visible:ring-destructive",
        ],
        underline: [
          "rounded-none bg-transparent px-0.5 shadow-[inset_0_-1px_0_0_var(--color-border)] hover:shadow-[inset_0_-1px_0_0_var(--color-border-hover)]",
          "file:text-accent-foreground",
          "placeholder:text-muted-foreground",
          "focus-visible:shadow-[inset_0_-2px_0_0_var(--color-primary)]",
          "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:focus-visible:shadow-[inset_0_-2px_0_0_var(--color-destructive)]",
        ],

        // -- primary --
        primary: [
          "bg-primary-faded text-primary-accent-foreground hover:not-focus-visible:bg-primary-muted/80",
          "file:text-primary-accent-foreground",
          "placeholder:text-primary-muted-foreground",
          "focus-visible:ring-2 focus-visible:ring-primary",
          "aria-invalid:bg-destructive-faded aria-invalid:not-focus-visible:hover:bg-destructive-muted/70 aria-invalid:focus-visible:ring-destructive",
        ],

        // -- secondary --
        secondary: [
          "bg-secondary-faded text-secondary-accent-foreground hover:not-focus-visible:bg-secondary-muted/70",
          "selection:bg-secondary selection:text-secondary-foreground",
          "file:text-secondary-accent-foreground",
          "placeholder:text-secondary-muted-foreground",
          "focus-visible:ring-2 focus-visible:ring-secondary",
          "aria-invalid:bg-destructive-faded aria-invalid:not-focus-visible:hover:bg-destructive-muted/70 aria-invalid:focus-visible:ring-destructive",
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
