import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";
import { XIcon } from "lucide-react";

import { cn } from "~/lib/utils";

import { Button } from "~/components/ui/button";
import { Tron } from "~/components/ui/tron";
import { ErrorFilledIcon } from "~/components/icons/error-filled";
import { InfoFilledIcon } from "~/components/icons/info-filled";
import { SuccessFilledIcon } from "~/components/icons/success-filled";
import { WarningFilledIcon } from "~/components/icons/warning-filled";

const alertVariants = tv({
  base: [
    "[--alert-p:--spacing(4)] [--alert-title-height:--spacing(6)] has-[[data-slot='alert-close']]:[--alert-close-offset:--spacing(2.5)] sm:[--alert-title-height:--spacing(5)]",
    "group/alert",
    "relative isolate flex w-full items-start gap-x-3 rounded-lg p-(--alert-p)",
    "has-[[data-slot='alert-close']]:pr-[calc(var(--size-md)+var(--alert-close-offset)+(var(--spacing)*3))] sm:has-[[data-slot='alert-close']]:pr-[calc(var(--size-sm)+var(--alert-close-offset)+(var(--spacing)*3))]",
    "data-[align=center]:items-center data-[align=center]:has-[[data-slot='alert-close']]:pr-[calc(var(--size-md)+var(--alert-p)+(var(--spacing)*2))] sm:data-[align=center]:has-[[data-slot='alert-close']]:pr-[calc(var(--size-sm)+var(--alert-p)+(var(--spacing)*2))]",
    "*:[svg]:pointer-events-none *:[svg]:h-(--alert-title-height) *:[svg]:w-(--icon-lg) *:[svg]:flex-none *:[svg]:text-current sm:*:[svg]:w-(--icon-md)",
  ],
  variants: {
    variant: {
      // -- base --
      outline: [
        "border border-border bg-background shadow-xs",
        "[--alert-icon-bg:var(--color-muted)]",
        "[--alert-icon-text:var(--color-muted-foreground)]",
        "has-[[data-slot='alert-close']]:[--hover-alert-close-bg:var(--color-muted)]",
        "has-[[data-slot='alert-close']]:[--alert-close-outline:var(--color-outline)]",
      ],

      muted: [
        "bg-muted",
        "[--alert-icon-bg:var(--color-base-50)] dark:[--alert-icon-bg:var(--color-muted)]",
        "[--alert-icon-text:var(--color-base-500)] dark:[--alert-icon-text:var(--color-base-300)]",
        "has-[[data-slot='alert-close']]:[--hover-alert-close-bg:var(--color-hover-muted)]",
        "has-[[data-slot='alert-close']]:[--alert-close-outline:var(--color-outline)]",
      ],

      faded: [
        "border border-faded-border bg-faded",
        "[--alert-icon-bg:var(--color-muted)]",
        "[--alert-icon-text:var(--color-muted-foreground)]",
        "has-[[data-slot='alert-close']]:[--hover-alert-close-bg:var(--color-muted)]",
        "has-[[data-slot='alert-close']]:[--alert-close-outline:var(--color-outline)]",
      ],

      // -- primary --
      "primary-muted": [
        "bg-primary-muted",
        "[--alert-icon-bg:var(--color-primary-50)] dark:[--alert-icon-bg:var(--color-primary-muted)]",
        "[--alert-icon-text:var(--color-primary-500)] dark:[--alert-icon-text:var(--color-primary-200)]",
        "has-[[data-slot='alert-close']]:[--hover-alert-close-bg:var(--color-hover-primary-muted)]",
        "has-[[data-slot='alert-close']]:[--alert-close-outline:var(--color-primary)]",
      ],

      "primary-faded": [
        "border border-primary-faded-border bg-primary-faded",
        "[--alert-icon-bg:var(--color-primary-muted)]",
        "[--alert-icon-text:var(--color-primary-muted-foreground)]",
        "has-[[data-slot='alert-close']]:[--hover-alert-close-bg:var(--color-primary-muted)]",
        "has-[[data-slot='alert-close']]:[--alert-close-outline:var(--color-primary)]",
      ],

      "primary-tron": [
        "bg-background bg-linear-(--primary-tron-gradient) shadow-xs inset-ring inset-ring-(--primary-tron-border)",
        "[--tron-beam:var(--color-primary)] [--tron-blur:var(--color-primary-tron-blur)]",
        "[--alert-icon-bg:var(--color-primary-muted)]",
        "[--alert-icon-text:var(--color-primary-muted-foreground)]",
        "has-[[data-slot='alert-close']]:[--hover-alert-close-bg:var(--color-hover-primary-muted)]",
        "has-[[data-slot='alert-close']]:[--alert-close-outline:var(--color-primary)]",
      ],

      // -- secondary --
      "secondary-muted": [
        "bg-secondary-muted",
        "[--alert-icon-bg:var(--color-secondary-50)] dark:[--alert-icon-bg:var(--color-secondary-muted)]",
        "[--alert-icon-text:var(--color-secondary-500)] dark:[--alert-icon-text:var(--color-secondary-200)]",
        "[--hover-alert-close-bg:var(--color-hover-secondary-muted)]",
        "[--alert-close-outline:var(--color-secondary)]",
      ],

      "secondary-faded": [
        "border border-secondary-faded-border bg-secondary-faded",
        "[--alert-icon-bg:var(--color-secondary-muted)]",
        "[--alert-icon-text:var(--color-secondary-muted-foreground)]",
        "[--hover-alert-close-bg:var(--color-secondary-muted)]",
        "[--alert-close-outline:var(--color-secondary)]",
      ],

      "secondary-tron": [
        "bg-background bg-linear-(--secondary-tron-gradient) shadow-xs inset-ring inset-ring-(--secondary-tron-border)",
        "[--tron-beam:var(--color-secondary)] [--tron-blur:var(--color-secondary-tron-blur)]",
        "[--alert-icon-bg:var(--color-secondary-muted)]",
        "[--alert-icon-text:var(--color-secondary-muted-foreground)]",
        "has-[[data-slot='alert-close']]:[--hover-alert-close-bg:var(--color-hover-secondary-muted)]",
        "has-[[data-slot='alert-close']]:[--alert-close-outline:var(--color-secondary)]",
      ],

      // -- destructive --
      "destructive-muted": [
        "bg-destructive-muted",
        "[--alert-icon-bg:var(--color-destructive-50)] dark:[--alert-icon-bg:var(--color-destructive-muted)]",
        "[--alert-icon-text:var(--color-destructive-500)] dark:[--alert-icon-text:var(--color-destructive-200)]",
        "[--hover-alert-close-bg:var(--color-hover-destructive-muted)]",
        "[--alert-close-outline:var(--color-destructive)]",
      ],

      "destructive-faded": [
        "border border-destructive-faded-border bg-destructive-faded",
        "[--alert-icon-bg:var(--color-destructive-muted)]",
        "[--alert-icon-text:var(--color-destructive-muted-foreground)]",
        "[--hover-alert-close-bg:var(--color-destructive-muted)]",
        "[--alert-close-outline:var(--color-destructive)]",
      ],

      "destructive-tron": [
        "bg-background bg-linear-(--destructive-tron-gradient) shadow-xs inset-ring inset-ring-(--destructive-tron-border)",
        "[--tron-beam:var(--color-destructive)] [--tron-blur:var(--color-destructive-tron-blur)]",
        "[--alert-icon-bg:var(--color-destructive-muted)]",
        "[--alert-icon-text:var(--color-destructive-muted-foreground)]",
        "has-[[data-slot='alert-close']]:[--hover-alert-close-bg:var(--color-hover-destructive-muted)]",
        "has-[[data-slot='alert-close']]:[--alert-close-outline:var(--color-destructive)]",
      ],

      // -- success --
      "success-muted": [
        "bg-success-muted",
        "[--alert-icon-bg:var(--color-success-50)] dark:[--alert-icon-bg:var(--color-success-muted)]",
        "[--alert-icon-text:var(--color-success-500)] dark:[--alert-icon-text:var(--color-success-200)]",
        "[--hover-alert-close-bg:var(--color-hover-success-muted)]",
        "[--alert-close-outline:var(--color-success)]",
      ],

      "success-faded": [
        "border border-success-faded-border bg-success-faded",
        "[--alert-icon-bg:var(--color-success-muted)]",
        "[--alert-icon-text:var(--color-success-muted-foreground)]",
        "[--hover-alert-close-bg:var(--color-success-muted)]",
        "[--alert-close-outline:var(--color-success)]",
      ],

      "success-tron": [
        "bg-background bg-linear-(--success-tron-gradient) shadow-xs inset-ring inset-ring-(--success-tron-border)",
        "[--tron-beam:var(--color-success)] [--tron-blur:var(--color-success-tron-blur)]",
        "[--alert-icon-bg:var(--color-success-muted)]",
        "[--alert-icon-text:var(--color-success-muted-foreground)]",
        "has-[[data-slot='alert-close']]:[--hover-alert-close-bg:var(--color-hover-success-muted)]",
        "has-[[data-slot='alert-close']]:[--alert-close-outline:var(--color-success)]",
      ],

      // -- warning --
      "warning-muted": [
        "bg-warning-muted",
        "[--alert-icon-bg:var(--color-warning-50)] dark:[--alert-icon-bg:var(--color-warning-muted)]",
        "[--alert-icon-text:var(--color-warning-500)] dark:[--alert-icon-text:var(--color-warning-200)]",
        "[--hover-alert-close-bg:var(--color-hover-warning-muted)]",
        "[--alert-close-outline:var(--color-warning)]",
      ],

      "warning-faded": [
        "border border-warning-faded-border bg-warning-faded",
        "[--alert-icon-bg:var(--color-warning-muted)]",
        "[--alert-icon-text:var(--color-warning-muted-foreground)]",
        "[--hover-alert-close-bg:var(--color-warning-muted)]",
        "[--alert-close-outline:var(--color-warning)]",
      ],

      "warning-tron": [
        "bg-background bg-linear-(--warning-tron-gradient) shadow-xs inset-ring inset-ring-(--warning-tron-border)",
        "[--tron-beam:var(--color-warning)] [--tron-blur:var(--color-warning-tron-blur)]",
        "[--alert-icon-bg:var(--color-warning-muted)]",
        "[--alert-icon-text:var(--color-warning-muted-foreground)]",
        "has-[[data-slot='alert-close']]:[--hover-alert-close-bg:var(--color-hover-warning-muted)]",
        "has-[[data-slot='alert-close']]:[--alert-close-outline:var(--color-warning)]",
      ],
    },
  },
  compoundVariants: [
    {
      variant: ["outline", "muted", "faded"],
      className: [
        "text-accent-foreground",
        "[--alert-inset-color-bg:var(--color-base-bg)]",
        "[--alert-description-text:var(--color-muted-foreground)]",
        "[--alert-icon-border:var(--color-faded-border)]",
      ],
    },
    {
      variant: ["primary-muted", "primary-faded", "primary-tron"],
      className: [
        "text-primary-accent-foreground",
        "[--alert-inset-color-bg:var(--color-primary)]",
        "[--alert-description-text:var(--color-primary-muted-foreground)]",
        "[--alert-icon-border:var(--color-primary-faded-border)]",
      ],
    },
    {
      variant: ["secondary-muted", "secondary-faded", "secondary-tron"],
      className: [
        "text-secondary-accent-foreground",
        "[--alert-inset-color-bg:var(--color-secondary)]",
        "[--alert-description-text:var(--color-secondary-muted-foreground)]",
        "[--alert-icon-border:var(--color-secondary-faded-border)]",
      ],
    },
    {
      variant: ["destructive-muted", "destructive-faded", "destructive-tron"],
      className: [
        "text-destructive-accent-foreground",
        "[--alert-inset-color-bg:var(--color-destructive)]",
        "[--alert-description-text:var(--color-destructive-muted-foreground)]",
        "[--alert-icon-border:var(--color-destructive-faded-border)]",
      ],
    },
    {
      variant: ["success-muted", "success-faded", "success-tron"],
      className: [
        "text-success-accent-foreground",
        "[--alert-inset-color-bg:var(--color-success)]",
        "[--alert-description-text:var(--color-success-muted-foreground)]",
        "[--alert-icon-border:var(--color-success-faded-border)]",
      ],
    },
    {
      variant: ["warning-muted", "warning-faded", "warning-tron"],
      className: [
        "text-warning-accent-foreground",
        "[--alert-inset-color-bg:var(--color-warning)]",
        "[--alert-description-text:var(--color-warning-muted-foreground)]",
        "[--alert-icon-border:var(--color-warning-faded-border)]",
      ],
    },
  ],
  defaultVariants: {
    variant: "outline",
  },
});

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
      className={alertVariants({
        variant,
        className,
      })}
      {...props}
    >
      {variant?.includes("tron") && (
        <>
          <Tron
            side="bottom"
            type="beam"
            className="via-(--tron-beam) opacity-100"
          />
          <Tron
            side="bottom"
            type="blur"
            className="via-(--tron-blur) opacity-100"
          />
        </>
      )}
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
      className={cn(
        "inline-flex size-8 flex-none items-center justify-center rounded-full bg-(--alert-icon-bg) shadow-sm inset-ring inset-ring-(--alert-icon-border) **:[svg]:shrink-0",
        type
          ? "text-(--alert-icon-text) **:[svg]:not-[[class*='size-']]:size-5"
          : "**:[svg]:text-current **:[svg]:not-[[class*='size-']]:size-(--icon-lg) sm:**:[svg]:not-[[class*='size-']]:size-(--icon-md)",
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
      className={cn("flex flex-1 flex-col gap-0.5", className)}
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
        "line-clamp-1 text-base/(--alert-title-height) font-medium tracking-tight sm:text-sm/(--alert-title-height)",
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

function AlertAction({
  variant = "outline",
  size = "sm",
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button data-slot="alert-action" variant={variant} size={size} {...props} />
  );
}

function AlertClose({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <Button
      data-slot="alert-close"
      type="button"
      aria-label={"Dismiss"}
      variant="ghost"
      size="icon-sm"
      className={cn(
        "absolute top-(--alert-close-offset) right-(--alert-close-offset) text-(--alert-description-text) opacity-70 outline-(--alert-close-outline) group-data-[align=center]/alert:top-1/2 group-data-[align=center]/alert:right-(--alert-p) group-data-[align=center]/alert:-translate-y-1/2 hover:bg-(--hover-alert-close-bg) hover:text-(--alert-description-text) hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2",
        className
      )}
      {...props}
    >
      <XIcon />
    </Button>
  );
}

export {
  Alert,
  AlertAction,
  AlertClose,
  AlertContent,
  AlertIcon,
  AlertInsetColor,
  AlertDescription,
  AlertFooter,
  AlertTitle,
  alertVariants,
};
