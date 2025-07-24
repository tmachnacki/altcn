"use client";

import * as React from "react";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

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
import { toggleVariants } from "~/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

type Variant = keyof typeof toggleVariants.variants.variant;
const variants = Object.keys(toggleVariants.variants.variant) as Variant[];

type Size = keyof typeof toggleVariants.variants.size;
const sizesMap: Record<number, Size> = {
  1: "2xs",
  2: "xs",
  3: "sm",
  4: "md",
  5: "lg",
};

export function ToggleGroupDemo() {
  const [variant, setVariant] = React.useState<Variant>("primary");
  const [sizeIdx, setSizeIdx] = React.useState(4);
  const [disabled, setDisabled] = React.useState(false);

  const size = sizesMap[sizeIdx];

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-wrap items-center gap-4">
          <ToggleGroup
            variant={variant}
            size={size}
            type="multiple"
            defaultValue={["bold"]}
            aria-label="Text formatting"
          >
            <ToggleGroupItem
              aria-label="Toggle bold"
              value="bold"
              disabled={disabled}
            >
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Toggle underline"
              value="underline"
              disabled={disabled}
            >
              <UnderlineIcon />
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Toggle italic"
              value="italic"
              disabled={disabled}
            >
              <ItalicIcon />
              Italic
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="toggle-variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
            <SelectTrigger id="toggle-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
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
          <Label id="toggle-size">
            Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {size}
            </span>
          </Label>
          <Slider
            aria-labelledby="toggle-size"
            min={1}
            max={Object.keys(sizesMap).length}
            step={1}
            value={[sizeIdx]}
            onValueChange={(value) => setSizeIdx(value[0])}
          />
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="toggle-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="toggle-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
