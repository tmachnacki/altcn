"use client";

import * as React from "react";

import { checkBoxVariants } from "~/components/ui/checkbox";
import {
  CheckboxCard,
  CheckboxCardCheckbox,
  // CheckboxCardContent,
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

type CardVariant = keyof typeof checkboxCardVariants.variants.variant;
const cardVariants = Object.keys(
  checkboxCardVariants.variants.variant
) as CardVariant[];

type CheckboxVariant = keyof typeof checkBoxVariants.variants.variant;
const checkboxVariants = Object.keys(
  checkBoxVariants.variants.variant
) as CheckboxVariant[];

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
  const [cardVariant, setCardVariant] = React.useState<CardVariant>("primary");
  const [checkboxVariant, setCheckboxVariant] =
    React.useState<CheckboxVariant>("primary");
  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const [selected, setSelected] = React.useState<string[]>(["email"]);

  return (
    <>
      <ComponentContainer className="gap-8">
        <fieldset className="w-full max-w-sm">
          <legend className="sr-only">Select a plan</legend>
          <CheckboxCardGroup
            variants={{ card: cardVariant, checkbox: checkboxVariant }}
            className="grid w-full gap-2"
          >
            <CheckboxCard className="items-center">
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
                className="sr-only"
              />
              <CheckboxCardLabel>Select all</CheckboxCardLabel>
            </CheckboxCard>
            {options.map((option) => (
              <CheckboxCard key={option.id}>
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
                <CheckboxCardLabel>{option.name}</CheckboxCardLabel>
                <CheckboxCardDescription>
                  {option.description}
                </CheckboxCardDescription>
              </CheckboxCard>
            ))}
          </CheckboxCardGroup>
        </fieldset>
        <fieldset className="w-full">
          <legend className="sr-only">Select a plan</legend>
          <CheckboxCardGroup
            variants={{ card: cardVariant, checkbox: checkboxVariant }}
            className="grid w-full grid-cols-2 rounded-lg shadow-xs *:rounded-none *:shadow-none *:first:rounded-tl-lg *:last:rounded-br-lg *:even:-ml-px *:nth-[-n+2]:-mb-px *:nth-[2]:rounded-tr-lg *:nth-[3]:rounded-bl-lg"
          >
            {options.map((option) => (
              <CheckboxCard key={option.id}>
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
                <CheckboxCardLabel>{option.name}</CheckboxCardLabel>
                <CheckboxCardDescription>
                  {option.description}
                </CheckboxCardDescription>
              </CheckboxCard>
            ))}
          </CheckboxCardGroup>
        </fieldset>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="card-variant">Card Variant</Label>
          <Select
            value={cardVariant}
            onValueChange={(value) => setCardVariant(value as CardVariant)}
          >
            <SelectTrigger id="card-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {cardVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="checkbox-variant">Checkbox Variant</Label>
          <Select
            value={checkboxVariant}
            onValueChange={(value) =>
              setCheckboxVariant(value as CheckboxVariant)
            }
          >
            <SelectTrigger id="checkbox-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {checkboxVariants.map((variant) => (
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
