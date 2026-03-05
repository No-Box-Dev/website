import styles from "../../BaselineProposalPhase2/components/TimelineSection.module.css";

const phases = [
  {
    num: "01",
    title: "Foundation",
    time: "Week 1",
    desc: "Backend setup, authentication system, user accounts & profiles",
  },
  {
    num: "02",
    title: "Monetisation",
    time: "Week 2",
    desc: "Subscription system, paywall UI, receipt validation",
  },
  {
    num: "03",
    title: "Engagement",
    time: "Week 3",
    desc: "Push notifications, reminders, streak alerts, preferences",
  },
  {
    num: "04",
    title: "Polish & Launch",
    time: "Week 4",
    desc: "Integration testing, edge cases, App Store prep, final QA",
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
