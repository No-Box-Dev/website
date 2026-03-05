"use client";

import styles from "./page.module.css";
import PasswordGate from "./components/PasswordGate";
import ProposalNav from "./components/ProposalNav";
import CoverSection from "./components/CoverSection";
import AboutSection from "./components/AboutSection";
import VisionSection from "./components/VisionSection";
import FeatureSection from "./components/FeatureSection";
import MockupFrame from "./components/MockupFrame";
import AIAnalysisMockup from "./components/mockups/AIAnalysisMockup";
import MessagingMockup from "./components/mockups/MessagingMockup";
import StatsDashMockup from "./components/mockups/StatsDashMockup";
import AutomationMockup from "./components/mockups/AutomationMockup";
import IOSAppMockup from "./components/mockups/IOSAppMockup";
import InsurerEmailMockup from "./components/mockups/InsurerEmailMockup";
import MarketingPageMockup from "./components/mockups/MarketingPageMockup";
import DesignMockupSelector from "./components/mockups/DesignMockupSelector";
import MigrationSection from "./components/MigrationSection";
import TimelineSection from "./components/TimelineSection";
import PricingSection from "./components/PricingSection";
import NextStepsSection from "./components/NextStepsSection";

export default function ProposalPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700;900&display=swap"
        rel="stylesheet"
      />
      <PasswordGate>
      <div className={styles.proposal}>
        <ProposalNav />
        <CoverSection />
        <AboutSection />
        <VisionSection />

        {/* Functie 01: AI Schadeanalyse */}
        <FeatureSection
          id="features"
          num="01"
          title="AI-Gestuurde Schadeanalyse"
          price="€3.500"
          desc="Uitgebreide AI-engine die binnenkomende schademeldingen analyseert, schadetypes categoriseert, ernst inschat, vervolgstappen voorstelt en mogelijke fraude signaleert. Vermindert handmatige beoordelingstijd en verbetert nauwkeurigheid."
          items={[
            "Automatische schadecategorisatie",
            "Inschatting van schade-ernst",
            "Voorgestelde oplossingsroutes",
            "Fraudedetectie signalering",
            "Lerend van operatorfeedback",
          ]}
          variant="navy"
          reverse
        >
          <MockupFrame type="web" url="112schade.nl/admin/ai-analyse">
            <AIAnalysisMockup />
          </MockupFrame>
        </FeatureSection>

        {/* Functie 02: Geavanceerd Berichtensysteem */}
        <FeatureSection
          num="02"
          title="Geavanceerd Berichtensysteem"
          price="€2.500"
          desc="Gespreksdraden per schademelding voor klanten, operators en verzekeraars. Realtime updates, bestandsbijlagen, berichtsjablonen en volledige gespreksgeschiedenis — alles gekoppeld aan de schademelding."
          items={[
            "Gespreksdraden per schademelding",
            "Realtime berichtaflevering",
            "Bestands- en fotobijlagen",
            "Berichtsjablonen voor operators",
            "Volledige audit trail & geschiedenis",
          ]}
          variant="light"
        >
          <MockupFrame type="phone">
            <MessagingMockup />
          </MockupFrame>
        </FeatureSection>

        {/* Functie 03: AI Verzekeraar E-mail Intelligentie */}
        <FeatureSection
          num="03"
          title="AI Verzekeraar E-mail Intelligentie"
          price="€2.500"
          desc="AI-gestuurde analyse van binnenkomende e-mails van verzekeraars. Haalt automatisch belangrijke beslissingen, deadlines en vereiste acties eruit en koppelt ze aan de betreffende schademelding. Operators krijgen een heldere samenvatting in plaats van dichte e-mails."
          items={[
            "Automatische e-mailinname",
            "Extractie van beslissingen",
            "Deadline- & actiedetectie",
            "Auto-koppeling aan schadedossiers",
            "Operator samenvattingsdashboard",
          ]}
          variant="teal"
          reverse
        >
          <MockupFrame type="web" url="112schade.nl/admin/e-mail-intelligentie">
            <InsurerEmailMockup />
          </MockupFrame>
        </FeatureSection>

        {/* Functie 04: Statistieken & Engagement Dashboard */}
        <FeatureSection
          num="04"
          title="Statistieken & Engagement Dashboard"
          price="€2.500"
          desc="Uitgebreid analytisch dashboard met schade-engagement, oplostijden, operatorprestaties en klanttevredenheid. Visuele inzichten om de bedrijfsvoering te optimaliseren en waarde aan te tonen."
          items={[
            "Bijhouden van oplostijden",
            "Operatorprestatie-metrics",
            "Klantengagement-analyse",
            "Trendanalyse & prognoses",
            "Exporteerbare rapporten & grafieken",
          ]}
          variant="light"
        >
          <MockupFrame type="web" url="112schade.nl/admin/statistieken">
            <StatsDashMockup />
          </MockupFrame>
        </FeatureSection>

        {/* Functie 05: Operator Automatisering */}
        <FeatureSection
          num="05"
          title="Operator Workflow Automatisering"
          price="€2.000"
          desc="Verminder de werkdruk van operators door intelligente automatisering. Automatische toewijzing op basis van type en expertise, opvolgingsherinneringen, statusmeldingen aan klanten en automatische escalatie van stilstaande dossiers."
          items={[
            "Slimme automatische toewijzing",
            "Geautomatiseerde opvolgingen",
            "Statusupdate-meldingen",
            "Escalatie van stilstaande dossiers",
            "Aangepaste automatiseringsregels",
          ]}
          variant="navy"
          reverse
        >
          <MockupFrame type="web" url="112schade.nl/admin/automatisering">
            <AutomationMockup />
          </MockupFrame>
        </FeatureSection>

        {/* Functie 06: Design Verbeteringen — Inbegrepen */}
        <FeatureSection
          num="06"
          title="Design & UX Verbetering"
          price="€2.000"
          desc="Modern, professioneel herontwerp van de klantinterface en het operator-dashboard. Inclusief de overgang van de huidige goud/gele huisstijl naar de nieuwe blauwe merkidentiteit. Verbeterde informatiehiërarchie, responsive design en een verzorgde uitstraling die vertrouwen wekt bij klanten."
          items={[
            "Nieuwe merkidentiteit (blauw/turquoise)",
            "Moderne klantgerichte UI",
            "Responsive mobile-first design",
            "Verbeterde operator-dashboard UX",
            "Consistent designsysteem",
          ]}
          variant="light"
        >
          <DesignMockupSelector />
        </FeatureSection>

        {/* Optioneel — Functie 07: Native iOS App */}
        <FeatureSection
          num="07"
          title="Native iOS App"
          price="Optioneel · €2.000"
          desc="Een native iOS-app waarmee klanten schade kunnen melden, foto's direct kunnen uploaden, de status in realtime kunnen volgen en via pushmeldingen kunnen communiceren met operators."
          items={[
            "Schademelding met foto-upload",
            "Realtime statustracking",
            "Pushmelding-updates",
            "In-app berichten",
            "Offline conceptondersteuning",
          ]}
          variant="teal"
          reverse
        >
          <MockupFrame type="phone">
            <IOSAppMockup />
          </MockupFrame>
        </FeatureSection>

        {/* Optioneel — Functie 08: Marketingpagina & SEO */}
        <FeatureSection
          num="08"
          title="Marketingpagina & SEO"
          price="Optioneel · €3.000"
          desc="Volledige migratie van de huidige 112schade.nl website-content naar een nieuw, professioneel platform. Alle bestaande pagina's, teksten en afbeeldingen worden overgezet met behoud van SEO-posities, URL-structuur en zoekmachinevindbaar­heid. Aangevuld met conversie-optimalisatie en een modern, vertrouwenwekkend design."
          items={[
            "Volledige contentmigratie huidige website",
            "Behoud van SEO-posities & URL-structuur",
            "301-redirects & technische SEO-migratie",
            "Conversie-geoptimaliseerd nieuw design",
            "Analytics & conversietracking",
          ]}
          variant="light"
        >
          <MockupFrame type="web" url="112schade.nl">
            <MarketingPageMockup />
          </MockupFrame>
        </FeatureSection>

        <MigrationSection />
        <TimelineSection />
        <PricingSection />
        <NextStepsSection />
      </div>
    </PasswordGate>
    </>
  );
}
