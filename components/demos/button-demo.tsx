import { Button } from "@/components/ui/button";
import { SettingsIcon, ArrowRightIcon, MailIcon } from "lucide-react";

import { Spinner } from "@/components/ui/spinner";

export function ButtonDemo() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4">
        <Button variant={"outline"}>Outline</Button>
        <Button variant="accent">Accent</Button>
        <Button variant={"muted"}>Muted</Button>
        <Button variant={"surface"}>Surface</Button>
        <Button variant={"faded"}>Faded</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"link"}>Link</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="input">Input</Button>
        <Button variant="input" empty>
          Placeholder
        </Button>
        <Button variant="input" aria-invalid>
          Invalid
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="primary-accent">Primary Accent</Button>
        <Button variant="primary-muted">Primary Muted</Button>
        <Button variant="primary-surface">Primary Surface</Button>
        <Button variant="primary-faded">Primary Faded</Button>
        <Button variant="primary-tron">Primary Tron</Button>
        <Button variant="primary-shadow">Primary Shadow</Button>
        <Button variant="primary-gradient">Primary Gradient</Button>
        <Button variant="primary-ghost">Primary Ghost</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary-accent">Secondary Accent</Button>
        <Button variant="secondary-muted">Secondary Muted</Button>
        <Button variant="secondary-surface">Secondary Surface</Button>
        <Button variant="secondary-faded">Secondary Faded</Button>
        <Button variant="secondary-tron">Secondary Tron</Button>
        <Button variant="secondary-shadow">Secondary Shadow</Button>
        <Button variant="secondary-gradient">Secondary Gradient</Button>
        <Button variant="secondary-ghost">Secondary Ghost</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="destructive">Destructive</Button>
        <Button variant="destructive-accent">Destructive Accent</Button>
        <Button variant="destructive-muted">Destructive Muted</Button>
        <Button variant="destructive-surface">Destructive Surface</Button>
        <Button variant="destructive-faded">Destructive Faded</Button>
        <Button variant="destructive-tron">Destructive Tron</Button>
        <Button variant="destructive-shadow">Destructive Shadow</Button>
        <Button variant="destructive-gradient">Destructive Gradient</Button>
        <Button variant="destructive-ghost">Destructive Ghost</Button>
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
