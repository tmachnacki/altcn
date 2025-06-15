"use client";

import * as React from "react";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

import { Badge, BadgeClose } from "~/components/ui/badge";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

const badgeVariants = [
  "outline",
  "base",
  "accent",
  "muted",
  "surface",
  "faded",
  "dotted",
  "primary",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "primary-tron",
  "primary-dotted",
  "secondary",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
  "secondary-tron",
  "secondary-dotted",
  "destructive",
  "destructive-accent",
  "destructive-muted",
  "destructive-surface",
  "destructive-faded",
  "destructive-tron",
  "destructive-dotted",
  "success",
  "success-accent",
  "success-muted",
  "success-surface",
  "success-faded",
  "success-tron",
  "success-dotted",
  "warning",
  "warning-accent",
  "warning-muted",
  "warning-surface",
  "warning-faded",
  "warning-tron",
  "warning-dotted",
] as const;

export function BadgeDemo() {
  const [badgeVariant, setBadgeVariant] = React.useState("outline");

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-wrap gap-4">
          <Badge variant={badgeVariant as (typeof badgeVariants)[number]}>
            Badge
          </Badge>
          <Badge variant={badgeVariant as (typeof badgeVariants)[number]}>
            <CheckIcon />
            Icon
          </Badge>
          <Badge
            asChild
            variant={badgeVariant as (typeof badgeVariants)[number]}
          >
            <a href="#">
              Link
              <ArrowRightIcon />
            </a>
          </Badge>
          <Badge variant={badgeVariant as (typeof badgeVariants)[number]}>
            Close
            <BadgeClose />
          </Badge>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <fieldset>
          <div className="flex flex-col gap-3">
            <legend className="leading-none font-semibold">
              Badge Variant
            </legend>
            <RadioGroup
              onValueChange={setBadgeVariant}
              defaultValue={badgeVariant}
            >
              {badgeVariants.map((variant) => (
                <div key={variant} className="flex items-center gap-3">
                  <RadioGroupItem value={variant} id={variant} />
                  <Label htmlFor={variant}>{variant}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </fieldset>
      </ComponentPlayground>
    </>
  );
}
