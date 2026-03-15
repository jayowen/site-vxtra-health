import type { Metadata } from "next";
import { physiciansContent } from "@/data/physicians";
import LandingHero from "@/components/landing/LandingHero";
import LandingProblem from "@/components/landing/LandingProblem";
import LandingGuide from "@/components/landing/LandingGuide";
import LandingPlan from "@/components/landing/LandingPlan";
import OurTownModel from "@/components/OurTownModel";
import LandingComparison from "@/components/landing/LandingComparison";
import LandingSuccess from "@/components/landing/LandingSuccess";
import LandingStakes from "@/components/landing/LandingStakes";
import LandingCTA from "@/components/landing/LandingCTA";

const c = physiciansContent;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: { canonical: "/physicians" },
};

export default function PhysiciansPage() {
  return (
    <main>
      <LandingHero {...c.hero} />
      <LandingProblem {...c.problem} />
      <LandingGuide {...c.guide} />
      <LandingPlan {...c.plan} />
      <OurTownModel />
      <LandingComparison {...c.comparison} />
      <LandingSuccess {...c.success} />
      <LandingStakes {...c.stakes} />
      <LandingCTA {...c.cta} />
    </main>
  );
}
