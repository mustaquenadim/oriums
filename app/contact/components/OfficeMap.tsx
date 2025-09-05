"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OfficeMap() {
  const offices = [
    {
      name: "San Francisco HQ",
      address: "123 Innovation Street, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri 9AM-6PM PST",
      isHeadquarters: true,
    },
    {
      name: "New York Office",
      address: "456 Tech Avenue, New York, NY 10001",
      phone: "+1 (555) 123-4568",
      hours: "Mon-Fri 9AM-6PM EST",
      isHeadquarters: false,
    },
    {
      name: "London Office",
      address: "789 Digital Lane, London, UK EC1A 1BB",
      phone: "+44 20 1234 5678",
      hours: "Mon-Fri 9AM-5PM GMT",
      isHeadquarters: false,
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Global Presence</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Visit us at any of our offices worldwide or schedule a virtual meeting
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              {/* Map Placeholder */}
              <div className="relative h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Interactive Map</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Click on any location to get directions</p>
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Navigation className="h-4 w-4" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>

                {/* Map Pins */}
                <div className="absolute top-1/4 left-1/4 animate-bounce">
                  <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                </div>
                <div className="absolute top-1/3 right-1/3 animate-bounce delay-100">
                  <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                </div>
                <div className="absolute bottom-1/3 left-1/2 animate-bounce delay-200">
                  <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Office Locations */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {offices.map((office, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {office.name}
                      {office.isHeadquarters && (
                        <span className="ml-2 px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
                          HQ
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{office.address}</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Navigation className="h-4 w-4" />
                    Directions
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{office.hours}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Schedule Visit
                    </Button>
                    <Button variant="ghost" size="sm">
                      Virtual Tour
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Can't Visit in Person?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              No problem! We offer virtual consultations and can work with clients anywhere in the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="gap-2">📹 Schedule Video Call</Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                📞 Phone Consultation
              </Button>
              <Button variant="ghost" className="gap-2">
                💬 Live Chat
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
