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
    "[&>svg]:flex-none [&>svg]:text-current [&>svg:not([class*='size-'])]:h-[1lh] [&>svg:not([class*='size-'])]:w-4",
  ],
  {
    variants: {
      variant: {
        // -- base --
        outline: [
          "border border-border bg-background",
          "[--alert-icon-bg:var(--color-muted)]",
        ],

        muted: [
          "bg-muted",
          "[--alert-icon-bg:var(--color-faded)] dark:[--alert-icon-bg:var(--color-base-800)]",
        ],

        faded: [
          "border border-border-faded bg-faded",
          "[--alert-icon-bg:var(--color-accent)]",
        ],

        // -- primary --
        primary: [
          "bg-primary text-primary-foreground",
          "data-[inset-color]:[--alert-inset-color-bg:var(--color-primary-200)]",
          "[--alert-description-text:var(--color-primary-100)]",
          "[--alert-icon-bg:--alpha(var(--color-primary-50)/15%)] [--alert-icon-border:--alpha(var(--color-primary-50)/20%)] [--alert-icon-text:var(--color-primary-foreground)]",
        ],

        "primary-muted": [
          "bg-primary-muted",
          "[--alert-icon-bg:var(--color-primary-faded)] [--alert-icon-text:var(--color-primary-500)] dark:[--alert-icon-bg:var(--color-primary-900)] dark:[--alert-icon-text:var(--color-primary-200)]",
        ],

        "primary-faded": [
          "border border-border-primary-faded bg-primary-faded",
          "[--alert-icon-bg:var(--color-primary-muted)] [--alert-icon-text:var(--color-primary-muted-foreground)]",
        ],

        // -- secondary --
        secondary: [
          "bg-secondary text-secondary-foreground",
          "[--alert-inset-color-bg:var(--color-secondary-600)]",
          "[--alert-description-text:var(--color-secondary-900)]",
          "[--alert-icon-bg:--alpha(var(--color-secondary-50)/60%)] [--alert-icon-border:--alpha(var(--color-secondary-100)/40%)] [--alert-icon-text:var(--color-secondary-600)]",
        ],

        "secondary-muted": [
          "bg-secondary-muted",
          "[--alert-icon-bg:var(--color-secondary-faded)] [--alert-icon-text:var(--color-secondary-500)] dark:[--alert-icon-bg:var(--color-secondary-900)] dark:[--alert-icon-text:var(--color-secondary-300)]",
        ],

        "secondary-faded": [
          "border border-border-secondary-faded bg-secondary-faded",
          "[--alert-icon-bg:var(--color-secondary-muted)] [--alert-icon-text:var(--color-secondary-muted-foreground)]",
        ],

        // -- destructive --
        destructive: [
          "bg-destructive text-destructive-foreground",
          "[--alert-inset-color-bg:var(--color-destructive-200)] dark:[--alert-inset-color-bg:var(--color-destructive-300)]",
          "[--alert-description-text:var(--color-destructive-100)] dark:[--alert-description-text:var(--color-destructive-200)]",
          "[--alert-icon-bg:--alpha(var(--color-destructive-50)/15%)] dark:[--alert-icon-bg:--alpha(var(--color-destructive-100)/25%)] [--alert-icon-border:--alpha(var(--color-destructive-50)/20%)] [--alert-icon-text:var(--color-destructive-foreground)]",
        ],

        "destructive-muted": [
          "bg-destructive-muted",
          "[--alert-icon-bg:var(--color-destructive-faded)] [--alert-icon-text:var(--color-destructive-500)] dark:[--alert-icon-bg:var(--color-destructive-900)] dark:[--alert-icon-text:var(--color-destructive-200)]",
        ],

        "destructive-faded": [
          "border border-border-destructive-faded bg-destructive-faded",
          "[--alert-icon-bg:var(--color-destructive-muted)] [--alert-icon-text:var(--color-destructive-muted-foreground)]",
        ],

        // -- success --
        success: [
          "bg-success text-success-foreground",
          "data-[inset-color]:[--alert-inset-color-bg:var(--color-success-200)]",
          "[--alert-description-text:var(--color-success-100)]",
          "[--alert-icon-bg:--alpha(var(--color-success-50)/15%)] [--alert-icon-border:--alpha(var(--color-success-50)/20%)] [--alert-icon-text:var(--color-success-foreground)]",
        ],

        "success-muted": [
          "bg-success-muted",
          "[--alert-icon-bg:var(--color-success-faded)] [--alert-icon-text:var(--color-success-500)] dark:[--alert-icon-bg:var(--color-success-900)] dark:[--alert-icon-text:var(--color-success-200)]",
        ],

        "success-faded": [
          "border border-border-success-faded bg-success-faded",
          "[--alert-icon-bg:var(--color-success-muted)] [--alert-icon-text:var(--color-success-muted-foreground)]",
        ],

        // -- warning --
        warning: [
          "bg-warning text-warning-foreground",
          "[--alert-inset-color-bg:var(--color-warning-600)]",
          "[--alert-description-text:var(--color-warning-900)]",
          "[--alert-icon-bg:--alpha(var(--color-warning-50)/60%)] [--alert-icon-border:--alpha(var(--color-warning-100)/40%)] [--alert-icon-text:var(--color-warning-600)]",
        ],

        "warning-muted": [
          "bg-warning-muted",
          "[--alert-icon-bg:var(--color-warning-faded)] [--alert-icon-text:var(--color-warning-500)] dark:[--alert-icon-bg:var(--color-warning-900)] dark:[--alert-icon-text:var(--color-warning-300)]",
        ],

        "warning-faded": [
          "border border-border-warning-faded bg-warning-faded",
          "[--alert-icon-bg:var(--color-warning-muted)] [--alert-icon-text:var(--color-warning-muted-foreground)]",
        ],
      },
    },
    compoundVariants: [
      {
        variant: ["outline", "muted", "faded"],
        className: [
          "text-accent-foreground [--alert-inset-color-bg:var(--color-muted-foreground)]",
          "[--alert-description-text:var(--color-muted-foreground)]",
          "[--alert-icon-border:var(--color-border-faded)] [--alert-icon-text:var(--color-muted-foreground)]",
        ],
      },
      {
        variant: ["primary-muted", "primary-faded"],
        className: [
          "text-primary-accent-foreground [--alert-inset-color-bg:var(--color-primary)]",
          "[--alert-description-text:var(--color-primary-muted-foreground)]",
          "[--alert-icon-border:var(--color-border-primary-faded)]",
        ],
      },
      {
        variant: ["secondary-muted", "secondary-faded"],
        className: [
          "text-secondary-accent-foreground [--alert-inset-color-bg:var(--color-secondary)]",
          "[--alert-description-text:var(--color-secondary-muted-foreground)]",
          "[--alert-icon-border:var(--color-border-secondary-faded)]",
        ],
      },
      {
        variant: ["destructive-muted", "destructive-faded"],
        className: [
          "text-destructive-accent-foreground [--alert-inset-color-bg:var(--color-destructive)]",
          "[--alert-description-text:var(--color-destructive-muted-foreground)]",
          "[--alert-icon-border:var(--color-border-destructive-faded)]",
        ],
      },
      {
        variant: ["success-muted", "success-faded"],
        className: [
          "text-success-accent-foreground [--alert-inset-color-bg:var(--color-success)]",
          "[--alert-description-text:var(--color-success-muted-foreground)]",
          "[--alert-icon-border:var(--color-border-success-faded)]",
        ],
      },
      {
        variant: ["warning-muted", "warning-faded"],
        className: [
          "text-warning-accent-foreground [--alert-inset-color-bg:var(--color-warning)]",
          "[--alert-description-text:var(--color-warning-muted-foreground)]",
          "[--alert-icon-border:var(--color-border-warning-faded)]",
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
  insetColorClassName,
  centered,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    insetColor?: boolean;
    insetColorClassName?: string;
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
          className={cn(
            "absolute top-0 left-0 h-full w-1.5 rounded-l-lg bg-(--alert-inset-color-bg)",
            insetColorClassName,
          )}
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
        "inline-flex size-8 flex-none items-center justify-center rounded-full bg-(--alert-icon-bg) shadow-sm inset-ring inset-ring-(--alert-icon-border) [&>svg]:shrink-0",
        intent
          ? "text-(--alert-icon-text) [&>svg]:size-5"
          : "[&>svg]:size-4 [&>svg]:text-current",
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
        "grid justify-items-start gap-1 text-sm text-(--alert-description-text) [&_p]:leading-relaxed",
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
