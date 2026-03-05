import styles from "./mockups.module.css";

export default function EffectivenessMockup() {
  return (
    <div className={styles.effectivenessScreen}>
      <div className={styles.effTitle}>Session Complete</div>
      <div className={styles.effSub}>Grounding Stones - 8 min</div>
      <div style={{ marginTop: 20 }}>
        <div className={styles.effQuestion}>How do you feel now?</div>
        <div className={styles.effStars}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className={n <= 4 ? styles.effStarActive : styles.effStarInactive}
            >
              {n <= 4 ? "\u2605" : "\u2606"}
            </div>
          ))}
        </div>
        <div className={styles.effTags}>
          <span className={styles.effTagActive}>Calmer</span>
          <span className={styles.effTag}>Focused</span>
          <span className={styles.effTagActive}>Grounded</span>
          <span className={styles.effTag}>Energised</span>
          <span className={styles.effTag}>Sleepy</span>
        </div>
        <div className={styles.effBtn}>Save & Continue</div>
      </div>
    </div>
  );
}
