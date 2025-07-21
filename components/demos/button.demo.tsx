"use client";

import * as React from "react";
import { ArrowRightIcon, MailIcon, SettingsIcon } from "lucide-react";

import { Button, buttonVariants } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Slider } from "~/components/ui/slider";
import { Spinner } from "~/components/ui/spinner";
import { Switch } from "~/components/ui/switch";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

type Variant = keyof typeof buttonVariants.variants.variant;
const variants = Object.keys(buttonVariants.variants.variant) as Variant[];

type Size = keyof typeof buttonVariants.variants.size;
const sizesMap: Record<number, Size> = {
  1: "2xs",
  2: "xs",
  3: "sm",
  4: "md",
  5: "lg",
};
const iconSizesMap: Record<number, Size> = {
  1: "icon-2xs",
  2: "icon-xs",
  3: "icon-sm",
  4: "icon-md",
  5: "icon-lg",
};

export function ButtonDemo() {
  const [variant, setVariant] = React.useState<Variant>("outline");
  const [sizeIdx, setSizeIdx] = React.useState(4);
  const [disabled, setDisabled] = React.useState(false);

  const size = sizesMap[sizeIdx];
  const iconSize = iconSizesMap[sizeIdx];

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant={variant} size={size} disabled={disabled}>
              Button
            </Button>
            <Button variant={variant} size={size} disabled={disabled}>
              Get Started <ArrowRightIcon />
            </Button>
            <Button variant={variant} size={size} disabled={disabled}>
              <MailIcon />
              Inbox
            </Button>
            <Button variant={variant} size={size} disabled>
              <Spinner />
              Loading...
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant={variant} size={iconSize} disabled={disabled}>
              <SettingsIcon />
            </Button>
            <Button variant={variant} size={iconSize} disabled>
              <Spinner />
            </Button>
          </div>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="button-variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
            <SelectTrigger id="button-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {variants.map((variant) => (
                <SelectItem key={`button-${variant}`} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label id="button-size">
            Size:{" "}
            <span className="inline-block leading-none font-normal text-primary-muted-foreground">
              {size}, {iconSize}
            </span>
          </Label>
          <Slider
            aria-labelledby="button-size"
            min={1}
            max={5}
            step={1}
            value={[sizeIdx]}
            onValueChange={(value) => setSizeIdx(value[0])}
          />
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="button-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="button-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
