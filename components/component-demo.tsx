"use client";

import { usePathname } from "next/navigation";

export function ComponentDemo({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const componentSlug = pathname.split("/").pop();
  const title = componentSlug?.replace(/-/g, " ");

  return (
    <div className="grid gap-4">
      <h1 className="text-lg leading-none font-semibold tracking-tight capitalize">
        {title}
      </h1>
      <div className="flex rounded-lg border">{children}</div>
    </div>
  );
}
