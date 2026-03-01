"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Work.module.css";

const projects: {
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
  imagePosition?: string;
}[] = [
  {
    title: "Playnist",
    category: "Community Platform",
    description: "A social gaming platform where nostalgia meets modern design. We crafted an experience that captures the magic of classic arcade culture while delivering smooth, responsive gameplay.",
    image: "/images/playnist-hero.png",
    color: "#FE795D",
  },
  {
    title: "Baseline",
    category: "iOS App",
    description: "Mental wellness, grounded in science. An app that guides users through moments of calm using evidence-based breathing techniques and mindful reflection.",
    image: "/images/baseline-hero.png",
    color: "#9B78F4",
  },
  {
    title: "Read with Robin",
    category: "Children\u2019s App",
    description: "Making storytime magical again. An interactive reading app designed to keep children engaged and turn shared reading into quality bonding time.",
    image: "/images/robin-hero.png",
    color: "#FE795D",
    imagePosition: "center 45%",
  },
  {
    title: "Klachtenbureau",
    category: "SaaS Platform",
    description: "Transforming complaint handling into a streamlined process. A platform that brings transparency and efficiency to dispute resolution for organizations and their customers.",
    image: "/images/kb-hero.png",
    color: "#9B78F4",
  },
];

export default function Work() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.work} data-glow="light">
      <div className={styles.header}>
        <span className={styles.label}>Selected work</span>
        <h2 className={styles.title}>Case Studies</h2>
      </div>
      <div className={styles.carousel}>
        <div ref={trackRef} className={styles.track}>
          {projects.map((p) => (
            <article key={p.title} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={p.image}
                  alt={p.title}
                  width={600}
                  height={400}
                  className={styles.image}
                  style={p.imagePosition ? { objectPosition: p.imagePosition } : undefined}
                />
              </div>
              <div className={styles.cardContent}>
                <span
                  className={styles.cardCategory}
                  style={{ color: p.color }}
                >
                  {p.category}
                </span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>
                <span className={styles.comingSoon}>Coming soon</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
