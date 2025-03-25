import { ComponentContainer } from "@/components/demos/component-container";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function SwitchDemo() {
  const switchVariants = [
    "primary",
    "primary-muted",
    "secondary",
    "secondary-muted",
  ] as const;

  return (
    <ComponentContainer>
      <div className="flex flex-1 flex-col items-center gap-4">
        {switchVariants.map((variant) => (
          <Label
            key={`switch-${variant}`}
            htmlFor={`switch-${variant}`}
            className="flex w-full items-center gap-2"
          >
            <Switch id={`switch-${variant}`} variant={variant} />
            <span>{variant}</span>
          </Label>
        ))}
      </div>
    </ComponentContainer>
  );
}
