import { Badge, BadgeClose, BadgeDot } from "@/components/ui/badge";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function BadgeDemo() {
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-8">
      <div className="flex flex-wrap gap-4">
        <Badge variant="outline">Outline</Badge>
        <Badge variant="outline">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="outline">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="outline">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="accent">Accent</Badge>
        <Badge variant="accent">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="accent">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="accent">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="muted">Muted</Badge>
        <Badge variant="muted">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="muted">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="muted">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="surface">Surface</Badge>
        <Badge variant="surface">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="surface">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="surface">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="faded">Faded</Badge>
        <Badge variant="faded">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="faded">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="faded">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="dotted">
          <BadgeDot />
          Dotted
        </Badge>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-4">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="primary">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="primary">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="primary">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="primary-accent">Accent</Badge>
        <Badge variant="primary-accent">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="primary-accent">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="primary-accent">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="primary-muted">Muted</Badge>
        <Badge variant="primary-muted">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="primary-muted">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="primary-muted">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="primary-surface">Surface</Badge>
        <Badge variant="primary-surface">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="primary-surface">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="primary-surface">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="primary-faded">Faded</Badge>
        <Badge variant="primary-faded">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="primary-faded">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="primary-faded">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="primary-tron">Tron</Badge>
        <Badge variant="primary-tron">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="primary-tron">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="primary-tron">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="primary-dotted">
          <BadgeDot />
          Dotted
        </Badge>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-4">
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="secondary">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="secondary">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="secondary">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="secondary-accent">Accent</Badge>
        <Badge variant="secondary-accent">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="secondary-accent">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="secondary-accent">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="secondary-muted">Muted</Badge>
        <Badge variant="secondary-muted">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="secondary-muted">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="secondary-muted">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="secondary-surface">Surface</Badge>
        <Badge variant="secondary-surface">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="secondary-surface">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="secondary-surface">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="secondary-faded">Faded</Badge>
        <Badge variant="secondary-faded">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="secondary-faded">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="secondary-faded">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="secondary-dotted">
          <BadgeDot />
          Dotted
        </Badge>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-4">
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="destructive">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="destructive">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="destructive">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="destructive-accent">Accent</Badge>
        <Badge variant="destructive-accent">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="destructive-accent">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="destructive-accent">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="destructive-muted">Muted</Badge>
        <Badge variant="destructive-muted">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="destructive-muted">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="destructive-muted">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="destructive-surface">Surface</Badge>
        <Badge variant="destructive-surface">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="destructive-surface">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="destructive-surface">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="destructive-faded">Faded</Badge>
        <Badge variant="destructive-faded">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="destructive-faded">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="destructive-faded">
          Close
          <BadgeClose />
        </Badge>
        <Badge variant="destructive-dotted">
          <BadgeDot />
          Dotted
        </Badge>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-4">
        <Badge variant="success">Success</Badge>
        <Badge variant="success">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="success">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="success">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="success-accent">Accent</Badge>
        <Badge variant="success-accent">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="success-accent">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="success-accent">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="success-muted">Muted</Badge>
        <Badge variant="success-muted">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="success-muted">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="success-muted">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="success-surface">Surface</Badge>
        <Badge variant="success-surface">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="success-surface">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="success-surface">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="success-faded">Faded</Badge>
        <Badge variant="success-faded">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="success-faded">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="success-faded">
          Close
          <BadgeClose />
        </Badge>
        <Badge variant="success-dotted">
          <BadgeDot />
          Dotted
        </Badge>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-4">
        <Badge variant="warning">Warning</Badge>
        <Badge variant="warning">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="warning">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="warning">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="warning-accent">Accent</Badge>
        <Badge variant="warning-accent">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="warning-accent">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="warning-accent">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="warning-muted">Muted</Badge>
        <Badge variant="warning-muted">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="warning-muted">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="warning-muted">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="warning-surface">Surface</Badge>
        <Badge variant="warning-surface">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="warning-surface">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="warning-surface">
          Close
          <BadgeClose />
        </Badge>

        <Badge variant="warning-faded">Faded</Badge>
        <Badge variant="warning-faded">
          <CheckIcon />
          Icon
        </Badge>
        <Badge asChild variant="warning-faded">
          <a href="#">
            Link
            <ArrowRightIcon />
          </a>
        </Badge>
        <Badge variant="warning-faded">
          Close
          <BadgeClose />
        </Badge>
        <Badge variant="warning-dotted">
          <BadgeDot />
          Dotted
        </Badge>
      </div>
    </div>
  );
}
