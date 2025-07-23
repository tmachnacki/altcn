"use client";

import * as React from "react";

import { inputVariants } from "~/components/ui/input";
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
import { Textarea } from "~/components/ui/textarea";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

type Variant = keyof typeof inputVariants.variants.variant;
const variants = Object.keys(inputVariants.variants.variant) as Variant[];

type Size = keyof typeof inputVariants.variants.size;
const sizesMap: Record<number, Size> = {
  1: "sm",
  2: "md",
  3: "lg",
};

export function TextareaDemo() {
  const [variant, setVariant] = React.useState<Variant>("outline");
  const [sizeIdx, setSizeIdx] = React.useState(2);
  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const size = sizesMap[sizeIdx];

  return (
    <>
      <ComponentContainer>
        <div className="grid w-full max-w-sm gap-2">
          <Label htmlFor="caption">Caption</Label>
          <Textarea
            id="caption"
            name="caption"
            variant={variant}
            size={size}
            placeholder="Enter your caption here..."
            aria-invalid={invalid}
            disabled={disabled}
          />
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="textarea-variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
            <SelectTrigger id="textarea-variant" className="w-full">
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
          <Label id="textarea-size">
            Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {size}
            </span>
          </Label>
          <Slider
            aria-labelledby="textarea-size"
            min={1}
            max={3}
            step={1}
            value={[sizeIdx]}
            onValueChange={(value) => setSizeIdx(value[0])}
          />
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="textarea-invalid"
            checked={invalid}
            onCheckedChange={setInvalid}
          />
          <Label htmlFor="textarea-invalid">Invalid</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="textarea-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="textarea-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
