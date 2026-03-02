"use client";

import { useEffect, useRef } from "react";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.philosophy} data-glow="dark">
      <div className={styles.inner}>
        <div className={styles.statement}>
          <h2 className={styles.headline}>
            Without psychology,
            <br />
            AI optimizes systems<span className={styles.accent}>.</span>
            <br />
            With psychology,
            <br />
            AI supports people<span className={styles.accent}>.</span>
          </h2>
        </div>
        <div className={styles.columns}>
          <div className={styles.col}>
            <p>
              AI can analyze, predict, and automate at scale. But it doesn&apos;t
              understand meaning, emotion, or context the way humans experience
              them. Psychology fills that gap — deciding what&apos;s helpful versus
              overwhelming, when to offer information or hold back, and how feedback
              shapes confidence.
            </p>
          </div>
          <div className={styles.col}>
            <p>
              Every project starts with understanding people before product. We study
              how users think, hesitate, decide, and trust. This lets us build systems
              that feel predictable, explain their reasoning, and respect autonomy —
              products that don&apos;t just work, but feel right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
