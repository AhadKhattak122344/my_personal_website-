import React from 'react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg"
    >
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Ahad Khattak</h1>
        <p className="text-gray-600">ahadkhttk12@gmail.com | 240-728-4545 | Reston, VA</p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Objective</h2>
        <p>Aspiring software engineer seeking opportunities to leverage strong technical skills and project experience in developing innovative solutions. Committed to continuous learning and growth in the field of computer science and machine learning.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        <div className="mb-3">
          <h3 className="text-lg font-medium">George Mason University</h3>
          <p>B.Sc. Computer Science (Expected Dec 2026)</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Northern Virginia Community College</h3>
          <p>A.S. Computer Science (May 2024)</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Programming Languages: Python, Java, SQL, HTML/CSS</li>
          <li>Tools & Technologies: Power BI, Tableau, Numpy, Matplotlib</li>
          <li>Soft Skills: Leadership, Communication, Analytical Thinking, Teamwork</li>
          <li>Languages: English, Hindi, Urdu, Pashto</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Work Experience</h2>
        <div className="mb-3">
          <h3 className="text-lg font-medium">FusionLabsDMV - Freelance Software Engineer</h3>
          <p className="text-gray-600">March 2023 - Present</p>
          <ul className="list-disc list-inside mt-2">
            <li>Developed custom websites using Next.js, Tailwind CSS, and React, improving client engagement by 40%</li>
            <li>Implemented secure backend systems including user authentication and payment integrations</li>
            <li>Designed and deployed inventory management systems, increasing operational efficiency by 25%</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium">Domino's Pizza - Assistant Manager</h3>
          <p className="text-gray-600">February 2019 - 2023</p>
          <ul className="list-disc list-inside mt-2">
            <li>Analyzed labor and cost data, optimizing scheduling and budget allocation to improve profitability by 15%</li>
            <li>Led and trained a team of 20+ employees, increasing overall productivity by 30%</li>
            <li>Implemented new sales strategies, resulting in a 20% increase in average order value</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Projects</h2>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-medium">Movie Recommendation System:</span> Developed using Python and machine learning techniques, achieving 85% accuracy in personalized suggestions
          </li>
          <li>
            <span className="font-medium">Advanced Calculator:</span> Created a Java-based application with JavaFX GUI, supporting complex mathematical operations
          </li>
          <li>
            <span className="font-medium">Weather Application:</span> Built a Java application integrating OpenWeatherMap API, providing real-time weather data and forecasts
          </li>
          <li>
            <span className="font-medium">Student Management System:</span> Designed a Java application for efficient data parsing and management of student records
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Awards</h2>
        <p>RSF Scholarship of Excellence (March 2023 - Present)</p>
      </section>
    </motion.div>
  );
};

export default Resume;

