import styles from "./mockups.module.css";

const toggles = [
  { label: "Daily Reminders", desc: "Get a gentle nudge at your preferred time", on: true },
  { label: "Streak Alerts", desc: "Stay motivated with milestone notifications", on: true },
  { label: "New Content", desc: "Be the first to know about new meditations", on: true },
  { label: "Weekly Summary", desc: "Your practice overview every Sunday", on: false },
  { label: "Course Updates", desc: "Reminders to continue your course sessions", on: true },
];

export default function NotificationsMockup() {
  return (
    <div className={styles.notifScreen}>
      <h3 className={styles.notifTitle}>Notifications</h3>
      <p className={styles.notifSub}>Choose what you&apos;d like to hear about</p>
      <div className={styles.toggleList}>
        {toggles.map((t) => (
          <div key={t.label} className={styles.toggleRow}>
            <div>
              <div className={styles.toggleLabel}>{t.label}</div>
              <div className={styles.toggleDesc}>{t.desc}</div>
            </div>
            <div className={`${styles.toggle} ${t.on ? styles.toggleOn : styles.toggleOff}`}>
              <div className={styles.toggleKnob} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
