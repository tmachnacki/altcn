"use client";

import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import {
  type MenuItemsVariantsContextType,
  menuItemVariants,
  menuItemIndicatorVariants,
} from "@/components/ui/dropdown-menu";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const menubarTriggerVariants = cva(
  "relative flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
  {
    variants: {
      variant: {
        // -- base --
        base: [
          "data-[highlighted]:bg-base-600 data-[highlighted]:text-base-50",
          "data-[state=open]:bg-base-600 data-[state=open]:text-base-50",
        ],

        accent: [
          "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
          "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        ],

        surface: [
          "data-[highlighted]:bg-faded data-[highlighted]:text-accent-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-border-faded",
          "data-[state=open]:bg-faded data-[state=open]:text-accent-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-border-faded",
        ],

        // -- primary --
        primary: [
          "data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground",
          "data-[state=open]:bg-primary data-[state=open]:text-primary-foreground",
        ],

        "primary-accent": [
          "data-[highlighted]:bg-primary-muted data-[highlighted]:text-primary-accent-foreground",
          "data-[state=open]:bg-primary-muted data-[state=open]:text-primary-accent-foreground",
        ],

        "primary-muted": [
          "data-[highlighted]:bg-primary-muted data-[highlighted]:text-primary-muted-foreground",
          "data-[state=open]:bg-primary-muted data-[state=open]:text-primary-muted-foreground",
        ],

        "primary-surface": [
          "data-[highlighted]:bg-primary-faded data-[highlighted]:text-primary-accent-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-border-primary-faded",
          "data-[state=open]:bg-primary-faded data-[state=open]:text-primary-accent-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-border-primary-faded",
        ],

        "primary-faded": [
          "data-[highlighted]:bg-primary-faded data-[highlighted]:text-primary-muted-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-border-primary-faded",
          "data-[state=open]:bg-primary-faded data-[state=open]:text-primary-muted-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-border-primary-faded",
        ],

        "primary-tron": [
          "data-[highlighted]:bg-background data-[highlighted]:bg-gradient-to-t data-[highlighted]:from-primary/15 data-[highlighted]:to-transparent data-[highlighted]:text-primary-muted-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-primary/30",
          "data-[highlighted]:*:data-[slot=tron-blur]:via-primary-tron-blur data-[highlighted]:*:data-[slot=tron-wide]:via-primary",
          "data-[state=open]:bg-background data-[state=open]:bg-gradient-to-t data-[state=open]:from-primary/15 data-[state=open]:to-transparent data-[state=open]:text-primary-muted-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-primary/30",
          "data-[state=open]:*:data-[slot=tron-blur]:via-primary-tron-blur data-[state=open]:*:data-[slot=tron-wide]:via-primary",
        ],

        "primary-ghost": [
          "data-[highlighted]:bg-transparent data-[highlighted]:text-primary",
          "data-[state=open]:bg-transparent data-[state=open]:text-primary",
        ],

        // -- secondary --
        secondary: [
          "data-[highlighted]:bg-secondary data-[highlighted]:text-secondary-foreground",
          "data-[state=open]:bg-secondary data-[state=open]:text-secondary-foreground",
        ],

        "secondary-accent": [
          "data-[highlighted]:bg-secondary-muted data-[highlighted]:text-secondary-accent-foreground",
          "data-[state=open]:bg-secondary-muted data-[state=open]:text-secondary-accent-foreground",
        ],

        "secondary-muted": [
          "data-[highlighted]:bg-secondary-muted data-[highlighted]:text-secondary-muted-foreground",
          "data-[state=open]:bg-secondary-muted data-[state=open]:text-secondary-muted-foreground",
        ],

        "secondary-surface": [
          "data-[highlighted]:bg-secondary-faded data-[highlighted]:text-secondary-accent-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-border-secondary-faded",
          "data-[state=open]:bg-secondary-faded data-[state=open]:text-secondary-accent-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-border-secondary-faded",
        ],

        "secondary-faded": [
          "data-[highlighted]:bg-secondary-faded data-[highlighted]:text-secondary-muted-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-border-secondary-faded",
          "data-[state=open]:bg-secondary-faded data-[state=open]:text-secondary-muted-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-border-secondary-faded",
        ],

        "secondary-tron": [
          "data-[highlighted]:bg-background data-[highlighted]:bg-gradient-to-t data-[highlighted]:from-secondary/15 data-[highlighted]:to-transparent data-[highlighted]:text-secondary-muted-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-secondary/30",
          "data-[highlighted]:*:data-[slot=tron-blur]:via-secondary-tron-blur data-[highlighted]:*:data-[slot=tron-wide]:via-secondary",
          "data-[state=open]:bg-background data-[state=open]:bg-gradient-to-t data-[state=open]:from-secondary/15 data-[state=open]:to-transparent data-[state=open]:text-secondary-muted-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-secondary/30",
          "data-[state=open]:*:data-[slot=tron-blur]:via-secondary-tron-blur data-[state=open]:*:data-[slot=tron-wide]:via-secondary",
        ],

        "secondary-ghost": [
          "data-[highlighted]:bg-transparent data-[highlighted]:text-secondary-500 dark:data-[highlighted]:text-secondary",
          "data-[state=open]:bg-transparent data-[state=open]:text-secondary-500 dark:data-[state=open]:text-secondary",
        ],
      },
    },
    defaultVariants: {
      variant: "accent",
    },
  },
);

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs",
        className,
      )}
      {...props}
    />
  );
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

function MenubarTrigger({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger> &
  VariantProps<typeof menubarTriggerVariants>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        menubarTriggerVariants({ variant }),
        "group/menubar-trigger",
        className,
      )}
      {...props}
    >
      {variant?.includes("tron") && (
        <>
          <span
            aria-hidden="true"
            data-slot="tron-wide"
            className="absolute bottom-0 left-[5%] block h-[2px] w-[90%] bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-data-[highlighted]/menubar-trigger:opacity-100 group-data-[state=open]/menubar-trigger:opacity-100 motion-reduce:transition-none"
          />
          <span
            aria-hidden="true"
            data-slot="tron-blur"
            className="absolute bottom-0 left-[20%] block h-[2px] w-[60%] bg-gradient-to-r from-transparent to-transparent opacity-0 blur-sm transition-opacity duration-300 group-data-[highlighted]/menubar-trigger:opacity-100 group-data-[state=open]/menubar-trigger:opacity-100 motion-reduce:transition-none"
          />
        </>
      )}
      {children}
    </MenubarPrimitive.Trigger>
  );
}

const MenubarItemsVariantsContext =
  React.createContext<MenuItemsVariantsContextType>({
    variant: "accent",
    wide: undefined,
    indicatorVariant: "default",
  });

function MenubarContent({
  className,
  align = "start",
  sideOffset = 8,
  variant = "accent",
  wide = undefined,
  indicatorVariant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content> &
  MenuItemsVariantsContextType) {
  return (
    <MenubarItemsVariantsContext.Provider
      value={{ variant, wide, indicatorVariant }}
    >
      <MenubarPortal>
        <MenubarPrimitive.Content
          data-slot="menubar-content"
          data-align={align}
          sideOffset={sideOffset}
          data-variant={variant}
          data-wide={wide}
          className={cn(
            "z-50 max-h-(--radix-menubar-content-available-height) min-w-48 origin-(--radix-menubar-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
            // FIXME: exit animations be breaking shit
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0",
            className,
          )}
          {...props}
        />
      </MenubarPortal>
    </MenubarItemsVariantsContext.Provider>
  );
}

type MenubarItemProps = React.ComponentProps<typeof MenubarPrimitive.Item> &
  VariantProps<typeof menuItemVariants> & {
    inset?: boolean;
  };

function MenubarItem({
  className,
  inset,
  variant: variantOverride,
  wide: wideOverride,
  ...props
}: MenubarItemProps) {
  const { variant: variantFromContext, wide: wideFromContext } =
    React.useContext(MenubarItemsVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;

  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      data-wide={wide}
      className={cn(menuItemVariants({ variant, wide }), className)}
      {...props}
    />
  );
}

type MenubarCheckboxItemProps = React.ComponentProps<
  typeof MenubarPrimitive.CheckboxItem
> &
  MenuItemsVariantsContextType & {
    indicatorClassName?: string;
  };

function MenubarCheckboxItem({
  className,
  checked,
  variant: variantOverride,
  wide: wideOverride,
  indicatorVariant: indicatorVariantOverride,
  indicatorClassName,
  children,
  ...props
}: MenubarCheckboxItemProps) {
  const {
    variant: variantFromContext,
    wide: wideFromContext,
    indicatorVariant: indicatorVariantFromContext,
  } = React.useContext(MenubarItemsVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;
  const indicatorVariant =
    indicatorVariantOverride ?? indicatorVariantFromContext;

  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      data-variant={variant}
      data-wide={wide}
      data-inset={true}
      className={cn(menuItemVariants({ variant, wide }), className)}
      checked={checked}
      {...props}
    >
      <MenubarPrimitive.ItemIndicator
        data-slot="menubar-checkbox-item-indicator"
        data-variant={indicatorVariant}
        data-wide={wide}
        data-item-variant={variant}
        className={cn(
          menuItemIndicatorVariants({ variant: indicatorVariant }),
          indicatorClassName,
        )}
      >
        <CheckIcon className="size-4 text-current" />
      </MenubarPrimitive.ItemIndicator>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  );
}

type MenubarRadioItemProps = React.ComponentProps<
  typeof MenubarPrimitive.RadioItem
> &
  MenuItemsVariantsContextType & {
    indicatorClassName?: string;
  };

function MenubarRadioItem({
  className,
  variant: variantOverride,
  wide: wideOverride,
  indicatorVariant: indicatorVariantOverride,
  indicatorClassName,
  children,
  ...props
}: MenubarRadioItemProps) {
  const {
    variant: variantFromContext,
    wide: wideFromContext,
    indicatorVariant: indicatorVariantFromContext,
  } = React.useContext(MenubarItemsVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;
  const indicatorVariant =
    indicatorVariantOverride ?? indicatorVariantFromContext;

  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      data-variant={variant}
      data-wide={wide}
      data-inset={true}
      className={cn(menuItemVariants({ variant, wide }), className)}
      {...props}
    >
      <MenubarPrimitive.ItemIndicator
        data-slot="menubar-radio-item-indicator"
        data-variant={indicatorVariant}
        data-wide={wide}
        data-item-variant={variant}
        className={cn(
          menuItemIndicatorVariants({ variant: indicatorVariant }),
          indicatorClassName,
        )}
      >
        <CircleIcon className="size-2 fill-current text-current" />
      </MenubarPrimitive.ItemIndicator>
      {children}
    </MenubarPrimitive.RadioItem>
  );
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium text-foreground data-[inset=true]:pl-8",
        className,
      )}
      {...props}
    />
  );
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn("ml-auto text-xs tracking-widest", className)}
      {...props}
    />
  );
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

type MenubarSubTriggerProps = React.ComponentProps<
  typeof MenubarPrimitive.SubTrigger
> &
  VariantProps<typeof menuItemVariants> & {
    inset?: boolean;
  };

function MenubarSubTrigger({
  className,
  inset,
  variant: variantOverride,
  wide: wideOverride,
  children,
  ...props
}: MenubarSubTriggerProps) {
  const { variant: variantFromContext, wide: wideFromContext } =
    React.useContext(MenubarItemsVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;

  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      data-variant={variant}
      data-wide={wide}
      className={cn(menuItemVariants({ variant, wide }), className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4 text-current" />
    </MenubarPrimitive.SubTrigger>
  );
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.SubContent
        data-slot="menubar-sub-content"
        className={cn(
          "z-50 max-h-(--radix-menubar-content-available-height) min-w-32 origin-(--radix-menubar-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0",
          className,
        )}
        {...props}
      />
    </MenubarPortal>
  );
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
};
