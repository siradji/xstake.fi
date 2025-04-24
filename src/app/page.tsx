"use client"
import {Button} from "@/app/components/ui/buttons";
import {InputsShowcase} from "@/app/components/ui/input";
import { AppHeader } from "./app/components/app-header";
import { AppFooter } from "./app/components/app-footer";
import { FooterVector } from "./app/components/gradients/footer-vector";
import { CtaSection } from "./app/components/cta-section";
import { Integration } from "./app/components/integrations";
import { StakeCalculator } from "./app/components/estimate";
import { WhyChoose } from "./app/components/why-choose";
import Masthead from "./app/components/masthead";
import HowItWorks from "./app/components/how-it-works";

export default function Home() {
  return (
    <div> 
      <AppHeader />
      <Masthead />
      <HowItWorks />
      <WhyChoose />
      <StakeCalculator />
      <Integration />
      <CtaSection />
      <FooterVector />
      <AppFooter />
    </div>
  );
}
