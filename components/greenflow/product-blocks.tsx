import { Check } from "lucide-react";

import { Container } from "@/components/greenflow/container";
import { PhoneMockup } from "@/components/greenflow/phone-mockup";
import { Section } from "@/components/greenflow/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { productBlocks } from "@/lib/greenflow-content";
import { cn } from "@/lib/utils";

function AccentSurface({ accent }: { accent: "mint" | "lime" }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-100",
        accent === "mint"
          ? "bg-[radial-gradient(circle_at_18%_22%,rgba(0,230,118,0.18),rgba(0,230,118,0)_55%),linear-gradient(to_bottom,#ecfff6,#ffffff)]"
          : "bg-[radial-gradient(circle_at_20%_18%,rgba(0,230,118,0.28),rgba(0,230,118,0)_58%),linear-gradient(to_bottom,#f4fff9,#ffffff)]",
      )}
    />
  );
}

export function ProductBlocks({ className }: { className?: string }) {
  return (
    <Section id="products" className={cn("bg-white", className)}>
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Products built to work together
            </h2>
            <p className="mt-3 text-base leading-7 text-ink-muted">
              Pick one product—or unify your entire money movement stack. Every module
              shares the same controls, reporting, and permissions.
            </p>
          </div>
          <div className="hidden lg:block">
            <Badge variant="subtle">Modular · API-first · Auditable</Badge>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {productBlocks.map((block, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <article
                key={block.id}
                className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-[0_40px_120px_-100px_rgba(0,0,0,0.75)]"
              >
                <AccentSurface accent={block.accent} />
                <div
                  className={cn(
                    "relative grid gap-10 p-6 sm:p-8 lg:grid-cols-2 lg:items-center lg:p-12",
                    reversed && "lg:[&>*:first-child]:order-2",
                  )}
                >
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-greenflow/25 bg-white px-3 py-1 text-xs font-medium text-ink">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-greenflow"
                      />
                      {block.eyebrow}
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-ink-muted">
                      {block.description}
                    </p>

                    <ul className="mt-7 grid gap-3">
                      {block.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-greenflow/20 text-greenflow-ink">
                            <Check className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <span className="text-sm leading-6 text-ink">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button className="w-full sm:w-auto">
                        See details
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-greenflow/30 bg-white sm:w-auto"
                      >
                        Talk to sales
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    <PhoneMockup
                      variant={block.mockupVariant}
                      className={cn(reversed ? "lg:mr-auto" : "lg:ml-auto")}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

