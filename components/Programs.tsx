"use client";

import { useEffect, useRef } from "react";
import styles from "./Programs.module.css";

const programs = [
  {
    title: "Design & Prototyping",
    description:
      "Clear, modern interfaces that make your product feel natural. We design for how people actually think \u2014 lowering cognitive load, strengthening your brand, and helping users act without hesitation.",
  },
  {
    title: "Web & Mobile Development",
    description:
      "From MVPs to full-stack applications. We build fast, scalable products with iOS, React, and Next.js \u2014 quick delivery without compromising on architecture or quality.",
  },
  {
    title: "AI Integration",
    description:
      "AI that supports users, not replaces them. We combine psychology and AI so products draft, suggest, and guide \u2014 while humans review, decide, and act. Smarter without being complicated.",
  },
  {
    title: "Psychology-Led Strategy",
    description:
      "With a psychologist on the team, we look beyond screens and features. We design for motivation, reduce friction, and shape behavior with intention \u2014 so products don\u2019t just function, they make sense.",
  },
];

export default function Programs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(`.${styles.card}`);
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add(styles.visible);
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.programs} data-glow="light">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>What we do</span>
          <h2 className={styles.title}>Capabilities</h2>
        </div>
        <div className={styles.grid}>
          {programs.map((p) => (
            <div key={p.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
