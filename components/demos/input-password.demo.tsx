"use client";

import * as React from "react";

import { InputPassword } from "~/components/ui/input-password";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Slider } from "~/components/ui/slider";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

const variants = [
  "outline",
  "muted",
  "underlined",
  "primary-muted",
  "secondary-muted",
] as const;

type Size = "sm" | "default" | "lg";
const sizesMap: Record<number, Size> = {
  1: "sm",
  2: "default",
  3: "lg",
};

export function InputPasswordDemo() {
  const [variant, setVariant] = React.useState("outline");
  const [size, setSize] = React.useState(2);

  return (
    <>
      <ComponentContainer>
        <div className="grid w-full max-w-xs gap-8">
          <div className="grid gap-2">
            <Label htmlFor="input-password">Password</Label>
            <InputPassword
              id="input-password"
              name="input-password"
              autoComplete="current-password"
              size={sizesMap[size]}
              variant={variant as (typeof variants)[number]}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="input-password-invalid">Invalid</Label>
            <InputPassword
              id="input-password-invalid"
              name="input-password-invalid"
              autoComplete="current-password"
              size={sizesMap[size]}
              variant={variant as (typeof variants)[number]}
              aria-invalid="true"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="input-password-disabled">Disabled</Label>
            <InputPassword
              id="input-password-disabled"
              name="input-password-disabled"
              autoComplete="current-password"
              size={sizesMap[size]}
              variant={variant as (typeof variants)[number]}
              disabled
            />
          </div>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="password-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="password-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
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

        <div className="grid gap-3">
          <Label htmlFor="password-size">
            Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {sizesMap[size]}
            </span>
          </Label>
          <Slider
            id="password-size"
            min={1}
            max={3}
            step={1}
            value={[size]}
            onValueChange={(value) => setSize(value[0])}
          />
        </div>
      </ComponentPlayground>
    </>
  );
}
