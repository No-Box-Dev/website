"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <Image
            src={scrolled ? "/images/logo.svg" : "/images/logo-white.svg"}
            alt="NoBoxDev"
            width={140}
            height={28}
            priority
          />
        </a>
        <a href="#contact" className={styles.cta}>
          Start a project
        </a>
      </div>
    </nav>
  );
}
