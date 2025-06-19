"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cva, type VariantProps } from "class-variance-authority";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
} from "lucide-react";

import { cn } from "~/lib/utils";

// TODO: adjust spacing for position="item-aligned" (i.e., not "popper")

const selectTriggerVariants = cva(
  [
    "flex w-fit items-center justify-between gap-2 rounded-md text-sm whitespace-nowrap",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "**:[svg]:pointer-events-none **:[svg]:shrink-0",
    "*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2",
    "aria-invalid:text-destructive-accent-foreground aria-invalid:[--select-trigger-icon-text:var(--color-destructive-muted-foreground)] aria-invalid:[&_svg:not([class*='text-'])]:text-destructive-muted-foreground",
  ],
  {
    variants: {
      size: {
        default: "h-9 px-3 py-2 **:[svg]:not-[[class*='size-']]:size-4",
        sm: "h-8 px-2.5 py-1.5 **:[svg]:not-[[class*='size-']]:size-4",
        lg: "h-10 px-4 py-2.5 text-base **:[svg]:not-[[class*='size-']]:size-5",
      },
      variant: {
        // -- base --
        outline: [
          "bg-background text-accent-foreground shadow-xs outline-1 -outline-offset-1 outline-border hover:not-disabled:not-aria-invalid:not-focus-visible:outline-hover-border dark:bg-faded",
          "**:[svg]:not-[[class*='text-']]:text-muted-foreground",
          "[--select-trigger-icon-text:var(--color-muted-foreground)]",
          "data-[placeholder]:text-placeholder",
          "disabled:bg-faded disabled:shadow-none",
          "focus-visible:outline-2 focus-visible:outline-primary",
          "aria-invalid:outline-destructive aria-invalid:data-[placeholder]:text-destructive-placeholder dark:aria-invalid:bg-destructive-faded",
        ],

        muted: [
          "bg-muted text-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-hover-muted",
          "**:[svg]:not-[[class*='text-']]:text-muted-foreground",
          "[--select-trigger-icon-text:var(--color-muted-foreground)]",
          "data-[placeholder]:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-primary",
          "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted aria-invalid:data-[placeholder]:text-destructive-muted-foreground",
        ],

        underlined: [
          "rounded-none bg-transparent shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:not-disabled:not-aria-invalid:not-focus-visible:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",
          "**:[svg]:not-[[class*='text-']]:text-muted-foreground",
          "[--select-trigger-icon-text:var(--color-muted-foreground)]",
          "data-[placeholder]:text-placeholder",
          "focus-visible:shadow-[inset_0_-2px_0_0_var(--color-primary)]",
          "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:focus-visible:shadow-[inset_0_-2px_0_0_var(--color-destructive)] aria-invalid:data-[placeholder]:text-destructive-placeholder",
        ],

        // -- primary --
        "primary-muted": [
          "bg-primary-muted text-primary-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-hover-primary-muted",
          "**:[svg]:not-[[class*='text-']]:text-primary-muted-foreground",
          "[--select-trigger-icon-text:var(--color-primary-muted-foreground)]",
          "data-[placeholder]:text-primary-muted-foreground",
          "disabled:bg-muted disabled:text-accent-foreground disabled:[--select-trigger-icon-text:var(--color-muted-foreground)] disabled:data-[placeholder]:text-muted-foreground disabled:**:[svg]:not-[[class*='text-']]:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-primary",
          "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted aria-invalid:data-[placeholder]:text-destructive-muted-foreground",
        ],

        // -- secondary --
        "secondary-muted": [
          "bg-secondary-muted text-secondary-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-hover-secondary-muted",
          "**:[svg]:not-[[class*='text-']]:text-secondary-muted-foreground",
          "[--select-trigger-icon-text:var(--color-secondary-muted-foreground)]",
          "data-[placeholder]:text-secondary-muted-foreground",
          "disabled:bg-muted disabled:text-accent-foreground disabled:[--select-trigger-icon-text:var(--color-muted-foreground)] disabled:data-[placeholder]:text-muted-foreground disabled:**:[svg]:not-[[class*='text-']]:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-secondary",
          "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted aria-invalid:data-[placeholder]:text-destructive-muted-foreground",
        ],
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
);

const selectItemVariants = cva(
  [
    "relative flex w-full flex-1 cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none",
    "data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground data-[disabled]:opacity-50",
    "**:[svg]:pointer-events-none **:[svg]:shrink-0 **:[svg]:not-[[class*='size-']]:size-4 **:[svg]:not-[[class*='text-']]:text-muted-foreground data-[highlighted]:**:[svg]:not-[[class*='text-']]:text-current",
    "*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
  ],
  {
    variants: {
      variant: {
        // -- base --
        accent:
          "data-[highlighted]:bg-muted data-[highlighted]:text-accent-foreground",

        surface:
          "data-[highlighted]:bg-faded data-[highlighted]:text-accent-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-border-faded data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-border-faded),inset_0_-1px_0_0_var(--color-border-faded)]",

        // -- primary --
        primary:
          "data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground data-[highlighted]:**:[[data-slot*='-indicator']]:text-current",

        "primary-accent":
          "data-[highlighted]:bg-primary-muted data-[highlighted]:text-primary-accent-foreground",

        "primary-muted":
          "data-[highlighted]:bg-primary-muted data-[highlighted]:text-primary-muted-foreground",

        "primary-surface":
          "data-[highlighted]:bg-primary-faded data-[highlighted]:text-primary-accent-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-border-primary-faded data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-border-primary-faded),inset_0_-1px_0_0_var(--color-border-primary-faded)]",

        "primary-faded":
          "data-[highlighted]:bg-primary-faded data-[highlighted]:text-primary-muted-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-border-primary-faded data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-border-primary-faded),inset_0_-1px_0_0_var(--color-border-primary-faded)]",

        // -- secondary --
        secondary:
          "data-[highlighted]:bg-secondary data-[highlighted]:text-secondary-foreground data-[highlighted]:**:[[data-slot*='-indicator']]:text-current",

        "secondary-accent":
          "data-[highlighted]:bg-secondary-muted data-[highlighted]:text-secondary-accent-foreground",

        "secondary-muted":
          "data-[highlighted]:bg-secondary-muted data-[highlighted]:text-secondary-muted-foreground",

        "secondary-surface":
          "data-[highlighted]:bg-secondary-faded data-[highlighted]:text-secondary-accent-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-border-secondary-faded data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-border-secondary-faded),inset_0_-1px_0_0_var(--color-border-secondary-faded)]",

        "secondary-faded":
          "data-[highlighted]:bg-secondary-faded data-[highlighted]:text-secondary-muted-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-border-secondary-faded data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-border-secondary-faded),inset_0_-1px_0_0_var(--color-border-secondary-faded)]",

        // -- destructive --
        destructive:
          "data-[highlighted]:bg-destructive data-[highlighted]:text-destructive-foreground data-[highlighted]:**:[[data-slot*='-indicator']]:text-current",

        "destructive-accent":
          "data-[highlighted]:bg-destructive-muted data-[highlighted]:text-destructive-accent-foreground",

        "destructive-muted":
          "data-[highlighted]:bg-destructive-muted data-[highlighted]:text-destructive-muted-foreground",

        "destructive-surface":
          "data-[highlighted]:bg-destructive-faded data-[highlighted]:text-destructive-accent-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-border-destructive-faded data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-border-destructive-faded),inset_0_-1px_0_0_var(--color-border-destructive-faded)]",

        "destructive-faded":
          "data-[highlighted]:bg-destructive-faded data-[highlighted]:text-destructive-muted-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-border-destructive-faded data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-border-destructive-faded),inset_0_-1px_0_0_var(--color-border-destructive-faded)]",
      },
      width: {
        default: "",
        full: "-mx-1 w-[calc(100%_+_--spacing(2))] rounded-none pr-9 pl-3",
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

const selectItemIndicatorVariants = cva(
  [
    "pointer-events-none absolute right-2 flex size-4 items-center justify-center",
    "data-[width=full]:right-3",
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
      defaultVariants: {
        variant: "default",
      },
    },
  }
);

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  variant = "outline",
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> &
  VariantProps<typeof selectTriggerVariants>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(selectTriggerVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon data-slot="select-trigger-icon" asChild>
        <ChevronsUpDownIcon className="text-(--select-trigger-icon-text)/60" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

type SelectVariantsType = VariantProps<typeof selectItemVariants> & {
  indicatorVariant?: VariantProps<
    typeof selectItemIndicatorVariants
  >["variant"];
};

type SelectContextProps = SelectVariantsType &
  Pick<React.ComponentProps<typeof SelectPrimitive.Content>, "position">;

const SelectContext = React.createContext<SelectContextProps>({});

function SelectContent({
  className,
  position = "popper",
  align = "center",
  variant = "accent",
  width = "default",
  indicatorVariant = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content> & SelectVariantsType) {
  return (
    <SelectContext.Provider
      value={{ variant, width, indicatorVariant, position }}
    >
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          data-slot="select-content"
          position={position}
          align={align}
          sideOffset={position === "popper" ? 4 : 0}
          className={cn(
            "relative isolate z-50 max-h-(--radix-select-content-available-height) min-w-[max(var(--radix-select-trigger-width),--spacing(32))] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-border bg-popover text-popover-foreground shadow-md",
            // FIXME: exit animations ain't working
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
            position === "popper" && [
              "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=open]:animate-in data-[state=open]:ease-out data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            ],
            className
          )}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.Viewport
            className={cn(
              position === "popper" && "flex w-full flex-1 flex-col p-1"
            )}
          >
            {children}
          </SelectPrimitive.Viewport>
          <SelectScrollDownButton />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectContext.Provider>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-2 py-1.5 text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

type SelectItemProps = React.ComponentProps<typeof SelectPrimitive.Item> &
  SelectVariantsType & {
    classNames?: {
      item?: string;
      indicator?: string;
    };
  };

function SelectItem({
  className,
  variant,
  width,
  indicatorVariant,
  classNames,
  children,
  ...props
}: SelectItemProps) {
  const context = React.useContext(SelectContext);

  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      data-width={width || context.width}
      data-position={context.position}
      className={cn(
        selectItemVariants({
          variant: variant || context.variant,
          width: width || context.width,
        }),
        classNames?.item,
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemIndicator
        data-slot="select-item-indicator"
        data-item-variant={variant || context.variant}
        data-width={width || context.width}
        data-position={context.position}
        className={cn(
          selectItemIndicatorVariants({
            variant: indicatorVariant || context.indicatorVariant,
          }),
          classNames?.indicator
        )}
      >
        <CheckIcon className="size-4 text-current" />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText className="flex-1">
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "fixed top-0 left-0 z-10 flex w-full cursor-default items-center justify-center bg-gradient-to-b from-popover to-popover/10 py-2 text-popover-foreground",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4 -translate-y-1" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "fixed bottom-0 left-0 z-10 flex w-full cursor-default items-center justify-center bg-gradient-to-t from-popover to-popover/10 py-2 text-popover-foreground",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4 translate-y-1" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  selectTriggerVariants,
  selectItemVariants,
  selectItemIndicatorVariants,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
