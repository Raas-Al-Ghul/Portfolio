import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-24 px-6 bg-white dark:bg-black text-black dark:text-white">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h1>

        {/* Content */}
        <motion.div
          className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <p>
            I'm <span className="font-semibold">Adarsh Mishra</span>, a Full Stack Developer focused on building scalable and efficient web applications.
          </p>

          <p>
            I primarily work with <span className="font-semibold">MERN and Next.js</span>, and have hands-on experience with tools like 
            <span className="font-semibold"> Prisma, PostgreSQL, Redis, and Kafka</span>.
          </p>

          <p>
            I enjoy working on systems that involve <span className="font-semibold">real-time communication</span>, 
            backend architecture, and performance optimization.
          </p>

          <p>
            Apart from web development, I have experience working with <span className="font-semibold">ServiceNow </span>
            across ITSM, ITAM, and GRC modules, giving me exposure to enterprise-level workflows and automation.
          </p>

          <p>
            I also explore concepts like <span className="font-semibold">Docker, CI/CD, system design, and distributed systems</span>, 
            and continuously try to improve my engineering skills.
          </p>

        </motion.div>

      </div>
    </div>
  );
};

export default About;