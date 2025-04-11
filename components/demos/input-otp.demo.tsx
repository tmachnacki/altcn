"use client";

import * as React from "react";
import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { ComponentContainer } from "@/components/demos/component-container";

export function InputOTPDemo() {
  return (
    <ComponentContainer>
      <div className="flex flex-col gap-8">
        <InputOTPSimple />
        <InputOTPSimple split={true} />
        <InputOTPSimple variant="muted" />
        <InputOTPSimple variant="muted" split={true} />
        <InputOTPSimple variant="underlined" />
        <InputOTPSimple variant="underlined" split={true} />
        <InputOTPSimple variant="primary" />
        <InputOTPSimple variant="primary" split={true} />
        <InputOTPSimple variant="secondary" />
        <InputOTPSimple variant="secondary" split={true} />
        <InputOTPPattern />
        <InputOTPWithSeparator />
      </div>
    </ComponentContainer>
  );
}

function InputOTPSimple({
  variant,
  split,
}: Pick<React.ComponentProps<typeof InputOTP>, "variant" | "split">) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-fit flex-col gap-2">
        <Label
          htmlFor={split ? `simple-${variant}-split` : `simple-${variant}`}
        >
          Simple
        </Label>
        <InputOTP
          id={split ? `simple-${variant}-split` : `simple-${variant}`}
          maxLength={6}
          placeholder="000000"
          variant={variant}
          split={split}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="flex w-fit flex-col gap-2">
        <Label
          htmlFor={
            split
              ? `simple-disabled-${variant}-split`
              : `simple-disabled-${variant}`
          }
        >
          Simple Disabled
        </Label>
        <InputOTP
          id={
            split
              ? `simple-disabled-${variant}-split`
              : `simple-disabled-${variant}`
          }
          maxLength={6}
          placeholder="000000"
          variant={variant}
          split={split}
          disabled
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="flex w-fit flex-col gap-2">
        <Label
          htmlFor={
            split ? `simple-error-${variant}-split` : `simple-error-${variant}`
          }
        >
          Simple Error
        </Label>
        <InputOTP
          id={
            split ? `simple-error-${variant}-split` : `simple-error-${variant}`
          }
          maxLength={6}
          placeholder="000000"
          variant={variant}
          split={split}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} aria-invalid="true" />
            <InputOTPSlot index={1} aria-invalid="true" />
            <InputOTPSlot index={2} aria-invalid="true" />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} aria-invalid="true" />
            <InputOTPSlot index={4} aria-invalid="true" />
            <InputOTPSlot index={5} aria-invalid="true" />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
}

function InputOTPPattern() {
  return (
    <div className="flex w-fit flex-col gap-2">
      <Label htmlFor="digits-only">Digits Only</Label>
      <InputOTP id="digits-only" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}

function InputOTPWithSeparator() {
  const [value, setValue] = React.useState("123456");

  return (
    <div className="flex w-fit flex-col gap-2">
      <Label htmlFor="with-separator">With Separator</Label>
      <InputOTP
        id="with-separator"
        maxLength={6}
        value={value}
        onChange={setValue}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
