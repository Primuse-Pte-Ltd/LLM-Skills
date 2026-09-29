const { Button, IconButton, Badge, Card, Avatar, StatCard, SectionHeader, TrackRow, Tabs } = window.KisumDesignSystem_ff14fa;
const Icon = window.Icon;

const SONGS = [
  { rank: 1, title: "Cruel Summer", subtitle: "Lover • 2019", metric: "3.4B", trend: "1.2M" },
  { rank: 2, title: "Blank Space", subtitle: "1989 • 2014", metric: "2.5B", trend: "1.1M" },
  { rank: 3, title: "Anti-Hero", subtitle: "Midnights • 2022", metric: "2.0B", trend: "398K" },
  { rank: 4, title: "Shake It Off", subtitle: "1989 • 2014", metric: "1.9B", trend: "818K" },
  { rank: 5, title: "cardigan", subtitle: "folklore • 2020", metric: "2.3B", trend: "609K" },
  { rank: 6, title: "Don't Blame Me", subtitle: "reputation • 2017", metric: "1.6B", trend: "453K" },
];
const PLATFORMS = [
  { name: "Instagram", value: "273.8M", pct: 37, leader: true },
  { name: "Spotify Followers", value: "158.4M", pct: 21 },
  { name: "X (Twitter)", value: "80.6M", pct: 11 },
  { name: "Facebook", value: "78.6M", pct: 11 },
  { name: "YouTube", value: "63.2M", pct: 8 },
];

function TopBar() {
  return (
    <header style={{ height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", borderBottom: "1px solid var(--border)", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
        <img src="../../assets/logo.svg" alt="Kisum" style={{ height: 24 }} />
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-body)", color: "var(--muted)", letterSpacing: ".02em" }}>Artist Insights</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <IconButton label="Search"><Icon name="search" size={20} /></IconButton>
        <IconButton label="Settings"><Icon name="settings" size={20} /></IconButton>
        <Avatar name="Taylor Swift" size={36} />
      </div>
    </header>
  );
}

function Hero({ tab, setTab }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 32, alignItems: "center" }}>
        <div style={{ height: 380, borderRadius: "var(--radius-lg)", background: "linear-gradient(150deg, var(--kisum-200), var(--kisum-700))", boxShadow: "var(--shadow-lifted)" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-display)", fontWeight: 800, letterSpacing: "-.025em", lineHeight: 1.05 }}>Taylor Swift</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
              {["Country", "Pop", "Female Vocalists", "Singer-songwriter"].map((g) => <Badge key={g} tone="neutral">{g}</Badge>)}
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-headline)", fontWeight: 600, margin: "0 0 8px" }}>About</h3>
            <p style={{ margin: 0, fontSize: "var(--text-body-lg)", lineHeight: 1.6, color: "#475569", maxWidth: "60ch" }}>American singer-songwriter known for narrative songwriting. Signed to Sony/ATV at 14, her pop crossover began with <em>Fearless</em> (2008). <a href="#">Read more…</a></p>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <MiniStat icon="briefcase" label="Management" value="13 Management" />
            <MiniStat icon="ticket" label="Touring" value="Messina Touring Group" />
          </div>
        </div>
      </div>
      <Tabs tabs={["Overview", "Team", "Biography", "Analytics", "Shows", "Discography"]} value={tab} onChange={setTab} />
    </div>
  );
}

function MiniStat({ icon, label, value }) {
  return (
    <Card padding={16} style={{ display: "flex", alignItems: "center", gap: 12, boxShadow: "var(--shadow-lifted)", border: "none" }}>
      <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--kisum-50)", color: "var(--kisum-600)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={icon} size={20} /></div>
      <div>
        <div style={{ fontSize: "var(--text-label-sm)", color: "var(--muted)", fontWeight: 600 }}>{label}</div>
        <div style={{ fontSize: "var(--text-body)", fontWeight: 700 }}>{value}</div>
      </div>
    </Card>
  );
}

function App() {
  const [tab, setTab] = React.useState("Overview");
  return (
    <div>
      <TopBar />
      <main style={{ maxWidth: "var(--page-max)", margin: "0 auto", padding: "40px", display: "flex", flexDirection: "column", gap: 56 }}>
        <Hero tab={tab} setTab={setTab} />

        <section style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          <StatCard label="Total Audience" value="745.9M" caption="Followers across all platforms" icon={<Icon name="users" size={18} />} highlight />
          <StatCard label="Audience Leader" value="273.8M" caption="Top: Instagram" icon={<Icon name="star" size={18} />} />
          <StatCard label="Platforms Tracked" value="21" caption="Live metrics from providers" icon={<Icon name="database" size={18} />} />
          <StatCard label="Monthly Growth" value="+4.2%" caption="Trailing 30 days" icon={<Icon name="trending-up" size={18} />} />
        </section>

        <section>
          <SectionHeader title="Top Songs" count={SONGS.length} icon={<Icon name="music" size={20} />}
            description="All-time top streamed tracks from Spotify and global charts."
            action={<Button variant="secondary" size="sm">View all tracks</Button>} />
          <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 40px" }}>
            {SONGS.map((s) => <TrackRow key={s.rank} {...s} thumb={null} onClick={() => {}} />)}
          </div>
        </section>

        <section>
          <SectionHeader title="Audience by Platform" description="Top platforms by follower count"
            action={<span style={{ fontSize: "var(--text-label)", color: "var(--muted)", fontWeight: 600 }}>Updated 7m ago</span>} />
          <Card style={{ marginTop: 20, padding: 32 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {PLATFORMS.map((p) => (
                <div key={p.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "var(--text-label)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}>{p.name}{p.leader && <Badge tone="brand" uppercase>Leader</Badge>}</span>
                    <span style={{ fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{p.value}<span style={{ color: "var(--muted)", fontWeight: 400, marginLeft: 6 }}>{p.pct}%</span></span>
                  </div>
                  <div style={{ height: 12, background: "var(--kisum-50)", borderRadius: "var(--radius-full)", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${p.pct}%`, background: "var(--kisum-600)", borderRadius: "var(--radius-full)" }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
