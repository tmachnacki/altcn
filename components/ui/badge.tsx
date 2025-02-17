import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 rounded-lg border px-2 py-0.5 text-xs leading-none font-semibold whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&>svg]:pointer-events-none [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-primary text-primary-foreground shadow-sm [a&]:hover:bg-primary/90",
        "primary-muted":
          "border-transparent bg-primary-muted text-primary-muted-foreground [a&]:hover:bg-primary-muted/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground shadow-sm focus-visible:outline-secondary [a&]:hover:bg-secondary/90",
        "secondary-muted":
          "border-transparent bg-secondary-muted text-secondary-muted-foreground focus-visible:outline-secondary [a&]:hover:bg-secondary-muted/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-sm focus-visible:outline-destructive [a&]:hover:bg-destructive/90",
        "destructive-muted":
          "border-transparent bg-destructive-muted text-destructive-muted-foreground focus-visible:outline-destructive [a&]:hover:bg-destructive-muted/80",
        success:
          "border-transparent bg-success text-success-foreground shadow-sm focus-visible:outline-success [a&]:hover:bg-success/90",
        "success-muted":
          "border-transparent bg-success-muted text-success-muted-foreground focus-visible:outline-success [a&]:hover:bg-success-muted/80",
        warning:
          "border-transparent bg-warning text-warning-foreground shadow-sm focus-visible:outline-warning [a&]:hover:bg-warning/90",
        "warning-muted":
          "border-transparent bg-warning-muted text-warning-muted-foreground focus-visible:outline-warning [a&]:hover:bg-warning-muted/80",
        outline:
          "border-border text-foreground shadow-xs [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        accent:
          "border-transparent bg-accent text-accent-foreground [a&]:hover:bg-accent/90",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
