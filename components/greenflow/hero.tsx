import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { Container } from "@/components/greenflow/container";
import { PhoneMockup } from "@/components/greenflow/phone-mockup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero({ className }: { className?: string }) {
  return (
    <section id="top" className={cn("relative overflow-hidden", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_30%_20%,rgba(0,230,118,0.12),rgba(0,230,118,0)_62%)]"
      />

      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <div className="max-w-xl">
          <Badge className="inline-flex" variant="default">
            <span className="mr-1 font-semibold">New</span>· Platform is live
          </Badge>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Payments, made{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-greenflow-ink">simpler</span>
              <span
                aria-hidden="true"
                className="absolute -inset-x-2 bottom-1 -z-0 h-4 rounded-full bg-greenflow/25"
              />
            </span>
            .
          </h1>

          <p className="mt-5 text-base leading-7 text-ink-muted sm:text-lg">
            Greenflow brings together IBAN accounts, card issuing, and cross-border
            transfers—so finance teams can move faster with controls that auditors
            actually like.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg">
              Explore cards <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button variant="secondary" size="lg">
              View API docs <Sparkles className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-white p-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <ShieldCheck className="h-4 w-4 text-greenflow-ink" aria-hidden="true" />
                Built for compliance
              </div>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                Role-based access, approvals, and audit trails—designed for regulated
                businesses from day one.
              </p>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white p-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-greenflow shadow-[0_0_0_6px_rgba(0,230,118,0.10)]"
                />
                Clear fees
              </div>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                Predictable routing and reporting—no mystery spreads, no noisy dashboards.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 rounded-[48px] bg-[radial-gradient(circle_at_50%_30%,rgba(0,230,118,0.22),rgba(0,230,118,0)_60%)]"
          />
          <PhoneMockup variant="dashboard" />
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white"
      />
    </section>
  );
}

