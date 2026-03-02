import styles from "./TimelineSection.module.css";

const phases = [
  {
    num: "01",
    title: "Foundation",
    time: "Weeks 1–3",
    desc: "Backend setup, authentication, subscription infrastructure",
  },
  {
    num: "02",
    title: "Content",
    time: "Weeks 4–6",
    desc: "Cloud migration, download system, offline caching",
  },
  {
    num: "03",
    title: "Engagement",
    time: "Weeks 7–9",
    desc: "Onboarding course, push notifications, streaks",
  },
  {
    num: "04",
    title: "Intelligence",
    time: "Weeks 10–12",
    desc: "Analytics dashboard, tool management, final QA",
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className={styles.timeline}>
      <div className={styles.container}>
        <span className={styles.label}>Timeline</span>
        <h2 className={styles.title}>Development Roadmap</h2>
        <div className={styles.track}>
          {phases.map((p) => (
            <div key={p.num} className={styles.phase}>
              <div className={styles.node}>{p.num}</div>
              <div>
                <h3 className={styles.phaseTitle}>{p.title}</h3>
                <span className={styles.phaseTime}>{p.time}</span>
                <p className={styles.phaseDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
