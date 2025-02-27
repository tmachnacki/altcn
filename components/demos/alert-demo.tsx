import { CheckCircle2Icon } from "lucide-react";

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
  const variants = [
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
    <div className="space-y-8">
      {variants.map((variant) => (
        <div className="grid max-w-xl items-start gap-4" key={variant}>
          <Alert variant={variant}>
            <AlertIcon intent="success" />
            <AlertContent>
              <AlertTitle>Success! Your changes have been saved</AlertTitle>
              <AlertDescription>
                This is a {variant} alert with alert icon, title and
                description.
              </AlertDescription>
            </AlertContent>
          </Alert>
          <Alert insetColor variant={variant}>
            <CheckCircle2Icon />
            <AlertContent>
              <AlertTitle>Success! This one has insetColor</AlertTitle>
              <AlertDescription>
                This is a {variant} alert with insetColor and default icon.
              </AlertDescription>
            </AlertContent>
          </Alert>
          <Alert centered variant={variant}>
            <AlertIcon intent="info" />
            <AlertContent>
              <AlertTitle>FYI This one is centered</AlertTitle>
            </AlertContent>
            <Button variant={"outline"} size="sm" className="h-6">
              Undo
            </Button>
          </Alert>
          <Alert variant={variant}>
            <AlertIcon intent="destructive" />
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
        </div>
      ))}
    </div>
  );
}
