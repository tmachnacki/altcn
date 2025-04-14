import {
  BoldIcon,
  BookmarkIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { ComponentContainer } from "./component-container";

export function ToggleDemo() {
  return (
    <ComponentContainer>
      <div className="grid w-full gap-8">
        <div className="flex flex-wrap items-center gap-4">
          <Toggle aria-label="Toggle italic">
            <BoldIcon />
          </Toggle>
          <Toggle aria-label="Toggle italic" variant="default">
            <UnderlineIcon />
          </Toggle>
          <Toggle aria-label="Toggle italic" variant="default" disabled>
            Disabled
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <ItalicIcon />
            Italic
          </Toggle>
          <Toggle
            aria-label="Toggle book"
            className="data-[state=on]:[&_svg]:fill-accent-foreground"
          >
            <BookmarkIcon />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic" size="sm">
            Small
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic" size="lg">
            Large
          </Toggle>
        </div>
      </div>
    </ComponentContainer>
  );
}
