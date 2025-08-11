"use client";

import * as React from "react";
import { Avatar as AvatarPrimitive } from "radix-ui";
import { tv, type VariantProps } from "tailwind-variants";
import { UserRoundIcon } from "lucide-react";

import { cn } from "~/lib/utils";

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
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

const avatarFallbackVariants = tv({
  base: "flex size-full items-center justify-center rounded-full *:[svg]:not-[[class*='size-']]:size-4",
  variants: {
    variant: {
      // -- base --
      outline: "border border-border bg-background text-foreground",

      contrast: "bg-contrast text-contrast-foreground",

      base: "bg-base-bg text-base-foreground",

      accent: "bg-muted text-accent-foreground",

      muted: "bg-muted text-muted-foreground",

      surface: "border border-faded-border bg-faded text-accent-foreground",

      faded: "border border-faded-border bg-faded text-muted-foreground",

      "base-gradient": "bg-linear-(--base-gradient) text-base-foreground",

      // -- primary --
      primary: "bg-primary text-primary-foreground",

      "primary-accent": "bg-primary-muted text-primary-accent-foreground",

      "primary-muted": "bg-primary-muted text-primary-muted-foreground",

      "primary-surface":
        "border border-primary-faded-border bg-primary-faded text-primary-accent-foreground",

      "primary-faded":
        "border border-primary-faded-border bg-primary-faded text-primary-muted-foreground",

      "primary-gradient":
        "bg-linear-(--primary-gradient) text-primary-foreground",

      // -- secondary --
      secondary: "bg-secondary text-secondary-foreground",

      "secondary-accent": "bg-secondary-muted text-secondary-accent-foreground",

      "secondary-muted": "bg-secondary-muted text-secondary-muted-foreground",

      "secondary-surface":
        "border border-secondary-faded-border bg-secondary-faded text-secondary-accent-foreground",

      "secondary-faded":
        "border border-secondary-faded-border bg-secondary-faded text-secondary-muted-foreground",

      "secondary-gradient":
        "border border-secondary-faded-border bg-linear-(--secondary-gradient) text-secondary-foreground",
    },
  },
  defaultVariants: {
    variant: "accent",
  },
});

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
      className={avatarFallbackVariants({ variant, className })}
      {...props}
    >
      {children ?? <UserRoundIcon className="text-current" />}
    </AvatarPrimitive.Fallback>
  );
}

export { Avatar, AvatarImage, AvatarFallback, avatarFallbackVariants };
