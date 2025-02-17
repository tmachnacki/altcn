import { AlertCircleIcon, ArrowRightIcon, CheckIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4">
        <Badge>Primary</Badge>
        <Badge variant="primary-muted">Primary Muted</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="secondary-muted">Secondary Muted</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="destructive-muted">Destructive Muted</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="success-muted">Success Muted</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="warning-muted">Warning Muted</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="outline">
          <CheckIcon />
          Badge
        </Badge>
        <Badge variant="destructive">
          <AlertCircleIcon />
          Alert
        </Badge>
        <Badge className="size-5 rounded-full p-0 font-mono tabular-nums">
          8
        </Badge>
      </div>
      <div className="flex flex-wrap gap-4">
        <Badge asChild>
          <a href="#badge">
            Link <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="secondary">
          <a href="#badge">
            Link <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="destructive">
          <a href="#badge">
            Link <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="outline">
          <a href="#badge">
            Link <ArrowRightIcon />
          </a>
        </Badge>
      </div>
    </div>
  );
}
