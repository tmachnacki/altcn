"use client";

import * as React from "react";
import { addDays } from "date-fns";

import { Calendar, type DateRange } from "~/components/ui/calendar";
import { ComponentContainer } from "~/components/component-container";

export function CalendarDemo() {
  return (
    <ComponentContainer className="gap-8">
      <Calendar1 />
      <Calendar2 />
    </ComponentContainer>
  );
}

function Calendar1() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border border-border shadow-md"
      captionLayout="dropdown"
      disabled={{ dayOfWeek: [0, 6] }}
      showOutsideDays={false}
    />
  );
}

function Calendar2() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: addDays(new Date(2025, 5, 12), 20),
  });

  return (
    <Calendar
      mode="range"
      defaultMonth={date?.from}
      numberOfMonths={2}
      selected={date}
      onSelect={setDate}
      className="rounded-lg border shadow-sm"
    />
  );
}
