"use client";

import * as React from "react";

import { Checkbox } from "~/components/ui/checkbox";
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

const checkboxVariants = ["primary", "secondary"] as const;

export function CheckboxDemo() {
  const [variant, setVariant] = React.useState("primary");

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <Checkbox
              id="checkbox-terms"
              variant={variant as (typeof checkboxVariants)[number]}
            />
            <Label htmlFor="checkbox-terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="checkbox-terms-2"
              defaultChecked
              variant={variant as (typeof checkboxVariants)[number]}
            />
            <div className="grid gap-2">
              <Label htmlFor="checkbox-terms-2">
                Accept terms and conditions
              </Label>
              <p className="text-sm text-muted-foreground">
                By clicking this checkbox, you agree to the terms and
                conditions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="checkbox-indeterminate"
              checked={"indeterminate"}
              variant={variant as (typeof checkboxVariants)[number]}
            />
            <Label htmlFor="checkbox-indeterminate">
              Indeterminate checkbox
            </Label>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="checkbox-disabled-checked"
              disabled
              checked
              variant={variant as (typeof checkboxVariants)[number]}
            />
            <Label htmlFor="checkbox-disabled-checked">
              Disabled checked checkbox
            </Label>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="checkbox-disabled"
              disabled
              variant={variant as (typeof checkboxVariants)[number]}
            />
            <Label htmlFor="checkbox-disabled">Disabled checkbox</Label>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="checkbox-invalid"
              aria-invalid={true}
              variant={variant as (typeof checkboxVariants)[number]}
            />
            <Label htmlFor="checkbox-invalid">Invalid checkbox</Label>
          </div>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="checkbox-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="checkbox-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {checkboxVariants.map((variant) => (
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
