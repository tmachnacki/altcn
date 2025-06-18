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

const buttonVariants = [
  "outline",
  "base",
  "accent",
  "muted",
  "surface",
  "faded",
  "ghost",
  "link",
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
] as const;

type ButtonSize = "xs" | "sm" | "default" | "lg";
const buttonSizesMap: Record<number, ButtonSize> = {
  1: "xs",
  2: "sm",
  3: "default",
  4: "lg",
};

type ButtonIconSize = "icon-xs" | "icon-sm" | "icon" | "icon-lg";
const buttonIconSizesMap: Record<number, ButtonIconSize> = {
  1: "icon-xs",
  2: "icon-sm",
  3: "icon",
  4: "icon-lg",
};

export function ButtonDemo() {
  const [variant, setVariant] = React.useState("outline");
  const [size, setSize] = React.useState(3);
  const [iconSize, setIconSize] = React.useState(3);

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonSizesMap[size]}
            >
              Button
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonSizesMap[size]}
            >
              Get Started <ArrowRightIcon />
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonSizesMap[size]}
            >
              <MailIcon />
              Inbox
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonSizesMap[size]}
              disabled
            >
              Disabled
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonSizesMap[size]}
              disabled
            >
              <Spinner />
              Loading...
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonIconSizesMap[iconSize]}
            >
              <SettingsIcon />
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonIconSizesMap[iconSize]}
              disabled
            >
              <SettingsIcon />
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={buttonIconSizesMap[iconSize]}
              disabled
            >
              <Spinner />
            </Button>
          </div>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="button-variant">Button Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="button-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {buttonVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="button-size">
            Button Size:{" "}
            <span className="inline-block leading-none font-normal text-primary-muted-foreground">
              {buttonSizesMap[size]}
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
        <div className="grid gap-3">
          <Label htmlFor="button-icon-size">
            Button Icon Size:{" "}
            <span className="inline-block leading-none font-normal text-primary-muted-foreground">
              {buttonIconSizesMap[iconSize]}
            </span>
          </Label>
          <Slider
            id="button-icon-size"
            min={1}
            max={4}
            step={1}
            value={[iconSize]}
            onValueChange={(value: number[]) => setIconSize(value[0])}
          />
        </div>
      </ComponentPlayground>
    </>
  );
}
