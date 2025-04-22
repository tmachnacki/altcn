"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "~/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="hidden not-dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
