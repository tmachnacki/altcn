"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronLeftIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const accordionItemVariants = cva(
  "border-b first:rounded-t-md last:rounded-b-md last:border-b-0 has-focus-visible:outline-2 **:data-[slot=accordion-content]:px-3 **:data-[slot=accordion-trigger]:px-3 data-[split]:mb-2 data-[split]:rounded-md data-[split]:last:mb-0",
  {
    variants: {
      variant: {
        // -- base --
        default:
          "border-border not-data-[split]:**:data-[slot=accordion-content]:px-0 not-data-[split]:**:data-[slot=accordion-trigger]:px-0 data-[split]:border",

        muted:
          "border-border bg-muted **:data-[slot=accordion-trigger]:text-accent-foreground data-[split]:border-0",

        faded:
          "border-border-faded bg-faded **:data-[slot=accordion-trigger]:text-accent-foreground data-[split]:border",

        // -- primary --
        "primary-muted":
          "border-border-primary-faded bg-primary-muted data-[split]:border-0",

        "primary-faded":
          "border-border-primary-faded bg-primary-faded data-[split]:border",

        // -- secondary --
        "secondary-muted":
          "border-border-secondary-faded bg-secondary-muted data-[split]:border-0",

        "secondary-faded":
          "border-border-secondary-faded bg-secondary-faded data-[split]:border",
      },
    },
    compoundVariants: [
      {
        variant: ["default", "muted", "faded"],
        className: "**:data-[slot=accordion-content]:text-muted-foreground",
      },
      {
        variant: ["primary-muted", "primary-faded"],
        className:
          "has-focus-visible:outline-primary **:data-[slot=accordion-content]:text-primary-muted-foreground **:data-[slot=accordion-trigger]:text-primary-accent-foreground",
      },
      {
        variant: ["secondary-muted", "secondary-faded"],
        className:
          "has-focus-visible:outline-secondary **:data-[slot=accordion-content]:text-secondary-muted-foreground **:data-[slot=accordion-trigger]:text-secondary-accent-foreground",
      },
    ],

    defaultVariants: {
      variant: "default",
    },
  },
);

type AccordionVariantsContextType = VariantProps<
  typeof accordionItemVariants
> & {
  split?: boolean;
};

const AccordionVariantsContext =
  React.createContext<AccordionVariantsContextType>({
    variant: "default",
    split: undefined,
  });

function Accordion({
  variant = "default",
  split = undefined,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> &
  AccordionVariantsContextType) {
  return (
    <AccordionVariantsContext.Provider value={{ variant, split }}>
      <AccordionPrimitive.Root data-slot="accordion" {...props} />
    </AccordionVariantsContext.Provider>
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  const { variant, split } = React.useContext(AccordionVariantsContext);
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      data-variant={variant}
      data-split={split}
      className={cn(
        accordionItemVariants({ variant }),
        "group/accordion-item",
        className,
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
          "group/accordion-trigger flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all hover:underline focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none",
          className,
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
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
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
