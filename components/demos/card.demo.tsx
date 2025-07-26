"use client";

import * as React from "react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

const cardVariants = ["solid", "translucent"] as const;

export function CardDemo() {
  const [variant, setVariant] = React.useState("solid");

  return (
    <>
      <ComponentContainer withBackground={true}>
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
          <CardBody>
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
          </CardBody>
          <CardFooter className="flex flex-col-reverse items-center justify-end gap-2 sm:flex-row">
            <Button
              variant="primary-muted"
              type="button"
              className="w-full sm:w-auto"
            >
              Get Started
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="w-full sm:w-auto"
            >
              Sign in
            </Button>
          </CardFooter>
        </Card>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="card-variant">Card Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="card-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {cardVariants.map((variant) => (
                <SelectItem key={`card-${variant}`} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
