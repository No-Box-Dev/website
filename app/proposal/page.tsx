"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const features = [
  {
    num: "01",
    title: "Login & Subscription",
    price: "€1,500",
    desc: "Secure user authentication with Apple Sign In and email login. Integrated subscription management with monthly and yearly plans using StoreKit 2, including free trial support and paywall screens.",
    items: [
      "Apple Sign In & email auth",
      "StoreKit 2 subscription flow",
      "Monthly & yearly plan options",
      "Free trial & paywall UI",
      "User profile management",
    ],
  },
  {
    num: "02",
    title: "Cloud Content Delivery",
    price: "€1,800",
    desc: "Move meditation content to the cloud. Users download tools on first use, reducing app size and enabling dynamic content updates. Audio files are cached locally for offline playback.",
    items: [
      "Cloud-hosted audio content",
      "Download-on-first-use system",
      "Local caching for offline use",
      "Background download support",
      "Dynamic content management",
    ],
  },
  {
    num: "03",
    title: "Introductory Course",
    price: "€1,200",
    desc: "A structured 4–5 session onboarding course guiding new users through meditation fundamentals and emotional regulation. Includes progress tracking and completion rewards.",
    items: [
      "4–5 guided onboarding sessions",
      "Progressive session unlocking",
      "Progress tracking & streaks",
      "Completion certificate",
      "Seamless library transition",
    ],
  },
  {
    num: "04",
    title: "Push Notifications",
    price: "€800",
    desc: "Smart push notifications to maintain engagement and build consistent practice habits. Configurable reminders, streak alerts, and new content notifications via APNs.",
    items: [
      "Daily practice reminders",
      "Streak & milestone alerts",
      "New content notifications",
      "User preference controls",
      "Backend scheduling system",
    ],
  },
  {
    num: "05",
    title: "User Analytics Dashboard",
    price: "€1,400",
    desc: "Web-based analytics dashboard providing insight into user behavior, engagement metrics, and subscription performance. Track active users, popular content, and revenue.",
    items: [
      "Active user metrics (DAU/WAU/MAU)",
      "Content engagement analytics",
      "Subscription & revenue tracking",
      "Retention & churn reports",
      "Exportable data & charts",
    ],
  },
  {
    num: "06",
    title: "Tool Management Dashboard",
    price: "€1,300",
    desc: "Administrative dashboard for managing meditation content, push notification campaigns, and course configuration. Upload audio, organise categories, and schedule notifications.",
    items: [
      "Content upload & management",
      "Category & emotion organiser",
      "Notification campaign builder",
      "Course session editor",
      "User management & support",
    ],
  },
];

const phases = [
  {
    num: "01",
    title: "Foundation",
    timeline: "Weeks 1–3",
    desc: "Backend setup, authentication, subscription infrastructure",
  },
  {
    num: "02",
    title: "Content",
    timeline: "Weeks 4–6",
    desc: "Cloud migration, download system, offline caching",
  },
  {
    num: "03",
    title: "Engagement",
    timeline: "Weeks 7–9",
    desc: "Onboarding course, push notifications, streaks",
  },
  {
    num: "04",
    title: "Intelligence",
    timeline: "Weeks 10–12",
    desc: "Analytics dashboard, tool management, final QA",
  },
];

const pricing = [
  { num: "01", name: "Login & Subscription", scope: "Auth, StoreKit 2, paywall, profiles", cost: "€1,500" },
  { num: "02", name: "Cloud Content Delivery", scope: "Cloud hosting, download system, caching", cost: "€1,800" },
  { num: "03", name: "Introductory Course", scope: "4–5 session onboarding, progress tracking", cost: "€1,200" },
  { num: "04", name: "Push Notifications", scope: "APNs integration, reminders, scheduling", cost: "€800" },
  { num: "05", name: "User Analytics Dashboard", scope: "Web dashboard, metrics, reports", cost: "€1,400" },
  { num: "06", name: "Tool Management Dashboard", scope: "CMS, notification campaigns, user mgmt", cost: "€1,300" },
];

export default function ProposalPage() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            // Stagger children with .revealItem
            const items = entry.target.querySelectorAll(`.${styles.revealItem}`);
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add(styles.visible);
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = sectionsRef.current?.querySelectorAll(`.${styles.section}`);
    sections?.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionsRef} className={styles.proposal}>
      {/* ═══════════════════════════════════════════
          SLIDE 1: COVER
          ═══════════════════════════════════════════ */}
      <section className={`${styles.section} ${styles.cover}`}>
        <div className={styles.coverGlow} />
        <div className={styles.glassShape} />
        <div className={styles.coverContent}>
          <div className={styles.logoArea}>
            <Image src="/images/logo-white.svg" alt="No Box Dev" width={160} height={24} priority />
          </div>
          <h1 className={styles.coverTitle}>Proposal</h1>
          <div className={styles.coverMeta}>
            <span className={styles.metaTag}>Marie Keutler</span>
            <span className={styles.metaTag}>March 2026</span>
          </div>
          <p className={styles.coverSubtitle}>
            Baseline V2 — From standalone meditation app to connected wellness platform.
            Subscriptions, cloud content, guided onboarding, and actionable insights.
          </p>
          <div className={styles.coverBrand}>NO BOX DEV</div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SLIDE 2: ABOUT BASELINE
          ═══════════════════════════════════════════ */}
      <section className={`${styles.section} ${styles.light} ${styles.reveal}`}>
        <div className={styles.slideHeader}>
          <span className={styles.slideContext}>Proposal 2026 | Baseline</span>
          <Image src="/images/logo.svg" alt="No Box Dev" width={140} height={21} />
        </div>
        <div className={styles.slideBody}>
          <h2 className={styles.slideTitle}>About Baseline</h2>
          <div className={styles.twoCol}>
            <div className={styles.colText}>
              <p>
                Baseline is a mental wellness app helping users process emotions through
                guided audio meditations. Currently featuring 60 meditations across 10
                emotional states, the app is a standalone iOS experience with all content
                bundled locally.
              </p>
              <p>
                V2 transforms Baseline into a connected platform — with user accounts,
                subscriptions, cloud-delivered content, a guided introductory course, push
                notifications, and dashboards for both users and administrators.
              </p>
            </div>
            <div className={styles.colImage}>
              <Image
                src="/images/baseline-hero.png"
                alt="Baseline App"
                width={500}
                height={400}
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SLIDE 3: HOW WE WORK (Dark)
          ═══════════════════════════════════════════ */}
      <section className={`${styles.section} ${styles.dark} ${styles.reveal}`}>
        <div className={styles.slideHeader}>
          <span className={styles.slideContext}>Proposal 2026 | Baseline</span>
          <Image src="/images/logo-white.svg" alt="No Box Dev" width={140} height={21} />
        </div>
        <div className={styles.slideBody}>
          <h2 className={styles.slideTitleLight}>How We Work</h2>
          <div className={styles.processSteps}>
            {phases.map((phase) => (
              <div key={phase.num} className={`${styles.processStep} ${styles.revealItem}`}>
                <div className={styles.hexNum}>
                  <span>{phase.num}</span>
                </div>
                <div className={styles.stepContent}>
                  <h3>{phase.title}</h3>
                  <p>{phase.desc}</p>
                  <span className={styles.stepTimeline}>{phase.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SLIDE 4–5: FEATURES
          ═══════════════════════════════════════════ */}
      {[
        { title: "Core Platform", subset: features.slice(0, 2) },
        { title: "User Engagement", subset: features.slice(2, 4) },
        { title: "Analytics & Management", subset: features.slice(4, 6) },
      ].map((group) => (
        <section key={group.title} className={`${styles.section} ${styles.light} ${styles.reveal}`}>
          <div className={styles.slideHeader}>
            <span className={styles.slideContext}>Proposal 2026 | Baseline</span>
            <Image src="/images/logo.svg" alt="No Box Dev" width={140} height={21} />
          </div>
          <div className={styles.slideBody}>
            <span className={styles.sectionLabel}>Features</span>
            <h2 className={styles.slideTitle}>{group.title}</h2>
            <div className={styles.featureGrid}>
              {group.subset.map((feat) => (
                <div key={feat.num} className={`${styles.featureCard} ${styles.revealItem}`}>
                  <div className={styles.featureHeader}>
                    <span className={styles.featureNum}>{feat.num}</span>
                    <div className={styles.featureTitleRow}>
                      <h3>{feat.title}</h3>
                      <span className={styles.featurePrice}>{feat.price}</span>
                    </div>
                  </div>
                  <p className={styles.featureDesc}>{feat.desc}</p>
                  <ul className={styles.featureList}>
                    {feat.items.map((item) => (
                      <li key={item}>
                        <span className={styles.arrow}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ═══════════════════════════════════════════
          SLIDE 7: INVESTMENT (Purple)
          ═══════════════════════════════════════════ */}
      <section className={`${styles.section} ${styles.purple} ${styles.reveal}`}>
        <div className={styles.slideHeader}>
          <span className={styles.slideContext}>Proposal 2026 | Baseline</span>
          <Image src="/images/logo-white.svg" alt="No Box Dev" width={140} height={21} />
        </div>
        <div className={styles.slideBody}>
          <span className={styles.sectionLabelLight}>Investment</span>
          <h2 className={styles.slideTitleLight}>Your Investment</h2>
          <div className={styles.pricingTable}>
            <div className={styles.pricingHeader}>
              <span className={styles.pricingCol1}>#</span>
              <span className={styles.pricingCol2}>Feature</span>
              <span className={styles.pricingCol3}>Scope</span>
              <span className={styles.pricingCol4}>Cost</span>
            </div>
            {pricing.map((row, i) => (
              <div key={row.num} className={`${styles.pricingRow} ${i % 2 === 0 ? styles.pricingRowAlt : ""} ${styles.revealItem}`}>
                <span className={styles.pricingCol1}>{row.num}</span>
                <span className={`${styles.pricingCol2} ${styles.pricingName}`}>{row.name}</span>
                <span className={styles.pricingCol3}>{row.scope}</span>
                <span className={`${styles.pricingCol4} ${styles.pricingCost}`}>{row.cost}</span>
              </div>
            ))}
            <div className={styles.pricingTotal}>
              <span>Total Investment</span>
              <span className={styles.totalAmount}>€8,000</span>
            </div>
            <p className={styles.pricingNote}>
              Estimated timeline: 10–12 weeks · Payment: 50% upfront, 50% on delivery
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SLIDE 8: DELIVERABLES (Light)
          ═══════════════════════════════════════════ */}
      <section className={`${styles.section} ${styles.light} ${styles.reveal}`}>
        <div className={styles.slideHeader}>
          <span className={styles.slideContext}>Proposal 2026 | Baseline</span>
          <Image src="/images/logo.svg" alt="No Box Dev" width={140} height={21} />
        </div>
        <div className={styles.slideBody}>
          <span className={styles.sectionLabel}>Deliverables</span>
          <h2 className={styles.slideTitle}>What&apos;s Included</h2>
          <div className={styles.twoCol}>
            <div>
              {[
                { t: "iOS App Updates", d: "Full V2 upgrade with all 6 features integrated" },
                { t: "Backend Infrastructure", d: "Scalable cloud backend with auth, storage, and APIs" },
                { t: "Web Dashboards", d: "Admin and analytics dashboards, browser-accessible" },
                { t: "App Store Submission", d: "Updated listing, screenshots, and submission support" },
                { t: "Documentation", d: "Technical docs for backend services and admin tools" },
              ].map((item) => (
                <div key={item.t} className={`${styles.deliverableItem} ${styles.revealItem}`}>
                  <div className={styles.deliverableDot} />
                  <div>
                    <strong>{item.t}</strong>
                    <p>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className={styles.colHeading}>Working Method</h3>
              {[
                { t: "Iterative Development", d: "Working software at the end of each phase" },
                { t: "Weekly Updates", d: "Short progress reports to keep you informed" },
                { t: "Direct Communication", d: "Single point of contact throughout the project" },
                { t: "Quality Assurance", d: "Testing on multiple devices before each delivery" },
                { t: "Post-Launch Support", d: "2 weeks of bug-fix support after final delivery" },
              ].map((item) => (
                <div key={item.t} className={`${styles.deliverableItem} ${styles.deliverablePurple} ${styles.revealItem}`}>
                  <div className={`${styles.deliverableDot} ${styles.dotPurple}`} />
                  <div>
                    <strong>{item.t}</strong>
                    <p>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SLIDE 9: NEXT STEPS (Coral)
          ═══════════════════════════════════════════ */}
      <section className={`${styles.section} ${styles.coralClose}`}>
        <div className={styles.coverGlow} />
        <div className={styles.glassShape} />
        <div className={styles.slideHeader}>
          <span className={styles.slideContext} style={{ color: "rgba(255,255,255,0.6)" }}>Proposal 2026 | Baseline</span>
          <Image src="/images/logo-white.svg" alt="No Box Dev" width={140} height={21} />
        </div>
        <div className={styles.slideBody}>
          <h2 className={styles.closeTitle}>Next Steps</h2>
          <div className={styles.closeSteps}>
            <div className={`${styles.closeStep} ${styles.revealItem}`}>
              <span className={styles.closeNum}>1</span>
              <p>Review this proposal and share feedback</p>
            </div>
            <div className={`${styles.closeStep} ${styles.revealItem}`}>
              <span className={styles.closeNum}>2</span>
              <p>Schedule a kickoff call to align on details</p>
            </div>
            <div className={`${styles.closeStep} ${styles.revealItem}`}>
              <span className={styles.closeNum}>3</span>
              <p>Sign off and we begin Phase 1 within the week</p>
            </div>
          </div>
          <div className={styles.closeContact}>
            <strong>Jasper Middendorp</strong>
            <span>No Box Dev · Amsterdam</span>
            <span>hello@no-box-dev.com · no-box-dev.com</span>
          </div>
          <p className={styles.closeValidity}>
            This proposal is valid for 30 days from March 1, 2026
          </p>
        </div>
      </section>
    </div>
  );
}
