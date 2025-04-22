"use client"
import {Button} from "@/app/components/ui/buttons";
import {InputsShowcase} from "@/app/components/ui/input";
import { AppHeader } from "./app/components/app-header";
import { AppFooter } from "./app/components/app-footer";
import { FooterVector } from "./app/components/gradients/footer-vector";
import { CtaSection } from "./app/components/cta-section";
import { Integration } from "./app/components/integrations";

export default function Home() {
  return (
    <div> 
      <AppHeader />
      <Integration />
      <CtaSection />
      <FooterVector />
      <AppFooter />
    </div>
  );
}
