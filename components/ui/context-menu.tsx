"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import {
  menuItemVariants,
  menuItemIndicatorVariants,
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
  variant: variantOverride,
  wide: wideOverride,
  children,
  ...props
}: ContextMenuSubTriggerProps) {
  const { variant: variantFromContext, wide: wideFromContext } =
    React.useContext(ContextMenuVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      data-variant={variant}
      data-wide={wide}
      className={cn(menuItemVariants({ variant, wide }), className)}
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
          "z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0",
          className,
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

const ContextMenuVariantsContext = React.createContext<
  VariantProps<typeof menuItemVariants> &
    VariantProps<typeof menuItemIndicatorVariants>
>({
  variant: "accent",
  wide: false,
  indicatorVariant: "default",
});

function ContextMenuContent({
  className,
  variant = "accent",
  wide = false,
  indicatorVariant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content> &
  VariantProps<typeof menuItemVariants> &
  VariantProps<typeof menuItemIndicatorVariants>) {
  return (
    <ContextMenuVariantsContext.Provider
      value={{ variant, wide, indicatorVariant }}
    >
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
          data-slot="context-menu-content"
          className={cn(
            "z-50 max-h-(--radix-context-menu-content-available-height) min-w-[--spacing(32)] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0",
            className,
          )}
          {...props}
        />
      </ContextMenuPrimitive.Portal>
    </ContextMenuVariantsContext.Provider>
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
  variant: variantOverride,
  wide: wideOverride,
  ...props
}: ContextMenuItemProps) {
  const { variant: variantFromContext, wide: wideFromContext } =
    React.useContext(ContextMenuVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      data-wide={wide}
      className={cn(menuItemVariants({ variant, wide }), className)}
      {...props}
    />
  );
}

type ContextMenuCheckboxItemProps = React.ComponentProps<
  typeof ContextMenuPrimitive.CheckboxItem
> &
  VariantProps<typeof menuItemVariants> &
  VariantProps<typeof menuItemIndicatorVariants> & {
    indicatorClassName?: string;
  };

function ContextMenuCheckboxItem({
  className,
  checked,
  variant: variantOverride,
  wide: wideOverride,
  indicatorVariant: indicatorVariantOverride,
  indicatorClassName,
  children,
  ...props
}: ContextMenuCheckboxItemProps) {
  const {
    variant: variantFromContext,
    wide: wideFromContext,
    indicatorVariant: indicatorVariantFromContext,
  } = React.useContext(ContextMenuVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;
  const indicatorVariant =
    indicatorVariantOverride ?? indicatorVariantFromContext;

  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      data-variant={variant}
      data-wide={wide}
      data-inset={true}
      className={cn(menuItemVariants({ variant, wide }), className)}
      checked={checked}
      {...props}
    >
      <ContextMenuPrimitive.ItemIndicator
        data-slot="context-menu-checkbox-item-indicator"
        data-variant={indicatorVariant}
        data-wide={wide}
        data-item-variant={variant}
        className={cn(
          menuItemIndicatorVariants({ indicatorVariant }),
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
  VariantProps<typeof menuItemVariants> &
  VariantProps<typeof menuItemIndicatorVariants> & {
    indicatorClassName?: string;
  };

function ContextMenuRadioItem({
  className,
  variant: variantOverride,
  wide: wideOverride,
  indicatorVariant: indicatorVariantOverride,
  indicatorClassName,
  children,
  ...props
}: ContextMenuRadioItemProps) {
  const {
    variant: variantFromContext,
    wide: wideFromContext,
    indicatorVariant: indicatorVariantFromContext,
  } = React.useContext(ContextMenuVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;
  const indicatorVariant =
    indicatorVariantOverride ?? indicatorVariantFromContext;
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      data-variant={variant}
      data-wide={wide}
      data-inset={true}
      className={cn(menuItemVariants({ variant, wide }), className)}
      {...props}
    >
      <ContextMenuPrimitive.ItemIndicator
        data-slot="context-menu-radio-item-indicator"
        data-variant={indicatorVariant}
        data-wide={wide}
        data-item-variant={variant}
        className={cn(
          menuItemIndicatorVariants({ indicatorVariant }),
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
        "px-2 py-1.5 text-sm font-medium text-foreground data-[inset=true]:pl-8",
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
      className={cn("-mx-1 my-1 h-px bg-border", className)}
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
      className={cn("ml-auto text-xs tracking-widest", className)}
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
