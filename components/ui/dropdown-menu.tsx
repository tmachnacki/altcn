"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// TODO: better className overrides, maybe adjust subcontent offset for wide+border variants
// TODO: maybe use visual-only inset span for wide+border variants to avoid negative margin issues
const menuItemVariants = cva(
  [
    "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset=true]:pl-8",
    "data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground data-[disabled]:opacity-50",
    "[&_[data-slot*='-shortcut']]:text-muted-foreground data-[highlighted]:[&_[data-slot*='-shortcut']]:text-current",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[highlighted]:[&_svg:not([class*='text-'])]:text-current",
  ],
  {
    variants: {
      variant: {
        // -- base --
        accent: [
          "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
          "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", // for subtrigger
        ],
        surface: [
          "data-[highlighted]:bg-faded data-[highlighted]:text-accent-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-border-faded",
          "data-[state=open]:bg-faded data-[state=open]:text-accent-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-border-faded",
        ],

        // -- primary --
        primary: [
          "data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground data-[highlighted]:[&_[data-slot*='-indicator'][data-variant='primary']]:text-current",
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

        // -- secondary --
        secondary: [
          "data-[highlighted]:bg-secondary data-[highlighted]:text-secondary-foreground data-[highlighted]:[&_[data-slot*='-indicator']]:text-current",
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

        // -- destructive --
        destructive: [
          "data-[highlighted]:bg-destructive data-[highlighted]:text-destructive-foreground data-[highlighted]:[&_[data-slot*='-indicator']]:text-current",
          "data-[state=open]:bg-destructive data-[state=open]:text-destructive-foreground",
        ],
        "destructive-accent": [
          "data-[highlighted]:bg-destructive-muted data-[highlighted]:text-destructive-accent-foreground",
          "data-[state=open]:bg-destructive-muted data-[state=open]:text-destructive-accent-foreground",
        ],
        "destructive-muted": [
          "data-[highlighted]:bg-destructive-muted data-[highlighted]:text-destructive-muted-foreground",
          "data-[state=open]:bg-destructive-muted data-[state=open]:text-destructive-muted-foreground",
        ],
        "destructive-surface": [
          "data-[highlighted]:bg-destructive-faded data-[highlighted]:text-destructive-accent-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-border-destructive-faded",
          "data-[state=open]:bg-destructive-faded data-[state=open]:text-destructive-accent-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-border-destructive-faded",
        ],
        "destructive-faded": [
          "data-[highlighted]:bg-destructive-faded data-[highlighted]:text-destructive-muted-foreground data-[highlighted]:inset-ring data-[highlighted]:inset-ring-border-destructive-faded",
          "data-[state=open]:bg-destructive-faded data-[state=open]:text-destructive-muted-foreground data-[state=open]:inset-ring data-[state=open]:inset-ring-border-destructive-faded",
        ],
      },
      wide: {
        false: null,
        true: "-mx-1 rounded-none px-3 data-[inset=true]:pl-9",
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
        className:
          "-mx-[calc(--spacing(1)+1px)] px-[calc(--spacing(3)+1px)] data-[inset=true]:pl-[calc(--spacing(9)+1px)]",
      },
      {
        variant: [
          "destructive",
          "destructive-accent",
          "destructive-muted",
          "destructive-surface",
          "destructive-faded",
        ],
        className:
          "text-destructive-muted-foreground [&_svg:not([class*='text-'])]:text-current",
      },
    ],
    defaultVariants: {
      variant: "accent",
      wide: false,
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

const DropdownMenuVariantsContext = React.createContext<
  VariantProps<typeof menuItemVariants> &
    VariantProps<typeof menuItemIndicatorVariants>
>({
  variant: "accent",
  wide: false,
  indicatorVariant: "default",
});

function DropdownMenuContent({
  className,
  sideOffset = 4,
  variant = "accent",
  wide = false,
  indicatorVariant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content> &
  VariantProps<typeof menuItemVariants> &
  VariantProps<typeof menuItemIndicatorVariants>) {
  return (
    <DropdownMenuVariantsContext.Provider
      value={{ variant, wide, indicatorVariant }}
    >
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          data-slot="dropdown-menu-content"
          sideOffset={sideOffset}
          data-variant={variant}
          data-wide={wide}
          className={cn(
            "z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[max(var(--radix-dropdown-menu-trigger-width),--spacing(32))] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0",
            className,
          )}
          {...props}
        />
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuVariantsContext.Provider>
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
    React.useContext(DropdownMenuVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-wide={wide}
      data-inset={inset}
      data-variant={variant}
      className={cn(menuItemVariants({ variant, wide }), className)}
      {...props}
    />
  );
}

const menuItemIndicatorVariants = cva(
  [
    "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
    "data-[wide=true]:left-3 data-[wide=true]:[data-item-variant*='faded']:left-[calc(--spacing(3)+1px)] data-[wide=true]:[data-item-variant*='surface']:left-[calc(--spacing(3)+1px)]",
  ],
  {
    variants: {
      indicatorVariant: {
        default: "text-accent-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
        destructive: "text-destructive",
      },
      defaultVariants: {
        indicatorVariant: "default",
      },
    },
  },
);

type DropdownMenuCheckboxItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
> &
  VariantProps<typeof menuItemVariants> &
  VariantProps<typeof menuItemIndicatorVariants> & {
    indicatorClassName?: string;
  };

function DropdownMenuCheckboxItem({
  className,
  checked,
  variant: variantOverride,
  wide: wideOverride,
  indicatorVariant: indicatorVariantOverride,
  indicatorClassName,
  children,
  ...props
}: DropdownMenuCheckboxItemProps) {
  const {
    variant: variantFromContext,
    wide: wideFromContext,
    indicatorVariant: indicatorVariantFromContext,
  } = React.useContext(DropdownMenuVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;
  const indicatorVariant =
    indicatorVariantOverride ?? indicatorVariantFromContext;

  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-variant={variant}
      data-wide={wide}
      data-inset={true}
      className={cn(menuItemVariants({ variant, wide }), className)}
      checked={checked}
      {...props}
    >
      <DropdownMenuPrimitive.ItemIndicator
        data-slot="dropdown-menu-checkbox-item-indicator"
        data-variant={indicatorVariant}
        data-wide={wide}
        data-item-variant={variant}
        className={cn(
          menuItemIndicatorVariants({ indicatorVariant }),
          indicatorClassName,
        )}
      >
        <CheckIcon className="size-4 text-current" />
      </DropdownMenuPrimitive.ItemIndicator>
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
  VariantProps<typeof menuItemIndicatorVariants> & {
    indicatorClassName?: string;
  };

function DropdownMenuRadioItem({
  className,
  variant: variantOverride,
  wide: wideOverride,
  indicatorVariant: indicatorVariantOverride,
  indicatorClassName,
  children,
  ...props
}: DropdownMenuRadioItemProps) {
  const {
    variant: variantFromContext,
    wide: wideFromContext,
    indicatorVariant: indicatorVariantFromContext,
  } = React.useContext(DropdownMenuVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;
  const indicatorVariant =
    indicatorVariantOverride ?? indicatorVariantFromContext;
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-variant={variant}
      data-wide={wide}
      data-inset={true}
      className={cn(menuItemVariants({ variant, wide }), className)}
      {...props}
    >
      <DropdownMenuPrimitive.ItemIndicator
        data-slot="dropdown-menu-radio-item-indicator"
        data-variant={indicatorVariant}
        data-wide={wide}
        data-item-variant={variant}
        className={cn(
          menuItemIndicatorVariants({ indicatorVariant }),
          indicatorClassName,
        )}
      >
        <CircleIcon className="size-2 fill-current text-current" />
      </DropdownMenuPrimitive.ItemIndicator>
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
        "px-2 py-1.5 text-sm font-medium text-foreground data-[inset=true]:pl-8",
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

type DropdownMenuSubTriggerProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.SubTrigger
> &
  VariantProps<typeof menuItemVariants> & {
    inset?: boolean;
  };

function DropdownMenuSubTrigger({
  className,
  inset,
  variant: variantOverride,
  wide: wideOverride,
  children,
  ...props
}: DropdownMenuSubTriggerProps) {
  const { variant: variantFromContext, wide: wideFromContext } =
    React.useContext(DropdownMenuVariantsContext);
  const variant = variantOverride ?? variantFromContext;
  const wide = wideOverride ?? wideFromContext;

  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      data-variant={variant}
      data-wide={wide}
      className={cn(menuItemVariants({ variant, wide }), className)}
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
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.SubContent
        data-slot="dropdown-menu-sub-content"
        className={cn(
          "z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0",
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

export {
  menuItemVariants,
  menuItemIndicatorVariants,
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
