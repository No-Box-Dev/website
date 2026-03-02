import Image from "next/image";
import styles from "./CoverSection.module.css";

export default function CoverSection() {
  return (
    <section className={styles.cover}>
      <div className={styles.glow} />
      <Image
        src="/images/polygon-45.png"
        alt=""
        width={900}
        height={900}
        className={styles.polygon}
        priority
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Proposal</h1>
        <div className={styles.divider} />
        <div className={styles.meta}>
          <span className={styles.metaTag}>Baseline V2</span>
          <span className={styles.metaTag}>Marie Keutler</span>
          <span className={styles.metaTag}>March 2026</span>
        </div>
        <p className={styles.subtitle}>
          From standalone meditation app to connected wellness platform.
          Subscriptions, cloud content, guided onboarding, and actionable insights.
        </p>
      </div>
    </section>
  );
}
