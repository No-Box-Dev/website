import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <div className={styles.platformPreview}>
              <div className={styles.previewHeader}>
                <div className={styles.previewDots}>
                  <span /><span /><span />
                </div>
                <span className={styles.previewUrl}>112schade.nl</span>
              </div>
              <div className={styles.previewBody}>
                {/* Header bar */}
                <div className={styles.bubbleHeader}>
                  <div className={styles.bubbleLogo}>
                    <div className={styles.bubbleShield}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7l-9-5z" fill="#E8A825"/>
                        <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className={styles.bubbleLogoText}>112schade.nl</span>
                  </div>
                  <div className={styles.bubbleTagline}>De complete verhaalservice</div>
                </div>
                <div className={styles.bubbleDivider} />

                {/* Progress bar */}
                <div className={styles.bubbleProgress}>
                  <div className={styles.bubbleProgressSquare} />
                  <div className={styles.bubbleProgressBar}>
                    <div className={styles.bubbleProgressFill} />
                  </div>
                </div>

                {/* Form content */}
                <h3 className={styles.bubbleFormTitle}>Intakevragen voor lease autoschade</h3>
                <div className={styles.bubbleFormBody}>
                  <p>Je hebt aangegeven dat je schadeclaim over lease-autoschade gaat.</p>
                  <p>Nu zullen er een aantal vragen volgen die gaan over de lease-autoschade.</p>
                  <p>Foto&apos;s uploaden van de schade en de situatie helpen bij het sneller verwerken.</p>
                </div>

                {/* Buttons */}
                <div className={styles.bubbleButtons}>
                  <button className={styles.bubbleBtn}>Terug</button>
                  <button className={styles.bubbleBtn}>Doorgaan</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.text}>
            <span className={styles.label}>Over</span>
            <h2 className={styles.title}>112Schade Applicatie MVP</h2>
            <p>
              De MVP van app.112schade is een no-code webapplicatie die is opgebouwd in Bubble en functioneert als een combinatie van front-end, back-endlogica en database in één omgeving. De applicatie bestaat uit verschillende gebruikersflows voor schade-intake, dossierbeheer en statusopvolging, waarbij gegevens via formulieren worden ingevoerd, opgeslagen in de Bubble-database en vervolgens via workflows verder worden verwerkt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
