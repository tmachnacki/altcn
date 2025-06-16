"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { type VariantProps } from "class-variance-authority";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "~/lib/utils";

import {
  menuContentVariants,
  menuItemIndicatorVariants,
  menuItemVariants,
  menuShortcutVariants,
  type MenuContextProps,
} from "~/components/ui/dropdown-menu";

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  );
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  );
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
}

type ContextMenuSubTriggerProps = React.ComponentProps<
  typeof ContextMenuPrimitive.SubTrigger
> &
  VariantProps<typeof menuItemVariants> & {
    position?: "default" | "inset";
  };

function ContextMenuSubTrigger({
  className,
  position = "default",
  variant,
  width,
  children,
  ...props
}: ContextMenuSubTriggerProps) {
  const context = React.useContext(ContextMenuContext);

  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-position={position}
      data-variant={variant || context.variant}
      data-width={width || context.width}
      className={cn(
        menuItemVariants({
          variant: variant || context.variant,
          width: width || context.width,
        }),
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4 text-current" />
    </ContextMenuPrimitive.SubTrigger>
  );
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.SubContent
        data-slot="context-menu-sub-content"
        className={cn(
          menuContentVariants(),
          "min-w-32 shadow-lg",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

const ContextMenuContext = React.createContext<MenuContextProps>({});

function ContextMenuContent({
  className,
  variant = "accent",
  width = "default",
  indicatorVariant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content> &
  MenuContextProps) {
  return (
    <ContextMenuContext.Provider value={{ variant, width, indicatorVariant }}>
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
          data-slot="context-menu-content"
          className={cn(
            menuContentVariants(),
            "max-h-(--radix-context-menu-content-available-height) min-w-32 origin-(--radix-context-menu-content-transform-origin)",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            className
          )}
          {...props}
        />
      </ContextMenuPrimitive.Portal>
    </ContextMenuContext.Provider>
  );
}

type ContextMenuItemProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Item
> &
  VariantProps<typeof menuItemVariants> & {
    position?: "default" | "inset";
  };

function ContextMenuItem({
  className,
  position = "default",
  variant,
  width,
  ...props
}: ContextMenuItemProps) {
  const context = React.useContext(ContextMenuContext);

  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-position={position}
      data-variant={variant || context.variant}
      data-width={width || context.width}
      className={cn(
        menuItemVariants({
          variant: variant || context.variant,
          width: width || context.width,
        }),
        className
      )}
      {...props}
    />
  );
}

type ContextMenuCheckboxItemProps = React.ComponentProps<
  typeof ContextMenuPrimitive.CheckboxItem
> &
  MenuContextProps & {
    indicatorClassName?: string;
  };

function ContextMenuCheckboxItem({
  className,
  checked,
  variant,
  width,
  indicatorVariant,
  indicatorClassName,
  children,
  ...props
}: ContextMenuCheckboxItemProps) {
  const context = React.useContext(ContextMenuContext);

  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      data-variant={variant || context.variant}
      data-width={width || context.width}
      data-position="inset"
      className={cn(
        menuItemVariants({
          variant: variant || context.variant,
          width: width || context.width,
        }),
        className
      )}
      checked={checked}
      {...props}
    >
      <ContextMenuPrimitive.ItemIndicator
        data-slot="context-menu-checkbox-item-indicator"
        data-variant={indicatorVariant || context.indicatorVariant}
        data-width={width || context.width}
        data-item-variant={variant || context.variant}
        className={cn(
          menuItemIndicatorVariants({
            variant: indicatorVariant || context.indicatorVariant,
          }),
          indicatorClassName
        )}
      >
        <CheckIcon className="size-4 text-current" />
      </ContextMenuPrimitive.ItemIndicator>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

type ContextMenuRadioItemProps = React.ComponentProps<
  typeof ContextMenuPrimitive.RadioItem
> &
  MenuContextProps & {
    indicatorClassName?: string;
  };

function ContextMenuRadioItem({
  className,
  variant,
  width,
  indicatorVariant,
  indicatorClassName,
  children,
  ...props
}: ContextMenuRadioItemProps) {
  const context = React.useContext(ContextMenuContext);

  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      data-variant={variant || context.variant}
      data-width={width || context.width}
      data-position="inset"
      className={cn(
        menuItemVariants({
          variant: variant || context.variant,
          width: width || context.width,
        }),
        className
      )}
      {...props}
    >
      <ContextMenuPrimitive.ItemIndicator
        data-slot="context-menu-radio-item-indicator"
        data-variant={indicatorVariant || context.indicatorVariant}
        data-width={width || context.width}
        data-item-variant={variant || context.variant}
        className={cn(
          menuItemIndicatorVariants({
            variant: indicatorVariant || context.indicatorVariant,
          }),
          indicatorClassName
        )}
      >
        <CircleIcon className="size-2 fill-current text-current" />
      </ContextMenuPrimitive.ItemIndicator>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

function ContextMenuLabel({
  className,
  position = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  position?: "default" | "inset";
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-position={position}
      className={cn(
        "px-(--menu-item-px) py-1.5 text-sm font-medium text-foreground data-[position=inset]:pl-(--inset-pl)",
        className
      )}
      {...props}
    />
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("-mx-(--menu-item-px) my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(menuShortcutVariants(), className)}
      {...props}
    />
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
