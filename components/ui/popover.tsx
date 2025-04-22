"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { XIcon } from "lucide-react";

import { cn } from "~/lib/utils";

import { buttonVariants } from "~/components/ui/button";

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 max-h-(--radix-popover-content-available-height) min-w-[max(var(--radix-popover-content-trigger-width),--spacing(72))] origin-(--radix-popover-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-hidden",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

function PopoverClose({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Close>) {
  return (
    <PopoverPrimitive.Close
      data-slot="popover-close"
      aria-label={props["aria-label"] || "Close"}
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon-xs" }),
        "absolute top-2 right-2",
        className
      )}
      {...props}
    >
      <XIcon className="size-4" />
    </PopoverPrimitive.Close>
  );
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverClose };
