"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import Expertise from "@/components/expertise/expertise";
export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, Tailwind CSS, and Stripe integration.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      link: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description:
        "Real-time task management application with team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      link: "#",
      github: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with real-time updates and location tracking.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      tags: ["React", "OpenWeather API", "Chart.js"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <>
      <section id="projects" className="min-h-screen py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-background rounded-xl overflow-hidden border border-border/50 group hover:border-primary/50 transition-colors"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-accent rounded-full text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Link
                      href={project.link}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.github}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
