"use client";

import * as React from "react";

import {
  InputPasswordRadix,
  inputPasswordVariants,
} from "~/components/ui/input-password-radix";
import { Label } from "~/components/ui/label";
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

// import { InputPassword } from "../ui/input-password";

type Variant = keyof typeof inputPasswordVariants.variants.variant;
const variants = Object.keys(
  inputPasswordVariants.variants.variant
) as Variant[];

type Size = keyof typeof inputPasswordVariants.variants.size;
const sizesMap: Record<number, Size> = {
  1: "sm",
  2: "md",
  3: "lg",
};

export function InputPasswordRadixDemo() {
  const [variant, setVariant] = React.useState<Variant>("outline");
  const [sizeIdx, setSizeIdx] = React.useState(2);
  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const size = sizesMap[sizeIdx];

  return (
    <>
      <ComponentContainer>
        <div className="grid w-full max-w-xs gap-2">
          <Label htmlFor="input-password">Password</Label>
          <InputPasswordRadix
            id="input-password"
            name="input-password"
            autoComplete="current-password"
            placeholder="********"
            size={size}
            variant={variant}
            disabled={disabled}
            aria-invalid={invalid}
          />
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="password-variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
            <SelectTrigger id="password-variant" className="w-full">
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

        <div className="grid gap-3">
          <Label id="password-size">
            Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {size}
            </span>
          </Label>
          <Slider
            aria-labelledby="password-size"
            min={1}
            max={3}
            step={1}
            value={[sizeIdx]}
            onValueChange={(value) => setSizeIdx(value[0])}
          />
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="input-password-invalid"
            checked={invalid}
            onCheckedChange={setInvalid}
          />
          <Label htmlFor="input-password-invalid">Invalid</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="input-password-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="input-password-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
