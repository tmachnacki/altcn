import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// TODO: edit hover colors - probably want to avoid using opacity values where possible
const buttonVariants = cva(
  [
    "relative isolate inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold whitespace-nowrap select-none disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        // --- base ---
        outline: [
          "border border-border bg-background text-foreground shadow-xs",
          "hover:border-border-hover hover:bg-muted hover:text-accent-foreground",
        ],

        accent: [
          "bg-accent text-accent-foreground",
          "hover:bg-base-200 dark:hover:bg-base-800",
        ],

        muted: ["bg-muted text-muted-foreground", "hover:bg-accent"],

        surface: [
          "border border-border-faded bg-faded text-accent-foreground shadow-xs",
          "hover:bg-muted",
        ],

        faded: [
          "border border-border-faded bg-faded text-muted-foreground shadow-xs",
          "hover:bg-muted",
        ],

        ghost: [
          "bg-transparent text-foreground",
          "hover:bg-accent hover:text-accent-foreground",
        ],

        link: ["text-primary underline-offset-4", "hover:underline"],

        input:
          "border border-border font-normal text-foreground shadow-xs hover:border-border-hover focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none data-[empty=true]:text-muted-foreground dark:bg-faded aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive",

        // --- primary ---
        primary: [
          "bg-primary text-primary-foreground shadow",
          "hover:bg-primary/90",
        ],

        "primary-accent": [
          "bg-primary-muted text-primary-accent-foreground",
          "hover:bg-primary-muted/80",
        ],

        "primary-muted": [
          "bg-primary-muted text-primary-muted-foreground",
          "hover:bg-primary-muted/80",
        ],

        "primary-surface": [
          "border border-border-primary-faded bg-primary-faded text-primary-accent-foreground shadow-xs",
          "hover:bg-primary-muted/80",
        ],

        "primary-faded": [
          "border border-border-primary-faded bg-primary-faded text-primary-muted-foreground shadow-xs",
          "hover:bg-primary-muted/80",
        ],

        "primary-tron": [
          "border border-border bg-background bg-gradient-to-t from-primary/15 to-transparent text-primary-muted-foreground",
          "hover:border-primary/50 hover:bg-gradient-to-b hover:from-primary/20 hover:to-primary/[7%]",
          "**:data-[slot=tron-blur]:via-primary-tron-blur **:data-[slot=tron-wide]:via-primary",
        ],

        "primary-shadow": [
          "bg-primary text-primary-foreground shadow-lg shadow-primary/50",
          "hover:bg-primary/90",
        ],

        "primary-gradient": [
          "bg-gradient-to-br from-primary-600 to-primary-400 text-primary-foreground",
          "hover:from-primary-600/90 hover:to-primary-400/90",
        ],

        "primary-ghost": [
          "text-primary-muted-foreground",
          "hover:bg-primary-muted",
        ],

        // secondary
        secondary: [
          "bg-secondary text-secondary-foreground shadow",
          "hover:bg-secondary/90",
        ],

        "secondary-accent": [
          "bg-secondary-muted text-secondary-accent-foreground",
          "hover:bg-secondary-muted/80",
        ],

        "secondary-muted": [
          "bg-secondary-muted text-secondary-muted-foreground",
          "hover:bg-secondary-muted/80",
        ],

        "secondary-surface": [
          "border border-border-secondary-faded bg-secondary-faded text-secondary-accent-foreground shadow-xs",
          "hover:bg-secondary-muted/70",
        ],

        "secondary-faded": [
          "border border-border-secondary-faded bg-secondary-faded text-secondary-muted-foreground shadow-xs",
          "hover:bg-secondary-muted/70",
        ],

        "secondary-tron": [
          "border border-border bg-background bg-gradient-to-t from-secondary/10 to-transparent text-secondary-muted-foreground",
          "hover:border-secondary/50 hover:bg-gradient-to-b hover:from-secondary/20 hover:to-secondary/[7%]",
          "**:data-[slot=tron-blur]:via-secondary-tron-blur **:data-[slot=tron-wide]:via-secondary",
        ],

        "secondary-shadow": [
          "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/50",
          "hover:bg-secondary/90",
        ],

        "secondary-gradient": [
          "bg-gradient-to-br from-secondary-500 to-secondary-300 text-secondary-foreground dark:from-secondary-600 dark:to-secondary-400",
          "hover:from-secondary-500/90 hover:to-secondary-300/90 dark:hover:from-secondary-600/90 dark:hover:to-secondary-400/90",
        ],

        "secondary-ghost": [
          "text-secondary-muted-foreground",
          "hover:bg-secondary-muted",
        ],

        // --- destructive ---
        destructive: [
          "bg-destructive text-destructive-foreground shadow",
          "hover:bg-destructive/90",
        ],

        "destructive-accent": [
          "bg-destructive-muted text-destructive-accent-foreground",
          "hover:bg-destructive-muted/80",
        ],

        "destructive-muted": [
          "bg-destructive-muted text-destructive-muted-foreground",
          "hover:bg-destructive-muted/80",
        ],

        "destructive-surface": [
          "border border-border-destructive-faded bg-destructive-faded text-destructive-accent-foreground shadow-xs",
          "hover:bg-destructive-muted/70",
        ],

        "destructive-faded": [
          "border border-border-destructive-faded bg-destructive-faded text-destructive-muted-foreground shadow-xs",
          "hover:bg-destructive-muted/70",
        ],

        "destructive-tron": [
          "border border-border bg-gradient-to-t from-destructive/10 to-transparent text-destructive-muted-foreground",
          "hover:border-destructive/50 hover:bg-gradient-to-b hover:from-destructive/20 hover:to-destructive/[7%]",
          "**:data-[slot=tron-blur]:via-destructive-tron-blur **:data-[slot=tron-wide]:via-destructive",
        ],

        "destructive-shadow": [
          "bg-destructive text-destructive-foreground shadow-lg shadow-destructive/50",
          "hover:bg-destructive/90",
        ],

        "destructive-gradient": [
          "bg-gradient-to-br from-destructive-600 to-destructive-400 text-destructive-foreground dark:from-destructive-900 dark:to-destructive-700",
          "hover:from-destructive-600/90 hover:to-destructive-400/90 dark:hover:from-destructive-900/90 dark:hover:to-destructive-700/90",
        ],

        "destructive-ghost": [
          "text-destructive-muted-foreground",
          "hover:bg-destructive-muted",
        ],
      },
      size: {
        default: [
          "h-9 px-4 py-2",
          "data-[variant=input]:px-3 data-[variant=input]:py-1",
          "has-[[data-slot='spinner']]:px-3 has-[>svg]:px-3 **:data-[slot=spinner]:not-[[class*='size-']]:size-4",
          "[&_svg:not([class*='size-'])]:size-4",
        ],

        lg: [
          "h-10 gap-3 rounded-md px-6 py-2 text-base",
          "has-[[data-slot='spinner']]:px-4 has-[>svg]:px-4 **:data-[slot=spinner]:not-[[class*='size-']]:size-5",
          "[&_svg:not([class*='size-'])]:size-5",
        ],

        sm: [
          "h-8 rounded-md px-3 py-1.5",
          "has-[[data-slot='spinner']]:px-2.5 has-[>svg]:px-2.5 **:data-[slot=spinner]:not-[[class*='size-']]:size-4",
          "[&_svg:not([class*='size-'])]:size-4",
        ],

        xs: [
          "h-6 gap-1.5 rounded-sm px-2 py-1 text-xs font-normal",
          "has-[[data-slot='spinner']]:px-2 has-[>svg]:px-2 **:data-[slot=spinner]:not-[[class*='size-']]:size-3.5 [&_svg:not([class*='size-'])]:size-3.5",
        ],

        icon: [
          "size-9",
          "**:data-[slot=spinner]:not-[[class*='size-']]:size-4",
          "[&_svg:not([class*='size-'])]:size-4",
        ],

        "icon-lg": [
          "size-10",
          "**:data-[slot=spinner]:not-[[class*='size-']]:size-5",
          "[&_svg:not([class*='size-'])]:size-5",
        ],

        "icon-sm": [
          "size-8",
          "**:data-[slot=spinner]:not-[[class*='size-']]:size-4",
          "[&_svg:not([class*='size-'])]:size-4",
        ],

        "icon-xs": [
          "size-6 rounded-sm",
          "**:data-[slot=spinner]:not-[[class*='size-']]:size-3.5",
          "[&_svg:not([class*='size-'])]:size-3.5",
        ],
      },
    },
    compoundVariants: [
      {
        variant: [
          "primary",
          "primary-accent",
          "primary-muted",
          "primary-surface",
          "primary-faded",
          "primary-tron",
          "primary-shadow",
          "primary-gradient",
          "primary-ghost",
        ],
        className: "focus-visible:outline-primary",
      },
      {
        variant: [
          "secondary",
          "secondary-accent",
          "secondary-muted",
          "secondary-surface",
          "secondary-faded",
          "secondary-tron",
          "secondary-shadow",
          "secondary-gradient",
          "secondary-ghost",
        ],
        className: "focus-visible:outline-secondary",
      },
      {
        variant: [
          "destructive",
          "destructive-accent",
          "destructive-muted",
          "destructive-surface",
          "destructive-faded",
          "destructive-tron",
          "destructive-shadow",
          "destructive-gradient",
          "destructive-ghost",
        ],
        className: "focus-visible:outline-destructive",
      },
    ],
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
  children,
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
      className={cn(
        buttonVariants({ variant, size }),
        "group/button",
        className,
      )}
      {...props}
    >
      {variant?.includes("tron") && (
        <>
          <span
            aria-hidden="true"
            data-slot="tron-wide"
            className="absolute -top-px left-[5%] block h-[2px] w-[90%] bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/button:opacity-100 motion-reduce:transition-none"
          />
          <span
            aria-hidden="true"
            data-slot="tron-blur"
            className="absolute -top-px left-[20%] block h-[2px] w-[60%] bg-gradient-to-r from-transparent to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover/button:opacity-100 motion-reduce:transition-none"
          />
          <span
            aria-hidden="true"
            data-slot="tron-wide"
            className="absolute -bottom-px left-[5%] block h-[2px] w-[90%] bg-gradient-to-r from-transparent to-transparent opacity-100 transition-opacity duration-300 group-hover/button:opacity-0 motion-reduce:transition-none"
          />
          <span
            aria-hidden="true"
            data-slot="tron-blur"
            className="absolute -bottom-px left-[20%] block h-[2px] w-[60%] bg-gradient-to-r from-transparent to-transparent opacity-100 blur-sm transition-opacity duration-300 group-hover/button:opacity-0 motion-reduce:transition-none"
          />
        </>
      )}
      <Slottable>{children}</Slottable>
    </Comp>
  );
}

export { Button, buttonVariants };
