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
        <h1 className={styles.title}>Voorstel</h1>
        <div className={styles.divider} />
        <div className={styles.meta}>
          <span className={styles.metaTag}>112Schade V2</span>
          <span className={styles.metaTag}>Platform Upgrade</span>
          <span className={styles.metaTag}>Maart 2026</span>
        </div>
        <p className={styles.subtitle}>
          Van MVP naar productie. Van Bubble naar een op maat gebouwd platform.
          AI-gestuurde schadeanalyse, geautomatiseerde workflows, native mobiel en bruikbare analyses.
        </p>
      </div>
    </section>
  );
}
