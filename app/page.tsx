"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Briefcase,
  Home,
  Mail,
  User,
  Menu,
  X,
  ExternalLink,
  Github,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CursorEffect } from "@/components/cursor-effect";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/projects";
import Expertise from "@/components/expertise/expertise";
import Banner from "@/components/banner/banner";
import Footer from "@/layouts/footer/footer";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "projects",
        "expertise",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "expertise", icon: Briefcase, label: "Expertise" },
    { id: "projects", icon: Code2, label: "Projects" },
    { id: "experience", icon: User, label: "Experience" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

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
    <div className="min-h-screen bg-background text-foreground">
      <CursorEffect />
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="text-primary text-xl font-bold relative group"
            >
              <span className="relative">
                <motion.span className="flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  Debashis Roy
                  <Code2 className="w-5 h-5" />
                </motion.span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                />
              </span>
            </motion.div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
















              <div className="hidden md:flex space-x-8">
                {navItems.map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                      activeSection === id
                        ? "text-primary bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-background border-b"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-md transition-colors ${
                    activeSection === id
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Home Section */}
      <Banner />

      {/* Expertise Section */}
      <Expertise />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
