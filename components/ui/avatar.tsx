"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { UserRoundIcon } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center rounded-full [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // -- base --
        default: "bg-muted text-accent-foreground",

        outline: "border border-border bg-background text-foreground",

        base: "bg-base-bg text-base-foreground",

        accent: "bg-accent text-accent-foreground",

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
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function AvatarFallback({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback> &
  VariantProps<typeof avatarFallbackVariants>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      data-variant={variant}
      className={cn(avatarFallbackVariants({ variant }), className)}
      {...props}
    >
      {children ? children : <UserRoundIcon className="text-current" />}
    </AvatarPrimitive.Fallback>
  );
}

export { Avatar, AvatarImage, AvatarFallback };
