"use client";

import * as React from "react";

import { Label } from "~/components/ui/label";
import {
  RadioButton,
  RadioButtonGroup,
  radioButtonVariants,
} from "~/components/ui/radio-button-group";
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
];

type CheckedVariant = keyof typeof radioButtonVariants.variants.checked;
const checkedVariants = Object.keys(
  radioButtonVariants.variants.checked
) as CheckedVariant[];

type UncheckedVariant = keyof typeof radioButtonVariants.variants.unchecked;
const uncheckedVariants = Object.keys(
  radioButtonVariants.variants.unchecked
) as UncheckedVariant[];

type Size = keyof typeof radioButtonVariants.variants.size;
const sizesMap: Record<number, Size> = {
  1: "2xs",
  2: "xs",
  3: "sm",
  4: "md",
  5: "lg",
} as const;

type Shape = keyof typeof radioButtonVariants.variants.shape;
const shapes = Object.keys(radioButtonVariants.variants.shape) as Shape[];

type Orientation = "horizontal" | "vertical";

export function RadioButtonGroupDemo() {
  const [checkedVariant, setCheckedVariant] =
    React.useState<CheckedVariant>("primary");
  const [uncheckedVariant, setUncheckedVariant] =
    React.useState<UncheckedVariant>("outline");
  const [sizeIdx, setSizeIdx] = React.useState(4);
  const [shape, setShape] = React.useState<Shape>("box");
  const [orientation, setOrientation] =
    React.useState<Orientation>("horizontal");

  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const size = sizesMap[sizeIdx];

  return (
    <>
      <ComponentContainer>
        <fieldset
          aria-label="Choose a depth"
          className="flex w-full max-w-sm flex-col gap-3"
        >
          <div className="flex items-center justify-between">
            <legend className="font-medium">How deep is your love?</legend>
            <div className="cursor-pointer text-primary-muted-foreground underline-offset-4 hover:underline">
              More details
            </div>
          </div>
          <RadioButtonGroup
            variants={{
              checked: checkedVariant,
              unchecked: uncheckedVariant,
            }}
            size={size}
            shape={shape}
            orientation={orientation as "horizontal" | "vertical"}
            className="grid grid-cols-5 data-[orientation=vertical]:grid-cols-1"
          >
            {options.map((option) => (
              <RadioButton
                key={option.id}
                value={option.id}
                aria-invalid={invalid}
                disabled={disabled}
              >
                {option.name}
              </RadioButton>
            ))}
          </RadioButtonGroup>
        </fieldset>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="unchecked-variant">Unchecked variant</Label>
          <Select
            value={uncheckedVariant}
            onValueChange={(value) =>
              setUncheckedVariant(value as UncheckedVariant)
            }
          >
            <SelectTrigger id="unchecked-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {uncheckedVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="checked-variant">Checked variant</Label>
          <Select
            value={checkedVariant}
            onValueChange={(value) =>
              setCheckedVariant(value as CheckedVariant)
            }
          >
            <SelectTrigger id="checked-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {checkedVariants.map((variant) => (
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
              {size}
            </span>
          </Label>
          <Slider
            min={1}
            max={Object.keys(sizesMap).length}
            step={1}
            value={[sizeIdx]}
            onValueChange={(value) => setSizeIdx(value[0])}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="radio-buttons-shape">Shape</Label>
          <Select
            value={shape}
            onValueChange={(value) => setShape(value as Shape)}
          >
            <SelectTrigger id="radio-buttons-shape" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {shapes.map((shape) => (
                <SelectItem key={shape} value={shape}>
                  {shape}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="radio-buttons-orientation">Orientation</Label>
          <Select
            value={orientation}
            onValueChange={(value) => setOrientation(value as Orientation)}
          >
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
          <Switch
            id="radio-buttons-invalid"
            checked={invalid}
            onCheckedChange={setInvalid}
          />
          <Label htmlFor="radio-buttons-invalid">Invalid</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="radio-buttons-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="radio-buttons-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
