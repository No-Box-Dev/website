import styles from "./mockups.module.css";

const meditations = [
  { name: "Deep Calm", meta: "12 min · Anxiety", state: "cached", color: "#8A959A" },
  { name: "Morning Rise", meta: "8 min · Energy", state: "downloading", color: "#E6E3DC" },
  { name: "Evening Wind Down", meta: "15 min · Restless", state: "cloud", color: "#3A4E59" },
  { name: "Inner Stillness", meta: "10 min · Overwhelm", state: "cached", color: "#25333A" },
  { name: "Letting Go", meta: "11 min · Carrying", state: "cloud", color: "#8A959A" },
];

export default function DownloadMockup() {
  return (
    <div className={styles.downloadScreen}>
      <h3 className={styles.downloadTitle}>Your Library</h3>
      <div className={styles.meditationCards}>
        {meditations.map((m) => (
          <div key={m.name} className={styles.meditationCard}>
            <div
              className={styles.meditationThumb}
              style={{ background: m.color }}
            />
            <div className={styles.meditationInfo}>
              <div className={styles.meditationName}>{m.name}</div>
              <div className={styles.meditationMeta}>{m.meta}</div>
            </div>
            <div
              className={`${styles.dlIcon} ${
                m.state === "cached"
                  ? styles.dlCached
                  : m.state === "downloading"
                  ? styles.dlProgress
                  : styles.dlCloud
              }`}
            >
              {m.state === "cached" ? "✓" : m.state === "downloading" ? "63%" : "↓"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
