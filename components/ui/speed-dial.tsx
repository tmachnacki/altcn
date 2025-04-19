"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const speedDialContentVariants = cva(
  [
    "z-50 h-fit max-h-(--radix-dropdown-menu-content-available-height) w-fit origin-(--radix-dropdown-menu-content-transform-origin) rounded-full p-2",

    "flex items-center justify-center gap-3 data-[side=bottom]:flex-col data-[side=left]:flex-row-reverse data-[side=right]:flex-row data-[side=top]:flex-col-reverse",

    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0",
  ],
  {
    variants: {
      variant: {
        ghost: "bg-transparent",
        solid: "border border-border bg-popover shadow-lg",
        translucent:
          "border border-border bg-popover/50 shadow-lg backdrop-blur-2xl",
      },
    },
    defaultVariants: {
      variant: "ghost",
    },
  },
);

const speedDialItemVariants = cva(
  [
    "relative inline-flex size-9 flex-col items-center justify-center gap-1 rounded-full p-2 text-sm select-none",
    "data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground data-[disabled]:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "data-[content-variant=ghost]:shadow-md",
    "group-data-[state=closed]/speed-dial-content:animate-out group-data-[state=closed]/speed-dial-content:fade-out-0 group-data-[state=open]/speed-dial-content:animate-in group-data-[state=open]/speed-dial-content:fade-in-0 group-data-[state=open]/speed-dial-content:zoom-in-75",
  ],
  {
    variants: {
      variant: {
        outline: [
          "bg-background text-foreground inset-ring inset-ring-border not-data-[content-variant=ghost]:shadow-xs",
          "data-[highlighted]:inset-ring-border-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-outline data-[highlighted]:bg-muted",
        ],
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

function SpeedDial({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="speed-dial" {...props} />;
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

type SpeedDialContextType = {
  side?: "top" | "right" | "bottom" | "left";
  contentVariant?: VariantProps<typeof speedDialContentVariants>["variant"];
  variant?: VariantProps<typeof speedDialItemVariants>["variant"];
  tooltipVariant?: React.ComponentProps<typeof TooltipContent>["variant"];
};

const SpeedDialContext = React.createContext<SpeedDialContextType>({});

function SpeedDialContent({
  className,
  side = "top",
  sideOffset = 8,
  contentVariant = "ghost",
  variant = "outline",
  tooltipVariant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content> &
  SpeedDialContextType) {
  return (
    <SpeedDialContext.Provider
      value={{ side, contentVariant, variant, tooltipVariant }}
    >
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          data-slot="speed-dial-content"
          side={side}
          sideOffset={sideOffset}
          className={cn(
            speedDialContentVariants({ variant: contentVariant }),
            "group/speed-dial-content",
            className,
          )}
          {...props}
        />
      </DropdownMenuPrimitive.Portal>
    </SpeedDialContext.Provider>
  );
}

type SpeedDialItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Item
> &
  VariantProps<typeof speedDialItemVariants> & {
    label: string;
    tooltipVariant?: React.ComponentProps<typeof TooltipContent>["variant"];
  };

function SpeedDialItem({
  className,
  label,
  variant,
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
            className,
          )}
          {...props}
        >
          {children}
        </DropdownMenuPrimitive.Item>
      </TooltipTrigger>
      <TooltipContent
        variant={tooltipVariant || context.tooltipVariant}
        side={"left"}
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
