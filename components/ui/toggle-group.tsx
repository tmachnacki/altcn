"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

import { toggleVariants } from "~/components/ui/toggle";
import { Tron } from "~/components/ui/tron";

// const toggleGroupItemVariants = ({
//   variant,
//   size,
// }: VariantProps<typeof toggleVariants>) => cn(
//   ""
// );

type ToggleGroupContextProps = VariantProps<typeof toggleVariants> & {
  spacing?: "compact" | "split";
};

const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({});

function ToggleGroup({
  className,
  variant = "accent",
  size = "md",
  spacing = "split",
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  ToggleGroupContextProps) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      className={cn(
        "group/toggle-group relative isolate flex items-center",
        spacing === "split" &&
          {
            "2xs": "gap-0.5",
            xs: "gap-1",
            sm: "gap-1",
            md: "gap-1",
            lg: "gap-1.5",
          }[size || "md"],
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing }}>
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
      data-spacing={context.spacing}
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
      {_variant?.includes("tron") && (
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
