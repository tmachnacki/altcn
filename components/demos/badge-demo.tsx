import { AlertCircleIcon, ArrowRightIcon, CheckIcon } from "lucide-react";

import { Badge, BadgeClose, BadgeDot } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4">
        <Badge variant="outline">Outline</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="muted">Muted</Badge>
        <Badge variant="faded">Faded</Badge>
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
        <Badge asChild variant="accent">
          <a href="#badge">
            Accent <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="outline">
          <a href="#badge">
            Outline <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="faded">
          <a href="#badge">
            Faded <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild>
          <a href="#badge">
            Primary <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="primaryMuted">
          <a href="#badge">
            Muted <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="primaryFaded">
          <a href="#badge">
            Faded <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="secondary">
          <a href="#badge">
            Secondary <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="secondaryMuted">
          <a href="#badge">
            Muted <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="secondaryFaded">
          <a href="#badge">
            Faded <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="destructive">
          <a href="#badge">
            Destructive <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="destructiveMuted">
          <a href="#badge">
            Muted <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="destructiveFaded">
          <a href="#badge">
            Faded <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="success">
          <a href="#badge">
            Success <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="successMuted">
          <a href="#badge">
            Muted <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="successFaded">
          <a href="#badge">
            Faded <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="warning">
          <a href="#badge">
            Warning <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="warningMuted">
          <a href="#badge">
            Muted <ArrowRightIcon />
          </a>
        </Badge>
        <Badge asChild variant="warningFaded">
          <a href="#badge">
            Faded <ArrowRightIcon />
          </a>
        </Badge>
      </div>
      <div className="flex flex-wrap gap-4">
        <Badge variant="outline">
          <BadgeDot className="fill-muted-foreground" />
          Badge
        </Badge>
        <Badge variant="outline">
          <BadgeDot className="fill-primary" />
          Badge
        </Badge>
        <Badge variant="outline">
          <BadgeDot className="fill-secondary" />
          Badge
        </Badge>
        <Badge variant="outline">
          <BadgeDot className="fill-destructive" />
          Badge
        </Badge>
        <Badge variant="outline">
          <BadgeDot className="fill-success" />
          Badge
        </Badge>
        <Badge variant="outline">
          <BadgeDot className="fill-warning" />
          Badge
        </Badge>
      </div>
      <div className="flex flex-wrap gap-4">
        <Badge variant="outline">
          Badge
          <BadgeClose />
        </Badge>
      </div>
    </div>
  );
}
