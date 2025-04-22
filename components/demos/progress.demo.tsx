"use client";

import * as React from "react";

import { Progress } from "~/components/ui/progress";

export function ProgressDemo() {
  const variants = [
    "primary",
    "primary-muted",
    "primary-faded",
    "secondary",
    "secondary-muted",
    "secondary-faded",
  ] as const;

  return (
    <div className="flex-w flex h-full w-full flex-col gap-4">
      {variants.map((variant) => (
        <AnimatedProgress key={variant} variant={variant} />
      ))}
    </div>
  );
}

function AnimatedProgress({
  variant,
}: {
  variant:
    | "primary"
    | "secondary"
    | "primary-muted"
    | "secondary-muted"
    | "primary-faded"
    | "secondary-faded";
}) {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress variant={variant} value={progress} className="w-full max-w-sm" />
  );
}
