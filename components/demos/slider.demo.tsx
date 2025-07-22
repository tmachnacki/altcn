"use client";

import * as React from "react";

import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Slider, sliderVariants } from "~/components/ui/slider";
import { Switch } from "~/components/ui/switch";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

type Variant = keyof typeof sliderVariants.variants.variant;
const variants = Object.keys(sliderVariants.variants.variant) as Variant[];

const orientations = ["horizontal", "vertical"] as const;

export function SliderDemo() {
  const [variant, setVariant] = React.useState<Variant>("primary");
  const [orientation, setOrientation] = React.useState("horizontal");
  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <>
      <ComponentContainer>
        <div className="flex w-full max-w-sm flex-col gap-8">
          <div
            className={`flex ${orientation === "vertical" ? "flex-row gap-12" : "flex-col gap-8"}`}
          >
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              variant={variant}
              orientation={orientation as (typeof orientations)[number]}
              aria-invalid={invalid}
              disabled={disabled}
            />
            <Slider
              defaultValue={[50]}
              max={100}
              step={25}
              variant={variant}
              orientation={orientation as (typeof orientations)[number]}
              aria-invalid={invalid}
              disabled={disabled}
            />
            <Slider
              defaultValue={[25, 50]}
              max={100}
              step={1}
              variant={variant}
              orientation={orientation as (typeof orientations)[number]}
              aria-invalid={invalid}
              disabled={disabled}
            />
            <Slider
              defaultValue={[10, 20]}
              max={100}
              step={10}
              variant={variant}
              orientation={orientation as (typeof orientations)[number]}
              aria-invalid={invalid}
              disabled={disabled}
            />
          </div>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="slider-variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
            <SelectTrigger id="slider-variant" className="w-full">
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
        <div className="grid gap-2">
          <Label htmlFor="slider-orientation">Orientation</Label>
          <Select value={orientation} onValueChange={setOrientation}>
            <SelectTrigger id="slider-orientation" className="w-full">
              <SelectValue placeholder="Select orientation" />
            </SelectTrigger>
            <SelectContent>
              {orientations.map((orientation) => (
                <SelectItem key={orientation} value={orientation}>
                  {orientation}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="slider-invalid"
            checked={invalid}
            onCheckedChange={setInvalid}
            disabled={disabled}
          />
          <Label htmlFor="slider-invalid">Invalid</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="slider-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="slider-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
