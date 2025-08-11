"use client";

import * as React from "react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";

const speedDialContentVariants = cva(
  [
    "relative isolate z-50 h-fit max-h-(--radix-dropdown-menu-content-available-height) w-fit origin-(--radix-dropdown-menu-content-transform-origin) overflow-visible rounded-full p-2",

    "flex items-center justify-center gap-3 data-[side=bottom]:flex-col data-[side=left]:flex-row-reverse data-[side=right]:flex-row data-[side=top]:flex-col-reverse",

    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
    // "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
    "after:absolute after:-z-[1] after:h-(--radix-dropdown-menu-trigger-height) after:w-(--radix-dropdown-menu-trigger-width) after:bg-red-500/25",
    "data-[side=bottom]:after:top-0 data-[side=bottom]:after:left-1/2 data-[side=bottom]:after:-translate-x-1/2 data-[side=bottom]:after:-translate-y-[calc(var(--speed-dial-content-offset)+(var(--radix-dropdown-menu-trigger-height)/2))]",
    "data-[side=top]:after:bottom-0 data-[side=top]:after:left-1/2 data-[side=top]:after:-translate-x-1/2 data-[side=top]:after:translate-y-[calc(var(--speed-dial-content-offset)+(var(--radix-dropdown-menu-trigger-height)/2))]",
    "data-[side=right]:after:top-1/2 data-[side=right]:after:left-0 data-[side=right]:after:-translate-x-[calc(var(--speed-dial-content-offset)+(var(--radix-dropdown-menu-trigger-width)/2))] data-[side=right]:after:-translate-y-1/2",
    "data-[side=left]:after:top-1/2 data-[side=left]:after:right-0 data-[side=left]:after:translate-x-[calc(var(--speed-dial-content-offset)+(var(--radix-dropdown-menu-trigger-width)/2))] data-[side=left]:after:-translate-y-1/2",
  ],
  {
    variants: {
      variant: {
        ghost: "bg-transparent",
        solid: "border border-border bg-popover shadow-lg",
        translucent:
          "border border-border bg-popover-translucent shadow-lg backdrop-blur-popover-translucent",
      },
    },
    defaultVariants: {
      variant: "ghost",
    },
  }
);

const speedDialItemVariants = cva(
  [
    "inline-flex aspect-square h-fit min-h-9 w-auto flex-col items-center justify-center gap-1 rounded-full p-2 text-sm select-none",
    "data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground data-[disabled]:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    // "data-[content-variant=ghost]:shadow-md",
    "group-data-[state=closed]/speed-dial-content:animate-out group-data-[state=closed]/speed-dial-content:fade-out-0 group-data-[state=open]/speed-dial-content:animate-in group-data-[state=open]/speed-dial-content:fade-in-0 group-data-[state=open]/speed-dial-content:zoom-in-75",
    "group-data-[state=closed]/speed-dial-content:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        outline: [
          "bg-background text-foreground shadow-xs inset-ring inset-ring-border",
          "data-[highlighted]:inset-ring-border-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-outline data-[highlighted]:bg-muted",
        ],
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

function SpeedDial({
  modal = false,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return (
    <DropdownMenuPrimitive.Root
      data-slot="speed-dial"
      modal={modal}
      {...props}
    />
  );
}

function SpeedDialPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="speed-dial-portal" {...props} />
  );
}

// typically a floating action button positioned in a corner of the screen
function SpeedDialTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger data-slot="speed-dial-trigger" {...props} />
  );
}

type SpeedDialContextProps = {
  side?: "top" | "right" | "bottom" | "left";
  contentVariant?: VariantProps<typeof speedDialContentVariants>["variant"];
  variant?: VariantProps<typeof speedDialItemVariants>["variant"];
  tooltipSide?: React.ComponentProps<typeof TooltipContent>["side"];
  tooltipVariant?: React.ComponentProps<typeof TooltipContent>["variant"];
};

const SpeedDialContext = React.createContext<SpeedDialContextProps>({});

function SpeedDialContent({
  className,
  side = "top",
  align = "center",
  sideOffset = 8,
  contentVariant = "ghost",
  variant = "outline",
  tooltipSide = "left",
  tooltipVariant = "contrast",
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content> &
  SpeedDialContextProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="speed-dial-content"
        side={side}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          speedDialContentVariants({ variant: contentVariant }),
          "group/speed-dial-content",
          className
        )}
        style={
          {
            "--speed-dial-content-offset": `${sideOffset}px`,
          } as React.CSSProperties
        }
        {...props}
      >
        <SpeedDialContext.Provider
          value={{ side, contentVariant, variant, tooltipSide, tooltipVariant }}
        >
          {children}
        </SpeedDialContext.Provider>
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
}

type SpeedDialItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Item
> &
  VariantProps<typeof speedDialItemVariants> & {
    label: string;
    tooltipSide?: React.ComponentProps<typeof TooltipContent>["side"];
    tooltipVariant?: React.ComponentProps<typeof TooltipContent>["variant"];
  };

function SpeedDialItem({
  className,
  label,
  variant,
  tooltipSide,
  tooltipVariant,
  children,
  ...props
}: SpeedDialItemProps) {
  const context = React.useContext(SpeedDialContext);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <DropdownMenuPrimitive.Item
          data-slot="speed-dial-item"
          data-variant={variant || context.variant}
          data-content-variant={context.contentVariant}
          data-side={context.side}
          aria-label={label}
          className={cn(
            speedDialItemVariants({ variant: variant || context.variant }),
            className
          )}
          {...props}
        >
          {children}
        </DropdownMenuPrimitive.Item>
      </TooltipTrigger>
      <TooltipContent
        variant={tooltipVariant || context.tooltipVariant}
        side={tooltipSide || context.tooltipSide}
      >
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

export {
  SpeedDial,
  SpeedDialPortal,
  SpeedDialTrigger,
  SpeedDialContent,
  SpeedDialItem,
};
