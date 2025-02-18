import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// If this code lived in a bubble, I would opt for 'tailwind-variants' with slots and compound variants
// I wanted to minimize the amount of work needed to use variants in existing shadcn/ui apps

const tronClassNames =
  "shadow-xs before:absolute before:-top-px before:left-[10%] before:h-[2px] before:w-[80%] before:bg-gradient-to-r before:from-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] after:absolute after:-bottom-px after:left-[10%] after:h-[2px] after:w-[80%] after:bg-gradient-to-r after:from-transparent after:to-transparent after:opacity-100 after:transition-opacity after:duration-300 after:content-[''] hover:bg-gradient-to-b hover:before:opacity-100 hover:after:opacity-0";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      color: {
        base: "",
        primary: "focus-visible:outline-primary",
        secondary: "focus-visible:outline-secondary",
        destructive: "focus-visible:outline-destructive",
        success: "focus-visible:outline-success",
        warning: "focus-visible:outline-warning",
      },
      variant: {
        solid: "shadow",
        muted: "",
        outline:
          "border bg-background shadow-xs hover:border-border-hover hover:bg-accent/80",
        tron: tronClassNames,
        shadow: "shadow-lg",
        gradient: "bg-gradient-to-br",
        ghost: "",
        link: "underline-offset-4 hover:underline",
        input:
          "border bg-base-50 font-normal text-foreground shadow-xs hover:border-border-hover focus-visible:outline-offset-0 focus-visible:outline-primary data-[empty=true]:text-muted-foreground dark:bg-accent aria-invalid:border-destructive aria-invalid:focus-visible:outline-destructive",
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
        "icon-xs": "size-6 rounded-sm [&_svg:not([class*='size-'])]:size-3.5",
      },
    },
    compoundVariants: [
      // base
      {
        color: "base",
        variant: "solid",
        className: "bg-base-600 text-base-50 hover:bg-base-600/90",
      },
      {
        color: "base",
        variant: "outline",
        className:
          "border-border bg-background hover:border-border-hover hover:bg-accent/80 hover:text-accent-foreground",
      },
      {
        color: "base",
        variant: "muted",
        className: "bg-accent text-accent-foreground hover:bg-accent/80",
      },
      {
        color: "base",
        variant: "shadow",
        className:
          "bg-base-600 text-base-50 shadow-base-600/40 hover:bg-base-600/90",
      },
      {
        color: "base",
        variant: "gradient",
        className:
          "bg-gradient-to-br from-base-700 to-base-500 text-base-50 hover:bg-gradient-to-br hover:from-base-700/90 hover:to-base-500/90",
      },
      {
        color: "base",
        variant: "ghost",
        className: "hover:bg-accent hover:text-accent-foreground",
      },
      {
        color: "base",
        variant: "link",
        className: "text-foreground",
      },

      // primary
      {
        color: "primary",
        variant: "solid",
        className:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      },
      {
        color: "primary",
        variant: "outline",
        className: "text-primary-muted-foreground",
      },
      {
        color: "primary",
        variant: "muted",
        className:
          "overflow-hidden bg-primary-muted text-primary-muted-foreground hover:bg-primary-muted/80",
      },
      {
        color: "primary",
        variant: "tron",
        className:
          "border border-primary/60 bg-background text-primary-muted-foreground before:via-primary after:via-primary hover:border-primary/70 hover:from-primary/20 hover:to-primary/5",
      },
      {
        color: "primary",
        variant: "shadow",
        className:
          "bg-primary text-primary-foreground shadow-primary/50 hover:bg-primary/90",
      },
      {
        color: "primary",
        variant: "gradient",
        className:
          "from-primary-600 to-primary-400 text-primary-foreground hover:from-primary-600/90 hover:to-primary-400/90",
      },
      {
        color: "primary",
        variant: "ghost",
        className: "text-primary-muted-foreground hover:bg-primary-muted",
      },
      {
        color: "primary",
        variant: "link",
        className: "text-primary",
      },

      // secondary
      {
        color: "secondary",
        variant: "solid",
        className:
          "bg-secondary text-secondary-foreground shadow hover:bg-secondary/90",
      },
      {
        color: "secondary",
        variant: "outline",
        className: "text-secondary-muted-foreground",
      },
      {
        color: "secondary",
        variant: "muted",
        className:
          "overflow-hidden bg-secondary-muted text-secondary-muted-foreground hover:bg-secondary-muted/80",
      },
      {
        color: "secondary",
        variant: "tron",
        className:
          "border border-secondary/60 bg-background text-secondary-muted-foreground before:via-secondary after:via-secondary hover:border-secondary/70 hover:from-secondary/20 hover:to-secondary/5",
      },
      {
        color: "secondary",
        variant: "shadow",
        className:
          "bg-secondary text-secondary-foreground shadow-secondary/50 hover:bg-secondary/90",
      },
      {
        color: "secondary",
        variant: "gradient",
        className:
          "from-secondary-500 to-secondary-300 text-secondary-foreground hover:from-secondary-500/90 hover:to-secondary-300/90",
      },
      {
        color: "secondary",
        variant: "ghost",
        className: "text-secondary-muted-foreground hover:bg-secondary-muted",
      },
      {
        color: "secondary",
        variant: "link",
        className: "text-secondary",
      },

      // destructive
      {
        color: "destructive",
        variant: "solid",
        className:
          "bg-destructive text-destructive-foreground shadow hover:bg-destructive/90",
      },
      {
        color: "destructive",
        variant: "outline",
        className: "text-destructive-muted-foreground",
      },
      {
        color: "destructive",
        variant: "muted",
        className:
          "overflow-hidden bg-destructive-muted text-destructive-muted-foreground hover:bg-destructive-muted/80",
      },
      {
        color: "destructive",
        variant: "tron",
        className:
          "border border-destructive/60 bg-background text-destructive-muted-foreground before:via-destructive after:via-destructive hover:border-destructive/70 hover:from-destructive/20 hover:to-destructive/5",
      },
      {
        color: "destructive",
        variant: "shadow",
        className:
          "bg-destructive text-destructive-foreground shadow-destructive/50 hover:bg-destructive/90",
      },
      {
        color: "destructive",
        variant: "gradient",
        className:
          "from-destructive-600 to-destructive-400 text-destructive-foreground hover:from-destructive-600/90 hover:to-destructive-400/90",
      },
      {
        color: "destructive",
        variant: "ghost",
        className:
          "text-destructive-muted-foreground hover:bg-destructive-muted",
      },
      {
        color: "destructive",
        variant: "link",
        className: "text-destructive",
      },

      // input
      {
        variant: "input",
        size: "default",
        className: "px-3 py-1",
      },
    ],
    defaultVariants: {
      color: "base",
      variant: "solid",
      size: "default",
    },
  },
);

function Button({
  className,
  color,
  variant,
  size,
  asChild = false,
  empty = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    empty?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-empty={empty}
      className={cn(buttonVariants({ color, variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
