"use client";

import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "~/lib/utils";

import {
  menuContentVariants,
  menuItemIndicatorVariants,
  menuItemVariants,
  menuShortcutVariants,
  type MenuContextType,
} from "~/components/ui/dropdown-menu";
import { Tron } from "~/components/ui/tron";

const menubarTriggerVariants = cva(
  "relative flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
  {
    variants: {
      variant: {
        // -- base --
        base: [
          "data-[highlighted]:bg-base-500 data-[highlighted]:text-white dark:data-[highlighted]:bg-base-600 dark:data-[highlighted]:text-base-50",
          "data-[state=open]:bg-base-500 data-[state=open]:text-white dark:data-[state=open]:bg-base-600 dark:data-[state=open]:text-base-50",
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
          "data-[highlighted]:bg-background data-[highlighted]:bg-[image:var(--primary-tron-bg-gradient)] data-[highlighted]:text-primary-muted-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-border-primary-tron",
          "data-[highlighted]:[--tron-beam:var(--color-primary)] data-[highlighted]:[--tron-blur:var(--primary-tron-blur)]",
          "data-[state=open]:bg-background data-[state=open]:bg-[image:var(--primary-tron-bg-gradient)] data-[state=open]:text-primary-muted-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-border-primary-tron",
          "data-[state=open]:[--tron-beam:var(--color-primary)] data-[state=open]:[--tron-blur:var(--primary-tron-blur)]",
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
          "data-[highlighted]:bg-background data-[highlighted]:bg-[image:var(--secondary-tron-bg-gradient)] data-[highlighted]:text-secondary-muted-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-border-secondary-tron",
          "data-[highlighted]:[--tron-beam:var(--color-secondary)] data-[highlighted]:[--tron-blur:var(--secondary-tron-blur)]",
          "data-[state=open]:bg-background data-[state=open]:bg-[image:var(--secondary-tron-bg-gradient)] data-[state=open]:text-secondary-muted-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-border-secondary-tron",
          "data-[state=open]:[--tron-beam:var(--color-secondary)] data-[state=open]:[--tron-blur:var(--secondary-tron-blur)]",
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
  }
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
        className
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
        className
      )}
      {...props}
    >
      {variant?.includes("tron") && (
        <>
          <Tron
            side="bottom"
            type="beam"
            className="via-(--tron-beam) opacity-0 group-data-[highlighted]/menubar-trigger:opacity-100 group-data-[state=open]/menubar-trigger:opacity-100"
          />
          <Tron
            side="bottom"
            type="blur"
            className="via-(--tron-blur) opacity-0 group-data-[highlighted]/menubar-trigger:opacity-100 group-data-[state=open]/menubar-trigger:opacity-100"
          />
        </>
      )}
      {children}
    </MenubarPrimitive.Trigger>
  );
}

const MenubarContext = React.createContext<MenuContextType>({});

function MenubarContent({
  className,
  align = "start",
  sideOffset = 8,
  variant = "accent",
  wide = undefined,
  indicatorVariant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content> & MenuContextType) {
  return (
    <MenubarContext.Provider value={{ variant, wide, indicatorVariant }}>
      <MenubarPortal>
        <MenubarPrimitive.Content
          data-slot="menubar-content"
          data-align={align}
          sideOffset={sideOffset}
          data-variant={variant}
          data-wide={wide}
          className={cn(
            menuContentVariants(),
            "min-w-48",
            // FIXME: exit animations be breaking
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0",
            className
          )}
          {...props}
        />
      </MenubarPortal>
    </MenubarContext.Provider>
  );
}

type MenubarItemProps = React.ComponentProps<typeof MenubarPrimitive.Item> &
  VariantProps<typeof menuItemVariants> & {
    inset?: boolean;
  };

function MenubarItem({
  className,
  inset,
  variant,
  wide,
  ...props
}: MenubarItemProps) {
  const context = React.useContext(MenubarContext);

  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant || context.variant}
      data-wide={wide || context.wide}
      className={cn(
        menuItemVariants({
          variant: variant || context.variant,
          wide: wide || context.wide,
        }),
        className
      )}
      {...props}
    />
  );
}

type MenubarCheckboxItemProps = React.ComponentProps<
  typeof MenubarPrimitive.CheckboxItem
> &
  MenuContextType & {
    indicatorClassName?: string;
  };

function MenubarCheckboxItem({
  className,
  checked,
  variant,
  wide,
  indicatorVariant,
  indicatorClassName,
  children,
  ...props
}: MenubarCheckboxItemProps) {
  const context = React.useContext(MenubarContext);

  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      data-variant={variant || context.variant}
      data-wide={wide || context.wide}
      data-inset={true}
      className={cn(
        menuItemVariants({
          variant: variant || context.variant,
          wide: wide || context.wide,
        }),
        className
      )}
      checked={checked}
      {...props}
    >
      <MenubarPrimitive.ItemIndicator
        data-slot="menubar-checkbox-item-indicator"
        data-variant={indicatorVariant || context.indicatorVariant}
        data-wide={wide || context.wide}
        data-item-variant={variant || context.variant}
        className={cn(
          menuItemIndicatorVariants({
            variant: indicatorVariant || context.indicatorVariant,
          }),
          indicatorClassName
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
  MenuContextType & {
    indicatorClassName?: string;
  };

function MenubarRadioItem({
  className,
  variant,
  wide,
  indicatorVariant,
  indicatorClassName,
  children,
  ...props
}: MenubarRadioItemProps) {
  const context = React.useContext(MenubarContext);

  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      data-variant={variant || context.variant}
      data-wide={wide || context.wide}
      data-inset
      className={cn(
        menuItemVariants({
          variant: variant || context.variant,
          wide: wide || context.wide,
        }),
        className
      )}
      {...props}
    >
      <MenubarPrimitive.ItemIndicator
        data-slot="menubar-radio-item-indicator"
        data-variant={indicatorVariant || context.indicatorVariant}
        data-wide={wide || context.wide}
        data-item-variant={variant || context.variant}
        className={cn(
          menuItemIndicatorVariants({
            variant: indicatorVariant || context.indicatorVariant,
          }),
          indicatorClassName
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
        "px-(--menu-item-px) py-1.5 text-sm font-medium text-foreground data-[inset]:pl-(--inset-pl)",
        className
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
      className={cn("-mx-(--menu-content-px) my-1 h-px bg-border", className)}
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
      className={cn(menuShortcutVariants(), className)}
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
  variant,
  wide,
  children,
  ...props
}: MenubarSubTriggerProps) {
  const context = React.useContext(MenubarContext);

  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      data-variant={variant || context.variant}
      data-wide={wide || context.wide}
      className={cn(
        menuItemVariants({
          variant: variant || context.variant,
          wide: wide || context.wide,
        }),
        className
      )}
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
          menuContentVariants(),
          "min-w-32 shadow-lg",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0",
          className
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
