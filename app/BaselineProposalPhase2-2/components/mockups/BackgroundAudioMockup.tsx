import styles from "./mockups.module.css";

export default function BackgroundAudioMockup() {
  return (
    <div className={styles.bgAudioScreen}>
      <div className={styles.lockScreen}>
        <div className={styles.lockTime}>9:41</div>
        <div className={styles.lockDate}>Wednesday, March 5</div>
        <div className={styles.nowPlaying}>
          <div className={styles.npHeader}>
            <div className={styles.npThumb}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" fill="var(--bl-cream)" opacity="0.3" />
                <circle cx="12" cy="12" r="3" fill="var(--bl-cream)" />
              </svg>
            </div>
            <div>
              <div className={styles.npTitle}>Grounding Stones</div>
              <div className={styles.npArtist}>Baseline - Overwhelm</div>
            </div>
          </div>
          <div className={styles.npProgress}>
            <div className={styles.npProgressFill} style={{ width: "35%" }} />
          </div>
          <div className={styles.npControls}>
            <div className={styles.npBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </div>
            <div className={styles.npBtnPlay}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
              </svg>
            </div>
            <div className={styles.npBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zm10-12v12h2V6h-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
