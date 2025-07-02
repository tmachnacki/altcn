"use client";

import * as React from "react";

import {
  CheckboxCards,
  CheckboxCardsItem,
  CheckboxCardsItemCheckbox,
  CheckboxCardsItemContent,
} from "~/components/ui/checkbox-cards";
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

const variants = ["primary", "secondary"] as const;

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

export function CheckboxCardsDemo() {
  const [variant, setVariant] = React.useState("primary");

  return (
    <>
      <ComponentContainer>
        <fieldset className="w-full max-w-sm">
          <legend className="sr-only">Select a plan</legend>
          <CheckboxCards
            variant={variant as (typeof variants)[number]}
            className="w-full grid gap-3"
          >
            {plans.map((plan) => (
              <CheckboxCardsItem
                key={plan.id}
                variant={variant as (typeof variants)[number]}
              >
                <CheckboxCardsItemCheckbox
                  disabled={plan.id === "disabled"}
                  aria-invalid={plan.id === "invalid"}
                />
                <CheckboxCardsItemContent className="flex flex-col gap-2">
                  <span className="block font-medium text-(--accent-text)">
                    {plan.name}
                  </span>
                  <span className="block text-(--muted-text)">
                    {plan.description}
                  </span>
                </CheckboxCardsItemContent>
              </CheckboxCardsItem>
            ))}
          </CheckboxCards>
        </fieldset>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="checkbox-cards-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="checkbox-cards-variant" className="w-full">
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
