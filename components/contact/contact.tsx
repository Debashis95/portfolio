"use client";
import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--primary-50)_0%,transparent_70%)]"
        />
        <div className="max-w-4xl mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background/50 backdrop-blur-lg rounded-2xl p-8 border border-border/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Link
                href="mailto:contact@debashisroy.dev"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </Link>
              <Link
                href="/resume.pdf"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md hover:bg-accent/90 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Download Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
