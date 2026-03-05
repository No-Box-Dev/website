import styles from "./TimelineSection.module.css";

const phases = [
  {
    num: "01",
    title: "Migratie & Fundament",
    time: "Week 1–3",
    desc: "Bubble-naar-code migratie, database-opzet, kerninfrastructuur, design systeem",
  },
  {
    num: "02",
    title: "AI & Intelligentie",
    time: "Week 3–5",
    desc: "AI schadeanalyse, verzekeraar e-mailverwerking, automatiseringsregels",
  },
  {
    num: "03",
    title: "Ervaring & Dashboard",
    time: "Week 5–7",
    desc: "Berichtensysteem, design-verbetering, statistiekendashboard",
  },
  {
    num: "04",
    title: "Test & Lancering",
    time: "Week 7–8",
    desc: "Eindtest, optimalisatie, lanceringsvoorbereiding, go-live",
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className={styles.timeline}>
      <div className={styles.container}>
        <span className={styles.label}>Planning</span>
        <h2 className={styles.title}>Ontwikkelingsroadmap</h2>
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
