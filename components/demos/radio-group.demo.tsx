"use client";

import * as React from "react";

import { cn } from "~/lib/utils";

import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
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

const plans = [
  {
    id: "starter",
    name: "Starter Plan",
    description:
      "Perfect for small businesses getting started with our platform",
    price: "$10",
  },
  {
    id: "pro",
    name: "Pro Plan",
    description: "Advanced features for growing businesses with higher demands",
    price: "$20",
  },
] as const;

const variants = ["primary", "secondary"] as const;

export function RadioGroupDemo() {
  const [variant, setVariant] = React.useState("primary");

  return (
    <>
      <ComponentContainer>
        <div className="flex h-full w-full max-w-sm flex-1 flex-col gap-8">
          <RadioGroup
            defaultValue="comfortable"
            variant={variant as (typeof variants)[number]}
          >
            <div className="flex items-center gap-3">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="disabled" id="r4" disabled />
              <Label htmlFor="r4">Disabled</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="disabled" id="r5" disabled checked />
              <Label htmlFor="r5">Checked &amp; Disabled</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="invalid" id="r6" aria-invalid="true" />
              <Label htmlFor="r6">Invalid</Label>
            </div>
          </RadioGroup>
          <RadioGroup defaultValue="starter" className="w-full">
            {plans.map((plan) => (
              <Label
                data-variant={variant}
                className={cn(
                  "group flex items-start gap-3 rounded-lg border p-4 hover:bg-faded",
                  "data-[variant=primary]:has-[[data-state=checked]]:border-primary/50 data-[variant=primary]:has-[[data-state=checked]]:bg-primary-faded",
                  "data-[variant=secondary]:has-[[data-state=checked]]:border-secondary/50 data-[variant=secondary]:has-[[data-state=checked]]:bg-secondary-faded"
                )}
                key={`${plan.id}-primary`}
              >
                <RadioGroupItem
                  value={plan.id}
                  id={`${plan.name}-primary`}
                  variant={variant as (typeof variants)[number]}
                />
                <div className="grid gap-1 font-normal">
                  <div
                    className={cn(
                      "font-medium",
                      "group-data-[variant=primary]:group-has-[[data-state=checked]]:text-primary-accent-foreground",
                      "group-data-[variant=secondary]:group-has-[[data-state=checked]]:text-secondary-accent-foreground"
                    )}
                  >
                    {plan.name}
                  </div>
                  <div
                    className={cn(
                      "leading-snug text-muted-foreground",
                      "group-data-[variant=primary]:group-has-[[data-state=checked]]:text-primary-muted-foreground",
                      "group-data-[variant=secondary]:group-has-[[data-state=checked]]:text-secondary-muted-foreground"
                    )}
                  >
                    {plan.description}
                  </div>
                </div>
              </Label>
            ))}
          </RadioGroup>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="radio-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="radio-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {variants.map((variant) => (
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
