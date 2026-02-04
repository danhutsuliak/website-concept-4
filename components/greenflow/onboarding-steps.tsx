import { Container } from "@/components/greenflow/container";
import { Section } from "@/components/greenflow/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { onboardingSteps } from "@/lib/greenflow-content";
import { cn } from "@/lib/utils";

export function OnboardingSteps({ className }: { className?: string }) {
  return (
    <Section className={cn("bg-surface-2", className)}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="subtle" className="mx-auto">
            Onboarding
          </Badge>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Get started in 3 simple steps
          </h2>
          <p className="mt-3 text-base leading-7 text-ink-muted">
            A guided flow that keeps compliance teams happy while letting product
            teams ship quickly.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {onboardingSteps.map((step, idx) => (
            <Card key={step.title} className="bg-white">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-mint text-sm font-semibold text-greenflow-ink">
                    {idx + 1}
                  </div>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 text-sm leading-6 text-ink-muted">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

