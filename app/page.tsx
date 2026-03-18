import Hero from "@/components/Hero";
import ProblemCards from "@/components/ProblemCards";
import GuideAuthority from "@/components/GuideAuthority";
import PlanSteps from "@/components/PlanSteps";
import OurTownModel from "@/components/OurTownModel";
import ComparisonTable from "@/components/ComparisonTable";
import AudienceRouting from "@/components/AudienceRouting";
import FinalCTA from "@/components/FinalCTA";
export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemCards />
      <GuideAuthority />
      <PlanSteps />
      <OurTownModel />
      <ComparisonTable />
      <AudienceRouting />
      <FinalCTA />
    </main>
  );
}
