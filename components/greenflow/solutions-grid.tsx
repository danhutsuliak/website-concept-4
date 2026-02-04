import { Container } from "@/components/greenflow/container";
import { Section } from "@/components/greenflow/section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { solutions } from "@/lib/greenflow-content";
import { cn } from "@/lib/utils";

export function SolutionsGrid({ className }: { className?: string }) {
  return (
    <Section id="solutions" className={cn("bg-white", className)}>
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Badge variant="subtle">Solutions</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              A complete financial platform
            </h2>
            <p className="mt-3 text-base leading-7 text-ink-muted">
              Use Greenflow as your system of record for money movement—then plug it
              into your existing tools with clean APIs.
            </p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-mint px-4 py-3 text-sm font-medium text-greenflow-ink">
            Designed to feel calm under pressure.
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.title} className="bg-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl border border-black/10 bg-white text-greenflow-ink">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base">{s.title}</CardTitle>
                  </div>
                  <CardDescription className="mt-2 text-sm leading-6">
                    {s.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="rounded-2xl border border-black/10 bg-surface-2 px-4 py-3 text-xs font-medium text-ink-muted">
                    Built-in permissions, reporting, and audit trails.
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div
          id="pricing"
          className="mt-12 overflow-hidden rounded-[32px] border border-black/10 bg-[radial-gradient(circle_at_20%_30%,rgba(0,230,118,0.18),rgba(0,230,118,0)_55%),linear-gradient(to_bottom,#ffffff,#fbfffd)] p-6 shadow-[0_40px_120px_-100px_rgba(0,0,0,0.7)] sm:p-8"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold text-ink">Pricing</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Simple plans with volume-based scaling
              </h3>
              <p className="mt-3 text-base leading-7 text-ink-muted">
                Start with transparent per-product fees, then unlock lower rates as you
                grow. No “gotchas”—just clear reporting and predictable settlement.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-black/10 bg-white/75 p-5">
                <div className="text-sm font-semibold text-ink">Starter</div>
                <div className="mt-2 text-sm text-ink-muted">
                  For early teams shipping their first money flows.
                </div>
                <div className="mt-4 text-2xl font-semibold text-ink">
                  From €49
                  <span className="text-sm font-medium text-ink-muted">/mo</span>
                </div>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white/75 p-5">
                <div className="text-sm font-semibold text-ink">Scale</div>
                <div className="mt-2 text-sm text-ink-muted">
                  For finance teams operating across regions.
                </div>
                <div className="mt-4 text-2xl font-semibold text-ink">
                  Custom
                  <span className="text-sm font-medium text-ink-muted">
                    {" "}
                    · volume tiers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

