import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const notificationVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-1 rounded-full p-1 text-xs leading-0 font-normal whitespace-nowrap tabular-nums",
    "[&_svg:not([class*='size-'])]:size-3 [&>svg]:pointer-events-none",
    "relative [--offset:42%] data-[position]:absolute data-[position]:isolate data-[position]:z-[1] [[data-position*='bottom']]:bottom-0 [[data-position*='bottom']]:translate-y-(--offset) [[data-position*='left']]:left-0 [[data-position*='left']]:-translate-x-(--offset) [[data-position*='right']]:right-0 [[data-position*='right']]:translate-x-(--offset) [[data-position*='top']]:top-0 [[data-position*='top']]:-translate-y-(--offset)",
  ],
  {
    variants: {
      variant: {
        // -- base --
        outline:
          "bg-background text-foreground inset-ring inset-ring-border [--animated-bg:var(--color-muted-foreground)]",

        base: "bg-base-bg text-base-foreground [--animated-bg:var(--color-muted-foreground)]",

        accent:
          "bg-accent text-accent-foreground backdrop-blur-lg [--animated-bg:var(--color-muted-foreground)]",

        muted:
          "bg-muted text-muted-foreground [--animated-bg:var(--color-muted-foreground)]",

        surface:
          "bg-faded-solid text-accent-foreground inset-ring inset-ring-border-faded [--animated-bg:var(--color-muted-foreground)]",

        faded:
          "bg-faded-solid text-muted-foreground inset-ring inset-ring-border-faded [--animated-bg:var(--color-muted-foreground)]",

        // -- primary --
        primary:
          "bg-primary text-primary-foreground [--animated-bg:var(--color-primary)]",

        "primary-accent":
          "bg-primary-muted text-primary-accent-foreground [--animated-bg:var(--color-primary)]",

        "primary-muted":
          "bg-primary-muted text-primary-muted-foreground [--animated-bg:var(--color-primary)]",

        "primary-surface":
          "bg-primary-faded-solid text-primary-accent-foreground inset-ring inset-ring-border-primary-faded [--animated-bg:var(--color-primary)]",

        "primary-faded":
          "bg-primary-faded-solid text-primary-muted-foreground inset-ring inset-ring-border-primary-faded [--animated-bg:var(--color-primary)]",

        // -- secondary --
        secondary:
          "bg-secondary text-secondary-foreground [--animated-bg:var(--color-secondary)]",

        "secondary-accent":
          "bg-secondary-muted text-secondary-accent-foreground [--animated-bg:var(--color-secondary)]",

        "secondary-muted":
          "bg-secondary-muted text-secondary-muted-foreground [--animated-bg:var(--color-secondary)]",

        "secondary-surface":
          "bg-secondary-faded-solid text-secondary-accent-foreground inset-ring inset-ring-border-secondary-faded [--animated-bg:var(--color-secondary)]",

        "secondary-faded":
          "bg-secondary-faded-solid text-secondary-muted-foreground inset-ring inset-ring-border-secondary-faded [--animated-bg:var(--color-secondary)]",

        // -- destructive --
        destructive:
          "bg-destructive text-destructive-foreground [--animated-bg:var(--color-destructive)]",

        "destructive-accent":
          "bg-destructive-muted text-destructive-accent-foreground [--animated-bg:var(--color-destructive)]",

        "destructive-muted":
          "bg-destructive-muted text-destructive-muted-foreground [--animated-bg:var(--color-destructive)]",

        "destructive-surface":
          "bg-destructive-faded-solid text-destructive-accent-foreground inset-ring inset-ring-border-destructive-faded [--animated-bg:var(--color-destructive)]",

        "destructive-faded":
          "bg-destructive-faded-solid text-destructive-muted-foreground inset-ring inset-ring-border-destructive-faded [--animated-bg:var(--color-destructive)]",

        // -- success --
        success:
          "bg-success text-success-foreground [--animated-bg:var(--color-success)]",

        "success-accent":
          "bg-success-muted text-success-accent-foreground [--animated-bg:var(--color-success)]",

        "success-muted":
          "bg-success-muted text-success-muted-foreground [--animated-bg:var(--color-success)]",

        "success-surface":
          "bg-success-faded-solid text-success-accent-foreground inset-ring inset-ring-border-success-faded [--animated-bg:var(--color-success)]",

        "success-faded":
          "bg-success-faded-solid text-success-muted-foreground inset-ring inset-ring-border-success-faded [--animated-bg:var(--color-success)]",

        // -- warning --
        warning:
          "bg-warning text-warning-foreground [--animated-bg:var(--color-warning)]",

        "warning-accent":
          "bg-warning-muted text-warning-accent-foreground [--animated-bg:var(--color-warning)]",

        "warning-muted":
          "bg-warning-muted text-warning-muted-foreground [--animated-bg:var(--color-warning)]",

        "warning-surface":
          "bg-warning-faded-solid text-warning-accent-foreground inset-ring inset-ring-border-warning-faded [--animated-bg:var(--color-warning)]",

        "warning-faded":
          "bg-warning-faded-solid text-warning-muted-foreground inset-ring inset-ring-border-warning-faded [--animated-bg:var(--color-warning)]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type NotificationProps = React.ComponentProps<"span"> &
  VariantProps<typeof notificationVariants> & {
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    animated?: boolean;
    outlined?: boolean;
  };

function Notification({
  className,
  variant = "primary",
  position,
  animated,
  outlined,
  children,
  ...props
}: NotificationProps) {
  return (
    <span
      data-slot="notification"
      data-position={position}
      className={cn(
        notificationVariants({ variant }),
        children ? "h-5 min-w-5" : "size-2.5",
        outlined && "outline-2 outline-background",
        className,
      )}
      {...props}
    >
      {animated && (
        // <span
        //   data-slot="notification-ping"
        //   aria-hidden="true"
        //   className="absolute inset-0 size-full animate-ping rounded-full bg-(--animated-bg) opacity-75"
        // />
        <></>
      )}
      {children}
    </span>
  );
}

export { Notification };
