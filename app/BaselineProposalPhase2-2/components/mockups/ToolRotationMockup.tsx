import styles from "./mockups.module.css";

const tools = [
  { name: "Ocean Breath", meta: "Completed Mar 2", status: "done" },
  { name: "Body Scan Release", meta: "Completed Feb 28", status: "done" },
  { name: "Grounding Stones", meta: "Recommended for you", status: "current" },
  { name: "Progressive Relax", meta: "Not yet tried", status: "pending" },
  { name: "Cloud Dissolve", meta: "Not yet tried", status: "pending" },
];

export default function ToolRotationMockup() {
  return (
    <div className={styles.rotationScreen}>
      <div className={styles.rotationHeader}>Overwhelm — 5 tools available</div>
      <div className={styles.rotationCards}>
        {tools.map((tool, i) => (
          <div key={tool.name} className={styles.rotationCard}>
            <div
              className={`${styles.rotationNum} ${
                tool.status === "done"
                  ? styles.rotationDone
                  : tool.status === "current"
                  ? styles.rotationCurrent
                  : styles.rotationPending
              }`}
            >
              {tool.status === "done" ? "\u2713" : String(i + 1).padStart(2, "0")}
            </div>
            <div className={styles.rotationInfo}>
              <div className={styles.rotationName}>{tool.name}</div>
              <div className={styles.rotationMeta}>{tool.meta}</div>
            </div>
            {tool.status === "current" && (
              <span className={`${styles.rotationBadge} ${styles.badgeNew}`}>Next</span>
            )}
            {tool.status === "done" && (
              <span className={`${styles.rotationBadge} ${styles.badgeCompleted}`}>Done</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
