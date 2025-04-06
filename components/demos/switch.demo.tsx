"use client";

import { useState } from "react";

import { ComponentContainer } from "@/components/demos/component-container";
import { ComponentPlayground } from "@/components/demos/component-playground";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function SwitchDemo() {
  const [switchVariant, setSwitchVariant] = useState("primary");
  const [switchThin, setSwitchThin] = useState(false);

  const switchVariants = [
    "primary",
    "primary-muted",
    "secondary",
    "secondary-muted",
  ] as const;

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-col items-center gap-4">
          <Label
            htmlFor={`switch-${switchVariant}`}
            className="flex w-full items-center gap-2"
          >
            <Switch
              id={`switch-${switchVariant}`}
              variant={switchVariant as (typeof switchVariants)[number]}
              thin={switchThin}
            />
            <span>{switchVariant}</span>
          </Label>
          <div className="flex w-full items-center gap-2">
            <Switch
              id={`switch-${switchVariant}-invalid`}
              variant={switchVariant as (typeof switchVariants)[number]}
              aria-invalid
              thin={switchThin}
            />
            <Label htmlFor={`switch-${switchVariant}-invalid`}>invalid</Label>
          </div>
          <div className="flex w-full items-center gap-2">
            <Switch
              id={`switch-${switchVariant}-disabled`}
              variant={switchVariant as (typeof switchVariants)[number]}
              disabled
              thin={switchThin}
            />
            <Label htmlFor={`switch-${switchVariant}-disabled`}>disabled</Label>
          </div>
          <div className="flex w-full items-center gap-2">
            <Switch
              id={`switch-${switchVariant}-checked-disabled`}
              variant={switchVariant as (typeof switchVariants)[number]}
              disabled
              thin={switchThin}
              checked
            />
            <Label htmlFor={`switch-${switchVariant}-checked-disabled`}>
              checked & disabled
            </Label>
          </div>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="flex flex-col gap-2">
          <Label htmlFor="switch-variant">Switch Variant</Label>
          <Select value={switchVariant} onValueChange={setSwitchVariant}>
            <SelectTrigger id="switch-variant" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {switchVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Label htmlFor="switch-thin" className="flex items-center gap-2">
          <Switch
            id="switch-thin"
            checked={switchThin}
            onCheckedChange={setSwitchThin}
          />
          <span>Thin</span>
        </Label>
      </ComponentPlayground>
    </>
  );
}
