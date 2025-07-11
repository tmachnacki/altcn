"use client";

import * as React from "react";
import { CheckCircle2Icon } from "lucide-react";

import { cn, sleep } from "~/lib/utils";

import {
  Alert,
  AlertClose,
  AlertContent,
  AlertDescription,
  AlertFooter,
  AlertIcon,
  AlertInsetColor,
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
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

const alertVariants = [
  "outline",
  "base",
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

const alertButtonVariant = (variant: (typeof alertVariants)[number]) => {
  switch (variant) {
    case "outline":
      return "outline";
    case "base":
      return "base";
    case "muted":
      return "muted";
    case "faded":
      return "faded";

    case "primary":
      return "primary";
    case "primary-muted":
      return "primary-muted";
    case "primary-faded":
      return "primary-faded";

    case "secondary":
      return "secondary";
    case "secondary-muted":
      return "secondary-muted";
    case "secondary-faded":
      return "secondary-faded";

    case "destructive":
      return "destructive";
    case "destructive-muted":
      return "destructive-muted";
    case "destructive-faded":
      return "destructive-faded";

    case "success":
      return "success";
    case "success-muted":
      return "success-muted";
    case "success-faded":
      return "success-faded";

    case "warning":
      return "warning";
    case "warning-muted":
      return "warning-muted";
    case "warning-faded":
      return "warning-faded";
  }
};

const alertButtonClassNames = (variant: (typeof alertVariants)[number]) => {
  switch (variant) {
    case "base":
      return "border border-base-foreground/50";
    case "primary":
      return "border border-primary-foreground/50";
    case "secondary":
      return "border border-secondary-foreground/50";
    case "destructive":
      return "border border-destructive-foreground/50";
    case "success":
      return "border border-success-foreground/50";
    case "warning":
      return "border border-warning-foreground/50";
    default:
      return "";
  }
};

export function AlertDemo() {
  const [alertVariant, setAlertVariant] = React.useState("outline");
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
          <Alert variant={alertVariant as (typeof alertVariants)[number]}>
            <AlertInsetColor />
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
                This is a {alertVariant} alert with success type icon, title and
                description.
              </AlertDescription>
            </AlertContent>
          </Alert>
          <Alert
            align="center"
            variant={alertVariant as (typeof alertVariants)[number]}
          >
            <AlertIcon type="info" />
            <AlertContent>
              <AlertTitle>
                FYI This one is centered with info type icon
              </AlertTitle>
            </AlertContent>
            <Button
              variant={alertButtonVariant(
                alertVariant as (typeof alertVariants)[number]
              )}
              size="sm"
              className={cn(
                "h-6",
                alertButtonClassNames(
                  alertVariant as (typeof alertVariants)[number]
                )
              )}
            >
              Undo
            </Button>
          </Alert>
          {showAlertCentered && (
            <Alert
              align="center"
              variant={alertVariant as (typeof alertVariants)[number]}
            >
              <AlertIcon type="info" />
              <AlertContent>
                <AlertTitle>
                  FYI This one is centered with info type icon
                </AlertTitle>
              </AlertContent>
              <Button
                variant={alertButtonVariant(
                  alertVariant as (typeof alertVariants)[number]
                )}
                size="sm"
                className={cn(
                  "h-6",
                  alertButtonClassNames(
                    alertVariant as (typeof alertVariants)[number]
                  )
                )}
              >
                Undo
              </Button>
              <AlertClose onClick={handleCloseAlertCentered} />
            </Alert>
          )}
          <Alert
            align="center"
            variant={alertVariant as (typeof alertVariants)[number]}
          >
            <AlertIcon type="warning" />
            <AlertContent>
              <AlertDescription>
                Warning! This one has a description and warning type icon.
              </AlertDescription>
            </AlertContent>
            <Button
              variant={alertButtonVariant(
                alertVariant as (typeof alertVariants)[number]
              )}
              size="sm"
              className={cn(
                "h-6",
                alertButtonClassNames(
                  alertVariant as (typeof alertVariants)[number]
                )
              )}
            >
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
                <Button
                  variant={alertButtonVariant(
                    alertVariant as (typeof alertVariants)[number]
                  )}
                  size="sm"
                  className={cn(
                    alertButtonClassNames(
                      alertVariant as (typeof alertVariants)[number]
                    )
                  )}
                >
                  Details
                </Button>
              </AlertFooter>
            </AlertContent>
          </Alert>
          {showAlert && (
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
                  <Button
                    variant={alertButtonVariant(
                      alertVariant as (typeof alertVariants)[number]
                    )}
                    size="sm"
                    className={cn(
                      alertButtonClassNames(
                        alertVariant as (typeof alertVariants)[number]
                      )
                    )}
                  >
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
        <div className="grid gap-2">
          <Label htmlFor="alert-variant">Variant</Label>
          <Select value={alertVariant} onValueChange={setAlertVariant}>
            <SelectTrigger id="alert-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {alertVariants.map((variant) => (
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
