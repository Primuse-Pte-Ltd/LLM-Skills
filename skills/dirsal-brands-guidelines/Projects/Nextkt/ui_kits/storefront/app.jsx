const { Button, IconButton, Badge, EventCard, Tabs, Input, Select } = window.NextktDesignSystem_1c6e87;
const Icon = window.Icon;

/* ---------------- Data ---------------- */
const G = {
  stage: "radial-gradient(120% 90% at 30% 15%, #488790 0%, #1D1E4C 58%, #06222B 100%)",
  haze: "radial-gradient(100% 80% at 70% 10%, #A7D8E4 0%, #1C6E87 38%, #1D1E4C 85%)",
  steel: "linear-gradient(160deg, #417292 0%, #2A5566 45%, #06222B 100%)",
  night: "radial-gradient(90% 70% at 50% 100%, #2F6D84 0%, #1D1E4C 55%, #0B0C24 100%)",
  dusk: "linear-gradient(200deg, #488790 0%, #1D1E4C 70%)",
  deep: "radial-gradient(120% 100% at 0% 0%, #1C6E87 0%, #06222B 70%)",
};
const EVENTS = [
  { id: 1, title: "Midnight Echoes", venue: "Istora Senayan", city: "Jakarta", m: "OCT", d: "24", price: "From Rp 450.000", img: G.stage, cat: "Concerts" },
  { id: 2, title: "Velvet Jazz Nights", venue: "Motion Blue", city: "Jakarta", m: "NOV", d: "02", price: "From Rp 350.000", img: G.haze, cat: "Concerts" },
  { id: 3, title: "Neon Pulse Festival", venue: "Beach City Stadium", city: "Jakarta", m: "NOV", d: "08", price: "From Rp 750.000", img: G.steel, cat: "Festivals" },
  { id: 4, title: "Comedy Underground", venue: "Kuningan City Hall", city: "Jakarta", m: "NOV", d: "15", price: "From Rp 200.000", img: G.night, cat: "Comedy" },
  { id: 5, title: "Solar Drift", venue: "Sabuga", city: "Bandung", m: "NOV", d: "22", price: "From Rp 300.000", img: G.dusk, cat: "Concerts" },
  { id: 6, title: "Island Sound", venue: "GWK Cultural Park", city: "Bali", m: "DEC", d: "06", price: "From Rp 950.000", img: G.deep, cat: "Festivals" },
  { id: 7, title: "The Last Act", venue: "Ciputra Artpreneur", city: "Jakarta", m: "DEC", d: "12", price: "From Rp 400.000", img: G.stage, cat: "Theatre" },
  { id: 8, title: "Harbour Lights", venue: "Grand City Hall", city: "Surabaya", m: "DEC", d: "19", price: "From Rp 250.000", img: G.haze, cat: "Concerts" },
];
const CATEGORIES = ["All Events", "Concerts", "Festivals", "Comedy", "Theatre"];
const NAV = ["Home", "Events", "Venues", "Artists", "Loyalty", "Partners"];

const wrap = { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--margin-desktop)" };
const h2 = { margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-headline-lg)", lineHeight: "var(--text-headline-lg-lh)", fontWeight: 600, letterSpacing: "var(--tracking-headline)", color: "var(--on-surface)" };

/* ---------------- Chrome ---------------- */
function Header({ page, setPage, cart }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, height: "var(--header-height)", background: "rgb(248 249 250 / .9)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--outline-variant)" }}>
      <nav style={{ height: "100%", display: "flex", alignItems: "center", gap: 24, padding: "0 var(--margin-desktop)" }}>
        <a href="#" aria-label="Nextkt — home" onClick={(e) => { e.preventDefault(); setPage("Home"); }} style={{ flexShrink: 0, display: "flex" }}>
          <img src="../../assets/logo.svg" alt="Nextkt" style={{ height: "var(--logo-height-desktop)" }} />
        </a>
        <div style={{ paddingLeft: 20 }}>
          <Tabs variant="nav" tabs={NAV} value={page} onChange={(p) => (p === "Home" || p === "Events") && setPage(p)} />
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 24 }}>
          <IconButton label="Search"><Icon name="search" /></IconButton>
          <IconButton label={cart ? `Cart (${cart} items)` : "Cart"} count={cart}><Icon name="shopping_cart" /></IconButton>
          <Button>Sign In</Button>
        </div>
      </nav>
    </header>
  );
}

function Hero({ onBook }) {
  const slides = [
    { kicker: "ON SALE NOW", title: EVENTS[0].title, desc: "Istora Senayan, Jakarta. Tickets from Rp 450.000.", img: G.stage, secondary: "Tour Dates" },
    { kicker: "FEATURED EVENT", title: EVENTS[2].title, desc: "Beach City Stadium, Jakarta. Tickets from Rp 750.000.", img: G.haze },
  ];
  const [i, setI] = React.useState(0);
  const move = (d) => setI((p) => (p + d + slides.length) % slides.length);
  React.useEffect(() => { const t = setInterval(() => move(1), 8000); return () => clearInterval(t); }, []);
  return (
    <section style={{ position: "relative", aspectRatio: "21 / 9", maxHeight: 560, width: "100%", overflow: "hidden", background: "#000" }}>
      <div style={{ display: "flex", height: "100%", transform: `translateX(-${i * 100}%)`, transition: "transform var(--duration-carousel) var(--ease)" }}>
        {slides.map((s) => (
          <div key={s.title} style={{ position: "relative", minWidth: "100%", height: "100%" }}>
            <div style={{ position: "absolute", inset: 0, background: s.img, opacity: 0.7 }} />
            <div style={{ ...wrap, position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", color: "#fff" }}>
              <span style={{ marginBottom: 16, fontSize: "var(--text-label-caps)", fontWeight: 700, letterSpacing: "var(--tracking-kicker)", color: "var(--primary-fixed)" }}>{s.kicker}</span>
              <h1 style={{ margin: "0 0 24px", maxWidth: 672, fontSize: "var(--text-headline-display)", lineHeight: "var(--text-headline-display-lh)", fontWeight: 700, letterSpacing: "var(--tracking-display)" }}>{s.title}</h1>
              <p style={{ margin: "0 0 32px", maxWidth: 576, fontSize: "var(--text-body-lg)", lineHeight: "var(--text-body-lg-lh)", opacity: 0.9 }}>{s.desc}</p>
              <div style={{ display: "flex", gap: 16 }}>
                <Button size="lg" onClick={onBook}>Get Tickets</Button>
                {s.secondary ? <Button size="lg" variant="glass">{s.secondary}</Button> : null}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", bottom: 40, right: "var(--margin-desktop)", display: "flex", gap: 8 }}>
        <IconButton label="Previous slide" variant="glass" size={48} onClick={() => move(-1)}><Icon name="chevron_left" /></IconButton>
        <IconButton label="Next slide" variant="glass" size={48} onClick={() => move(1)}><Icon name="chevron_right" /></IconButton>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    ["Company", ["About Us", "Careers", "Loyalty Program"]],
    ["Partners", ["Partner with Us", "Developers Documentation", "Partners T&C"]],
    ["Support", ["Help Center", "Gift Cards", "Contact Us"]],
    ["Legal", ["Refund Policy", "Sales & Purchase Policy", "Payment Processing T&C"]],
  ];
  const link = { fontSize: "var(--text-label-sm)", color: "var(--secondary)" };
  return (
    <footer style={{ background: "var(--surface-container)", borderTop: "1px solid var(--outline-variant)", padding: "var(--stack-lg) var(--margin-desktop)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 32 }}>
        <div style={{ maxWidth: 320 }}>
          <img src="../../assets/logo.svg" alt="Nextkt" style={{ height: 36, marginBottom: 16 }} />
          <p style={{ margin: "0 0 24px", ...link, lineHeight: 1.5 }}>Elevating the live experience through premium access and editorial-first event discovery. Your journey to the stage starts here.</p>
          <div style={{ display: "flex", gap: 16, color: "var(--secondary)" }}>
            {["photo_camera", "thumb_up", "work", "send", "chat"].map((n) => <Icon key={n} name={n} size={20} />)}
          </div>
        </div>
        {[cols.slice(0, 2), cols.slice(2)].map((pair, pi) => (
          <div key={pi} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {pair.map(([t, ls]) => (
              <div key={t} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--on-surface)" }}>{t}</span>
                {ls.map((l) => <a key={l} href="#" style={link}>{l}</a>)}
              </div>
            ))}
          </div>
        ))}
        <div style={{ width: 200 }}>
          <span style={{ display: "block", marginBottom: 12, fontSize: "var(--text-sm)", fontWeight: 700 }}>Country Selector</span>
          <Select options={["Indonesia", "Singapore", "Malaysia", "Worldwide"]} />
        </div>
      </div>
      <div style={{ maxWidth: "var(--container-max)", margin: "var(--stack-lg) auto 0", paddingTop: 16, borderTop: "1px solid var(--outline-variant)", display: "flex", justifyContent: "space-between", fontSize: "var(--text-label-sm)", color: "var(--secondary)" }}>
        <span>© 2026 Nextkt. All rights reserved.</span>
        <span style={{ display: "flex", gap: 24 }}><a href="#" style={link}>Terms &amp; Conditions</a><a href="#" style={link}>Privacy Policy</a><a href="#" style={link}>Cookies</a></span>
      </div>
    </footer>
  );
}

/* ---------------- Pages ---------------- */
function Home({ onBook }) {
  const [cat, setCat] = React.useState("All Events");
  const list = cat === "All Events" ? EVENTS : EVENTS.filter((e) => e.cat === cat);
  const premiere = list.slice(0, 3);
  const upcoming = (list.length > 3 ? list.slice(3, 7) : EVENTS.slice(3, 7));
  return (
    <>
      <Hero onBook={onBook} />
      <section style={{ background: "var(--surface)", borderBottom: "1px solid var(--outline-variant)" }}>
        <div style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--stack-md) var(--margin-desktop)" }}>
          <Tabs variant="underline" tabs={CATEGORIES} value={cat} onChange={setCat} />
          <button style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "1px solid var(--outline-variant)", borderRadius: "var(--radius-btn)", padding: "8px 12px", fontFamily: "var(--font-body)", fontSize: "var(--text-label-sm)", fontWeight: 600, color: "var(--on-surface)", cursor: "pointer" }}>
            <Icon name="location_on" size={18} color="var(--primary)" />Indonesia · Jakarta<Icon name="expand_more" size={18} />
          </button>
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: "var(--stack-lg)", paddingBottom: "var(--stack-lg)" }}>
        <h2 style={{ ...h2, marginBottom: "var(--stack-lg)" }}>Premiere Events</h2>
        {premiere.length ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--gutter)" }}>
            {premiere.map((e) => (
              <EventCard key={e.id} variant="featured" image={e.img} title={e.title} eyebrow={`${e.m} ${e.d} • ${e.city.toUpperCase()}`}
                summary={`Live at ${e.venue}, ${e.city}. Mobile entry and live availability.`} price={e.price} onClick={onBook} />
            ))}
          </div>
        ) : <p style={{ color: "var(--on-surface-variant)" }}>No {cat.toLowerCase()} on sale right now. Try another category or check back soon.</p>}
      </section>

      <section style={{ background: "var(--surface-container-lowest)", padding: "var(--stack-lg) 0" }}>
        <div style={wrap}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "var(--stack-lg)" }}>
            <div>
              <h2 style={h2}>Upcoming Events</h2>
              <p style={{ margin: "8px 0 0", color: "var(--secondary)" }}>Discover live experiences happening near you soon.</p>
            </div>
            <Button variant="link">View Full Calendar</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--gutter)" }}>
            {upcoming.map((e, i) => (
              <EventCard key={e.id} variant="discovery" image={e.img} title={e.title} venue={e.venue} city={e.city} month={e.m} day={e.d}
                price={e.price} stock={i === 1 ? "Selling fast" : "On Sale"} onClick={onBook} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: "var(--stack-lg)", paddingBottom: "var(--stack-lg)" }}>
        <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-card)", background: "var(--primary)", padding: 48, textAlign: "center", color: "#fff" }}>
          <div style={{ position: "absolute", right: -80, top: -80, width: 320, height: 320, borderRadius: "var(--radius-circle)", background: "rgb(255 255 255 / .1)", filter: "blur(64px)" }} />
          <div style={{ position: "absolute", left: -80, bottom: -80, width: 320, height: 320, borderRadius: "var(--radius-circle)", background: "rgb(0 0 0 / .1)", filter: "blur(64px)" }} />
          <h2 style={{ ...h2, color: "#fff", position: "relative", marginBottom: 16 }}>Never Miss a Show</h2>
          <p style={{ position: "relative", maxWidth: 672, margin: "0 auto 32px", fontSize: "var(--text-body-lg)", lineHeight: "var(--text-body-lg-lh)", opacity: 0.9 }}>Sign up for early access to pre-sales and exclusive artist announcements tailored to your taste.</p>
          <form onSubmit={(e) => e.preventDefault()} style={{ position: "relative", maxWidth: 512, margin: "0 auto", display: "flex", gap: 16 }}>
            <input className="nl" type="email" placeholder="Enter your email address" style={{ flex: 1, borderRadius: "var(--radius-btn)", border: "1px solid rgb(255 255 255 / .3)", background: "rgb(255 255 255 / .2)", padding: "16px 24px", color: "#fff", fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", outline: "none" }} />
            <Button variant="inverse" size="lg">Subscribe Now</Button>
          </form>
          <p style={{ position: "relative", margin: "24px 0 0", fontSize: "var(--text-micro)", opacity: 0.6 }}>By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </section>
    </>
  );
}

function Events({ onBook }) {
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState("");
  const [sort, setSort] = React.useState("Date");
  let list = EVENTS.filter((e) => (!cat || e.cat === cat) && e.title.toLowerCase().includes(q.toLowerCase()));
  if (sort === "Name") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "City") list = [...list].sort((a, b) => a.city.localeCompare(b.city));
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--primary)" }}>
        <div style={{ position: "absolute", inset: 0, background: G.deep, opacity: 0.3, mixBlendMode: "overlay" }} />
        <div style={{ ...wrap, position: "relative", padding: "var(--stack-lg) var(--margin-desktop)", color: "#fff" }}>
          <h1 style={{ margin: 0, fontSize: "var(--text-headline-display)", lineHeight: 1.05, fontWeight: 700, letterSpacing: "var(--tracking-display)" }}>Every Show.<br />One Place.</h1>
          <p style={{ margin: "16px 0 0", maxWidth: 576, fontSize: "var(--text-body-lg)", lineHeight: "var(--text-body-lg-lh)", opacity: 0.9 }}>Browse every event on sale — filter by category, name, date or city, and sort to find your next night out.</p>
        </div>
      </section>
      <section style={{ ...wrap, paddingTop: "var(--stack-lg)", paddingBottom: "var(--stack-lg)" }}>
        <div style={{ marginBottom: "var(--stack-lg)", display: "grid", gridTemplateColumns: "5fr 3fr 2fr 2fr", gap: 12, alignItems: "end", background: "var(--surface-container-lowest)", border: "1px solid var(--outline-variant)", borderRadius: "var(--radius-card)", padding: "var(--stack-md)" }}>
          <Input placeholder="Search events..." icon={<Icon name="search" size={20} />} value={q} onChange={(e) => setQ(e.target.value)} />
          <Select options={[{ value: "", label: "All categories" }, ...CATEGORIES.slice(1)]} value={cat} onChange={(e) => setCat(e.target.value)} />
          <Input placeholder="City" />
          <Button>Search</Button>
          <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 8 }}>
            {["Any date", "This weekend", "This month"].map((d, i) => <Badge key={d} tone={i === 0 ? "primary" : "neutral"} variant="tint" caps={false} size="md">{d}</Badge>)}
            <span style={{ marginLeft: "auto", fontSize: "var(--text-label-sm)", color: "var(--on-surface-variant)" }}>Sort by</span>
            <Select options={["Date", "Price", "Name", "City"]} value={sort} onChange={(e) => setSort(e.target.value)} style={{ width: 140 }} />
          </div>
        </div>
        {list.length ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--gutter)" }}>
            {list.map((e) => <EventCard key={e.id} variant="directory" image={e.img} title={e.title} venue={e.venue} month={e.m} day={e.d} price={e.price} cta="Get Tickets" onClick={onBook} />)}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "64px 24px", border: "1px dashed var(--outline-variant)", borderRadius: "var(--radius-card)", background: "var(--surface-container-lowest)", textAlign: "center" }}>
            <Icon name="event_busy" size={36} color="var(--on-surface-variant)" />
            <p style={{ margin: 0, fontSize: "var(--text-headline-md)", fontWeight: 700 }}>No events found</p>
            <p style={{ margin: 0, maxWidth: 384, color: "var(--on-surface-variant)" }}>Try a different search, category or city.</p>
          </div>
        )}
        <p style={{ marginTop: "var(--stack-lg)", textAlign: "center", fontSize: "var(--text-label-sm)", letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--on-surface-variant)" }}>You've reached the end</p>
      </section>
    </>
  );
}

/* ---------------- Toast ---------------- */
function Toast({ msg }) {
  return (
    <div role="status" style={{ position: "fixed", left: "50%", bottom: 32, transform: `translate(-50%, ${msg ? 0 : 120}px)`, transition: "transform 300ms var(--ease-reveal)", background: "var(--inverse-surface)", color: "var(--inverse-on-surface)", borderRadius: "var(--radius-card)", padding: "12px 20px", display: "flex", alignItems: "center", gap: 10, boxShadow: "var(--shadow-xl)", fontSize: "var(--text-sm)", fontWeight: 600, zIndex: 60 }}>
      <Icon name="check_circle" size={20} color="var(--primary-fixed-dim)" fill />{msg}
    </div>
  );
}

/* ---------------- Root ---------------- */
function App() {
  const [page, setPage] = React.useState("Home");
  const [cart, setCart] = React.useState(0);
  const [toast, setToast] = React.useState("");
  const scroller = React.useRef(null);
  React.useEffect(() => { scroller.current && scroller.current.scrollTo({ top: 0 }); }, [page]);
  const book = () => { setCart((c) => c + 1); setToast("Added to cart — held for 10:00"); setTimeout(() => setToast(""), 2800); };
  return (
    <div ref={scroller} style={{ height: "100%", overflowY: "auto" }}>
      <Header page={page} setPage={setPage} cart={cart} />
      {page === "Home" ? <Home onBook={book} /> : <Events onBook={book} />}
      <Footer />
      <Toast msg={toast} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
