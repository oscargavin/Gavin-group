"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/use-scroll-reveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Process = () => {
  const [ref, isInView] = useScrollReveal();

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your business needs and challenges",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Develop a tailored solution leveraging cutting-edge tech",
    },
    {
      number: "03",
      title: "Execution",
      description: "Agile development with continuous feedback and iteration",
    },
  ];

  return (
    <motion.section
      id="process"
      className="bg-black py-20 text-white sm:py-32"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.h2
          className="mb-12 text-3xl font-light sm:mb-16 sm:text-4xl"
          variants={itemVariants}
        >
          Our Process
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="transform transition-all duration-300"
            >
              <div className="mb-4 text-4xl font-light text-white/20 sm:text-5xl">
                {step.number}
              </div>
              <h3 className="mb-3 text-xl sm:text-2xl">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Process;
