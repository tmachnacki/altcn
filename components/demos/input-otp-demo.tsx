"use client";

import * as React from "react";
import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  inputOTPSlotVariants,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { VariantProps } from "class-variance-authority";

export function InputOTPDemo() {
  return (
    <div className="flex flex-col gap-8">
      <InputOTPSimple />
      <InputOTPSimple split={true} />
      <InputOTPSimple variant="underlined" />
      <InputOTPSimple variant="underlined" split={true} />
      <InputOTPPattern />
      <InputOTPWithSeparator />
      <InputOTPWithSpacing />
    </div>
  );
}

function InputOTPSimple({
  variant,
  split,
}: VariantProps<typeof inputOTPSlotVariants> & { split?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-fit flex-col gap-2">
        <Label htmlFor="simple">Simple</Label>
        <InputOTP
          id="simple"
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
        <Label htmlFor="simple-error">Simple Error</Label>
        <InputOTP
          id="simple-error"
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

function InputOTPWithSpacing() {
  return (
    <div className="flex w-fit flex-col gap-2">
      <Label htmlFor="with-spacing">With Spacing</Label>
      <InputOTP id="with-spacing" maxLength={6}>
        <InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
          <InputOTPSlot index={0} aria-invalid="true" />
          <InputOTPSlot index={1} aria-invalid="true" />
          <InputOTPSlot index={2} aria-invalid="true" />
          <InputOTPSlot index={3} aria-invalid="true" />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
