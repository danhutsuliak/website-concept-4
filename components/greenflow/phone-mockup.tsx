import type * as React from "react";

import { cn } from "@/lib/utils";

type MockupVariant = "dashboard" | "gateway" | "ibans" | "wallet";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-medium text-ink">
      {children}
    </div>
  );
}

function StatRow({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "good";
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3">
      <div className="text-[11px] font-medium text-ink-muted">{label}</div>
      <div
        className={cn(
          "text-[12px] font-semibold tabular-nums",
          tone === "good" ? "text-greenflow-ink" : "text-ink",
        )}
      >
        {value}
      </div>
    </div>
  );
}

export function PhoneMockup({
  className,
  variant = "dashboard",
  title = "Greenflow",
}: {
  className?: string;
  variant?: MockupVariant;
  title?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[360px] rounded-[40px] border border-black/10 bg-white shadow-[0_40px_120px_-80px_rgba(0,0,0,0.55)]",
        className,
      )}
      aria-label={`${title} app mockup`}
      role="img"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_30%_15%,rgba(0,230,118,0.26),rgba(0,230,118,0)_52%)]" />
      <div className="relative rounded-[40px] p-3">
        <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-surface-2">
          <div className="absolute left-1/2 top-2 h-5 w-28 -translate-x-1/2 rounded-full bg-black/10" />
          <div className="flex items-center justify-between px-5 pb-3 pt-10">
            <div className="text-sm font-semibold tracking-tight text-ink">
              {variant === "gateway"
                ? "Gateway"
                : variant === "ibans"
                  ? "Accounts"
                  : variant === "wallet"
                    ? "Wallet"
                    : "Dashboard"}
            </div>
            <div className="h-8 w-8 rounded-full border border-black/10 bg-white" />
          </div>

          <div className="px-5 pb-5">
            <div className="rounded-3xl border border-black/10 bg-white p-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-medium text-ink-muted">
                    {variant === "wallet" ? "Total balance" : "Available"}
                  </div>
                  <div className="mt-1 text-2xl font-semibold tracking-tight text-ink tabular-nums">
                    {variant === "gateway"
                      ? "€128,420"
                      : variant === "ibans"
                        ? "€42,910"
                        : variant === "wallet"
                          ? "€86,305"
                          : "€93,611"}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Pill>{variant === "gateway" ? "Settlement" : "Live"}</Pill>
                  <Pill>
                    {variant === "ibans"
                      ? "IBAN • 8 active"
                      : variant === "wallet"
                        ? "Limits • Enabled"
                        : "Cards • Enabled"}
                  </Pill>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-2xl border border-black/10 bg-surface-2 px-3 py-2">
                  <div className="text-[10px] font-medium text-ink-muted">
                    Today
                  </div>
                  <div className="mt-0.5 text-[12px] font-semibold text-ink tabular-nums">
                    {variant === "gateway"
                      ? "€9.2k"
                      : variant === "wallet"
                        ? "€6.8k"
                        : "€7.4k"}
                  </div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-surface-2 px-3 py-2">
                  <div className="text-[10px] font-medium text-ink-muted">
                    Pending
                  </div>
                  <div className="mt-0.5 text-[12px] font-semibold text-ink tabular-nums">
                    {variant === "gateway"
                      ? "14"
                      : variant === "ibans"
                        ? "3"
                        : "8"}
                  </div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-surface-2 px-3 py-2">
                  <div className="text-[10px] font-medium text-ink-muted">
                    Health
                  </div>
                  <div className="mt-0.5 text-[12px] font-semibold text-greenflow-ink">
                    Good
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-2">
              {variant === "gateway" ? (
                <>
                  <StatRow label="Authorizations" value="98.1%" tone="good" />
                  <StatRow label="Chargebacks" value="0.11%" />
                  <StatRow label="Avg. settlement" value="T+1" />
                </>
              ) : variant === "ibans" ? (
                <>
                  <StatRow label="Incoming transfers" value="€18,204" />
                  <StatRow label="Auto-routing rules" value="12 enabled" tone="good" />
                  <StatRow label="Statements" value="Daily • CSV" />
                </>
              ) : variant === "wallet" ? (
                <>
                  <StatRow label="Approvals" value="2 required" />
                  <StatRow label="Whitelisted addresses" value="18" tone="good" />
                  <StatRow label="On/off ramp" value="Enabled" tone="good" />
                </>
              ) : (
                <>
                  <StatRow label="Outgoing transfers" value="€31,080" />
                  <StatRow label="Cards spend" value="€12,514" />
                  <StatRow label="Compliance checks" value="All passing" tone="good" />
                </>
              )}
            </div>

            <div className="mt-4 rounded-3xl border border-black/10 bg-white p-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-medium text-ink-muted">
                  Weekly activity
                </div>
                <div className="text-[11px] font-medium text-ink">
                  <span className="text-ink-muted">Net</span>{" "}
                  <span className="tabular-nums">
                    {variant === "wallet" ? "+€2,140" : "+€5,840"}
                  </span>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-7 items-end gap-1">
                {[36, 54, 42, 70, 58, 64, 48].map((h, i) => (
                  <div
                    key={i}
                    className="rounded-full bg-black/10"
                    style={{ height: `${h}%` }}
                  >
                    <div className="h-full w-full rounded-full bg-gradient-to-t from-greenflow/70 to-greenflow/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

