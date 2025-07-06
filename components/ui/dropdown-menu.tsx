"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "~/lib/utils";

// TODO: maybe adjust subcontent offset for wide+border variants
// TODO: maybe use visual-only inset span for wide+border variants to avoid negative margin issues

const menuContentVariants = cva([
  "[--inset-pl:--spacing(8)] [--menu-content-px:--spacing(1)] [--menu-item-px:--spacing(2)]",
  "z-50 overflow-x-hidden overflow-y-auto rounded-md border bg-popover px-(--menu-content-px) py-1 text-popover-foreground shadow-md",
]);

const menuItemVariants = cva(
  [
    "relative flex cursor-default items-center gap-2 rounded-sm px-(--menu-item-px) py-1.5 text-sm outline-hidden select-none data-[align=inset]:pl-(--inset-pl)",
    "data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground data-[disabled]:opacity-50 data-[disabled]:**:[[data-slot*='-indicator']]:text-muted-foreground",
    "**:[svg]:pointer-events-none **:[svg]:shrink-0 **:[svg]:not-[[class*='size-']]:size-4 **:[svg]:not-[[class*='text-']]:text-muted-foreground data-[highlighted]:**:[svg]:not-[[class*='text-']]:text-current",
    // for subtrigger
    "not-data-[highlighted]:data-[state=open]:bg-muted not-data-[highlighted]:data-[state=open]:text-accent-foreground",
  ],
  {
    variants: {
      variant: {
        // -- base --
        base: [
          "data-[highlighted]:bg-base-bg data-[highlighted]:text-base-foreground data-[highlighted]:**:[[data-slot*='-indicator']]:text-current",
        ],
        accent: [
          "data-[highlighted]:bg-muted data-[highlighted]:text-accent-foreground",
        ],
        surface: [
          "data-[highlighted]:bg-faded data-[highlighted]:text-accent-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-border-faded data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-border-faded),inset_0_-1px_0_0_var(--color-border-faded)]",
        ],

        // -- primary --
        primary: [
          "data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground data-[highlighted]:**:[[data-slot*='-indicator']]:text-current",
        ],
        "primary-accent": [
          "data-[highlighted]:bg-primary-muted data-[highlighted]:text-primary-accent-foreground",
        ],
        "primary-muted": [
          "data-[highlighted]:bg-primary-muted data-[highlighted]:text-primary-muted-foreground",
        ],
        "primary-surface": [
          "data-[highlighted]:bg-primary-faded data-[highlighted]:text-primary-accent-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-primary-border-faded data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-primary-border-faded),inset_0_-1px_0_0_var(--color-primary-border-faded)]",
        ],
        "primary-faded": [
          "data-[highlighted]:bg-primary-faded data-[highlighted]:text-primary-muted-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-primary-border-faded data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-primary-border-faded),inset_0_-1px_0_0_var(--color-primary-border-faded)]",
        ],

        // -- secondary --
        secondary: [
          "data-[highlighted]:bg-secondary data-[highlighted]:text-secondary-foreground data-[highlighted]:**:[[data-slot*='-indicator']]:text-current",
        ],
        "secondary-accent": [
          "data-[highlighted]:bg-secondary-muted data-[highlighted]:text-secondary-accent-foreground",
        ],
        "secondary-muted": [
          "data-[highlighted]:bg-secondary-muted data-[highlighted]:text-secondary-muted-foreground",
        ],
        "secondary-surface": [
          "data-[highlighted]:bg-secondary-faded data-[highlighted]:text-secondary-accent-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-secondary-border-faded data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-secondary-border-faded),inset_0_-1px_0_0_var(--color-secondary-border-faded)]",
        ],
        "secondary-faded": [
          "data-[highlighted]:bg-secondary-faded data-[highlighted]:text-secondary-muted-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-secondary-border-faded data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-secondary-border-faded),inset_0_-1px_0_0_var(--color-secondary-border-faded)]",
        ],

        // -- destructive --
        destructive: [
          "data-[highlighted]:bg-destructive data-[highlighted]:text-destructive-foreground data-[highlighted]:**:[[data-slot*='-indicator']]:text-current",
        ],
        "destructive-accent": [
          "data-[highlighted]:bg-destructive-muted data-[highlighted]:text-destructive-accent-foreground",
        ],
        "destructive-muted": [
          "data-[highlighted]:bg-destructive-muted data-[highlighted]:text-destructive-muted-foreground",
        ],
        "destructive-surface": [
          "data-[highlighted]:data-[width=default]:inset-ring-destructive-border-faded data-[highlighted]:bg-destructive-faded data-[highlighted]:text-destructive-accent-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-destructive-border-faded),inset_0_-1px_0_0_var(--color-destructive-border-faded)]",
        ],
        "destructive-faded": [
          "data-[highlighted]:data-[width=default]:inset-ring-destructive-border-faded data-[highlighted]:bg-destructive-faded data-[highlighted]:text-destructive-muted-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-destructive-border-faded),inset_0_-1px_0_0_var(--color-destructive-border-faded)]",
        ],
      },
      width: {
        default: "",
        full: "-mx-(--menu-content-px) rounded-none px-[calc(var(--menu-content-px)+var(--menu-item-px))] data-[align=inset]:pl-[calc(var(--menu-content-px)+var(--inset-pl))]",
      },
    },
    compoundVariants: [
      {
        variant: [
          "destructive",
          "destructive-accent",
          "destructive-muted",
          "destructive-surface",
          "destructive-faded",
        ],
        className:
          "text-destructive-muted-foreground **:[svg]:not-[[class*='text-']]:text-current",
      },
    ],
    defaultVariants: {
      variant: "accent",
      width: "default",
    },
  }
);

const menuItemIndicatorVariants = cva(
  [
    "pointer-events-none absolute left-(--menu-item-px) inline-flex size-4 items-center justify-center",
    "data-[width=full]:left-[calc(var(--menu-content-px)+var(--menu-item-px))]",
  ],
  {
    variants: {
      variant: {
        default: "text-subtle-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
        destructive: "text-destructive",
        success: "text-success",
        warning: "text-warning",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const menuShortcutVariants = cva(
  "ml-auto text-xs font-normal tracking-widest text-current/60"
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

type MenuContextProps = VariantProps<typeof menuItemVariants> & {
  indicatorVariant?: VariantProps<typeof menuItemIndicatorVariants>["variant"];
};

const DropdownMenuContext = React.createContext<MenuContextProps>({});

function DropdownMenuContent({
  className,
  sideOffset = 4,
  variant = "accent",
  width = "default",
  indicatorVariant = "default",
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content> &
  MenuContextProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          menuContentVariants(),
          "max-h-(--radix-dropdown-menu-content-available-height) min-w-[max(var(--radix-dropdown-menu-trigger-width),--spacing(32))] origin-(--radix-dropdown-menu-content-transform-origin)",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          className
        )}
        {...props}
      >
        <DropdownMenuContext.Provider
          value={{ variant, width, indicatorVariant }}
        >
          {children}
        </DropdownMenuContext.Provider>
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
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
    align?: "start" | "inset";
  };

function DropdownMenuItem({
  className,
  align = "start",
  variant,
  width,
  ...props
}: DropdownMenuItemProps) {
  const context = React.useContext(DropdownMenuContext);

  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-width={width || context.width}
      data-align={align}
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

type DropdownMenuCheckboxItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
> &
  MenuContextProps & {
    classNames?: {
      item?: string;
      indicator?: string;
    };
  };

function DropdownMenuCheckboxItem({
  className,
  checked,
  variant,
  width,
  indicatorVariant,
  classNames,
  children,
  ...props
}: DropdownMenuCheckboxItemProps) {
  const context = React.useContext(DropdownMenuContext);

  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
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
      <DropdownMenuPrimitive.ItemIndicator
        data-slot="dropdown-menu-checkbox-item-indicator"
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
  MenuContextProps & {
    classNames?: {
      item?: string;
      indicator?: string;
    };
  };

function DropdownMenuRadioItem({
  className,
  variant,
  width,
  indicatorVariant,
  classNames,
  children,
  ...props
}: DropdownMenuRadioItemProps) {
  const context = React.useContext(DropdownMenuContext);

  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
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
      <DropdownMenuPrimitive.ItemIndicator
        data-slot="dropdown-menu-radio-item-indicator"
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
      </DropdownMenuPrimitive.ItemIndicator>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  align = "start",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  align?: "start" | "inset";
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-align={align}
      className={cn(
        "px-(--menu-item-px) py-1.5 text-sm font-medium text-foreground data-[align=inset]:pl-(--inset-pl)",
        className
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
      className={cn("-mx-(--menu-content-px) my-1 h-px bg-border", className)}
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
      className={cn(menuShortcutVariants(), className)}
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
    align?: "start" | "inset";
  };

function DropdownMenuSubTrigger({
  className,
  align = "start",
  variant,
  width,
  children,
  ...props
}: DropdownMenuSubTriggerProps) {
  const context = React.useContext(DropdownMenuContext);

  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
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
          menuContentVariants(),
          "max-h-(--radix-dropdown-menu-content-available-height) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) shadow-lg",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

export {
  type MenuContextProps,
  menuContentVariants,
  menuItemVariants,
  menuItemIndicatorVariants,
  menuShortcutVariants,
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
