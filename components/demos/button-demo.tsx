import { Button } from "@/components/ui/button";
import { SettingsIcon, ArrowRightIcon, MailIcon } from "lucide-react";

import { Spinner } from "@/components/ui/spinner";

export function ButtonDemo() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4">
        <Button color="base" variant="solid">
          Base Solid
        </Button>
        <Button color="base" variant="muted">
          Base Muted
        </Button>
        <Button color="base" variant="outline">
          Base Outline
        </Button>
        <Button color="base" variant="shadow">
          Base Shadow
        </Button>
        <Button color="base" variant="gradient">
          Base Gradient
        </Button>
        <Button color="base" variant="ghost">
          Base Ghost
        </Button>
        <Button color="base" variant="link">
          Base Link
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button color="primary" variant="solid">
          Primary Solid
        </Button>
        <Button color="primary" variant="muted">
          Primary Muted
        </Button>
        <Button color="primary" variant="outline">
          Primary Outline
        </Button>
        <Button color="primary" variant="tron">
          Primary Tron
        </Button>
        <Button color="primary" variant="shadow">
          Primary Shadow
        </Button>
        <Button color="primary" variant="gradient">
          Primary Gradient
        </Button>
        <Button color="primary" variant="ghost">
          Primary Ghost
        </Button>
        <Button color="primary" variant="link">
          Primary Link
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button color="secondary" variant="solid">
          Secondary Solid
        </Button>
        <Button color="secondary" variant="muted">
          Secondary Muted
        </Button>
        <Button color="secondary" variant="outline">
          Secondary Outline
        </Button>
        <Button color="secondary" variant="tron">
          Secondary Tron
        </Button>
        <Button color="secondary" variant="shadow">
          Secondary Shadow
        </Button>
        <Button color="secondary" variant="gradient">
          Secondary Gradient
        </Button>
        <Button color="secondary" variant="ghost">
          Secondary Ghost
        </Button>
        <Button color="secondary" variant="link">
          Secondary Link
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button color="destructive" variant="solid">
          Destructive Solid
        </Button>
        <Button color="destructive" variant="muted">
          Destructive Muted
        </Button>
        <Button color="destructive" variant="outline">
          Destructive Outline
        </Button>
        <Button color="destructive" variant="tron">
          Destructive Tron
        </Button>
        <Button color="destructive" variant="shadow">
          Destructive Shadow
        </Button>
        <Button color="destructive" variant="gradient">
          Destructive Gradient
        </Button>
        <Button color="destructive" variant="ghost">
          Destructive Ghost
        </Button>
        <Button color="destructive" variant="link">
          Destructive Link
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button color="primary" disabled>
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
        <Button variant={"input"}>Input Button</Button>
        <Button variant={"input"} empty>
          Placeholder
        </Button>
        <Button size="lg">Large</Button>
        <Button>Default</Button>
        <Button size="sm">Small</Button>
        <Button size="xs">Extra small</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button color="base" variant={"outline"} size={"icon-lg"}>
          <SettingsIcon />
        </Button>
        <Button color="base" variant="outline" size="icon">
          <SettingsIcon />
        </Button>
        <Button color="base" variant="outline" size="icon-sm">
          <SettingsIcon />
        </Button>
        <Button color="base" variant="outline" size="icon-xs">
          <SettingsIcon />
        </Button>
      </div>
    </div>
  );
}
