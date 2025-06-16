"use client";

import * as React from "react";
import { ArrowRightIcon, MailIcon, SettingsIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
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

const buttonSizes = ["default", "sm", "lg", "xs"] as const;
const buttonIconSizes = ["icon", "icon-sm", "icon-lg", "icon-xs"] as const;

export function ButtonDemo() {
  const [variant, setVariant] = React.useState("outline");
  const [size, setSize] = React.useState("default");
  const [iconSize, setIconSize] = React.useState("icon");

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={size as (typeof buttonSizes)[number]}
            >
              Button
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={size as (typeof buttonSizes)[number]}
            >
              Get Started <ArrowRightIcon />
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={size as (typeof buttonSizes)[number]}
            >
              <MailIcon />
              Inbox
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={size as (typeof buttonSizes)[number]}
              disabled
            >
              Disabled
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={size as (typeof buttonSizes)[number]}
              disabled
            >
              <Spinner />
              Loading...
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={iconSize as (typeof buttonIconSizes)[number]}
            >
              <SettingsIcon />
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={iconSize as (typeof buttonIconSizes)[number]}
              disabled
            >
              <SettingsIcon />
            </Button>
            <Button
              variant={variant as (typeof buttonVariants)[number]}
              size={iconSize as (typeof buttonIconSizes)[number]}
              disabled
            >
              <Spinner />
            </Button>
          </div>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <fieldset>
          <div className="flex flex-col gap-3">
            <legend className="leading-none font-semibold">
              Button Variant
            </legend>
            <RadioGroup value={variant} onValueChange={setVariant}>
              {buttonVariants.map((variant) => (
                <div className="flex items-center gap-3" key={variant}>
                  <RadioGroupItem value={variant} id={variant}>
                    {variant}
                  </RadioGroupItem>
                  <Label htmlFor={variant}>{variant}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </fieldset>
        <fieldset>
          <div className="flex flex-col gap-3">
            <legend className="leading-none font-semibold">Button Size</legend>
            <RadioGroup value={size} onValueChange={setSize}>
              {buttonSizes.map((size) => (
                <div className="flex items-center gap-3" key={size}>
                  <RadioGroupItem value={size} id={size}>
                    {size}
                  </RadioGroupItem>
                  <Label htmlFor={size}>{size}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </fieldset>
        <fieldset>
          <div className="flex flex-col gap-3">
            <legend className="leading-none font-semibold">
              Button Icon Size
            </legend>
            <RadioGroup value={iconSize} onValueChange={setIconSize}>
              {buttonIconSizes.map((iconSize) => (
                <div className="flex items-center gap-3" key={iconSize}>
                  <RadioGroupItem value={iconSize} id={iconSize}>
                    {iconSize}
                  </RadioGroupItem>
                  <Label htmlFor={iconSize}>{iconSize}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </fieldset>
      </ComponentPlayground>
    </>
  );
}
