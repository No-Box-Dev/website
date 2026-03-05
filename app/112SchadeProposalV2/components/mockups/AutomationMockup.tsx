import styles from "./mockups.module.css";

const rules = [
  { icon: "🔄", name: "Auto-Toewijzing Schades", desc: "Nieuwe schades routeren naar gespecialiseerde behandelaars", on: true },
  { icon: "⏰", name: "Opvolg-Herinneringen", desc: "Behandelaar melden na 48 uur inactiviteit", on: true },
  { icon: "📧", name: "Statusupdates", desc: "Klant e-mailen bij statuswijziging", on: true },
  { icon: "🚨", name: "Escalatie bij Stilstand", desc: "Schades escaleren die 5+ dagen stilstaan", on: true },
  { icon: "📊", name: "Weekrapporten", desc: "Wekelijks overzicht naar management sturen", on: false },
  { icon: "🤖", name: "AI Voorselectie", desc: "Automatisch categoriseren voor behandelaar-review", on: true },
];

export default function AutomationMockup() {
  return (
    <div className={styles.autoScreen}>
      <div className={styles.autoHeader}>
        <h3 className={styles.autoTitle}>Automatiseringsregels</h3>
        <p className={styles.autoSub}>5 van 6 regels actief</p>
      </div>
      {rules.map((r) => (
        <div key={r.name} className={styles.ruleCard}>
          <div className={styles.ruleIcon}>{r.icon}</div>
          <div className={styles.ruleInfo}>
            <div className={styles.ruleName}>{r.name}</div>
            <div className={styles.ruleDesc}>{r.desc}</div>
          </div>
          <div className={r.on ? styles.ruleToggleOn : styles.ruleToggleOff}>
            <div className={styles.ruleToggleKnob} />
          </div>
        </div>
      ))}
    </div>
  );
}
