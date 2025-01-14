import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experienceData = [
    {
      company: "FusionLabsDMV",
      position: "Co-Founder, Freelance Software Engineer",
      location: "Fairfax, VA",
      date: "March 2023 - Present",
      responsibilities: [
        "Designed and developed custom websites using modern frameworks including Next.js, Tailwind CSS, and React.",
        "Implemented backend capabilities such as user authentication, payment integrations (Stripe/PayPal), and inventory management systems."
      ]
    },
    {
      company: "Domino's Pizza",
      position: "Assistant Manager",
      location: "Reston, VA",
      date: "February 2019 - 2023",
      responsibilities: [
        "Analyzed labor and cost data to ensure efficient scheduling and budget allocation, contributing to improved profitability.",
        "Coached sales associates in product specifications, sales incentives, and selling techniques, significantly increasing productivity."
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Work Experience</h2>
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{exp.position}</span>
                    <span className="text-sm text-gray-500">{exp.date}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm">{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

