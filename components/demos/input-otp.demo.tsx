"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  inputOTPSlotVariants,
} from "~/components/ui/input-otp";
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
import { Swatch } from "~/components/swatch";

type Variant = keyof typeof inputOTPSlotVariants.variants.variant;
const variants = Object.keys(
  inputOTPSlotVariants.variants.variant
) as Variant[];

type Size = keyof typeof inputOTPSlotVariants.variants.size;
const sizesMap: Record<number, Size> = {
  1: "sm",
  2: "md",
  3: "lg",
};

const spacings = ["compact", "split"] as const;

export function InputOTPDemo() {
  const [variant, setVariant] = React.useState("outline");
  const [size, setSize] = React.useState(2);
  const [spacing, setSpacing] = React.useState("split");

  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <>
      <ComponentContainer>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="otp-1" disabled={disabled}>
              Basic
            </Label>
            <InputOTP
              id="otp-1"
              maxLength={6}
              placeholder="000000"
              variant={variant as Variant}
              spacing={spacing as (typeof spacings)[number]}
              size={sizesMap[size]}
              disabled={disabled}
              aria-invalid={invalid}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="otp-2" disabled={disabled}>
              Separator
            </Label>
            <InputOTP
              id="otp-2"
              maxLength={6}
              variant={variant as Variant}
              spacing={spacing as (typeof spacings)[number]}
              size={sizesMap[size]}
              disabled={disabled}
              aria-invalid={invalid}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="otp-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="otp-variant" className="w-full">
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
          <Label id="otp-size">
            Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {sizesMap[size]}
            </span>
          </Label>
          <Slider
            aria-labelledby="otp-size"
            min={1}
            max={3}
            step={1}
            value={[size]}
            onValueChange={(value) => setSize(value[0])}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="otp-spacing">Spacing</Label>
          <Select value={spacing} onValueChange={setSpacing}>
            <SelectTrigger id="otp-spacing" className="w-full">
              <SelectValue placeholder="Select spacing" />
            </SelectTrigger>
            <SelectContent>
              {spacings.map((spacing) => (
                <SelectItem key={spacing} value={spacing}>
                  {spacing}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="otp-invalid"
            checked={invalid}
            onCheckedChange={setInvalid}
          />
          <Label htmlFor="otp-invalid">Invalid</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="otp-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="otp-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
