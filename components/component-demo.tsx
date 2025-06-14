"use client";

import { usePathname } from "next/navigation";

export function ComponentDemo({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const componentSlug = pathname.split("/").pop();
  const title = componentSlug?.replace(/-/g, " ");

  return (
    <div className="grid gap-3">
      <h1 className="text-lg font-medium capitalize">{title}</h1>
      <div className="flex rounded-lg border">{children}</div>
    </div>
  );
}
