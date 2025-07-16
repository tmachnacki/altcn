"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const tooltipVariants = cva("", {
  variants: {
    variant: {
      default:
        "bg-base-950 text-base-50 [--tooltip-arrow-bg:var(--color-base-950)] dark:bg-base-50 dark:text-base-950 dark:[--tooltip-arrow-bg:var(--color-base-50)]",
      base: "bg-base-bg text-base-foreground [--tooltip-arrow-bg:var(--color-base-bg)]",
      primary:
        "bg-primary text-primary-foreground [--tooltip-arrow-bg:var(--color-primary)]",
      secondary:
        "bg-secondary text-secondary-foreground [--tooltip-arrow-bg:var(--color-secondary)]",
      destructive:
        "bg-destructive text-destructive-foreground [--tooltip-arrow-bg:var(--color-destructive)]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function TooltipProvider({
  delayDuration = 300,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  variant = "default",
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> &
  VariantProps<typeof tooltipVariants>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "z-60 w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance shadow-lg",
          "animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          tooltipVariants({ variant }),
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow
          data-slot="tooltip-arrow"
          className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-(--tooltip-arrow-bg) fill-(--tooltip-arrow-bg)"
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
