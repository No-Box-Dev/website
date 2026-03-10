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
        <h2 className={styles.title}>Contact</h2>
        <div className={styles.appointmentCard}>
          <span className={styles.appointmentLabel}>Volgende afspraak op:</span>
          <span className={styles.appointmentDate}>Nader te bepalen</span>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.contactTitle}>Contactgegevens:</h3>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Naam</span>
            <span>Meme Veels</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>E-mail</span>
            <span>meme@noboxdev.com</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Website</span>
            <span>www.noboxdev.com</span>
          </div>
        </div>
        <p className={styles.validity}>
          Dit voorstel is geldig tot 30 dagen na 10 maart 2026
        </p>
      </div>
    </section>
  );
}
