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
    <div className="flex flex-col gap-8">
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
          <RadioGroupItem value="invalid" id="p5" />
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
            className="flex items-start gap-3 rounded-lg border p-4 hover:bg-accent/50 has-[[data-state=checked]]:border-green-600 has-[[data-state=checked]]:bg-green-50 dark:has-[[data-state=checked]]:border-green-900 dark:has-[[data-state=checked]]:bg-green-950"
            key={plan.id}
          >
            <RadioGroupItem
              value={plan.id}
              id={plan.name}
              className="shadow-none data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 *:data-[slot=radio-group-indicator]:[&>svg]:fill-white *:data-[slot=radio-group-indicator]:[&>svg]:stroke-white"
            />
            <div className="grid gap-1 font-normal">
              <div className="font-medium">{plan.name}</div>
              <div className="leading-snug text-muted-foreground">
                {plan.description}
              </div>
            </div>
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
}
