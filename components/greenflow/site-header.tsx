import { Menu, MoveRight } from "lucide-react";

import { BrandMark } from "@/components/greenflow/brand-mark";
import { Container } from "@/components/greenflow/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Company", href: "#company" },
];

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85",
        className,
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <BrandMark />
          <span className="sr-only">Go to top</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" className="border-greenflow/30">
            Log in
          </Button>
        </div>

        <details className="relative md:hidden">
          <summary className="list-none">
            <span className="sr-only">Open menu</span>
            <Button variant="outline" size="icon" className="border-black/10">
              <Menu className="h-4 w-4" />
            </Button>
          </summary>
          <div className="absolute right-0 mt-3 w-[min(320px,calc(100vw-2rem))] rounded-3xl border border-black/10 bg-white p-4 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-ink">Navigate</div>
              <MoveRight className="h-4 w-4 text-ink-muted" aria-hidden="true" />
            </div>
            <div className="mt-3 grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm font-medium text-ink/80 hover:bg-mint hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-3">
              <Button variant="outline" className="w-full border-greenflow/30">
                Log in
              </Button>
            </div>
          </div>
        </details>
      </Container>
    </header>
  );
}

