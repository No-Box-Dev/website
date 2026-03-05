import styles from "./mockups.module.css";

const sessions = [
  { date: "Today", name: "Grounding Stones", emotion: "Overwhelm", rating: 4 },
  { date: "Mar 3", name: "Ocean Breath", emotion: "Overwhelm", rating: 5 },
  { date: "Mar 2", name: "Body Scan Release", emotion: "Anxiety", rating: 3 },
  { date: "Mar 1", name: "Cloud Dissolve", emotion: "Restless", rating: 4 },
];

export default function HistoryMockup() {
  return (
    <div className={styles.historyScreen}>
      <div className={styles.historyTitle}>Your Journey</div>
      <div className={styles.historySub}>Session history & insights</div>
      <div className={styles.historyStats}>
        <div className={styles.historyStat}>
          <span className={styles.historyStatValue}>24</span>
          <span className={styles.historyStatLabel}>Sessions</span>
        </div>
        <div className={styles.historyStat}>
          <span className={styles.historyStatValue}>4.2</span>
          <span className={styles.historyStatLabel}>Avg Rating</span>
        </div>
        <div className={styles.historyStat}>
          <span className={styles.historyStatValue}>7</span>
          <span className={styles.historyStatLabel}>Day Streak</span>
        </div>
      </div>
      <div className={styles.historyList}>
        {sessions.map((s) => (
          <div key={`${s.date}-${s.name}`} className={styles.historyItem}>
            <div className={styles.historyDate}>{s.date}</div>
            <div className={styles.historyInfo}>
              <div className={styles.historyName}>{s.name}</div>
              <div className={styles.historyEmotion}>{s.emotion}</div>
            </div>
            <div className={styles.historyRating}>
              {"\u2605".repeat(s.rating)}{"\u2606".repeat(5 - s.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
