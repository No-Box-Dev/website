"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (el) {
      el.classList.add(styles.visible);
    }
  }, []);

  return (
    <section className={styles.hero} data-glow="dark">
      <div className={styles.content}>
        <h1 ref={headlineRef} className={styles.headline}>
          We build products
          <br />
          that <span className={styles.accent}>understand</span> people
        </h1>
        <p className={styles.tagline}>
          Where psychology meets beautiful engineering.
        </p>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
