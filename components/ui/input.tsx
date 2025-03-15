import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex h-9 w-full min-w-0 rounded-md px-3 py-1 text-base selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:text-sm aria-invalid:text-destructive-accent-foreground aria-invalid:selection:bg-destructive aria-invalid:selection:text-destructive-foreground aria-invalid:placeholder:text-destructive-muted-foreground",
  {
    variants: {
      variant: {
        default: [
          "border border-input bg-transparent shadow-xs file:text-accent-foreground placeholder:text-muted-foreground hover:border-border-hover dark:bg-faded",
          "focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary",
          "aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive",
        ],
        muted: [
          "bg-muted",
          "file:text-accent-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary",
          "aria-invalid:bg-destructive-muted aria-invalid:focus-visible:ring-destructive",
        ],
        underline: [
          "rounded-none bg-transparent px-0 shadow-[inset_0_-1px_0_0_var(--color-border)] file:text-accent-foreground placeholder:text-muted-foreground hover:shadow-[inset_0_-1px_0_0_var(--color-border-hover)]",
          "focus-visible:shadow-[inset_0_-2px_0_0_var(--color-primary)]",
          "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:focus-visible:shadow-[inset_0_-2px_0_0_var(--color-destructive)]",
        ],

        "primary-muted": [
          "bg-primary-muted text-primary-accent-foreground file:text-primary-accent-foreground placeholder:text-primary-muted-foreground",
          "focus-visible:ring-2 focus-visible:ring-primary",
          "aria-invalid:bg-destructive-muted aria-invalid:focus-visible:ring-destructive",
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
