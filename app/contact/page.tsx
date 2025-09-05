"use client"
import ContactHero from "./components/ContactHero"
import ContactForm from "./components/ContactForm"
import ContactInfo from "./components/ContactInfo"
import OfficeMap from "./components/OfficeMap"
import ContactFAQ from "./components/ContactFAQ"
import ContactCTA from "./components/ContactCTA"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ContactHero />

      <div className="relative">
        {/* Contact Form and Info Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>

        {/* Office Map Section */}
        <OfficeMap />

        {/* FAQ Section */}
        <ContactFAQ />

        {/* CTA Section */}
        <ContactCTA />
      </div>
    </div>
  )
}
