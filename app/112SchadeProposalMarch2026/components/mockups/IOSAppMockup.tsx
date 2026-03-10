import styles from "./mockups.module.css";

const claims = [
  { id: "SCH-2847", type: "Lease Autoschade", date: "3 mrt 2026", progress: 65, status: "In Behandeling" },
  { id: "SCH-2839", type: "Stormschade", date: "18 feb 2026", progress: 90, status: "Bijna Klaar" },
];

export default function IOSAppMockup() {
  return (
    <div className={styles.iosScreen}>
      <div className={styles.iosHeader}>
        <div className={styles.iosGreeting}>Goedemorgen,</div>
        <div className={styles.iosName}>Jan de Vries</div>
      </div>
      <div className={styles.iosBody}>
        {claims.map((c) => (
          <div key={c.id} className={styles.iosClaimCard}>
            <div className={styles.iosClaimHeader}>
              <span className={styles.iosClaimId}>{c.id}</span>
              <span className={`${styles.statusBadge} ${styles.statusActive}`}>{c.status}</span>
            </div>
            <div className={styles.iosClaimType}>{c.type}</div>
            <div className={styles.iosClaimDate}>{c.date}</div>
            <div className={styles.iosProgressBar}>
              <div className={styles.iosProgressFill} style={{ width: `${c.progress}%` }} />
            </div>
          </div>
        ))}
        <div className={styles.iosNewClaim}>+ Nieuwe Schademelding</div>
      </div>
      <div className={styles.iosTabBar}>
        <div className={styles.iosTabActive}>
          <div className={styles.iosTabIcon} />
          Home
        </div>
        <div className={styles.iosTab}>
          <div className={styles.iosTabIcon} />
          Schades
        </div>
        <div className={styles.iosTab}>
          <div className={styles.iosTabIcon} />
          Berichten
        </div>
        <div className={styles.iosTab}>
          <div className={styles.iosTabIcon} />
          Profiel
        </div>
      </div>
    </div>
  );
}
