"use client";

import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  accordionVariants,
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

type Variant = keyof typeof accordionVariants.variants.variant;
const variants = Object.keys(accordionVariants.variants.variant) as Variant[];

const spacings = ["compact", "split"] as const;

export function AccordionDemo() {
  const [variant, setVariant] = React.useState("outline");
  const [spacing, setSpacing] = React.useState("compact");

  return (
    <>
      <ComponentContainer>
        <div className="grid w-full max-w-xl gap-4">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            variant={variant as Variant}
            spacing={spacing as (typeof spacings)[number]}
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
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="accordion-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {variants.map((variant) => (
                <SelectItem key={`accordion-${variant}`} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="accordion-spacing">Spacing</Label>
          <Select value={spacing} onValueChange={setSpacing}>
            <SelectTrigger id="accordion-spacing" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {spacings.map((spacing) => (
                <SelectItem key={`accordion-${spacing}`} value={spacing}>
                  {spacing}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
