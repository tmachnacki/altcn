"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const menuItemVariants = cva(
  "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
  {
    variants: {
      variant: {
        accent:
          "focus:bg-accent focus:text-accent-foreground focus:[&_svg:not([class*='text-'])]:text-accent-foreground",
        faded: "focus:bg-faded focus:inset-ring focus:inset-ring-border-faded focus:[&_svg:not([class*='text-'])]:text-accent-foreground",
        primary:
          "focus:bg-primary focus:text-primary-foreground focus:[&_svg:not([class*='text-'])]:text-primary-foreground",
        "primary-muted":
          "focus:bg-primary-muted focus:text-primary-muted-foreground focus:[&_svg:not([class*='text-'])]:text-primary-muted-foreground",
        "primary-faded":
          "focus:bg-primary-faded focus:text-primary-accent-foreground focus:inset-ring focus:inset-ring-border-primary-faded [&_svg:not([class*='text-'])]:text-primary-muted-foreground",
        secondary:
          "focus:bg-secondary focus:text-secondary-foreground focus:[&_svg:not([class*='text-'])]:text-secondary-600",
        destructive:
          "text-destructive focus:bg-destructive focus:text-destructive-foreground",
        "destructive-muted":
          "text-destructive focus:bg-destructive-muted focus:text-destructive-muted-foreground",
        "destructive-faded":
          "text-destructive focus:bg-destructive-faded focus:text-destructive-muted-foreground focus:inset-ring focus:inset-ring-border-destructive-faded",
      },
      wide: {
        false: null,
        true: "-mx-1 rounded-none px-3",
      },
    },
    compoundVariants: [
      {
        variant: ["faded", "primary-faded", "destructive-faded"],
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
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md backdrop-blur-lg data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:duration-200 data-[state=open]:ease-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:data-[side=bottom]:slide-in-from-top-1 data-[state=open]:data-[side=left]:slide-in-from-right-1 data-[state=open]:data-[side=right]:slide-in-from-left-1 data-[state=open]:data-[side=top]:slide-in-from-bottom-1",
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

function DropdownMenuItem({
  className,
  inset,
  variant: variantOverride,
  wide: wideOverride,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> &
  VariantProps<typeof menuItemVariants> & {
    inset?: boolean;
  }) {
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
        "group/dropdown-menu-item",
        menuItemVariants({ variant, wide }),
        className,
      )}
      {...props}
    />
  );
}

const indicatorVariants = cva("", {
  variants: {
    indicatorVariant: {
      default:
        "text-accent-foreground group-data-[slot=dropdown-menu-radio-item]/dropdown-menu-radio-item:fill-accent-foreground",
      primary:
        "text-primary group-data-[slot=dropdown-menu-radio-item]/dropdown-menu-radio-item:fill-primary",
      secondary:
        "text-secondary group-data-[slot=dropdown-menu-radio-item]/dropdown-menu-radio-item:fill-secondary",
    },
    defaultVariants: {
      indicatorVariant: "default",
    },
  },
});

type DropdownMenuCheckboxItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
> &
  VariantProps<typeof indicatorVariants> & {
    indicatorClassName?: string;
  };

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  indicatorVariant = "default",
  indicatorClassName,
  ...props
}: DropdownMenuCheckboxItemProps) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "group/dropdown-menu-checkbox-item relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon
            className={cn(
              "size-4",
              indicatorVariants({ indicatorVariant }),
              indicatorClassName,
            )}
          />
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
  VariantProps<typeof indicatorVariants> & {
    indicatorClassName?: string;
  };

function DropdownMenuRadioItem({
  className,
  indicatorVariant = "default",
  indicatorClassName,
  children,
  ...props
}: DropdownMenuRadioItemProps) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "group/dropdown-menu-radio-item relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon
            className={cn(
              "size-2",
              indicatorVariants({ indicatorVariant }),
              indicatorClassName,
            )}
          />
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
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className,
      )}
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
      <ChevronRightIcon className="ml-auto size-4" />
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
