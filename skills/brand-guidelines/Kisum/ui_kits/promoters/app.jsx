const { Button, IconButton, Badge, Card, Avatar, Input, Select, StatCard, SectionHeader, TrackRow, DataTable, NavItem, ArtistCard, Tabs } = window.KisumDesignSystem_ff14fa;
const Icon = window.Icon;

/* ---------------- Data ---------------- */
const LISTINGS = [
  { id: 1, name: "Shakira", location: "Barranquilla, Colombia", agency: "LGM Agency", statusLabel: "Available for Tours", statusTone: "success", window: "Dec 01 — Dec 20", territory: "China", tags: ["Concert", "Festival"], badge: "Non-Official" },
  { id: 2, name: "Backstreet Boys", location: "Florida, USA", agency: "LGM Agency", statusLabel: "Limited Avails", statusTone: "warning", window: "Mar 01 — Apr 13", territory: "Asia Pacific", tags: ["Stadium Tour", "Concert"], badge: "Non-Official" },
  { id: 3, name: "Rosalía", location: "Barcelona, Spain", agency: "Primary Talent", statusLabel: "Available", statusTone: "success", window: "Jun 05 — Jul 30", territory: "Europe", tags: ["Festival", "Arena"], badge: "Official" },
];
const REQUESTS = [
  { id: 1, artist: "Dua Lipa", promoter: "Live Nation MX", date: "Aug 14, 2026", fee: "$1.20M", status: "Confirmed", tone: "success" },
  { id: 2, artist: "The Weeknd", promoter: "Primuse Entertainment", date: "Sep 02, 2026", fee: "$2.75M", status: "Negotiating", tone: "warning" },
  { id: 3, artist: "Karol G", promoter: "OCESA", date: "Oct 19, 2026", fee: "$980K", status: "Draft", tone: "neutral" },
  { id: 4, artist: "Coldplay", promoter: "Primuse Entertainment", date: "Nov 08, 2026", fee: "$3.40M", status: "Declined", tone: "danger" },
];

/* ---------------- App Shell ---------------- */
function Sidebar({ view, setView }) {
  const NAV = [
    { key: "dashboard", label: "Dashboard", icon: "layout-dashboard" },
    { key: "marketplace", label: "Marketplace", icon: "store" },
    { key: "requests", label: "Requests", icon: "inbox", badge: 4 },
    { key: "artists", label: "Artists", icon: "sparkles" },
  ];
  return (
    <aside style={{ width: "var(--sidebar-width)", flexShrink: 0, background: "var(--surface-sidebar)", borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 80, display: "flex", alignItems: "center", padding: "0 28px", borderBottom: "1px solid var(--border)" }}>
        <img src="../../assets/logo.svg" alt="Kisum" style={{ height: 28 }} />
      </div>
      <div style={{ padding: 20 }}>
        <button style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: 10, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-card)", cursor: "pointer", boxShadow: "var(--shadow-xs)" }}>
          <Avatar name="Primuse Entertainment" square size={40} style={{ background: "var(--ink)", color: "#fff" }} />
          <div style={{ textAlign: "left", overflow: "hidden", flex: 1 }}>
            <div style={{ fontSize: "var(--text-body)", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Primuse Entertainment</div>
            <div style={{ fontSize: "var(--text-label-sm)", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>Promoters</div>
          </div>
          <Icon name="chevrons-up-down" size={16} color="var(--muted)" />
        </button>
      </div>
      <nav style={{ flex: 1, padding: "0 12px", display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ fontSize: "var(--text-label-sm)", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "var(--muted)", padding: "8px 16px 4px" }}>Management</div>
        {NAV.map((n) => (
          <NavItem key={n.key} icon={<Icon name={n.icon} />} label={n.label} badge={n.badge}
            active={view === n.key} onClick={() => setView(n.key)} />
        ))}
      </nav>
      <div style={{ padding: 16, borderTop: "1px solid var(--border)" }}>
        <button style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: 8, background: "none", border: "none", borderRadius: "var(--radius-card)", cursor: "pointer" }}>
          <Avatar name="Priya Anand" size={40} />
          <div style={{ textAlign: "left", flex: 1 }}>
            <div style={{ fontSize: "var(--text-label-sm)", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)" }}>Admin</div>
            <div style={{ fontSize: "var(--text-body)", fontWeight: 700 }}>Priya Anand</div>
          </div>
          <Icon name="chevrons-up-down" size={16} color="var(--muted)" />
        </button>
      </div>
    </aside>
  );
}

function Header({ crumbs, onNew }) {
  return (
    <header style={{ height: 80, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", borderBottom: "1px solid var(--border)", background: "rgba(255,255,255,0.6)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 10 }}>
      <nav style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "var(--text-label)", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>
        {crumbs.map((c, i) => (
          <React.Fragment key={c}>
            {i > 0 && <span style={{ color: "var(--border)" }}>/</span>}
            <span style={{ color: i === crumbs.length - 1 ? "var(--ink)" : "var(--muted)" }}>{c}</span>
          </React.Fragment>
        ))}
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <IconButton label="Notifications"><Icon name="bell" size={20} /></IconButton>
        <div style={{ width: 1, height: 24, background: "var(--border)" }} />
        <Button variant="primary" iconLeft={<Icon name="plus" size={16} />} onClick={onNew}>New Booking</Button>
      </div>
    </header>
  );
}

/* ---------------- Screens ---------------- */
function Dashboard() {
  return (
    <div style={{ maxWidth: "var(--page-max)", margin: "0 auto", padding: 40, display: "flex", flexDirection: "column", gap: 40 }}>
      <div>
        <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-page-title)", fontWeight: 700, letterSpacing: "-.02em" }}>Dashboard</h1>
        <p style={{ margin: "8px 0 0", fontSize: "var(--text-body-lg)", lineHeight: 1.5, color: "#64748B" }}>Your booking pipeline at a glance — Q3 2026.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
        <StatCard label="Open Requests" value="18" caption="4 need your reply" icon={<Icon name="inbox" size={18} />} highlight />
        <StatCard label="Confirmed Value" value="$12.4M" caption="This quarter" icon={<Icon name="check-circle" size={18} />} />
        <StatCard label="Active Listings" value="1,248" caption="Across marketplace" icon={<Icon name="store" size={18} />} />
        <StatCard label="Avg. Close Time" value="6.2d" caption="−1.1d vs last Q" icon={<Icon name="timer" size={18} />} />
      </div>
      <div>
        <SectionHeader title="Recent Requests" count={REQUESTS.length} icon={<Icon name="inbox" size={20} />}
          action={<Button variant="secondary" size="sm">View all</Button>} />
        <div style={{ marginTop: 16 }}>
          <RequestsTable compact />
        </div>
      </div>
    </div>
  );
}

function Marketplace({ onEnquiry }) {
  const [tab, setTab] = React.useState("All");
  const [q, setQ] = React.useState("");
  const filtered = LISTINGS.filter((l) => l.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div style={{ maxWidth: "var(--page-max)", margin: "0 auto", padding: 40, display: "flex", flexDirection: "column", gap: 32 }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
        <div style={{ maxWidth: 640 }}>
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-display)", fontWeight: 800, letterSpacing: "-.025em", lineHeight: 1.05 }}>Marketplace</h1>
          <p style={{ margin: "12px 0 0", fontSize: "var(--text-body-lg)", lineHeight: 1.55, color: "#64748B" }}>Discover exclusive artist listings and premium availabilities. Negotiate directly with top-tier talent management in a secure, transparent environment.</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <div style={{ display: "flex" }}>
            {[0, 1, 2].map((i) => <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", border: "2px solid var(--surface)", background: "var(--kisum-200)", marginLeft: i ? -8 : 0 }} />)}
          </div>
          <span style={{ fontSize: "var(--text-label)", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)" }}>1.2k+ Active</span>
        </div>
      </div>

      <Card padding={8} style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <Input placeholder="Search by name, genre, location…" iconLeft={<Icon name="search" size={18} />} value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <Button variant="secondary" iconLeft={<Icon name="sliders-horizontal" size={16} />}>Refine</Button>
        <div style={{ width: 1, height: 28, background: "var(--border)" }} />
        <Tabs tabs={["All", "Official", "Secondary"]} value={tab} onChange={setTab} style={{ border: "none" }} />
      </Card>

      <div>
        <SectionHeader title="Listings" count={filtered.length}
          action={<span style={{ fontSize: "var(--text-label)", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>{filtered.length} results</span>} />
        <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 32 }}>
          {filtered.map((l) => (
            <ArtistCard key={l.id} {...l} onEnquiry={() => onEnquiry(l)} onDetails={() => onEnquiry(l)} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RequestsTable({ compact }) {
  const cols = [
    { key: "artist", label: "Artist", render: (r) => <span style={{ fontWeight: 600 }}>{r.artist}</span> },
    { key: "promoter", label: "Promoter" },
    { key: "date", label: "Show Date" },
    { key: "fee", label: "Fee", align: "right", render: (r) => <span style={{ fontWeight: 700 }}>{r.fee}</span> },
    { key: "status", label: "Status", render: (r) => <Badge tone={r.tone} dot>{r.status}</Badge> },
  ];
  return <DataTable columns={cols} rows={compact ? REQUESTS.slice(0, 4) : REQUESTS} onRowClick={() => {}} />;
}

function Requests() {
  return (
    <div style={{ maxWidth: "var(--page-max)", margin: "0 auto", padding: 40, display: "flex", flexDirection: "column", gap: 32 }}>
      <div>
        <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-page-title)", fontWeight: 700, letterSpacing: "-.02em" }}>Booking Requests</h1>
        <p style={{ margin: "8px 0 0", fontSize: "var(--text-body-lg)", color: "#64748B" }}>All inbound and outbound offers across your roster.</p>
      </div>
      <RequestsTable />
    </div>
  );
}

function Placeholder({ title }) {
  return (
    <div style={{ maxWidth: "var(--page-max)", margin: "0 auto", padding: 40 }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-page-title)", fontWeight: 700 }}>{title}</h1>
      <Card style={{ marginTop: 24, padding: 64, textAlign: "center", border: "2px dashed var(--border)" }}>
        <div style={{ color: "var(--muted)" }}><Icon name="folder-open" size={40} /></div>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-title)", margin: "16px 0 4px" }}>Nothing here yet</p>
        <p style={{ color: "var(--muted)", margin: 0 }}>This surface is part of the Kisum Promoters shell.</p>
      </Card>
    </div>
  );
}

/* ---------------- Enquiry modal + toast ---------------- */
function EnquiryModal({ listing, onClose, onSend }) {
  if (!listing) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(24,24,27,0.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50, padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 480, background: "var(--surface)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-modal)", overflow: "hidden" }}>
        <div style={{ padding: "24px 28px", borderBottom: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: "var(--text-label-sm)", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>Send Enquiry</div>
            <h2 style={{ margin: "4px 0 0", fontFamily: "var(--font-display)", fontSize: "var(--text-headline)", fontWeight: 700 }}>{listing.name}</h2>
          </div>
          <IconButton label="Close" onClick={onClose}><Icon name="x" size={20} /></IconButton>
        </div>
        <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Input label="Territory" defaultValue={listing.territory} />
            <Input label="Window" defaultValue={listing.window} />
          </div>
          <Select label="Event type" options={listing.tags} />
          <Input label="Proposed fee (USD)" placeholder="e.g. 850,000" iconLeft={<Icon name="dollar-sign" size={16} />} />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: "var(--text-label)", fontWeight: 600, color: "var(--text-body)" }}>Message</label>
            <textarea rows={3} defaultValue={`Hi ${listing.agency}, we'd love to discuss availability for ${listing.name}.`} style={{ font: "inherit", fontSize: "var(--text-body)", padding: 12, borderRadius: "var(--radius-btn)", border: "1px solid var(--border)", resize: "vertical", color: "var(--ink)" }} />
          </div>
        </div>
        <div style={{ padding: "18px 28px", borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "flex-end", gap: 12 }}>
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button variant="primary" pill iconLeft={<Icon name="send" size={16} />} onClick={onSend}>Send Enquiry</Button>
        </div>
      </div>
    </div>
  );
}

function Toast({ msg }) {
  if (!msg) return null;
  return (
    <div style={{ position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 60, display: "flex", alignItems: "center", gap: 10, padding: "12px 20px", background: "var(--ink)", color: "#fff", borderRadius: "var(--radius-full)", boxShadow: "var(--shadow-modal)", fontSize: "var(--text-body)", fontWeight: 600 }}>
      <span style={{ color: "#4ADE80", display: "inline-flex" }}><Icon name="check-circle" size={18} /></span>{msg}
    </div>
  );
}

/* ---------------- Root ---------------- */
const CRUMBS = { dashboard: ["Kisum", "Dashboard"], marketplace: ["Kisum", "Booking", "Marketplace"], requests: ["Kisum", "Booking", "Requests"], artists: ["Kisum", "Artists"] };

function App() {
  const [view, setView] = React.useState("marketplace");
  const [enquiry, setEnquiry] = React.useState(null);
  const [toast, setToast] = React.useState("");
  const send = () => { const n = enquiry.name; setEnquiry(null); setToast(`Enquiry sent to ${n}`); setTimeout(() => setToast(""), 3200); };
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar view={view} setView={setView} />
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Header crumbs={CRUMBS[view]} onNew={() => setView("marketplace")} />
        <div style={{ flex: 1, overflowY: "auto" }}>
          {view === "dashboard" && <Dashboard />}
          {view === "marketplace" && <Marketplace onEnquiry={setEnquiry} />}
          {view === "requests" && <Requests />}
          {view === "artists" && <Placeholder title="Artists" />}
        </div>
      </main>
      <EnquiryModal listing={enquiry} onClose={() => setEnquiry(null)} onSend={send} />
      <Toast msg={toast} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
