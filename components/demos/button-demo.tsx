import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

export function ButtonDemo() {
  return (
    <div className="space-y-8">
      <div className="flex flex-row flex-wrap gap-4">
        <Button>Primary</Button>
        <Button variant="primary-muted">Primary Muted</Button>
        <Button variant="primary-tron">Primary Tron</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary-muted">Secondary Muted</Button>
        <Button variant="secondary-tron">Secondary Tron</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="destructive-muted">Destructive Muted</Button>
        <Button variant="destructive-tron">Destructive Tron</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button disabled>
          <Spinner />
          Loading
        </Button>
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        <Button size="lg">Large</Button>
        <Button>Default</Button>
        <Button size="sm">Small</Button>
        <Button size="xs">Extra Small</Button>
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        <Button variant={"outline"} size={"icon-lg"}>
          <Settings2 />
        </Button>
        <Button variant="outline" size="icon">
          <Settings2 />
        </Button>
        <Button variant="outline" size="icon-sm">
          <Settings2 />
        </Button>
        <Button variant="outline" size="icon-xs">
          <Settings2 />
        </Button>
      </div>
    </div>
  );
}
