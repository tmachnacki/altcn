import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const notificationVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-1 rounded-full p-1 text-xs leading-none font-normal whitespace-nowrap tabular-nums",
    "**:[svg]:pointer-events-none **:[svg]:not-[[class*='size-']]:size-3",
  ],
  {
    variants: {
      variant: {
        // -- base --
        outline: "border border-border bg-background text-foreground",

        base: "bg-base-bg text-base-foreground",

        accent: "bg-muted text-accent-foreground",

        muted: "bg-muted text-muted-foreground",

        surface: "border border-border-faded bg-faded text-accent-foreground",

        faded: "border border-border-faded bg-faded text-muted-foreground",

        // -- primary --
        primary: "bg-primary text-primary-foreground",

        "primary-accent": "bg-primary-muted text-primary-accent-foreground",

        "primary-muted": "bg-primary-muted text-primary-muted-foreground",

        "primary-surface":
          "border border-border-primary-faded bg-primary-faded text-primary-accent-foreground",

        "primary-faded":
          "border border-border-primary-faded bg-primary-faded text-primary-muted-foreground",

        // -- secondary --
        secondary: "bg-secondary text-secondary-foreground",

        "secondary-accent":
          "bg-secondary-muted text-secondary-accent-foreground",

        "secondary-muted": "bg-secondary-muted text-secondary-muted-foreground",

        "secondary-surface":
          "border border-border-secondary-faded bg-secondary-faded text-secondary-accent-foreground",

        "secondary-faded":
          "border border-border-secondary-faded bg-secondary-faded text-secondary-muted-foreground",

        // -- destructive --
        destructive: "bg-destructive text-destructive-foreground",

        "destructive-accent":
          "bg-destructive-muted text-destructive-accent-foreground",

        "destructive-muted":
          "bg-destructive-muted text-destructive-muted-foreground",

        "destructive-surface":
          "border border-border-destructive-faded bg-destructive-faded text-destructive-accent-foreground",

        "destructive-faded":
          "border border-border-destructive-faded bg-destructive-faded text-destructive-muted-foreground",

        // -- success --
        success: "bg-success text-success-foreground",

        "success-accent": "bg-success-muted text-success-accent-foreground",

        "success-muted": "bg-success-muted text-success-muted-foreground",

        "success-surface":
          "border border-border-success-faded bg-success-faded text-success-accent-foreground",

        "success-faded":
          "border border-border-success-faded bg-success-faded text-success-muted-foreground",

        // -- warning --
        warning: "bg-warning text-warning-foreground",

        "warning-accent": "bg-warning-muted text-warning-accent-foreground",

        "warning-muted": "bg-warning-muted text-warning-muted-foreground",

        "warning-surface":
          "border border-border-warning-faded bg-warning-faded text-warning-accent-foreground",

        "warning-faded":
          "border border-border-warning-faded bg-warning-faded text-warning-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
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
    ping?: boolean;
    outlined?: boolean;
  };

function Notification({
  className,
  containerClassName,
  pingClassName,
  variant = "primary",
  position,
  ping,
  outlined,
  children,
  ...props
}: NotificationProps) {
  return (
    <span
      data-slot="notification-container"
      data-position={position}
      className={cn(
        "relative isolate flex rounded-full bg-background [--offset:42%] data-[position]:absolute [[data-position*='bottom']]:bottom-0 [[data-position*='bottom']]:translate-y-(--offset) [[data-position*='left']]:left-0 [[data-position*='left']]:-translate-x-(--offset) [[data-position*='right']]:right-0 [[data-position*='right']]:translate-x-(--offset) [[data-position*='top']]:top-0 [[data-position*='top']]:-translate-y-(--offset)",
        children ? "h-5 min-w-5" : "size-2.5",
        outlined && "outline-2 outline-background",
        containerClassName
      )}
    >
      <span
        data-slot="notification"
        className={cn(
          notificationVariants({ variant }),
          "relative z-[3]",
          children ? "h-5 min-w-5" : "size-2.5",

          className
        )}
        {...props}
      >
        {children}
      </span>

      {ping && (
        <span
          data-slot="notification-ping"
          aria-hidden="true"
          className={cn(
            pingVariants({ variant }),
            "absolute top-1/2 left-1/2 z-[2] size-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-75",
            children ? "animate-ping-sm" : "animate-ping",
            pingClassName
          )}
        />
      )}
    </span>
  );
}

export { Notification };
