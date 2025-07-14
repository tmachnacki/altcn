"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { tv, type VariantProps } from "tailwind-variants";
import { ChevronLeftIcon } from "lucide-react";

import { cn } from "~/lib/utils";

const accordionVariants = tv({
  slots: {
    item: [
      "[--accordion-item-px:--spacing(3)]",
      "border-b -outline-offset-1 first:rounded-t-md last:rounded-b-md last:border-b-0 data-[spacing=split]:mb-2 data-[spacing=split]:rounded-md data-[spacing=split]:last:mb-0",
      "has-focus-visible:outline-2",
    ],
    trigger: [
      "flex flex-1 items-start justify-between gap-4 rounded-md px-(--accordion-item-px) py-4 text-left text-sm font-medium transition-all",
      "hover:underline",
      "focus-visible:outline-none",
      "disabled:pointer-events-none disabled:opacity-50",
      "motion-reduce:transition-none",
    ],
    content: [
      "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      "motion-reduce:animate-none",
    ],
  },
  variants: {
    variant: {
      // -- base --
      outline: {
        item: "border-border outline-outline not-data-[spacing=split]:[--accordion-item-px:--spacing(0)] data-[spacing=split]:border",
        trigger: "text-accent-foreground",
        content: "text-muted-foreground",
      },
      muted: {
        item: "border-border bg-muted outline-outline data-[spacing=split]:border-0",
        trigger: "text-accent-foreground",
        content: "text-muted-foreground",
      },
      faded: {
        item: "border-faded-border bg-faded outline-outline data-[spacing=split]:border",
        trigger: "text-accent-foreground",
        content: "text-muted-foreground",
      },

      // -- primary --
      "primary-muted": {
        item: "border-primary-faded-border bg-primary-muted outline-primary data-[spacing=split]:border-0",
        trigger: "text-primary-accent-foreground",
        content: "text-primary-muted-foreground",
      },
      "primary-faded": {
        item: "border-primary-faded-border bg-primary-faded outline-primary data-[spacing=split]:border",
        trigger: "text-primary-accent-foreground",
        content: "text-primary-muted-foreground",
      },

      // -- secondary --
      "secondary-muted": {
        item: "border-secondary-faded-border bg-secondary-muted outline-secondary data-[spacing=split]:border-0",
        trigger: "text-secondary-accent-foreground",
        content: "text-secondary-muted-foreground",
      },
      "secondary-faded": {
        item: "border-secondary-faded-border bg-secondary-faded outline-secondary data-[spacing=split]:border",
        trigger: "text-secondary-accent-foreground",
        content: "text-secondary-muted-foreground",
      },
    },
  },
  defaultVariants: {
    variant: "outline",
  },
});

type AccordionContextProps = VariantProps<typeof accordionVariants> & {
  spacing?: "compact" | "split";
};

const AccordionContext = React.createContext<AccordionContextProps>({});

function Accordion({
  variant = "outline",
  spacing = "compact",
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> &
  AccordionContextProps) {
  return (
    <AccordionPrimitive.Root data-slot="accordion" {...props}>
      <AccordionContext.Provider value={{ variant, spacing }}>
        {children}
      </AccordionContext.Provider>
    </AccordionPrimitive.Root>
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  const { variant, spacing } = React.useContext(AccordionContext);
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      data-spacing={spacing}
      className={accordionVariants().item({
        variant,
        className: ["group/accordion-item", className],
      })}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  const { variant } = React.useContext(AccordionContext);
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={accordionVariants().trigger({
          variant,
          className: ["group/accordion-trigger", className],
        })}
        {...props}
      >
        {children}
        <ChevronLeftIcon className="pointer-events-none size-4 shrink-0 translate-y-0.5 text-current transition-transform duration-200 group-data-[state=open]/accordion-trigger:-rotate-90 motion-reduce:transition-none" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  const { variant } = React.useContext(AccordionContext);
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={accordionVariants().content({ variant })}
      {...props}
    >
      <div className={cn("px-(--accordion-item-px) pt-0 pb-4", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionVariants,
};
