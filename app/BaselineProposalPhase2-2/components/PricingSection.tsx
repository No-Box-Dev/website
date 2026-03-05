import styles from "./PricingSection.module.css";

const pricing = [
  { num: "01", name: "Sign In & Account System", scope: "Social login, email auth, profile, sessions", cost: "€1,900" },
  { num: "02", name: "Subscription & Payments", scope: "Native subscriptions, paywall, receipt validation", cost: "€2,100" },
  { num: "03", name: "Push Notifications", scope: "Daily reminders, streaks, new content alerts", cost: "€1,000" },
];

export default function PricingSection() {
  return (
    <section id="investment" className={styles.pricing}>
      <div className={styles.container}>
        <h2 className={styles.title}>Your Offer</h2>
        <p className={styles.subtitle}>Milestones and Investment</p>
        <div className={styles.table}>
          <div className={styles.header}>
            <span>#</span>
            <span>Feature</span>
            <span>Scope</span>
            <span>Cost</span>
          </div>
          {pricing.map((row, i) => (
            <div
              key={row.num}
              className={`${styles.row} ${i % 2 === 0 ? styles.rowAlt : ""}`}
            >
              <span className={styles.col1}>{row.num}</span>
              <span className={`${styles.col2} ${styles.colName}`}>{row.name}</span>
              <span className={styles.col3}>{row.scope}</span>
              <span className={`${styles.col4} ${styles.colCost}`}>{row.cost}</span>
            </div>
          ))}
          <div className={styles.subtotal}>
            <span className={styles.subtotalLabel}>Subtotal</span>
            <span className={styles.subtotalAmount}>€6,500</span>
          </div>
          <div className={styles.discount}>
            <span className={styles.discountLabel}>Discount</span>
            <span className={styles.discountAmount}>-€1,500</span>
          </div>
          <div className={styles.total}>
            <span className={styles.totalLabel}>Total Investment</span>
            <span className={styles.totalAmount}>€5,000</span>
          </div>
          <p className={styles.note}>
            Estimated timeline: 4 weeks
          </p>
        </div>
        <div className={styles.freeSection}>
          <div className={styles.freeBadge}>Free</div>
          <h3 className={styles.freeTitle}>Small Changes — Included at No Cost</h3>
          <ul className={styles.freeList}>
            <li>Meditation content changes</li>
            <li>UI colours, labels & sizing adjustments (existing screens only)</li>
            <li>Bypassing the silent switch for audio playback</li>
          </ul>
        </div>
        <div className={styles.requirementsSection}>
          <h3 className={styles.requirementsTitle}>Requirements from You</h3>
          <p className={styles.requirementsDesc}>To get started, we need the following set up on your end:</p>
          <ul className={styles.requirementsList}>
            <li>Stripe account setup (for subscription payment processing)</li>
            <li>App Store Connect transfer — app moved to your own Apple Developer account</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
