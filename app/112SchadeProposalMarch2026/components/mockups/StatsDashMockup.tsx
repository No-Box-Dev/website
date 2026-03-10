import styles from "./mockups.module.css";

const metrics = [
  { label: "Open Schades", value: "127", change: "+8%", up: true },
  { label: "Gem. Oplostijd", value: "4,2d", change: "-12%", up: false },
  { label: "Tevredenheid", value: "94%", change: "+3%", up: true },
];

const barData = [
  { blue: 65, navy: 45 },
  { blue: 80, navy: 55 },
  { blue: 45, navy: 38 },
  { blue: 90, navy: 62 },
  { blue: 72, navy: 48 },
  { blue: 58, navy: 42 },
  { blue: 85, navy: 70 },
  { blue: 68, navy: 50 },
  { blue: 95, navy: 65 },
  { blue: 75, navy: 55 },
];

export default function StatsDashMockup() {
  return (
    <div className={styles.statsScreen}>
      <div className={styles.statsHeader}>
        <h3 className={styles.statsTitle}>Statistieken</h3>
        <span className={styles.statsDate}>Laatste 30 dagen</span>
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
      <div className={styles.chartCard}>
        <div className={styles.chartTitle}>Schademeldingen vs. Afgehandeld</div>
        <div className={styles.chartBars}>
          {barData.map((d, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2, alignItems: "stretch", height: "100%" }}>
              <div style={{ flex: 1 }} />
              <div className={`${styles.chartBar} ${styles.chartBarBlue}`} style={{ height: `${d.blue}%` }} />
              <div className={`${styles.chartBar} ${styles.chartBarNavy}`} style={{ height: `${d.navy}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.engagementRow}>
        <div className={styles.engagementCard}>
          <span className={styles.engagementValue}>2,1u</span>
          <span className={styles.engagementLabel}>Gem. Eerste Reactie</span>
        </div>
        <div className={styles.engagementCard}>
          <span className={styles.engagementValue}>89%</span>
          <span className={styles.engagementLabel}>Engagement Rate</span>
        </div>
      </div>
    </div>
  );
}
