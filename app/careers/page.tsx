"use client";

import { useState } from "react";
import Header from "../components/common/header";
import CustomCursor from "../components/CustomCursor";
import BackgroundGrid from "../components/BackgroundGrid";
import CareersHero from "./components/CareersHero";
import CompanyCulture from "./components/CompanyCulture";
import OpenPositions from "./components/OpenPositions";
import EmployeeTestimonials from "./components/EmployeeTestimonials";
import ApplicationProcess from "./components/ApplicationProcess";
import ApplicationForm from "./components/ApplicationForm";
import Footer from "../components/common/footer";

export default function CareersPage() {
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <CareersHero />
      <CompanyCulture />
      <OpenPositions />
      <EmployeeTestimonials />
      <ApplicationProcess />
      <ApplicationForm />
    </main>
  );
}
