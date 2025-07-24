"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

import { toggleVariants } from "~/components/ui/toggle";
import { Tron } from "~/components/ui/tron";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "md",
  variant: "primary",
});

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      className={cn(
        "group/toggle-group flex w-fit items-center gap-1",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext);
  const _variant = variant || context.variant;

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      className={cn(
        toggleVariants({
          variant: _variant,
          size: size || context.size,
        }),
        "group/toggle-group-item",
        className
      )}
      {...props}
    >
      {variant?.includes("tron") && (
        <>
          <Tron
            type="beam"
            side="bottom"
            className="via-(--tron-beam) opacity-0 group-data-[state=on]/toggle-group-item:opacity-100"
          />
          <Tron
            type="blur"
            side="bottom"
            className="via-(--tron-blur) opacity-0 group-data-[state=on]/toggle-group-item:opacity-100"
          />
        </>
      )}
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };
