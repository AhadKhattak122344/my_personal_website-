import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Awards() {
  const awardsData = [
    {
      title: "RSF Scholarship of Excellence",
      date: "March 2023 - Present"
    }
  ]

  return (
    <section id="awards" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Awards & Honors</h2>
        <div className="space-y-6">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{award.title}</span>
                    <span className="text-sm text-gray-500">{award.date}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Recognition for academic excellence and commitment to the field of computer science.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

