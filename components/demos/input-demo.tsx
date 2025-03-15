import { Input } from "@/components/ui/input";

export function InputDemo() {
  const variants: Array<"default" | "muted" | "underline" | "primary-muted"> = [
    "default",
    "muted",
    "underline",
    "primary-muted",
  ];

  return (
    <div className="flex flex-col gap-8">
      {variants.map((variant) => (
        <div className="flex w-full max-w-lg flex-col gap-4" key={variant}>
          <Input type="email" placeholder="Email" variant={variant} />
          <Input type="password" placeholder="Password" variant={variant} />
          <Input type="number" placeholder="Number" variant={variant} />
          <Input type="file" placeholder="File" variant={variant} />
          <Input type="tel" placeholder="Tel" variant={variant} />
          <Input type="text" placeholder="Text" variant={variant} />
          <Input type="url" placeholder="URL" variant={variant} />
          <Input type="search" placeholder="Search" variant={variant} />
          <Input type="date" placeholder="Date" variant={variant} />
          <Input
            type="datetime-local"
            placeholder="Datetime Local"
            variant={variant}
          />
          <Input type="month" placeholder="Month" variant={variant} />
          <Input type="time" placeholder="Time" variant={variant} />
          <Input type="week" placeholder="Week" variant={variant} />
          <Input
            type="text"
            placeholder="Error"
            aria-invalid="true"
            variant={variant}
          />
          <Input disabled placeholder="Disabled" variant={variant} />
        </div>
      ))}
    </div>
  );
}
