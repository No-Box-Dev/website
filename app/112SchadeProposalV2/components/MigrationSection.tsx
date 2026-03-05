import styles from "./MigrationSection.module.css";

export default function MigrationSection() {
  return (
    <section className={styles.migration}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <span className={styles.badge}>Inbegrepen zonder extra kosten</span>
            <h2 className={styles.title}>Platformmigratie</h2>
            <p className={styles.desc}>
              Het Bubble-prototype was een essentiële stap — het stelde ons in staat
              het concept te valideren, workflows te testen en het product te vormen
              met echte gebruikers. Dat werk is niet verloren. Elke workflow,
              automatiseringsregel en elk stuk logica uit Bubble wordt de blauwdruk
              voor het productieplatform.
            </p>
            <p className={styles.desc}>
              Voor de volgende fase adviseren we een op maat gebouwde codebase.
              Dit is niet opnieuw beginnen — het is een stap vooruit. De bewezen
              workflows en bedrijfslogica migreren direct naar een schaalbare
              architectuur die de AI-functies, automatisering en native mobiele
              ervaring uit dit voorstel kan ondersteunen.
            </p>
          </div>
          <div className={styles.benefits}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F9D9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h4 className={styles.benefitTitle}>Bubble-inzichten blijven behouden</h4>
                <p className={styles.benefitDesc}>
                  Alle gevalideerde workflows, gebruikersstromen en bedrijfsregels worden direct overgenomen in het nieuwe platform.
                </p>
              </div>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F9D9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h4 className={styles.benefitTitle}>Geen platformafhankelijkheid</h4>
                <p className={styles.benefitDesc}>
                  Volledig eigendom van uw codebase. Geen terugkerende platformkosten, geen functiebeperkingen, geen schaalgrenzen.
                </p>
              </div>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F9D9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h4 className={styles.benefitTitle}>Gebouwd voor AI & Groei</h4>
                <p className={styles.benefitDesc}>
                  Een eigen codebase maakt de AI-analyse, e-mailintelligentie en automatisering mogelijk die Bubble niet kan ondersteunen.
                </p>
              </div>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F9D9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h4 className={styles.benefitTitle}>Datamigratie inbegrepen</h4>
                <p className={styles.benefitDesc}>
                  Alle bestaande schademeldingen, gebruikers en historie migreren naadloos. Geen dataverlies, geen downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.note}>
          <span className={styles.noteLabel}>€0</span>
          <span className={styles.noteText}>
            De migratie is inbegrepen als onderdeel van dit project — wij zien het als het leggen van het fundament voor alles hierboven. Geen extra kosten.
          </span>
        </div>
      </div>
    </section>
  );
}
