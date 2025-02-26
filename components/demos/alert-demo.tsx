import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";

import {
  Alert,
  AlertIcon,
  AlertContent,
  AlertDescription,
  AlertTitle,
  AlertFooter,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export function AlertDemo() {
  return (
    <div className="grid max-w-xl items-start gap-4">
      <OutlineAlertDemo />
      <MutedAlertDemo />
      <FadedAlertDemo />

      <PrimaryAlertDemo />
      <PrimaryMutedAlertDemo />
      <PrimaryFadedAlertDemo />

      <SecondaryAlertDemo />
      <SecondaryMutedAlertDemo />
      <SecondaryFadedAlertDemo />

      <DestructiveAlertDemo />
      <DestructiveMutedAlertDemo />
      <DestructiveFadedAlertDemo />

      <SuccessAlertDemo />
      <SuccessMutedAlertDemo />
      <SuccessFadedAlertDemo />

      <WarningAlertDemo />
      <WarningMutedAlertDemo />
      <WarningFadedAlertDemo />
    </div>
  );
}

// outline (default)
function OutlineAlertDemo() {
  return (
    <>
      <Alert>
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a default alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor>
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a default alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered>
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert>
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// muted
function MutedAlertDemo() {
  return (
    <>
      <Alert variant="muted">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a muted alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="muted">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a muted alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="muted">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="muted">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// faded
function FadedAlertDemo() {
  return (
    <>
      <Alert variant="faded">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a faded alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="faded">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a faded alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="faded">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="faded">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// primary
function PrimaryAlertDemo() {
  return (
    <>
      <Alert variant="primary">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a primary alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="primary">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a primary alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="primary">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="primary">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// primary muted
function PrimaryMutedAlertDemo() {
  return (
    <>
      <Alert variant="primary-muted">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a primary muted alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="primary-muted">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a primary muted alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="primary-muted">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="primary-muted">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// primary faded
function PrimaryFadedAlertDemo() {
  return (
    <>
      <Alert variant="primary-faded">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a primary faded alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="primary-faded">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a primary faded alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="primary-faded">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="primary-faded">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// secondary
function SecondaryAlertDemo() {
  return (
    <>
      <Alert variant="secondary">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a secondary alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="secondary">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a secondary alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="secondary">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="secondary">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// secondary muted
function SecondaryMutedAlertDemo() {
  return (
    <>
      <Alert variant="secondary-muted">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a secondary muted alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="secondary-muted">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a secondary muted alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="secondary-muted">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="secondary-muted">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// secondary faded
function SecondaryFadedAlertDemo() {
  return (
    <>
      <Alert variant="secondary-faded">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a secondary faded alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="secondary-faded">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a secondary faded alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="secondary-faded">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="secondary-faded">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// destructive
function DestructiveAlertDemo() {
  return (
    <>
      <Alert variant="destructive">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a destructive alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="destructive">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a destructive alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="destructive">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="destructive">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// destructive muted
function DestructiveMutedAlertDemo() {
  return (
    <>
      <Alert variant="destructive-muted">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a destructive muted alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="destructive-muted">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a destructive muted alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="destructive-muted">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="destructive-muted">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// destructive faded
function DestructiveFadedAlertDemo() {
  return (
    <>
      <Alert variant="destructive-faded">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a destructive faded alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="destructive-faded">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a destructive faded alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="destructive-faded">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="destructive-faded">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// success
function SuccessAlertDemo() {
  return (
    <>
      <Alert variant="success">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a success alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="success">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a success alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="success">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="success">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// success muted
function SuccessMutedAlertDemo() {
  return (
    <>
      <Alert variant="success-muted">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a success muted alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="success-muted">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a success muted alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="success-muted">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="success-muted">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// success faded
function SuccessFadedAlertDemo() {
  return (
    <>
      <Alert variant="success-faded">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a success faded alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="success-faded">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a success faded alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="success-faded">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="success-faded">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// warning
function WarningAlertDemo() {
  return (
    <>
      <Alert variant="warning">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a warning alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="warning">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a warning alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="warning">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="warning">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// warning muted
function WarningMutedAlertDemo() {
  return (
    <>
      <Alert variant="warning-muted">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a warning muted alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="warning-muted">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a warning muted alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="warning-muted">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="warning-muted">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}

// warning faded
function WarningFadedAlertDemo() {
  return (
    <>
      <Alert variant="warning-faded">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a warning faded alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="warning-faded">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is a warning faded alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="warning-faded">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! This one is centered</AlertTitle>
        </AlertContent>
        <Button variant={"outline"} size="sm" className="h-6">
          Undo
        </Button>
      </Alert>
      <Alert variant="warning-faded">
        <AlertIcon>
          <AlertCircleIcon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
          <AlertFooter>
            <Button variant={"outline"} size="sm">
              Undo
            </Button>
          </AlertFooter>
        </AlertContent>
      </Alert>
    </>
  );
}
