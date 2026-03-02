import styles from "./mockups.module.css";

const metrics = [
  { label: "Active Users", value: "1,247", change: "+12%", up: true },
  { label: "Sessions Today", value: "342", change: "+8%", up: true },
  { label: "Subscribers", value: "89", change: "+23%", up: true },
  { label: "Churn Rate", value: "2.1%", change: "-0.4%", up: false },
];

const barHeights = [45, 60, 38, 72, 55, 80, 65, 48, 70, 58, 85, 62];

export default function AdminDashMockup() {
  return (
    <div className={styles.adminScreen}>
      <div className={styles.adminHeader}>
        <h3 className={styles.adminTitle}>Dashboard</h3>
        <span className={styles.adminDate}>Last 30 days</span>
      </div>
      <div className={styles.metricsRow}>
        {metrics.map((m) => (
          <div key={m.label} className={styles.metricCard}>
            <div className={styles.metricLabel}>{m.label}</div>
            <div className={styles.metricValue}>{m.value}</div>
            <div className={`${styles.metricChange} ${m.up ? styles.metricUp : styles.metricDown}`}>
              {m.change}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.chartPlaceholder}>
        <div className={styles.chartTitle}>Sessions per Day</div>
        <div className={styles.chartBars}>
          {barHeights.map((h, i) => (
            <div key={i} className={styles.chartBar} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
