import { Globe2 } from "lucide-react";

import { Container } from "@/components/greenflow/container";
import { GlobeIllustration } from "@/components/greenflow/globe-illustration";
import { Section } from "@/components/greenflow/section";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { featureHighlight } from "@/lib/greenflow-content";
import { cn } from "@/lib/utils";

export function FeaturesIntro({ className }: { className?: string }) {
  const Icon = featureHighlight.icon;

  return (
    <Section className={cn("bg-white", className)}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="subtle" className="mx-auto">
            Product overview
          </Badge>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Discover what we offer
          </h2>
          <p className="mt-3 text-base leading-7 text-ink-muted">
            Everything you need to move money globally—built to feel calm, fast, and
            trustworthy for teams who operate at scale.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[32px] border border-black/10 bg-[radial-gradient(circle_at_25%_20%,rgba(0,230,118,0.22),rgba(0,230,118,0)_55%),linear-gradient(to_bottom,#ffffff,#fbfffd)] shadow-[0_40px_120px_-100px_rgba(0,0,0,0.7)]">
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-2 lg:items-center lg:p-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-greenflow/25 bg-white px-3 py-1 text-xs font-medium text-ink">
                <Icon className="h-3.5 w-3.5 text-greenflow-ink" aria-hidden="true" />
                {featureHighlight.eyebrow}
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {featureHighlight.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-ink-muted">
                {featureHighlight.description}
              </p>

              <div className="mt-7 grid gap-4">
                {featureHighlight.points.map((p) => (
                  <div
                    key={p.label}
                    className="rounded-3xl border border-black/10 bg-white p-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-sm font-medium text-ink-muted">
                        {p.label}
                      </div>
                      <div className="text-sm font-semibold text-ink">
                        {p.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Separator className="bg-black/10" />
                <div className="mt-6 flex items-center gap-3 text-sm text-ink-muted">
                  <Globe2 className="h-4 w-4 text-greenflow-ink" aria-hidden="true" />
                  Built for global finance operations, not just checkout screens.
                </div>
              </div>
            </div>

            <div className="relative">
              <GlobeIllustration className="mx-auto" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

