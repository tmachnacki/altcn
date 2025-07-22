"use client";

import * as React from "react";
import {
  DayButton,
  DayPicker,
  Dropdown,
  getDefaultClassNames,
} from "react-day-picker";
import { type VariantProps } from "tailwind-variants";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

import { cn } from "~/lib/utils";

import { Button, buttonVariants } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  selectContentVariants,
  SelectItem,
  selectItemIndicatorVariants,
  selectItemVariants,
  SelectTrigger,
  selectTriggerVariants,
  SelectValue,
} from "~/components/ui/select";

type SelectVariants = {
  selectTrigger?: VariantProps<typeof selectTriggerVariants>["variant"];
  selectContent?: VariantProps<typeof selectContentVariants>["variant"];
  selectItem?: VariantProps<typeof selectItemVariants>["variant"];
  selectItemIndicator?: VariantProps<
    typeof selectItemIndicatorVariants
  >["variant"];
  selectItemWidth?: VariantProps<typeof selectItemVariants>["width"];
};

type DayVariants = {
  unselected?: "ghost" | "primary-ghost" | "secondary-ghost";
  selected?:
    | "contrast"
    | "base"
    | "base-shadow"
    | "base-gradient"
    | "primary"
    | "primary-shadow"
    | "primary-gradient"
    | "primary-tron"
    | "secondary"
    | "secondary-shadow"
    | "secondary-gradient"
    | "secondary-tron";

  range?:
    | "outline"
    | "accent"
    | "muted"
    | "surface"
    | "faded"
    | "primary-accent"
    | "primary-muted"
    | "primary-surface"
    | "primary-faded"
    | "secondary-accent"
    | "secondary-muted"
    | "secondary-surface"
    | "secondary-faded";
};

type CalendarVariants = {
  variants?: {
    nav?:
      | "outline"
      | "accent"
      | "muted"
      | "surface"
      | "faded"
      | "ghost"
      | "primary-accent"
      | "primary-muted"
      | "primary-surface"
      | "primary-faded"
      | "primary-ghost"
      | "secondary-accent"
      | "secondary-muted"
      | "secondary-surface"
      | "secondary-faded"
      | "secondary-ghost";
  } & SelectVariants &
    DayVariants;
};

const CalendarContext = React.createContext<CalendarVariants>({});

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  variants = {
    nav: "ghost",
    selectContent: "solid",
    selectTrigger: "outline",
    selectItem: "accent",
    selectItemWidth: "default",
    unselected: "primary-ghost",
    selected: "primary-gradient",
    range: "primary-accent",
  },
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & CalendarVariants) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar relative isolate bg-transparent p-3 [--cell-size:var(--size-md)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex h-(--cell-size) w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: variants.nav, size: "icon-sm" }),
          "size-7 rounded-full",
          variants.nav?.includes("ghost") && "text-subtle-foreground",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: variants.nav, size: "icon-sm" }),
          "size-7 rounded-full",
          variants.nav?.includes("ghost") && "text-subtle-foreground",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "grid h-(--cell-size) w-full grid-cols-2 gap-1.5 px-1.5 text-sm",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn("", defaultClassNames.dropdown_root),
        dropdown: cn("absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "font-medium select-none",
          captionLayout === "label"
            ? "text-sm"
            : "flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none",
          defaultClassNames.weekday
        ),
        week: cn("mt-1 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] text-muted-foreground select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative inline-flex aspect-square h-full w-full items-center justify-center p-0 select-none data-[selected=true]:first:*:[button]:rounded-l-md data-[selected=true]:last:*:[button]:rounded-r-md",
          (variants?.range?.includes("outline") ||
            variants?.range?.includes("surface") ||
            variants?.range?.includes("faded")) &&
            "not-data-[outside=true]:data-[selected=true]:first:*:[button]:border-l not-data-[outside=true]:data-[selected=true]:last:*:[button]:border-r",
          defaultClassNames.day
        ),
        range_start: cn("rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md", defaultClassNames.range_end),
        today: cn(defaultClassNames.today),
        outside: cn("bg-transparent", defaultClassNames.outside),
        disabled: cn(
          "pointer-events-none bg-transparent bg-none",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, children, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            >
              <CalendarContext.Provider value={{ variants }}>
                {children}
              </CalendarContext.Provider>
            </div>
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            );
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            );
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          );
        },
        DayButton: CalendarDayButton,
        Dropdown: CalendarDropdown,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const { variants } = React.useContext(CalendarContext);
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  const variant = React.useCallback(() => {
    if (
      modifiers.selected &&
      !modifiers.range_start &&
      !modifiers.range_end &&
      !modifiers.range_middle
    ) {
      return variants?.selected;
    } else if (modifiers.range_start || modifiers.range_end) {
      return variants?.selected;
    } else if (modifiers.range_middle) {
      return variants?.range;
    } else {
      return variants?.unselected;
    }
  }, [
    variants?.selected,
    variants?.range,
    variants?.unselected,
    modifiers.selected,
    modifiers.range_start,
    modifiers.range_end,
    modifiers.range_middle,
  ]);

  return (
    <Button
      ref={ref}
      variant={variant()}
      size="icon-sm"
      data-day={day.date.toLocaleDateString()}
      data-selected={modifiers.selected}
      // data-selected-single={
      //   modifiers.selected &&
      //   !modifiers.range_start &&
      //   !modifiers.range_end &&
      //   !modifiers.range_middle
      // }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      data-today={modifiers.today}
      data-disabled={modifiers.disabled}
      disabled={modifiers.disabled}
      className={cn(
        "aspect-square size-auto w-full gap-0 p-0 leading-none font-normal tabular-nums outline-offset-1 focus-visible:outline-1",

        "data-[disabled=true]:line-through data-[disabled=true]:not-data-[selected=true]:border-0 data-[disabled=true]:not-data-[selected=true]:bg-transparent data-[disabled=true]:not-data-[selected=true]:bg-none data-[disabled=true]:not-data-[selected=true]:text-muted-foreground data-[disabled=true]:not-data-[selected=true]:inset-ring-0",

        "group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10",

        "not-data-[selected=true]:group-not-data-[outside=true]/day:text-subtle-foreground hover:not-data-[selected=true]:group-not-data-[outside=true]/day:text-accent-foreground",

        "data-[range-end=true]:rounded-l-none data-[range-end=true]:rounded-r-md data-[range-end=true]:border-l-0",

        "data-[range-middle=true]:rounded-none data-[range-middle=true]:border-r-0 data-[range-middle=true]:border-l-0",

        "data-[range-start=true]:rounded-l-md data-[range-start=true]:rounded-r-none data-[range-start=true]:border-r-0",

        "group-data-[outside=true]/day:pointer-events-none group-data-[outside=true]/day:border-0 group-data-[outside=true]/day:bg-transparent group-data-[outside=true]/day:bg-none group-data-[outside=true]/day:text-muted-foreground/75 group-data-[outside=true]/day:shadow-none group-data-[outside=true]/day:inset-ring-0",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  );
}

function CalendarDropdown({
  value,
  onChange,
  options,
}: React.ComponentProps<typeof Dropdown>) {
  const { variants } = React.useContext(CalendarContext);

  const selected = options?.find((option) => option.value === value);
  const handleChange = (value: string) => {
    const changeEvent = {
      target: { value },
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange?.(changeEvent);
  };
  return (
    <Select
      value={value?.toString()}
      onValueChange={(value) => {
        handleChange(value);
      }}
    >
      <SelectTrigger
        className="relative z-10 w-full"
        size={"sm"}
        variant={variants?.selectTrigger}
      >
        <SelectValue>{selected?.label}</SelectValue>
      </SelectTrigger>
      <SelectContent
        className="max-h-[25rem] w-24 min-w-0"
        width={variants?.selectItemWidth}
        variants={{
          content: variants?.selectContent,
          item: variants?.selectItem,
          indicator: variants?.selectItemIndicator,
        }}
      >
        {options?.map(({ value, label, disabled }, id) => (
          <SelectItem
            key={`${value}-${id}`}
            value={value?.toString()}
            disabled={disabled}
          >
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export { Calendar };
