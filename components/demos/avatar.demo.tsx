"use client";

import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Separator } from "~/components/ui/separator";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

const avatarFallbackVariants = [
  "outline",
  "base",
  "accent",
  "muted",
  "surface",
  "faded",
  "primary",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "secondary",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
] as const;

export function AvatarDemo() {
  const [avatarFallbackVariant, setAvatarFallbackVariant] =
    React.useState("accent");

  return (
    <>
      <ComponentContainer>
        <div className="flex h-full w-full flex-1 flex-col gap-8">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback
                variant={
                  avatarFallbackVariant as (typeof avatarFallbackVariants)[number]
                }
              >
                TM
              </AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback
                variant={
                  avatarFallbackVariant as (typeof avatarFallbackVariants)[number]
                }
              />
            </Avatar>
          </div>

          <Separator />

          <div className="flex flex-wrap items-center gap-4">
            <Avatar>
              <AvatarImage
                src="https://github.com/tmachnacki.png"
                alt="@tmachnacki"
              />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
            <Avatar className="size-12">
              <AvatarImage
                src="https://github.com/tmachnacki.png"
                alt="@tmachnacki"
              />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
            <Avatar className="rounded-lg">
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
              <Avatar>
                <AvatarImage
                  src="https://github.com/tmachnacki.png"
                  alt="@tmachnacki"
                />
                <AvatarFallback>TM</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/leerob.png"
                  alt="@leerob"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
              <Avatar>
                <AvatarImage
                  src="https://github.com/tmachnacki.png"
                  alt="@tmachnacki"
                />
                <AvatarFallback>TM</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/leerob.png"
                  alt="@leerob"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex -space-x-2 hover:space-x-1 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale *:data-[slot=avatar]:transition-all *:data-[slot=avatar]:duration-300 *:data-[slot=avatar]:ease-in-out">
              <Avatar>
                <AvatarImage
                  src="https://github.com/tmachnacki.png"
                  alt="@tmachnacki"
                />
                <AvatarFallback>TM</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/leerob.png"
                  alt="@leerob"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <fieldset>
          <div className="flex flex-col gap-3">
            <legend className="leading-none font-semibold">
              Avatar Fallback Variant
            </legend>
            <RadioGroup
              onValueChange={setAvatarFallbackVariant}
              defaultValue={avatarFallbackVariant}
            >
              {avatarFallbackVariants.map((variant) => (
                <div key={variant} className="flex items-center gap-3">
                  <RadioGroupItem value={variant} id={variant} />
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
