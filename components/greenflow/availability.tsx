import { Container } from "@/components/greenflow/container";
import { Section } from "@/components/greenflow/section";
import { Badge } from "@/components/ui/badge";
import { countryChips } from "@/lib/greenflow-content";
import { cn } from "@/lib/utils";

export function Availability({ className }: { className?: string }) {
  return (
    <Section className={cn("bg-surface-2", className)}>
      <Container>
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <Badge variant="subtle">Availability</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Available in 50+ countries
            </h2>
            <p className="mt-3 text-base leading-7 text-ink-muted">
              Expand confidently with region-aware compliance flows and product
              toggles. Coverage varies by product and business model.
            </p>
          </div>

          <div className="w-full max-w-2xl">
            <div className="rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.55)]">
              <div className="grid grid-cols-5 gap-3 sm:grid-cols-8">
                {countryChips.map((c) => (
                  <div key={c.label} className="grid place-items-center">
                    <div
                      className={cn(
                        "grid h-11 w-11 place-items-center rounded-2xl border border-black/10 text-xs font-semibold text-ink",
                        c.color,
                      )}
                      aria-label={c.label}
                      title={c.label}
                    >
                      {c.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-5 text-ink-muted">
                Icons represent regions conceptually—these are not national flags.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

