import styles from "./mockups.module.css";

const days = ["M", "T", "W", "T", "F", "S", "S"];

export default function UserStatsMockup() {
  return (
    <div className={styles.statsScreen}>
      <h3 className={styles.statsTitle}>Your Progress</h3>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>47</span>
          <span className={styles.statLabel}>Sessions</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>6h</span>
          <span className={styles.statLabel}>Total Time</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>12</span>
          <span className={styles.statLabel}>Day Streak</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>3</span>
          <span className={styles.statLabel}>Courses Done</span>
        </div>
      </div>
      <div className={styles.streakBar}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--bl-midnight)", marginBottom: 8 }}>
            This Week
          </div>
          <div className={styles.streakDays}>
            {days.map((d, i) => (
              <div
                key={d + i}
                className={`${styles.streakDot} ${i < 5 ? styles.streakActive : styles.streakInactive}`}
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
