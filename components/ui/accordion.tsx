"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronLeftIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const accordionItemVariants = cva(
  "group-hover/accordion:opacity-70 hover:!opacity-100 has-focus-visible:outline-2 group/accordion-item",
  {
    variants: {
      variant: {
        default: "border-b last:border-b-0",
        accent:
          "border-b bg-accent first:rounded-t-md last:rounded-b-md last:border-b-0",
        split: "mb-2 rounded-md bg-accent last:mb-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const AccordionVariantContext =
  React.createContext<VariantProps<typeof accordionItemVariants>["variant"]>(
    "default",
  );

function Accordion({
  variant,
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> &
  VariantProps<typeof accordionItemVariants>) {
  return (
    <AccordionVariantContext.Provider value={variant}>
      <AccordionPrimitive.Root
        data-slot="accordion"
        className={cn("group/accordion", className)}
        {...props}
      />
    </AccordionVariantContext.Provider>
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  const variant = React.useContext(AccordionVariantContext);
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      data-variant={variant}
      className={cn(accordionItemVariants({ variant }), className)}
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
          "group/accordion-trigger flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          "group-data-[variant=accent]/accordion-item:px-3 group-data-[variant=split]/accordion-item:px-3",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronLeftIcon className="pointer-events-none size-4 shrink-0 translate-y-0.5 text-current transition-transform duration-200 group-data-[state=open]/accordion-trigger:rotate-90" />
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
      <div
        className={cn(
          "pt-0 pb-4",
          "group-data-[variant=accent]/accordion-item:px-3 group-data-[variant=split]/accordion-item:px-3",
          className,
        )}
      >
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
