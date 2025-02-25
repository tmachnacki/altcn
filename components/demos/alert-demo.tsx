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
      {/* <AccentAlertDemo /> */}
      {/* <MutedAlertDemo /> */}
      <FadedAlertDemo />
      {/* <PrimaryAlertDemo /> */}
      {/* <PrimaryMutedAlertDemo /> */}
      <PrimaryFadedAlertDemo />
    </div>
  );
}

function OutlineAlertDemo() {
  return (
    <>
      {/* outline (default) */}
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

function AccentAlertDemo() {
  return (
    <>
      {/* accent */}
      <Alert variant="accent">
        <AlertIcon>
          <CheckCircle2Icon />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is an accent alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert insetColor variant="accent">
        <CheckCircle2Icon />
        <AlertContent>
          <AlertTitle>Success! This one has insetColor</AlertTitle>
          <AlertDescription>
            This is an accent alert with icon, title and description.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert centered variant="accent">
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
      <Alert variant="accent">
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

function MutedAlertDemo() {
  return (
    <>
      {/* muted */}
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

function FadedAlertDemo() {
  return (
    <>
      {/* faded */}
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

function PrimaryAlertDemo() {
  return (
    <>
      {/* primary */}
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

function PrimaryMutedAlertDemo() {
  return (
    <>
      {/* primary muted*/}
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

function PrimaryFadedAlertDemo() {
  return (
    <>
      {/* primary faded */}
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
