"use client";

import React from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useContactForm } from "@/hooks/use-contact-form";
import { motion } from "framer-motion";
import { scrollReveal } from "@/utils/animation";

const Contact = () => {
  const [ref, isInView] = useScrollReveal();
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <motion.section
      id="contact"
      className="bg-gray-50 py-20 sm:py-32"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scrollReveal}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <motion.div
              className="sticky top-32"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h2
                className="mb-6 text-3xl font-light sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.3 }}
              >
                Let&apos;s work together
              </motion.h2>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.4 }}
              >
                Ready to transform your business with intelligent solutions?
              </motion.p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm text-gray-600">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 w-full border-b-2 ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } bg-white px-2 py-4 transition-colors focus:border-black focus:outline-none`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <motion.span
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {errors.name}
                    </motion.span>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm text-gray-600">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 w-full border-b-2 ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } bg-white px-2 py-4 transition-colors focus:border-black focus:outline-none`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <motion.span
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {errors.email}
                    </motion.span>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm text-gray-600">Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`mt-1 w-full resize-none border-b-2 ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    } bg-white px-2 py-4 transition-colors focus:border-black focus:outline-none`}
                    placeholder="Tell us about your project"
                  />
                  {errors.message && (
                    <motion.span
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {errors.message}
                    </motion.span>
                  )}
                </label>
              </div>

              <div className="flex items-center justify-between">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center space-x-2 rounded-full bg-black px-8 py-4 text-sm text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                  whileHover={{
                    y: -2,
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </motion.button>

                {isSuccess && (
                  <motion.span
                    className="text-sm text-green-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    Message sent successfully!
                  </motion.span>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
