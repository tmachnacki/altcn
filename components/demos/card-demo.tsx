import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { BackgroundPattern } from "@/components/demos/background-pattern";

export function CardDemo() {
  return (
    <div className="flex flex-1 h-full w-full flex-col gap-8">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Sign in to your account</CardTitle>
          <CardDescription>
            Enter your details below to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="someone@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#card"
                    className="ml-auto inline-block text-sm text-primary-muted-foreground underline-offset-4 hover:text-primary-accent-foreground hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex items-center justify-end gap-2">
          <Button variant="primary-muted" type="button">
            Create an account
          </Button>
          <Button variant="primary" type="submit">
            Sign in
          </Button>
        </CardFooter>
      </Card>

      <div className="relative flex w-full flex-col items-center justify-center bg-transparent p-24">
        <div className="absolute inset-0 flex shrink-0 items-center justify-center overflow-hidden">
          <BackgroundPattern />
        </div>

        <Card className="w-full max-w-lg" translucent>
          <CardHeader>
            <CardTitle>Sign in to your account</CardTitle>
            <CardDescription>
              Enter your details below to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="someone@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#card"
                      className="ml-auto inline-block text-sm text-primary-muted-foreground underline-offset-4 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex items-center justify-end gap-2">
            <Button variant="primary-muted" type="button">
              Create an account
            </Button>
            <Button variant="primary" type="submit">
              Sign in
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card
        asChild
        className="w-fit hover:border-border-primary-faded hover:bg-primary-muted"
      >
        <a href="#card">
          <CardContent className="flex items-center gap-3 px-4 py-3">
            <Avatar className="size-12 rounded-md">
              <AvatarImage
                src="https://github.com/tmachnacki.png"
                alt="@tmachnacki"
              />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <p className="text-base font-medium group-hover/card:text-primary-accent-foreground">
                Tim Machnacki
              </p>
              <p className="text-sm text-muted-foreground group-hover/card:text-primary-muted-foreground">
                Frontend Engineer
              </p>
            </div>
          </CardContent>
        </a>
      </Card>
    </div>
  );
}
