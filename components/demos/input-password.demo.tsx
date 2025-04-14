import { ComponentContainer } from "@/components/demos/component-container";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { InputPassword } from "@/components/ui/input-password";

export function InputPasswordDemo() {
  const sizes = ["sm", "default", "lg"] as const;

  return (
    <ComponentContainer>
      <div className="grid gap-8 w-full max-w-sm">
        {sizes.map((size) => (
          <Card className="w-full" key={`input-password-${size}`}>
            <CardHeader>
              <CardTitle>Reset Password</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor={`new-password-${size}`}>New Password</Label>
                  <InputPassword
                    id={`new-password-${size}`}
                    name={`new-password-${size}`}
                    inputSize={size}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor={`confirm-password-${size}`}>
                    Confirm Password
                  </Label>
                  <InputPassword
                    id={`confirm-password-${size}`}
                    name={`confirm-password-${size}`}
                    inputSize={size}
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button type="reset" variant={"primary-muted"}>
                Clear
              </Button>
              <Button type="submit" variant={"primary-gradient"}>
                Reset Password
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </ComponentContainer>
  );
}
