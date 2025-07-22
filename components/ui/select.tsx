"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { tv, type VariantProps } from "tailwind-variants";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { cn } from "~/lib/utils";

const selectTriggerVariants = tv({
  base: [
    "peer flex w-fit items-center justify-between rounded-md whitespace-nowrap",

    "disabled:pointer-events-none disabled:opacity-50",

    "**:[svg]:pointer-events-none **:[svg]:shrink-0 **:[svg]:grow-0",

    "*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center",

    "aria-invalid:text-destructive-accent-foreground aria-invalid:**:[svg]:not-[[class*='text-']]:text-destructive-muted-foreground",
  ],
  variants: {
    size: {
      sm: [
        "[--gap:--spacing(2)]",
        "h-(--size-md) sm:h-(--size-sm)",
        "text-sm",
        "gap-(--gap) px-2.5 py-1.5",
        "*:data-[slot=select-value]:gap-(--gap)",
        "**:[svg]:not-[[class*='size-']]:size-(--icon-md) sm:**:[svg]:not-[[class*='size-']]:size-(--icon-sm)",
      ],
      md: [
        "[--gap:--spacing(2)]",
        "h-(--size-lg) sm:h-(--size-md)",
        "text-base sm:text-sm",
        "gap-(--gap) px-3 py-2",
        "*:data-[slot=select-value]:gap-(--gap)",
        "**:[svg]:not-[[class*='size-']]:size-(--icon-lg) sm:**:[svg]:not-[[class*='size-']]:size-(--icon-md)",
      ],
      lg: [
        "[--gap:--spacing(2.5)]",
        "h-(--size-xl) sm:h-(--size-lg)",
        "text-lg sm:text-base",
        "gap-(--gap) px-3.5 py-2.5",
        "*:data-[slot=select-value]:gap-(--gap)",
        "**:[svg]:not-[[class*='size-']]:size-(--icon-xl) sm:**:[svg]:not-[[class*='size-']]:size-(--icon-lg)",
      ],
    },
    variant: {
      // -- base --
      outline: [
        "bg-background text-accent-foreground shadow-xs outline-1 -outline-offset-1 outline-border hover:not-focus-visible:not-aria-invalid:outline-hover-border dark:bg-faded",

        "**:[svg]:not-[[class*='text-']]:text-muted-foreground",

        "data-[placeholder]:text-placeholder",

        "disabled:bg-faded disabled:shadow-none",

        "focus-visible:outline-2 focus-visible:outline-primary",

        "aria-invalid:outline-destructive aria-invalid:disabled:bg-destructive-faded aria-invalid:data-[placeholder]:text-destructive-placeholder dark:aria-invalid:bg-destructive-faded",
      ],

      muted: [
        "bg-muted text-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-hover-muted",

        "**:[svg]:not-[[class*='text-']]:text-muted-foreground",

        "data-[placeholder]:text-placeholder",

        "focus-visible:outline-2 focus-visible:outline-primary",

        "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive hover:aria-invalid:not-focus-visible:bg-hover-destructive-muted aria-invalid:data-[placeholder]:text-destructive-placeholder",
      ],

      underlined: [
        "rounded-none bg-transparent px-0.5 shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:not-focus-visible:not-aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",

        "**:[svg]:not-[[class*='text-']]:text-muted-foreground",

        "data-[placeholder]:text-placeholder",

        "focus-visible:shadow-[inset_0_-2px_0_0_var(--color-primary)]",

        "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:focus-visible:shadow-[inset_0_-2px_0_0_var(--color-destructive)] aria-invalid:data-[placeholder]:text-destructive-placeholder",
      ],

      // -- primary --
      "primary-muted": [
        "bg-primary-muted text-primary-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-hover-primary-muted",

        "**:[svg]:not-[[class*='text-']]:text-primary-muted-foreground",

        "data-[placeholder]:text-primary-placeholder",

        "disabled:bg-muted disabled:text-accent-foreground disabled:data-[placeholder]:text-placeholder disabled:**:[svg]:not-[[class*='text-']]:text-muted-foreground",

        "focus-visible:outline-2 focus-visible:outline-primary",

        "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive hover:aria-invalid:not-focus-visible:bg-hover-destructive-muted aria-invalid:data-[placeholder]:text-destructive-placeholder",
      ],

      // -- secondary --
      "secondary-muted": [
        "bg-secondary-muted text-secondary-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-hover-secondary-muted",

        "**:[svg]:not-[[class*='text-']]:text-secondary-muted-foreground",

        "data-[placeholder]:text-secondary-placeholder",

        "disabled:bg-muted disabled:text-accent-foreground disabled:data-[placeholder]:text-placeholder disabled:**:[svg]:not-[[class*='text-']]:text-muted-foreground",

        "focus-visible:outline-2 focus-visible:outline-secondary",

        "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive hover:aria-invalid:not-focus-visible:bg-hover-destructive-muted aria-invalid:data-[placeholder]:text-destructive-placeholder",
      ],
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
});

const selectContentVariants = tv({
  base: [
    "[--inset-p:--spacing(9)] [--select-content-px:--spacing(1)] [--select-item-px:--spacing(2)] sm:[--inset-p:--spacing(8)]",
    "relative isolate z-50 block rounded-md border border-border text-popover-foreground shadow-md",
    "max-h-(--radix-select-content-available-height) min-w-[max(var(--radix-select-trigger-width),--spacing(32))] origin-(--radix-select-content-transform-origin)",
  ],
  variants: {
    variant: {
      solid: "bg-popover",
      translucent: "bg-popover-translucent backdrop-blur-popover-translucent",
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

const selectItemVariants = tv({
  base: [
    "relative flex w-full flex-1 cursor-default items-center gap-2.5 rounded-sm py-1.5 pr-(--inset-p) pl-(--select-item-px) text-base outline-hidden select-none data-[position=item-aligned]:pr-(--select-item-px) data-[position=item-aligned]:pl-(--inset-p) sm:gap-2 sm:text-sm",

    "data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground data-[disabled]:opacity-50 data-[disabled]:**:[[data-slot*='-indicator']]:text-muted-foreground",

    "**:[svg]:pointer-events-none **:[svg]:shrink-0 **:[svg]:not-[[class*='size-']]:size-(--icon-lg) **:[svg]:not-[[class*='text-']]:text-muted-foreground data-[highlighted]:**:[svg]:not-[[class*='text-']]:text-current sm:**:[svg]:not-[[class*='size-']]:size-(--icon-md)",

    "*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2.5 sm:*:[span]:last:gap-2",
  ],
  variants: {
    variant: {
      // -- base --
      contrast: [
        "data-[highlighted]:bg-contrast data-[highlighted]:text-contrast-foreground",
      ],

      base: "data-[highlighted]:bg-base-bg data-[highlighted]:text-base-foreground",

      accent:
        "data-[highlighted]:bg-muted data-[highlighted]:text-accent-foreground",

      surface:
        "data-[highlighted]:bg-faded data-[highlighted]:text-accent-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-faded-border data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-faded-border),inset_0_-1px_0_0_var(--color-faded-border)]",

      // -- primary --
      primary:
        "data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground data-[highlighted]:**:[[data-slot*='-indicator']]:text-current",

      "primary-accent":
        "data-[highlighted]:bg-primary-muted data-[highlighted]:text-primary-accent-foreground",

      "primary-muted":
        "data-[highlighted]:bg-primary-muted data-[highlighted]:text-primary-muted-foreground",

      "primary-surface":
        "data-[highlighted]:bg-primary-faded data-[highlighted]:text-primary-accent-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-primary-faded-border data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-primary-faded-border),inset_0_-1px_0_0_var(--color-primary-faded-border)]",

      "primary-faded":
        "data-[highlighted]:bg-primary-faded data-[highlighted]:text-primary-muted-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-primary-faded-border data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-primary-faded-border),inset_0_-1px_0_0_var(--color-primary-faded-border)]",

      // -- secondary --
      secondary:
        "data-[highlighted]:bg-secondary data-[highlighted]:text-secondary-foreground data-[highlighted]:**:[[data-slot*='-indicator']]:text-current",

      "secondary-accent":
        "data-[highlighted]:bg-secondary-muted data-[highlighted]:text-secondary-accent-foreground",

      "secondary-muted":
        "data-[highlighted]:bg-secondary-muted data-[highlighted]:text-secondary-muted-foreground",

      "secondary-surface":
        "data-[highlighted]:bg-secondary-faded data-[highlighted]:text-secondary-accent-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-secondary-faded-border data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-secondary-faded-border),inset_0_-1px_0_0_var(--color-secondary-faded-border)]",

      "secondary-faded":
        "data-[highlighted]:bg-secondary-faded data-[highlighted]:text-secondary-muted-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-secondary-faded-border data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-secondary-faded-border),inset_0_-1px_0_0_var(--color-secondary-faded-border)]",

      // -- destructive --
      destructive:
        "data-[highlighted]:bg-destructive data-[highlighted]:text-destructive-foreground data-[highlighted]:**:[[data-slot*='-indicator']]:text-current",

      "destructive-accent":
        "data-[highlighted]:bg-destructive-muted data-[highlighted]:text-destructive-accent-foreground",

      "destructive-muted":
        "data-[highlighted]:bg-destructive-muted data-[highlighted]:text-destructive-muted-foreground",

      "destructive-surface":
        "data-[highlighted]:bg-destructive-faded data-[highlighted]:text-destructive-accent-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-destructive-faded-border data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-destructive-faded-border),inset_0_-1px_0_0_var(--color-destructive-faded-border)]",

      "destructive-faded":
        "data-[highlighted]:bg-destructive-faded data-[highlighted]:text-destructive-muted-foreground data-[highlighted]:data-[width=default]:inset-ring data-[highlighted]:data-[width=default]:inset-ring-destructive-faded-border data-[highlighted]:data-[width=full]:shadow-[inset_0_1px_0_0_var(--color-destructive-faded-border),inset_0_-1px_0_0_var(--color-destructive-faded-border)]",
    },
    width: {
      default: "",
      full: "-mx-(--select-content-px) w-[calc(100%_+_(var(--select-content-px)*2))] rounded-none pr-[calc(var(--inset-p)+var(--select-content-px))] pl-[calc(var(--select-content-px)+var(--select-item-px))] data-[position=item-aligned]:pr-[calc(var(--select-content-px)+var(--select-item-px))] data-[position=item-aligned]:pl-[calc(var(--inset-p)+var(--select-content-px))]",
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
});

const selectItemIndicatorVariants = tv({
  base: [
    "pointer-events-none absolute right-(--select-item-px) inline-flex size-(--icon-lg) items-center justify-center data-[position=item-aligned]:left-(--select-item-px) sm:size-(--icon-md)",
    "data-[width=full]:right-[calc(var(--select-content-px)+var(--select-item-px))] data-[position=item-aligned]:data-[width=full]:left-[calc(var(--select-content-px)+var(--select-item-px))]",
  ],
  variants: {
    variant: {
      base: "text-subtle-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      destructive: "text-destructive",
      success: "text-success",
      warning: "text-warning",
    },
    defaultVariants: {
      variant: "base",
    },
  },
});

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
  size = "md",
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="-mr-1"
        >
          <path
            fillRule="evenodd"
            d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

type SelectVariants = {
  variants?: {
    content?: VariantProps<typeof selectContentVariants>["variant"];
    item?: VariantProps<typeof selectItemVariants>["variant"];
    indicator?: VariantProps<typeof selectItemIndicatorVariants>["variant"];
  };
  width?: VariantProps<typeof selectItemVariants>["width"];
};

type SelectContextProps = SelectVariants &
  Pick<React.ComponentProps<typeof SelectPrimitive.Content>, "position">;

const SelectContext = React.createContext<SelectContextProps>({});

function SelectContent({
  className,
  position = "popper",
  align = "center",
  variants,
  width = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content> & SelectVariants) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        align={align}
        sideOffset={position === "popper" ? 4 : 0}
        className={cn(
          selectContentVariants({ variant: variants?.content }),
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
        <SelectPrimitive.Viewport className="flex w-full flex-1 flex-col p-1">
          <SelectContext.Provider value={{ variants, width, position }}>
            {children}
          </SelectContext.Provider>
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  const { position } = React.useContext(SelectContext);
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      data-position={position}
      className={cn(
        "px-(--select-item-px) py-1.5 text-sm font-normal text-muted-foreground data-[position=item-aligned]:pl-(--inset-p) sm:text-xs",
        className
      )}
      {...props}
    />
  );
}

type SelectItemProps = React.ComponentProps<typeof SelectPrimitive.Item> & {
  variants?: {
    item?: VariantProps<typeof selectItemVariants>["variant"];
    indicator?: VariantProps<typeof selectItemIndicatorVariants>["variant"];
  };
  width?: VariantProps<typeof selectItemVariants>["width"];
  classNames?: {
    item?: string;
    indicator?: string;
  };
};

function SelectItem({
  className,
  variants,
  width,
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
          variant: variants?.item || context.variants?.item,
          width: width || context.width,
        }),
        classNames?.item,
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemIndicator
        data-slot="select-item-indicator"
        data-width={width || context.width}
        data-position={context.position}
        className={cn(
          selectItemIndicatorVariants({
            variant: variants?.indicator || context.variants?.indicator,
          }),
          classNames?.indicator
        )}
      >
        <CheckIcon className="size-(--icon-lg) text-current sm:size-(--icon-md)" />
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
      className={cn(
        "pointer-events-none -mx-(--select-content-px) my-1 h-px bg-border",
        className
      )}
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
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-(--icon-lg) sm:size-(--icon-md)" />
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
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-(--icon-lg) sm:size-(--icon-md)" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  selectTriggerVariants,
  selectContentVariants,
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
