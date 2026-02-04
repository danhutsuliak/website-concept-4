import { Availability } from "@/components/greenflow/availability";
import { Faq } from "@/components/greenflow/faq";
import { FeaturesIntro } from "@/components/greenflow/features-intro";
import { Hero } from "@/components/greenflow/hero";
import { OnboardingSteps } from "@/components/greenflow/onboarding-steps";
import { PartnersStrip } from "@/components/greenflow/partners-strip";
import { ProductBlocks } from "@/components/greenflow/product-blocks";
import { SolutionsGrid } from "@/components/greenflow/solutions-grid";
import { SiteFooter } from "@/components/greenflow/site-footer";
import { SiteHeader } from "@/components/greenflow/site-header";

export default function Home() {
  return (
    <div className="bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:shadow-lg"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <PartnersStrip />
        <FeaturesIntro />
        <ProductBlocks />
        <OnboardingSteps />
        <SolutionsGrid />
        <Availability />
        <Faq />
      </main>

      <SiteFooter />
    </div>
  );
}
