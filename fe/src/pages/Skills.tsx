import { motion } from "framer-motion";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <div className="min-h-screen pt-24 px-6 bg-white dark:bg-black text-black dark:text-white">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Skills
        </motion.h1>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((section, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 
              bg-white/60 dark:bg-white/5 backdrop-blur-md"
              
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >

              {/* Title */}
              <h2 className="text-lg font-semibold mb-4">
                {section.title}
              </h2>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {section.items.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full 
                    bg-gray-200 dark:bg-gray-800 
                    hover:scale-105 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Skills;