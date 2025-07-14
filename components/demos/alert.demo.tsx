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
  AlertInsetColor,
  AlertTitle,
  alertVariants,
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
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

type Variant = keyof typeof alertVariants.variants.variant;
const variants = Object.keys(alertVariants.variants.variant) as Variant[];

const alertButtonVariant = (variant: Variant) => {
  switch (variant) {
    case "outline":
      return "surface";
    case "muted":
      return "surface";
    case "faded":
      return "surface";
    case "primary-muted":
      return "primary-surface";
    case "primary-faded":
      return "primary-surface";
    case "secondary-muted":
      return "secondary-surface";
    case "secondary-faded":
      return "secondary-surface";
    case "destructive-muted":
      return "destructive-surface";
    case "destructive-faded":
      return "destructive-surface";
    case "success-muted":
      return "success-surface";
    case "success-faded":
      return "success-surface";
    case "warning-muted":
      return "warning-surface";
    case "warning-faded":
      return "warning-surface";
  }
};

export function AlertDemo() {
  const [variant, setVariant] = React.useState("outline");
  const [showAlertCentered, setShowAlertCentered] = React.useState(true);
  const [showAlert, setShowAlert] = React.useState(true);

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
          <Alert variant={variant as Variant}>
            <CheckCircle2Icon />
            <AlertContent>
              <AlertTitle>Success! This is a standard alert</AlertTitle>
              <AlertDescription>
                This is a {variant} alert with default icon, title, and
                description.
              </AlertDescription>
            </AlertContent>
          </Alert>
          <Alert variant={variant as Variant}>
            <AlertInsetColor />
            <CheckCircle2Icon />
            <AlertContent>
              <AlertTitle>Success! This one has insetColor</AlertTitle>
              <AlertDescription>
                This is a {variant} alert with insetColor.
              </AlertDescription>
            </AlertContent>
          </Alert>
          <Alert variant={variant as Variant}>
            <AlertIcon type="success" />
            <AlertContent>
              <AlertTitle>Success! Your changes have been saved</AlertTitle>
              <AlertDescription>
                This is a {variant} alert with success type icon, title and
                description.
              </AlertDescription>
            </AlertContent>
          </Alert>
          <Alert align="center" variant={variant as Variant}>
            <AlertIcon type="info" />
            <AlertContent>
              <AlertTitle>
                FYI This one is centered with info type icon
              </AlertTitle>
            </AlertContent>
            <Button
              variant={alertButtonVariant(variant as Variant)}
              size="sm"
              className="h-6"
            >
              Undo
            </Button>
          </Alert>

          <Alert
            align="center"
            variant={variant as Variant}
            className={showAlertCentered ? "visible" : "invisible"}
          >
            <AlertIcon type="info" />
            <AlertContent>
              <AlertTitle>
                FYI This one is centered with info type icon
              </AlertTitle>
            </AlertContent>
            <Button
              variant={alertButtonVariant(variant as Variant)}
              size="sm"
              className="h-6"
            >
              Undo
            </Button>
            <AlertClose onClick={handleCloseAlertCentered} />
          </Alert>

          <Alert align="center" variant={variant as Variant}>
            <AlertIcon type="warning" />
            <AlertContent>
              <AlertDescription>
                Warning! This one has a description and warning type icon.
              </AlertDescription>
            </AlertContent>
            <Button
              variant={alertButtonVariant(variant as Variant)}
              size="sm"
              className="h-6"
            >
              Dismiss
            </Button>
          </Alert>
          <Alert variant={variant as Variant}>
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
                <Button
                  variant={alertButtonVariant(variant as Variant)}
                  size="sm"
                >
                  Details
                </Button>
              </AlertFooter>
            </AlertContent>
          </Alert>
          <Alert
            variant={variant as Variant}
            className={showAlert ? "visible" : "invisible"}
          >
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
                <Button
                  variant={alertButtonVariant(variant as Variant)}
                  size="sm"
                >
                  Details
                </Button>
              </AlertFooter>
            </AlertContent>
            <AlertClose onClick={handleCloseAlert} />
          </Alert>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="alert-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="alert-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {variants.map((variant) => (
                <SelectItem key={`alert-${variant}`} value={variant}>
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
