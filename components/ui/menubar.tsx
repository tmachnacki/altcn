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
  type MenuContextProps,
} from "~/components/ui/dropdown-menu";
import { Tron } from "~/components/ui/tron";

const menubarTriggerVariants = cva(
  "relative flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
  {
    variants: {
      variant: {
        // -- base --
        outline: [
          "data-[highlighted]:bg-background data-[highlighted]:text-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-border",
          "data-[state=open]:bg-background data-[state=open]:text-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-border",
        ],

        base: [
          "data-[highlighted]:bg-base-bg data-[highlighted]:text-base-foreground",
          "data-[state=open]:bg-base-bg data-[state=open]:text-base-foreground",
        ],

        accent: [
          "data-[highlighted]:bg-muted data-[highlighted]:text-accent-foreground",
          "data-[state=open]:bg-muted data-[state=open]:text-accent-foreground",
        ],

        surface: [
          "data-[highlighted]:bg-faded data-[highlighted]:text-accent-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-faded-border",
          "data-[state=open]:bg-faded data-[state=open]:text-accent-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-faded-border",
        ],

        "base-gradient": [
          "data-[highlighted]:bg-linear-(--base-gradient) data-[highlighted]:text-base-foreground",
          "data-[state=open]:bg-linear-(--base-gradient) data-[state=open]:text-base-foreground",
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
          "data-[highlighted]:bg-primary-faded data-[highlighted]:text-primary-accent-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-primary-faded-border",
          "data-[state=open]:bg-primary-faded data-[state=open]:text-primary-accent-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-primary-faded-border",
        ],

        "primary-faded": [
          "data-[highlighted]:bg-primary-faded data-[highlighted]:text-primary-muted-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-primary-faded-border",
          "data-[state=open]:bg-primary-faded data-[state=open]:text-primary-muted-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-primary-faded-border",
        ],

        "primary-tron": [
          "data-[highlighted]:bg-background data-[highlighted]:bg-linear-(--primary-tron-gradient) data-[highlighted]:text-primary-muted-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-primary-tron-border",
          "data-[highlighted]:[--tron-beam:var(--color-primary)] data-[highlighted]:[--tron-blur:var(--primary-tron-blur)]",
          "data-[state=open]:bg-background data-[state=open]:bg-linear-(--primary-tron-gradient) data-[state=open]:text-primary-muted-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-primary-tron-border",
          "data-[state=open]:[--tron-beam:var(--color-primary)] data-[state=open]:[--tron-blur:var(--primary-tron-blur)]",
        ],

        "primary-gradient": [
          "data-[highlighted]:bg-linear-(--primary-gradient) data-[highlighted]:text-primary-foreground",
          "data-[state=open]:bg-linear-(--primary-gradient) data-[state=open]:text-primary-foreground",
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
          "data-[highlighted]:bg-secondary-faded data-[highlighted]:text-secondary-accent-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-secondary-faded-border",
          "data-[state=open]:bg-secondary-faded data-[state=open]:text-secondary-accent-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-secondary-faded-border",
        ],

        "secondary-faded": [
          "data-[highlighted]:bg-secondary-faded data-[highlighted]:text-secondary-muted-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-secondary-faded-border",
          "data-[state=open]:bg-secondary-faded data-[state=open]:text-secondary-muted-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-secondary-faded-border",
        ],

        "secondary-tron": [
          "data-[highlighted]:bg-background data-[highlighted]:bg-linear-(--secondary-tron-gradient) data-[highlighted]:text-secondary-muted-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-secondary-tron-border",
          "data-[highlighted]:[--tron-beam:var(--color-secondary)] data-[highlighted]:[--tron-blur:var(--secondary-tron-blur)]",
          "data-[state=open]:bg-background data-[state=open]:bg-linear-(--secondary-tron-gradient) data-[state=open]:text-secondary-muted-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-secondary-tron-border",
          "data-[state=open]:[--tron-beam:var(--color-secondary)] data-[state=open]:[--tron-blur:var(--secondary-tron-blur)]",
        ],

        "secondary-gradient": [
          "data-[highlighted]:bg-linear-(--secondary-gradient) data-[highlighted]:text-secondary-foreground",
          "data-[state=open]:bg-linear-(--secondary-gradient) data-[state=open]:text-secondary-foreground",
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

const MenubarContext = React.createContext<MenuContextProps>({});

function MenubarContent({
  className,
  align = "start",
  sideOffset = 8,
  variant = "accent",
  width = "default",
  indicatorVariant = "base",
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content> & MenuContextProps) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          menuContentVariants(),
          "max-h-(--radix-menubar-content-available-height) max-w-(--radix-menubar-content-available-width) min-w-48 origin-(--radix-menubar-content-transform-origin)",
          // FIXME: exit animations be breaking
          "data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0",
          className
        )}
        {...props}
      >
        <MenubarContext.Provider value={{ variant, width, indicatorVariant }}>
          {children}
        </MenubarContext.Provider>
      </MenubarPrimitive.Content>
    </MenubarPortal>
  );
}

type MenubarItemProps = React.ComponentProps<typeof MenubarPrimitive.Item> &
  VariantProps<typeof menuItemVariants> & {
    align?: "start" | "inset";
  };

function MenubarItem({
  className,
  align = "start",
  variant,
  width,
  ...props
}: MenubarItemProps) {
  const context = React.useContext(MenubarContext);

  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-align={align}
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

type MenubarCheckboxItemProps = React.ComponentProps<
  typeof MenubarPrimitive.CheckboxItem
> &
  MenuContextProps & {
    classNames?: {
      item?: string;
      indicator?: string;
    };
  };

function MenubarCheckboxItem({
  className,
  checked,
  variant,
  width,
  indicatorVariant,
  classNames,
  children,
  ...props
}: MenubarCheckboxItemProps) {
  const context = React.useContext(MenubarContext);

  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      data-width={width || context.width}
      data-align="inset"
      className={cn(
        menuItemVariants({
          variant: variant || context.variant,
          width: width || context.width,
        }),
        classNames?.item,
        className
      )}
      checked={checked}
      {...props}
    >
      <MenubarPrimitive.ItemIndicator
        data-slot="menubar-checkbox-item-indicator"
        data-width={width || context.width}
        data-item-variant={variant || context.variant}
        className={cn(
          menuItemIndicatorVariants({
            variant: indicatorVariant || context.indicatorVariant,
          }),
          classNames?.indicator
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
  MenuContextProps & {
    classNames?: {
      item?: string;
      indicator?: string;
    };
  };

function MenubarRadioItem({
  className,
  variant,
  width,
  indicatorVariant,
  classNames,
  children,
  ...props
}: MenubarRadioItemProps) {
  const context = React.useContext(MenubarContext);

  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      data-width={width || context.width}
      data-align="inset"
      className={cn(
        menuItemVariants({
          variant: variant || context.variant,
          width: width || context.width,
        }),
        classNames?.item,
        className
      )}
      {...props}
    >
      <MenubarPrimitive.ItemIndicator
        data-slot="menubar-radio-item-indicator"
        data-width={width || context.width}
        data-item-variant={variant || context.variant}
        className={cn(
          menuItemIndicatorVariants({
            variant: indicatorVariant || context.indicatorVariant,
          }),
          classNames?.indicator
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
  align = "start",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  align?: "start" | "inset";
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-align={align}
      className={cn(
        "px-(--menu-item-px) py-1.5 text-sm font-medium text-foreground data-[align=inset]:pl-(--inset-pl)",
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
    align?: "start" | "inset";
  };

function MenubarSubTrigger({
  className,
  align = "start",
  variant,
  width,
  children,
  ...props
}: MenubarSubTriggerProps) {
  const context = React.useContext(MenubarContext);

  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-align={align}
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
          "max-h-(--radix-menubar-content-available-height) max-w-(--radix-menubar-content-available-width) min-w-32 origin-(--radix-menubar-content-transform-origin) shadow-lg",
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
