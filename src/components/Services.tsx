"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/use-scroll-reveal";

const services = [
  {
    title: "AI Integration",
    description: "Advanced machine learning solutions",
    icon: "🤖",
  },
  {
    title: "Cloud Architecture",
    description: "Scalable infrastructure design",
    icon: "☁️",
  },
  {
    title: "Custom Development",
    description: "Tailored software solutions",
    icon: "💻",
  },
  {
    title: "Data Analytics",
    description: "Intelligent insights engine",
    icon: "📊",
  },
  {
    title: "API Development",
    description: "Seamless integrations",
    icon: "🔄",
  },
  {
    title: "Security",
    description: "Enterprise-grade protection",
    icon: "🔒",
  },
];

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

const Services = () => {
  const [ref, isInView] = useScrollReveal();

  return (
    <motion.section
      className="bg-white py-20 sm:py-32"
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
          Our Solutions
        </motion.h2>

        {/* Mobile: Vertical Stack */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg"
              whileHover={{
                y: -4,
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              }}
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-3 text-xl">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Horizontal Scroll */}
        <div className="relative hidden md:block">
          <motion.div
            className="scrollbar-hide flex space-x-6 overflow-x-auto pb-8"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-[300px] flex-none rounded-xl bg-gray-50 p-6 lg:w-[320px]"
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                }}
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-3 text-xl">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
