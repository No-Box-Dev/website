"use client";

import { useEffect, useRef } from "react";
import styles from "./MouseGlow.module.css";

export default function MouseGlow() {
  const darkRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dark = darkRef.current;
    const light = lightRef.current;
    if (!dark || !light) return;

    let rafId: number;

    const getVariant = (clientY: number): "dark" | "light" => {
      const sections = document.querySelectorAll("[data-glow]");
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (clientY >= rect.top && clientY <= rect.bottom) {
          return (section.getAttribute("data-glow") as "dark" | "light") || "light";
        }
      }
      return "light";
    };

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const x = `${e.clientX}px`;
        const y = `${e.clientY}px`;

        dark.style.setProperty("--glow-x", x);
        dark.style.setProperty("--glow-y", y);
        light.style.setProperty("--glow-x", x);
        light.style.setProperty("--glow-y", y);

        const variant = getVariant(e.clientY);

        if (variant === "dark") {
          dark.style.opacity = "1";
          light.style.opacity = "0";
        } else {
          dark.style.opacity = "0";
          light.style.opacity = "1";
        }
      });
    };

    const onLeave = () => {
      dark.style.opacity = "0";
      light.style.opacity = "0";
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={darkRef} className={`${styles.glow} ${styles.dark}`} />
      <div ref={lightRef} className={`${styles.glow} ${styles.light}`} />
    </>
  );
}
