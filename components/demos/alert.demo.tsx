"use client";

import * as React from "react";
import { CheckCircle2Icon } from "lucide-react";

import { sleep } from "~/lib/utils";

import {
  Alert,
  AlertClose,
  AlertContent,
  AlertDescription,
  AlertFooter,
  AlertIcon,
  AlertTitle,
} from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ComponentContainer } from "~/components/demos/component-container";
import { ComponentPlayground } from "~/components/demos/component-playground";

export function AlertDemo() {
  const [alertVariant, setAlertVariant] = React.useState("outline");
  const [showAlertCentered, setShowAlertCentered] = React.useState(true);
  const [showAlert, setShowAlert] = React.useState(true);

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

  async function handleCloseAlertCentered() {
    setShowAlertCentered(false);
    await sleep(2000);
    setShowAlertCentered(true);
  }

  async function handleCloseAlert() {
    setShowAlert(false);
    await sleep(2000);
    setShowAlert(true);
  }

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
            <AlertIcon type="success" />
            <AlertContent>
              <AlertTitle>Success! Your changes have been saved</AlertTitle>
              <AlertDescription>
                This is a {alertVariant} alert with success type icon, title
                and description.
              </AlertDescription>
            </AlertContent>
          </Alert>
          <Alert
            centered
            variant={alertVariant as (typeof alertVariants)[number]}
          >
            <AlertIcon type="info" />
            <AlertContent>
              <AlertTitle>
                FYI This one is centered with info type icon
              </AlertTitle>
            </AlertContent>
            <Button variant={"outline"} size="sm" className="h-6">
              Undo
            </Button>
          </Alert>
          {showAlertCentered && (
            <Alert
              centered
              variant={alertVariant as (typeof alertVariants)[number]}
              className="animate-out fade-out-0"
            >
              <AlertIcon type="info" />
              <AlertContent>
                <AlertTitle>
                  FYI This one is centered with info type icon
                </AlertTitle>
              </AlertContent>
              <Button variant={"outline"} size="sm" className="h-6">
                Undo
              </Button>
              <AlertClose onClick={handleCloseAlertCentered} />
            </Alert>
          )}
          <Alert
            centered
            variant={alertVariant as (typeof alertVariants)[number]}
          >
            <AlertIcon type="warning" />
            <AlertContent>
              <AlertDescription>
                Warning! This one has a description and warning type icon.
              </AlertDescription>
            </AlertContent>
            <Button variant={"outline"} size="sm" className="h-6">
              Dismiss
            </Button>
          </Alert>
          <Alert variant={alertVariant as (typeof alertVariants)[number]}>
            <AlertIcon type="error" />
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
          {showAlert && (
            <Alert variant={alertVariant as (typeof alertVariants)[number]} className="animate-out fade-out-0">
              <AlertIcon type="error" />
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
              <AlertClose onClick={handleCloseAlert} />
            </Alert>
          )}
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
