import styles from "./ContextSection.module.css";

export default function ContextSection() {
  return (
    <section id="context" className={styles.context}>
      <div className={styles.container}>
        <span className={styles.label}>Why These Three</span>
        <h2 className={styles.title}>The Foundation for Growth</h2>
        <p className={styles.subtitle}>
          These three features work together as a single package — accounts identify
          users, subscriptions monetise the app, and notifications keep people coming
          back. Each one depends on and strengthens the others.
        </p>
        <div className={styles.feedbackCards}>
          <div className={styles.feedbackCard}>
            <div className={styles.feedbackIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className={styles.feedbackTitle}>Accounts</h3>
            <p className={styles.feedbackDesc}>
              Know who your users are. Accounts unlock personalisation,
              progress tracking, and the ability to manage subscriptions
              across devices.
            </p>
          </div>
          <div className={styles.feedbackCard}>
            <div className={styles.feedbackIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M2 10h20" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className={styles.feedbackTitle}>Revenue</h3>
            <p className={styles.feedbackDesc}>
              Turn Baseline into a business. Subscriptions create a
              recurring revenue stream that funds content creation
              and continued development.
            </p>
          </div>
          <div className={styles.feedbackCard}>
            <div className={styles.feedbackIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className={styles.feedbackTitle}>Retention</h3>
            <p className={styles.feedbackDesc}>
              Bring users back. Smart notifications build habits, reduce
              churn, and turn one-time downloads into daily practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
