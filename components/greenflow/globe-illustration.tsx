import { cn } from "@/lib/utils";

function Currency({ children }: { children: string }) {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-2xl border border-black/10 bg-white text-sm font-semibold text-ink">
      {children}
    </div>
  );
}

export function GlobeIllustration({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-square w-full max-w-[440px]", className)}>
      <svg
        viewBox="0 0 420 420"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="gfGlow" cx="40%" cy="30%">
            <stop offset="0%" stopColor="rgba(0,230,118,0.40)" />
            <stop offset="55%" stopColor="rgba(0,230,118,0.10)" />
            <stop offset="100%" stopColor="rgba(0,230,118,0.00)" />
          </radialGradient>
          <linearGradient id="gfRing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(0,230,118,0.55)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
          </linearGradient>
        </defs>

        <circle cx="210" cy="210" r="185" fill="url(#gfGlow)" />
        <circle
          cx="210"
          cy="210"
          r="150"
          fill="rgba(255,255,255,0.8)"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="2"
        />

        {[
          { r: 52, o: 0.18 },
          { r: 82, o: 0.14 },
          { r: 112, o: 0.1 },
        ].map((ring, i) => (
          <circle
            key={i}
            cx="210"
            cy="210"
            r={ring.r}
            fill="none"
            stroke="url(#gfRing)"
            strokeOpacity={ring.o}
            strokeWidth="2"
          />
        ))}

        {[
          "M 60 230 C 130 150, 250 140, 360 210",
          "M 85 265 C 155 210, 265 220, 335 165",
          "M 100 185 C 170 250, 250 265, 320 210",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="rgba(0,0,0,0.10)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}

        {[
          { x: 140, y: 170 },
          { x: 260, y: 155 },
          { x: 295, y: 250 },
          { x: 165, y: 265 },
        ].map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="6" fill="rgba(0,230,118,0.85)" />
            <circle cx={p.x} cy={p.y} r="14" fill="rgba(0,230,118,0.12)" />
          </g>
        ))}
      </svg>

      <div className="absolute left-6 top-10">
        <Currency>€</Currency>
      </div>
      <div className="absolute right-8 top-16">
        <Currency>$</Currency>
      </div>
      <div className="absolute right-12 bottom-14">
        <Currency>£</Currency>
      </div>
      <div className="absolute left-10 bottom-20">
        <Currency>¥</Currency>
      </div>

      <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-black/10 bg-white p-5 shadow-[0_40px_80px_-70px_rgba(0,0,0,0.7)]">
        <div className="text-xs font-medium text-ink-muted">Smart routing</div>
        <div className="mt-1 text-sm font-semibold tracking-tight text-ink">
          Picks the most reliable path for each transfer.
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { label: "Status", value: "Live" },
            { label: "Fees", value: "Clear" },
            { label: "Tracking", value: "Instant" },
          ].map((x) => (
            <div
              key={x.label}
              className="rounded-2xl border border-black/10 bg-surface-2 px-3 py-2"
            >
              <div className="text-[10px] font-medium text-ink-muted">
                {x.label}
              </div>
              <div className="mt-0.5 text-[12px] font-semibold text-ink">
                {x.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

