import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "@/assets/spacex.webp";
import img2 from "@/assets/AI.webp";
import img3 from "@/assets/react19.png";

const AnimatedGallery = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });

  const slideLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="space-y-16 mt-16">
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={slideLeft}
        className="flex flex-col md:flex-row items-center justify-center gap-6 px-10"
      >
        <img
          src={img1}
          className="sm:w-96 sm:h-96 h-64 w-64 object-cover rounded-lg shadow-md"
        />
        <p className="text-lg text-gray-700 max-w-md dark:text-white">
    SpaceX Hackathon: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    fermentum odio ut velit fermentum, a malesuada mauris fermentum.
  </p>
      </motion.div>

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={slideRight}
        className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 px-10"
      >
        <img
          src={img2}
          className="sm:w-96 sm:h-96 h-64 w-64 object-cover rounded-lg shadow-md"
        />
        <p className="text-lg text-gray-700 max-w-md dark:text-white">
    AI Taking Over: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    fermentum odio ut velit fermentum, a malesuada mauris fermentum.
  </p>

      </motion.div>

      <motion.div
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={slideLeft}
        className="flex flex-col md:flex-row items-center justify-center gap-6 px-10"
      >
        <img
          src={img3}
          className="sm:w-96 sm:h-96 h-64 w-64 object-cover rounded-lg shadow-md"
        />
        <p className="text-lg text-gray-700 max-w-md dark:text-white">
    Release of React 19: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    fermentum odio ut velit fermentum, a malesuada mauris fermentum.
  </p>
      </motion.div>
    </div>
  );
};

export default AnimatedGallery;