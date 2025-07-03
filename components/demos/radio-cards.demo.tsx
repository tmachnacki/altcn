"use client";

import * as React from "react";

import { Label } from "~/components/ui/label";
import {
  RadioCards,
  RadioCardsItem,
  RadioCardsItemContent,
  RadioCardsItemDescription,
  RadioCardsItemLabel,
  RadioCardsItemRadio,
} from "~/components/ui/radio-cards";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

const variants = ["base", "primary", "secondary"] as const;

const plans = [
  {
    id: "premium",
    name: "Premium",
    description: "Advanced options for growing needs.",
  },
  {
    id: "deluxe",
    name: "Deluxe",
    description: "Top-tier features for maximum performance.",
  },
  {
    id: "ultimate",
    name: "Ultimate",
    description: "All inclusive plan with every feature available.",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Customized solutions for large-scale projects.",
  },
  {
    id: "disabled",
    name: "Disabled",
    description: "This is a description of a disabled plan.",
  },
  {
    id: "invalid",
    name: "Invalid",
    description: "This is a description of an invalid plan.",
  },
];

export function RadioCardsDemo() {
  const [variant, setVariant] = React.useState("primary");

  return (
    <>
      <ComponentContainer>
        <fieldset className="w-full max-w-sm">
          <legend className="sr-only">Select a plan</legend>
          <RadioCards
            variant={variant as (typeof variants)[number]}
            className="grid w-full gap-3"
          >
            {plans.map((plan) => (
              <RadioCardsItem
                key={plan.id}
                variant={variant as (typeof variants)[number]}
              >
                <RadioCardsItemRadio
                  value={plan.id}
                  disabled={plan.id === "disabled"}
                  aria-invalid={plan.id === "invalid"}
                />
                <RadioCardsItemContent className="flex flex-col gap-1">
                  <RadioCardsItemLabel>{plan.name}</RadioCardsItemLabel>
                  <RadioCardsItemDescription>
                    {plan.description}
                  </RadioCardsItemDescription>
                </RadioCardsItemContent>
              </RadioCardsItem>
            ))}
            {/* centered */}
            <RadioCardsItem
              variant={variant as (typeof variants)[number]}
              className="items-center"
            >
              <RadioCardsItemRadio value="centered" />
              <RadioCardsItemContent className="flex items-center">
                <RadioCardsItemLabel>Centered</RadioCardsItemLabel>
              </RadioCardsItemContent>
            </RadioCardsItem>
          </RadioCards>
        </fieldset>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="radio-cards-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="radio-cards-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {variants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
