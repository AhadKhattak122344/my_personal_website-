import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projectsData = [
    {
      title: "Movie Recommendation System",
      technologies: "Python, Machine Learning",
      details: [
        "Developed an advanced movie recommendation system utilizing Python and machine learning techniques such as collaborative/content-based filtering to provide personalized movie suggestions.",
        "Employed Pandas and Numpy for extensive data manipulation, cleaning, and numerical analysis, ensuring accurate and efficient data processing.",
        "Integrated external movie databases through API to fetch real-time data to enrich the movie database."
      ]
    },
    {
      title: "Advanced Calculator Application",
      technologies: "Java, JavaFX",
      details: [
        "Developed an advanced calculator application capable of performing various mathematical operations beyond basic arithmetic.",
        "Implemented using Java with a graphical user interface (GUI) built using JavaFX."
      ]
    },
    {
      title: "Weather Application",
      technologies: "Java, OpenWeatherMap API",
      details: [
        "Developed a Java-based weather application that retrieves and displays real-time weather data from OpenWeatherMap API, featuring a user-friendly interface for querying current conditions and forecasts.",
        "Implemented using Java with a user-friendly graphical interface (GUI) built using JavaFX. The interface is designed to be intuitive and interactive, allowing users to easily access and visualize weather data through dynamic charts, maps, and detailed forecasts."
      ]
    },
    {
      title: "Students and Universities",
      technologies: "Java, Data Parsing",
      details: [
        "Designed a Java application for managing student and university data by parsing CSV files using the Java Scanner class.",
        "Implemented functionality to search, filter, and sort student records on attributes such as name, grade, and university, enhancing the system's usability for administrators."
      ]
    }
  ]

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Projects</h2>
        <div className="space-y-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2">{project.technologies}</p>
                  <ul className="list-disc list-inside">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="text-sm mb-1">{detail}</li>
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

