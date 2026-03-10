import Image from "next/image";
import styles from "./CoverSection.module.css";

export default function CoverSection() {
  return (
    <section className={styles.cover}>
      <div className={styles.glow} />
      <Image
        src="/images/polygon-45.png"
        alt=""
        width={900}
        height={900}
        className={styles.polygon}
        priority
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Dashboard 112Schade</h1>
        <div className={styles.divider} />
        <div className={styles.meta}>
          <span className={styles.metaTag}>112Schade V2</span>
          <span className={styles.metaTag}>Platform Upgrade</span>
          <span className={styles.metaTag}>Maart 2026</span>
        </div>
        <div className={styles.productDesc}>
          <h3 className={styles.productTitle}>Productbeschrijving:</h3>
          <p className={styles.productBody}>
            app.112schade.nl is een webapplicatie waarmee gebruikers eenvoudig schadeclaims na een incident kunnen registreren, beheren en volgen. In plaats van het traditionele proces met formulieren, e-mail en losse documenten, biedt het platform een gestructureerde digitale omgeving waarin alle informatie rondom een schadezaak wordt verzameld. Gebruikers kunnen hun schade melden, foto&apos;s en documenten uploaden en de voortgang van hun dossier volgen. Hierdoor ontstaat één centrale plek waar het volledige claimproces overzichtelijk wordt vastgelegd.
          </p>
        </div>
      </div>
    </section>
  );
}
