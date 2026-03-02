import Image from "next/image";
import styles from "./mockups.module.css";

export default function LoginMockup() {
  return (
    <div className={styles.loginScreen}>
      <div className={styles.loginContent}>
        <Image
          src="/images/proposal/AppIcon-180.png"
          alt="Baseline"
          width={52}
          height={52}
          className={styles.loginAppIcon}
        />
        <h3 className={styles.loginTitle}>Welcome Back</h3>
        <p className={styles.loginSub}>Sign in to continue your practice</p>
        <div className={styles.loginCard}>
          <div className={styles.inputField}>Email address</div>
          <div className={styles.inputField}>Password</div>
          <div className={styles.loginBtns}>
            <div className={styles.pillPrimary} style={{ textAlign: "center" }}>Sign In</div>
          </div>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span>or</span>
            <span className={styles.dividerLine} />
          </div>
          <div className={styles.appleBtn}>Continue with Social Login</div>
        </div>
        <p className={styles.loginFooter}>
          Don&apos;t have an account? <strong>Sign Up</strong>
        </p>
      </div>
    </div>
  );
}
