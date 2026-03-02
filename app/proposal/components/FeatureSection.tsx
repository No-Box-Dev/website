import styles from "./FeatureSection.module.css";

type Variant = "light" | "dark" | "purple" | "coral";

type Props = {
  id?: string;
  num: string;
  title: string;
  price: string;
  desc: string;
  items: string[];
  variant: Variant;
  reverse?: boolean;
  children: React.ReactNode;
};

const sectionClass: Record<Variant, string> = {
  light: "featureLight",
  dark: "featureDark",
  purple: "featurePurple",
  coral: "featureCoral",
};

export default function FeatureSection({
  id,
  num,
  title,
  price,
  desc,
  items,
  variant,
  reverse,
  children,
}: Props) {
  const isColored = variant !== "light";

  return (
    <section
      id={id}
      className={styles[sectionClass[variant] as keyof typeof styles]}
    >
      <div className={styles.container}>
        <div className={reverse ? styles.gridReverse : styles.grid}>
          <div>
            <div className={isColored ? styles.featureNumDark : styles.featureNumLight}>
              {num}
            </div>
            <h3 className={isColored ? styles.titleDark : styles.titleLight}>{title}</h3>
            <span className={styles.price}>{price}</span>
            <p className={isColored ? styles.descDark : styles.descLight}>{desc}</p>
            <ul className={`${styles.items} ${isColored ? styles.itemsDark : styles.itemsLight}`}>
              {items.map((item) => (
                <li key={item}>
                  <span className={styles.bullet}>
                    <span className={styles.bulletLine} />
                    <span className={styles.bulletDot} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
