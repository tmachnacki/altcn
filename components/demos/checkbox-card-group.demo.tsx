"use client";

import * as React from "react";

import {
  CheckboxCard,
  CheckboxCardCheckbox,
  CheckboxCardContent,
  CheckboxCardDescription,
  CheckboxCardGroup,
  CheckboxCardLabel,
  checkboxCardVariants,
} from "~/components/ui/checkbox-card-group";
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

type Variant = keyof typeof checkboxCardVariants.variants.variant;
const variants = Object.keys(
  checkboxCardVariants.variants.variant
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

export function CheckboxCardGroupDemo() {
  const [variant, setVariant] = React.useState<Variant>("primary");
  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <>
      <ComponentContainer>
        <fieldset className="w-full max-w-sm">
          <legend className="sr-only">Select a plan</legend>
          <CheckboxCardGroup variant={variant} className="grid w-full gap-3">
            {plans.map((plan) => (
              <CheckboxCard key={plan.id} variant={variant}>
                <CheckboxCardCheckbox
                  disabled={disabled}
                  aria-invalid={invalid}
                />
                <CheckboxCardContent>
                  <CheckboxCardLabel>{plan.name}</CheckboxCardLabel>
                  <CheckboxCardDescription>
                    {plan.description}
                  </CheckboxCardDescription>
                </CheckboxCardContent>
              </CheckboxCard>
            ))}
            {/* centered */}
            <CheckboxCard variant={variant} className="items-center">
              <CheckboxCardCheckbox
                disabled={disabled}
                aria-invalid={invalid}
                aria-labelledby="centered-label"
              />
              <CheckboxCardContent>
                <CheckboxCardLabel id="centered-label">
                  Centered
                </CheckboxCardLabel>
              </CheckboxCardContent>
            </CheckboxCard>
          </CheckboxCardGroup>
        </fieldset>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="checkbox-cards-variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
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
