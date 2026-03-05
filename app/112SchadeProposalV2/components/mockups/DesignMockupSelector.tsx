"use client";

import { useState } from "react";
import styles from "./mockups.module.css";

const options = [
  { id: 1, label: "Merkidentiteit" },
  { id: 2, label: "Componentbibliotheek" },
  { id: 3, label: "Dashboard" },
  { id: 4, label: "Responsive" },
  { id: 5, label: "Klantportaal" },
];

/* 1 — Brand Identity: old vs new */
function BrandIdentityMockup() {
  return (
    <div className={styles.designContent}>
      <div className={styles.brandCompare}>
        <div className={styles.brandOld}>
          <div className={styles.brandLabel}>Huidig</div>
          <div className={styles.brandColorRow}>
            <div className={styles.brandSwatch} style={{ background: "#E8A825" }} />
            <div className={styles.brandSwatch} style={{ background: "#F5C842" }} />
            <div className={styles.brandSwatch} style={{ background: "#FFF8E1" }} />
          </div>
          <div className={styles.brandLogoOld}>
            <div className={styles.brandShieldOld}>112</div>
            <span>schade.nl</span>
          </div>
          <div className={styles.brandBtnOld}>Meld schade</div>
          <div className={styles.brandInputOld} />
          <div className={styles.brandCardOld}>
            <div className={styles.brandCardLine} style={{ width: "80%", background: "#FDE68A" }} />
            <div className={styles.brandCardLine} style={{ width: "60%", background: "#FEF3C7" }} />
          </div>
        </div>
        <div className={styles.brandArrow}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1F9D9B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
        <div className={styles.brandNew}>
          <div className={styles.brandLabel}>Nieuw</div>
          <div className={styles.brandColorRow}>
            <div className={styles.brandSwatch} style={{ background: "#2A4391" }} />
            <div className={styles.brandSwatch} style={{ background: "#1F9D9B" }} />
            <div className={styles.brandSwatch} style={{ background: "#132444" }} />
          </div>
          <div className={styles.brandLogoNew}>
            <div className={styles.brandShieldNew}>112</div>
            <span>schade.nl</span>
          </div>
          <div className={styles.brandBtnNew}>Meld schade</div>
          <div className={styles.brandInputNew} />
          <div className={styles.brandCardNew}>
            <div className={styles.brandCardLine} style={{ width: "80%", background: "rgba(42,67,145,0.15)" }} />
            <div className={styles.brandCardLine} style={{ width: "60%", background: "rgba(31,157,155,0.12)" }} />
          </div>
        </div>
      </div>
      <div className={styles.designCaption}>
        Van goud/geel naar professioneel blauw & turquoise
      </div>
    </div>
  );
}

/* 2 — Component Library */
function ComponentLibMockup() {
  return (
    <div className={styles.designContent}>
      <div className={styles.compGrid}>
        <div className={styles.compSection}>
          <div className={styles.compLabel}>Typografie</div>
          <div className={styles.compType} style={{ fontSize: "1.3rem", fontWeight: 700, color: "#132444" }}>Titillium Web Bold</div>
          <div className={styles.compType} style={{ fontSize: "1rem", fontWeight: 600, color: "#2A4391" }}>Titillium Web SemiBold</div>
          <div className={styles.compType} style={{ fontSize: "0.85rem", color: "#6B7280" }}>Titillium Web Regular</div>
        </div>
        <div className={styles.compSection}>
          <div className={styles.compLabel}>Knoppen</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <div className={styles.compBtnPrimary}>Primair</div>
            <div className={styles.compBtnSecondary}>Secundair</div>
            <div className={styles.compBtnOutline}>Outline</div>
            <div className={styles.compBtnGhost}>Ghost</div>
          </div>
        </div>
        <div className={styles.compSection}>
          <div className={styles.compLabel}>Statusbadges</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <span className={`${styles.statusBadge} ${styles.statusActive}`}>Actief</span>
            <span className={`${styles.statusBadge} ${styles.statusPending}`}>In behandeling</span>
            <span className={`${styles.statusBadge} ${styles.statusResolved}`}>Afgehandeld</span>
          </div>
        </div>
        <div className={styles.compSection}>
          <div className={styles.compLabel}>Invoervelden</div>
          <div style={{ display: "flex", gap: 8 }}>
            <div className={styles.compInput}>E-mailadres</div>
            <div className={styles.compInputFocus}>Jan de Vries</div>
          </div>
        </div>
        <div className={styles.compSection}>
          <div className={styles.compLabel}>Kleuren</div>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { c: "#132444", n: "Nachtblauw" },
              { c: "#2A4391", n: "Diep Blauw" },
              { c: "#1F9D9B", n: "Turquoise" },
              { c: "#DDE2E7", n: "Zilver" },
              { c: "#F4F6F8", n: "Sneeuw" },
            ].map(({ c, n }) => (
              <div key={c} className={styles.compColorBlock}>
                <div className={styles.compColorSwatch} style={{ background: c }} />
                <span className={styles.compColorName}>{n}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3 — Dashboard Preview */
function DashboardMockup() {
  return (
    <div className={styles.designContent}>
      <div className={styles.dashPreview}>
        <div className={styles.dashSidebar}>
          <div className={styles.dashSidebarLogo}>112</div>
          {["Dashboard", "Schades", "Berichten", "E-mails", "Rapporten", "Instellingen"].map((item, i) => (
            <div key={item} className={i === 0 ? styles.dashNavActive : styles.dashNavItem}>{item}</div>
          ))}
        </div>
        <div className={styles.dashMain}>
          <div className={styles.dashTopBar}>
            <span style={{ fontWeight: 700, color: "#132444", fontSize: "0.85rem" }}>Dashboard</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div className={styles.dashNotif}>3</div>
              <div className={styles.dashAvatar}>JK</div>
            </div>
          </div>
          <div className={styles.dashCards}>
            <div className={styles.dashCard}>
              <div className={styles.dashCardNum}>42</div>
              <div className={styles.dashCardLabel}>Open schades</div>
            </div>
            <div className={styles.dashCard}>
              <div className={styles.dashCardNum} style={{ color: "#1F9D9B" }}>18</div>
              <div className={styles.dashCardLabel}>Vandaag nieuw</div>
            </div>
            <div className={styles.dashCard}>
              <div className={styles.dashCardNum} style={{ color: "#16A34A" }}>89%</div>
              <div className={styles.dashCardLabel}>Tevredenheid</div>
            </div>
          </div>
          <div className={styles.dashTable}>
            <div className={styles.dashTableHead}>
              <span>ID</span><span>Type</span><span>Status</span>
            </div>
            {[
              { id: "SCH-2847", type: "Lease Autoschade", status: "Actief", cls: "statusActive" },
              { id: "SCH-2846", type: "Stormschade", status: "In behandeling", cls: "statusPending" },
              { id: "SCH-2845", type: "Brandschade", status: "Afgehandeld", cls: "statusResolved" },
              { id: "SCH-2844", type: "Aanrijding", status: "Actief", cls: "statusActive" },
            ].map(r => (
              <div key={r.id} className={styles.dashRow}>
                <span style={{ fontWeight: 700 }}>{r.id}</span>
                <span>{r.type}</span>
                <span className={`${styles.statusBadge} ${styles[r.cls as keyof typeof styles]}`}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 4 — Responsive Devices */
function ResponsiveMockup() {
  return (
    <div className={styles.designContent}>
      <div className={styles.respDevices}>
        <div className={styles.respDesktop}>
          <div className={styles.respBar}>
            <span className={styles.respDot} style={{ background: "#FF5F57" }} />
            <span className={styles.respDot} style={{ background: "#FFBD2E" }} />
            <span className={styles.respDot} style={{ background: "#28CA41" }} />
            <span className={styles.respUrl}>112schade.nl</span>
          </div>
          <div className={styles.respContent}>
            <div className={styles.respNav}>
              <span className={styles.respNavLogo}>112</span>
              <div style={{ display: "flex", gap: 6, marginLeft: "auto" }}>
                <div className={styles.respNavLink} />
                <div className={styles.respNavLink} />
                <div className={styles.respNavLink} />
              </div>
            </div>
            <div className={styles.respHero}>
              <div className={styles.respHeroText}>
                <div className={styles.respBlock} style={{ width: "75%", height: 10 }} />
                <div className={styles.respBlock} style={{ width: "55%", height: 7 }} />
                <div className={styles.respBlockBtn} />
              </div>
            </div>
            <div className={styles.respGrid3}>
              <div className={styles.respCardPlaceholder}>
                <div className={styles.respCardIcon} />
                <div className={styles.respBlock} style={{ width: "70%", height: 5, margin: "4px auto 0" }} />
              </div>
              <div className={styles.respCardPlaceholder}>
                <div className={styles.respCardIcon} />
                <div className={styles.respBlock} style={{ width: "70%", height: 5, margin: "4px auto 0" }} />
              </div>
              <div className={styles.respCardPlaceholder}>
                <div className={styles.respCardIcon} />
                <div className={styles.respBlock} style={{ width: "70%", height: 5, margin: "4px auto 0" }} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.respTablet}>
          <div className={styles.respTabletContent}>
            <div className={styles.respTabletNav} />
            <div className={styles.respBlock} style={{ width: "85%", height: 7, margin: "8px auto" }} />
            <div className={styles.respBlock} style={{ width: "65%", height: 5, margin: "4px auto" }} />
            <div className={styles.respBlockBtn} style={{ margin: "6px auto", width: "40%" }} />
            <div style={{ display: "flex", gap: 4, padding: "6px 6px 0" }}>
              <div className={styles.respCardPlaceholder} style={{ height: 28 }} />
              <div className={styles.respCardPlaceholder} style={{ height: 28 }} />
            </div>
          </div>
        </div>

        <div className={styles.respPhone}>
          <div className={styles.respNotch} />
          <div className={styles.respPhoneContent}>
            <div className={styles.respPhoneNav} />
            <div className={styles.respBlock} style={{ width: "90%", height: 7, margin: "6px auto" }} />
            <div className={styles.respBlock} style={{ width: "65%", height: 5, margin: "3px auto" }} />
            <div className={styles.respBlockBtn} style={{ margin: "6px auto", width: "50%" }} />
            <div className={styles.respPhoneCards}>
              <div className={styles.respCardPlaceholder} />
              <div className={styles.respCardPlaceholder} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.designCaption}>Optimaal op elk apparaat — desktop, tablet & mobiel</div>
    </div>
  );
}

/* 5 — Client Portal */
function ClientPortalMockup() {
  return (
    <div className={styles.designContent}>
      <div className={styles.portalScreen}>
        <div className={styles.portalHeader}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div className={styles.portalHeaderLogo}>112</div>
            <span style={{ fontWeight: 700, color: "white", fontSize: "0.85rem" }}>schade.nl</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div className={styles.dashNotifWhite}>2</div>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem" }}>Jan de Vries</span>
          </div>
        </div>
        <div className={styles.portalBody}>
          <div className={styles.portalWelcome}>
            <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>Welkom terug,</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#132444" }}>Jan de Vries</div>
          </div>
          <div className={styles.portalClaimCard}>
            <div className={styles.portalClaimTop}>
              <span style={{ fontWeight: 700, color: "#132444", fontSize: "0.85rem" }}>Lease Autoschade</span>
              <span className={`${styles.statusBadge} ${styles.statusActive}`}>Actief</span>
            </div>
            <div style={{ fontSize: "0.75rem", color: "#6B7280", marginBottom: 10 }}>SCH-2847 · 3 mrt 2026</div>
            <div className={styles.portalProgress}>
              <div className={styles.portalProgressFill} style={{ width: "65%" }} />
            </div>
            <div className={styles.portalSteps}>
              <div className={styles.portalStepDone}>Gemeld</div>
              <div className={styles.portalStepDone}>Beoordeling</div>
              <div className={styles.portalStepCurrent}>Taxatie</div>
              <div className={styles.portalStepTodo}>Afgehandeld</div>
            </div>
          </div>
          <div className={styles.portalActions}>
            <div className={styles.portalAction}>
              <div className={styles.portalActionIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A4391" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
              </div>
              <span>Foto&apos;s</span>
            </div>
            <div className={styles.portalAction}>
              <div className={styles.portalActionIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A4391" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <span>Berichten</span>
            </div>
            <div className={styles.portalAction}>
              <div className={styles.portalActionIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A4391" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <span>Documenten</span>
            </div>
          </div>
          <div className={styles.portalSecondClaim}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 700, color: "#132444", fontSize: "0.8rem" }}>Stormschade</span>
              <span className={`${styles.statusBadge} ${styles.statusResolved}`}>Afgehandeld</span>
            </div>
            <div style={{ fontSize: "0.7rem", color: "#9CA3AF", marginTop: 4 }}>SCH-2839 · 18 feb 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mockups = [BrandIdentityMockup, ComponentLibMockup, DashboardMockup, ResponsiveMockup, ClientPortalMockup];

export default function DesignMockupSelector() {
  const [active, setActive] = useState(0);
  const ActiveMockup = mockups[active];

  return (
    <div className={styles.selectorWrap}>
      <div className={styles.designScreen}>
        <div className={styles.designHeader}>{options[active].label}</div>
        <ActiveMockup />
      </div>
      <div className={styles.selectorBar}>
        {options.map((opt, i) => (
          <button
            key={opt.id}
            className={i === active ? styles.selectorBtnActive : styles.selectorBtn}
            onClick={() => setActive(i)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
