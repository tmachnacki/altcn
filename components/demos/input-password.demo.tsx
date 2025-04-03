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
  return (
    <ComponentContainer>
      <Card className="w-full max-w-xs">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="new-password">New Password</Label>
              <InputPassword
                id="new-password"
                name="new-password"
                placeholder="********"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <InputPassword
                id="confirm-password"
                name="confirm-password"
                placeholder="********"
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
    </ComponentContainer>
  );
}
