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
import { ComponentContainer } from "~/components/demos/component-container";
import { ComponentPlayground } from "~/components/demos/component-playground";

export function AccordionDemo() {
  const [accordionVariant, setAccordionVariant] = React.useState("outline");

  const accordionVariants = [
    "outline",
    "muted",
    "faded",
    "primary-muted",
    "primary-faded",
    "secondary-muted",
    "secondary-faded",
  ] as const;

  return (
    <>
      <ComponentContainer>
        <div className="grid w-full max-w-xl gap-4">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            variant={accordionVariant as (typeof accordionVariants)[number]}
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
          <Accordion
            type="single"
            collapsible
            className="w-full"
            variant={accordionVariant as (typeof accordionVariants)[number]}
            split
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
        <div className="flex flex-col gap-2">
          <Label htmlFor="accordion-variant">Accordion Variant</Label>
          <Select
            value={accordionVariant}
            onValueChange={setAccordionVariant}
            defaultValue="default"
          >
            <SelectTrigger id="accordion-variant" className="w-full">
              <SelectValue>{accordionVariant}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {accordionVariants.map((accordionVariant) => (
                <SelectItem key={accordionVariant} value={accordionVariant}>
                  {accordionVariant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
