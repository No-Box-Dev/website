import styles from "./mockups.module.css";

const rows = [
  { title: "Deep Calm", category: "Anxiety", duration: "12 min", status: "published" },
  { title: "Morning Rise", category: "Energy", duration: "8 min", status: "published" },
  { title: "Ocean Breath", category: "Stress", duration: "10 min", status: "draft" },
  { title: "Evening Wind Down", category: "Restless", duration: "15 min", status: "published" },
  { title: "Inner Compass", category: "Focus", duration: "9 min", status: "draft" },
];

export default function ContentCMSMockup() {
  return (
    <div className={styles.cmsScreen}>
      <div className={styles.cmsSidebar}>
        <div className={styles.sideNav}>
          <div className={styles.sideNavItem}>Dashboard</div>
          <div className={styles.sideNavActive}>Meditations</div>
          <div className={styles.sideNavItem}>Courses</div>
          <div className={styles.sideNavItem}>Categories</div>
          <div className={styles.sideNavItem}>Notifications</div>
          <div className={styles.sideNavItem}>Users</div>
        </div>
        <div className={styles.cmsMain}>
          <div className={styles.cmsHeader}>
            <h3 className={styles.cmsTitle}>Meditations</h3>
            <div className={styles.addBtn}>+ Add Meditation</div>
          </div>
          <table className={styles.contentTable}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Duration</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.title}>
                  <td><strong>{r.title}</strong></td>
                  <td>{r.category}</td>
                  <td>{r.duration}</td>
                  <td>
                    <span
                      className={`${styles.statusBadge} ${
                        r.status === "published" ? styles.statusPublished : styles.statusDraft
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
