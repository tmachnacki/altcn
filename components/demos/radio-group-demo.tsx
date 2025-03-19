import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const plans = [
  {
    id: "starter",
    name: "Starter Plan",
    description:
      "Perfect for small businesses getting started with our platform",
    price: "$10",
  },
  {
    id: "pro",
    name: "Pro Plan",
    description: "Advanced features for growing businesses with higher demands",
    price: "$20",
  },
] as const;

export function RadioGroupDemo() {
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-8">
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center gap-3">
          <RadioGroupItem value="default" id="p1" />
          <Label htmlFor="p1">Default</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="comfortable" id="p2" />
          <Label htmlFor="p2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="compact" id="p3" />
          <Label htmlFor="p3">Compact</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="disabled" id="p4" disabled />
          <Label htmlFor="p4">Disabled</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="invalid" id="p5" aria-invalid />
          <Label htmlFor="p5">Invalid</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="comfortable" variant="secondary">
        <div className="flex items-center gap-3">
          <RadioGroupItem value="default" id="s1" />
          <Label htmlFor="s1">Default</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="comfortable" id="s2" />
          <Label htmlFor="s2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="compact" id="s3" />
          <Label htmlFor="s3">Compact</Label>
        </div>{" "}
        <div className="flex items-center gap-3">
          <RadioGroupItem value="disabled" id="s4" disabled />
          <Label htmlFor="s4">Disabled</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="invalid" id="s5" aria-invalid />
          <Label htmlFor="s5">Invalid</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="comfortable" variant="destructive">
        <div className="flex items-center gap-3">
          <RadioGroupItem value="default" id="d1" />
          <Label htmlFor="d1">Default</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="comfortable" id="d2" />
          <Label htmlFor="d2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="compact" id="d3" />
          <Label htmlFor="d3">Compact</Label>
        </div>{" "}
        <div className="flex items-center gap-3">
          <RadioGroupItem value="disabled" id="d4" disabled />
          <Label htmlFor="d4">Disabled</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="invalid" id="d5" aria-invalid />
          <Label htmlFor="d5">Invalid</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="starter" className="max-w-sm">
        {plans.map((plan) => (
          <Label
            className="group flex items-start gap-3 rounded-lg border p-4 hover:bg-faded has-[[data-state=checked]]:border-primary/50 has-[[data-state=checked]]:bg-primary-faded"
            key={`${plan.id}-primary`}
          >
            <RadioGroupItem
              value={plan.id}
              id={`${plan.name}-primary`}
              variant="primary"
            />
            <div className="grid gap-1 font-normal">
              <div className="font-medium group-has-[[data-state=checked]]:text-primary-accent-foreground">
                {plan.name}
              </div>
              <div className="leading-snug text-muted-foreground group-has-[[data-state=checked]]:text-primary-muted-foreground">
                {plan.description}
              </div>
            </div>
          </Label>
        ))}
      </RadioGroup>
      <RadioGroup defaultValue="starter" className="max-w-sm">
        {plans.map((plan) => (
          <Label
            className="group flex items-start gap-3 rounded-lg border p-4 hover:bg-faded has-[[data-state=checked]]:border-secondary/50 has-[[data-state=checked]]:bg-secondary-faded"
            key={`${plan.id}-secondary`}
          >
            <RadioGroupItem
              value={plan.id}
              id={`${plan.name}-secondary`}
              variant="secondary"
            />
            <div className="grid gap-1 font-normal">
              <div className="font-medium group-has-[[data-state=checked]]:text-secondary-accent-foreground">
                {plan.name}
              </div>
              <div className="leading-snug text-muted-foreground group-has-[[data-state=checked]]:text-secondary-muted-foreground">
                {plan.description}
              </div>
            </div>
          </Label>
        ))}
      </RadioGroup>
      <RadioGroup defaultValue="starter" className="max-w-sm">
        {plans.map((plan) => (
          <Label
            className="group flex items-start gap-3 rounded-lg border p-4 hover:bg-faded has-[[data-state=checked]]:border-destructive/50 has-[[data-state=checked]]:bg-destructive-faded"
            key={`${plan.id}-destructive`}
          >
            <RadioGroupItem
              value={plan.id}
              id={`${plan.name}-destructive`}
              variant="destructive"
            />
            <div className="grid gap-1 font-normal">
              <div className="font-medium group-has-[[data-state=checked]]:text-destructive-accent-foreground">
                {plan.name}
              </div>
              <div className="leading-snug text-muted-foreground group-has-[[data-state=checked]]:text-destructive-muted-foreground">
                {plan.description}
              </div>
            </div>
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
}
