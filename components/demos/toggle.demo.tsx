import {
  BoldIcon,
  BookmarkIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { ComponentContainer } from "./component-container";

export function ToggleDemo() {
  const variants = ["outline", "base", "accent", "primary", "primary-accent"] as const;

  return (
    <ComponentContainer>
      <div className="grid w-full gap-8">
        {variants.map((variant) => (
          <div
            className="flex flex-wrap items-center gap-4"
            key={`toggle-${variant}`}
          >
            <Toggle aria-label="Toggle italic" variant={variant}>
              <BoldIcon />
            </Toggle>
            <Toggle aria-label="Toggle italic" variant={variant}>
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
            <Toggle variant={variant} aria-label="Toggle italic" size="sm">
              Small
            </Toggle>
            <Toggle variant={variant} aria-label="Toggle italic" size="lg">
              Large
            </Toggle>
          </div>
        ))}
      </div>
    </ComponentContainer>
  );
}
