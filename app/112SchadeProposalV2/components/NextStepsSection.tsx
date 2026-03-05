import Image from "next/image";
import styles from "./NextStepsSection.module.css";

const steps = [
  { title: "Kickoff Gesprek", desc: "Afstemmen van doelen, scope en succescriteria" },
  { title: "Verkenning & Planning", desc: "Diepgaande analyse van vereisten, workflows en prioriteiten" },
  { title: "Design & Prototype", desc: "Oplossingen visualiseren met wireframes of mockups" },
  { title: "Bouwen & Itereren", desc: "Ontwikkelen, testen en samen verfijnen" },
  { title: "Lancering & Ondersteuning", desc: "Live gaan met vertrouwen en doorlopend partnerschap" },
];

export default function NextStepsSection() {
  return (
    <section id="next-steps" className={styles.nextSteps}>
      <Image
        src="/images/polygon-45.png"
        alt=""
        width={600}
        height={600}
        className={styles.polygon}
      />
      <div className={styles.container}>
        <h2 className={styles.title}>Vervolgstappen</h2>
        <div className={styles.grid}>
          <div className={styles.process}>
            <h3 className={styles.processTitle}>Ons 5-Stappen Proces</h3>
            <div className={styles.stepList}>
              {steps.map((s, i) => (
                <div key={s.title} className={styles.step}>
                  <span className={styles.bullet}>
                    <span className={styles.bulletLine} />
                    <span className={styles.bulletDot} />
                  </span>
                  <div>
                    <strong>{i + 1}. {s.title}</strong>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.contact}>
            <h3 className={styles.contactTitle}>Contactgegevens:</h3>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>E-mail</span>
              <span>jasper@noboxdev.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Website</span>
              <span>www.noboxdev.com</span>
            </div>
          </div>
        </div>
        <p className={styles.validity}>
          Dit voorstel is geldig tot 30 dagen na 5 maart 2026
        </p>
      </div>
    </section>
  );
}
