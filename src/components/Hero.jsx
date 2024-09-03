import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Me.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-black"
            >
              Monish Kumar Dhanasekar
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-gradient-to-r from-pink-400 via-slate-600 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-black"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:relative lg:top-[-100px] lg:left-[20px]">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Monish Kumar Dhanasekar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
