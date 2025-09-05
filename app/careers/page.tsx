"use client"

import { useState } from "react"
import Header from "../components/common/header"
import Footer from "../components/Footer"
import CustomCursor from "../components/CustomCursor"
import BackgroundGrid from "../components/BackgroundGrid"
import CareersHero from "./components/CareersHero"
import CompanyCulture from "./components/CompanyCulture"
import OpenPositions from "./components/OpenPositions"
import EmployeeTestimonials from "./components/EmployeeTestimonials"
import ApplicationProcess from "./components/ApplicationProcess"
import ApplicationForm from "./components/ApplicationForm"

export default function CareersPage() {
  const [cursorVariant, setCursorVariant] = useState("default")

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-black">
      <CustomCursor variant={cursorVariant} />
      <BackgroundGrid />
      <Header />
      <CareersHero />
      <CompanyCulture />
      <OpenPositions />
      <EmployeeTestimonials />
      <ApplicationProcess />
      <ApplicationForm />
      <Footer />
    </main>
  )
}
