import { FaHtml5 } from "react-icons/fa";
import { LiaDocker } from "react-icons/lia";
import { SiApacheairflow } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiDbt } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiApachesuperset } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { motion } from "framer-motion";

const icon = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const techs = [
  { component: LiaDocker,        color: "#2496ED", duration: 2.5 },
  { component: FaPython,         color: "#3776AB", duration: 3.5 },
  { component: SiApacheairflow,  color: "#017CEE", duration: 4   },
  { component: SiDbt,            color: "#FF694B", duration: 5   },
  { component: SiMysql,          color: "#4479A1", duration: 6   },
  { component: SiPostgresql,     color: "#4169E1", duration: 7   },
  { component: SiApachekafka,    color: "#FFFFFF", duration: 3   },
  { component: SiApachespark,    color: "#E25A1C", duration: 8.5 },
  { component: SiApachesuperset, color: "#20A7C9", duration: 4.5 },
  { component: FaLaravel,        color: "#FF2D20", duration: 6.5 },
  { component: SiDjango,         color: "#44B78B", duration: 5.5 },
  { component: FaHtml5,          color: "#E34F26", duration: 9   },
  { component: FaCss3Alt,       color: "#1572B6", duration: 9.5},
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 px-8 max-w-4xl mx-auto"
      >
        {techs.map(({ component: Icon, color, duration }, index) => (
          <motion.div
            key={index}
            variants={icon(duration)}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4 aspect-square"
          >
            <Icon style={{ color }} className="text-5xl" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;