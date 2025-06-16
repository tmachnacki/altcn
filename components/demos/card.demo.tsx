"use client";

import * as React from "react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { BackgroundPattern } from "~/components/demos/background-pattern";

const cardVariants = ["default", "translucent"] as const;

export function CardDemo() {
  const [variant, setVariant] = React.useState("default");

  return (
    <>
      <ComponentContainer>
        <div className="relative flex w-full max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-lg border border-border-primary-faded bg-transparent p-24">
          <div className="absolute inset-0 z-0 flex shrink-0 items-center justify-center overflow-hidden">
            <BackgroundPattern className="shrink-0" />
          </div>

          <Card
            className="relative z-10 w-full max-w-lg"
            variant={variant as (typeof cardVariants)[number]}
          >
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
                    <Label htmlFor="email2">Email</Label>
                    <Input
                      id="email2"
                      type="email"
                      placeholder="someone@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password2">Password</Label>
                      <a
                        href="#card"
                        className="ml-auto inline-block text-sm text-primary-muted-foreground underline-offset-4 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      id="password2"
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
      </ComponentContainer>
      <ComponentPlayground>
        <fieldset>
          <div className="flex flex-col gap-3">
            <legend className="leading-none font-semibold">Card Variant</legend>
            <RadioGroup value={variant} onValueChange={setVariant}>
              {cardVariants.map((variant) => (
                <div className="flex items-center gap-3" key={variant}>
                  <RadioGroupItem value={variant} id={variant}>
                    {variant}
                  </RadioGroupItem>
                  <Label htmlFor={variant}>{variant}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </fieldset>
      </ComponentPlayground>
    </>
  );
}
