import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col items-center text-center py-16 lg:py-24">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-6 text-6xl font-thin tracking-tight lg:mt-16"
        >
          Adior Gandawidjaja
        </motion.h1>

        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
        >
          Final Year Student
        </motion.span>

        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="my-2 max-w-2xl py-6 font-light tracking-tighter text-neutral-300 leading-relaxed"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;