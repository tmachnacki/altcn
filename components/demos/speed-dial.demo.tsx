"use client";

import * as React from "react";
import {
  ClipboardIcon,
  SaveIcon,
  PrinterIcon,
  ShareIcon,
  PlusIcon,
} from "lucide-react";
import { ComponentContainer } from "@/components/demos/component-container";
import { BackgroundPattern } from "@/components/demos/background-pattern";

import { Button } from "@/components/ui/button";

import {
  SpeedDial,
  SpeedDialContent,
  SpeedDialItem,
  SpeedDialTrigger,
} from "@/components/ui/speed-dial";

export function SpeedDialDemo() {
  return (
    <ComponentContainer>
      <div className="relative flex h-full min-h-96 w-full max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-lg border border-border-primary-faded bg-transparent p-24">
        <div className="absolute inset-0 flex shrink-0 items-center justify-center overflow-hidden">
          <BackgroundPattern className="shrink-0" />
        </div>

        <SpeedDial>
          <SpeedDialTrigger asChild>
            <Button
              variant="primary"
              size="icon-lg"
              className="absolute right-4 bottom-4 z-50 size-12 rounded-full shadow-md data-[state=open]:[&>svg]:rotate-45"
            >
              <PlusIcon className={`transition-transform`} />
            </Button>
          </SpeedDialTrigger>
          <SpeedDialContent contentVariant={"ghost"}>
            <SpeedDialItem label="Copy">
              <ClipboardIcon />
            </SpeedDialItem>
            <SpeedDialItem label="Save">
              <SaveIcon />
            </SpeedDialItem>
            <SpeedDialItem label="Print">
              <PrinterIcon />
            </SpeedDialItem>
            <SpeedDialItem label="Share">
              <ShareIcon />
            </SpeedDialItem>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </ComponentContainer>
  );
}
