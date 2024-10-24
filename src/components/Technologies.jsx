import { RiReactjsLine } from "react-icons/ri";
import { SiRedux, SiJavascript } from "react-icons/si";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Technologies() {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    whileInView: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              initial="initial"
              variants={iconVariants(2.5)}
              className="flex flex-col items-center p-4"
              whileInView="whileInView"
            >
              <RiReactjsLine className="text-7xl text-cyan-500" />
              <span className="mt-2 text-lg font-semibold text-gray-700">
                React
              </span>
            </motion.div>
            <motion.div
              initial="initial"
              variants={iconVariants(3)}
              className="flex flex-col items-center p-4"
              whileInView="whileInView"
            >
              <SiRedux className="text-7xl text-purple-600" />
              <span className="mt-2 text-lg font-semibold text-gray-700">
                Redux
              </span>
            </motion.div>
            <motion.div
              initial="initial"
              variants={iconVariants(3.5)}
              className="flex flex-col items-center p-4"
              whileInView="whileInView"
            >
              <SiJavascript className="text-7xl text-yellow-400" />
              <span className="mt-2 text-lg font-semibold text-gray-700">
                JavaScript
              </span>
            </motion.div>
            <motion.div
              initial="initial"
              variants={iconVariants(6)}
              className="flex flex-col items-center p-4"
              whileInView="whileInView"
            >
              <DiHtml5 className="text-7xl text-orange-500" />
              <span className="mt-2 text-lg font-semibold text-gray-700">
                HTML5
              </span>
            </motion.div>
            <motion.div
              initial="initial"
              variants={iconVariants(5)}
              className="flex flex-col items-center p-4"
              whileInView="whileInView"
            >
              <DiCss3 className="text-7xl text-blue-500" />
              <span className="mt-2 text-lg font-semibold text-gray-700">
                CSS3
              </span>
            </motion.div>
            <motion.div
              initial="initial"
              variants={iconVariants(4)}
              className="flex flex-col items-center p-4"
              whileInView="whileInView"
            >
              <RiTailwindCssFill className="text-7xl text-blue-600" />
              <span className="mt-2 text-lg font-semibold text-gray-700">
                Tailwind CSS
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
