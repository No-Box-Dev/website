import styles from "./PricingSection.module.css";

const core: { num: string; name: string; scope: string; cost: string }[] = [
  { num: "01", name: "AI-Gestuurde Schadeanalyse", scope: "Categorisatie, ernst, fraudedetectie, suggesties", cost: "€3.500" },
  { num: "02", name: "Geavanceerd Berichtensysteem", scope: "Gespreksdraden, bijlagen, sjablonen, audit trail", cost: "€2.500" },
  { num: "03", name: "AI Verzekeraar E-mail Intelligentie", scope: "E-mailinname, extractie, auto-koppeling, samenvattingen", cost: "€2.500" },
  { num: "04", name: "Statistieken & Engagement Dashboard", scope: "Oplostijden, prestaties, engagement, rapporten", cost: "€2.500" },
  { num: "05", name: "Admin Workflow Automatisering", scope: "Auto-toewijzing, opvolgingen, meldingen, escalatie", cost: "€2.000" },
  { num: "06", name: "Design & UX Verbetering", scope: "Nieuwe merkidentiteit, klant-UI, operator-dashboard, designsysteem", cost: "€2.500" },
  { num: "07", name: "Native iOS App", scope: "Schademelding, tracking, pushmeldingen, berichten", cost: "€2.500" },
  { num: "08", name: "Marketingpagina & SEO", scope: "Nieuwbouw website, volledige contentmigratie, behoud SEO-posities, nieuw design", cost: "€6.500" },
];

export default function PricingSection() {
  return (
    <section id="investment" className={styles.pricing}>
      <div className={styles.container}>
        <h2 className={styles.title}>Uw Offerte</h2>
        <p className={styles.subtitle}>Mijlpalen en Investering</p>
        <div className={styles.table}>
          <div className={styles.header}>
            <span>#</span>
            <span>Functie</span>
            <span>Scope</span>
            <span>Kosten</span>
          </div>
          {core.map((row, i) => (
            <div
              key={row.num}
              className={`${styles.row} ${i % 2 === 0 ? styles.rowAlt : ""}`}
            >
              <span className={styles.col1}>{row.num}</span>
              <span className={`${styles.col2} ${styles.colName}`}>{row.name}</span>
              <span className={styles.col3}>{row.scope}</span>
              <span className={`${styles.col4} ${styles.colCost}`}>{row.cost}</span>
            </div>
          ))}
          <div className={styles.migrationRow}>
            <span className={styles.col1}></span>
            <span className={`${styles.col2} ${styles.colName}`}>Platformmigratie (Bubble → Code)</span>
            <span className={styles.col3}>Volledige workflow- & datamigratie, nieuwe infrastructuur</span>
            <span className={`${styles.col4} ${styles.colIncluded}`}>Inbegrepen</span>
          </div>
          <div className={styles.total}>
            <span className={styles.totalLabel}>Totale Investering</span>
            <span className={styles.totalAmount}>€24.500</span>
          </div>
          <p className={styles.note}>
            Geschatte doorlooptijd: 8 weken · Platformmigratie inbegrepen zonder extra kosten
          </p>
        </div>

        <div className={styles.terms}>
          <div className={styles.term}>
            <div className={styles.termLabel}>Vooraf</div>
            <div className={styles.termValue}>50% · €12.250</div>
          </div>
          <div className={styles.term}>
            <div className={styles.termLabel}>Bij Oplevering</div>
            <div className={styles.termValue}>50% · €12.250</div>
          </div>
        </div>

      </div>
    </section>
  );
}
