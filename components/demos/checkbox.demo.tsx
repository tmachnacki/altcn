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
          <Label
            className={`group flex items-start gap-3 rounded-lg border p-3 hover:bg-faded ${variant === "primary" ? "has-[[aria-checked=true]]:border-primary/50 has-[[aria-checked=true]]:bg-primary-faded" : "has-[[aria-checked=true]]:border-secondary/50 has-[[aria-checked=true]]:bg-secondary-faded"}`}
          >
            <Checkbox
              id="checkbox-primary-card"
              defaultChecked
              variant={variant as (typeof checkboxVariants)[number]}
            />
            <div className="grid gap-1.5 font-normal">
              <p
                className={`text-sm leading-none font-medium ${variant === "primary" ? "group-has-[[aria-checked=true]]:text-primary-accent-foreground" : "group-has-[[aria-checked=true]]:text-secondary-accent-foreground"}`}
              >
                Enable notifications
              </p>
              <p
                className={`text-sm text-muted-foreground ${variant === "primary" ? "group-has-[[aria-checked=true]]:text-primary-muted-foreground" : "group-has-[[aria-checked=true]]:text-secondary-muted-foreground"}`}
              >
                You can enable or disable notifications at any time.
              </p>
            </div>
          </Label>
          <Label className="group flex items-start gap-3 rounded-lg border p-3 hover:bg-faded has-[[aria-checked=true]]:border-destructive/50 has-[[aria-checked=true]]:bg-destructive-faded">
            <Checkbox
              id="checkbox-invalid-card"
              defaultChecked
              aria-invalid={true}
              variant={variant as (typeof checkboxVariants)[number]}
            />
            <div className="grid gap-1.5 font-normal">
              <p className="text-sm leading-none font-medium group-has-[[aria-checked=true]]:text-destructive-accent-foreground">
                Enable notifications
              </p>
              <p className="text-sm text-muted-foreground group-has-[[aria-checked=true]]:text-destructive-muted-foreground">
                You can enable or disable notifications at any time.
              </p>
            </div>
          </Label>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="checkbox-variant">Checkbox Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="checkbox-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {checkboxVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
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
