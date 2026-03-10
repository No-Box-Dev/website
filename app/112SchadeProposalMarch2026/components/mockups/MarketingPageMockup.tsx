import styles from "./mockups.module.css";

const features = [
  { icon: "&#9889;", name: "Snelle Claims" },
  { icon: "&#128274;", name: "Veilig & Privé" },
  { icon: "&#128172;", name: "Direct Contact" },
  { icon: "&#128200;", name: "Live Tracking" },
];

export default function MarketingPageMockup() {
  return (
    <div className={styles.marketingScreen}>
      <div className={styles.marketingHero}>
        <div className={styles.marketingLogo}>112schade.nl</div>
        <div className={styles.marketingH1}>
          Uw schade, onze missie
        </div>
        <div className={styles.marketingHeroSub}>
          De complete verhaalservice. Professionele schadeafwikkeling met persoonlijke begeleiding.
        </div>
        <div className={styles.marketingCTA}>Meld uw schade</div>
      </div>
      <div className={styles.marketingFeatures}>
        {features.map((f) => (
          <div key={f.name} className={styles.marketingFeature}>
            <div className={styles.marketingFeatureIcon} dangerouslySetInnerHTML={{ __html: f.icon }} />
            <div className={styles.marketingFeatureName}>{f.name}</div>
          </div>
        ))}
      </div>
      <div className={styles.marketingTrust}>
        <div className={styles.marketingTrustLabel}>Vertrouwd door verzekeraars</div>
        <div className={styles.marketingTrustLogos}>
          <div className={styles.marketingTrustLogo} />
          <div className={styles.marketingTrustLogo} />
          <div className={styles.marketingTrustLogo} />
          <div className={styles.marketingTrustLogo} />
        </div>
      </div>
    </div>
  );
}
