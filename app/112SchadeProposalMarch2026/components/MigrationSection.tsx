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
              Voor de volgende fase in de ontwikkeling van 112Schade adviseren wij een migratie van de huidige Bubble-applicatie naar een eigen codebase. Bubble heeft uitstekend gefunctioneerd voor het ontwikkelen en valideren van de eerste versie van het product en het testen van workflows met echte gebruikers. Naarmate het platform verder groeit, zien we echter dat de mogelijkheden en flexibiliteit van het platform steeds vaker een beperking vormen voor verdere productontwikkeling.
            </p>
            <p className={styles.desc}>
              Het Bubble-prototype was een belangrijke stap in het ontwikkelproces en het werk dat daarin is gedaan blijft waardevol. De bestaande workflows, automatiseringen en bedrijfslogica vormen de basis voor het productieplatform. Met een op maat gebouwde codebase kunnen deze worden vertaald naar een schaalbare en toekomstbestendige architectuur die verdere groei en nieuwe functionaliteiten mogelijk maakt.
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
            De migratie naar een codebase is inbegrepen als onderdeel van dit project. Wij rekenen hiervoor geen extra kosten wanneer de overige onderdelen uit dit voorstel worden gerealiseerd. De kosten voor ontwikkeling, infrastructuur en hosting blijven onderdeel van het projectbudget. Wanneer er alleen gekozen wordt voor het herbouwen van de huidige Bubble-applicatie naar een codebase, zonder de overige onderdelen, geldt het reguliere tarief. Voor deze applicatie zou een standalone rebuild ongeveer €12.500 kosten.
          </span>
        </div>
      </div>
    </section>
  );
}
