"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "~/lib/utils";

import { Button } from "~/components/ui/button";

// const radioButtonGroupItemVariants = cva(
//   [

//   ]
// );

type RadioButtonsContextProps = {
  activeVariant?: React.ComponentProps<typeof Button>["variant"];
  inactiveVariant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
  orientation?: "horizontal" | "vertical";
};

const RadioButtonsContext = React.createContext<RadioButtonsContextProps>({});

function RadioButtons({
  className,
  activeVariant = "primary",
  inactiveVariant = "outline",
  size = "default",
  orientation = "horizontal",
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> &
  RadioButtonsContextProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-buttons"
      orientation={orientation}
      data-orientation={orientation}
      className={cn("grid gap-2", className)}
      {...props}
    >
      <RadioButtonsContext.Provider
        value={{ activeVariant, inactiveVariant, size, orientation }}
      >
        {children}
      </RadioButtonsContext.Provider>
    </RadioGroupPrimitive.Root>
  );
}

function RadioButtonsItem({
  checked,
  "aria-invalid": ariaInvalid,
  activeVariant,
  inactiveVariant,
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> &
  Omit<RadioButtonsContextProps, "size">) {
  const context = React.useContext(RadioButtonsContext);

  return (
    <RadioGroupPrimitive.Item asChild checked={checked} {...props}>
      <Button
        data-slot="radio-buttons-item"
        variant={
          checked
            ? activeVariant || context.activeVariant
            : inactiveVariant || context.inactiveVariant
        }
        size={context.size}
        className={cn(
          context.orientation === "horizontal" && "flex-1",
          className
        )}
        aria-invalid={ariaInvalid}
      >
        {children}
      </Button>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioButtons, RadioButtonsItem };
