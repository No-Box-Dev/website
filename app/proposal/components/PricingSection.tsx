import styles from "./PricingSection.module.css";

const pricing = [
  { num: "01", name: "Login & Authentication", scope: "Social login, email auth, profile, sessions", cost: "€2,400" },
  { num: "02", name: "Subscription & Payments", scope: "Native subscriptions, paywall, receipt validation", cost: "€2,700" },
  { num: "03", name: "Cloud Content Delivery", scope: "CDN, migration tooling, download queue, caching", cost: "€2,900" },
  { num: "04", name: "Introductory Course", scope: "Progress backend, completion rewards, 5 sessions", cost: "€2,000" },
  { num: "05", name: "Push Notifications", scope: "Native push, scheduling backend, campaigns", cost: "€1,400" },
  { num: "06", name: "User Analytics Dashboard", scope: "Comprehensive metrics, charts, export, web app", cost: "€2,000" },
  { num: "07", name: "Tool Management Dashboard", scope: "Upload pipeline, course editor, CMS, user mgmt", cost: "€1,600" },
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
          <div className={styles.total}>
            <span className={styles.totalLabel}>Total Investment</span>
            <span className={styles.totalAmount}>€15,000</span>
          </div>
          <p className={styles.note}>
            Estimated timeline: 10–12 weeks
          </p>
        </div>
        <div className={styles.terms}>
          <div className={styles.term}>
            <div className={styles.termLabel}>Upfront</div>
            <div className={styles.termValue}>50% · €7,500</div>
          </div>
          <div className={styles.term}>
            <div className={styles.termLabel}>On Delivery</div>
            <div className={styles.termValue}>50% · €7,500</div>
          </div>
        </div>
      </div>
    </section>
  );
}
