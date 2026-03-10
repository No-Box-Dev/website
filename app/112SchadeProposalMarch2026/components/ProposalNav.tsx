"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ProposalNav.module.css";

const sections = [
  { id: "about", label: "Over" },
  { id: "vision", label: "Visie" },
  { id: "features", label: "Features" },
  { id: "timeline", label: "Roadmap" },
  { id: "next-steps", label: "Contact" },
];

export default function ProposalNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      const offsets = sections
        .map((s) => {
          const el = document.getElementById(s.id);
          if (!el) return null;
          return { id: s.id, top: el.offsetTop - 100 };
        })
        .filter(Boolean) as { id: string; top: number }[];

      const y = window.scrollY;
      let current = "";
      for (const o of offsets) {
        if (y >= o.top) current = o.id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : styles.atTop}`}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Image
            src="/images/logo-white.svg"
            alt="NoBoxDev logo"
            width={120}
            height={32}
            className={styles.logoImg}
          />
        </div>
        <div className={styles.links}>
          {sections.map((s, i) => (
            <span key={s.id} className={styles.linkWrap}>
              {i > 0 && <span className={styles.separator}>›</span>}
              <button
                className={`${styles.link} ${active === s.id ? styles.active : ""}`}
                onClick={() => scrollTo(s.id)}
              >
                {s.label}
              </button>
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
