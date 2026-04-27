import { CERTIFICATES } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Certificates = () => {
  return (
    <div className="py-16 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-1">
          Certifications
        </h2>
        <h2 className="text-4xl font-semibold text-white">
          My <span className="italic text-gray-400">Certificates</span>
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden"
          >
            <div className="w-full h-44 overflow-hidden bg-neutral-800">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4">
              <p className="text-xs text-gray-400 mb-1">{cert.issuer}</p>
              <p className="text-base font-medium text-white mb-3">{cert.title}</p>
              {cert.year && (
                <span className="text-xs bg-neutral-800 text-gray-400 px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certificates;