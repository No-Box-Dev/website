import styles from "./mockups.module.css";

export default function AudioFixMockup() {
  return (
    <div className={styles.audioScreen}>
      <div className={styles.audioMuteIcon}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className={styles.audioTitle}>Guided Breathing</div>
      <div className={styles.audioSub}>Playing with mute switch on</div>
      <div className={styles.audioWave}>
        {[20, 35, 50, 30, 45, 55, 40, 25, 48, 35, 52, 28, 42, 38, 22].map((h, i) => (
          <div
            key={i}
            className={styles.audioBar}
            style={{ height: h, opacity: 0.4 + (h / 55) * 0.6 }}
          />
        ))}
      </div>
      <div className={styles.audioStatus}>Audio Active</div>
    </div>
  );
}
