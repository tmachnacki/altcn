import {
  BoldIcon,
  BookmarkIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";

import { Toggle } from "~/components/ui/toggle";

import { ComponentContainer } from "../component-container";

export function ToggleDemo() {
  const variants = [
    "outline",
    "base",
    "accent",
    "surface",
    "primary",
    "primary-accent",
    "primary-surface",
    "primary-tron",
    "secondary",
    "secondary-accent",
    "secondary-surface",
    "secondary-tron",
  ] as const;

  return (
    <ComponentContainer>
      <div className="grid w-full place-items-center gap-8">
        {variants.map((variant) => (
          <div
            className="flex flex-wrap items-center gap-4"
            key={`toggle-${variant}`}
          >
            <Toggle aria-label="Toggle bold" variant={variant} defaultPressed>
              <BoldIcon />
            </Toggle>
            <Toggle aria-label="Toggle underline" variant={variant}>
              <UnderlineIcon />
            </Toggle>
            <Toggle aria-label="Toggle italic" variant={variant} disabled>
              Disabled
            </Toggle>
            <Toggle variant={variant} aria-label="Toggle italic">
              <ItalicIcon />
              Italic
            </Toggle>
            <Toggle
              aria-label="Toggle book"
              className="data-[state=on]:[&_svg]:fill-current"
              variant={variant}
            >
              <BookmarkIcon />
            </Toggle>
            <Toggle variant={variant} aria-label="Toggle extra small" size="xs">
              XS
            </Toggle>
            <Toggle variant={variant} aria-label="Toggle small" size="sm">
              SM
            </Toggle>
            <Toggle variant={variant} aria-label="Toggle large" size="lg">
              LG
            </Toggle>
          </div>
        ))}
      </div>
    </ComponentContainer>
  );
}
