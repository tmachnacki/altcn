"use client";

import * as React from "react";
import { Toolbar as ToolbarPrimitive } from "radix-ui";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

import { toggleVariants } from "~/components/ui/toggle";
import {
  compactToggleGroupItemVariants,
  toggleGroupVariants,
  type ToggleGroupContextProps,
} from "~/components/ui/toggle-group";
import { Tron } from "~/components/ui/tron";

const toolbarVariants = tv({
  base: [
    "flex items-center gap-2.5 rounded-md p-2.5",
    "data-[orientation=horizontal]:h-fit data-[orientation=horizontal]:min-w-max data-[orientation=horizontal]:flex-row",
    "data-[orientation=vertical]:min-h-max data-[orientation=vertical]:w-fit data-[orientation=vertical]:flex-col",
  ],
  variants: {
    variant: {
      solid: "border border-border bg-card shadow",
      translucent:
        "border border-border bg-card-translucent shadow backdrop-blur-card-translucent",
      ghost: "rounded-none bg-transparent p-0",
    },
    defaultVariants: {
      variant: "solid",
    },
  },
});

function Toolbar({
  className,
  variant = "solid",
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Root> &
  VariantProps<typeof toolbarVariants>) {
  return (
    <ToolbarPrimitive.Root
      data-slot="toolbar"
      className={toolbarVariants({ variant, className })}
      {...props}
    />
  );
}

function ToolbarButton({
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Button>) {
  return <ToolbarPrimitive.Button data-slot="toolbar-button" {...props} />;
}

function ToolbarLink({
  size = "md",
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Link> &
  Pick<VariantProps<typeof toggleVariants>, "size">) {
  return (
    <ToolbarPrimitive.Link
      data-slot="toolbar-link"
      className={cn(
        {
          // "2xs": "text-[0.8rem]/4.5 sm:text-xs",
          xs: "text-sm sm:text-[0.8rem]/4.5",
          sm: "text-sm",
          md: "text-base sm:text-sm",
          lg: "text-lg sm:text-base",
        }[size],
        className
      )}
      {...props}
    />
  );
}

const ToolbarToggleGroupContext = React.createContext<ToggleGroupContextProps>(
  {}
);

function ToolbarToggleGroup({
  className,
  variant = "accent",
  size = "md",
  spacing = "split",
  children,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.ToggleGroup> &
  ToggleGroupContextProps) {
  return (
    <ToolbarPrimitive.ToggleGroup
      data-slot="toolbar-toggle-group"
      className={cn(toggleGroupVariants({ variant, size, spacing }), className)}
      {...props}
    >
      <ToolbarToggleGroupContext.Provider value={{ variant, size, spacing }}>
        {children}
      </ToolbarToggleGroupContext.Provider>
    </ToolbarPrimitive.ToggleGroup>
  );
}

function ToolbarToggleItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.ToggleItem> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToolbarToggleGroupContext);
  const _variant = variant || context.variant;

  return (
    <ToolbarPrimitive.ToggleItem
      data-slot="toolbar-toggle-item"
      data-spacing={context.spacing}
      className={cn(
        toggleVariants({
          variant: _variant,
          size: size || context.size,
        }),
        context.spacing === "compact" &&
          compactToggleGroupItemVariants({
            variant: _variant,
          }),
        "group/toolbar-toggle-item",
        className
      )}
      {...props}
    >
      {_variant?.includes("tron") && (
        <>
          <Tron
            type="beam"
            side="bottom"
            className="via-(--tron-beam) opacity-0 group-data-[state=on]/toolbar-toggle-item:opacity-100"
          />
          <Tron
            type="blur"
            side="bottom"
            className="via-(--tron-blur) opacity-0 group-data-[state=on]/toolbar-toggle-item:opacity-100"
          />
        </>
      )}
      {children}
    </ToolbarPrimitive.ToggleItem>
  );
}

function ToolbarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Separator>) {
  return (
    <ToolbarPrimitive.Separator
      data-slot="toolbar-separator"
      className={cn(
        "block self-stretch bg-border",
        "data-[orientation=vertical]:w-px",
        "data-[orientation=horizontal]:h-px",
        className
      )}
      {...props}
    />
  );
}

export {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  ToolbarSeparator,
  toolbarVariants,
};
