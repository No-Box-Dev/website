import styles from "./mockups.module.css";

const emails = [
  {
    avatar: "DV",
    sender: "Daniel de Vries",
    subject: "Foto's schade aangeleverd",
    preview: "Hallo, hierbij de gevraagde foto's van de schade aan mijn voertuig...",
    time: "10:24",
    unread: true,
    badge: "SCH-2847",
  },
  {
    avatar: "AC",
    sender: "Achmea Schadeafdeling",
    subject: "Re: SCH-2846 — Dekking bevestigd",
    preview: "Geachte heer/mevrouw, hierbij bevestigen wij de dekking onder polis...",
    time: "09:14",
    unread: true,
    badge: "SCH-2846",
  },
  {
    avatar: "MJ",
    sender: "Maria Jansen",
    subject: "Vraag over status schadeclaim",
    preview: "Goedemorgen, ik wilde graag weten wat de huidige status is van mijn...",
    time: "Gisteren",
    unread: false,
    badge: "SCH-2843",
  },
  {
    avatar: "NN",
    sender: "Nationale-Nederlanden",
    subject: "Aanvullende documentatie vereist",
    preview: "Voor de verdere verwerking van uw claim hebben wij nog een aantal...",
    time: "Gisteren",
    unread: false,
    badge: "SCH-2841",
  },
];

export default function InboxMockup() {
  return (
    <div className={styles.inboxScreen}>
      <div className={styles.inboxHeader}>
        <h3 className={styles.inboxTitle}>Inbox</h3>
        <div className={styles.inboxCount}>2 ongelezen</div>
      </div>
      <div className={styles.inboxTabs}>
        <span className={styles.inboxTabActive}>Alle</span>
        <span className={styles.inboxTab}>Klanten</span>
        <span className={styles.inboxTab}>Verzekeraars</span>
      </div>
      <div className={styles.inboxList}>
        {emails.map((email) => (
          <div
            key={email.badge}
            className={`${styles.inboxItem} ${email.unread ? styles.inboxItemUnread : ""}`}
          >
            <div className={styles.inboxAvatar}>{email.avatar}</div>
            <div className={styles.inboxContent}>
              <div className={styles.inboxItemTop}>
                <span className={styles.inboxSender}>{email.sender}</span>
                <span className={styles.inboxTime}>{email.time}</span>
              </div>
              <div className={styles.inboxSubject}>{email.subject}</div>
              <div className={styles.inboxPreview}>{email.preview}</div>
              <span className={styles.inboxBadge}>{email.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
