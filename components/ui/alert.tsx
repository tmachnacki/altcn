import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { XIcon } from "lucide-react";

import { cn } from "~/lib/utils";

import { ErrorFilledIcon } from "~/components/icons/error-filled";
import { InfoFilledIcon } from "~/components/icons/info-filled";
import { SuccessFilledIcon } from "~/components/icons/success-filled";
import { WarningFilledIcon } from "~/components/icons/warning-filled";

const alertVariants = cva(
  [
    "relative flex w-full items-start gap-x-3 overflow-hidden rounded-lg px-4 py-3 text-sm has-[[data-slot='alert-close']]:pr-12 data-[align=center]:items-center",
    "*:[svg]:flex-none *:[svg]:text-current *:[svg]:not-[[class*='size-']]:not-[[class*='h-']]:h-[1lh] *:[svg]:not-[[class*='size-']]:not-[[class*='w-']]:w-4",
  ],
  {
    variants: {
      variant: {
        // -- base --
        outline: [
          "border border-border bg-background",
          "[--alert-icon-bg:var(--color-muted)]",
          "[--hover-alert-close-bg:--alpha(var(--color-base-500)/20%)]",
          "[--alert-close-outline:var(--color-outline)]",
        ],

        base: [
          "bg-base-bg text-base-foreground",
          "[--alert-inset-color-bg:var(--color-base-200)]",
          "[--alert-description-text:var(--color-base-100)]",
          "[--alert-icon-bg:--alpha(var(--color-base-50)/15%)] [--alert-icon-border:--alpha(var(--color-base-50)/20%)] [--alert-icon-text:var(--color-base-foreground)]",
          "[--hover-alert-close-bg:--alpha(var(--color-base-200)/20%)]",
          "[--alert-close-outline:var(--color-base-foreground)]",
        ],

        muted: [
          "bg-muted",
          "[--alert-icon-bg:var(--color-faded)] dark:[--alert-icon-bg:var(--color-base-800)]",
          "[--hover-alert-close-bg:--alpha(var(--color-base-500)/20%)]",
          "[--alert-close-outline:var(--color-outline)]",
        ],

        faded: [
          "border border-border-faded bg-faded",
          "[--alert-icon-bg:var(--color-muted)]",
          "[--hover-alert-close-bg:--alpha(var(--color-base-500)/20%)]",
          "[--alert-close-outline:var(--color-outline)]",
        ],

        // -- primary --
        primary: [
          "bg-primary text-primary-foreground",
          "[--alert-inset-color-bg:var(--color-primary-200)]",
          "[--alert-description-text:var(--color-primary-100)]",
          "[--alert-icon-bg:--alpha(var(--color-primary-50)/15%)] [--alert-icon-border:--alpha(var(--color-primary-50)/20%)] [--alert-icon-text:var(--color-primary-foreground)]",
          "[--hover-alert-close-bg:--alpha(var(--color-primary-200)/20%)]",
          "[--alert-close-outline:var(--color-primary-foreground)]",
        ],

        "primary-muted": [
          "bg-primary-muted",
          "[--alert-icon-bg:var(--color-primary-faded)] [--alert-icon-text:var(--color-primary-500)] dark:[--alert-icon-bg:var(--color-primary-900)] dark:[--alert-icon-text:var(--color-primary-200)]",
          "[--hover-alert-close-bg:--alpha(var(--color-primary-500)/20%)]",
          "[--alert-close-outline:var(--color-primary)]",
        ],

        "primary-faded": [
          "border border-primary-border-faded bg-primary-faded",
          "[--alert-icon-bg:var(--color-primary-muted)] [--alert-icon-text:var(--color-primary-muted-foreground)]",
          "[--hover-alert-close-bg:--alpha(var(--color-primary-500)/20%)]",
          "[--alert-close-outline:var(--color-primary)]",
        ],

        // -- secondary --
        secondary: [
          "bg-secondary text-secondary-foreground",
          "[--alert-inset-color-bg:var(--color-secondary-600)]",
          "[--alert-description-text:var(--color-secondary-900)]",
          "[--alert-icon-bg:--alpha(var(--color-secondary-50)/60%)] [--alert-icon-border:--alpha(var(--color-secondary-100)/40%)] [--alert-icon-text:var(--color-secondary-600)]",
          "[--hover-alert-close-bg:--alpha(var(--color-secondary-700)/30%)]",
          "[--alert-close-outline:var(--color-secondary-foreground)]",
        ],

        "secondary-muted": [
          "bg-secondary-muted",
          "[--alert-icon-bg:var(--color-secondary-faded)] [--alert-icon-text:var(--color-secondary-500)] dark:[--alert-icon-bg:var(--color-secondary-900)] dark:[--alert-icon-text:var(--color-secondary-300)]",
          "[--hover-alert-close-bg:--alpha(var(--color-secondary-500)/20%)]",
          "[--alert-close-outline:var(--color-secondary)]",
        ],

        "secondary-faded": [
          "border border-secondary-border-faded bg-secondary-faded",
          "[--alert-icon-bg:var(--color-secondary-muted)] [--alert-icon-text:var(--color-secondary-muted-foreground)]",
          "[--hover-alert-close-bg:--alpha(var(--color-secondary-500)/20%)]",
          "[--alert-close-outline:var(--color-secondary)]",
        ],

        // -- destructive --
        destructive: [
          "bg-destructive text-destructive-foreground",
          "[--alert-inset-color-bg:var(--color-destructive-200)] dark:[--alert-inset-color-bg:var(--color-destructive-300)]",
          "[--alert-description-text:var(--color-destructive-100)] dark:[--alert-description-text:var(--color-destructive-200)]",
          "[--alert-icon-bg:--alpha(var(--color-destructive-50)/15%)] [--alert-icon-border:--alpha(var(--color-destructive-50)/20%)] [--alert-icon-text:var(--color-destructive-foreground)] dark:[--alert-icon-bg:--alpha(var(--color-destructive-100)/25%)]",
          "[--hover-alert-close-bg:--alpha(var(--color-destructive-200)/25%)]",
          "[--alert-close-outline:var(--color-destructive-foreground)]",
        ],

        "destructive-muted": [
          "bg-destructive-muted",
          "[--alert-icon-bg:var(--color-destructive-faded)] [--alert-icon-text:var(--color-destructive-500)] dark:[--alert-icon-bg:var(--color-destructive-900)] dark:[--alert-icon-text:var(--color-destructive-200)]",
          "[--hover-alert-close-bg:--alpha(var(--color-destructive-500)/20%)]",
          "[--alert-close-outline:var(--color-destructive)]",
        ],

        "destructive-faded": [
          "border border-destructive-border-faded bg-destructive-faded",
          "[--alert-icon-bg:var(--color-destructive-muted)] [--alert-icon-text:var(--color-destructive-muted-foreground)]",
          "[--hover-alert-close-bg:--alpha(var(--color-destructive-500)/20%)]",
          "[--alert-close-outline:var(--color-destructive)]",
        ],

        // -- success --
        success: [
          "bg-success text-success-foreground",
          "[--alert-inset-color-bg:var(--color-success-200)]",
          "[--alert-description-text:var(--color-success-100)]",
          "[--alert-icon-bg:--alpha(var(--color-success-50)/15%)] [--alert-icon-border:--alpha(var(--color-success-50)/20%)] [--alert-icon-text:var(--color-success-foreground)]",
          "[--hover-alert-close-bg:--alpha(var(--color-success-200)/20%)]",
          "[--alert-close-outline:var(--color-success-foreground)]",
        ],

        "success-muted": [
          "bg-success-muted",
          "[--alert-icon-bg:var(--color-success-faded)] [--alert-icon-text:var(--color-success-500)] dark:[--alert-icon-bg:var(--color-success-900)] dark:[--alert-icon-text:var(--color-success-200)]",
          "[--hover-alert-close-bg:--alpha(var(--color-success-500)/20%)]",
          "[--alert-close-outline:var(--color-success)]",
        ],

        "success-faded": [
          "border border-success-border-faded bg-success-faded",
          "[--alert-icon-bg:var(--color-success-muted)] [--alert-icon-text:var(--color-success-muted-foreground)]",
          "[--hover-alert-close-bg:--alpha(var(--color-success-500)/20%)]",
          "[--alert-close-outline:var(--color-success)]",
        ],

        // -- warning --
        warning: [
          "bg-warning text-warning-foreground",
          "[--alert-inset-color-bg:var(--color-warning-600)]",
          "[--alert-description-text:var(--color-warning-900)]",
          "[--alert-icon-bg:--alpha(var(--color-warning-50)/60%)] [--alert-icon-border:--alpha(var(--color-warning-100)/40%)] [--alert-icon-text:var(--color-warning-600)]",
          "[--hover-alert-close-bg:--alpha(var(--color-warning-700)/25%)]",
          "[--alert-close-outline:var(--color-warning-foreground)]",
        ],

        "warning-muted": [
          "bg-warning-muted",
          "[--alert-icon-bg:var(--color-warning-faded)] [--alert-icon-text:var(--color-warning-500)] dark:[--alert-icon-bg:var(--color-warning-900)] dark:[--alert-icon-text:var(--color-warning-300)]",
          "[--hover-alert-close-bg:--alpha(var(--color-warning-500)/20%)]",
          "[--alert-close-outline:var(--color-warning)]",
        ],

        "warning-faded": [
          "border-warning-border-faded border bg-warning-faded",
          "[--alert-icon-bg:var(--color-warning-muted)] [--alert-icon-text:var(--color-warning-muted-foreground)]",
          "[--hover-alert-close-bg:--alpha(var(--color-warning-500)/20%)]",
          "[--alert-close-outline:var(--color-warning)]",
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
          "[--alert-icon-border:var(--color-primary-border-faded)]",
        ],
      },
      {
        variant: ["secondary-muted", "secondary-faded"],
        className: [
          "text-secondary-accent-foreground [--alert-inset-color-bg:var(--color-secondary)]",
          "[--alert-description-text:var(--color-secondary-muted-foreground)]",
          "[--alert-icon-border:var(--color-secondary-border-faded)]",
        ],
      },
      {
        variant: ["destructive-muted", "destructive-faded"],
        className: [
          "text-destructive-accent-foreground [--alert-inset-color-bg:var(--color-destructive)]",
          "[--alert-description-text:var(--color-destructive-muted-foreground)]",
          "[--alert-icon-border:var(--color-destructive-border-faded)]",
        ],
      },
      {
        variant: ["success-muted", "success-faded"],
        className: [
          "text-success-accent-foreground [--alert-inset-color-bg:var(--color-success)]",
          "[--alert-description-text:var(--color-success-muted-foreground)]",
          "[--alert-icon-border:var(--color-success-border-faded)]",
        ],
      },
      {
        variant: ["warning-muted", "warning-faded"],
        className: [
          "text-warning-accent-foreground [--alert-inset-color-bg:var(--color-warning)]",
          "[--alert-description-text:var(--color-warning-muted-foreground)]",
          "[--alert-icon-border:var(--color-warning-border-faded)]",
        ],
      },
    ],

    defaultVariants: {
      variant: "outline",
    },
  }
);

type AlertProps = React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    align?: "start" | "center";
  };

function Alert({
  className,
  variant = "outline",
  align = "start",
  children,
  ...props
}: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      data-align={align}
      className={cn(alertVariants({ variant }), "group/alert", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function AlertInsetColor({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      aria-hidden="true"
      data-slot="alert-inset-color"
      className={cn(
        "absolute top-0 left-0 h-full w-1.5 rounded-l-lg bg-(--alert-inset-color-bg)",
        className
      )}
      {...props}
    />
  );
}

type AlertIconProps = React.ComponentProps<"div"> &
  (
    | {
        type: "info" | "error" | "success" | "warning";
        children?: never;
      }
    | {
        type?: never;
        children: React.ReactNode;
      }
  );

function AlertIcon({ className, type, children, ...props }: AlertIconProps) {
  return (
    <span
      data-slot="alert-icon"
      data-type={type}
      className={cn(
        "inline-flex size-8 flex-none items-center justify-center rounded-full bg-(--alert-icon-bg) shadow-sm inset-ring inset-ring-(--alert-icon-border) **:[svg]:shrink-0",
        type
          ? "text-(--alert-icon-text) **:[svg]:not-[[class*='size-']]:size-5"
          : "**:[svg]:text-current **:[svg]:not-[[class*='size-']]:size-4",
        className
      )}
      {...props}
    >
      {type
        ? {
            info: <InfoFilledIcon />,
            error: <ErrorFilledIcon />,
            success: <SuccessFilledIcon />,
            warning: <WarningFilledIcon />,
          }[type]
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
        className
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
        "grid justify-items-start gap-1 text-sm text-(--alert-description-text) **:[p]:leading-relaxed",
        className
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

function AlertClose({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="alert-close"
      type="button"
      aria-label={"Dismiss"}
      className={cn(
        "absolute top-2.5 right-4 inline-flex size-6 items-center justify-center rounded-sm text-(--alert-description-text) opacity-70 outline-(--alert-close-outline) group-data-[align=center]/alert:top-1/2 group-data-[align=center]/alert:-translate-y-1/2 hover:bg-(--hover-alert-close-bg) hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2",
        className
      )}
      {...props}
    >
      <XIcon className="size-4" />
    </button>
  );
}

export {
  Alert,
  AlertClose,
  AlertContent,
  AlertIcon,
  AlertInsetColor,
  AlertDescription,
  AlertFooter,
  AlertTitle,
};
