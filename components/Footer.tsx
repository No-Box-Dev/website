import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} data-glow="dark">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image
              src="/images/logo-white.svg"
              alt="NoBoxDev"
              width={120}
              height={24}
            />
            <p className={styles.tagline}>
              Psychology-driven design
              <br />
              meets modern engineering.
            </p>
          </div>
          <nav className={styles.links}>
            <div className={styles.linkGroup}>
              <span className={styles.linkLabel}>Company</span>
              <a href="#contact">Contact</a>
              <a href="https://github.com/No-Box-Dev" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <div className={styles.linkGroup}>
              <span className={styles.linkLabel}>Legal</span>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </nav>
        </div>
        <div className={styles.bottom}>
          <span>&copy; {new Date().getFullYear()} NoBoxDev. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
