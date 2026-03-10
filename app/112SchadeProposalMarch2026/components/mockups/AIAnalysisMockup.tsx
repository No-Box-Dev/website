import styles from "./mockups.module.css";

export default function AIAnalysisMockup() {
  return (
    <div className={styles.aiScreen}>
      <div className={styles.aiHeader}>
        <h3 className={styles.aiTitle}>AI Schadeanalyse</h3>
        <p className={styles.aiSub}>SCH-2847 — Lease Autoschade</p>
      </div>

      <div className={styles.aiCard}>
        <div className={styles.aiCardTitle}>
          <span className={styles.aiDot} />
          Categoriedetectie
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
          <span className={styles.aiTag}>Autoschade</span>
          <span className={styles.aiTag}>Leasevoertuig</span>
          <span className={styles.aiTag}>Aanrijding</span>
        </div>
        <div className={styles.confidenceBar}>
          <div className={styles.confidenceFill} style={{ width: "94%" }} />
        </div>
        <div className={styles.confidenceLabel}>
          <span>Betrouwbaarheid</span>
          <span>94%</span>
        </div>
      </div>

      <div className={styles.aiCard}>
        <div className={styles.aiCardTitle}>
          <span className={styles.aiDot} />
          Voorgestelde Acties
        </div>
        <div className={styles.aiList}>
          <div className={styles.aiListItem}>
            <span className={styles.aiCheck}>&#10003;</span>
            Schaderapport opvragen bij garage
          </div>
          <div className={styles.aiListItem}>
            <span className={styles.aiCheck}>&#10003;</span>
            Verzekeraar informeren: Achmea — Polis #AH-4821
          </div>
          <div className={styles.aiListItem}>
            <span className={styles.aiCheck}>&#10003;</span>
            Foto-inspectie inplannen
          </div>
          <div className={styles.aiListItem}>
            <span className={styles.aiCheck}>&#10003;</span>
            Geschatte ernst: Gemiddeld-Hoog
          </div>
        </div>
      </div>

      <div className={styles.aiCard}>
        <div className={styles.aiCardTitle}>
          <span className={styles.aiDot} />
          Fraude Risicobeoordeling
        </div>
        <div className={styles.confidenceBar}>
          <div className={styles.confidenceFill} style={{ width: "8%", background: "#16A34A" }} />
        </div>
        <div className={styles.confidenceLabel}>
          <span>Risiconiveau</span>
          <span style={{ color: "#16A34A" }}>Laag (8%)</span>
        </div>
      </div>
    </div>
  );
}
