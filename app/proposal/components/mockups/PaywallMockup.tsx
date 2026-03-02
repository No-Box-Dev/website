import styles from "./mockups.module.css";

export default function PaywallMockup() {
  return (
    <div className={styles.paywallScreen}>
      <h3 className={styles.paywallTitle}>Unlock Your Practice</h3>
      <p className={styles.paywallSub}>
        Get unlimited access to all meditations, courses, and new content as it&apos;s added.
      </p>
      <div className={styles.planCards}>
        <div className={styles.planCard}>
          <div>
            <div className={styles.planName}>Monthly</div>
            <div className={styles.planPrice}>Pricing TBD</div>
          </div>
        </div>
        <div className={styles.planCardActive}>
          <div>
            <div className={styles.planName}>Yearly</div>
            <div className={styles.planPrice}>Pricing TBD</div>
          </div>
          <span className={styles.planBadge}>Best Value</span>
        </div>
      </div>
      <div className={styles.features}>
        {[
          "All 60+ guided meditations",
          "Introductory course access",
          "New content every month",
          "Offline download & caching",
          "Progress tracking & streaks",
        ].map((f) => (
          <div key={f} className={styles.featureRow}>
            <span className={styles.checkmark}>✓</span>
            {f}
          </div>
        ))}
      </div>
      <div className={styles.pillCoral} style={{ width: "100%", textAlign: "center" }}>
        Start Free Trial
      </div>
      <p style={{ fontSize: "0.75rem", color: "var(--bl-serene-ash)", marginTop: 12, textAlign: "center" }}>
        7-day free trial · Cancel anytime
      </p>
    </div>
  );
}
