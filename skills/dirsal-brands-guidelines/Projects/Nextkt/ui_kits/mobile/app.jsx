const { MobileAppBar, MobileTabBar, EventCard, EventRow, TicketTier, Tabs, Badge, Button, IconButton, StatCard, NavItem } = window.NextktDesignSystem_1c6e87;
const M = ({ n, fill, size, style }) => <span aria-hidden="true" className={"ms" + (fill ? " fill" : "")} style={{ fontSize: size, ...style }}>{n}</span>;

/* ---------------- Data ---------------- */
const G = {
  stage: "radial-gradient(120% 90% at 30% 15%, #488790 0%, #1D1E4C 58%, #06222B 100%)",
  haze: "radial-gradient(100% 80% at 70% 10%, #A7D8E4 0%, #1C6E87 38%, #1D1E4C 85%)",
  steel: "linear-gradient(160deg, #417292 0%, #2A5566 45%, #06222B 100%)",
  night: "radial-gradient(90% 70% at 50% 100%, #2F6D84 0%, #1D1E4C 55%, #0B0C24 100%)",
};
const money = (cents) => "SG$ " + (cents / 100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const PREMIERE = [
  { title: "Midnight Echoes", eyebrow: "OCT 24 • JAKARTA", venue: "Istora Senayan", img: G.stage },
  { title: "Neon Pulse Festival", eyebrow: "NOV 08 • JAKARTA", venue: "Beach City Stadium", img: G.haze },
  { title: "Island Sound", eyebrow: "DEC 06 • BALI", venue: "GWK Cultural Park", img: G.steel },
];
const UPCOMING = [
  { m: "NOV", d: "02", title: "Velvet Jazz Nights", venue: "Motion Blue", city: "Jakarta", price: "From SG$ 98.00" },
  { m: "NOV", d: "15", title: "Comedy Underground", venue: "Kuningan City Hall", city: "Jakarta", price: "From SG$ 58.00" },
  { m: "NOV", d: "22", title: "Solar Drift", venue: "Sabuga", city: "Bandung", price: "From SG$ 78.00" },
];
const TICKETS = [
  { id: "A1F3C09B", event: "Midnight Echoes", label: "Fri, Oct 24 · Doors 8:00 PM", section: "GA Floor", qty: 2, code: "NK7Q-2K9D-X4", img: G.stage },
  { id: "7D20E4AA", event: "Velvet Jazz Nights", label: "Sun, Nov 2 · Doors 7:00 PM", section: "VIP", qty: 1, code: "NK3M-8PLA-Q1", img: G.haze },
];
const VENUES = [
  { name: "Istora Senayan", city: "Jakarta", events: 6, img: G.stage },
  { name: "Beach City Stadium", city: "Jakarta", events: 3, img: G.steel },
  { name: "Motion Blue", city: "Jakarta", events: 9, img: G.haze },
  { name: "GWK Cultural Park", city: "Bali", events: 2, img: G.night },
];
const CATS = ["All Events", "Concerts", "Festivals", "Comedy", "Theatre"];

const pad = { padding: "0 var(--margin-mobile)" };
const h3 = { margin: 0, fontSize: "var(--text-headline-md)", lineHeight: "var(--text-headline-md-lh)", fontWeight: 600, color: "var(--on-surface)" };
const caps = { fontSize: "var(--text-label-caps)", fontWeight: 700, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase" };

/* ---------------- Screens ---------------- */
function Discover({ openEvent }) {
  const [cat, setCat] = React.useState("All Events");
  return (
    <div>
      <section style={{ position: "relative", aspectRatio: "4 / 5", overflow: "hidden" }} onClick={openEvent}>
        <div style={{ position: "absolute", inset: 0, background: G.stage }} />
        <div style={{ position: "absolute", inset: 0, background: "var(--scrim-hero)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "var(--margin-mobile)", display: "flex", flexDirection: "column", gap: 8, color: "#fff" }}>
          <Badge variant="glass" size="md" style={{ alignSelf: "flex-start", letterSpacing: "var(--tracking-widest)" }}>Featured</Badge>
          <h2 style={{ margin: 0, fontSize: "var(--text-headline-md)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "var(--tracking-display)" }}>Midnight Echoes</h2>
          <p style={{ margin: 0, color: "rgb(255 255 255 / .9)" }}>Istora Senayan, Jakarta. Tickets from SG$ 128.00.</p>
          <div style={{ marginTop: 16 }}><Button onClick={openEvent}>Book Now</Button></div>
        </div>
      </section>

      <section style={{ ...pad, paddingTop: "var(--stack-lg)", paddingBottom: 8 }}>
        <Tabs variant="chips" tabs={CATS} value={cat} onChange={setCat} />
      </section>

      <section style={{ ...pad, paddingTop: 16, paddingBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
          <h3 style={h3}>Premiere Events</h3>
          <span style={{ ...caps, fontSize: "var(--text-label-sm)", letterSpacing: ".05em", color: "var(--primary)" }}>See All</span>
        </div>
        <div className="hs" style={{ margin: "0 calc(var(--margin-mobile) * -1)", padding: "0 var(--margin-mobile) 16px" }}>
          {PREMIERE.map((e) => <EventCard key={e.title} variant="poster" title={e.title} eyebrow={e.eyebrow} venue={e.venue} image={e.img} badge="ON SALE" onClick={openEvent} />)}
        </div>
      </section>

      <section style={{ margin: "var(--stack-lg) var(--margin-mobile)", borderRadius: "var(--radius-card)", background: "var(--primary-container)", color: "var(--on-primary-container)", padding: "var(--stack-lg)" }}>
        <h3 style={{ ...h3, color: "inherit", marginBottom: 8 }}>Never Miss a Show</h3>
        <p style={{ margin: "0 0 16px", opacity: 0.9, lineHeight: 1.5 }}>Get personalized alerts and exclusive presale access for your favorite artists.</p>
        <input type="email" placeholder="Email address" style={{ width: "100%", height: 48, border: "none", borderRadius: "var(--radius-btn)", background: "var(--surface-container-lowest)", padding: "0 16px", fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", color: "var(--on-surface)", marginBottom: 8 }} />
        <Button full size="lg">Notify Me</Button>
      </section>

      <section style={{ ...pad, paddingTop: 16, paddingBottom: 32 }}>
        <h3 style={{ ...h3, marginBottom: 16 }}>Upcoming Events</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {UPCOMING.map((e, i) => <EventRow key={e.title} month={e.m} day={e.d} title={e.title} venue={e.venue} city={e.city} price={e.price} last={i === UPCOMING.length - 1} onClick={openEvent} />)}
        </div>
      </section>
    </div>
  );
}

function EventScreen({ back, onAdd }) {
  const [ga, setGa] = React.useState(1);
  const [vip, setVip] = React.useState(0);
  const total = ga * 12800 + vip * 34800;
  return (
    <div style={{ paddingBottom: 96 }}>
      <section style={{ position: "relative", aspectRatio: "4 / 5", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: G.stage }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, var(--background) 0%, transparent 45%)" }} />
        <IconButton label="Go back" variant="floating" onClick={back} style={{ position: "absolute", top: 16, left: 16 }}><M n="arrow_back" /></IconButton>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "0 var(--margin-mobile) 8px" }}>
          <Badge tone="on-sale" style={{ marginBottom: 8 }}>On Sale</Badge>
          <h2 style={{ margin: 0, fontSize: "var(--text-headline-lg-mobile)", lineHeight: 1.2, fontWeight: 600, color: "var(--on-surface)" }}>Midnight Echoes</h2>
        </div>
      </section>
      <section style={{ ...pad, display: "flex", flexDirection: "column", gap: 6, color: "var(--on-surface-variant)", fontSize: "var(--text-sm)" }}>
        <span style={{ display: "flex", gap: 8, alignItems: "center" }}><M n="calendar_month" size={18} style={{ color: "var(--primary)" }} />Friday, October 24, 2026</span>
        <span style={{ display: "flex", gap: 8, alignItems: "center" }}><M n="schedule" size={18} style={{ color: "var(--primary)" }} />Doors 8:00 PM</span>
        <span style={{ display: "flex", gap: 8, alignItems: "center" }}><M n="location_on" size={18} style={{ color: "var(--primary)" }} />Istora Senayan, Jakarta</span>
      </section>
      <section style={{ ...pad, paddingTop: "var(--stack-lg)" }}>
        <h3 style={{ ...caps, margin: "0 0 12px", color: "var(--secondary)" }}>Select Tickets</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <TicketTier badge="GA" tone="ga" price="SG$ 128.00" subtitle="Standing floor" available={214} qty={ga} onChange={setGa} />
          <TicketTier badge="VIP" tone="vip" price="SG$ 348.00" subtitle="Fast lane + lounge access" available={12} qty={vip} onChange={setVip} />
          <TicketTier badge="TABLES" tone="tables" price="SG$ 2,400.00" subtitle="Seats 8" soldOut />
        </div>
      </section>
      <section style={{ ...pad, paddingTop: "var(--stack-lg)" }}>
        <h3 style={{ ...caps, margin: "0 0 8px", color: "var(--secondary)" }}>About the Event</h3>
        <p style={{ margin: 0, lineHeight: 1.5, color: "var(--on-surface-variant)" }}>A two-hour synth-pop set under the Istora dome — new stage design, full live band. Mobile entry only.</p>
      </section>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 96, padding: "12px var(--margin-mobile)", background: "var(--glass-panel)", backdropFilter: "blur(12px)", borderTop: "1px solid var(--outline-variant)", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "var(--text-label-sm)", color: "var(--on-surface-variant)" }}>Total · {ga + vip} ticket{ga + vip === 1 ? "" : "s"}</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "var(--primary)" }}>{money(total)}</div>
        </div>
        <Button variant="container" size="lg" disabled={!total} onClick={() => onAdd(ga + vip)} iconRight={<M n="confirmation_number" size={20} />}>Add to Cart</Button>
      </div>
    </div>
  );
}

function Tickets() {
  const [qr, setQr] = React.useState(null);
  return (
    <div style={{ ...pad, paddingTop: "var(--stack-lg)", paddingBottom: 32 }}>
      <h1 style={{ margin: 0, fontSize: "var(--text-headline-lg-mobile)", fontWeight: 600, color: "var(--primary)" }}>My Tickets</h1>
      <p style={{ margin: "4px 0 var(--stack-lg)", color: "var(--on-surface-variant)" }}>Your confirmed orders and mobile entry codes.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--stack-md)" }}>
        {TICKETS.map((t) => (
          <div key={t.id} style={{ overflow: "hidden", borderRadius: "var(--radius-card)", background: "var(--surface-container-lowest)", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ height: 150, background: t.img }} />
            <div style={{ padding: "var(--stack-md)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <Badge tone="on-sale" variant="tint">Confirmed</Badge>
                <span style={{ ...caps, color: "var(--on-surface-variant)" }}>#{t.id}</span>
              </div>
              <h3 style={{ ...h3, marginTop: 8 }}>{t.event}</h3>
              <p style={{ margin: "4px 0 0", color: "var(--on-surface-variant)" }}>{t.label}</p>
              <div style={{ marginTop: "var(--stack-md)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: 16 }}>
                  <div><p style={{ ...caps, margin: 0, color: "var(--on-surface-variant)", opacity: 0.6 }}>Section</p><p style={{ margin: 0, fontWeight: 700 }}>{t.section}</p></div>
                  <div><p style={{ ...caps, margin: 0, color: "var(--on-surface-variant)", opacity: 0.6 }}>Qty</p><p style={{ margin: 0, fontWeight: 700 }}>{t.qty}</p></div>
                </div>
                <Button onClick={() => setQr(t)} iconLeft={<M n="qr_code_2" size={20} />}>View QR</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {qr ? (
        <div role="dialog" aria-modal="true" onClick={() => setQr(null)} style={{ position: "absolute", inset: 0, zIndex: 100, background: "var(--modal-scrim)", display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--margin-mobile)" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", borderRadius: "var(--radius-modal)", background: "var(--glass-panel)", backdropFilter: "blur(12px)", padding: "var(--stack-lg)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--stack-md)" }}>
            <div style={{ alignSelf: "flex-end" }}><IconButton label="Close" onClick={() => setQr(null)}><M n="close" /></IconButton></div>
            <h4 style={h3}>{qr.event}</h4>
            <div style={{ borderRadius: "var(--radius-card)", border: "4px solid var(--primary)", background: "#fff", padding: 24 }}>
              <div style={{ width: 176, height: 176, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surface-container-high)" }}><M n="qr_code_2" size={112} style={{ color: "var(--primary)" }} /></div>
            </div>
            <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 700, letterSpacing: ".1em" }}>{qr.code}</p>
            <p style={{ margin: 0, color: "var(--on-surface-variant)" }}>{qr.label.split(" · ")[0]} • {qr.section}</p>
            <Button variant="container" full size="lg">Open ticket page</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Venues() {
  return (
    <div style={{ ...pad, paddingTop: "var(--stack-lg)", paddingBottom: 32 }}>
      <h1 style={{ margin: "0 0 var(--stack-md)", fontSize: "var(--text-headline-lg-mobile)", fontWeight: 600 }}>Venues</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {VENUES.map((v) => (
          <div key={v.name} style={{ display: "flex", gap: 12, alignItems: "center", padding: 8, borderRadius: "var(--radius-card)", border: "1px solid var(--outline-variant)", background: "var(--surface-container-lowest)" }}>
            <div style={{ width: 72, height: 72, borderRadius: "var(--radius-btn)", background: v.img, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700 }}>{v.name}</div>
              <div style={{ fontSize: "var(--text-label-sm)", color: "var(--on-surface-variant)", display: "flex", alignItems: "center", gap: 2 }}><M n="location_on" size={14} />{v.city}</div>
              <div style={{ fontSize: "var(--text-label-sm)", fontWeight: 700, color: "var(--primary)", marginTop: 2 }}>{v.events} upcoming events</div>
            </div>
            <M n="chevron_right" style={{ color: "var(--on-surface-variant)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Profile() {
  const [nav, setNav] = React.useState("Dashboard");
  return (
    <div style={{ ...pad, paddingTop: "var(--stack-lg)", paddingBottom: 32 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "var(--stack-lg)" }}>
        <div style={{ width: 56, height: 56, borderRadius: "var(--radius-circle)", background: "var(--primary-container)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 20 }}>AP</div>
        <div><div style={{ fontWeight: 700, fontSize: "var(--text-body-lg)" }}>Ayu Pratiwi</div><div style={{ fontSize: "var(--text-label-sm)", color: "var(--on-surface-variant)" }}>ayu@example.com</div></div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: "var(--stack-lg)" }}>
        <StatCard icon={<M n="confirmation_number" />} value="2" label="Upcoming tickets" />
        <StatCard icon={<M n="stars" />} value="2,450" label="Reward points" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {[["dashboard", "Dashboard"], ["stars", "Points & Rewards"], ["confirmation_number", "My Tickets"], ["person", "Profile"], ["shield", "Security"]].map(([i, l]) => (
          <NavItem key={l} icon={i} label={l} active={nav === l} onClick={() => setNav(l)} />
        ))}
        <div style={{ borderTop: "1px solid var(--outline-variant)", marginTop: 8, paddingTop: 8 }}><NavItem icon="logout" label="Sign Out" danger /></div>
      </div>
    </div>
  );
}

/* ---------------- Root ---------------- */
function Phone() {
  const [tab, setTab] = React.useState("discover");
  const [event, setEvent] = React.useState(false);
  const [cart, setCart] = React.useState(0);
  const scroll = React.useRef(null);
  React.useEffect(() => { scroll.current && scroll.current.scrollTo({ top: 0 }); }, [tab, event]);
  const go = (k) => { setEvent(false); setTab(k); };
  return (
    <div className="phone">
      <MobileAppBar logoSrc="../../assets/logo.svg" cartCount={cart} onLogo={() => go("discover")} />
      <div className="scroll" ref={scroll}>
        {event ? <EventScreen back={() => setEvent(false)} onAdd={(n) => { setCart(cart + n); setEvent(false); setTab("tickets"); }} />
          : tab === "discover" ? <Discover openEvent={() => setEvent(true)} />
          : tab === "tickets" ? <Tickets />
          : tab === "venues" ? <Venues />
          : <Profile />}
      </div>
      <MobileTabBar value={event ? "discover" : tab} onChange={go} />
    </div>
  );
}

function App() {
  return (
    <>
      <Phone />
      <div className="side">
        <img src="../../assets/logo.svg" alt="Nextkt" style={{ height: 40, alignSelf: "flex-start" }} />
        <h1>Mobile storefront</h1>
        <p>Below <b>lg</b> the storefront switches to a dedicated layout: 60px glass app bar, stacked rows, 3:4 poster rail and a 96px bottom tab bar (Discover · Tickets · Venues · Profile) with filled icons on the active tab.</p>
        <p>Tap the hero or any event to open the event screen, add tickets, then open <b>View QR</b> on the Tickets tab.</p>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
