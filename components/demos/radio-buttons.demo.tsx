"use client";

import * as React from "react";

import { Label } from "~/components/ui/label";
import { RadioButtons, RadioButtonsItem } from "~/components/ui/radio-buttons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Slider } from "~/components/ui/slider";
import { Switch } from "~/components/ui/switch";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

const options = [
  { id: "4ft", name: "4 ft" },
  { id: "8ft", name: "8 ft" },
  { id: "16ft", name: "16 ft" },
  { id: "32ft", name: "32 ft" },
  { id: "64ft", name: "64 ft" },
  { id: "128ft", name: "128 ft" },
];

const variants = [
  "outline",
  "base",
  "accent",
  "muted",
  "surface",
  "faded",
  "base-shadow",
  "base-gradient",
  "ghost",

  "primary",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "primary-tron",
  "primary-shadow",
  "primary-gradient",
  "primary-ghost",

  "secondary",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
  "secondary-tron",
  "secondary-shadow",
  "secondary-gradient",
  "secondary-ghost",
] as const;

type Size = "xs" | "sm" | "md" | "lg";
const sizesMap: Record<number, Size> = {
  1: "xs",
  2: "sm",
  3: "md",
  4: "lg",
} as const;

export function RadioButtonsDemo() {
  const [checkedVariant, setCheckedVariant] = React.useState("primary");
  const [uncheckedVariant, setUncheckedVariant] = React.useState("outline");
  const [size, setSize] = React.useState(3);
  const [orientation, setOrientation] = React.useState("horizontal");
  const [invalid, setInvalid] = React.useState(false);

  const [selectedOption, setSelectedOption] = React.useState(options[0].id);

  return (
    <>
      <ComponentContainer>
        <fieldset
          aria-label="Choose a depth"
          className="flex w-full max-w-md flex-col gap-3"
        >
          <div className="flex items-center justify-between">
            <legend className="font-medium">How deep is your love?</legend>
            <div className="cursor-pointer text-primary-muted-foreground underline-offset-4 hover:underline">
              More details
            </div>
          </div>

          <RadioButtons
            variants={{
              checked: checkedVariant as (typeof variants)[number],
              unchecked: uncheckedVariant as (typeof variants)[number],
              size: sizesMap[size],
            }}
            orientation={orientation as "horizontal" | "vertical"}
            value={selectedOption}
            onValueChange={setSelectedOption}
            className="grid grid-cols-6 data-[orientation=vertical]:grid-cols-1"
          >
            {options.map((option) => (
              <RadioButtonsItem
                key={option.id}
                value={option.id}
                aria-invalid={invalid}
                disabled={option.id === "128ft"}
                checked={selectedOption === option.id}
              >
                {option.name}
              </RadioButtonsItem>
            ))}
          </RadioButtons>
        </fieldset>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="checked-variant">Checked variant</Label>
          <Select value={checkedVariant} onValueChange={setCheckedVariant}>
            <SelectTrigger id="checked-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {variants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="unchecked-variant">Unchecked variant</Label>
          <Select value={uncheckedVariant} onValueChange={setUncheckedVariant}>
            <SelectTrigger id="unchecked-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {variants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-3">
          <Label>
            Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {sizesMap[size]}
            </span>
          </Label>
          <Slider
            min={1}
            max={4}
            step={1}
            value={[size]}
            onValueChange={(value) => setSize(value[0])}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="radio-buttons-orientation">Orientation</Label>
          <Select value={orientation} onValueChange={setOrientation}>
            <SelectTrigger id="radio-buttons-orientation" className="w-full">
              <SelectValue placeholder="Select an orientation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="horizontal">Horizontal</SelectItem>
              <SelectItem value="vertical">Vertical</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3">
          <Switch id="invalid" checked={invalid} onCheckedChange={setInvalid} />
          <Label htmlFor="invalid">Invalid</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
