const { MobileAppBar, MobileTabBar, StatCard, Card, Badge, Button } = window.KisumDesignSystem_ff14fa;
const M = ({ n, fill, style }) => <span className={"ms" + (fill ? " fill" : "")} style={style}>{n}</span>;

/* ---------------- Data ---------------- */
const KPIS = [
  { label: "Roster Audience", value: "2.4M", caption: "+4.2%", highlight: true },
  { label: "Active Offers", value: "12", caption: "Pending" },
  { label: "Market Sentiment", value: "88.4", caption: "Trending up" },
  { label: "Upcoming Shows", value: "34", caption: "Next 30d" },
];
const EVENTS = [
  { title: "Digital Echoes", city: "Berlin", venue: "Tempodrom", date: "Oct 24", status: "On sale", tone: "brand" },
  { title: "Midnight Jazz", city: "London", venue: "Royal Albert Hall", date: "Nov 02", status: "Sold out", tone: "success" },
  { title: "Neon Genesis", city: "Tokyo", venue: "Zepp", date: "Nov 12", status: "Draft", tone: "neutral" },
];
const OFFERS = [
  { name: "The Velocity", meta: "$45,000 • Flat fee", status: "Negotiating", tone: "warning", icon: "analytics" },
  { name: "Sara Luna", meta: "$120,000 • 85/15 split", status: "Expires soon", tone: "danger", icon: "person" },
  { name: "Cosmic Drift", meta: "$28,000 • Flat fee", status: "Confirmed", tone: "success", icon: "music_note" },
];
const RANKS = [
  { rank: 1, name: "Coachella Valley", loc: "Indio, California", idx: 98.4, pct: 98, trend: "+4.2%", up: true },
  { rank: 2, name: "Tomorrowland", loc: "Boom, Belgium", idx: 96.1, pct: 96, trend: "0.0%", up: null },
  { rank: 3, name: "Glastonbury", loc: "Pilton, UK", idx: 92.7, pct: 92, trend: "+1.8%", up: true },
  { rank: 4, name: "Lollapalooza", loc: "Chicago, USA", idx: 89.9, pct: 89, trend: "−0.5%", up: false },
  { rank: 5, name: "Ultra Miami", loc: "Miami, Florida", idx: 85.2, pct: 85, trend: "+12.4%", up: true },
];
const ARTISTS = [
  { name: "Sara Luna", genre: "Synth-pop", aud: "1.2M" },
  { name: "The Velocity", genre: "Indie rock", aud: "840K" },
  { name: "Cosmic Drift", genre: "Electronic", aud: "612K" },
  { name: "Neon District", genre: "House", aud: "455K" },
];

/* ---------------- Shared bits ---------------- */
function SectionTitle({ children, action }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
      <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-title)", fontWeight: 700, letterSpacing: "-.01em", color: "var(--ink)" }}>{children}</h2>
      {action ? <button style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "var(--text-label)", fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--accent-soft)" }}>{action}</button> : null}
    </div>
  );
}

/* ---------------- Screens ---------------- */
function Dashboard() {
  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 24 }}>
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {KPIS.map((k) => <StatCard key={k.label} {...k} style={{ padding: 16, minHeight: 96 }} />)}
      </section>

      <Card padding={16} style={{ background: "var(--kisum-600)", border: "none", color: "#fff" }}>
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ width: 40, height: 40, flexShrink: 0, borderRadius: "var(--radius)", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.15)" }}><M n="smart_toy" fill style={{ color: "#fff" }} /></div>
          <div>
            <div style={{ fontSize: "var(--text-label-sm)", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 4 }}>Kisum AI Insight</div>
            <p style={{ margin: 0, fontSize: "var(--text-body)", lineHeight: 1.5, color: "#fff" }}>Synth-wave interest in <u>Berlin</u> is up 15% this week. High sell-through probability for a mid-tier venue booking.</p>
            <button style={{ marginTop: 12, background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", padding: "0 0 2px", color: "#fff", fontFamily: "var(--font-body)", fontSize: "var(--text-label)", fontWeight: 700, letterSpacing: ".06em", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>EXPLORE DATA <M n="arrow_forward" style={{ fontSize: 14 }} /></button>
          </div>
        </div>
      </Card>

      <section>
        <SectionTitle action="View map">Upcoming Events</SectionTitle>
        <div className="hs" style={{ margin: "0 -16px", padding: "0 16px" }}>
          {EVENTS.map((e) => (
            <Card key={e.title} padding={0} style={{ minWidth: 260, overflow: "hidden", flexShrink: 0 }}>
              <div style={{ height: 120, background: "linear-gradient(135deg, var(--kisum-400), var(--kisum-700))", position: "relative" }}>
                <span style={{ position: "absolute", top: 10, right: 10 }}><Badge tone={e.tone} uppercase>{e.status}</Badge></span>
              </div>
              <div style={{ padding: 14 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-body-lg)", color: "var(--ink)" }}>{e.title} | {e.city}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6, color: "var(--muted)", fontSize: "var(--text-label)" }}>
                  <M n="calendar_today" style={{ fontSize: 14 }} />{e.date}, 2026 · {e.venue}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle action="View all (12)">Active Booking Offers</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {OFFERS.map((o) => (
            <Card key={o.name} interactive padding={12} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
                <div style={{ width: 40, height: 40, borderRadius: "var(--radius)", background: "var(--accent-tint)", color: "var(--accent-soft)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><M n={o.icon} style={{ fontSize: 20 }} /></div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "var(--text-body)", fontWeight: 700, color: "var(--ink)" }}>{o.name}</div>
                  <div style={{ fontSize: "var(--text-label)", color: "var(--muted)" }}>{o.meta}</div>
                </div>
              </div>
              <Badge tone={o.tone} dot>{o.status}</Badge>
            </Card>
          ))}
        </div>
      </section>

      <Button variant="primary" full iconLeft={<M n="add_circle" fill style={{ fontSize: 18 }} />} style={{ padding: "14px 16px" }}>Create new proposal</Button>
    </div>
  );
}

function Rankings() {
  const [scope, setScope] = React.useState("Global");
  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-headline)", fontWeight: 700, letterSpacing: "-.02em", color: "var(--ink)" }}>Festival Leaderboard</h1>
        <p style={{ margin: "4px 0 0", fontSize: "var(--text-body)", color: "var(--muted)" }}>Real-time popularity index tracking.</p>
      </div>
      <div style={{ display: "flex", padding: 4, background: "var(--surface-muted)", borderRadius: "var(--radius-md)", width: "fit-content" }}>
        {["Global", "Regional"].map((s) => (
          <button key={s} onClick={() => setScope(s)} style={{ padding: "8px 20px", border: "none", cursor: "pointer", borderRadius: "var(--radius)", fontFamily: "var(--font-body)", fontSize: "var(--text-body)", fontWeight: 600, background: scope === s ? "var(--surface-card)" : "transparent", color: scope === s ? "var(--accent)" : "var(--muted)", boxShadow: scope === s ? "var(--shadow-xs)" : "none" }}>{s}</button>
        ))}
      </div>
      <Card padding={0} style={{ overflow: "hidden" }}>
        {RANKS.map((r, i) => (
          <div key={r.rank} style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 14px", borderBottom: i === RANKS.length - 1 ? "none" : "1px solid var(--border-subtle)" }}>
            <span style={{ width: 26, fontFamily: "var(--font-display)", fontSize: "var(--text-title)", fontWeight: 700, color: "var(--accent-soft)", fontVariantNumeric: "tabular-nums" }}>{r.rank}</span>
            <div style={{ width: 40, height: 40, borderRadius: "var(--radius)", background: "linear-gradient(135deg, var(--kisum-400), var(--kisum-700))", flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: "var(--text-body)", fontWeight: 700, color: "var(--ink)" }}>{r.name}</div>
              <div style={{ fontSize: "var(--text-label)", color: "var(--muted)" }}>{r.loc}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "var(--text-body-lg)", fontWeight: 700, color: "var(--ink)", fontVariantNumeric: "tabular-nums" }}>{r.idx}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 2, fontSize: "var(--text-label-sm)", fontWeight: 700, color: r.up === null ? "var(--muted)" : r.up ? "var(--success)" : "var(--danger)" }}>
                <M n={r.up === null ? "horizontal_rule" : r.up ? "trending_up" : "trending_down"} style={{ fontSize: 14 }} />{r.trend}
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

function Artists() {
  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
      <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-headline)", fontWeight: 700, letterSpacing: "-.02em", color: "var(--ink)" }}>Roster</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {ARTISTS.map((a) => (
          <Card key={a.name} interactive padding={12} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--kisum-400), var(--kisum-700))", flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "var(--text-body)", fontWeight: 700, color: "var(--ink)" }}>{a.name}</div>
              <div style={{ fontSize: "var(--text-label)", color: "var(--muted)" }}>{a.genre}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "var(--text-body)", fontWeight: 700, color: "var(--ink)" }}>{a.aud}</div>
              <div style={{ fontSize: "var(--text-label-sm)", color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".06em" }}>Audience</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function AIChat() {
  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
      <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-headline)", fontWeight: 700, letterSpacing: "-.02em", color: "var(--ink)" }}>Kisum AI</h1>
      <Card padding={14} style={{ alignSelf: "flex-start", maxWidth: "85%", background: "var(--surface-muted)", border: "none" }}>
        <p style={{ margin: 0, fontSize: "var(--text-body)", lineHeight: 1.5, color: "var(--text-body)" }}>Ask me about market sentiment, artist availability, or venue fit.</p>
      </Card>
      <Card padding={14} style={{ alignSelf: "flex-end", maxWidth: "85%", background: "var(--kisum-600)", border: "none" }}>
        <p style={{ margin: 0, fontSize: "var(--text-body)", lineHeight: 1.5, color: "#fff" }}>Which festivals are rising fastest in APAC?</p>
      </Card>
      <Card padding={14} style={{ alignSelf: "flex-start", maxWidth: "85%", background: "var(--surface-muted)", border: "none" }}>
        <p style={{ margin: 0, fontSize: "var(--text-body)", lineHeight: 1.5, color: "var(--text-body)" }}>Fuji Rock (+12) leads APAC risers this quarter with exceptional ticket velocity. Want a booking window analysis?</p>
      </Card>
    </div>
  );
}

/* ---------------- Root ---------------- */
function App() {
  const [dark, setDark] = React.useState(false);
  const [tab, setTab] = React.useState("dashboard");
  const TITLES = { dashboard: ["Dashboard", "Welcome, Lead Promoter"], rankings: ["Rankings", "Market performance"], artists: ["Artists", "Your roster"], chat: ["AI Chat", "Kisum intelligence"] };
  const items = [
    { key: "chat", label: "AI Chat", icon: <M n="smart_toy" />, activeIcon: <M n="smart_toy" fill /> },
    { key: "artists", label: "Artists", icon: <M n="group" />, activeIcon: <M n="group" fill /> },
    { key: "dashboard", label: "Dashboard", icon: <M n="dashboard" />, activeIcon: <M n="dashboard" fill /> },
    { key: "rankings", label: "Rankings", icon: <M n="leaderboard" />, activeIcon: <M n="leaderboard" fill /> },
  ];
  return (
    <div className={dark ? "dark" : ""}>
      <div className="phone">
        <MobileAppBar eyebrow={TITLES[tab][0]} title={TITLES[tab][1]}
          brand={<img src="../../assets/icon.svg" alt="Kisum" style={{ height: 24 }} />}
          right={<>
            <button onClick={() => setDark(!dark)} aria-label="Toggle theme" style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted)", display: "inline-flex" }}><M n={dark ? "light_mode" : "dark_mode"} style={{ fontSize: 22 }} /></button>
            <M n="notifications" style={{ color: "var(--muted)", fontSize: 22 }} />
          </>} />
        <div className="scroll">
          {tab === "dashboard" && <Dashboard />}
          {tab === "rankings" && <Rankings />}
          {tab === "artists" && <Artists />}
          {tab === "chat" && <AIChat />}
        </div>
        <MobileTabBar items={items} value={tab} onChange={setTab} />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
