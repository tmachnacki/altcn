import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import { ComponentContainer } from "~/components/component-container";

export function CheckboxDemo() {
  return (
    <ComponentContainer>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <Checkbox id="checkbox-terms" />
          <Label htmlFor="checkbox-terms">Accept terms and conditions</Label>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox id="checkbox-terms-2" defaultChecked />
          <div className="grid gap-2">
            <Label htmlFor="checkbox-terms-2">
              Accept terms and conditions
            </Label>
            <p className="text-muted-foreground text-sm">
              By clicking this checkbox, you agree to the terms and conditions.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox
            id="checkbox-indeterminate-primary"
            checked={"indeterminate"}
            variant={"primary"}
          />
          <Label htmlFor="checkbox-indeterminate-primary">
            Indeterminate primary checkbox
          </Label>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox
            id="checkbox-disabled-checked"
            disabled
            checked
            variant={"primary"}
          />
          <Label htmlFor="checkbox-disabled-checked">
            Disabled checked checkbox
          </Label>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox id="checkbox-notifications" disabled />
          <Label htmlFor="checkbox-notifications">Enable notifications</Label>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox id="checkbox-invalid" aria-invalid={true} />
          <Label htmlFor="checkbox-invalid">Invalid checkbox</Label>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox id="checkbox-secondary" variant="secondary" />
          <Label htmlFor="checkbox-secondary">Secondary checkbox</Label>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox
            id="checkbox-indeterminate-secondary"
            variant="secondary"
            checked={"indeterminate"}
          />
          <Label htmlFor="checkbox-indeterminate-secondary">
            Indeterminate secondary checkbox
          </Label>
        </div>
        <Label className="hover:bg-faded has-[[aria-checked=true]]:border-primary/50 has-[[aria-checked=true]]:bg-primary-faded group flex items-start gap-3 rounded-lg border p-3">
          <Checkbox
            id="checkbox-primary-card"
            defaultChecked
            variant="primary"
          />
          <div className="grid gap-1.5 font-normal">
            <p className="group-has-[[aria-checked=true]]:text-primary-accent-foreground text-sm font-medium leading-none">
              Enable notifications
            </p>
            <p className="text-muted-foreground group-has-[[aria-checked=true]]:text-primary-muted-foreground text-sm">
              You can enable or disable notifications at any time.
            </p>
          </div>
        </Label>
        <Label className="hover:bg-faded has-[[aria-checked=true]]:border-secondary/50 has-[[aria-checked=true]]:bg-secondary-faded group flex items-start gap-3 rounded-lg border p-3">
          <Checkbox
            id="checkbox-secondary-card"
            defaultChecked
            variant="secondary"
          />
          <div className="grid gap-1.5 font-normal">
            <p className="group-has-[[aria-checked=true]]:text-secondary-accent-foreground text-sm font-medium leading-none">
              Enable notifications
            </p>
            <p className="text-muted-foreground group-has-[[aria-checked=true]]:text-secondary-muted-foreground text-sm">
              You can enable or disable notifications at any time.
            </p>
          </div>
        </Label>
        <Label className="hover:bg-faded has-[[aria-checked=true]]:border-destructive/50 has-[[aria-checked=true]]:bg-destructive-faded group flex items-start gap-3 rounded-lg border p-3">
          <Checkbox
            id="checkbox-invalid-card"
            defaultChecked
            aria-invalid={true}
          />
          <div className="grid gap-1.5 font-normal">
            <p className="group-has-[[aria-checked=true]]:text-destructive-accent-foreground text-sm font-medium leading-none">
              Enable notifications
            </p>
            <p className="text-muted-foreground group-has-[[aria-checked=true]]:text-destructive-muted-foreground text-sm">
              You can enable or disable notifications at any time.
            </p>
          </div>
        </Label>
      </div>
    </ComponentContainer>
  );
}
