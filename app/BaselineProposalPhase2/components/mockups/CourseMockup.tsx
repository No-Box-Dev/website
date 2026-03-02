import styles from "./mockups.module.css";

const sessions = [
  { num: 1, name: "Finding Your Baseline", duration: "8 min", status: "complete" },
  { num: 2, name: "Breath as Anchor", duration: "10 min", status: "complete" },
  { num: 3, name: "Noticing Emotions", duration: "12 min", status: "current" },
  { num: 4, name: "Sitting with Discomfort", duration: "10 min", status: "locked" },
  { num: 5, name: "Building Your Practice", duration: "15 min", status: "locked" },
];

export default function CourseMockup() {
  return (
    <div className={styles.courseScreen}>
      <div className={styles.courseHeader}>
        <h3 className={styles.courseTitle}>Introductory Course</h3>
        <p className={styles.courseSub}>5 sessions · 55 minutes total</p>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: "40%" }} />
      </div>
      <div className={styles.sessionList}>
        {sessions.map((s) => (
          <div key={s.num} className={styles.sessionCard}>
            <div
              className={`${styles.sessionNum} ${
                s.status === "complete"
                  ? styles.sessionComplete
                  : s.status === "current"
                  ? styles.sessionCurrent
                  : styles.sessionLocked
              }`}
            >
              {s.status === "complete" ? "✓" : s.num}
            </div>
            <div className={styles.sessionInfo}>
              <div className={styles.sessionName}>{s.name}</div>
              <div className={styles.sessionDuration}>{s.duration}</div>
            </div>
            <span
              className={styles.sessionStatus}
              style={{
                color:
                  s.status === "complete"
                    ? "var(--bl-midnight)"
                    : s.status === "current"
                    ? "var(--bl-deep-inhale)"
                    : "var(--bl-serene-ash)",
              }}
            >
              {s.status === "complete" ? "Done" : s.status === "current" ? "Continue" : "🔒"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
