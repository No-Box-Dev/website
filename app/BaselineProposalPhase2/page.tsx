"use client";

import styles from "./page.module.css";
import PasswordGate from "./components/PasswordGate";
import ProposalNav from "./components/ProposalNav";
import CoverSection from "./components/CoverSection";
import AboutSection from "./components/AboutSection";
import VisionSection from "./components/VisionSection";
import FeatureSection from "./components/FeatureSection";
import MockupFrame from "./components/MockupFrame";
import LoginMockup from "./components/mockups/LoginMockup";
import PaywallMockup from "./components/mockups/PaywallMockup";
import CourseMockup from "./components/mockups/CourseMockup";
import DownloadMockup from "./components/mockups/DownloadMockup";
import NotificationsMockup from "./components/mockups/NotificationsMockup";
import AdminDashMockup from "./components/mockups/AdminDashMockup";
import ContentCMSMockup from "./components/mockups/ContentCMSMockup";
import TimelineSection from "./components/TimelineSection";
import PricingSection from "./components/PricingSection";
import NextStepsSection from "./components/NextStepsSection";

export default function ProposalPage() {
  return (
    <PasswordGate>
      <div className={styles.proposal}>
        <ProposalNav />
        <CoverSection />
        <AboutSection />
        <VisionSection />

        {/* Feature 01: Login & Authentication */}
        <FeatureSection
          id="features"
          num="01"
          title="Login & Authentication"
          price="€2,400"
          desc="Secure user authentication with social and email login. User accounts with profile management, password reset, and session handling across devices."
          items={[
            "Social login integration",
            "Email & password authentication",
            "Password reset flow",
            "User profile management",
            "Secure session handling",
          ]}
          variant="light"
        >
          <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
            <MockupFrame type="phone">
              <LoginMockup />
            </MockupFrame>
          </div>
        </FeatureSection>

        {/* Feature 02: Subscription & Payments */}
        <FeatureSection
          num="02"
          title="Subscription & Payments"
          price="€2,700"
          desc="Full in-app subscription system with monthly and yearly plans. Free trial support, paywall screens, receipt validation, and subscription status syncing with the backend. Platform and pricing TBD."
          items={[
            "Native subscription integration",
            "Monthly & yearly plan options",
            "Free trial & promotional offers",
            "Paywall UI with plan comparison",
            "Server-side receipt validation",
          ]}
          variant="purple"
          reverse
        >
          <MockupFrame type="phone">
            <PaywallMockup />
          </MockupFrame>
        </FeatureSection>

        {/* Feature 03: Cloud Content Delivery */}
        <FeatureSection
          num="03"
          title="Cloud Content Delivery"
          price="€2,900"
          desc="Move meditation content to the cloud. Users download tools on first use, reducing app size and enabling dynamic content updates. Audio files are cached locally for offline playback."
          items={[
            "Cloud-hosted audio content",
            "Download-on-first-use system",
            "Local caching for offline use",
            "Background download support",
            "Dynamic content management",
          ]}
          variant="light"
        >
          <MockupFrame type="phone">
            <DownloadMockup />
          </MockupFrame>
        </FeatureSection>

        {/* Feature 04: Introductory Course */}
        <FeatureSection
          num="04"
          title="Introductory Course"
          price="€2,000"
          desc="A structured 5-session onboarding course guiding new users through meditation fundamentals and emotional regulation. Includes progress tracking and completion rewards."
          items={[
            "5 guided onboarding sessions",
            "Progressive session unlocking",
            "Progress tracking & streaks",
            "Completion certificate",
            "Seamless library transition",
          ]}
          variant="dark"
          reverse
        >
          <MockupFrame type="phone">
            <CourseMockup />
          </MockupFrame>
        </FeatureSection>

        {/* Feature 05: Push Notifications */}
        <FeatureSection
          num="05"
          title="Push Notifications"
          price="€1,400"
          desc="Smart push notifications to maintain engagement and build consistent practice habits. Configurable reminders, streak alerts, and new content notifications."
          items={[
            "Daily practice reminders",
            "Streak & milestone alerts",
            "New content notifications",
            "User preference controls",
            "Backend scheduling system",
          ]}
          variant="light"
        >
          <MockupFrame type="phone">
            <NotificationsMockup />
          </MockupFrame>
        </FeatureSection>

        {/* Feature 06: User Analytics Dashboard */}
        <FeatureSection
          num="06"
          title="User Analytics Dashboard"
          price="€2,000"
          desc="Web-based analytics dashboard providing insight into user behavior, engagement metrics, and subscription performance. Track active users, popular content, and revenue."
          items={[
            "Active user metrics (DAU/WAU/MAU)",
            "Content engagement analytics",
            "Subscription & revenue tracking",
            "Retention & churn reports",
            "Exportable data & charts",
          ]}
          variant="coral"
          reverse
        >
          <MockupFrame type="web" url="baseline-admin.noboxdev.com/analytics">
            <AdminDashMockup />
          </MockupFrame>
        </FeatureSection>

        {/* Feature 07: Tool Management Dashboard */}
        <FeatureSection
          num="07"
          title="Tool Management Dashboard"
          price="€1,600"
          desc="Administrative dashboard for managing meditation content, push notification campaigns, and course configuration. Upload audio, organise categories, and schedule notifications."
          items={[
            "Content upload & management",
            "Category & emotion organiser",
            "Notification campaign builder",
            "Course session editor",
            "User management & support",
          ]}
          variant="light"
        >
          <MockupFrame type="web" url="baseline-admin.noboxdev.com/content">
            <ContentCMSMockup />
          </MockupFrame>
        </FeatureSection>

        <TimelineSection />
        <PricingSection />
        <NextStepsSection />
      </div>
    </PasswordGate>
  );
}
