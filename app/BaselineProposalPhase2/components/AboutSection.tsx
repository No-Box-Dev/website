import Image from "next/image";
import styles from "./AboutSection.module.css";

const emotions = [
  { icon: "/images/proposal/emotion-carrying.png", label: "Carrying the Day" },
  { icon: "/images/proposal/emotion-winddown.png", label: "Can't Wind Down" },
  { icon: "/images/proposal/emotion-overstimulated.png", label: "Overstimulated" },
  { icon: "/images/proposal/emotion-restless.png", label: "Restless" },
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <span className={styles.label}>About</span>
        <h2 className={styles.title}>Baseline V1 — Where We Are</h2>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Baseline is a mental wellness app helping users process emotions through
              guided audio meditations. Built as a native iOS app, it currently offers
              a library of meditations organised by emotional state.
            </p>
            <p>
              All content is bundled locally — no accounts, no cloud, no analytics.
              V1 was designed as a personal tool. V2 transforms it into a connected
              platform ready for scale.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>60+</span>
                <span className={styles.statLabel}>Guided meditations</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>10</span>
                <span className={styles.statLabel}>Emotional states</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>iOS</span>
                <span className={styles.statLabel}>Native SwiftUI</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>Local</span>
                <span className={styles.statLabel}>All content bundled</span>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.imageGallery}>
              <Image
                src="/images/proposal/meditation-1.jpg"
                alt="Meditation"
                width={400}
                height={400}
                className={styles.galleryImgTall}
              />
              <Image
                src="/images/proposal/meditation-2.jpg"
                alt="Meditation"
                width={400}
                height={180}
                className={styles.galleryImg}
              />
              <Image
                src="/images/proposal/meditation-3.jpg"
                alt="Meditation"
                width={400}
                height={180}
                className={styles.galleryImg}
              />
            </div>
            <div className={styles.emotions}>
              {emotions.map((e) => (
                <div key={e.label} className={styles.emotionChip}>
                  <Image src={e.icon} alt={e.label} width={24} height={24} />
                  <span>{e.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
