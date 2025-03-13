"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// TODO: better className overrides
const menuItemVariants = cva(
  "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_[data-slot*='-shortcut']]:text-muted-foreground focus:[&_[data-slot*='-shortcut']]:text-current [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground focus:[&_svg:not([class*='text-'])]:text-current",
  {
    variants: {
      variant: {
        accent: "focus:bg-accent focus:text-accent-foreground",
        surface:
          "focus:bg-faded focus:inset-ring focus:inset-ring-border-faded",

        primary:
          "focus:bg-primary focus:text-primary-foreground focus:[&_[data-slot*='-indicator']]:text-current",
        "primary-accent":
          "focus:bg-primary-muted focus:text-primary-accent-foreground",
        "primary-muted":
          "focus:bg-primary-muted focus:text-primary-muted-foreground",
        "primary-surface":
          "focus:bg-primary-faded focus:text-primary-accent-foreground focus:inset-ring focus:inset-ring-border-primary-faded",
        "primary-faded":
          "focus:bg-primary-faded focus:text-primary-muted-foreground focus:inset-ring focus:inset-ring-border-primary-faded",

        secondary:
          "focus:bg-secondary focus:text-secondary-foreground focus:[&_[data-slot*='-indicator']]:text-current",
        "secondary-accent":
          "focus:bg-secondary-muted focus:text-secondary-accent-foreground",
        "secondary-muted":
          "focus:bg-secondary-muted focus:text-secondary-muted-foreground",
        "secondary-surface":
          "focus:bg-secondary-faded focus:text-secondary-accent-foreground focus:inset-ring focus:inset-ring-border-secondary-faded",
        "secondary-faded":
          "focus:bg-secondary-faded focus:text-secondary-muted-foreground focus:inset-ring focus:inset-ring-border-secondary-faded",

        destructive:
          "text-destructive-muted-foreground focus:bg-destructive focus:text-destructive-foreground focus:[&_[data-slot*='-indicator']]:text-current",
        "destructive-accent":
          "text-destructive-muted-foreground focus:bg-destructive-muted focus:text-destructive-accent-foreground",
        "destructive-muted":
          "text-destructive-muted-foreground focus:bg-destructive-muted focus:text-destructive-muted-foreground",
        "destructive-surface":
          "text-destructive-muted-foreground focus:bg-destructive-faded focus:text-destructive-accent-foreground focus:inset-ring focus:inset-ring-border-destructive-faded",
        "destructive-faded":
          "text-destructive-muted-foreground focus:bg-destructive-faded focus:text-destructive-muted-foreground focus:inset-ring focus:inset-ring-border-destructive-faded",
      },
      wide: {
        false: null,
        true: "-mx-1 rounded-none px-3",
      },
    },
    compoundVariants: [
      {
        variant: [
          "surface",
          "primary-surface",
          "primary-faded",
          "secondary-surface",
          "secondary-faded",
          "destructive-surface",
          "destructive-faded",
        ],
        wide: true,
        className: "-mx-1.5 px-3.5",
      },
    ],
    defaultVariants: {
      variant: "accent",
    },
  },
);

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

const DropDownMenuContentVariantsContext = React.createContext<
  VariantProps<typeof menuItemVariants>
>({
  variant: "accent",
  wide: false,
});

function DropdownMenuContent({
  className,
  sideOffset = 4,
  variant = "accent",
  wide = false,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content> &
  VariantProps<typeof menuItemVariants>) {
  return (
    <DropDownMenuContentVariantsContext.Provider value={{ variant, wide }}>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          data-slot="dropdown-menu-content"
          sideOffset={sideOffset}
          className={cn(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:duration-200 data-[state=open]:ease-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:data-[side=bottom]:slide-in-from-top-1 data-[state=open]:data-[side=left]:slide-in-from-right-1 data-[state=open]:data-[side=right]:slide-in-from-left-1 data-[state=open]:data-[side=top]:slide-in-from-bottom-1",
            className,
          )}
          {...props}
        />
      </DropdownMenuPrimitive.Portal>
    </DropDownMenuContentVariantsContext.Provider>
  );
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

type DropdownMenuItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Item
> &
  VariantProps<typeof menuItemVariants> & {
    inset?: boolean;
  };

function DropdownMenuItem({
  className,
  inset,
  variant: variantOverride,
  wide: wideOverride,
  ...props
}: DropdownMenuItemProps) {
  const { variant: variantFromContext, wide: wideFromContext } =
    React.useContext(DropDownMenuContentVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-wide={wide}
      data-inset={inset}
      data-variant={variant}
      className={cn(
        menuItemVariants({ variant, wide }),
        "group/dropdown-menu-item",
        className,
      )}
      {...props}
    />
  );
}

const indicatorVariants = cva("", {
  variants: {
    indicatorVariant: {
      default: "text-accent-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
    },
    defaultVariants: {
      indicatorVariant: "default",
    },
  },
});

type DropdownMenuCheckboxItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
> &
  VariantProps<typeof menuItemVariants> &
  VariantProps<typeof indicatorVariants>;

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  variant: variantOverride,
  wide: wideOverride,
  indicatorVariant = "default",
  ...props
}: DropdownMenuCheckboxItemProps) {
  const { variant: variantFromContext, wide: wideFromContext } =
    React.useContext(DropDownMenuContentVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-wide={wide}
      data-variant={variant}
      className={cn(
        menuItemVariants({ variant, wide }),
        "group/dropdown-menu-checkbox-item pr-2 pl-8",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator
          data-slot="dropdown-menu-checkbox-item-indicator"
          data-variant={indicatorVariant}
          className={indicatorVariants({ indicatorVariant })}
        >
          <CheckIcon className="size-4 text-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

type DropdownMenuRadioItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.RadioItem
> &
  VariantProps<typeof menuItemVariants> &
  VariantProps<typeof indicatorVariants>;

function DropdownMenuRadioItem({
  className,
  variant: variantOverride,
  wide: wideOverride,
  indicatorVariant = "default",
  children,
  ...props
}: DropdownMenuRadioItemProps) {
  const { variant: variantFromContext, wide: wideFromContext } =
    React.useContext(DropDownMenuContentVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        menuItemVariants({ variant, wide }),
        "group/dropdown-menu-radio-item pr-2 pl-8",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator
          data-slot="dropdown-menu-radio-item-indicator"
          data-variant={indicatorVariant}
          className={indicatorVariants({ indicatorVariant })}
        >
          <CircleIcon className="size-2 fill-current text-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-semibold data-[inset]:pl-8",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn("ml-auto text-xs tracking-widest", className)}
      {...props}
    />
  );
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4 text-current" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:duration-200 data-[state=open]:ease-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:data-[side=bottom]:slide-in-from-top-1 data-[state=open]:data-[side=left]:slide-in-from-right-1 data-[state=open]:data-[side=right]:slide-in-from-left-1 data-[state=open]:data-[side=top]:slide-in-from-bottom-1",
        className,
      )}
      {...props}
    />
  );
}

export {
  menuItemVariants,
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
