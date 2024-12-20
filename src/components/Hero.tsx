"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../../public/hero-image.jpg";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-32">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={slideUp}
              className="mb-6 inline-block sm:mb-8"
            >
              <div className="rounded-full bg-black/5 px-4 py-2 text-sm backdrop-blur-sm sm:px-6">
                🚀 Transforming businesses with AI
              </div>
            </motion.div>

            <motion.h1
              className="mb-6 text-4xl font-light leading-tight sm:mb-8 sm:text-5xl lg:text-6xl"
              variants={staggerContainer}
            >
              {[
                "We build",
                "intelligent",
                "software solutions",
                "for the future",
              ].map((line, index) => (
                <motion.span key={index} variants={slideUp} className="block">
                  {line}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="mb-8 max-w-xl text-base text-gray-600 sm:mb-12 sm:text-lg"
            >
              Partner with us to create cutting-edge AI and software solutions
              that drive real business outcomes.
            </motion.p>

            <motion.button
              variants={slideUp}
              whileHover={{
                y: -2,
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center space-x-2 rounded-full bg-black px-6 py-3 text-sm text-white sm:px-8 sm:py-4"
            >
              <span>Start your project</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          <motion.div
            className="relative lg:col-span-5"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <motion.div
              className="aspect-square overflow-hidden rounded-2xl"
              style={{ perspective: 1000 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <Image
                src={heroImage}
                alt="Hero Image"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
