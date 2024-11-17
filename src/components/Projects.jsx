import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-4 rounded"
              />
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              <div className="flex items-center gap-4 mb-4">
                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                  aria-label="GitHub Repository"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.727-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.091-.746.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.304 3.495.998.107-.775.418-1.304.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.309.465-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.022.005 2.048.138 3.005.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.231 1.912 1.231 3.221 0 4.609-2.805 5.623-5.475 5.921.43.371.814 1.103.814 2.222v3.293c0 .322.218.694.824.576 4.767-1.587 8.205-6.084 8.205-11.387 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                {/* Live Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                  aria-label="Live Project"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path d="M12 3c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9zm-3.874 13.364c-2.219-2.218-2.22-5.83-.003-8.048s5.829-2.218 8.048 0 2.22 5.83.003 8.048-5.829 2.22-8.048 0zm4.378-2.034a.5.5 0 0 1-.707 0l-1.5-1.5a.5.5 0 0 1 0-.707l1.5-1.5a.5.5 0 0 1 .707.707l-1.146 1.147 1.146 1.146a.5.5 0 0 1 0 .707z" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-stone-900 mr-2 rounded px-2 py-1 mt-4 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
