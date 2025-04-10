"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import {
  type MenuContextType,
  menuContentVariants,
  menuItemVariants,
  menuItemIndicatorVariants,
  menuShortcutVariants,
} from "@/components/ui/dropdown-menu";

import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

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
    inset?: boolean;
  };

function ContextMenuSubTrigger({
  className,
  inset,
  variant,
  wide,
  children,
  ...props
}: ContextMenuSubTriggerProps) {
  const context = React.useContext(ContextMenuContext);

  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      data-variant={variant || context.variant}
      data-wide={wide || context.wide}
      className={cn(
        menuItemVariants({
          variant: variant || context.variant,
          wide: wide || context.wide,
        }),
        className,
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
          className,
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

const ContextMenuContext = React.createContext<MenuContextType>({});

function ContextMenuContent({
  className,
  variant = "accent",
  wide = undefined,
  indicatorVariant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content> &
  MenuContextType) {
  return (
    <ContextMenuContext.Provider value={{ variant, wide, indicatorVariant }}>
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
          data-slot="context-menu-content"
          className={cn(
            menuContentVariants(),
            "min-w-32",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0",
            className,
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
    inset?: boolean;
  };

function ContextMenuItem({
  className,
  inset,
  variant,
  wide,
  ...props
}: ContextMenuItemProps) {
  const context = React.useContext(ContextMenuContext);

  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant || context.variant}
      data-wide={wide || context.wide}
      className={cn(
        menuItemVariants({
          variant: variant || context.variant,
          wide: wide || context.wide,
        }),
        className,
      )}
      {...props}
    />
  );
}

type ContextMenuCheckboxItemProps = React.ComponentProps<
  typeof ContextMenuPrimitive.CheckboxItem
> &
  MenuContextType & {
    indicatorClassName?: string;
  };

function ContextMenuCheckboxItem({
  className,
  checked,
  variant,
  wide,
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
      data-wide={wide || context.wide}
      data-inset
      className={cn(
        menuItemVariants({
          variant: variant || context.variant,
          wide: wide || context.wide,
        }),
        className,
      )}
      checked={checked}
      {...props}
    >
      <ContextMenuPrimitive.ItemIndicator
        data-slot="context-menu-checkbox-item-indicator"
        data-variant={indicatorVariant || context.indicatorVariant}
        data-wide={wide || context.wide}
        data-item-variant={variant || context.variant}
        className={cn(
          menuItemIndicatorVariants({
            variant: indicatorVariant || context.indicatorVariant,
          }),
          indicatorClassName,
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
  MenuContextType & {
    indicatorClassName?: string;
  };

function ContextMenuRadioItem({
  className,
  variant,
  wide,
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
      data-wide={wide || context.wide}
      data-inset
      className={cn(
        menuItemVariants({
          variant: variant || context.variant,
          wide: wide || context.wide,
        }),
        className,
      )}
      {...props}
    >
      <ContextMenuPrimitive.ItemIndicator
        data-slot="context-menu-radio-item-indicator"
        data-variant={indicatorVariant || context.indicatorVariant}
        data-wide={wide || context.wide}
        data-item-variant={variant || context.variant}
        className={cn(
          menuItemIndicatorVariants({
            variant: indicatorVariant || context.indicatorVariant,
          }),
          indicatorClassName,
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
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "px-(--menu-item-px) py-1.5 text-sm font-medium text-foreground data-[inset]:pl-(--inset-pl)",
        className,
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
