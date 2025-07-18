"use client";

import { useState } from "react";

import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch, switchVariants } from "~/components/ui/switch";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

type Variant = keyof typeof switchVariants.variants.variant;
const variants = Object.keys(switchVariants.variants.variant) as Variant[];

type Height = keyof typeof switchVariants.variants.height;
const heights = Object.keys(switchVariants.variants.height) as Height[];

export function SwitchDemo() {
  const [variant, setVariant] = useState<Variant>("primary");
  const [height, setHeight] = useState<Height>("default");
  const [invalid, setInvalid] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <ComponentContainer>
        <div className="flex items-center gap-3">
          <Switch
            id={`switch`}
            variant={variant}
            height={height}
            disabled={disabled}
            aria-invalid={invalid}
          />
          <Label htmlFor={`switch`} className="capitalize">
            Airplane Mode
          </Label>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="switch-variant">Switch Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
            <SelectTrigger id="switch-variant" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {variants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="switch-height">Switch Height</Label>
          <Select
            value={height}
            onValueChange={(value) => setHeight(value as Height)}
          >
            <SelectTrigger id="switch-height" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {heights.map((height) => (
                <SelectItem key={height} value={height}>
                  {height}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="switch-invalid"
            checked={invalid}
            onCheckedChange={setInvalid}
          />
          <Label htmlFor="switch-invalid">Invalid</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="switch-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="switch-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
