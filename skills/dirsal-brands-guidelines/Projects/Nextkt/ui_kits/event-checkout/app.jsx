const { Button, IconButton, Badge, Card, Input, TicketTier, EventCard, Tabs } = window.NextktDesignSystem_1c6e87;
const Icon = window.Icon;

/* ---------------- Data ---------------- */
const STAGE = "radial-gradient(120% 90% at 30% 15%, #488790 0%, #1D1E4C 58%, #06222B 100%)";
const money = (n) => "Rp " + Math.round(n).toLocaleString("id-ID");
const EVENT = {
  title: "Midnight Echoes",
  status: "ON SALE",
  date: "Friday, October 24, 2026",
  time: "Doors 8:00 PM",
  venue: "Istora Senayan",
  city: "Jakarta",
  org: "Pulse Live",
  about: [
    "Midnight Echoes returns to Jakarta with a two-hour synth-pop set under the Istora dome — a new stage design, a full live band and the songs from their latest record.",
    "Mobile entry only. Tickets are delivered to your account and your email the moment payment clears.",
  ],
  info: [
    { h: "Venue", l1: "Istora Senayan", l2: "Jl. Pintu Satu Senayan, Jakarta" },
    { h: "Age Policy", l1: "All ages", l2: "Under 16 must be accompanied" },
    { h: "Entry", l1: "Doors 8:00 PM", l2: "Show starts 9:00 PM" },
    { h: "Getting There", l1: "MRT Istora Mandiri", l2: "5 min walk" },
  ],
};
const TIERS = [
  { id: "ga", badge: "GA", tone: "ga", name: "General Admission", price: 450000, subtitle: "Standing floor", available: 214 },
  { id: "vip", badge: "VIP", tone: "vip", name: "VIP", price: 1250000, subtitle: "Fast lane + lounge access", available: 12 },
  { id: "tables", badge: "TABLES", tone: "tables", name: "Table for 8", price: 8000000, subtitle: "Seats 8 · bottle service", available: 0, soldOut: true },
];
const POINTS = { balance: 2450, value: 10 };
const HOLD_SECONDS = 600;

const wrap = { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--margin-desktop)" };
const caps = { fontSize: "var(--text-label-caps)", fontWeight: 700, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase" };

/* ---------------- Chrome ---------------- */
function Header({ cart, onCart, onHome }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, height: "var(--header-height)", background: "rgb(248 249 250 / .9)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--outline-variant)" }}>
      <nav style={{ height: "100%", display: "flex", alignItems: "center", gap: 24, padding: "0 var(--margin-desktop)" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onHome(); }} aria-label="Nextkt — home" style={{ display: "flex" }}>
          <img src="../../assets/logo.svg" alt="Nextkt" style={{ height: "var(--logo-height-desktop)" }} />
        </a>
        <div style={{ paddingLeft: 20 }}><Tabs variant="nav" tabs={["Home", "Events", "Venues", "Artists", "Loyalty", "Partners"]} value="Events" /></div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 24 }}>
          <IconButton label="Search"><Icon name="search" /></IconButton>
          <IconButton label={cart ? `Cart (${cart} items)` : "Cart"} count={cart} onClick={onCart}><Icon name="shopping_cart" /></IconButton>
          <Button variant="secondary" iconLeft={<Icon name="account_circle" size={20} />}>Ayu</Button>
        </div>
      </nav>
    </header>
  );
}

function CompactFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--outline-variant)", background: "var(--surface-container)", padding: "var(--stack-lg) var(--margin-desktop)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <img src="../../assets/logo.svg" alt="Nextkt" style={{ height: 36 }} />
        <div style={{ display: "flex", gap: 16, fontSize: "var(--text-label-sm)" }}>
          {["About Us", "Help Center", "Refund Policy", "Terms & Conditions", "Privacy Policy"].map((l) => <a key={l} href="#" style={{ color: "var(--secondary)" }}>{l}</a>)}
        </div>
        <span style={{ fontSize: "var(--text-label-sm)" }}>© 2026 Nextkt. All rights reserved.</span>
      </div>
    </footer>
  );
}

function SiteFooter() {
  const cols = [["Company", ["About Us", "Careers", "Loyalty Program"]], ["Support", ["Help Center", "Gift Cards", "Contact Us"]], ["Legal", ["Refund Policy", "Sales & Purchase Policy"]]];
  const link = { fontSize: "var(--text-label-sm)", color: "var(--secondary)" };
  return (
    <footer style={{ background: "var(--surface-container)", borderTop: "1px solid var(--outline-variant)", padding: "var(--stack-lg) var(--margin-desktop)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 32 }}>
        <div style={{ maxWidth: 320 }}>
          <img src="../../assets/logo.svg" alt="Nextkt" style={{ height: 36, marginBottom: 16 }} />
          <p style={{ margin: 0, ...link, lineHeight: 1.5 }}>Elevating the live experience through premium access and editorial-first event discovery. Your journey to the stage starts here.</p>
        </div>
        {cols.map(([t, ls]) => (
          <div key={t} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={{ fontSize: "var(--text-sm)", fontWeight: 700 }}>{t}</span>
            {ls.map((l) => <a key={l} href="#" style={link}>{l}</a>)}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "var(--container-max)", margin: "var(--stack-lg) auto 0", paddingTop: 16, borderTop: "1px solid var(--outline-variant)", display: "flex", justifyContent: "space-between", ...link }}>
        <span>© 2026 Nextkt. All rights reserved.</span>
        <span style={{ display: "flex", gap: 24 }}><a href="#" style={link}>Terms &amp; Conditions</a><a href="#" style={link}>Privacy Policy</a><a href="#" style={link}>Cookies</a></span>
      </div>
    </footer>
  );
}

function HoldCountdown({ remaining }) {
  const expired = remaining <= 0;
  const urgent = !expired && remaining <= 120;
  const clock = `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, "0")}`;
  const tone = expired
    ? { border: "1px solid rgb(186 26 26 / .4)", background: "var(--error-container)", color: "var(--on-error-container)" }
    : urgent
      ? { border: "1px solid rgb(186 26 26 / .4)", background: "rgb(255 218 214 / .6)", color: "var(--error)" }
      : { border: "1px solid var(--outline-variant)", background: "var(--surface-container)", color: "var(--on-surface)" };
  return (
    <div role="timer" style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: "var(--radius-pill)", padding: "8px 16px", ...tone }}>
      <Icon name={expired ? "timer_off" : "schedule"} size={20} />
      {expired ? <span style={{ fontWeight: 700 }}>Hold expired</span> : (
        <span style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span style={{ fontSize: "var(--text-headline-md)", fontWeight: 700, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{clock}</span>
          <span style={{ fontSize: "var(--text-label-sm)", color: "var(--on-surface-variant)" }}>left to pay</span>
        </span>
      )}
    </div>
  );
}

function Row({ label, value, tone, strong }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", color: tone || (strong ? "var(--on-surface)" : "var(--on-surface-variant)"), fontWeight: strong ? 700 : 400, fontSize: strong ? 18 : "var(--text-body-md)" }}>
      <span>{label}</span><span style={{ color: strong ? "var(--primary)" : undefined, fontVariantNumeric: "tabular-nums" }}>{value}</span>
    </div>
  );
}

/* ---------------- Screens ---------------- */
function EventDetail({ qty, setQty, points, setPoints, onAdd, adding }) {
  const total = TIERS.reduce((s, t) => s + t.price * (qty[t.id] || 0), 0);
  const count = Object.values(qty).reduce((a, b) => a + b, 0);
  const maxRedeem = Math.min(POINTS.balance, Math.floor(total / POINTS.value));
  const use = Math.min(points, maxRedeem);
  const savings = use * POINTS.value;
  return (
    <main>
      <section style={{ position: "relative", height: 560, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: STAGE }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, var(--background) 0%, transparent 55%)" }} />
        <div style={{ ...wrap, position: "absolute", left: 0, right: 0, bottom: 0, paddingBottom: "var(--stack-lg)" }}>
          <Badge variant="glass" size="md" style={{ marginBottom: 16, background: "rgb(29 30 76 / .35)" }}>{EVENT.status}</Badge>
          <h1 style={{ margin: "0 0 8px", fontSize: "var(--text-headline-display)", lineHeight: "var(--text-headline-display-lh)", fontWeight: 700, letterSpacing: "var(--tracking-display)", color: "var(--on-background)" }}>{EVENT.title}</h1>
          <div style={{ display: "flex", gap: 24, alignItems: "center", color: "var(--on-surface-variant)" }}>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="calendar_month" />{EVENT.date}</span>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="schedule" />{EVENT.time}</span>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="location_on" /><span><a href="#" style={{ color: "inherit" }}>{EVENT.venue}</a>, {EVENT.city}</span></span>
          </div>
          <div style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 8, borderRadius: "var(--radius-pill)", border: "1px solid var(--outline-variant)", background: "var(--glass-panel)", backdropFilter: "blur(8px)", padding: "6px 12px", fontSize: "var(--text-label-sm)" }}>
            <span style={{ width: 20, height: 20, borderRadius: "var(--radius-circle)", background: "var(--brand-navy)", color: "#fff", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>P</span>
            Presented by <b>{EVENT.org}</b>
          </div>
        </div>
      </section>

      <section style={{ ...wrap, display: "grid", gridTemplateColumns: "7fr 5fr", gap: "var(--gutter)", paddingTop: "var(--stack-lg)", paddingBottom: "var(--stack-lg)", alignItems: "start" }}>
        <div>
          <h2 style={{ margin: "0 0 var(--stack-md)", paddingBottom: 8, borderBottom: "1px solid var(--outline-variant)", fontSize: "var(--text-headline-lg)", fontWeight: 600, letterSpacing: "var(--tracking-headline)" }}>About the Event</h2>
          <p style={{ margin: 0, fontSize: "var(--text-body-lg)", lineHeight: 1.625, color: "var(--on-surface-variant)" }}>{EVENT.about[0]}</p>
          <p style={{ margin: "16px 0 var(--stack-lg)", color: "var(--on-surface-variant)", lineHeight: 1.5 }}>{EVENT.about[1]}</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--stack-lg)", padding: "var(--stack-lg)", borderRadius: "var(--radius-card)", border: "1px solid var(--outline-soft)", background: "var(--surface-container)" }}>
            {EVENT.info.map((b) => (
              <div key={b.h}>
                <span style={{ ...caps, display: "block", marginBottom: 8, color: "var(--primary)" }}>{b.h}</span>
                <p style={{ margin: 0 }}>{b.l1}</p>
                <p style={{ margin: 0, fontSize: "var(--text-label-sm)", color: "var(--secondary)" }}>{b.l2}</p>
              </div>
            ))}
          </div>
          <h3 style={{ ...caps, margin: "var(--stack-lg) 0 8px", color: "var(--primary)" }}>Refund Policy</h3>
          <p style={{ margin: 0, color: "var(--on-surface-variant)" }}>Tickets are non-refundable unless the event is cancelled or rescheduled.</p>
        </div>

        <div style={{ position: "sticky", top: 112, borderRadius: "var(--radius-card)", border: "1px solid var(--outline-variant)", background: "var(--surface-container-lowest)", padding: "var(--stack-lg)", boxShadow: "var(--shadow-sm)" }}>
          <h3 style={{ margin: "0 0 var(--stack-md)", fontSize: "var(--text-headline-md)", fontWeight: 600 }}>Select Tickets</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {TIERS.map((t) => (
              <TicketTier key={t.id} badge={t.badge} tone={t.tone} name={t.name} price={money(t.price)} subtitle={t.subtitle}
                available={t.available} soldOut={t.soldOut} qty={qty[t.id] || 0} onChange={(n) => setQty({ ...qty, [t.id]: n })} />
            ))}
          </div>
          <div style={{ margin: "16px 0", padding: 8, borderRadius: "var(--radius-btn)", border: "1px solid var(--outline-variant)", background: "var(--surface-container-low)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 700 }}><Icon name="savings" size={18} color="var(--status-on-sale)" />Redeem points</span>
              <span style={{ fontSize: "var(--text-label-sm)", color: "var(--on-surface-variant)" }}>{POINTS.balance.toLocaleString()} available</span>
            </div>
            <input type="range" min={0} max={maxRedeem} value={use} onChange={(e) => setPoints(Number(e.target.value))} aria-label="Points to redeem" style={{ width: "100%", marginTop: 8 }} disabled={!total} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-label-sm)" }}>
              <span style={{ color: "var(--on-surface-variant)" }}>{use ? `Using ${use.toLocaleString()} points` : "Slide to save with your points"}</span>
              {use ? <span style={{ fontWeight: 700, color: "var(--status-on-sale)" }}>−{money(savings)}</span> : null}
            </div>
          </div>
          <div style={{ padding: "16px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Total</span>
              <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                {savings ? <span style={{ fontSize: "var(--text-label-sm)", color: "var(--on-surface-variant)", textDecoration: "line-through" }}>{money(total)}</span> : null}
                <span style={{ fontSize: "var(--text-headline-md)", fontWeight: 700, color: "var(--primary)" }}>{money(total - savings)}</span>
              </span>
            </div>
            {total ? <p style={{ margin: "8px 0 0", display: "flex", alignItems: "center", gap: 6, fontSize: "var(--text-label-sm)", color: "var(--status-on-sale)" }}><Icon name="redeem" size={16} />Earn ~{Math.round((total - savings) / 1000).toLocaleString()} points with this purchase</p> : null}
          </div>
          <Button variant="container" size="cta" full disabled={!count || adding} onClick={onAdd} iconRight={<Icon name="confirmation_number" />}>{adding ? "Adding…" : "Add to Cart"}</Button>
          <p style={{ margin: "16px 0 0", textAlign: "center", fontSize: "var(--text-label-sm)", color: "var(--secondary)" }}><Icon name="lock" size={14} style={{ verticalAlign: "middle", marginRight: 4 }} />Secure Checkout</p>
        </div>
      </section>

      <section style={{ ...wrap, borderTop: "1px solid var(--outline-variant)", paddingTop: "var(--stack-lg)", paddingBottom: "var(--stack-lg)" }}>
        <h2 style={{ margin: "0 0 var(--stack-lg)", fontSize: "var(--text-headline-lg)", fontWeight: 600, letterSpacing: "var(--tracking-headline)" }}>You Might Also Like</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--gutter)" }}>
          <EventCard variant="directory" title="Velvet Jazz Nights" venue="Motion Blue" month="NOV" day="02" price="From Rp 350.000" image="radial-gradient(100% 80% at 70% 10%, #A7D8E4 0%, #1C6E87 38%, #1D1E4C 85%)" />
          <EventCard variant="directory" title="Neon Pulse Festival" venue="Beach City Stadium" month="NOV" day="08" price="From Rp 750.000" image="linear-gradient(160deg, #417292 0%, #2A5566 45%, #06222B 100%)" />
          <EventCard variant="directory" title="Solar Drift" venue="Sabuga, Bandung" month="NOV" day="22" price="From Rp 300.000" image="linear-gradient(200deg, #488790 0%, #1D1E4C 70%)" />
        </div>
      </section>
    </main>
  );
}

function Summary({ lines, savings, cta, onCta, disabled }) {
  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const service = Math.round(subtotal * 0.05);
  const platform = lines.length ? 10000 : 0;
  const total = subtotal + service + platform - savings;
  return (
    <aside style={{ position: "sticky", top: 112, height: "fit-content", borderRadius: "var(--radius-card)", border: "1px solid var(--outline-soft)", background: "var(--surface-container-lowest)", padding: "var(--stack-lg)" }}>
      <h2 style={{ margin: "0 0 var(--stack-md)", fontSize: "var(--text-headline-md)", fontWeight: 600 }}>Order Summary</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Row label="Subtotal" value={money(subtotal)} />
        <Row label="Service" value={money(service)} />
        <Row label="Platform fee" value={money(platform)} />
        {savings ? <Row label={`Points (${(savings / POINTS.value).toLocaleString()})`} value={"−" + money(savings)} tone="var(--status-on-sale)" /> : null}
        <div style={{ marginTop: 4, paddingTop: 12, borderTop: "1px solid var(--outline-variant)" }}><Row label="Total" value={money(total)} strong /></div>
      </div>
      <p style={{ margin: "var(--stack-md) 0 0", display: "flex", alignItems: "center", gap: 6, fontSize: "var(--text-label-sm)", color: "var(--status-on-sale)" }}><Icon name="redeem" size={16} />Earn ~{Math.round(total / 1000).toLocaleString()} points with this purchase</p>
      <Button full size="lg" style={{ marginTop: "var(--stack-md)" }} onClick={onCta} disabled={disabled} iconRight={<Icon name="arrow_forward" size={20} />}>{cta}</Button>
      <p style={{ margin: "12px 0 0", textAlign: "center", fontSize: "var(--text-label-sm)", color: "var(--on-surface-variant)" }}><Icon name="lock" size={14} style={{ verticalAlign: "middle", marginRight: 4 }} />Secure checkout</p>
    </aside>
  );
}

function CartScreen({ lines, remove, remaining, savings, onCheckout, onBrowse }) {
  if (!lines.length) {
    return (
      <div style={{ maxWidth: 768, margin: "0 auto", padding: "var(--stack-lg) var(--margin-desktop)" }}>
        <div style={{ textAlign: "center", borderRadius: "var(--radius-modal)", border: "1px solid var(--outline-soft)", background: "var(--surface-container-lowest)", padding: "64px 32px" }}>
          <Icon name="shopping_cart" size={48} color="var(--on-surface-variant)" />
          <h1 style={{ margin: "12px 0 4px", fontSize: "var(--text-headline-md)", fontWeight: 600 }}>Your cart is empty</h1>
          <p style={{ margin: 0, color: "var(--on-surface-variant)" }}>Pick an event and your tickets will be held here for 10 minutes.</p>
          <Button size="lg" style={{ marginTop: 24 }} onClick={onBrowse}>Browse events</Button>
        </div>
      </div>
    );
  }
  return (
    <div style={{ ...wrap, display: "grid", gridTemplateColumns: "1fr var(--summary-width)", gap: "var(--gutter)", paddingTop: "var(--stack-lg)", paddingBottom: "var(--stack-lg)" }}>
      <section>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--stack-md)" }}>
          <h1 style={{ margin: 0, fontSize: "var(--text-headline-lg)", fontWeight: 600, letterSpacing: "var(--tracking-headline)" }}>Your Cart</h1>
          <HoldCountdown remaining={remaining} />
        </div>
        <div style={{ borderRadius: "var(--radius-card)", border: "1px solid var(--outline-soft)", background: "var(--surface-container-lowest)" }}>
          {lines.map((l, i) => (
            <div key={l.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "var(--stack-md)", borderTop: i ? "1px solid var(--outline-variant)" : "none" }}>
              <div>
                <p style={{ margin: 0, fontWeight: 700 }}>{EVENT.title} — {l.name}</p>
                <p style={{ margin: 0, fontSize: "var(--text-label-sm)", color: "var(--on-surface-variant)" }}>{EVENT.date} · {l.badge} · Qty {l.qty}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontWeight: 700, color: "var(--primary)" }}>{money(l.price * l.qty)}</span>
                <IconButton label="Remove" onClick={() => remove(l.id)}><Icon name="delete" /></IconButton>
              </div>
            </div>
          ))}
        </div>
        {remaining <= 0 ? <p style={{ margin: "12px 0 0", color: "var(--error)", fontSize: "var(--text-label-sm)" }}>Your hold has expired — please re-add your tickets.</p> : null}
      </section>
      <Summary lines={lines} savings={savings} cta="Proceed to Checkout" onCta={onCheckout} disabled={remaining <= 0} />
    </div>
  );
}

function CheckoutScreen({ lines, remaining, savings, onPay }) {
  const [busy, setBusy] = React.useState(false);
  const pay = () => { setBusy(true); setTimeout(onPay, 900); };
  return (
    <div style={{ ...wrap, display: "grid", gridTemplateColumns: "1fr var(--summary-width)", gap: "var(--gutter)", paddingTop: "var(--stack-lg)", paddingBottom: "var(--stack-lg)" }}>
      <section>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--stack-md)" }}>
          <h1 style={{ margin: 0, fontSize: "var(--text-headline-lg)", fontWeight: 600, letterSpacing: "var(--tracking-headline)" }}>Checkout</h1>
          <HoldCountdown remaining={remaining} />
        </div>
        <Card padding={24} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Input label="Full Name" placeholder="Alex Vance" defaultValue="Ayu Pratiwi" icon={<Icon name="person" size={20} />} />
          <Input label="Email" type="email" defaultValue="ayu@example.com" icon={<Icon name="mail" size={20} />} hint="Tickets will be sent to your account email." />
          <div style={{ borderTop: "1px solid var(--outline-variant)", margin: "8px 0" }} />
          <Input label="Cardholder Name" defaultValue="AYU PRATIWI" />
          <Input label="Card Number" defaultValue="4242 4242 4242 4242" icon={<Icon name="credit_card" size={20} />} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Input label="Expiry" placeholder="MM / YY" defaultValue="08 / 29" />
            <Input label="CVC" placeholder="123" defaultValue="123" />
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
            <Input label="Promo code" placeholder="Enter code" style={{ flex: 1 }} disabled={!!savings} />
            <Button variant="outline" disabled={!!savings}>Apply</Button>
          </div>
          {savings ? <p style={{ margin: 0, fontSize: "var(--text-label-sm)", color: "var(--on-surface-variant)" }}>Remove points to use a promo code.</p> : null}
        </Card>
      </section>
      <Summary lines={lines} savings={savings} cta={remaining <= 0 ? "Hold expired" : busy ? "Processing…" : "Continue to payment"} onCta={pay} disabled={busy || remaining <= 0} />
    </div>
  );
}

function Confirmation({ onTickets }) {
  return (
    <div style={{ maxWidth: 768, margin: "0 auto", padding: "var(--stack-lg) var(--margin-desktop)" }}>
      <div style={{ textAlign: "center", borderRadius: "var(--radius-modal)", border: "1px solid var(--outline-soft)", background: "var(--surface-container-lowest)", padding: "64px 32px" }}>
        <Icon name="check_circle" size={56} fill color="var(--status-on-sale)" />
        <h1 style={{ margin: "16px 0 4px", fontSize: "var(--text-headline-lg)", fontWeight: 600 }}>Payment successful</h1>
        <p style={{ margin: 0, color: "var(--on-surface-variant)" }}>Order <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>#NK-240871</span> is confirmed.</p>
        <p style={{ margin: "16px auto 0", maxWidth: 384, borderRadius: "var(--radius-btn)", background: "var(--surface-container)", padding: "12px 16px", fontSize: "var(--text-label-sm)", color: "var(--on-surface-variant)" }}>We've emailed your tickets. You can also view them under <b>My Tickets</b>.</p>
        <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
          <Button variant="outline" iconLeft={<Icon name="download" size={18} />}>Download receipt</Button>
          <Button onClick={onTickets}>My Tickets</Button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Root ---------------- */
function App() {
  const [step, setStep] = React.useState("event");
  const [qty, setQty] = React.useState({ ga: 2, vip: 0 });
  const [points, setPoints] = React.useState(0);
  const [lines, setLines] = React.useState([]);
  const [adding, setAdding] = React.useState(false);
  const [expiresAt, setExpiresAt] = React.useState(null);
  const [now, setNow] = React.useState(Date.now());
  const scroller = React.useRef(null);
  React.useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  React.useEffect(() => { scroller.current && scroller.current.scrollTo({ top: 0 }); }, [step]);
  const remaining = expiresAt ? Math.max(0, Math.round((expiresAt - now) / 1000)) : HOLD_SECONDS;
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const savings = Math.min(points, POINTS.balance, Math.floor(total / POINTS.value)) * POINTS.value;
  const cartCount = lines.reduce((n, l) => n + l.qty, 0);

  const add = () => {
    setAdding(true);
    setTimeout(() => {
      setLines(TIERS.filter((t) => qty[t.id]).map((t) => ({ id: t.id, name: t.name, badge: t.badge, price: t.price, qty: qty[t.id] })));
      setExpiresAt(Date.now() + HOLD_SECONDS * 1000);
      setAdding(false);
      setStep("cart");
    }, 600);
  };

  return (
    <div ref={scroller} style={{ height: "100%", overflowY: "auto", display: "flex", flexDirection: "column" }}>
      <Header cart={cartCount} onCart={() => setStep("cart")} onHome={() => setStep("event")} />
      <div style={{ flex: 1 }}>
      {step === "event" && <EventDetail qty={qty} setQty={setQty} points={points} setPoints={setPoints} onAdd={add} adding={adding} />}
      {step === "cart" && <CartScreen lines={lines} remove={(id) => setLines(lines.filter((l) => l.id !== id))} remaining={remaining} savings={savings} onCheckout={() => setStep("checkout")} onBrowse={() => setStep("event")} />}
      {step === "checkout" && <CheckoutScreen lines={lines} remaining={remaining} savings={savings} onPay={() => { setLines([]); setExpiresAt(null); setStep("done"); }} />}
      {step === "done" && <Confirmation onTickets={() => setStep("event")} />}
      </div>
      {step === "checkout" ? <CompactFooter /> : <SiteFooter />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
