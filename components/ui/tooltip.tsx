"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { tv, type VariantProps } from "tailwind-variants";

const tooltipVariants = tv({
  slots: {
    root: [
      "relative isolate z-60 w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-smaller text-balance shadow-lg select-none sm:text-xs",
      "animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    ],
    arrow: "",
  },
  variants: {
    variant: {
      solid: {
        root: "border border-border bg-popover text-popover-foreground",
        arrow: "fill-popover stroke-border stroke-2",
      },
      translucent: {
        root: "border border-border bg-popover-translucent text-popover-foreground backdrop-blur-popover-translucent",
        arrow: "fill-popover-translucent stroke-border stroke-2",
      },
      contrast: {
        root: "bg-contrast text-contrast-foreground",
        arrow: "fill-contrast",
      },
      base: {
        root: "bg-base-bg text-base-foreground",
        arrow: "fill-base-bg",
      },
      primary: {
        root: "bg-primary text-primary-foreground",
        arrow: "fill-primary",
      },
      secondary: {
        root: "bg-secondary text-secondary-foreground",
        arrow: "fill-secondary",
      },
      destructive: {
        root: "bg-destructive text-destructive-foreground",
        arrow: "fill-destructive",
      },
    },
  },
  defaultVariants: {
    variant: "contrast",
  },
});

// could wrap in a context to provide variant to rest of app, but changing default variant is probably good enough
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

type TooltipContentProps = React.ComponentProps<
  typeof TooltipPrimitive.Content
> &
  VariantProps<typeof tooltipVariants> & {
    classNames?: {
      root?: string;
      arrow?: string;
    };
  };

function TooltipContent({
  className,
  sideOffset = 4,
  variant = "contrast",
  classNames,
  children,
  ...props
}: TooltipContentProps) {
  const { root, arrow } = tooltipVariants({ variant });
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={root({ className: [classNames?.root, className] })}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow
          data-slot="tooltip-arrow"
          className={arrow({ className: classNames?.arrow })}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  tooltipVariants,
};
