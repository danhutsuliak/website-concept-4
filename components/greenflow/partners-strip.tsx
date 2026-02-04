import { Container } from "@/components/greenflow/container";
import { partners } from "@/lib/greenflow-content";
import { cn } from "@/lib/utils";

function PartnerLogo({ monogram, name }: { monogram: string; name: string }) {
  return (
    <div className="flex items-center gap-3 rounded-3xl border border-black/10 bg-white px-4 py-3 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="grid h-9 w-9 place-items-center rounded-2xl bg-mint text-xs font-semibold text-greenflow-ink">
        {monogram}
      </div>
      <div className="text-sm font-semibold tracking-tight text-ink">{name}</div>
    </div>
  );
}

export function PartnersStrip({ className }: { className?: string }) {
  return (
    <section className={cn("border-y border-black/5 bg-white", className)}>
      <Container className="py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-sm font-medium text-ink-muted">
            Trusted by companies worldwide
          </p>
          <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <PartnerLogo key={p.name} monogram={p.monogram} name={p.name} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

