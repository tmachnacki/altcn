"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronLeftIcon } from "lucide-react";

import { cn } from "~/lib/utils";

const accordionItemVariants = cva(
  "border-b -outline-offset-1 [--accordion-item-px:--spacing(3)] first:rounded-t-md last:rounded-b-md last:border-b-0 has-focus-visible:outline-2 data-[spacing=split]:mb-2 data-[spacing=split]:rounded-md data-[spacing=split]:last:mb-0",
  {
    variants: {
      variant: {
        // -- base --
        outline:
          "border-border not-data-[spacing=split]:[--accordion-item-px:--spacing(0)] data-[spacing=split]:border",

        muted: "border-border bg-muted data-[spacing=split]:border-0",

        faded: "border-border-faded bg-faded data-[spacing=split]:border",

        // -- primary --
        "primary-muted":
          "border-primary-border-faded bg-primary-muted data-[spacing=split]:border-0",

        "primary-faded":
          "border-primary-border-faded bg-primary-faded data-[spacing=split]:border",

        // -- secondary --
        "secondary-muted":
          "border-secondary-border-faded bg-secondary-muted data-[spacing=split]:border-0",

        "secondary-faded":
          "border-secondary-border-faded bg-secondary-faded data-[spacing=split]:border",
      },
    },
    compoundVariants: [
      {
        variant: ["outline", "muted", "faded"],
        className:
          "[--accordion-content-text:var(--color-muted-foreground)] [--accordion-trigger-text:var(--color-accent-foreground)]",
      },
      {
        variant: ["primary-muted", "primary-faded"],
        className:
          "outline-primary [--accordion-content-text:var(--color-primary-muted-foreground)] [--accordion-trigger-text:var(--color-primary-accent-foreground)]",
      },
      {
        variant: ["secondary-muted", "secondary-faded"],
        className:
          "outline-secondary [--accordion-content-text:var(--color-secondary-muted-foreground)] [--accordion-trigger-text:var(--color-secondary-accent-foreground)]",
      },
    ],

    defaultVariants: {
      variant: "outline",
    },
  }
);

type AccordionContextProps = VariantProps<typeof accordionItemVariants> & {
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
      className={cn(
        accordionItemVariants({ variant }),
        "group/accordion-item",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex flex-1 items-start justify-between gap-4 rounded-md px-(--accordion-item-px) py-4 text-left text-sm font-medium text-(--accordion-trigger-text) transition-all hover:underline focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none",
          className
        )}
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
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm text-(--accordion-content-text) data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none"
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
  accordionItemVariants,
};
