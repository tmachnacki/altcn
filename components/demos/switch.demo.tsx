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
import { Switch } from "~/components/ui/switch";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

const variants = [
  "primary",
  "primary-muted",
  "secondary",
  "secondary-muted",
] as const;

export function SwitchDemo() {
  const [variant, setVariant] = useState("primary");
  const [thin, setThin] = useState(false);

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-col items-center gap-4">
          <Label
            htmlFor={`switch-${variant}`}
            className="flex w-full items-center gap-2"
          >
            <Switch
              id={`switch-${variant}`}
              variant={variant as (typeof variants)[number]}
              thin={thin}
            />
            <span>{variant}</span>
          </Label>
          <div className="flex w-full items-center gap-2">
            <Switch
              id={`switch-${variant}-invalid`}
              variant={variant as (typeof variants)[number]}
              aria-invalid
              thin={thin}
            />
            <Label htmlFor={`switch-${variant}-invalid`}>invalid</Label>
          </div>
          <div className="flex w-full items-center gap-2">
            <Switch
              id={`switch-${variant}-disabled`}
              variant={variant as (typeof variants)[number]}
              disabled
              thin={thin}
            />
            <Label htmlFor={`switch-${variant}-disabled`}>disabled</Label>
          </div>
          <div className="flex w-full items-center gap-2">
            <Switch
              id={`switch-${variant}-checked-disabled`}
              variant={variant as (typeof variants)[number]}
              disabled
              thin={thin}
              checked
            />
            <Label htmlFor={`switch-${variant}-checked-disabled`}>
              checked & disabled
            </Label>
          </div>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="flex flex-col gap-2">
          <Label htmlFor="switch-variant">Switch Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
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
        <Label htmlFor="switch-thin" className="flex items-center gap-3">
          <Switch id="switch-thin" checked={thin} onCheckedChange={setThin} />
          <span>Thin</span>
        </Label>
      </ComponentPlayground>
    </>
  );
}
