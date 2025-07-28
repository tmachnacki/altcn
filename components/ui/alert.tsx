import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";
import { XIcon } from "lucide-react";

import { cn } from "~/lib/utils";

import { Button } from "~/components/ui/button";
import { Tron } from "~/components/ui/tron";

const alertVariants = tv({
  base: [
    "[--alert-close-offset:--spacing(2.5)] [--alert-p:--spacing(4)] [--alert-title-h:--spacing(6)] sm:[--alert-title-h:--spacing(5)]",
    "group/alert",
    "relative isolate flex w-full items-start gap-x-3 rounded-lg p-(--alert-p) text-(--alert-accent-text)",

    "has-[[data-slot='alert-close']]:pr-[calc(var(--size-md)+var(--alert-close-offset)+(var(--spacing)*3))] sm:has-[[data-slot='alert-close']]:pr-[calc(var(--size-sm)+var(--alert-close-offset)+(var(--spacing)*3))]",

    "data-[align=center]:items-center data-[align=center]:has-[[data-slot='alert-close']]:pr-[calc(var(--size-md)+var(--alert-p)+(var(--spacing)*2))] sm:data-[align=center]:has-[[data-slot='alert-close']]:pr-[calc(var(--size-sm)+var(--alert-p)+(var(--spacing)*2))]",

    "*:[svg]:pointer-events-none *:[svg]:h-(--alert-title-h) *:[svg]:w-(--icon-lg) *:[svg]:flex-none *:[svg]:text-(--alert-accent-text) sm:*:[svg]:w-(--icon-md)",
  ],
  variants: {
    variant: {
      // -- base --
      outline: [
        "border border-border bg-background shadow-xs",
        "[--alert-icon-bg:var(--color-muted)]",
        "[--alert-icon-text:var(--color-muted-foreground)]",
        "[--hover-alert-close-bg:var(--color-muted)]",
        "[--alert-close-outline:var(--color-outline)]",
      ],

      muted: [
        "bg-muted",
        "[--alert-icon-bg:var(--color-base-50)] dark:[--alert-icon-bg:var(--color-muted)]",
        "[--alert-icon-text:var(--color-base-500)] dark:[--alert-icon-text:var(--color-base-300)]",
        "[--hover-alert-close-bg:var(--color-hover-muted)]",
        "[--alert-close-outline:var(--color-outline)]",
      ],

      faded: [
        "border border-faded-border bg-faded",
        "[--alert-icon-bg:var(--color-muted)]",
        "[--alert-icon-text:var(--color-muted-foreground)]",
        "[--hover-alert-close-bg:var(--color-muted)]",
        "[--alert-close-outline:var(--color-outline)]",
      ],

      // -- primary --
      "primary-muted": [
        "bg-primary-muted",
        "[--alert-icon-bg:var(--color-primary-50)] dark:[--alert-icon-bg:var(--color-primary-muted)]",
        "[--alert-icon-text:var(--color-primary-500)] dark:[--alert-icon-text:var(--color-primary-200)]",
        "[--hover-alert-close-bg:var(--color-hover-primary-muted)]",
        "[--alert-close-outline:var(--color-primary)]",
      ],

      "primary-faded": [
        "border border-primary-faded-border bg-primary-faded",
        "[--alert-icon-bg:var(--color-primary-muted)]",
        "[--alert-icon-text:var(--color-primary-muted-foreground)]",
        "[--hover-alert-close-bg:var(--color-primary-muted)]",
        "[--alert-close-outline:var(--color-primary)]",
      ],

      "primary-tron": [
        "bg-background bg-linear-(--primary-tron-gradient) shadow-xs inset-ring inset-ring-(--primary-tron-border)",
        "[--tron-beam:var(--color-primary)] [--tron-blur:var(--color-primary-tron-blur)]",
        "[--alert-icon-bg:var(--color-primary-muted)]",
        "[--alert-icon-text:var(--color-primary-muted-foreground)]",
        "[--hover-alert-close-bg:var(--color-hover-primary-muted)]",
        "[--alert-close-outline:var(--color-primary)]",
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
        "[--hover-alert-close-bg:var(--color-hover-secondary-muted)]",
        "[--alert-close-outline:var(--color-secondary)]",
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
        "[--hover-alert-close-bg:var(--color-hover-destructive-muted)]",
        "[--alert-close-outline:var(--color-destructive)]",
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
        "[--hover-alert-close-bg:var(--color-hover-success-muted)]",
        "[--alert-close-outline:var(--color-success)]",
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
        "[--hover-alert-close-bg:var(--color-hover-warning-muted)]",
        "[--alert-close-outline:var(--color-warning)]",
      ],
    },
  },
  compoundVariants: [
    {
      variant: ["outline", "muted", "faded"],
      className: [
        "[--alert-accent-text:var(--color-accent-foreground)]",
        "[--alert-inset-color-bg:var(--color-base-bg)]",
        "[--alert-muted-text:var(--color-muted-foreground)]",
        "[--alert-icon-border:var(--color-faded-border)]",
      ],
    },
    {
      variant: ["primary-muted", "primary-faded", "primary-tron"],
      className: [
        "[--alert-accent-text:var(--color-primary-accent-foreground)]",
        "[--alert-inset-color-bg:var(--color-primary)]",
        "[--alert-muted-text:var(--color-primary-muted-foreground)]",
        "[--alert-icon-border:var(--color-primary-faded-border)]",
      ],
    },
    {
      variant: ["secondary-muted", "secondary-faded", "secondary-tron"],
      className: [
        "[--alert-accent-text:var(--color-secondary-accent-foreground)]",
        "[--alert-inset-color-bg:var(--color-secondary)]",
        "[--alert-muted-text:var(--color-secondary-muted-foreground)]",
        "[--alert-icon-border:var(--color-secondary-faded-border)]",
      ],
    },
    {
      variant: ["destructive-muted", "destructive-faded", "destructive-tron"],
      className: [
        "[--alert-accent-text:var(--color-destructive-accent-foreground)]",
        "[--alert-inset-color-bg:var(--color-destructive)]",
        "[--alert-muted-text:var(--color-destructive-muted-foreground)]",
        "[--alert-icon-border:var(--color-destructive-faded-border)]",
      ],
    },
    {
      variant: ["success-muted", "success-faded", "success-tron"],
      className: [
        "[--alert-accent-text:var(--color-success-accent-foreground)]",
        "[--alert-inset-color-bg:var(--color-success)]",
        "[--alert-muted-text:var(--color-success-muted-foreground)]",
        "[--alert-icon-border:var(--color-success-faded-border)]",
      ],
    },
    {
      variant: ["warning-muted", "warning-faded", "warning-tron"],
      className: [
        "[--alert-accent-text:var(--color-warning-accent-foreground)]",
        "[--alert-inset-color-bg:var(--color-warning)]",
        "[--alert-muted-text:var(--color-warning-muted-foreground)]",
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
          : "**:[svg]:text-(--alert-accent-text) **:[svg]:not-[[class*='size-']]:size-(--icon-lg) sm:**:[svg]:not-[[class*='size-']]:size-(--icon-md)",
        className
      )}
      {...props}
    >
      {/* Feel free to replace filled icons; these are from tabler */}
      {type
        ? {
            info: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
              </svg>
            ),

            error: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
              </svg>
            ),

            success: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
              </svg>
            ),

            warning: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
              </svg>
            ),
          }[type]
        : children}
    </span>
  );
}

function AlertContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-content"
      className={cn("flex flex-1 flex-col gap-1", className)}
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
        "line-clamp-1 text-base/(--alert-title-h) font-medium tracking-tight text-(--alert-accent-text) sm:text-sm/(--alert-title-h)",
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
        "grid justify-items-start gap-1 text-sm text-(--alert-muted-text) **:[p]:leading-relaxed",
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

function AlertClose({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="alert-close"
      type="button"
      aria-label={"Dismiss"}
      variant="ghost"
      size="icon-sm"
      className={cn(
        "absolute top-(--alert-close-offset) right-(--alert-close-offset) text-(--alert-muted-text) opacity-70 outline-(--alert-close-outline) group-data-[align=center]/alert:top-1/2 group-data-[align=center]/alert:right-(--alert-p) group-data-[align=center]/alert:-translate-y-1/2 hover:bg-(--hover-alert-close-bg) hover:text-(--alert-muted-text) hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2",
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
