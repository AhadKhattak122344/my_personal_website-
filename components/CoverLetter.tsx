import React from 'react';
import { motion } from 'framer-motion';

interface CoverLetterProps {
  companyName: string;
  positionTitle: string;
}

const CoverLetter: React.FC<CoverLetterProps> = ({ companyName, positionTitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg"
    >
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Ahad Khattak</h1>
        <p>ahadkhttk12@gmail.com | 240-728-4545 | Reston, VA</p>
      </header>

      <section className="mb-4">
        <p>{new Date().toLocaleDateString()}</p>
      </section>

      <section className="mb-4">
        <p>Dear Hiring Manager,</p>
      </section>

      <section className="mb-4">
        <p>
          I am writing to express my strong interest in the {positionTitle} position at {companyName}. As an aspiring software engineer currently pursuing a B.Sc. in Computer Science at George Mason University, I am excited about the opportunity to contribute my skills and passion for technology to your team.
        </p>
      </section>

      <section className="mb-4">
        <p>
          My technical skills in Python, Java, and web technologies, combined with my experience in developing innovative projects such as a movie recommendation system and a weather application, align well with the requirements of this role. I am particularly drawn to {companyName}'s commitment to [research company and insert relevant detail about their mission or recent projects].
        </p>
      </section>

      <section className="mb-4">
        <p>
          In my current role as a Freelance Software Engineer at FusionLabsDMV, I have honed my abilities in creating custom websites and implementing secure backend systems. This experience, coupled with my strong analytical skills and passion for problem-solving, positions me to make meaningful contributions to your team.
        </p>
      </section>

      <section className="mb-4">
        <p>
          I am excited about the prospect of bringing my technical expertise, creativity, and enthusiasm for learning to {companyName}. I look forward to the opportunity to discuss how my skills and experiences can contribute to your team's success.
        </p>
      </section>

      <section className="mb-4">
        <p>Thank you for your time and consideration.</p>
      </section>

      <section>
        <p>Sincerely,</p>
        <p>Ahad Khattak</p>
      </section>
    </motion.div>
  );
};

export default CoverLetter;

