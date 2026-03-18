import type { Metadata } from "next";
import { employeesContent } from "@/data/employees";
import LandingHero from "@/components/landing/LandingHero";
import LandingProblem from "@/components/landing/LandingProblem";
import LandingPlan from "@/components/landing/LandingPlan";
import LandingComparison from "@/components/landing/LandingComparison";
import LandingSuccess from "@/components/landing/LandingSuccess";
import LandingStakes from "@/components/landing/LandingStakes";
import LandingCTA from "@/components/landing/LandingCTA";

const c = employeesContent;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: { canonical: "/employees" },
};

export default function EmployeesPage() {
  return (
    <main className="audience-employees">
      <LandingHero {...c.hero} />
      <LandingProblem {...c.problem} />
      <LandingPlan {...c.plan} />
      <LandingComparison {...c.comparison} />
      <LandingSuccess {...c.success} />
      <LandingStakes {...c.stakes} />
      <LandingCTA {...c.cta} />
    </main>
  );
}
