import { AlertCircleIcon, ArrowRightIcon, CheckIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4">
        <Badge variant="outline">Outline</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge>Primary</Badge>
        <Badge variant="primaryMuted">Primary Muted</Badge>
        <Badge variant="primaryFaded">Primary Faded</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="secondaryMuted">Secondary Muted</Badge>
        <Badge variant="secondaryFaded">Secondary Faded</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="destructiveMuted">Destructive Muted</Badge>
        <Badge variant="destructiveFaded">Destructive Faded</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="successMuted">Success Muted</Badge>
        <Badge variant="successFaded">Success Faded</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="warningMuted">Warning Muted</Badge>
        <Badge variant="warningFaded">Warning Faded</Badge>
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
