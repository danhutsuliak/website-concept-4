import type * as React from "react";

import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  title = "Greenflow",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        aria-hidden="true"
        className="relative h-9 w-9 rounded-2xl bg-gradient-to-br from-greenflow to-greenflow/40 shadow-[0_14px_30px_-18px_rgba(0,230,118,0.9)]"
      >
        <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),rgba(255,255,255,0)_52%)]" />
      </div>
      <span className="text-base font-semibold tracking-tight text-ink">
        {title}
      </span>
    </div>
  );
}

