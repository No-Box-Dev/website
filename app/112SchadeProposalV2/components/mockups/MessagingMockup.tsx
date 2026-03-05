import styles from "./mockups.module.css";

export default function MessagingMockup() {
  return (
    <div className={styles.msgScreen}>
      <div className={styles.msgHeader}>
        <span className={styles.msgBack}>&#8249;</span>
        <div className={styles.msgHeaderInfo}>
          <div className={styles.msgHeaderTitle}>SCH-2847 — Lease Autoschade</div>
          <div className={styles.msgHeaderSub}>Behandelaar: Sarah K.</div>
        </div>
      </div>
      <div className={styles.msgBody}>
        <div className={styles.msgIncoming}>
          <div>Hallo, ik heb gisteren foto&apos;s van de autoschade gestuurd. Is er al een update over de taxatie?</div>
          <div className={styles.msgTime}>10:23</div>
        </div>
        <div className={styles.msgOutgoing}>
          <div>Bedankt voor de foto&apos;s. We hebben ze doorgestuurd naar de expert. Binnen 2 werkdagen nemen zij contact met u op voor een afspraak.</div>
          <div className={styles.msgTime}>10:45</div>
        </div>
        <div className={styles.msgIncoming}>
          <div>Prima, moet ik in de tussentijd nog iets doen?</div>
          <div className={styles.msgTime}>10:52</div>
        </div>
        <div className={styles.msgOutgoing}>
          <div>Ja — maak eventuele extra foto&apos;s als de schade verandert en bewaar alle documenten. Dit helpt bij de beoordeling.</div>
          <div className={styles.msgTime}>11:05</div>
        </div>
        <div className={styles.msgIncoming}>
          <div>Doe ik. Bedankt voor de snelle reactie!</div>
          <div className={styles.msgTime}>11:08</div>
        </div>
      </div>
      <div className={styles.msgInputBar}>
        <div className={styles.msgInput}>Typ een bericht...</div>
        <div className={styles.msgSend}>
          <span className={styles.msgSendArrow}>&#8593;</span>
        </div>
      </div>
    </div>
  );
}
