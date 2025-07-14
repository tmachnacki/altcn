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
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

type Variant = keyof typeof buttonVariants.variants.variant;
const variants = Object.keys(buttonVariants.variants.variant) as Variant[];

type Size = "xs" | "sm" | "md" | "lg";
type IconSize = "icon-xs" | "icon-sm" | "icon-md" | "icon-lg";
const sizesMap: Record<number, { button: Size; icon: IconSize }> = {
  1: { button: "xs", icon: "icon-xs" },
  2: { button: "sm", icon: "icon-sm" },
  3: { button: "md", icon: "icon-md" },
  4: { button: "lg", icon: "icon-lg" },
};

export function ButtonDemo() {
  const [variant, setVariant] = React.useState("outline");
  const [size, setSize] = React.useState(3);

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant={variant as Variant} size={sizesMap[size].button}>
              Button
            </Button>
            <Button variant={variant as Variant} size={sizesMap[size].button}>
              Get Started <ArrowRightIcon />
            </Button>
            <Button variant={variant as Variant} size={sizesMap[size].button}>
              <MailIcon />
              Inbox
            </Button>
            <Button
              variant={variant as Variant}
              size={sizesMap[size].button}
              disabled
            >
              Disabled
            </Button>
            <Button
              variant={variant as Variant}
              size={sizesMap[size].button}
              disabled
            >
              <Spinner />
              Loading...
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant={variant as Variant} size={sizesMap[size].icon}>
              <SettingsIcon />
            </Button>
            <Button
              variant={variant as Variant}
              size={sizesMap[size].icon}
              disabled
            >
              <SettingsIcon />
            </Button>
            <Button
              variant={variant as Variant}
              size={sizesMap[size].icon}
              disabled
            >
              <Spinner />
            </Button>
          </div>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="button-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="button-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {variants.map((variant) => (
                <SelectItem key={`button-${variant}`} value={variant}>
                  <Swatch variant={variant} />
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
              {sizesMap[size].button}, {sizesMap[size].icon}
            </span>
          </Label>
          <Slider
            aria-labelledby="button-size"
            min={1}
            max={4}
            step={1}
            value={[size]}
            onValueChange={(value) => setSize(value[0])}
          />
        </div>
      </ComponentPlayground>
    </>
  );
}
