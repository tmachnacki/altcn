"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

import { Button, buttonVariants } from "~/components/ui/button";

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-overlay backdrop-blur-overlay",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogContent({
  variant = "solid",
  className,
  classNames,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content> & {
  variant?: "solid" | "translucent";
  classNames?: {
    root?: string;
    overlay?: string;
  };
}) {
  return (
    <AlertDialogPortal>
      {variant === "solid" && (
        <AlertDialogOverlay className={classNames?.overlay} />
      )}
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "[--alert-dialog-gap:--spacing(6)] [--alert-dialog-p:--spacing(6)]",
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-(--alert-dialog-gap) rounded-lg border p-(--alert-dialog-p) text-foreground shadow-lg sm:max-w-lg",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[97.5%] data-[state=open]:animate-in data-[state=open]:duration-300 data-[state=open]:ease-out data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-2",
          variant === "solid"
            ? "bg-background"
            : "bg-card-translucent backdrop-blur-card-translucent",
          classNames?.root,
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-3 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function AlertDialogBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-body"
      className={cn("text-base text-foreground sm:text-sm", className)}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        "text-lg leading-none font-semibold text-balance text-foreground sm:text-base",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(
        "text-base text-pretty text-muted-foreground sm:text-sm",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogAction({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action> &
  VariantProps<typeof buttonVariants>) {
  return (
    <AlertDialogPrimitive.Action asChild {...props}>
      <Button variant={variant} size={size} className={className}>
        {children}
      </Button>
    </AlertDialogPrimitive.Action>
  );
}

function AlertDialogCancel({
  className,
  variant = "outline",
  size = "md",
  children,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel> &
  VariantProps<typeof buttonVariants>) {
  return (
    <AlertDialogPrimitive.Cancel asChild {...props}>
      <Button variant={variant} size={size} className={className}>
        {children}
      </Button>
    </AlertDialogPrimitive.Cancel>
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
