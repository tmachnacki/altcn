import { Input } from "~/components/ui/input";
import { ComponentContainer } from "~/components/component-container";

export function InputDemo() {
  const variants = [
    "default",
    "muted",
    "underlined",
    "primary",
    "secondary",
  ] as const;

  const sizes = ["sm", "default", "lg"] as const;

  return (
    <ComponentContainer>
      <div className="grid gap-8">
        {variants.map((variant) => (
          <div className="grid w-full max-w-sm gap-8" key={`input-${variant}`}>
            {sizes.map((size) => (
              <div className="grid gap-4" key={`input-${variant}-${size}`}>
                <Input
                  type="email"
                  placeholder="Email"
                  variant={variant}
                  inputSize={size}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  variant={variant}
                  inputSize={size}
                />
                <Input
                  type="number"
                  placeholder="Number"
                  variant={variant}
                  inputSize={size}
                />
                <Input
                  type="file"
                  placeholder="File"
                  variant={variant}
                  inputSize={size}
                />
                <Input
                  type="file"
                  placeholder="File"
                  variant={variant}
                  aria-invalid="true"
                  inputSize={size}
                />
                <Input
                  type="file"
                  placeholder="File"
                  variant={variant}
                  inputSize={size}
                  disabled
                />
                <Input
                  type="tel"
                  placeholder="Tel"
                  variant={variant}
                  inputSize={size}
                />
                <Input
                  type="text"
                  placeholder="Text"
                  variant={variant}
                  inputSize={size}
                />
                <Input
                  type="url"
                  placeholder="URL"
                  variant={variant}
                  inputSize={size}
                />
                <Input
                  type="search"
                  placeholder="Search"
                  variant={variant}
                  inputSize={size}
                />
                <Input
                  type="date"
                  placeholder="Date"
                  variant={variant}
                  inputSize={size}
                />
                <Input
                  type="datetime-local"
                  placeholder="Datetime Local"
                  variant={variant}
                  inputSize={size}
                />
                <Input
                  type="datetime-local"
                  placeholder="Datetime Local"
                  variant={variant}
                  inputSize={size}
                  aria-invalid="true"
                />
                <Input
                  type="datetime-local"
                  placeholder="Datetime Local"
                  variant={variant}
                  inputSize={size}
                  disabled
                />
                <Input
                  type="month"
                  placeholder="Month"
                  variant={variant}
                  inputSize={size}
                />
                <Input
                  type="time"
                  placeholder="Time"
                  variant={variant}
                  inputSize={size}
                />
                <Input
                  type="week"
                  placeholder="Week"
                  variant={variant}
                  inputSize={size}
                />
                <Input
                  type="text"
                  placeholder="Error"
                  aria-invalid="true"
                  variant={variant}
                  inputSize={size}
                />
                <Input
                  disabled
                  placeholder="Disabled"
                  variant={variant}
                  inputSize={size}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </ComponentContainer>
  );
}
