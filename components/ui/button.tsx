import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap ring-ring outline-outline transition-[color,box-shadow] duration-100 focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        "primary-muted":
          "bg-primary-muted text-primary-muted-foreground shadow-xs hover:bg-primary-muted/80",
        "primary-tron":
          "relative border bg-transparent text-foreground before:absolute before:-top-px before:left-[10%] before:h-[2px] before:w-[80%] before:bg-gradient-to-r before:from-primary/0 before:via-primary before:to-primary/0 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] after:absolute after:-bottom-px after:left-[10%] after:h-[2px] after:w-[80%] after:bg-gradient-to-r after:from-primary/0 after:via-primary after:to-primary/0 after:opacity-100 after:transition-opacity after:duration-300 after:content-[''] hover:border-primary/30 hover:bg-gradient-to-b hover:from-primary/20 hover:to-transparent hover:before:opacity-100 hover:after:opacity-0",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90",
        "secondary-muted":
          "bg-secondary-muted text-secondary-muted-foreground shadow-xs hover:bg-secondary-muted/80",
        "secondary-tron":
          "relative border bg-transparent text-foreground before:absolute before:-top-px before:left-[10%] before:h-[2px] before:w-[80%] before:bg-gradient-to-r before:from-secondary/0 before:via-secondary before:to-secondary/0 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] after:absolute after:-bottom-px after:left-[10%] after:h-[2px] after:w-[80%] after:bg-gradient-to-r after:from-secondary/0 after:via-secondary after:to-secondary/0 after:opacity-100 after:transition-opacity after:duration-300 after:content-[''] hover:border-secondary/30 hover:bg-gradient-to-b hover:from-secondary/20 hover:to-transparent hover:before:opacity-100 hover:after:opacity-0",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80",
        "destructive-muted":
          "bg-destructive-muted text-destructive-muted-foreground shadow-xs hover:bg-destructive-muted/80",
        "destructive-tron":
          "relative border bg-transparent text-foreground before:absolute before:-top-px before:left-[10%] before:h-[2px] before:w-[80%] before:bg-gradient-to-r before:from-destructive/0 before:via-destructive before:to-destructive/0 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] after:absolute after:-bottom-px after:left-[10%] after:h-[2px] after:w-[80%] after:bg-gradient-to-r after:from-destructive/0 after:via-destructive after:to-destructive/0 after:opacity-100 after:transition-opacity after:duration-300 after:content-[''] hover:border-destructive/25 hover:bg-gradient-to-b hover:from-destructive/20 hover:to-transparent hover:before:opacity-100 hover:after:opacity-0",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        accent: "bg-accent text-accent-foreground shadow-xs hover:bg-accent/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 px-4 py-2 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4",
        sm: "h-8 rounded-md px-3 py-1.5 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-10 rounded-md px-6 py-2 has-[>svg]:px-4 [&_svg:not([class*='size-'])]:size-5",
        xs: "h-7 rounded-sm px-2 py-1.5 text-xs font-normal has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-3.5",
        icon: "size-9 [&_svg:not([class*='size-'])]:size-4",
        "icon-lg": "size-10 [&_svg:not([class*='size-'])]:size-5",
        "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3.5",
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
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
