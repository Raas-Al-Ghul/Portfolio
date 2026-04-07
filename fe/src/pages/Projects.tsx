import { motion } from "framer-motion";
import { projects } from "../data/project";

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 px-6 bg-white dark:bg-black text-black dark:text-white">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.h1>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 
              bg-white/60 dark:bg-white/5 backdrop-blur-md 
              hover:scale-[1.03] transition duration-300"
              
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >

              {/* Title */}
              <h2 className="text-xl font-semibold mb-2">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full 
                    bg-gray-200 dark:bg-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 text-sm font-medium">
                <a href={project.github} target="_blank">
                  GitHub →
                </a>
                <a href={project.live} target="_blank">
                  Live →
                </a>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Projects;