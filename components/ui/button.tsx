import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[variant*='-tron']:before:absolute data-[variant*='-tron']:before:-top-px data-[variant*='-tron']:before:left-[10%] data-[variant*='-tron']:before:h-[2px] data-[variant*='-tron']:before:w-[80%] data-[variant*='-tron']:before:bg-gradient-to-r data-[variant*='-tron']:before:from-transparent data-[variant*='-tron']:before:to-transparent data-[variant*='-tron']:before:opacity-0 data-[variant*='-tron']:before:transition-opacity data-[variant*='-tron']:before:duration-300 data-[variant*='-tron']:before:content-[''] data-[variant*='-tron']:after:absolute data-[variant*='-tron']:after:-bottom-px data-[variant*='-tron']:after:left-[10%] data-[variant*='-tron']:after:h-[2px] data-[variant*='-tron']:after:w-[80%] data-[variant*='-tron']:after:bg-gradient-to-r data-[variant*='-tron']:after:from-transparent data-[variant*='-tron']:after:to-transparent data-[variant*='-tron']:after:opacity-100 data-[variant*='-tron']:after:transition-opacity data-[variant*='-tron']:after:duration-300 data-[variant*='-tron']:after:content-[''] data-[variant*='-tron']:hover:bg-gradient-to-b data-[variant*='-tron']:hover:before:opacity-100 data-[variant*='-tron']:hover:after:opacity-0 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-primary",
        "primary-muted":
          "bg-primary-muted text-primary-muted-foreground hover:bg-primary-muted/80 focus-visible:outline-primary",
        "primary-tron":
          "relative border border-primary/30 bg-transparent text-primary-muted-foreground shadow-xs before:via-primary after:via-primary hover:border-primary/40 hover:from-primary/20 hover:to-primary/5 focus-visible:outline-primary",
        "primary-shadow":
          "bg-primary text-primary-foreground shadow-lg shadow-primary/40 hover:bg-primary/90 focus-visible:outline-primary",
        secondary:
          "bg-secondary text-secondary-foreground shadow hover:bg-secondary/90 focus-visible:outline-secondary",
        "secondary-muted":
          "bg-secondary-muted text-secondary-muted-foreground hover:bg-secondary-muted/80 focus-visible:outline-secondary",
        "secondary-tron":
          "relative border border-secondary/30 bg-transparent text-secondary-muted-foreground shadow-xs before:via-secondary after:via-secondary hover:border-secondary/40 hover:from-secondary/20 hover:to-secondary/5 focus-visible:outline-secondary",
        "secondary-shadow":
          "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/40 hover:bg-secondary/90 focus-visible:outline-secondary",
        destructive:
          "bg-destructive text-destructive-foreground shadow hover:bg-destructive/80 focus-visible:outline-destructive",
        "destructive-muted":
          "bg-destructive-muted text-destructive-muted-foreground hover:bg-destructive-muted/80 focus-visible:outline-destructive",
        "destructive-tron":
          "relative border border-destructive/30 bg-transparent text-destructive-muted-foreground shadow-xs before:via-destructive after:via-destructive hover:border-destructive/40 hover:from-destructive/20 hover:to-destructive/5 focus-visible:outline-destructive",
        "destructive-shadow":
          "bg-destructive text-destructive-foreground shadow-lg shadow-destructive/40 hover:bg-destructive/90 focus-visible:outline-destructive",
        success:
          "bg-success text-success-foreground shadow hover:bg-success/80 focus-visible:outline-success",
        "success-muted":
          "bg-success-muted text-success-muted-foreground hover:bg-success-muted/80 focus-visible:outline-success",
        "success-tron":
          "relative border border-success/30 bg-transparent text-success-muted-foreground shadow-xs before:via-success after:via-success hover:border-success/40 hover:from-success/20 hover:to-success/5 focus-visible:outline-success",
        "success-shadow":
          "bg-success text-success-foreground shadow-lg shadow-success/40 hover:bg-success/90 focus-visible:outline-success",
        warning:
          "bg-warning text-warning-foreground shadow hover:bg-warning/80 focus-visible:outline-warning",
        "warning-muted":
          "bg-warning-muted text-warning-muted-foreground hover:bg-warning-muted/80 focus-visible:outline-warning",
        "warning-tron":
          "relative border border-warning/30 bg-transparent text-warning-muted-foreground shadow-xs before:via-warning after:via-warning hover:border-warning/40 hover:from-warning/20 hover:to-warning/5 focus-visible:outline-warning",
        "warning-shadow":
          "bg-warning text-warning-foreground shadow-lg shadow-warning/40 hover:bg-warning/90 focus-visible:outline-warning",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        accent: "bg-accent text-accent-foreground hover:bg-accent/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 px-4 py-2 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4",
        lg: "h-10 rounded-md px-6 py-2 text-base has-[>svg]:px-4 [&_svg:not([class*='size-'])]:size-5",
        sm: "h-8 rounded-md px-3 py-1.5 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4",
        xs: "h-6 rounded-sm px-2 py-1 text-xs font-normal has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-3.5",
        icon: "size-9 [&_svg:not([class*='size-'])]:size-4",
        "icon-lg": "size-10 [&_svg:not([class*='size-'])]:size-5",
        "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-4",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
