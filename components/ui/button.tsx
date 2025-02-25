import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { tronClassNames } from "@/lib/variants";

// If this code lived in a bubble, I would opt for 'tailwind-variants' with slots and compound variants
// I wanted to minimize the amount of work needed to use variants in existing shadcn/ui apps

const buttonVariants = cva(
  "group/button relative isolate inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold whitespace-nowrap select-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // --- base ---
        accent:
          "bg-accent text-accent-foreground hover:bg-base-200 dark:hover:bg-base-800",

        outline:
          "border border-border bg-background text-foreground shadow-xs hover:border-border-hover hover:bg-muted hover:text-accent-foreground",

        muted: "bg-muted text-muted-foreground hover:bg-accent",

        faded:
          "border border-border-faded bg-faded text-muted-foreground hover:bg-muted",

        ghost:
          "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",

        link: "text-primary underline-offset-4 hover:underline",

        input:
          "border border-border font-normal text-foreground shadow-xs hover:border-border-hover focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none data-[empty=true]:text-muted-foreground dark:bg-faded aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive",

        // --- primary ---
        primary:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-primary",

        "primary-muted":
          "bg-primary-muted text-primary-muted-foreground hover:bg-primary-muted/80 focus-visible:outline-primary",

        "primary-flat":
          "bg-transparent text-primary-950 hover:bg-primary-muted dark:text-primary-50",

        "primary-faded":
          "border border-border-primary-faded bg-primary-faded text-primary-muted-foreground shadow-xs hover:bg-primary-muted/70 focus-visible:outline-primary",

        "primary-tron": [
          tronClassNames,
          "text-primary-muted-foreground before:via-primary after:via-primary hover:border-primary/50 hover:from-primary/20 hover:to-primary/[7%] focus-visible:outline-primary",
        ],

        "primary-shadow":
          "bg-primary text-primary-foreground shadow-lg shadow-primary/50 hover:bg-primary/90 focus-visible:outline-primary",

        "primary-gradient":
          "bg-gradient-to-br from-primary-600 to-primary-400 text-primary-foreground hover:from-primary-600/90 hover:to-primary-400/90 focus-visible:outline-primary",

        "primary-ghost":
          "text-primary-muted-foreground hover:bg-primary-muted focus-visible:outline-primary",

        // secondary
        secondary:
          "bg-secondary text-secondary-foreground shadow hover:bg-secondary/90 focus-visible:outline-secondary",

        "secondary-muted":
          "bg-secondary-muted text-secondary-muted-foreground hover:bg-secondary-muted/80 focus-visible:outline-secondary",

        "secondary-faded":
          "border border-border-secondary-faded bg-secondary-faded text-secondary-muted-foreground shadow-xs hover:bg-secondary-muted/70 focus-visible:outline-secondary",

        "secondary-tron": [
          tronClassNames,
          "text-secondary-muted-foreground before:via-secondary after:via-secondary hover:border-secondary/50 hover:from-secondary/20 hover:to-secondary/[7%] focus-visible:outline-secondary",
        ],

        "secondary-shadow":
          "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/50 hover:bg-secondary/90 focus-visible:outline-secondary",

        "secondary-gradient":
          "bg-gradient-to-br from-secondary-500 to-secondary-300 text-secondary-foreground hover:from-secondary-500/90 hover:to-secondary-300/90 focus-visible:outline-secondary",

        "secondary-ghost":
          "text-secondary-muted-foreground hover:bg-secondary-muted focus-visible:outline-secondary",

        // --- destructive ---
        destructive:
          "bg-destructive text-destructive-foreground shadow hover:bg-destructive/90 focus-visible:outline-destructive",

        "destructive-muted":
          "bg-destructive-muted text-destructive-muted-foreground hover:bg-destructive-muted/80 focus-visible:outline-destructive",

        "destructive-faded":
          "border border-border-destructive-faded bg-destructive-faded text-destructive-muted-foreground shadow-xs hover:bg-destructive-muted/70 focus-visible:outline-destructive",

        "destructive-tron": [
          tronClassNames,
          "text-destructive-muted-foreground before:via-destructive after:via-destructive hover:border-destructive/50 hover:from-destructive/20 hover:to-destructive/[7%] focus-visible:outline-destructive",
        ],

        "destructive-shadow":
          "bg-destructive text-destructive-foreground shadow-lg shadow-destructive/50 hover:bg-destructive/90 focus-visible:outline-destructive",

        "destructive-gradient":
          "bg-gradient-to-br from-destructive-600 to-destructive-400 text-destructive-foreground hover:from-destructive-600/90 hover:to-destructive-400/90 focus-visible:outline-destructive dark:from-destructive-700 dark:to-destructive-500 dark:hover:from-destructive-700/90 dark:hover:to-destructive-500/90",

        "destructive-ghost":
          "text-destructive-muted-foreground hover:bg-destructive-muted focus-visible:outline-destructive",
      },
      size: {
        default:
          "h-9 px-4 py-2 has-[[data-slot='spinner']]:gap-3 has-[[data-slot='spinner']]:px-3 has-[>svg]:px-3 data-[variant=input]:px-3 data-[variant=input]:py-1 [&_[data-slot='spinner']:not([class*='size-'])]:size-4 [&_svg:not([class*='size-'])]:size-4",

        lg: "h-10 rounded-md px-6 py-2 text-base has-[[data-slot='spinner']]:gap-3 has-[data-slot='spinner']:px-4 has-[>svg]:px-4 [&_[data-slot='spinner']:not([class*='size-'])]:size-5 [&_svg:not([class*='size-'])]:size-5",

        sm: "h-8 rounded-md px-3 py-1.5 has-[[data-slot='spinner']]:gap-2.5 has-[[data-slot='spinner']]:px-2.5 has-[>svg]:px-2.5 [&_[data-slot='spinner']:not([class*='size-'])]:size-4 [&_svg:not([class*='size-'])]:size-4",

        xs: "h-6 rounded-sm px-2 py-1 text-xs font-normal has-[[data-slot='spinner']]:gap-2.5 has-[[data-slot='spinner']]:px-2 has-[>svg]:px-2 [&_[data-slot='spinner']:not([class*='size-'])]:size-3.5 [&_svg:not([class*='size-'])]:size-3.5",

        icon: "size-9 has-[[data-slot='spinner']:not([class*='size-'])]:size-4 [&_svg:not([class*='size-'])]:size-4",

        iconLg:
          "size-10 has-[[data-slot='spinner']:not([class*='size-'])]:size-5 [&_svg:not([class*='size-'])]:size-5",

        iconSm:
          "size-8 has-[[data-slot='spinner']:not([class*='size-'])]:size-4 [&_svg:not([class*='size-'])]:size-4",

        iconXs:
          "size-6 rounded-sm has-[[data-slot='spinner']:not([class*='size-'])]:size-3.5 [&_svg:not([class*='size-'])]:size-3.5",
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
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
