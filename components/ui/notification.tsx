import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

const notificationVariants = tv({
  slots: {
    container: [
      "[--notification-size-empty:--spacing(2)] [--notification-size:--spacing(5)]",
      "relative isolate inline-flex shrink-0 grow-0 items-center justify-center rounded-full [--offset:5%] data-[position]:absolute",
      "[[data-position*='bottom']]:bottom-(--offset) [[data-position*='bottom']]:translate-y-1/2",
      "[[data-position*='left']]:left-(--offset) [[data-position*='left']]:-translate-x-1/2",
      "[[data-position*='right']]:right-(--offset) [[data-position*='right']]:translate-x-1/2",
      "[[data-position*='top']]:top-(--offset) [[data-position*='top']]:-translate-y-1/2",
    ],
    ping: [
      "absolute top-1/2 left-1/2 z-[1] size-full -translate-x-1/2 -translate-y-1/2 rounded-full opacity-75",
    ],
    backdrop: [
      "absolute top-1/2 left-1/2 z-[2] size-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-background",
    ],
    notification: [
      "relative z-[3] inline-flex size-full shrink-0 items-center justify-center gap-1 rounded-full p-1 text-xs leading-none font-normal whitespace-nowrap tabular-nums select-none",
      "**:[svg]:pointer-events-none **:[svg]:-mx-0.5 **:[svg]:shrink-0 **:[svg]:grow-0 **:[svg]:not-[[class*='size-']]:size-3",
    ],
  },
  variants: {
    variant: {
      // -- base --
      outline: {
        notification:
          "bg-background text-foreground inset-ring inset-ring-border",
        ping: "bg-base-bg",
      },

      contrast: {
        notification: "bg-contrast text-contrast-foreground",
        ping: "bg-contrast",
      },

      base: {
        notification: "bg-base-bg text-base-foreground",
        ping: "bg-base-bg",
      },

      accent: {
        notification: "bg-muted text-accent-foreground",
        ping: "bg-base-bg",
      },

      muted: {
        notification: "bg-muted text-muted-foreground",
        ping: "bg-base-bg",
      },

      surface: {
        notification:
          "bg-faded text-accent-foreground inset-ring inset-ring-faded-border",
        ping: "bg-base-bg",
      },

      faded: {
        notification:
          "bg-faded text-muted-foreground inset-ring inset-ring-faded-border",
        ping: "bg-base-bg",
      },

      // -- primary --
      primary: {
        notification: "bg-primary text-primary-foreground",
        ping: "bg-primary",
      },

      "primary-accent": {
        notification: "bg-primary-muted text-primary-accent-foreground",
        ping: "bg-primary",
      },

      "primary-muted": {
        notification: "bg-primary-muted text-primary-muted-foreground",
        ping: "bg-primary",
      },

      "primary-surface": {
        notification:
          "bg-primary-faded text-primary-accent-foreground inset-ring inset-ring-primary-faded-border",
        ping: "bg-primary",
      },

      "primary-faded": {
        notification:
          "bg-primary-faded text-primary-muted-foreground inset-ring inset-ring-primary-faded-border",
        ping: "bg-primary",
      },

      // -- secondary --
      secondary: {
        notification: "bg-secondary text-secondary-foreground",
        ping: "bg-secondary",
      },

      "secondary-accent": {
        notification: "bg-secondary-muted text-secondary-accent-foreground",
        ping: "bg-secondary",
      },

      "secondary-muted": {
        notification: "bg-secondary-muted text-secondary-muted-foreground",
        ping: "bg-secondary",
      },

      "secondary-surface": {
        notification:
          "bg-secondary-faded text-secondary-accent-foreground inset-ring inset-ring-secondary-faded-border",
        ping: "bg-secondary",
      },

      "secondary-faded": {
        notification:
          "bg-secondary-faded text-secondary-muted-foreground inset-ring inset-ring-secondary-faded-border",
        ping: "bg-secondary",
      },

      // -- destructive --
      destructive: {
        notification: "bg-destructive text-destructive-foreground",
        ping: "bg-destructive",
      },

      "destructive-accent": {
        notification: "bg-destructive-muted text-destructive-accent-foreground",
        ping: "bg-destructive",
      },

      "destructive-muted": {
        notification: "bg-destructive-muted text-destructive-muted-foreground",
        ping: "bg-destructive",
      },

      "destructive-surface": {
        notification:
          "bg-destructive-faded text-destructive-accent-foreground inset-ring inset-ring-destructive-faded-border",
        ping: "bg-destructive",
      },

      "destructive-faded": {
        notification:
          "bg-destructive-faded text-destructive-muted-foreground inset-ring inset-ring-destructive-faded-border",
        ping: "bg-destructive",
      },

      // -- success --
      success: {
        notification: "bg-success text-success-foreground",
        ping: "bg-success",
      },

      "success-accent": {
        notification: "bg-success-muted text-success-accent-foreground",
        ping: "bg-success",
      },

      "success-muted": {
        notification: "bg-success-muted text-success-muted-foreground",
        ping: "bg-success",
      },

      "success-surface": {
        notification:
          "bg-success-faded text-success-accent-foreground inset-ring inset-ring-success-faded-border",
        ping: "bg-success",
      },

      "success-faded": {
        notification:
          "bg-success-faded text-success-muted-foreground inset-ring inset-ring-success-faded-border",
        ping: "bg-success",
      },

      // -- warning --
      warning: {
        notification: "bg-warning text-warning-foreground",
        ping: "bg-warning",
      },

      "warning-accent": {
        notification: "bg-warning-muted text-warning-accent-foreground",
        ping: "bg-warning",
      },

      "warning-muted": {
        notification: "bg-warning-muted text-warning-muted-foreground",
        ping: "bg-warning",
      },

      "warning-surface": {
        notification:
          "bg-warning-faded text-warning-accent-foreground inset-ring inset-ring-warning-faded-border",
        ping: "bg-warning",
      },

      "warning-faded": {
        notification:
          "bg-warning-faded text-warning-muted-foreground inset-ring inset-ring-warning-faded-border",
        ping: "bg-warning",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type NotificationProps = React.ComponentProps<"span"> &
  VariantProps<typeof notificationVariants> & {
    classNames?: {
      container?: string;
      ping?: string;
      backdrop?: string;
      notification?: string;
    };
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    ping?: boolean;
    outlined?: boolean;
  };

// TODO: Use role="status" when used to reflect dynamic indicator (i.e., user's audio input device is online or offline)
function Notification({
  className,
  classNames,
  variant = "primary",
  position,
  ping,
  outlined,
  children,
  ...props
}: NotificationProps) {
  const {
    container,
    ping: pingVariants,
    backdrop,
    notification,
  } = notificationVariants({
    variant,
  });

  return (
    <span
      data-slot="notification-container"
      data-position={position}
      className={cn(
        container(),
        children
          ? "h-(--notification-size) min-w-(--notification-size)"
          : "size-(--notification-size-empty)",
        outlined && "outline-2 outline-background",
        classNames?.container
      )}
    >
      {ping && (
        <span
          data-slot="notification-ping"
          aria-hidden="true"
          className={cn(
            pingVariants(),
            children ? "animate-ping-sm" : "animate-ping",
            classNames?.ping
          )}
        />
      )}

      <span
        data-slot="notification-backdrop"
        aria-hidden="true"
        className={cn(backdrop(), classNames?.backdrop)}
      />
      <span
        data-slot="notification"
        className={cn(notification(), classNames?.notification, className)}
        {...props}
      >
        {children}
      </span>
    </span>
  );
}

export { Notification, notificationVariants };
