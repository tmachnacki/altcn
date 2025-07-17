"use client";

import * as React from "react";

import {
  CheckboxCards,
  CheckboxCardsItem,
  CheckboxCardsItemCheckbox,
  CheckboxCardsItemContent,
  CheckboxCardsItemDescription,
  CheckboxCardsItemLabel,
  checkboxCardsItemVariants,
} from "~/components/ui/checkbox-cards";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

type Variant = keyof typeof checkboxCardsItemVariants.variants.variant;
const variants = Object.keys(
  checkboxCardsItemVariants.variants.variant
) as Variant[];

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
];

export function CheckboxCardsDemo() {
  const [variant, setVariant] = React.useState("primary");
  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <>
      <ComponentContainer>
        <fieldset className="w-full max-w-sm">
          <legend className="sr-only">Select a plan</legend>
          <CheckboxCards
            variant={variant as Variant}
            className="grid w-full gap-3"
          >
            {plans.map((plan) => (
              <CheckboxCardsItem key={plan.id} variant={variant as Variant}>
                <CheckboxCardsItemCheckbox
                  disabled={disabled}
                  aria-invalid={invalid}
                  aria-labelledby={`${plan.id}-label`}
                  aria-describedby={`${plan.id}-description`}
                />
                <CheckboxCardsItemContent>
                  <CheckboxCardsItemLabel id={`${plan.id}-label`}>
                    {plan.name}
                  </CheckboxCardsItemLabel>
                  <CheckboxCardsItemDescription id={`${plan.id}-description`}>
                    {plan.description}
                  </CheckboxCardsItemDescription>
                </CheckboxCardsItemContent>
              </CheckboxCardsItem>
            ))}
            {/* centered */}
            <CheckboxCardsItem
              variant={variant as Variant}
              className="items-center"
            >
              <CheckboxCardsItemCheckbox
                disabled={disabled}
                aria-invalid={invalid}
                aria-labelledby="centered-label"
              />
              <CheckboxCardsItemContent>
                <CheckboxCardsItemLabel id="centered-label">
                  Centered
                </CheckboxCardsItemLabel>
              </CheckboxCardsItemContent>
            </CheckboxCardsItem>
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
        <div className="flex items-center gap-3">
          <Switch
            id="checkbox-cards-invalid"
            checked={invalid}
            onCheckedChange={setInvalid}
          />
          <Label htmlFor="checkbox-cards-invalid">Invalid</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="checkbox-cards-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="checkbox-cards-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
