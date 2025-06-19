"use client";

import * as React from "react";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

import { sleep } from "~/lib/utils";

import { Badge, BadgeClose } from "~/components/ui/badge";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

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
  const [showBadge, setShowBadge] = React.useState(true);

  async function handleCloseBadge() {
    setShowBadge(false);
    await sleep(2000);
    setShowBadge(true);
  }

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
          {showBadge && (
            <Badge variant={badgeVariant as (typeof badgeVariants)[number]}>
              Close
              <BadgeClose onClick={handleCloseBadge} />
            </Badge>
          )}
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="badge-variant">Variant</Label>
          <Select value={badgeVariant} onValueChange={setBadgeVariant}>
            <SelectTrigger id="badge-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {badgeVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
