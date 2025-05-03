"use client"
import { AppFooter } from "./app/components/app-footer";
import { FooterVector } from "./app/components/gradients/footer-vector";
import { CtaSection } from "./app/components/cta-section";
import { Integration } from "./app/components/integrations";
import { StakeCalculator } from "./app/components/estimate";
import { WhyChoose } from "./app/components/why-choose";
import Masthead from "./app/components/masthead";
import HowItWorks from "./app/components/how-it-works";
import {Header} from "@/app/components/layout/header";

export default function Home() {
  return (
    <div> 
      {/*<AppHeader />*/}
        <Header />
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
