import styles from "./VisionSection.module.css";

function IconPersonalised() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="13" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="3.5" fill="var(--coral)" />
    </svg>
  );
}

function IconConnected() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 18a9 7 0 0 1 18 0" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 18a6 5 0 0 1 12 0" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="18" r="2.5" fill="var(--coral)" />
    </svg>
  );
}

function IconIntelligent() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="16" width="4" height="8" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="12" y="10" width="4" height="14" rx="1" fill="rgba(255,255,255,0.35)" />
      <rect x="20" y="4" width="4" height="20" rx="1" fill="var(--coral)" />
    </svg>
  );
}

const pillars = [
  {
    icon: <IconPersonalised />,
    title: "Personalised",
    desc: "User accounts, preferences, and progress tracking. Every session tailored to the individual's emotional state and history.",
  },
  {
    icon: <IconConnected />,
    title: "Connected",
    desc: "Cloud-delivered content with offline caching. Dynamic updates, push notifications, and real-time engagement.",
  },
  {
    icon: <IconIntelligent />,
    title: "Intelligent",
    desc: "Admin dashboards with user analytics, content management, and notification campaigns. Data-driven decisions.",
  },
];

const v1Screens = [
  "Home / Emotion Selector",
  "Emotion Detail",
  "Meditation Player",
  "Tool Library",
  "Favourites",
  "Settings",
];

const v2Screens = [
  { name: "Login / Sign Up", isNew: true },
  { name: "Subscription Paywall", isNew: true },
  { name: "Home / Emotion Selector", isNew: false },
  { name: "Introductory Course List", isNew: true },
  { name: "Course Session Detail", isNew: true },
  { name: "Meditation Player (updated)", isNew: false },
  { name: "Download States on Cards", isNew: true },
  { name: "Push Notification Preferences", isNew: true },
  { name: "User Profile & Settings", isNew: true },
  { name: "In-App Stats / Progress", isNew: true },
  { name: "Admin Analytics Dashboard (web)", isNew: true },
  { name: "Content Management Dashboard (web)", isNew: true },
  { name: "Notification Campaign Builder (web)", isNew: true },
];

export default function VisionSection() {
  return (
    <>
      <section id="vision" className={styles.vision}>
        <div className={styles.container}>
          <span className={styles.label}>The Vision</span>
          <h2 className={styles.title}>From App to Platform</h2>
          <p className={styles.subtitle}>
            V2 transforms Baseline from a standalone meditation app into a connected
            wellness platform — with accounts, subscriptions, cloud content, and
            intelligent admin tools.
          </p>
          <div className={styles.pillars}>
            {pillars.map((p) => (
              <div key={p.title} className={styles.pillar}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.inventory}>
        <div className={styles.container}>
          <span className={styles.label} style={{ color: "var(--coral)" }}>
            Screen Inventory
          </span>
          <h2 className={styles.title} style={{ color: "var(--text-primary)" }}>
            V1 → V2 Screen Map
          </h2>
          <div className={styles.invGrid}>
            <div className={styles.invCol}>
              <h3>
                Current Screens <span className={styles.tagV1}>V1</span>
              </h3>
              <div className={styles.screenList}>
                {v1Screens.map((s, i) => (
                  <div key={s} className={styles.screenItem}>
                    <span className={styles.screenNum}>{String(i + 1).padStart(2, "0")}</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.invCol}>
              <h3>
                V2 Screens <span className={styles.tagV2}>V2</span>
              </h3>
              <div className={styles.screenList}>
                {v2Screens.map((s, i) => (
                  <div
                    key={s.name}
                    className={`${styles.screenItem} ${s.isNew ? styles.screenNew : ""}`}
                  >
                    <span className={styles.screenNum}>{String(i + 1).padStart(2, "0")}</span>
                    {s.name}
                    {s.isNew && " ✦"}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
