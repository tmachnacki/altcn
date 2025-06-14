import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { InputPassword } from "~/components/ui/input-password";
import { Label } from "~/components/ui/label";
import { ComponentContainer } from "~/components/component-container";

export function InputPasswordDemo() {
  const sizes = ["sm", "default", "lg"] as const;

  return (
    <ComponentContainer>
      <div className="grid w-full max-w-sm gap-8">
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
