"use client";

import { motion } from "framer-motion";


export default function Experience() {
  return (
    <>
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center bg-accent/5"
      >
        <div className="max-w-4xl mx-auto px-4 py-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Professional Journey
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
              <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold">
                  Senior Frontend Developer
                </h3>
                <p className="text-primary mt-1">2022 - Present</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>• Led development of multiple React.js applications</li>
                  <li>• Implemented responsive designs using Tailwind CSS</li>
                  <li>• Optimized application performance and loading times</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
              <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <p className="text-primary mt-1">2020 - 2022</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>• Developed and maintained React.js applications</li>
                  <li>• Created reusable component libraries</li>
                  <li>• Collaborated with UI/UX designers</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
              <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold">Backend Developer</h3>
                <p className="text-primary mt-1">2020 - 2022</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>• Developed and maintained Node.js applications</li>
                  <li>• Implemented RESTful APIs</li>
                  <li>• Collaborated with database designers</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
