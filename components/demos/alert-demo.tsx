"use client";

import * as React from "react";
import { CheckCircle2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComponentContainer } from "@/components/demos/component-container";
import { ComponentPlayground } from "@/components/demos/component-playground";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Alert,
  AlertIcon,
  AlertContent,
  AlertDescription,
  AlertTitle,
  AlertFooter,
} from "@/components/ui/alert";

export function AlertDemo() {
  const [alertVariant, setAlertVariant] = React.useState("outline");

  const alertVariants = [
    "outline",
    "muted",
    "faded",
    "primary",
    "primary-muted",
    "primary-faded",
    "secondary",
    "secondary-muted",
    "secondary-faded",
    "destructive",
    "destructive-muted",
    "destructive-faded",
    "success",
    "success-muted",
    "success-faded",
    "warning",
    "warning-muted",
    "warning-faded",
  ] as const;

  return (
    <>
      <ComponentContainer>
        <div className="flex w-full max-w-xl flex-col gap-4">
          <Alert variant={alertVariant as (typeof alertVariants)[number]}>
            <CheckCircle2Icon />
            <AlertContent>
              <AlertTitle>Success! This is a standard alert</AlertTitle>
              <AlertDescription>
                This is a {alertVariant} alert with default icon, title, and
                description.
              </AlertDescription>
            </AlertContent>
          </Alert>
          <Alert
            insetColor
            variant={alertVariant as (typeof alertVariants)[number]}
          >
            <CheckCircle2Icon />
            <AlertContent>
              <AlertTitle>Success! This one has insetColor</AlertTitle>
              <AlertDescription>
                This is a {alertVariant} alert with insetColor.
              </AlertDescription>
            </AlertContent>
          </Alert>
          <Alert variant={alertVariant as (typeof alertVariants)[number]}>
            <AlertIcon intent="success" />
            <AlertContent>
              <AlertTitle>Success! Your changes have been saved</AlertTitle>
              <AlertDescription>
                This is a {alertVariant} alert with success intent icon, title
                and description.
              </AlertDescription>
            </AlertContent>
          </Alert>

          <Alert
            centered
            variant={alertVariant as (typeof alertVariants)[number]}
          >
            <AlertIcon intent="info" />
            <AlertContent>
              <AlertTitle>FYI This one is centered with info intent icon</AlertTitle>
            </AlertContent>
            <Button variant={"outline"} size="sm" className="h-6">
              Dismiss
            </Button>
          </Alert>
          <Alert
            centered
            variant={alertVariant as (typeof alertVariants)[number]}
          >
            <AlertIcon intent="warning" />
            <AlertContent>
              <AlertDescription>
                Warning! This one has a description and warning intent icon.
              </AlertDescription>
            </AlertContent>
            <Button variant={"outline"} size="sm" className="h-6">
              Dismiss
            </Button>
          </Alert>
          <Alert variant={alertVariant as (typeof alertVariants)[number]}>
            <AlertIcon intent="error" />
            <AlertContent>
              <AlertTitle>Something went wrong!</AlertTitle>
              <AlertDescription>
                <p>Please verify your billing information and try again.</p>
                <ul className="list-inside list-disc">
                  <li>Check your card details</li>
                  <li>Ensure sufficient funds</li>
                  <li>Verify billing address</li>
                </ul>
              </AlertDescription>
              <AlertFooter>
                <Button variant={"outline"} size="sm">
                  Details
                </Button>
              </AlertFooter>
            </AlertContent>
          </Alert>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="flex flex-col gap-2">
          <Label htmlFor="alert-variant">Alert Variant</Label>
          <Select
            value={alertVariant}
            onValueChange={setAlertVariant}
            defaultValue="outline"
          >
            <SelectTrigger id="alert-variant" className="w-full">
              <SelectValue>{alertVariant}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {alertVariants.map((alertVariant) => (
                <SelectItem key={alertVariant} value={alertVariant}>
                  {alertVariant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
