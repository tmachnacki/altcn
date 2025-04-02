import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { InfoFilledIcon } from "@/components/icons/info-filled";
import { ErrorFilledIcon } from "@/components/icons/error-filled";
import { SuccessFilledIcon } from "@/components/icons/success-filled";
import { WarningFilledIcon } from "@/components/icons/warning-filled";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  [
    "relative flex w-full items-start gap-x-3 overflow-hidden rounded-lg px-4 py-3 text-sm data-[centered]:items-center",
    "[&>svg]:flex-none [&>svg]:text-current not-data-[centered]:[&>svg]:translate-y-0.5 [&>svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        // -- base --
        outline: [
          "border border-border bg-background",
          "**:data-[slot=alert-icon]:bg-muted",
        ],

        muted: [
          "bg-muted",
          "**:data-[slot=alert-icon]:bg-faded dark:**:data-[slot=alert-icon]:bg-base-800",
        ],

        faded: [
          "border border-border-faded bg-faded",
          "**:data-[slot=alert-icon]:bg-accent",
        ],

        // -- primary --
        primary: [
          "bg-primary text-primary-foreground",
          "data-[inset-color]:*:data-[slot=alert-inset-color]:bg-primary-200",
          "**:data-[slot=alert-description]:text-primary-100",
          "**:data-[slot=alert-icon]:bg-primary-400/70 **:data-[slot=alert-icon]:text-primary-50 **:data-[slot=alert-icon]:inset-ring-primary-200/25",
        ],

        "primary-muted": [
          "bg-primary-muted",
          "**:data-[slot=alert-icon]:bg-primary-faded **:data-[slot=alert-icon]:text-primary-500 dark:**:data-[slot=alert-icon]:bg-primary-900 dark:**:data-[slot=alert-icon]:text-primary-300",
        ],

        "primary-faded": [
          "border border-border-primary-faded bg-primary-faded",
          "**:data-[slot=alert-icon]:bg-primary-200/50 **:data-[slot=alert-icon]:text-primary-500 dark:**:data-[slot=alert-icon]:bg-primary-900/60 dark:**:data-[slot=alert-icon]:text-primary-300",
        ],

        // -- secondary --
        secondary: [
          "bg-secondary text-secondary-foreground",
          "data-[inset-color]:*:data-[slot=alert-inset-color]:bg-secondary-600",
          "**:data-[slot=alert-description]:text-secondary-900",
          "**:data-[slot=alert-icon]:bg-secondary-200/80 **:data-[slot=alert-icon]:text-secondary-700 **:data-[slot=alert-icon]:inset-ring-secondary-700/25",
        ],

        "secondary-muted": [
          "bg-secondary-muted",
          "**:data-[slot=alert-icon]:bg-secondary-faded/70 **:data-[slot=alert-icon]:text-secondary-600 dark:**:data-[slot=alert-icon]:bg-secondary-900 dark:**:data-[slot=alert-icon]:text-secondary-400",
        ],

        "secondary-faded": [
          "border border-border-secondary-faded bg-secondary-faded",
          "**:data-[slot=alert-icon]:bg-secondary-200/40 **:data-[slot=alert-icon]:text-secondary-600 dark:**:data-[slot=alert-icon]:bg-secondary-900/50 dark:**:data-[slot=alert-icon]:text-secondary-400",
        ],

        // -- destructive --
        destructive: [
          "bg-destructive text-destructive-foreground",
          "data-[inset-color]:*:data-[slot=alert-inset-color]:bg-destructive-200 dark:data-[inset-color]:*:data-[slot=alert-inset-color]:bg-destructive-300",
          "**:data-[slot=alert-description]:text-destructive-100 dark:**:data-[slot=alert-description]:text-destructive-200",
          "**:data-[slot=alert-icon]:bg-destructive-200/30 **:data-[slot=alert-icon]:text-destructive-50 **:data-[slot=alert-icon]:inset-ring-destructive-200/25",
        ],

        "destructive-muted": [
          "bg-destructive-muted",
          "**:data-[slot=alert-icon]:bg-destructive-faded/80 **:data-[slot=alert-icon]:text-destructive-500 dark:**:data-[slot=alert-icon]:bg-destructive-900/80 dark:**:data-[slot=alert-icon]:text-destructive-200/80",
        ],

        "destructive-faded": [
          "border border-border-destructive-faded bg-destructive-faded",
          "**:data-[slot=alert-icon]:bg-destructive-200/50 **:data-[slot=alert-icon]:text-destructive-600 dark:**:data-[slot=alert-icon]:bg-destructive-900/50 dark:**:data-[slot=alert-icon]:text-destructive-300",
        ],

        // -- success --
        success: [
          "bg-success text-success-foreground",
          "data-[inset-color]:*:data-[slot=alert-inset-color]:bg-success-200",
          "**:data-[slot=alert-description]:text-success-100",
          "**:data-[slot=alert-icon]:bg-success-400/50 **:data-[slot=alert-icon]:text-success-50 **:data-[slot=alert-icon]:inset-ring-success-200/25",
        ],

        "success-muted": [
          "bg-success-muted",
          "**:data-[slot=alert-icon]:bg-success-faded **:data-[slot=alert-icon]:text-success-500 dark:**:data-[slot=alert-icon]:bg-success-900 dark:**:data-[slot=alert-icon]:text-success-300",
        ],

        "success-faded": [
          "border border-border-success-faded bg-success-faded",
          "**:data-[slot=alert-icon]:bg-success-200/50 **:data-[slot=alert-icon]:text-success-600 dark:**:data-[slot=alert-icon]:bg-success-900/60 dark:**:data-[slot=alert-icon]:text-success-300",
        ],

        // -- warning --
        warning: [
          "bg-warning text-warning-foreground",
          "data-[inset-color]:*:data-[slot=alert-inset-color]:bg-warning-600",
          "**:data-[slot=alert-description]:text-warning-900",
          "**:data-[slot=alert-icon]:bg-warning-200/70 **:data-[slot=alert-icon]:text-warning-700 **:data-[slot=alert-icon]:inset-ring-warning-700/25",
        ],

        "warning-muted": [
          "bg-warning-muted",
          "**:data-[slot=alert-icon]:bg-warning-faded/80 **:data-[slot=alert-icon]:text-warning-600 dark:**:data-[slot=alert-icon]:bg-warning-900 dark:**:data-[slot=alert-icon]:text-warning-400",
        ],

        "warning-faded": [
          "border border-border-warning-faded bg-warning-faded",
          "**:data-[slot=alert-icon]:bg-warning-200/40 **:data-[slot=alert-icon]:text-warning-600 dark:**:data-[slot=alert-icon]:bg-warning-900/50 dark:**:data-[slot=alert-icon]:text-warning-400",
        ],
      },
    },
    compoundVariants: [
      {
        variant: ["outline", "muted", "faded"],
        className: [
          "text-accent-foreground data-[inset-color]:*:data-[slot=alert-inset-color]:bg-muted-foreground",
          "**:data-[slot=alert-description]:not-[[class*='text-']]:text-muted-foreground",
          "**:data-[slot=alert-icon]:text-muted-foreground **:data-[slot=alert-icon]:inset-ring-border-faded",
        ],
      },
      {
        variant: ["primary-muted", "primary-faded"],
        className: [
          "text-primary-accent-foreground data-[inset-color]:*:data-[slot=alert-inset-color]:bg-primary",
          "**:data-[slot=alert-description]:not-[[class*='text-']]:text-primary-muted-foreground",
          "**:data-[slot=alert-icon]:inset-ring-border-primary-faded",
        ],
      },
      {
        variant: ["secondary-muted", "secondary-faded"],
        className: [
          "text-secondary-accent-foreground data-[inset-color]:*:data-[slot=alert-inset-color]:bg-secondary",
          "**:data-[slot=alert-description]:not-[[class*='text-']]:text-secondary-muted-foreground",
          "**:data-[slot=alert-icon]:inset-ring-border-secondary-faded",
        ],
      },
      {
        variant: ["destructive-muted", "destructive-faded"],
        className: [
          "text-destructive-accent-foreground data-[inset-color]:*:data-[slot=alert-inset-color]:bg-destructive",
          "**:data-[slot=alert-description]:not-[[class*='text-']]:text-destructive-muted-foreground",
          "**:data-[slot=alert-icon]:inset-ring-border-destructive-faded",
        ],
      },
      {
        variant: ["success-muted", "success-faded"],
        className: [
          "text-success-accent-foreground data-[inset-color]:*:data-[slot=alert-inset-color]:bg-success",
          "**:data-[slot=alert-description]:not-[[class*='text-']]:text-success-muted-foreground",
          "**:data-[slot=alert-icon]:inset-ring-border-success-faded",
        ],
      },
      {
        variant: ["warning-muted", "warning-faded"],
        className: [
          "text-warning-accent-foreground data-[inset-color]:*:data-[slot=alert-inset-color]:bg-warning",
          "**:data-[slot=alert-description]:not-[[class*='text-']]:text-warning-muted-foreground",
          "**:data-[slot=alert-icon]:inset-ring-border-warning-faded",
        ],
      },
    ],

    defaultVariants: {
      variant: "outline",
    },
  },
);

function Alert({
  className,
  variant = "outline",
  insetColor,
  centered,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    insetColor?: boolean;
    centered?: boolean;
  }) {
  return (
    <div
      data-slot="alert"
      role="alert"
      data-variant={variant}
      data-inset-color={insetColor}
      data-centered={centered}
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {insetColor && (
        <div
          aria-hidden="true"
          data-slot="alert-inset-color"
          className="absolute top-0 left-0 h-full w-1.5 rounded-l-lg"
        />
      )}
      {children}
    </div>
  );
}

function AlertIcon({
  className,
  intent,
  children,
  ...props
}: React.ComponentProps<"div"> &
  (
    | {
        intent: "info" | "error" | "success" | "warning";
        children?: never;
      }
    | {
        intent?: never;
        children: React.ReactNode;
      }
  )) {
  return (
    <span
      data-slot="alert-icon"
      data-intent={intent}
      className={cn(
        "inline-flex size-8 flex-none items-center justify-center rounded-full shadow-sm inset-ring [&>svg]:size-5 [&>svg]:shrink-0",
        !intent && "[&>svg]:size-4 [&>svg]:text-current",
        className,
      )}
      {...props}
    >
      {intent
        ? {
            info: <InfoFilledIcon />,
            error: <ErrorFilledIcon />,
            success: <SuccessFilledIcon />,
            warning: <WarningFilledIcon />,
          }[intent]
        : children}
    </span>
  );
}

function AlertContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-content"
      className={cn("flex flex-1 flex-col gap-0.5 text-sm", className)}
      {...props}
    />
  );
}

function AlertTitle({
  asChild,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  // use to render as semantic heading element (h2, h3, h4, h5, h6)
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="alert-title"
      className={cn(
        "line-clamp-1 min-h-4 font-medium tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "grid justify-items-start gap-1 [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

function AlertFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-footer"
      className={cn("mt-6 flex items-center gap-2", className)}
      {...props}
    />
  );
}

export {
  Alert,
  AlertIcon,
  AlertContent,
  AlertTitle,
  AlertDescription,
  AlertFooter,
};
