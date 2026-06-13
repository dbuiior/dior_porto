import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Web", "Data", "Back-End"];

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      {/* Filter Tabs */}
      <div className="mb-10 flex justify-center gap-3">
        {categories.map((cat) => {
          const isActive = active === cat;

          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-1.5 text-sm font-medium transition-colors duration-200
                ${
                  isActive
                    ? "border-purple-500 bg-purple-900/50 text-purple-300"
                    : "border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-neutral-200"
                }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={active} // 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="flex gap-6 rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 transition-colors duration-300 hover:border-neutral-600"
              >
                {/* Index */}
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 text-lg font-medium text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-500">
                      {project.category}
                    </span>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-purple-800 bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link (FIXED) */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg border border-neutral-600 px-4 py-1.5 text-sm text-neutral-300 transition-colors duration-200 hover:border-neutral-400 hover:text-white"
                    >
                      View project →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;