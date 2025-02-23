import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "group/alert relative flex w-full items-start gap-x-3 rounded-lg px-4 py-3 text-sm data-[centered]:items-center [&>svg]:size-4 [&>svg]:flex-none [&>svg]:text-current not-data-[centered]:[&>svg]:translate-y-0.5",
  {
    variants: {
      variant: {
        accent: "bg-accent text-accent-foreground",
        outline: "border border-border bg-background text-foreground",
        muted: "bg-muted text-accent-foreground",
        faded: "bg-faded text-accent-foreground",
        "primary-muted":
          "bg-primary-muted text-primary-800 dark:text-primary-200",
        "primary-faded":
          "bg-primary-faded text-primary-800 dark:text-primary-200",
        "secondary-muted":
          "bg-secondary-muted text-secondary-800 dark:text-secondary-200",
        "secondary-faded":
          "bg-secondary-faded text-secondary-800 dark:text-secondary-200",
        "destructive-muted":
          "bg-destructive-muted text-destructive-600 dark:text-destructive-200",
        "destructive-faded":
          "bg-destructive-faded text-destructive-700 dark:text-destructive-200",
        "success-muted":
          "bg-success-muted text-success-800 dark:text-success-200",
        "success-faded":
          "bg-success-faded text-success-800 dark:text-success-200",
        "warning-muted":
          "bg-warning-muted text-warning-800 dark:text-warning-200",
        "warning-faded":
          "bg-warning-faded text-warning-800 dark:text-warning-200",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

function Alert({
  className,
  variant,
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
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

const alertIconVariants = [
  // accent
  "group-data-[variant=accent]/alert:border-border group-data-[variant=accent]/alert:data-[filled=true]:[&>svg]:fill-accent-foreground group-data-[variant=accent]/alert:data-[filled=true]:[&>svg]:stroke-accent",
  // outline
  "",
  // muted
  "",
  // faded
  "",
  // primary muted
  "",
  // primary faded
  "",
  // secondary muted
  "",
  // secondary faded
  "",
  // destructive muted
  "group-data-[variant=destructive-muted]/alert:[&>svg]:fill-destructive-500 group-data-[variant=destructive-muted]/alert:[&>svg]:text-destructive-muted",
  // destructive faded
  "",
  // success muted
  "",
  // success faded
  "",
  // warning muted
  "",
  // warning faded
  "",
];

function AlertIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <span
      data-slot="alert-icon"
      className={cn(
        "inline-flex size-4 flex-none translate-y-0.5 items-center justify-center rounded-full bg-transparent group-data-[centered]/alert:translate-y-0 [&_svg]:shrink-0 [&>svg]:size-[18px]",
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
      className={cn("flex flex-1 flex-col", className)}
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
  // primary muted
  "group-data-[variant=primary-muted]/alert:text-primary-300 group-data-[variant=primary-muted]/alert:dark:text-primary-700",
  // primary faded
  "group-data-[variant=primary-faded]/alert:text-primary-300 group-data-[variant=primary-faded]/alert:dark:text-primary-700",
  // secondary muted
  "group-data-[variant=secondary-muted]/alert:text-secondary-300 group-data-[variant=secondary-muted]/alert:dark:text-secondary-700",
  // secondary faded
  "group-data-[variant=secondary-faded]/alert:text-secondary-300 group-data-[variant=secondary-faded]/alert:dark:text-secondary-700",
  // destructive muted
  "group-data-[variant=destructive-muted]/alert:text-destructive-400 dark:group-data-[variant=destructive-muted]/alert:text-destructive-300",
  // destructive faded
  "group-data-[variant=destructive-faded]/alert:text-destructive-400 group-data-[variant=destructive-faded]/alert:dark:text-destructive-300",
  // success muted
  "group-data-[variant=success-muted]/alert:text-success-300 group-data-[variant=success-muted]/alert:dark:text-success-700",
  // success faded
  "group-data-[variant=success-faded]/alert:text-success-300 group-data-[variant=success-faded]/alert:dark:text-success-700",
  // warning muted
  "group-data-[variant=warning-muted]/alert:text-warning-300 group-data-[variant=warning-muted]/alert:dark:text-warning-700",
  // warning faded
  "group-data-[variant=warning-faded]/alert:text-warning-300 group-data-[variant=warning-faded]/alert:dark:text-warning-700",
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
