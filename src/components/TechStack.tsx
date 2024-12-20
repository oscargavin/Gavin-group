"use client";

import React from "react";

const TechStack = () => {
  const technologies = [
    {
      category: "AI & Machine Learning",
      items: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn"],
    },
    {
      category: "Cloud & Infrastructure",
      items: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
    },
    {
      category: "Frontend Development",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Python", "PostgreSQL", "Redis"],
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <h2 className="mb-12 text-3xl font-light sm:mb-16 sm:text-4xl">
          Our Tech Stack
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <div key={index} className="group">
              <div className="rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="mb-4 text-lg font-medium transition-colors group-hover:text-blue-500">
                  {tech.category}
                </h3>
                <div className="space-y-3">
                  {tech.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-3 text-gray-600"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500/50 transition-transform group-hover:scale-150" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
