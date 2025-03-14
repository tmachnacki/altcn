import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex h-9 w-full min-w-0 rounded-md px-3 py-1 text-base outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium hover:border-border-hover focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:text-sm aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive",
  {
    variants: {
      variant: {
        default: "border border-input bg-transparent dark:bg-faded shadow-xs placeholder:text-muted-foreground hover:border-border-hover file:text-accent-foreground",
        muted: "bg-muted placeholder:text-muted-foreground file:text-accent-foreground",
        underline: "bg-transparent placeholder:text-muted-foreground file:text-accent-foreground after:content-[''] after:absolute after:bottom-0 after:inset-x-0 after:border-t after:border-border hover:after:border-border-hover ",

        "primary-muted": "bg-primary-muted ",
        "primary-faded": "",
        "primary-underline": "",
      },
    },
    compoundVariants: [
      {
        variant: ["default", "muted", "underline"],
        className: "",
      }
    ],
    defaultVariants: {
      variant: "default",
    }
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
