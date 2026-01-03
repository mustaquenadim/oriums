"use client";

import ServicesHero from "./components/ServicesHero";
import DetailedServiceCards from "./components/DetailedServiceCards";
import ServiceProcess from "./components/ServiceProcess";
import ServiceCTA from "./components/ServiceCTA";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <ServicesHero />
      <DetailedServiceCards />
      <ServiceProcess />
      <ServiceCTA />
    </main>
  );
}
