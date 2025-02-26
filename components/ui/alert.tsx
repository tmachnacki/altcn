import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "group/alert relative flex w-full items-start gap-x-3 overflow-hidden rounded-lg px-4 py-3 text-sm data-[centered]:items-center [&>svg]:size-4 [&>svg]:flex-none [&>svg]:text-current not-data-[centered]:[&>svg]:translate-y-0.5",
  {
    variants: {
      variant: {
        // base
        outline: "border border-border bg-background",
        muted: "bg-muted",
        faded: "border border-border-faded bg-faded",

        // primary
        primary:
          "bg-primary text-primary-foreground data-[inset-color]:before:bg-primary-200 [&_[data-slot='alert-description']]:text-primary-200",
        "primary-muted": "bg-primary-muted",
        "primary-faded": "border border-border-primary-faded bg-primary-faded",

        // secondary
        secondary:
          "bg-secondary text-secondary-foreground data-[inset-color]:before:bg-secondary-200 [&_[data-slot='alert-description']]:text-secondary-900",
        "secondary-muted": "bg-secondary-muted",
        "secondary-faded":
          "border border-border-secondary-faded bg-secondary-faded",

        // destructive
        destructive:
          "bg-destructive text-destructive-foreground data-[inset-color]:before:bg-destructive-200 [&_[data-slot='alert-description']]:text-destructive-200",
        "destructive-muted": "bg-destructive-muted",
        "destructive-faded":
          "border border-border-destructive-faded bg-destructive-faded",

        // success
        success:
          "bg-success text-success-foreground data-[inset-color]:before:bg-success-200 [&_[data-slot='alert-description']]:text-success-50",
        "success-muted": "bg-success-muted",
        "success-faded": "border border-border-success-faded bg-success-faded",

        // warning
        warning:
          "bg-warning text-warning-foreground data-[inset-color]:before:bg-warning-200 [&_[data-slot='alert-description']]:text-warning-900",
        "warning-muted": "bg-warning-muted",
        "warning-faded": "border border-border-warning-faded bg-warning-faded",
      },
      insetColor: {
        false: null,
        true: "before:absolute before:top-0 before:left-0 before:inline-block before:h-full before:w-1.5 before:content-['']",
      },
    },
    compoundVariants: [
      {
        variant: ["outline", "muted", "faded"],
        className:
          "text-accent-foreground data-[inset-color]:before:bg-muted-foreground [&_[data-slot='alert-description']]:text-muted-foreground",
      },
      {
        variant: ["primary-muted", "primary-faded"],
        className:
          "text-primary-accent-foreground data-[inset-color]:before:bg-primary [&_[data-slot='alert-description']]:text-primary-muted-foreground",
      },
      {
        variant: ["secondary-muted", "secondary-faded"],
        className:
          "text-secondary-accent-foreground data-[inset-color]:before:bg-secondary [&_[data-slot='alert-description']]:text-secondary-muted-foreground",
      },
      {
        variant: ["destructive-muted", "destructive-faded"],
        className:
          "text-destructive-accent-foreground data-[inset-color]:before:bg-destructive [&_[data-slot='alert-description']]:text-destructive-muted-foreground",
      },
      {
        variant: ["success-muted", "success-faded"],
        className:
          "text-success-accent-foreground data-[inset-color]:before:bg-success [&_[data-slot='alert-description']]:text-success-muted-foreground",
      },
      {
        variant: ["warning-muted", "warning-faded"],
        className:
          "text-warning-accent-foreground data-[inset-color]:before:bg-warning [&_[data-slot='alert-description']]:text-warning-muted-foreground",
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

function AlertIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <span
      data-slot="alert-icon"
      className={cn(
        "inline-flex size-7 flex-none translate-y-0.5 items-center justify-center rounded-full inset-ring shadow-xs group-data-[centered]/alert:translate-y-0 [&_svg]:shrink-0 [&>svg]:size-5",
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

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
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
