import { Button } from "@/components/ui/button";
import { SettingsIcon, ArrowRightIcon, MailIcon } from "lucide-react";

import { Spinner } from "@/components/ui/spinner";

export function ButtonDemo() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4">
        <Button variant="accent">Accent</Button>
        <Button variant={"outline"}>Outline</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"link"}>Link</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="input">Input</Button>
        <Button variant="input" empty>
          Placeholder
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="primaryMuted">Primary Muted</Button>
        <Button variant="primaryFaded">Primary Faded</Button>
        <Button variant="primaryTron">Primary Tron</Button>
        <Button variant="primaryShadow">Primary Shadow</Button>
        <Button variant="primaryGradient">Primary Gradient</Button>
        <Button variant="primaryGhost">Primary Ghost</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondaryMuted">Secondary Muted</Button>
        <Button variant="secondaryFaded">Secondary Faded</Button>
        <Button variant="secondaryTron">Secondary Tron</Button>
        <Button variant="secondaryShadow">Secondary Shadow</Button>
        <Button variant="secondaryGradient">Secondary Gradient</Button>
        <Button variant="secondaryGhost">Secondary Ghost</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="destructive">Destructive</Button>
        <Button variant="destructiveMuted">Destructive Muted</Button>
        <Button variant="destructiveFaded">Destructive Faded</Button>
        <Button variant="destructiveTron">Destructive Tron</Button>
        <Button variant="destructiveShadow">Destructive Shadow</Button>
        <Button variant="destructiveGradient">Destructive Gradient</Button>
        <Button variant="destructiveGhost">Destructive Ghost</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button disabled>
          <Spinner />
          Loading
        </Button>
        <Button color="primary">
          Get Started
          <ArrowRightIcon />
        </Button>
        <Button color="primary">
          <MailIcon />
          Send Invite
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button size="lg">Large</Button>
        <Button>Default</Button>
        <Button size="sm">Small</Button>
        <Button size="xs">Extra small</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant={"outline"} size={"iconLg"}>
          <SettingsIcon />
        </Button>
        <Button variant="outline" size="icon">
          <SettingsIcon />
        </Button>
        <Button variant="outline" size="iconSm">
          <SettingsIcon />
        </Button>
        <Button variant="outline" size="iconXs">
          <SettingsIcon />
        </Button>
      </div>
    </div>
  );
}
