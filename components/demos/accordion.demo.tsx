"use client";

import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

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
            layout="split"
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
        <fieldset>
          <div className="flex flex-col gap-4">
            <legend className="text-base leading-none font-semibold">
              Accordion Variant
            </legend>
            <RadioGroup
              onValueChange={setAccordionVariant}
              defaultValue={accordionVariant}
            >
              {accordionVariants.map((variant) => (
                <div key={variant} className="flex items-center gap-3">
                  <RadioGroupItem value={variant} id={variant} />
                  <Label htmlFor={variant}>{variant}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </fieldset>
      </ComponentPlayground>
    </>
  );
}
