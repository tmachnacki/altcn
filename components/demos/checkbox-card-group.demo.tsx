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

const options = [
  {
    id: "text",
    name: "Text",
    description: "Spam your users' phones with text messages.",
  },
  {
    id: "email",
    name: "Email",
    description: "Spam your users' inboxes.",
  },
  {
    id: "pigeon",
    name: "Carrier pigeon",
    description: "Send your users a pigeon.",
  },
  {
    id: "telegram",
    name: "Telegram",
    description: "Send your users a telegram.",
  },
];

export function CheckboxCardGroupDemo() {
  const [variant, setVariant] = React.useState<Variant>("primary");
  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const [selected, setSelected] = React.useState<string[]>(["email"]);

  return (
    <>
      <ComponentContainer className="gap-8">
        <fieldset className="w-full max-w-sm">
          <legend className="sr-only">Select a plan</legend>
          <CheckboxCardGroup variant={variant} className="grid w-full gap-2">
            <CheckboxCard variant={variant} className="items-center">
              <CheckboxCardCheckbox
                disabled={disabled}
                aria-invalid={invalid}
                checked={
                  selected.length === options.length
                    ? true
                    : selected.length > 0
                      ? "indeterminate"
                      : false
                }
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelected(options.map((option) => option.id));
                  } else {
                    setSelected([]);
                  }
                }}
              />
              <CheckboxCardContent>
                <CheckboxCardLabel>Select all</CheckboxCardLabel>
              </CheckboxCardContent>
            </CheckboxCard>
            {options.map((option) => (
              <CheckboxCard key={option.id} variant={variant}>
                <CheckboxCardCheckbox
                  disabled={disabled}
                  aria-invalid={invalid}
                  checked={selected.includes(option.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelected([...selected, option.id]);
                    } else {
                      setSelected(selected.filter((id) => id !== option.id));
                    }
                  }}
                />
                <CheckboxCardContent>
                  <CheckboxCardLabel>{option.name}</CheckboxCardLabel>
                  <CheckboxCardDescription>
                    {option.description}
                  </CheckboxCardDescription>
                </CheckboxCardContent>
              </CheckboxCard>
            ))}
          </CheckboxCardGroup>
        </fieldset>
        <fieldset className="w-full max-w-sm">
          <legend className="sr-only">Select a plan</legend>
          <CheckboxCardGroup
            variant={variant}
            className="grid w-full -space-y-px shadow-xs *:rounded-none *:shadow-none *:first:rounded-t-lg *:last:rounded-b-lg"
          >
            {options.map((option) => (
              <CheckboxCard key={option.id} variant={variant}>
                <CheckboxCardCheckbox
                  disabled={disabled}
                  aria-invalid={invalid}
                  checked={selected.includes(option.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelected([...selected, option.id]);
                    } else {
                      setSelected(selected.filter((id) => id !== option.id));
                    }
                  }}
                />
                <CheckboxCardContent>
                  <CheckboxCardLabel>{option.name}</CheckboxCardLabel>
                  <CheckboxCardDescription>
                    {option.description}
                  </CheckboxCardDescription>
                </CheckboxCardContent>
              </CheckboxCard>
            ))}
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
