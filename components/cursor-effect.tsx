"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 2.5,
      y: mousePosition.y - 2.5,
    },
    outline: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
      },
    },
  };

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block"
        variants={variants}
        animate="default"
      />
      <motion.div
        className="cursor-outline hidden md:block"
        variants={variants}
        animate="outline"
      />
    </>
  );
}