import { Button } from "@/components/ui/button";
import { SettingsIcon, ArrowRightIcon, MailIcon } from "lucide-react";

import { Spinner } from "@/components/ui/spinner";

export function ButtonDemo() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="primary-muted">Primary Muted</Button>
        <Button variant="primary-tron">Primary Tron</Button>
        <Button variant="primary-shadow">Primary Shadow</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary-muted">Secondary Muted</Button>
        <Button variant="secondary-tron">Secondary Tron</Button>
        <Button variant="secondary-shadow">Secondary Shadow</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="destructive">Destructive</Button>
        <Button variant="destructive-muted">Destructive Muted</Button>
        <Button variant="destructive-tron">Destructive Tron</Button>
        <Button variant="destructive-shadow">Destructive Shadow</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="gradient">Gradient</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button disabled>
          <Spinner />
          Loading
        </Button>
        <Button>
          Get Started
          <ArrowRightIcon />
        </Button>
        <Button>
          <MailIcon />
          Send Invite
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button size="lg">Large</Button>
        <Button>Default</Button>
        <Button size="sm">Small</Button>
        <Button size="xs">Extra Small</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant={"outline"} size={"icon-lg"}>
          <SettingsIcon />
        </Button>
        <Button variant="outline" size="icon">
          <SettingsIcon />
        </Button>
        <Button variant="outline" size="icon-sm">
          <SettingsIcon />
        </Button>
        <Button variant="outline" size="icon-xs">
          <SettingsIcon />
        </Button>
      </div>
    </div>
  );
}
