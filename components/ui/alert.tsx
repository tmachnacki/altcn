import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative flex w-full items-start gap-3 rounded-lg px-3.5 py-3 text-sm has-[[data-slot='alert-action'][data-position='bottom']]:flex-col has-[[data-slot='alert-icon']]:pl-14 has-[>svg]:[&_[data-slot='alert-content']]:pl-7 [&>svg]:absolute [&>svg]:top-3.5 [&>svg]:left-3.5 [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        outline: "border bg-background text-foreground",
        accent: "bg-accent text-accent-foreground",
        destructive:
          "bg-destructive-50 text-destructive-muted-foreground dark:bg-destructive-950/50 [&>[data-slot='alert-icon']]:border-destructive-200/20 [&>[data-slot='alert-icon']]:bg-destructive-muted [&>[data-slot='alert-icon']]:text-destructive-500 dark:[&>[data-slot='alert-icon']]:border-destructive-900/20 [&>[data-slot='alert-icon'][data-filled='true']]:text-destructive-muted [&>[data-slot='alert-icon'][data-filled='true']]:[&>svg]:fill-destructive-500",
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
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertIcon({
  className,
  filled,
  ...props
}: React.ComponentProps<"div"> & { filled?: boolean }) {
  return (
    <div
      data-slot="alert-icon"
      data-filled={filled}
      className={cn(
        "absolute top-2 left-3.5 inline-flex size-7 flex-none shrink-0 items-center justify-center rounded-full border shadow-xs [&_svg]:shrink-0 [&>svg]:size-4 [&>svg]:text-current data-[filled=true]:[&>svg]:size-5",
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
      className={cn(
        "flex flex-1 flex-col items-start justify-center gap-y-0.5",
        className,
      )}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("min-h-4 font-medium tracking-tight", className)}
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

function AlertAction({
  className,
  position = "right",
  ...props
}: React.ComponentProps<"div"> & { position?: "right" | "bottom" }) {
  return (
    <div
      data-slot="alert-action"
      data-position={position}
      className={cn(
        "flex flex-none gap-x-2 data-[position=bottom]:mt-3 data-[position=bottom]:items-center data-[position=right]:items-start",
        className,
      )}
      {...props}
    />
  );
}

export {
  Alert,
  AlertIcon,
  AlertContent,
  AlertTitle,
  AlertDescription,
  AlertAction,
};
