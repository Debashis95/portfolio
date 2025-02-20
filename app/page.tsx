"use client";
import { CursorEffect } from "@/components/cursor-effect";
import Home from "@/components/home/home";
import Expertise from "@/components/expertise/expertise";
import Projects from "@/components/projects/projects";
import Experience from "@/components/experience/experience";
import Contact from "@/components/contact/contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorEffect />

      {/* Home Section */}
      <Home />

      {/* Expertise Section */}

      <Expertise />

      {/* Projects Section */}

      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
