"use client";

import * as React from "react";

import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

const variants = ["base", "primary", "secondary"] as const;

export function RadioGroupDemo() {
  const [variant, setVariant] = React.useState("primary");

  return (
    <>
      <ComponentContainer>
        <RadioGroup
          defaultValue="comfortable"
          variant={variant as (typeof variants)[number]}
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="disabled" id="r4" disabled />
            <Label htmlFor="r4">Disabled</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="disabled" id="r5" disabled checked />
            <Label htmlFor="r5">Checked &amp; Disabled</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="invalid" id="r6" aria-invalid="true" />
            <Label htmlFor="r6">Invalid</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem
              value="invalid-disabled"
              id="r7"
              aria-invalid="true"
              disabled
            />
            <Label htmlFor="r7">Invalid &amp; Disabled</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem
              value="invalid-checked-disabled"
              id="r8"
              aria-invalid="true"
              disabled
              checked
            />
            <Label htmlFor="r8">Invalid &amp; Checked &amp; Disabled</Label>
          </div>
        </RadioGroup>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="radio-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="radio-variant" className="w-full">
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
      </ComponentPlayground>
    </>
  );
}
