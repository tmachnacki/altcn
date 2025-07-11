"use client";

import * as React from "react";
import { ArrowRightIcon, MailIcon, SettingsIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
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

const buttonVariants = [
  "outline",
  "base",
  "accent",
  "muted",
  "surface",
  "faded",
  "base-shadow",
  "base-gradient",
  "ghost",

  "primary",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "primary-tron",
  "primary-shadow",
  "primary-gradient",
  "primary-ghost",

  "secondary",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
  "secondary-tron",
  "secondary-shadow",
  "secondary-gradient",
  "secondary-ghost",

  "destructive",
  "destructive-accent",
  "destructive-muted",
  "destructive-surface",
  "destructive-faded",
  "destructive-tron",
  "destructive-shadow",
  "destructive-gradient",
  "destructive-ghost",

  "success",
  "success-accent",
  "success-muted",
  "success-surface",
  "success-faded",
  "success-tron",
  "success-shadow",
  "success-gradient",
  "success-ghost",

  "warning",
  "warning-accent",
  "warning-muted",
  "warning-surface",
  "warning-faded",
  "warning-tron",
  "warning-shadow",
  "warning-gradient",
  "warning-ghost",
] as const;

type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonIconSize = "icon-xs" | "icon-sm" | "icon-md" | "icon-lg";
const buttonSizesMap: Record<
  number,
  { button: ButtonSize; icon: ButtonIconSize }
> = {
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
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonSizesMap[size].button}
            >
              Button
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonSizesMap[size].button}
            >
              Get Started <ArrowRightIcon />
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonSizesMap[size].button}
            >
              <MailIcon />
              Inbox
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonSizesMap[size].button}
              disabled
            >
              Disabled
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonSizesMap[size].button}
              disabled
            >
              <Spinner />
              Loading...
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonSizesMap[size].icon}
            >
              <SettingsIcon />
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonSizesMap[size].icon}
              disabled
            >
              <SettingsIcon />
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonSizesMap[size].icon}
              disabled
            >
              <Spinner />
            </Button>
          </div>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {buttonVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="size">
            Size:{" "}
            <span className="inline-block leading-none font-normal text-primary-muted-foreground">
              {buttonSizesMap[size].button}, {buttonSizesMap[size].icon}
            </span>
          </Label>
          <Slider
            id="button-size"
            min={1}
            max={4}
            step={1}
            value={[size]}
            onValueChange={(value: number[]) => setSize(value[0])}
          />
        </div>
      </ComponentPlayground>
    </>
  );
}
