import styles from "./mockups.module.css";

export default function MessagingMockup() {
  return (
    <div className={styles.msgScreen}>
      <div className={styles.msgHeader}>
        <span className={styles.msgBack}>&#8249;</span>
        <div className={styles.msgHeaderInfo}>
          <div className={styles.msgHeaderTitle}>SCH-2847 — Daniel</div>
          <div className={styles.msgHeaderSub}>AI-Assistent</div>
        </div>
      </div>
      <div className={styles.msgBody}>
        <div className={styles.msgIncoming}>
          <div>Hallo, ik wil een schadeclaim indienen maar ik weet niet precies wat voor foto&apos;s ik moet maken en hoeveel. Kunnen jullie mij daarbij helpen?</div>
          <div className={styles.msgTime}>10:23</div>
        </div>
        <div className={styles.msgOutgoing}>
          <div>Hallo Daniel! Natuurlijk help ik je graag. Voor een schadeclaim raden we aan om 4 tot 6 duidelijke foto&apos;s te maken:<br/>• één overzichtsfoto van de situatie,<br/>• één foto van het volledige voertuig of object,<br/>• 2 à 3 close-ups van de schade,<br/>• en eventueel een extra foto vanuit een andere hoek voor meer context.</div>
          <div className={styles.msgTime}>10:23</div>
        </div>
        <div className={styles.msgIncoming}>
          <div>Dank! Ik ga aan de slag.</div>
          <div className={styles.msgTime}>10:24</div>
        </div>
        <div className={styles.msgOutgoing}>
          <div>Graag gedaan!</div>
          <div className={styles.msgTime}>10:24</div>
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
