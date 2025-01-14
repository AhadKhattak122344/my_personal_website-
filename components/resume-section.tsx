"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ResumeSection() {
  return (
    <section id="resume" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Ahad Khattak</CardTitle>
            <p className="text-sm text-muted-foreground">(U.S. Citizen)</p>
            <p className="text-sm">ahadkhttk12@gmail.com | 240-728-4545 | Reston, VA</p>
            <a href="https://github.com/AhadKhattak122344" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">GitHub</a>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <div className="mb-4">
                <h4 className="font-medium">George Mason University, Fairfax, VA</h4>
                <p>Bachelor's Degree in Computer Science (Expected 12/2026)</p>
                <p className="text-sm text-muted-foreground">Coursework: Analysis of Algorithms, Machine Learning, Calculus III, Linear Algebra, Operating Systems</p>
              </div>
              <div>
                <h4 className="font-medium">Northern Virginia Community College, Loudoun, VA</h4>
                <p>Associate's Degree in Computer Science (2023-5/2024)</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <p><strong>Technical Skills:</strong> Python, Java, SQL, HTML/CSS, Power BI, Tableau, Numpy, Matplotlib, Office Suite, Automation</p>
              <p><strong>Soft Skills:</strong> Adaptability, Analytical thinking, Teamwork, Leadership, Effective communication</p>
              <p><strong>Multilingual:</strong> English, Hindi, Urdu, Pashto</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
              <div className="mb-4">
                <h4 className="font-medium">FusionLabsDMV, Co-Founder</h4>
                <p className="italic">Freelance Software Engineer, Fairfax, VA (March 2023 - Present)</p>
                <ul className="list-disc list-inside">
                  <li>Designed and developed custom websites using modern frameworks including Next.js, Tailwind CSS, and React.</li>
                  <li>Implemented backend capabilities such as user authentication, payment integrations (Stripe/PayPal), and inventory management systems.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Domino's Pizza</h4>
                <p className="italic">Assistant Manager, Reston, VA (February 2019 - 2023)</p>
                <ul className="list-disc list-inside">
                  <li>Analyzed labor and cost data to ensure efficient scheduling and budget allocation, contributing to improved profitability.</li>
                  <li>Coached sales associates in product specifications, sales incentives, and selling techniques, significantly increasing productivity.</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Movie Recommendation System</h4>
                  <p className="italic">Python, Machine Learning</p>
                  <ul className="list-disc list-inside">
                    <li>Developed an advanced movie recommendation system utilizing Python and machine learning techniques such as collaborative/content-based filtering to provide personalized movie suggestions.</li>
                    <li>Employed Pandas and Numpy for extensive data manipulation, cleaning, and numerical analysis, ensuring accurate and efficient data processing.</li>
                    <li>Integrated external movie databases through API to fetch real-time data to enrich the movie database.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Advanced Calculator Application</h4>
                  <p className="italic">Java, JavaFX</p>
                  <ul className="list-disc list-inside">
                    <li>Developed an advanced calculator application capable of performing various mathematical operations beyond basic arithmetic.</li>
                    <li>Implemented using Java with a graphical user interface (GUI) built using JavaFX.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Weather Application</h4>
                  <p className="italic">Java, OpenWeatherMap API</p>
                  <ul className="list-disc list-inside">
                    <li>Developed a Java-based weather application that retrieves and displays real-time weather data from OpenWeatherMap API, featuring a user-friendly interface for querying current conditions and forecasts.</li>
                    <li>Implemented using Java with a user-friendly graphical interface (GUI) built using JavaFX. The interface is designed to be intuitive and interactive, allowing users to easily access and visualize weather data through dynamic charts, maps, and detailed forecasts.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Students and Universities</h4>
                  <p className="italic">Java, Data Parsing</p>
                  <ul className="list-disc list-inside">
                    <li>Designed a Java application for managing student and university data by parsing CSV files using the Java Scanner class.</li>
                    <li>Implemented functionality to search, filter, and sort student records on attributes such as name, grade, and university, enhancing the system's usability for administrators.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Awards & Honors</h3>
              <p>RSF Scholarship of Excellence (March 2023 - Present)</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

