import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const notificationVariants = cva(
  [
    "relative z-[3] inline-flex shrink-0 items-center justify-center gap-1 rounded-full p-1 text-xs leading-0 font-normal whitespace-nowrap tabular-nums",
    "[&_svg:not([class*='size-'])]:size-3 [&>svg]:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        // -- base --
        outline: "bg-background text-foreground inset-ring inset-ring-border",

        base: "bg-base-bg text-base-foreground",

        accent: "bg-accent text-accent-foreground backdrop-blur-lg",

        muted: "bg-muted text-muted-foreground",

        surface:
          "bg-faded-solid text-accent-foreground inset-ring inset-ring-border-faded",

        faded:
          "bg-faded-solid text-muted-foreground inset-ring inset-ring-border-faded",

        // -- primary --
        primary: "bg-primary text-primary-foreground",

        "primary-accent": "bg-primary-muted text-primary-accent-foreground",

        "primary-muted": "bg-primary-muted text-primary-muted-foreground",

        "primary-surface":
          "bg-primary-faded-solid text-primary-accent-foreground inset-ring inset-ring-border-primary-faded",

        "primary-faded":
          "bg-primary-faded-solid text-primary-muted-foreground inset-ring inset-ring-border-primary-faded",

        // -- secondary --
        secondary: "bg-secondary text-secondary-foreground",

        "secondary-accent":
          "bg-secondary-muted text-secondary-accent-foreground",

        "secondary-muted": "bg-secondary-muted text-secondary-muted-foreground",

        "secondary-surface":
          "bg-secondary-faded-solid text-secondary-accent-foreground inset-ring inset-ring-border-secondary-faded",

        "secondary-faded":
          "bg-secondary-faded-solid text-secondary-muted-foreground inset-ring inset-ring-border-secondary-faded",

        // -- destructive --
        destructive: "bg-destructive text-destructive-foreground",

        "destructive-accent":
          "bg-destructive-muted text-destructive-accent-foreground",

        "destructive-muted":
          "bg-destructive-muted text-destructive-muted-foreground",

        "destructive-surface":
          "bg-destructive-faded-solid text-destructive-accent-foreground inset-ring inset-ring-border-destructive-faded",

        "destructive-faded":
          "bg-destructive-faded-solid text-destructive-muted-foreground inset-ring inset-ring-border-destructive-faded",

        // -- success --
        success: "bg-success text-success-foreground",

        "success-accent": "bg-success-muted text-success-accent-foreground",

        "success-muted": "bg-success-muted text-success-muted-foreground",

        "success-surface":
          "bg-success-faded-solid text-success-accent-foreground inset-ring inset-ring-border-success-faded",

        "success-faded":
          "bg-success-faded-solid text-success-muted-foreground inset-ring inset-ring-border-success-faded",

        // -- warning --
        warning: "bg-warning text-warning-foreground",

        "warning-accent": "bg-warning-muted text-warning-accent-foreground",

        "warning-muted": "bg-warning-muted text-warning-muted-foreground",

        "warning-surface":
          "bg-warning-faded-solid text-warning-accent-foreground inset-ring inset-ring-border-warning-faded",

        "warning-faded":
          "bg-warning-faded-solid text-warning-muted-foreground inset-ring inset-ring-border-warning-faded",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

const pingVariants = ({
  variant,
}: {
  variant: VariantProps<typeof notificationVariants>["variant"];
}) =>
  ({
    outline: "bg-base-bg",
    base: "bg-base-bg",
    accent: "bg-base-bg",
    muted: "bg-base-bg",
    surface: "bg-base-bg",
    faded: "bg-base-bg",
    primary: "bg-primary",
    "primary-accent": "bg-primary",
    "primary-muted": "bg-primary",
    "primary-surface": "bg-primary",
    "primary-faded": "bg-primary",
    secondary: "bg-secondary",
    "secondary-accent": "bg-secondary",
    "secondary-muted": "bg-secondary",
    "secondary-surface": "bg-secondary",
    "secondary-faded": "bg-secondary",
    destructive: "bg-destructive",
    "destructive-accent": "bg-destructive",
    "destructive-muted": "bg-destructive",
    "destructive-surface": "bg-destructive",
    "destructive-faded": "bg-destructive",
    success: "bg-success",
    "success-accent": "bg-success",
    "success-muted": "bg-success",
    "success-surface": "bg-success",
    "success-faded": "bg-success",
    warning: "bg-warning",
    "warning-accent": "bg-warning",
    "warning-muted": "bg-warning",
    "warning-surface": "bg-warning",
    "warning-faded": "bg-warning",
  })[variant || "primary"];

type NotificationProps = React.ComponentProps<"span"> &
  VariantProps<typeof notificationVariants> & {
    containerClassName?: string;
    pingClassName?: string;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    animated?: boolean;
    outlined?: boolean;
  };

function Notification({
  className,
  containerClassName,
  pingClassName,
  variant = "primary",
  position,
  animated,
  outlined,
  children,
  ...props
}: NotificationProps) {
  return (
    <span
      data-slot="notification-container"
      data-position={position}
      className={cn(
        "relative isolate z-[1] flex [--offset:42%] data-[position]:absolute [[data-position*='bottom']]:bottom-0 [[data-position*='bottom']]:translate-y-(--offset) [[data-position*='left']]:left-0 [[data-position*='left']]:-translate-x-(--offset) [[data-position*='right']]:right-0 [[data-position*='right']]:translate-x-(--offset) [[data-position*='top']]:top-0 [[data-position*='top']]:-translate-y-(--offset)",
        children ? "h-5 min-w-5" : "size-2.5",
        containerClassName,
      )}
    >
      <span
        data-slot="notification"
        className={cn(
          notificationVariants({ variant }),
          children ? "h-5 min-w-5" : "size-2.5",
          outlined && "outline-2 outline-background",
          className,
        )}
        {...props}
      >
        {children}
      </span>

      {animated && (
        <span
          data-slot="notification-ping"
          aria-hidden="true"
          className={cn(
            "absolute top-1/2 left-1/2 z-[2] size-full -translate-x-1/2 -translate-y-1/2 animate-notification-ping rounded-full bg-primary opacity-75",
            pingVariants({ variant }),
            pingClassName,
          )}
        />
      )}
    </span>
  );
}

export { Notification };
