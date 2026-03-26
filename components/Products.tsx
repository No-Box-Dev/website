"use client";

import { useEffect, useRef } from "react";
import styles from "./Products.module.css";

const products = [
  {
    title: "Blindspot",
    description:
      "Bug reporting tool that helps users capture bugs on websites via screenshots. AI identifies and helps solve the issues — from widget to dashboard.",
  },
  {
    title: "Boundless",
    description:
      "Smart learning platform for remote families. Tailored programs that keep children curious and learning without boundaries.",
  },
  {
    title: "GitPulse",
    description:
      "AI-powered project management dashboard for GitHub organisations. All data stays in the browser — private, fast, and insightful.",
  },
];

export default function Products() {
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
    <section ref={sectionRef} className={styles.products} data-glow="light">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Our Products</span>
          <h2 className={styles.title}>Built by NoBoxDev</h2>
        </div>
        <div className={styles.grid}>
          {products.map((p) => (
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
