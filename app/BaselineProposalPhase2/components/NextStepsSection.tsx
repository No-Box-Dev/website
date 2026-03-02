import Image from "next/image";
import styles from "./NextStepsSection.module.css";

const steps = [
  { title: "Kickoff Call", desc: "Align on goals, scope, and success criteria" },
  { title: "Discovery & Planning", desc: "Deep dive into requirements, workflows, and priorities" },
  { title: "Design & Prototype", desc: "Visualise solutions with wireframes or mockups" },
  { title: "Build & Iterate", desc: "Develop, test, and refine together" },
  { title: "Launch & Support", desc: "Go live with confidence and ongoing partnership" },
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
        <h2 className={styles.title}>Next Steps</h2>
        <div className={styles.grid}>
          <div className={styles.process}>
            <h3 className={styles.processTitle}>Our 5-Step Process</h3>
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
            <h3 className={styles.contactTitle}>Contact Info:</h3>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <span>jasper@noboxdev.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Website</span>
              <span>www.noboxdev.com</span>
            </div>
          </div>
        </div>
        <p className={styles.validity}>
          This proposal is valid for 30 days from March 1, 2026
        </p>
      </div>
    </section>
  );
}
