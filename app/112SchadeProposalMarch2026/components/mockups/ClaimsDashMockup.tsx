import styles from "./mockups.module.css";

const claims = [
  { id: "SCH-2847", type: "Lease Autoschade", status: "Actief", statusClass: "statusActive", date: "3 mrt" },
  { id: "SCH-2846", type: "Stormschade", status: "In behandeling", statusClass: "statusPending", date: "2 mrt" },
  { id: "SCH-2845", type: "Brandschade", status: "Afgehandeld", statusClass: "statusResolved", date: "1 mrt" },
  { id: "SCH-2844", type: "Aanrijding", status: "Actief", statusClass: "statusActive", date: "28 feb" },
  { id: "SCH-2843", type: "Inbraakschade", status: "In behandeling", statusClass: "statusPending", date: "27 feb" },
];

export default function ClaimsDashMockup() {
  return (
    <div className={styles.claimsScreen}>
      <div className={styles.claimsHeader}>
        <h3 className={styles.claimsTitle}>Schadeoverzicht</h3>
        <span className={styles.claimsDate}>Laatste 30 dagen</span>
      </div>
      <table className={styles.claimsTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Status</th>
            <th>Datum</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((c) => (
            <tr key={c.id}>
              <td style={{ fontWeight: 700 }}>{c.id}</td>
              <td>{c.type}</td>
              <td>
                <span className={`${styles.statusBadge} ${styles[c.statusClass as keyof typeof styles]}`}>
                  {c.status}
                </span>
              </td>
              <td>{c.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
