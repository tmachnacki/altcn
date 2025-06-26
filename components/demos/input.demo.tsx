"use client";

import * as React from "react";

import { Input } from "~/components/ui/input";
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

type Size = "sm" | "md" | "lg";
const sizesMap: Record<number, Size> = {
  1: "sm",
  2: "md",
  3: "lg",
};

export function InputDemo() {
  const [variant, setVariant] = React.useState("outline");
  const [size, setSize] = React.useState(2);

  return (
    <>
      <ComponentContainer>
        <div className="grid w-full max-w-sm gap-4">
          <Input
            type="email"
            placeholder="Email"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
          <Input
            type="password"
            placeholder="Password"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
          <Input
            type="number"
            placeholder="Number"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
          <Input
            type="file"
            placeholder="File"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
          <Input
            type="file"
            placeholder="File"
            variant={variant as (typeof variants)[number]}
            aria-invalid="true"
            size={sizesMap[size]}
          />
          <Input
            type="file"
            placeholder="File"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
            disabled
          />
          <Input
            type="tel"
            placeholder="Tel"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
          <Input
            type="text"
            placeholder="Text"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
          <Input
            type="url"
            placeholder="URL"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
          <Input
            type="search"
            placeholder="Search"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
          <Input
            type="date"
            placeholder="Date"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
          <Input
            type="datetime-local"
            placeholder="Datetime Local"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
          <Input
            type="datetime-local"
            placeholder="Datetime Local"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
            aria-invalid="true"
          />
          <Input
            type="datetime-local"
            placeholder="Datetime Local"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
            disabled
          />
          <Input
            type="month"
            placeholder="Month"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
          <Input
            type="time"
            placeholder="Time"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
          <Input
            type="week"
            placeholder="Week"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
          <Input
            type="text"
            placeholder="Error"
            aria-invalid="true"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
          <Input
            disabled
            placeholder="Disabled"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          />
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="input-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="input-variant" className="w-full">
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
          <Label htmlFor="input-size">
            Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {sizesMap[size]}
            </span>
          </Label>
          <Slider
            id="input-size"
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
