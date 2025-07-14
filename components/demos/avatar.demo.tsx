"use client";

import * as React from "react";

import {
  Avatar,
  AvatarFallback,
  avatarFallbackVariants,
  AvatarImage,
} from "~/components/ui/avatar";
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

type Variant = keyof typeof avatarFallbackVariants.variants.variant;
const variants = Object.keys(
  avatarFallbackVariants.variants.variant
) as Variant[];

export function AvatarDemo() {
  const [variant, setVariant] = React.useState("accent");

  return (
    <>
      <ComponentContainer>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback variant={variant as Variant}>TM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback variant={variant as Variant} />
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/tmachnacki.png"
              alt="@tmachnacki"
            />
            <AvatarFallback variant={variant as Variant}>TM</AvatarFallback>
          </Avatar>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="avatar-fallback-variant">Fallback Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="avatar-fallback-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {variants.map((variant) => (
                <SelectItem key={`avatar-fallback-${variant}`} value={variant}>
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
