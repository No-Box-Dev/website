import styles from "./mockups.module.css";

export default function RecommendationMockup() {
  return (
    <div className={styles.recoScreen}>
      <div className={styles.recoLabel}>Recommended for you</div>
      <div className={styles.recoTitle}>Grounding Stones</div>
      <div className={styles.recoReason}>
        Based on your history with overwhelm, evening sessions, and past effectiveness ratings.
      </div>
      <div className={styles.recoCard}>
        <div className={styles.recoCardHeader}>
          <div className={styles.recoIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="var(--bl-cream)" strokeWidth="2" opacity="0.5" />
              <circle cx="12" cy="12" r="4" fill="var(--bl-cream)" />
            </svg>
          </div>
          <div>
            <div className={styles.recoName}>Grounding Stones</div>
            <div className={styles.recoDuration}>8 min guided meditation</div>
          </div>
        </div>
        <div className={styles.recoMatch}>
          <div className={styles.recoMatchBar}>
            <div className={styles.recoMatchFill} style={{ width: "92%" }} />
          </div>
          <span className={styles.recoMatchLabel}>92% match</span>
        </div>
        <div className={styles.recoFactors}>
          <span className={styles.recoFactor}>Evening session</span>
          <span className={styles.recoFactor}>High effectiveness</span>
          <span className={styles.recoFactor}>Not tried recently</span>
        </div>
      </div>
      <div className={styles.recoCard}>
        <div className={styles.recoCardHeader}>
          <div className={styles.recoIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="var(--bl-cream)" strokeWidth="2" opacity="0.5" />
              <path d="M8 12s1.5 3 4 3 4-3 4-3" stroke="var(--bl-cream)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className={styles.recoName}>Progressive Relax</div>
            <div className={styles.recoDuration}>12 min guided meditation</div>
          </div>
        </div>
        <div className={styles.recoMatch}>
          <div className={styles.recoMatchBar}>
            <div className={styles.recoMatchFill} style={{ width: "78%" }} />
          </div>
          <span className={styles.recoMatchLabel}>78% match</span>
        </div>
        <div className={styles.recoFactors}>
          <span className={styles.recoFactor}>New tool</span>
          <span className={styles.recoFactor}>Similar category</span>
        </div>
      </div>
    </div>
  );
}
