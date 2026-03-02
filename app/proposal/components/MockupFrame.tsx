import styles from "./MockupFrame.module.css";

type Props = {
  type: "phone" | "web";
  url?: string;
  children: React.ReactNode;
};

export default function MockupFrame({ type, url, children }: Props) {
  if (type === "web") {
    return (
      <div className={styles.webFrame}>
        <div className={styles.browserBar}>
          <div className={styles.dots}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
          </div>
          <div className={styles.urlBar}>{url || "baseline-admin.noboxdev.com"}</div>
        </div>
        <div className={styles.webContent}>{children}</div>
      </div>
    );
  }

  return (
    <div className={styles.phoneFrame}>
      <div className={styles.statusBar}>
        <span className={styles.time}>9:41</span>
        <div className={styles.icons}>
          <div className={styles.iconBar}>
            <span /><span /><span /><span />
          </div>
          <div className={styles.battery}>
            <div className={styles.batteryFill} />
          </div>
        </div>
      </div>
      <div className={styles.phoneContent}>{children}</div>
    </div>
  );
}
