import styles from "./mockups.module.css";

export default function InsurerEmailMockup() {
  return (
    <div className={styles.emailScreen}>
      <div className={styles.emailHeader}>
        <h3 className={styles.emailTitle}>E-mail Intelligentie</h3>
        <p className={styles.emailSub}>3 nieuwe e-mails geanalyseerd vandaag</p>
      </div>

      <div className={styles.emailCard}>
        <div className={styles.emailFrom}>
          <div className={styles.emailAvatar}>AC</div>
          <div>
            <div className={styles.emailSender}>Achmea Schadeafdeling</div>
            <div className={styles.emailDate}>Vandaag, 09:14</div>
          </div>
        </div>
        <div className={styles.emailSubject}>
          Re: SCH-2847 — Dekking bevestigd, taxatie gepland
        </div>
        <div className={styles.aiExtraction}>
          <div className={styles.aiExtractionTitle}>
            <span className={styles.aiDot} />
            AI-Geëxtraheerde Inzichten
          </div>
          <div className={styles.aiExtractionItem}>
            <span className={styles.aiExtractionLabel}>Besluit:</span>
            <span>Dekking bevestigd onder polis AH-4821</span>
          </div>
          <div className={styles.aiExtractionItem}>
            <span className={styles.aiExtractionLabel}>Deadline:</span>
            <span>Taxatie moet voor 15 maart zijn afgerond</span>
          </div>
          <div className={styles.aiExtractionItem}>
            <span className={styles.aiExtractionLabel}>Actie:</span>
            <span>Garagerapport indienen binnen 5 werkdagen</span>
          </div>
          <div className={styles.aiExtractionItem}>
            <span className={styles.aiExtractionLabel}>Gekoppeld:</span>
            <span>SCH-2847 — Lease Autoschade (auto-gekoppeld)</span>
          </div>
        </div>
      </div>

      <div className={styles.emailCard}>
        <div className={styles.emailFrom}>
          <div className={styles.emailAvatar}>NN</div>
          <div>
            <div className={styles.emailSender}>Nationale-Nederlanden</div>
            <div className={styles.emailDate}>Vandaag, 08:42</div>
          </div>
        </div>
        <div className={styles.emailSubject}>
          Re: SCH-2843 — Aanvullende documentatie vereist
        </div>
        <div className={styles.aiExtraction}>
          <div className={styles.aiExtractionTitle}>
            <span className={styles.aiDot} />
            AI-Geëxtraheerde Inzichten
          </div>
          <div className={styles.aiExtractionItem}>
            <span className={styles.aiExtractionLabel}>Besluit:</span>
            <span>Aanvullende documenten nodig voor verwerking</span>
          </div>
          <div className={styles.aiExtractionItem}>
            <span className={styles.aiExtractionLabel}>Actie:</span>
            <span>Politierapport en 3 reparatieoffertes aanleveren</span>
          </div>
          <div className={styles.aiExtractionItem}>
            <span className={styles.aiExtractionLabel}>Deadline:</span>
            <span>20 maart 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
