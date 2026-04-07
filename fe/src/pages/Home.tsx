import * as Icons from "lucide-react";
console.log(Icons);
import { motion } from "framer-motion";
import {GitGraph, ExternalLink, Mail } from "lucide-react";


const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black text-black dark:text-white">

      <div className="max-w-5xl w-full">

        {/* Intro */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          <p className="text-lg text-gray-500 dark:text-gray-400">
            Hi, I’m 
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Adarsh Mishra
          </h1>

          <h2 className="text-2xl mt-4 font-medium">
            Full Stack Developer
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
            I build scalable web applications with modern technologies,
            focusing on performance, clean architecture, and real-world impact.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-gray-400 hover:scale-105 transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-5 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="#" target="_blank">
            <GitGraph className="hover:scale-110 transition" />
          </a>
          <a href="#" target="_blank">
            <ExternalLink className="hover:scale-110 transition" />
          </a>
          <a href="#">
            <Mail className="hover:scale-110 transition" />
          </a>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            "MERN",
            "Next.js",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "Docker",
            "Redis",
            "Kafka",
            "WebSockets",
            "ServiceNow",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Home;