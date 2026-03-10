import styles from "./VisionSection.module.css";

function IconAI() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="13" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="3.5" fill="white" />
    </svg>
  );
}

function IconAutomation() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 18a9 7 0 0 1 18 0" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 18a6 5 0 0 1 12 0" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="18" r="2.5" fill="white" />
    </svg>
  );
}

function IconScale() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="16" width="4" height="8" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="12" y="10" width="4" height="14" rx="1" fill="rgba(255,255,255,0.35)" />
      <rect x="20" y="4" width="4" height="20" rx="1" fill="white" />
    </svg>
  );
}

const pillars = [
  {
    icon: <IconAI />,
    title: "AI-Gestuurd",
    desc: "Intelligente schadeanalyse, e-mailverwerking van verzekeraars, fraudedetectie en voorgestelde oplossingen. AI doet het zware werk zodat operators zich kunnen richten op wat ertoe doet.",
  },
  {
    icon: <IconAutomation />,
    title: "Geautomatiseerd",
    desc: "Slimme schadetoewijzing, automatische opvolgingen, statusmeldingen en escalatieregels. Drastische vermindering van handmatig operatorwerk.",
  },
  {
    icon: <IconScale />,
    title: "Schaalbaar",
    desc: "Op maat gebouwde codebase, analytische dashboards, native mobiel en een robuuste API. Klaar om te groeien zonder platformbeperkingen.",
  },
];

const v1Features = [
  "Schade-intake formulier",
  "Admin dashboard",
  "Basis berichten",
  "Verzekeraar contactlog",
  "Statustracking",
];

const v2Features = [
  { name: "AI Schadeanalyse Engine", isNew: true },
  { name: "AI Verzekeraar E-mail Intelligentie", isNew: true },
  { name: "Geavanceerd Berichtensysteem", isNew: true },
  { name: "Statistieken & Engagement Dashboard", isNew: true },
  { name: "Operator Workflow Automatisering", isNew: true },
  { name: "Herontworpen Klantenportaal", isNew: true },
  { name: "Herontworpen Operator Dashboard", isNew: true },
  { name: "Native iOS App", isNew: true },
  { name: "Marketingpagina & SEO", isNew: true },
  { name: "Schade-intake (gemigreerd)", isNew: false },
  { name: "Admin Dashboard (gemigreerd)", isNew: false },
  { name: "Berichten (verbeterd)", isNew: false },
  { name: "Verzekeraar Contact (verbeterd)", isNew: false },
  { name: "Statustracking (verbeterd)", isNew: false },
];

export default function VisionSection() {
  return (
    <>
      <section id="vision" className={styles.vision}>
        <div className={styles.container}>
          <span className={styles.label}>De Visie</span>
          <h2 className={styles.title}>Van MVP naar Productie</h2>
          <p className={styles.subtitle}>
            Met V2 groeit 112Schade van een MVP naar een robuust productieplatform. Het systeem evolueert naar een AI-gestuurd schadeplatform waarin intelligente analyse, geautomatiseerde workflows, een native mobiele applicatie en uitgebreide analytics samenkomen om schadeprocessen efficiënter, inzichtelijker en schaalbaarder te maken.
          </p>
          <div className={styles.pillars}>
            {pillars.map((p) => (
              <div key={p.title} className={styles.pillar}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.inventory}>
        <div className={styles.container}>
          <span className={styles.label} style={{ color: "var(--s-navy, #1E3A5F)" }}>
            Functie-overzicht
          </span>
          <h2 className={styles.title} style={{ color: "var(--s-navy-deep, #0F2440)" }}>
            V1 → V2 Functiekaart
          </h2>
          <div className={styles.invGrid}>
            <div className={styles.invCol}>
              <h3>
                Huidige Functies <span className={styles.tagV1}>V1</span>
              </h3>
              <div className={styles.screenList}>
                {v1Features.map((s, i) => (
                  <div key={s} className={styles.screenItem}>
                    <span className={styles.screenNum}>{String(i + 1).padStart(2, "0")}</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.invCol}>
              <h3>
                V2 Functies <span className={styles.tagV2}>V2</span>
              </h3>
              <div className={styles.screenList}>
                {v2Features.map((s, i) => (
                  <div
                    key={s.name}
                    className={`${styles.screenItem} ${s.isNew ? styles.screenNew : ""}`}
                  >
                    <span className={styles.screenNum}>{String(i + 1).padStart(2, "0")}</span>
                    {s.name}
                    {s.isNew && <span className={styles.newBadge}>NIEUW</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
