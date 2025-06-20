"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
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

const layouts = ["compact", "split"] as const;

export function InputOTPDemo() {
  const [variant, setVariant] = React.useState("outline");
  const [size, setSize] = React.useState(2);
  const [layout, setLayout] = React.useState("compact");

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-col gap-4">
          <div className="grid gap-2">
            <Label htmlFor="basic">Basic</Label>
            <InputOTP
              id="basic"
              maxLength={6}
              placeholder="000000"
              variant={variant as (typeof variants)[number]}
              layout={layout as (typeof layouts)[number]}
              slotSize={sizesMap[size]}
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
            <Label htmlFor="invalid">Invalid</Label>
            <InputOTP
              id="invalid"
              maxLength={6}
              placeholder="000000"
              variant={variant as (typeof variants)[number]}
              layout={layout as (typeof layouts)[number]}
              slotSize={sizesMap[size]}
              aria-invalid="true"
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
            <Label htmlFor="disabled">Disabled</Label>
            <InputOTP
              maxLength={6}
              placeholder="000000"
              variant={variant as (typeof variants)[number]}
              layout={layout as (typeof layouts)[number]}
              slotSize={sizesMap[size]}
              disabled
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
            <Label htmlFor="separator">Separator</Label>
            <InputOTP
              id="separator"
              maxLength={6}
              variant={variant as (typeof variants)[number]}
              layout={layout as (typeof layouts)[number]}
              slotSize={sizesMap[size]}
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
          <Label htmlFor="slot-size">
            Slot Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {sizesMap[size]}
            </span>
          </Label>
          <Slider
            id="slot-size"
            min={1}
            max={3}
            step={1}
            value={[size]}
            onValueChange={(value) => setSize(value[0])}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="otp-layout">Layout</Label>
          <Select value={layout} onValueChange={setLayout}>
            <SelectTrigger id="otp-layout" className="w-full">
              <SelectValue placeholder="Select layout" />
            </SelectTrigger>
            <SelectContent>
              {layouts.map((layout) => (
                <SelectItem key={layout} value={layout}>
                  {layout}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
