import { InfoIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { ComponentContainer } from "~/components/component-container";

export function TooltipDemo() {
  return (
    <ComponentContainer>
      <div className="grid gap-8">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
        <div className="flex flex-wrap gap-2">
          {["top", "right", "bottom", "left"].map((side) => (
            <Tooltip key={`tooltip-${side}`}>
              <TooltipTrigger asChild>
                <Button variant="outline" className="capitalize">
                  {side}
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side={side as "top" | "right" | "bottom" | "left"}
              >
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="bg-base-950 text-base-50 capitalize hover:not-disabled:not-aria-disabled:bg-base-800 dark:bg-base-50 dark:text-base-950 dark:hover:not-disabled:not-aria-disabled:bg-base-200">
                default
              </Button>
            </TooltipTrigger>
            <TooltipContent variant="default">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="base" className="capitalize">
                base
              </Button>
            </TooltipTrigger>
            <TooltipContent variant="base">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="primary" className="capitalize">
                primary
              </Button>
            </TooltipTrigger>
            <TooltipContent variant="primary">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary" className="capitalize">
                secondary
              </Button>
            </TooltipTrigger>
            <TooltipContent variant="secondary">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="destructive" className="capitalize">
                destructive
              </Button>
            </TooltipTrigger>
            <TooltipContent variant="destructive">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-md">
              <InfoIcon />
              <span className="sr-only">Info</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            To learn more about how this works, check out the docs. If you have
            any questions, please reach out to us.
          </TooltipContent>
        </Tooltip>
      </div>
    </ComponentContainer>
  );
}
