"use client";

import { useMemo, useState } from "react";
import { product } from "../lib/product";

type View = "briefing" | "tracker" | "editorial";
type PhaseStatus = "Complete" | "Active" | "Planned";

const phases: { id: string; title: string; status: PhaseStatus; progress: number; steps: string[] }[] = [
  { id: "P0", title: "Audit & planning", status: "Complete", progress: 100, steps: ["STABLE mapped", "Repository audited", "Risks registered"] },
  { id: "P1", title: "Foundation", status: "Active", progress: 62, steps: ["Brand configuration", "Design tokens", "Shared app shell", "Living tracker"] },
  { id: "P2", title: "Marketing", status: "Planned", progress: 8, steps: ["Global homepage", "Trust pages", "SEO foundation"] },
  { id: "P3", title: "Public demo", status: "Planned", progress: 4, steps: ["News feed", "Story detail", "Search & geography"] },
  { id: "P4", title: "Personalisation", status: "Planned", progress: 0, steps: ["Authentication", "Preferences", "Bookmarks"] },
  { id: "P5", title: "Editorial", status: "Planned", progress: 3, steps: ["Review queue", "Coverage health", "Publishing controls"] },
];

const stories = [
  { tag: "GLOBAL · ECONOMY", title: "How cities are preparing public services for longer heat seasons", summary: "A multi-source demo briefing comparing adaptation plans, funding questions, and local trade-offs.", sources: 5, time: "6 min", accent: "gold" },
  { tag: "TECHNOLOGY", title: "Small-language AI tools gain new investment and research attention", summary: "What new models could mean for access, preservation, and responsible deployment.", sources: 4, time: "4 min", accent: "violet" },
  { tag: "HEALTH", title: "Regional care networks test shared capacity planning", summary: "A fictional overview of the operational questions being evaluated across several markets.", sources: 3, time: "3 min", accent: "green" },
];

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

export default function Home() {
  const [view, setView] = useState<View>("briefing");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [selectedPhase, setSelectedPhase] = useState("P1");
  const [polling, setPolling] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [lastSync, setLastSync] = useState("Just now");
  const overall = useMemo(() => Math.round(phases.reduce((sum, phase) => sum + phase.progress, 0) / phases.length), []);
  const activePhase = phases.find((phase) => phase.id === selectedPhase) ?? phases[1];

  function refreshTracker() {
    setLastSync("Just now");
    setPolling(false);
    window.setTimeout(() => setPolling(true), 700);
  }

  return (
    <div className="app" data-theme={theme}>
      <a className="skip-link" href="#main">Skip to main content</a>
      <aside className={navOpen ? "sidebar open" : "sidebar"} aria-label="Primary navigation">
        <div className="brand"><span className="brand-mark">N</span><span>{product.name}</span><button className="nav-close" onClick={() => setNavOpen(false)} aria-label="Close navigation">×</button></div>
        <nav>
          <p className="nav-label">Workspace</p>
          <button className={view === "briefing" ? "nav-item active" : "nav-item"} onClick={() => { setView("briefing"); setNavOpen(false); }}><Icon>⌂</Icon>News intelligence</button>
          <button className={view === "tracker" ? "nav-item active" : "nav-item"} onClick={() => { setView("tracker"); setNavOpen(false); }}><Icon>◫</Icon>Project tracker<span className="nav-count">15</span></button>
          <button className={view === "editorial" ? "nav-item active" : "nav-item"} onClick={() => { setView("editorial"); setNavOpen(false); }}><Icon>✓</Icon>Editorial overview</button>
          <p className="nav-label">Explore</p>
          <button className="nav-item"><Icon>◎</Icon>Global coverage</button>
          <button className="nav-item"><Icon>◇</Icon>Saved stories</button>
          <button className="nav-item"><Icon>◌</Icon>Media briefings</button>
        </nav>
        <div className="sidebar-note"><span className="status-dot" /> Demo environment<p>No live reporting or providers</p></div>
        <button className="nav-item settings"><Icon>⚙</Icon>Settings</button>
      </aside>

      <div className="workspace">
        <header className="topbar">
          <button className="mobile-brand" onClick={() => setNavOpen(true)} aria-label="Open navigation" aria-expanded={navOpen}>N</button>
          <div><p className="eyebrow">{product.owner} · {product.foundingCountry}</p><strong>{view === "tracker" ? "Delivery workspace" : view === "editorial" ? "Editorial command centre" : "Global intelligence briefing"}</strong></div>
          <div className="top-actions">
            <button className="icon-button" aria-label="Search">⌕</button>
            <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}><span>{theme === "light" ? "☾" : "☀"}</span>{theme === "light" ? "Dark" : "Light"}</button>
            <button className="avatar" aria-label="Account menu">NV</button>
          </div>
        </header>

        <main id="main">
          {view === "briefing" && <Briefing onOpenTracker={() => setView("tracker")} />}
          {view === "tracker" && <Tracker overall={overall} activePhase={activePhase} selectedPhase={selectedPhase} setSelectedPhase={setSelectedPhase} polling={polling} lastSync={lastSync} refresh={refreshTracker} />}
          {view === "editorial" && <Editorial />}
        </main>
      </div>
    </div>
  );
}

function Briefing({ onOpenTracker }: { onOpenTracker: () => void }) {
  return <div className="page briefing-page">
    <section className="hero">
      <div className="hero-copy"><span className="pill pill-indigo">DEMO CONTENT · NOT LIVE REPORTING</span><h1>Every story.<br /><em>A clearer view.</em></h1><p>Understand complex developments through transparent, multi-source context—designed for a global audience.</p><div className="button-row"><button className="button primary">Explore the briefing <span>→</span></button><button className="button secondary" onClick={onOpenTracker}>View build progress</button></div></div>
      <div className="hero-visual" aria-label="Abstract global coverage visual"><div className="orb orb-one"/><div className="orb orb-two"/><div className="grid-lines"/><div className="visual-card"><span>Global coverage</span><strong>Country-neutral by design</strong><small>Fictional planning preview</small></div></div>
    </section>
    <section className="trust-strip" aria-label="Product principles"><div><Icon>◎</Icon><span><strong>Multi-source clarity</strong>Compare perspectives</span></div><div><Icon>◌</Icon><span><strong>Audio & video</strong>Accessible explainers</span></div><div><Icon>◈</Icon><span><strong>Global coverage</strong>Local context, global impact</span></div><div><Icon>▣</Icon><span><strong>Source transparent</strong>Attribution first</span></div></section>
    <div className="section-heading"><div><p className="eyebrow">TODAY’S DEMO BRIEFING</p><h2>Stories worth understanding</h2></div><button className="text-button">View global feed →</button></div>
    <section className="story-grid">{stories.map((story) => <article className="story-card" key={story.title}><div className={`story-art ${story.accent}`}><span>{story.tag.split(" · ")[0]}</span></div><div className="story-content"><span className="story-tag">{story.tag}</span><h3>{story.title}</h3><p>{story.summary}</p><div className="story-meta"><span>Based on {story.sources} fictional sources</span><span>{story.time}</span></div></div></article>)}</section>
  </div>;
}

function Tracker({ overall, activePhase, selectedPhase, setSelectedPhase, polling, lastSync, refresh }: { overall: number; activePhase: typeof phases[number]; selectedPhase: string; setSelectedPhase: (id: string) => void; polling: boolean; lastSync: string; refresh: () => void }) {
  return <div className="page tracker-page">
    <section className="page-intro"><div><span className="pill pill-violet">LIVING DELIVERY VIEW</span><h1>From specification to shipped product.</h1><p>A visual first pass of the sprint phases in <code>PRODUCT_TRACKER.md</code>. Values are planning snapshots until markdown synchronisation is implemented.</p></div><div className="sync-card"><div className="sync-status"><span className={polling ? "pulse" : "pulse paused"}/><span><strong>{polling ? "Polling enabled" : "Refreshing…"}</strong><small>Last snapshot: {lastSync}</small></span></div><button className="button secondary compact" onClick={refresh}>Refresh snapshot</button></div></section>
    <section className="metric-grid"><Metric label="Overall completion" value={`${overall}%`} change="Across visible phases" tone="indigo"/><Metric label="Active sprint" value="Phase 1" change="Foundation & design system" tone="violet"/><Metric label="Open risks" value="7" change="2 critical gates" tone="gold"/><Metric label="Verification" value="Pending" change="Build and checks in progress" tone="green"/></section>
    <section className="tracker-layout"><div className="panel phase-panel"><div className="panel-heading"><div><p className="eyebrow">SPRINT ROADMAP</p><h2>Delivery phases</h2></div><span className="legend"><i/> Completion</span></div><div className="phase-list">{phases.map((phase) => <button key={phase.id} className={selectedPhase === phase.id ? "phase-row selected" : "phase-row"} onClick={() => setSelectedPhase(phase.id)}><span className="phase-id">{phase.id}</span><span className="phase-name"><strong>{phase.title}</strong><small>{phase.status}</small></span><span className="progress-track"><i style={{width: `${phase.progress}%`}}/></span><b>{phase.progress}%</b></button>)}</div></div>
      <aside className="panel sprint-panel"><p className="eyebrow">SELECTED SPRINT</p><div className="sprint-title"><div><span>{activePhase.id}</span><h2>{activePhase.title}</h2></div><strong>{activePhase.progress}%</strong></div><div className="ring" style={{"--progress": `${activePhase.progress * 3.6}deg`} as React.CSSProperties}><span>{activePhase.progress}<small>%</small></span></div><h3>Implementation steps</h3><ol className="step-list">{activePhase.steps.map((step, index) => <li key={step} className={index < Math.ceil(activePhase.steps.length * activePhase.progress / 100) ? "done" : ""}><span>{index < Math.ceil(activePhase.steps.length * activePhase.progress / 100) ? "✓" : index + 1}</span><p>{step}<small>{index < Math.ceil(activePhase.steps.length * activePhase.progress / 100) ? "Evidence recorded" : "Awaiting implementation"}</small></p></li>)}</ol></aside></section>
    <section className="panel activity-panel"><div className="panel-heading"><div><p className="eyebrow">AGENT HANDOFFS</p><h2>Implementation pulse</h2></div><span className="pill pill-green">1 agent active</span></div><div className="timeline"><div><span className="timeline-dot indigo"/><strong>Codex</strong><p>App shell, design system and living tracker foundation</p><time>In progress</time></div><div><span className="timeline-dot violet"/><strong>STABLE gate</strong><p>Scope, mockup panels, risks and acceptance checks recorded</p><time>Completed</time></div><div><span className="timeline-dot gold"/><strong>Next handoff</strong><p>Review implementation evidence in CLAUDE_HANDOFF.md</p><time>Pending</time></div></div></section>
  </div>;
}

function Metric({ label, value, change, tone }: { label: string; value: string; change: string; tone: string }) { return <article className={`metric-card ${tone}`}><span>{label}</span><strong>{value}</strong><small>{change}</small></article>; }

function Editorial() {
  const queue = [{ title: "Heat adaptation briefing", risk: "Elevated", status: "Needs review" }, { title: "Language technology funding", risk: "Standard", status: "Fact check" }, { title: "Regional care capacity", risk: "Standard", status: "Draft" }];
  return <div className="page editorial-page"><section className="page-intro"><div><span className="pill pill-gold">EDITORIAL DEMO · NO PUBLISHING</span><h1>Editorial clarity at every gate.</h1><p>A non-operational preview of review queues, coverage health, and AI-assisted workflow states.</p></div><button className="button primary">Open review queue</button></section><section className="metric-grid"><Metric label="Awaiting review" value="14" change="Fictional queue" tone="gold"/><Metric label="Source coverage" value="42" change="Demo sources" tone="indigo"/><Metric label="Corrections" value="0" change="No live publications" tone="green"/><Metric label="AI drafts" value="9" change="Human review required" tone="violet"/></section><section className="editorial-grid"><div className="panel"><div className="panel-heading"><div><p className="eyebrow">REVIEW QUEUE</p><h2>Priority work</h2></div><button className="text-button">View all →</button></div><div className="review-list">{queue.map((item) => <article key={item.title}><span className="review-icon">N</span><div><h3>{item.title}</h3><p>Demo cluster · 3–5 fictional sources</p></div><span className={item.risk === "Elevated" ? "badge warning" : "badge"}>{item.risk}</span><strong>{item.status}</strong></article>)}</div></div><div className="panel coverage-panel"><p className="eyebrow">GEOGRAPHIC COVERAGE</p><h2>Country-neutral monitoring</h2><div className="donut"><span>Demo<small>mix</small></span></div><ul><li><i className="indigo"/>Priority English markets <b>38%</b></li><li><i className="violet"/>Europe <b>18%</b></li><li><i className="gold"/>Africa <b>16%</b></li><li><i className="green"/>Asia-Pacific <b>17%</b></li><li><i className="info"/>Latin America & other <b>11%</b></li></ul><p className="fine-print">Planning visual only. Commercial priority never determines editorial importance.</p></div></section></div>;
}
