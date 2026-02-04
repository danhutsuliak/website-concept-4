import { Mail } from "lucide-react";

import { BrandMark } from "@/components/greenflow/brand-mark";
import { Container } from "@/components/greenflow/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer
      id="company"
      className={cn(
        "relative overflow-hidden border-t border-black/5 bg-[radial-gradient(circle_at_20%_0%,rgba(0,230,118,0.30),rgba(0,230,118,0)_55%),linear-gradient(to_bottom,#f5fff9,#eafff4)]",
        className,
      )}
    >
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <BrandMark />
            <p className="mt-4 max-w-md text-sm leading-6 text-ink-muted">
              Greenflow is a modern fintech platform for global payments, IBAN
              services, cards, and a crypto-friendly wallet—designed to feel calm,
              regulated, and transparent.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button className="w-full sm:w-auto">Request a demo</Button>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-ink hover:bg-surface-2"
                href="mailto:hello@greenflow.example"
              >
                <Mail className="h-4 w-4 text-greenflow-ink" aria-hidden="true" />
                hello@greenflow.example
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7 lg:justify-end">
            <div>
              <div className="text-sm font-semibold text-ink">Product</div>
              <ul className="mt-3 grid gap-2 text-sm">
                <li>
                  <a className="text-ink-muted hover:text-ink" href="#products">
                    Products
                  </a>
                </li>
                <li>
                  <a className="text-ink-muted hover:text-ink" href="#solutions">
                    Solutions
                  </a>
                </li>
                <li>
                  <a className="text-ink-muted hover:text-ink" href="#pricing">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">Company</div>
              <ul className="mt-3 grid gap-2 text-sm">
                <li>
                  <a className="text-ink-muted hover:text-ink" href="#company">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-ink-muted hover:text-ink" href="#faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="text-ink-muted hover:text-ink" href="#top">
                    Back to top
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">Links</div>
              <ul className="mt-3 grid gap-2 text-sm">
                <li>
                  <a className="text-ink-muted hover:text-ink" href="/careers">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="text-ink-muted hover:text-ink" href="/legal">
                    Legal
                  </a>
                </li>
                <li>
                  <a className="text-ink-muted hover:text-ink" href="/privacy">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Separator className="bg-black/10" />
          <div className="mt-6 flex flex-col gap-3 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Greenflow. All rights reserved.</div>
            <div className="max-w-2xl">
              Greenflow is a fictional brand for a design concept. Information shown
              is illustrative and does not represent a live financial service.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

