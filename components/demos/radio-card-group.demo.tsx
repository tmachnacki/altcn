"use client";

import * as React from "react";

import { Label } from "~/components/ui/label";
import {
  RadioCard,
  RadioCardContent,
  RadioCardDescription,
  RadioCardGroup,
  RadioCardLabel,
  RadioCardRadio,
  radioCardVariants,
} from "~/components/ui/radio-card-group";
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

type Variant = keyof typeof radioCardVariants.variants.variant;
const variants = Object.keys(radioCardVariants.variants.variant) as Variant[];

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

export function RadioCardGroupDemo() {
  const [variant, setVariant] = React.useState<Variant>("primary");
  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <>
      <ComponentContainer>
        <fieldset className="w-full max-w-sm">
          <legend className="sr-only">Select a plan</legend>
          <RadioCardGroup variant={variant} className="grid w-full gap-3">
            {plans.map((plan) => (
              <RadioCard key={plan.id} variant={variant}>
                <RadioCardRadio
                  value={plan.id}
                  aria-labelledby={`${plan.id}-label`}
                  aria-describedby={`${plan.id}-description`}
                  disabled={disabled}
                  aria-invalid={invalid}
                />
                <RadioCardContent>
                  <RadioCardLabel id={`${plan.id}-label`}>
                    {plan.name}
                  </RadioCardLabel>
                  <RadioCardDescription id={`${plan.id}-description`}>
                    {plan.description}
                  </RadioCardDescription>
                </RadioCardContent>
              </RadioCard>
            ))}
            {/* centered */}
            <RadioCard variant={variant} className="items-center">
              <RadioCardRadio
                value="centered"
                aria-labelledby="centered-label"
                disabled={disabled}
                aria-invalid={invalid}
              />
              <RadioCardContent className="flex items-center">
                <RadioCardLabel id="centered-label">Centered</RadioCardLabel>
              </RadioCardContent>
            </RadioCard>
          </RadioCardGroup>
        </fieldset>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="radio-cards-variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
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
        <div className="flex items-center gap-3">
          <Switch
            id="radio-cards-invalid"
            checked={invalid}
            onCheckedChange={setInvalid}
          />
          <Label htmlFor="radio-cards-invalid">Invalid</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="radio-cards-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="radio-cards-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
