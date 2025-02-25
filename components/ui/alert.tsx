import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "group/alert relative flex w-full items-start gap-x-3 overflow-hidden rounded-lg px-4 py-3 text-sm data-[centered]:items-center [&>svg]:size-4 [&>svg]:flex-none [&>svg]:text-current not-data-[centered]:[&>svg]:translate-y-0.5",
  {
    variants: {
      variant: {
        accent:
          "bg-accent text-accent-foreground data-[inset-color]:before:bg-muted-foreground",
        outline:
          "border border-border bg-background text-foreground data-[inset-color]:before:bg-muted-foreground",
        muted:
          "bg-muted text-accent-foreground data-[inset-color]:before:bg-muted-foreground",
        faded:
          "border border-border-faded bg-faded text-accent-foreground data-[inset-color]:before:bg-muted-foreground",

        primary:
          "bg-primary text-primary-foreground data-[inset-color]:before:bg-primary-200",
        "primary-muted":
          "bg-primary-muted text-primary-muted-foreground data-[inset-color]:before:bg-primary-500",
        "primary-faded":
          "border border-border-primary-faded bg-primary-faded text-primary-700 dark:text-primary-200 data-[inset-color]:before:bg-primary-500",

        "secondary-muted":
          "bg-secondary-muted text-secondary-muted-foreground data-[inset-color]:before:bg-secondary-500",
        "secondary-faded":
          "bg-secondary-faded text-secondary-muted-foreground data-[inset-color]:before:bg-secondary-500",

        "destructive-muted":
          "bg-destructive-muted text-destructive-muted-foreground data-[inset-color]:before:bg-destructive-500",
        "destructive-faded":
          "bg-destructive-faded text-destructive-muted-foreground data-[inset-color]:before:bg-destructive-500",

        "success-muted":
          "bg-success-muted text-success-muted-foreground data-[inset-color]:before:bg-success-500",
        "success-faded":
          "bg-success-faded text-success-muted-foreground data-[inset-color]:before:bg-success-500",

        "warning-muted":
          "bg-warning-muted text-warning-muted-foreground data-[inset-color]:before:bg-warning-500",
        "warning-faded":
          "bg-warning-faded text-warning-muted-foreground data-[inset-color]:before:bg-warning-500",
      },
      insetColor: {
        false: null,
        true: "before:absolute before:top-0 before:left-0 before:inline-block before:h-full before:w-1.5 before:content-['']",
      },
    },
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
      className={cn(alertVariants({ variant, insetColor }), className)}
      {...props}
    />
  );
}

const alertIconVariants = [
  // accent
  "group-data-[variant=accent]/alert:[&>svg]:fill-muted-foreground group-data-[variant=accent]/alert:[&>svg]:text-accent",
  // outline
  "group-data-[variant=outline]/alert:[&>svg]:fill-muted-foreground group-data-[variant=outline]/alert:[&>svg]:text-background",
  // muted
  "group-data-[variant=muted]/alert:[&>svg]:fill-muted-foreground group-data-[variant=muted]/alert:[&>svg]:text-muted",
  // faded
  "group-data-[variant=faded]/alert:bg-accent group-data-[variant=faded]/alert:inset-ring-border-faded group-data-[variant=faded]/alert:[&>svg]:fill-muted-foreground group-data-[variant=faded]/alert:[&>svg]:text-accent",

  // primary
  "group-data-[variant=primary]/alert:[&>svg]:fill-primary-200 group-data-[variant=primary]/alert:[&>svg]:text-primary",
  // primary muted
  "group-data-[variant=primary-muted]/alert:[&>svg]:fill-primary-300 group-data-[variant=primary-muted]/alert:[&>svg]:text-primary-muted",
  // primary faded
  "group-data-[variant=primary-faded]/alert:bg-primary-muted group-data-[variant=primary-faded]/alert:inset-ring-border-primary-faded group-data-[variant=primary-faded]/alert:[&>svg]:fill-primary-500 group-data-[variant=primary-faded]/alert:[&>svg]:text-primary-muted dark:group-data-[variant=primary-faded]/alert:[&>svg]:fill-primary-400",

  // secondary muted
  "group-data-[variant=secondary-muted]/alert:[&>svg]:fill-secondary-500 group-data-[variant=secondary-muted]/alert:[&>svg]:text-secondary-muted",
  // secondary faded
  "group-data-[variant=secondary-faded]/alert:[&>svg]:fill-secondary-500 group-data-[variant=secondary-faded]/alert:[&>svg]:text-secondary-muted",

  // destructive muted
  "group-data-[variant=destructive-muted]/alert:[&>svg]:fill-destructive-500 group-data-[variant=destructive-muted]/alert:[&>svg]:text-destructive-muted",
  // destructive faded
  "group-data-[variant=destructive-faded]/alert:[&>svg]:fill-destructive-500 group-data-[variant=destructive-faded]/alert:[&>svg]:text-destructive-faded",

  // success muted
  "group-data-[variant=success-muted]/alert:[&>svg]:fill-success-500 group-data-[variant=success-muted]/alert:[&>svg]:text-success-muted",
  // success faded
  "group-data-[variant=success-faded]/alert:[&>svg]:fill-success-500 group-data-[variant=success-faded]/alert:[&>svg]:text-success-faded",

  // warning muted
  "group-data-[variant=warning-muted]/alert:[&>svg]:fill-warning-500 group-data-[variant=warning-muted]/alert:[&>svg]:text-warning-muted",
  // warning faded
  "group-data-[variant=warning-faded]/alert:[&>svg]:fill-warning-500 group-data-[variant=warning-faded]/alert:[&>svg]:text-warning-faded",
];

function AlertIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <span
      data-slot="alert-icon"
      className={cn(
        "inline-flex size-7 flex-none translate-y-0.5 items-center justify-center rounded-full inset-ring shadow-xs group-data-[centered]/alert:translate-y-0 [&_svg]:shrink-0 [&>svg]:size-5",
        alertIconVariants,
        className,
      )}
      {...props}
    />
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
  // use to render as heading element
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

const alertDescriptionVariants = [
  // accent
  "group-data-[variant=accent]/alert:text-muted-foreground",
  // outline
  "group-data-[variant=outline]/alert:text-muted-foreground",
  // muted
  "group-data-[variant=muted]/alert:text-muted-foreground",
  // faded
  "group-data-[variant=faded]/alert:text-muted-foreground",

  // primary
  "group-data-[variant=primary]/alert:text-primary-200",
  // primary muted
  "group-data-[variant=primary-muted]/alert:text-primary-muted-content",
  // primary faded
  "group-data-[variant=primary-faded]/alert:text-primary-muted-foreground",

  // secondary muted
  "group-data-[variant=secondary-muted]/alert:text-secondary-muted-content",
  // secondary faded
  "group-data-[variant=secondary-faded]/alert:text-secondary-muted-content",
  // destructive muted
  "group-data-[variant=destructive-muted]/alert:text-destructive-muted-content",
  // destructive faded
  "group-data-[variant=destructive-faded]/alert:text-destructive-muted-content",
  // success muted
  "group-data-[variant=success-muted]/alert:text-success-muted-content",
  // success faded
  "group-data-[variant=success-faded]/alert:text-success-muted-content",
  // warning muted
  "group-data-[variant=warning-muted]/alert:text-warning-muted-content",
  // warning faded
  "group-data-[variant=warning-faded]/alert:text-warning-muted-content",
];

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed",
        alertDescriptionVariants,
        className,
      )}
      {...props}
    />
  );
}

function AlertFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("mt-6 flex items-center gap-2", className)}
      {...props}
    />
  );
}

// TODO: Add AlertClose

export {
  Alert,
  AlertIcon,
  AlertContent,
  AlertTitle,
  AlertDescription,
  AlertFooter,
};
