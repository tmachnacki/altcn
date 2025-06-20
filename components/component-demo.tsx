"use client";

import { usePathname } from "next/navigation";

import { cn } from "~/lib/utils";

export function ComponentDemo({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const componentSlug = pathname.split("/").pop();
  const title = componentSlug?.replace(/-/g, " ");

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h1 className="text-lg leading-none font-semibold tracking-tight capitalize">
        {title}
      </h1>
      <div className="flex flex-col rounded-lg border md:flex-row">
        {children}
      </div>
    </div>
  );
}
