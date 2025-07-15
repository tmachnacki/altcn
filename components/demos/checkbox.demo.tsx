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
import { Switch } from "~/components/ui/switch";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

const checkboxVariants = ["base", "primary", "secondary"] as const;

export function CheckboxDemo() {
  const [variant, setVariant] = React.useState("primary");
  const [disabled, setDisabled] = React.useState(false);
  const [invalid, setInvalid] = React.useState(false);

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <Checkbox
              id="checkbox-terms"
              variant={variant as (typeof checkboxVariants)[number]}
              disabled={disabled}
              aria-invalid={invalid}
            />
            <Label htmlFor="checkbox-terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="checkbox-terms-2"
              defaultChecked
              variant={variant as (typeof checkboxVariants)[number]}
              disabled={disabled}
              aria-invalid={invalid}
            />
            <Label htmlFor="checkbox-terms-2" className="grid gap-2">
              <span>Accept terms and conditions</span>
              <p className="text-sm leading-normal font-normal text-muted-foreground">
                By clicking this checkbox, you agree to the terms and
                conditions.
              </p>
            </Label>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="checkbox-indeterminate"
              checked={"indeterminate"}
              variant={variant as (typeof checkboxVariants)[number]}
              disabled={disabled}
              aria-invalid={invalid}
            />
            <Label htmlFor="checkbox-indeterminate">
              Indeterminate checkbox
            </Label>
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
        <div className="flex items-center gap-3">
          <Switch
            id="checkbox-invalid"
            checked={invalid}
            onCheckedChange={setInvalid}
          />
          <Label htmlFor="checkbox-invalid">Invalid</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="checkbox-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="checkbox-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
