"use client";

import * as React from "react";

import { Label } from "~/components/ui/label";
import { Radio, RadioGroup, radioVariants } from "~/components/ui/radio-group";
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

type Variant = keyof typeof radioVariants.variants.variant;
const variants = Object.keys(radioVariants.variants.variant) as Variant[];

const options = [
  {
    id: "default",
    label: "Default",
  },
  {
    id: "comfortable",
    label: "Comfortable",
  },
  {
    id: "compact",
    label: "Compact",
  },
] as const;

export function RadioGroupDemo() {
  const [variant, setVariant] = React.useState<Variant>("primary");
  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <>
      <ComponentContainer>
        <RadioGroup defaultValue="comfortable" variant={variant}>
          {options.map((option) => (
            <div className="flex items-center gap-3" key={option.id}>
              <Radio
                value={option.id}
                id={option.id}
                disabled={disabled}
                aria-invalid={invalid}
              />
              <Label htmlFor={option.id}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="radio-variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
            <SelectTrigger id="radio-variant" className="w-full">
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
            id="radio-invalid"
            checked={invalid}
            onCheckedChange={setInvalid}
          />
          <Label htmlFor="radio-invalid">Invalid</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="radio-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="radio-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
