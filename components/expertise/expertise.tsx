"use client";
import React from "react";

import { motion } from "framer-motion";


export default function Expertise() {
    const expertiseData = [
        {
          icon: "💻",
          title: "Software Development",
          subtitle: "Development",
          description:
            "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
        },
        {
          icon: "⚛️",
          title: "Frontend Dev.",
          subtitle: "React, NextJS",
          description:
            "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
        },
        {
          icon: "📱",
          title: "Flutter Dev.",
          subtitle: "Android, iOS",
          description:
            "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.",
        },
      ];
  return (
    <>
      <section
        id="expertise"
        className="min-h-screen flex items-center justify-center py-20 px-4"
      >
        <div className="max-w-7xl w-full mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-center mb-20"
          >
            My Expertise
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertiseData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="border border-border/50 rounded-lg p-8 backdrop-blur-sm hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg text-primary mb-4">{item.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
