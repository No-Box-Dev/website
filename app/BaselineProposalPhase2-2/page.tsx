"use client";

import styles from "./page.module.css";
import PasswordGate from "../BaselineProposalPhase2/components/PasswordGate";
import FeatureSection from "../BaselineProposalPhase2/components/FeatureSection";
import MockupFrame from "../BaselineProposalPhase2/components/MockupFrame";
import LoginMockup from "../BaselineProposalPhase2/components/mockups/LoginMockup";
import PaywallMockup from "../BaselineProposalPhase2/components/mockups/PaywallMockup";
import NotificationsMockup from "../BaselineProposalPhase2/components/mockups/NotificationsMockup";
import ProposalNav from "./components/ProposalNav";
import CoverSection from "./components/CoverSection";
import ContextSection from "./components/ContextSection";
import TimelineSection from "./components/TimelineSection";
import PricingSection from "./components/PricingSection";
import NextStepsSection from "./components/NextStepsSection";

export default function ProposalPage() {
  return (
    <PasswordGate>
      <div className={styles.proposal}>
        <ProposalNav />
        <CoverSection />
        <ContextSection />

        {/* Feature 01: Sign In & Account System */}
        <FeatureSection
          id="features"
          num="01"
          title="Sign In & Account System"
          price="€1,900"
          desc="Secure user authentication with social and email login. User accounts with profile management, password reset, and session handling across devices. The foundation that everything else builds on."
          items={[
            "Social login integration (Apple, Google)",
            "Email & password authentication",
            "Password reset flow",
            "User profile management",
            "Secure session handling across devices",
          ]}
          variant="light"
        >
          <MockupFrame type="phone">
            <LoginMockup />
          </MockupFrame>
        </FeatureSection>

        {/* Feature 02: Subscription & Payments */}
        <FeatureSection
          num="02"
          title="Subscription & Payments"
          price="€2,100"
          desc="Full in-app subscription system with monthly and yearly plans. Free trial support, paywall screens, receipt validation, and subscription status syncing. Platform and pricing TBD."
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

        {/* Feature 03: Push Notifications */}
        <FeatureSection
          num="03"
          title="Push Notifications"
          price="€1,000"
          desc="Smart push notifications to maintain engagement and build consistent practice habits. Configurable reminders, streak alerts, and new content notifications."
          items={[
            "Daily practice reminders",
            "Streak & milestone alerts",
            "New content notifications",
            "User preference controls",
            "Backend scheduling system",
          ]}
          variant="dark"
        >
          <MockupFrame type="phone">
            <NotificationsMockup />
          </MockupFrame>
        </FeatureSection>

        <TimelineSection />
        <PricingSection />
        <NextStepsSection />
      </div>
    </PasswordGate>
  );
}
