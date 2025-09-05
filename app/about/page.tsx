import AboutHero from "./components/AboutHero"
import MissionVisionValues from "./components/MissionVisionValues"
import CompanyHistory from "./components/CompanyHistory"
import TeamProfiles from "./components/TeamProfiles"
import ClientTestimonials from "./components/ClientTestimonials"
import CompanyStats from "./components/CompanyStats"
import CallToAction from "./components/CallToAction"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      <MissionVisionValues />
      <CompanyHistory />
      <TeamProfiles />
      <ClientTestimonials />
      <CompanyStats />
      <CallToAction />
    </div>
  )
}
