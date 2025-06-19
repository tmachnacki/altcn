"use client";

import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

const accordionVariants = [
  "outline",
  "muted",
  "faded",
  "primary-muted",
  "primary-faded",
  "secondary-muted",
  "secondary-faded",
] as const;

const accordionLayouts = ["compact", "split"] as const;

export function AccordionDemo() {
  const [accordionVariant, setAccordionVariant] = React.useState("outline");
  const [accordionLayout, setAccordionLayout] = React.useState("compact");

  return (
    <>
      <ComponentContainer>
        <div className="grid w-full max-w-xl gap-4">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            variant={accordionVariant as (typeof accordionVariants)[number]}
            layout={accordionLayout as (typeof accordionLayouts)[number]}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="accordion-variant">Variant</Label>
          <Select value={accordionVariant} onValueChange={setAccordionVariant}>
            <SelectTrigger id="accordion-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {accordionVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="accordion-layout">Layout</Label>
          <Select value={accordionLayout} onValueChange={setAccordionLayout}>
            <SelectTrigger id="accordion-layout" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {accordionLayouts.map((layout) => (
                <SelectItem key={layout} value={layout}>
                  {layout}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
