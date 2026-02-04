import { Container } from "@/components/greenflow/container";
import { Section } from "@/components/greenflow/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { faq } from "@/lib/greenflow-content";
import { cn } from "@/lib/utils";

export function Faq({ className }: { className?: string }) {
  return (
    <Section
      id="faq"
      className={cn("bg-white", className)}
      aria-labelledby="faq-title"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="subtle" className="mx-auto">
            FAQ
          </Badge>
          <h2
            id="faq-title"
            className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Answers to your questions
          </h2>
          <p className="mt-3 text-base leading-7 text-ink-muted">
            Clear, practical answers—no fine print energy.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="grid gap-3">
            {faq.map((item, i) => (
              <AccordionItem key={item.question} value={`q-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}

