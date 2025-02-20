"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const bannerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  const name = "Debashis Roy".split("");
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary-50)_0%,transparent_65%)]"
        />
        <div className="relative z-10 text-center space-y-8 md:space-y-12 px-4 max-w-4xl mx-auto mt-16 md:mt-0">
          <motion.div
            variants={bannerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-x-2 text-4xl md:text-7xl font-bold"
          >
            {name.map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className={letter === " " ? "mr-4" : ""}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-primary">
              JavaScript Developer | React.js & Next.js Expert
            </p>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg transition-opacity duration-300 hover:text-foreground"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
            >
              With 7 years of experience as a JavaScript developer, I specialize
              in creating modern, responsive web applications using React.js and
              Next.js. My expertise extends to building beautiful user
              interfaces with Tailwind CSS and creating smooth, engaging
              animations with Framer Motion.
            </motion.p>
            <div className="flex justify-center space-x-4 mb-16 md:mb-0">
              <Link
                href="https://github.com"
                target="_blank"
                className="p-2 rounded-full bg-accent/50 hover:bg-accent"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="p-2 rounded-full bg-accent/50 hover:bg-accent"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.button
          onClick={() => scrollToSection("expertise")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary hover:text-primary/80 transition-colors block"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
        </motion.button>
      </section>
    </>
  );
}
