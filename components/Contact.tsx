"use client";

import { useEffect, useRef } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
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
    <section ref={sectionRef} id="contact" className={styles.contact} data-glow="light">
      <div className={styles.inner}>
        <h2 className={styles.headline}>
          Let&apos;s <span className={styles.accent}>Talk</span>
        </h2>
        <p className={styles.subtitle}>
          Working on something exciting and need support? We build human-centered digital products. Drop us a line.
        </p>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            const input = e.currentTarget.querySelector("input");
            if (input?.value) {
              window.location.href = `mailto:hello@noboxdev.com?subject=New project inquiry&body=Email: ${input.value}`;
            }
          }}
        >
          <input
            type="email"
            placeholder="Your email address"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Let&apos;s talk
          </button>
        </form>
        <p className={styles.note}>Usually within 24 hours</p>
      </div>
    </section>
  );
}
