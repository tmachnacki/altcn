"use client";

import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
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

const avatarFallbackVariants = [
  "outline",
  "base",
  "accent",
  "muted",
  "surface",
  "faded",
  "primary",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "secondary",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
] as const;

export function AvatarDemo() {
  const [avatarFallbackVariant, setAvatarFallbackVariant] =
    React.useState("accent");

  return (
    <>
      <ComponentContainer>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback
              variant={
                avatarFallbackVariant as (typeof avatarFallbackVariants)[number]
              }
            >
              TM
            </AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback
              variant={
                avatarFallbackVariant as (typeof avatarFallbackVariants)[number]
              }
            />
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/tmachnacki.png"
              alt="@tmachnacki"
            />
            <AvatarFallback
              variant={
                avatarFallbackVariant as (typeof avatarFallbackVariants)[number]
              }
            >
              TM
            </AvatarFallback>
          </Avatar>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="avatar-fallback-variant">Fallback Variant</Label>
          <Select
            value={avatarFallbackVariant}
            onValueChange={setAvatarFallbackVariant}
          >
            <SelectTrigger id="avatar-fallback-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {avatarFallbackVariants.map((variant) => (
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
