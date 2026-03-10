import styles from "./TimelineSection.module.css";

const phases = [
  {
    num: "01",
    title: "Nader te bepalen",
    time: "",
    desc: "",
  },
  {
    num: "02",
    title: "Nader te bepalen",
    time: "",
    desc: "",
  },
  {
    num: "03",
    title: "Nader te bepalen",
    time: "",
    desc: "",
  },
  {
    num: "04",
    title: "Nader te bepalen",
    time: "",
    desc: "",
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
        <p className={styles.note}>
          In deze sectie kunnen jullie volgen waar we staan in de ontwikkeling, zodat er altijd duidelijk inzicht is in de voortgang en de status van de applicatie. Eventuele opmerkingen of updates zullen hier ook worden gedeeld.
        </p>
      </div>
    </section>
  );
}
