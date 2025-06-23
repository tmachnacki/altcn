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
import { SelectNative } from "~/components/ui/select-native";
import { Slider } from "~/components/ui/slider";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

const fruits = ["apple", "banana", "blueberry", "grapes", "pineapple"] as const;

const triggerVariants = [
  "outline",
  "muted",
  "underlined",
  "primary-muted",
  "secondary-muted",
] as const;

type TriggerSize = "default" | "sm" | "lg";
const triggerSizesMap: Record<number, TriggerSize> = {
  1: "sm",
  2: "default",
  3: "lg",
};

export function SelectNativeDemo() {
  const [triggerVariant, setTriggerVariant] = React.useState("outline");
  const [triggerSize, setTriggerSize] = React.useState(2);

  return (
    <>
      <ComponentContainer>
        <div className="grid w-full max-w-xs grid-cols-1 gap-4 sm:max-w-sm sm:grid-cols-2">
          <SelectNative
            defaultValue={fruits[0]}
            id="select-native-basic"
            name="select-native-basic"
            variant={triggerVariant as (typeof triggerVariants)[number]}
            size={triggerSizesMap[triggerSize]}
            className="w-full"
          >
            {fruits.map((fruit) => (
              <option key={`${fruit}-basic`} value={fruit}>
                {fruit}
              </option>
            ))}
          </SelectNative>
          <SelectNative
            id="select-native-multiple"
            name="select-native-multiple"
            variant={triggerVariant as (typeof triggerVariants)[number]}
            size={triggerSizesMap[triggerSize]}
            multiple
            className="w-full"
          >
            <option value="disabled" disabled>
              Select a fruit...
            </option>
            {fruits.map((fruit) => (
              <option key={`${fruit}-multiple`} value={fruit}>
                {fruit}
              </option>
            ))}
          </SelectNative>
          <SelectNative
            defaultValue="disabled"
            id="select-native-invalid"
            name="select-native-invalid"
            variant={triggerVariant as (typeof triggerVariants)[number]}
            size={triggerSizesMap[triggerSize]}
            aria-invalid="true"
            className="w-full"
          >
            <option value="disabled" disabled>
              Select a fruit...
            </option>
            {fruits.map((fruit) => (
              <option key={`${fruit}-invalid`} value={fruit}>
                {fruit}
              </option>
            ))}
          </SelectNative>
          <SelectNative
            defaultValue="disabled"
            id="select-native-disabled"
            name="select-native-disabled"
            variant={triggerVariant as (typeof triggerVariants)[number]}
            size={triggerSizesMap[triggerSize]}
            disabled
            className="w-full"
          >
            <option value="disabled" disabled>
              Select a fruit...
            </option>
            {fruits.map((fruit) => (
              <option key={`${fruit}-disabled`} value={fruit}>
                {fruit}
              </option>
            ))}
          </SelectNative>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="trigger-variant">Variant</Label>
          <Select value={triggerVariant} onValueChange={setTriggerVariant}>
            <SelectTrigger id="trigger-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {triggerVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="trigger-size">
            Trigger Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {triggerSizesMap[triggerSize]}
            </span>
          </Label>
          <Slider
            id="trigger-size"
            className="w-full"
            min={1}
            max={3}
            step={1}
            value={[triggerSize]}
            onValueChange={(value) => setTriggerSize(value[0])}
          />
        </div>
      </ComponentPlayground>
    </>
  );
}
