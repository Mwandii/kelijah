// ─── KELIJAH AUTO SPARES & GARAGE ───────────────────────────────────────────
// Single-component homepage preview. Paste into src/App.jsx.
//
// REQUIRED — add to index.html <head>:
// <link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
// <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
// ────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from "react";

// ─── palette & font tokens ───────────────────────────────────────────────────
const R = "#E01B1B";          // primary red
const R2 = "#B91212";         // red dark (hover)
const BK = "#0C0C0C";         // near-black
const W = "#FFFFFF";
const OSWALD = "'Oswald', sans-serif";
const DM = "'DM Sans', sans-serif";

// ─── unsplash images (replace with client photos) ────────────────────────────
const IMG = {
  hero:  "https://images.unsplash.com/photo-1551522435-a13afa10f103?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
  about: "https://images.unsplash.com/photo-1771340012319-0b4fca008b54?w=900&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
  s1: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
  s2: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
  s3: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
  s4: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  s5: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&q=80",
  s6: "https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?w=800&q=80",
  s7: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
  s8: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
};

const SERVICES = [
  { id:"s1", num:"01", title:"Engine Diagnostics\n& Mechanical Repairs",       desc:"Accurate fault detection and dependable mechanical repair for petrol and diesel engines." },
  { id:"s2", num:"02", title:"Full Vehicle Servicing\n& Preventive Maintenance", desc:"Scheduled maintenance programs that protect performance, reliability, and resale value." },
  { id:"s3", num:"03", title:"Brake System\nInspection & Repair",               desc:"Safety-focused brake diagnostics, replacement, and restoration for confident stopping." },
  { id:"s4", num:"04", title:"Suspension &\nSteering Services",                 desc:"Restored ride stability, steering response, and handling confidence on any road." },
  { id:"s5", num:"05", title:"Clutch &\nGearbox Repair",                        desc:"Transmission and clutch repair to restore smooth shifting and drivetrain efficiency." },
  { id:"s6", num:"06", title:"Electrical System\nDiagnostics",                  desc:"Comprehensive electrical troubleshooting for sensors, lighting, charging, and wiring." },
  { id:"s7", num:"07", title:"Battery Testing\n& Replacement",                  desc:"Quick battery health checks and same-day replacement with quality-guaranteed batteries." },
  { id:"s8", num:"08", title:"Oil Change &\nFilter Replacement",                desc:"Fast, clean oil and filter changes using the right grade for your engine type." },
];

const TRUST_ITEMS = [
  "Certified Technicians","Genuine OEM Parts","Transparent Pricing",
  "Fast Turnaround","Walk-ins Welcome","Fleet Servicing","Same-Day Repairs","No Hidden Charges",
  "Certified Technicians","Genuine OEM Parts","Transparent Pricing",
  "Fast Turnaround","Walk-ins Welcome","Fleet Servicing","Same-Day Repairs","No Hidden Charges",
];

const BRANDS = [
  "Toyota","Subaru","Nissan","Mazda","Honda",
  "Mercedes-Benz","Land Rover","Mitsubishi","Isuzu","Volkswagen","BMW","Ford",
  "Toyota","Subaru","Nissan","Mazda","Honda",
  "Mercedes-Benz","Land Rover","Mitsubishi","Isuzu","Volkswagen","BMW","Ford",
];

const TESTIMONIALS = [
  { initials:"JM", name:"James Mwangi",  tag:"Subaru Forester · Westlands", text:"Brought my car in with a noise I'd been ignoring for months. Diagnosed in under an hour and fixed same day. Honest people, fair price — exactly what you want from a garage." },
  { initials:"AK", name:"Amina Kariuki", tag:"Toyota Prado · Karen",         text:"They explained every single thing before touching the car. No pressure, no inflated cost. My Prado drives like it's brand new. I refer everyone I know here." },
  { initials:"DN", name:"David Njoroge", tag:"Nissan X-Trail · Kilimani",    text:"Booked via WhatsApp and the whole experience was seamless. No jargon, no nonsense. This is genuinely how a modern garage should operate." },
  { initials:"MW", name:"Mercy Wanjiku", tag:"Mazda CX-5 · Lavington",       text:"The team walked me through every step of the service. My braking confidence was immediate after the repair. Haven't been anywhere else since." },
];

const WA_NUM = "254700000000";
const WA = `https://wa.me/${WA_NUM}?text=Hello%20Kelijah%20Auto%2C%20I%20would%20like%20to%20book%20an%20appointment.`;

// ─── reusable SVGs ────────────────────────────────────────────────────────────
const ArrowRight = ({size=16, color="currentColor"}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const Phone = ({size=18}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const MapPin = ({size=18}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const Clock = ({size=18}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const WAIcon = ({size=18}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);
const CheckIcon = ({size=15}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ToolIcon = ({size=20}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);
const Star = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={R}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

// ─── global CSS injected once ─────────────────────────────────────────────────
const GLOBAL_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: ${BK}; }

  /* marquee animations */
  @keyframes mq-fwd  { from { transform: translateX(0)    } to { transform: translateX(-50%) } }
  @keyframes mq-back { from { transform: translateX(-50%) } to { transform: translateX(0)    } }
  .mq-fwd  { animation: mq-fwd  30s linear infinite; display: flex; width: max-content; white-space: nowrap; }
  .mq-back { animation: mq-back 36s linear infinite; display: flex; width: max-content; white-space: nowrap; }
  .mq-root:hover .mq-fwd,
  .mq-root:hover .mq-back { animation-play-state: paused; }

  /* hero entrance */
  @keyframes slideUp   { from { opacity:0; transform:translateY(40px) } to { opacity:1; transform:translateY(0) } }
  @keyframes slideLeft { from { opacity:0; transform:translateX(30px) } to { opacity:1; transform:translateX(0) } }
  .anim-up   { animation: slideUp   0.85s cubic-bezier(.22,.68,0,1.2) both; }
  .anim-up-2 { animation: slideUp   0.85s .15s cubic-bezier(.22,.68,0,1.2) both; }
  .anim-up-3 { animation: slideUp   0.85s .30s cubic-bezier(.22,.68,0,1.2) both; }
  .anim-up-4 { animation: slideUp   0.85s .45s cubic-bezier(.22,.68,0,1.2) both; }
  .anim-l    { animation: slideLeft 0.85s .55s cubic-bezier(.22,.68,0,1.2) both; }

  /* nav underline */
  .nav-a { position:relative; text-decoration:none; }
  .nav-a::after { content:''; position:absolute; bottom:-3px; left:0; width:0; height:2px; background:${R}; transition:width .25s; }
  .nav-a:hover::after { width:100%; }

  /* service card */
  .svc { position:relative; overflow:hidden; cursor:pointer; border-radius:0; }
  .svc img { transition: transform .7s cubic-bezier(.25,.46,.45,.94); width:100%; height:100%; object-fit:cover; display:block; }
  .svc:hover img { transform: scale(1.09); }
  .svc-overlay { position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,.2) 60%, transparent 100%); transition:background .4s; }
  .svc:hover .svc-overlay { background:linear-gradient(to top, rgba(180,10,10,.78) 0%, rgba(0,0,0,.55) 60%, transparent 100%); }
  .svc-learn { opacity:0; transform:translateY(8px); transition:opacity .3s, transform .3s; }
  .svc:hover .svc-learn { opacity:1; transform:translateY(0); }

  /* why-item card */
  .why-card { border:1px solid rgba(255,255,255,.07); transition:border-color .25s, transform .25s, background .25s; cursor:default; }
  .why-card:hover { border-color:${R}; transform:translateY(-4px); background:rgba(224,27,27,.05) !important; }

  /* button hover */
  .btn-red  { background:${R}; transition:background .2s; }
  .btn-red:hover { background:${R2}; }
  .btn-ghost { transition:border-color .2s, color .2s; }
  .btn-ghost:hover { border-color:${W} !important; color:${W} !important; }
  .btn-wht  { background:${W}; transition:background .2s; }
  .btn-wht:hover { background:#f0f0f0; }

  /* testimonial card */
  .t-card { border:1px solid rgba(255,255,255,.07); transition:border-color .25s, transform .25s; }
  .t-card:hover { border-color:rgba(224,27,27,.4); transform:translateY(-3px); }

  /* scrollbar */
  ::-webkit-scrollbar { width:6px; }
  ::-webkit-scrollbar-track { background:${BK}; }
  ::-webkit-scrollbar-thumb { background:${R}; border-radius:3px; }
`;

// ─── Overline label component ─────────────────────────────────────────────────
const OL = ({ children, light=false }) => (
  <div style={{ display:"inline-flex", alignItems:"center", gap:10, marginBottom:16 }}>
    <span style={{ display:"inline-block", width:28, height:2, background:R }} />
    <span style={{ fontFamily:OSWALD, fontWeight:500, fontSize:11, letterSpacing:"0.22em", textTransform:"uppercase", color:R }}>
      {children}
    </span>
  </div>
);

// ─── Section heading ──────────────────────────────────────────────────────────
const SH = ({ children, light=true, style={} }) => (
  <h2 style={{ fontFamily:OSWALD, fontWeight:700, fontSize:"clamp(36px,4vw,54px)", lineHeight:1.02, letterSpacing:"0.01em", color: light ? W : BK, textTransform:"uppercase", ...style }}>
    {children}
  </h2>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: DM, background: W, color: BK, overflowX:"hidden" }}>
      <style>{GLOBAL_CSS}</style>

      {/* ══════════════════════════════════════════════════════
          NAVIGATION
      ══════════════════════════════════════════════════════ */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:200, height:66,
        display:"flex", alignItems:"center",
        background: scrolled ? "rgba(12,12,12,.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid rgba(255,255,255,.06)` : "none",
        transition:"background .35s, border .35s, backdrop-filter .35s",
      }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px", width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between" }}>

          {/* Logo */}
          <a href="#" style={{ display:"flex", alignItems:"center", gap:11, textDecoration:"none" }}>
            <div style={{ width:38, height:38, background:R, borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", color:W, flexShrink:0 }}>
              <ToolIcon size={19}/>
            </div>
            <div>
              <div style={{ fontFamily:OSWALD, fontWeight:700, fontSize:17, color:W, letterSpacing:"0.08em", textTransform:"uppercase", lineHeight:1 }}>Kelijah</div>
              <div style={{ fontFamily:DM, fontSize:9, color:"rgba(255,255,255,.35)", letterSpacing:"0.16em", textTransform:"uppercase", marginTop:2 }}>Auto Spares & Garage</div>
            </div>
          </a>

          {/* Links */}
          <div style={{ display:"flex", alignItems:"center", gap:36 }}>
            {["Home","Services","About","Contact"].map(l=>(
              <a key={l} href="#" className="nav-a"
                style={{ fontFamily:OSWALD, fontWeight:500, fontSize:13, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,.58)" }}>
                {l}
              </a>
            ))}
            <a href={WA} target="_blank" rel="noreferrer" className="btn-red"
              style={{ display:"flex", alignItems:"center", gap:8, color:W, fontFamily:OSWALD, fontWeight:600, fontSize:13, letterSpacing:"0.1em", textTransform:"uppercase", padding:"10px 22px", borderRadius:4, textDecoration:"none" }}>
              <WAIcon size={15}/> Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════
          HERO  — split diagonal layout
      ══════════════════════════════════════════════════════ */}
      <section style={{ position:"relative", minHeight:"100vh", background:BK, overflow:"hidden", display:"flex", flexDirection:"column" }}>

        {/* Background image fills right ~65% */}
        <div style={{ position:"absolute", inset:0 }}>
          <img src={IMG.hero} alt="Kelijah garage workshop" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center right" }}/>
          {/* Dark gradient over whole image */}
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(100deg, rgba(12,12,12,1) 38%, rgba(12,12,12,.72) 62%, rgba(12,12,12,.18) 100%)" }} />
          {/* Subtle red tint at very bottom */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:200, background:"linear-gradient(to top, rgba(224,27,27,.15), transparent)" }} />
        </div>

        {/* Diagonal red slash accent */}
        <div style={{
          position:"absolute", top:0, left:"35%", width:6, height:"100%",
          background: `linear-gradient(to bottom, ${R}, ${R2} 60%, transparent)`,
          transform:"skewX(-8deg)",
          transformOrigin:"top",
          zIndex:2,
          opacity:.85,
        }}/>
        <div style={{
          position:"absolute", top:0, left:"calc(35% + 14px)", width:1, height:"100%",
          background:`linear-gradient(to bottom, rgba(224,27,27,.3), transparent)`,
          transform:"skewX(-8deg)",
          zIndex:2,
        }}/>

        {/* HERO CONTENT */}
        <div style={{ position:"relative", zIndex:10, flex:1, display:"flex", alignItems:"center", maxWidth:1280, margin:"0 auto", padding:"120px 32px 40px", width:"100%" }}>
          <div style={{ maxWidth:620 }}>
            {/* Eyebrow */}
            <div className="anim-up" style={{ display:"inline-flex", alignItems:"center", gap:10, marginBottom:32 }}>
              <span style={{ display:"inline-block", width:32, height:2, background:R }}/>
              <span style={{ fontFamily:OSWALD, fontWeight:500, fontSize:11, letterSpacing:"0.26em", textTransform:"uppercase", color:R }}>
                Nairobi · Industrial Area · Est. 2026
              </span>
            </div>

            {/* Giant headline */}
            <h1 className="anim-up-2" style={{
              fontFamily:OSWALD, fontWeight:700, fontSize:"clamp(64px,9.5vw,132px)",
              lineHeight:.88, letterSpacing:"0.01em", textTransform:"uppercase",
              color:W, marginBottom:6,
            }}>
              Drive In.
            </h1>
            <h1 className="anim-up-3" style={{
              fontFamily:OSWALD, fontWeight:700, fontSize:"clamp(64px,9.5vw,132px)",
              lineHeight:.88, letterSpacing:"0.01em", textTransform:"uppercase",
              color:R, marginBottom:36,
            }}>
              Drive Right.
            </h1>

            <p className="anim-up-3" style={{ fontSize:16, color:"rgba(255,255,255,.62)", lineHeight:1.78, maxWidth:460, marginBottom:44, fontWeight:300 }}>
              Professional diagnostics, precision repairs, and genuine spare parts — for private owners, fleets, and commercial vehicles.<br/>
              <span style={{ color:"rgba(255,255,255,.85)", fontWeight:500 }}>Walk-ins always welcome.</span>
            </p>

            <div className="anim-up-4" style={{ display:"flex", gap:14, flexWrap:"wrap", alignItems:"center" }}>
              <a href={WA} target="_blank" rel="noreferrer" className="btn-red"
                style={{ display:"flex", alignItems:"center", gap:10, color:W, fontFamily:OSWALD, fontWeight:600, fontSize:13, letterSpacing:"0.1em", textTransform:"uppercase", padding:"16px 32px", borderRadius:4, textDecoration:"none" }}>
                <WAIcon size={18}/> Book via WhatsApp
              </a>
              <a href="#services" className="btn-ghost"
                style={{ display:"flex", alignItems:"center", gap:8, color:"rgba(255,255,255,.7)", fontFamily:OSWALD, fontWeight:600, fontSize:13, letterSpacing:"0.1em", textTransform:"uppercase", padding:"15px 30px", borderRadius:4, border:"1.5px solid rgba(255,255,255,.2)", textDecoration:"none" }}>
                Our Services <ArrowRight size={15}/>
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip pinned to bottom of hero */}
        <div className="anim-l" style={{ position:"relative", zIndex:10 }}>
          {/* thin red top line */}
          <div style={{ height:2, background:`linear-gradient(90deg, ${R} 0%, ${R2} 40%, transparent 100%)` }}/>
          <div style={{ background:"rgba(12,12,12,.85)", backdropFilter:"blur(14px)" }}>
            <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px", display:"grid", gridTemplateColumns:"repeat(4,1fr)" }}>
              {[
                { n:"500+", l:"Vehicles Serviced" },
                { n:"8+",   l:"Years Experience"  },
                { n:"8",    l:"Service Categories"},
                { n:"100%", l:"Transparent Pricing"},
              ].map((s,i)=>(
                <div key={i} style={{ padding:"24px 0", textAlign:"center", borderRight: i<3 ? "1px solid rgba(255,255,255,.06)" : "none" }}>
                  <div style={{ fontFamily:OSWALD, fontWeight:700, fontSize:38, color:R, letterSpacing:"0.02em", lineHeight:1 }}>{s.n}</div>
                  <div style={{ fontFamily:DM, fontSize:10, fontWeight:500, letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(255,255,255,.28)", marginTop:6 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TRUST MARQUEE
      ══════════════════════════════════════════════════════ */}
      <div className="mq-root" style={{ background:R, overflow:"hidden", padding:"12px 0" }}>
        <div className="mq-fwd">
          {TRUST_ITEMS.map((t,i)=>(
            <span key={i} style={{ display:"inline-flex", alignItems:"center", gap:12, padding:"0 26px" }}>
              <span style={{ fontFamily:OSWALD, fontWeight:500, fontSize:12, letterSpacing:"0.18em", textTransform:"uppercase", color:W }}>{t}</span>
              <span style={{ display:"inline-block", width:4, height:4, borderRadius:"50%", background:"rgba(255,255,255,.45)" }}/>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════════════ */}
      <section style={{ background:BK, padding:"112px 32px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>

          {/* Image column — layered effect */}
          <div style={{ position:"relative" }}>
            {/* Main image */}
            <div style={{ borderRadius:8, overflow:"hidden", aspectRatio:"4/3" }}>
              <img src={IMG.about} alt="Kelijah garage interior" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}/>
            </div>
            {/* Red badge overlapping bottom-right */}
            <div style={{ position:"absolute", bottom:-20, right:-20, background:R, borderRadius:6, padding:"20px 26px", textAlign:"center", zIndex:2 }}>
              <div style={{ fontFamily:OSWALD, fontWeight:700, fontSize:40, color:W, lineHeight:1 }}>EST.</div>
              <div style={{ fontFamily:OSWALD, fontWeight:700, fontSize:40, color:W, lineHeight:1 }}>2026</div>
            </div>
            {/* Thin red border offset */}
            <div style={{ position:"absolute", top:16, left:-16, right:16, bottom:-36, border:`1.5px solid rgba(224,27,27,.22)`, borderRadius:10, zIndex:0 }}/>
            {/* Small stat card overlapping top-left */}
            <div style={{ position:"absolute", top:-20, left:-20, background:"#161616", border:"1px solid rgba(255,255,255,.1)", borderRadius:8, padding:"16px 22px", zIndex:3 }}>
              <div style={{ fontFamily:OSWALD, fontWeight:700, fontSize:28, color:R, lineHeight:1 }}>100%</div>
              <div style={{ fontFamily:DM, fontSize:11, color:"rgba(255,255,255,.45)", letterSpacing:"0.1em", textTransform:"uppercase", marginTop:3 }}>Honest Quotes</div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <OL>Who We Are</OL>
            <SH style={{ marginBottom:24 }}>
              Built on Trust,<br/><span style={{ color:R }}>Driven by Precision.</span>
            </SH>
            <p style={{ fontSize:15, color:"rgba(255,255,255,.52)", lineHeight:1.88, marginBottom:18 }}>
              Kelijah Auto Spares & Garage is a professional auto service centre in Nairobi built on honest diagnostics, quality workmanship, and genuine parts. We serve private vehicle owners, fleet operators, and commercial clients.
            </p>
            <p style={{ fontSize:15, color:"rgba(255,255,255,.52)", lineHeight:1.88, marginBottom:36 }}>
              No inflated quotes, no guesswork, no shortcuts. We tell you what's wrong, quote fairly, and get it done right. Walk-ins are always welcome alongside booked appointments.
            </p>

            {/* Value chips */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:42 }}>
              {["Integrity","Excellence","Reliability","Customer Focus","Innovation"].map(v=>(
                <div key={v} style={{ display:"inline-flex", alignItems:"center", gap:7, background:"rgba(224,27,27,.08)", border:`1px solid rgba(224,27,27,.22)`, borderRadius:3, padding:"7px 14px" }}>
                  <CheckIcon size={13}/>
                  <span style={{ fontFamily:OSWALD, fontWeight:500, fontSize:12, letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(224,27,27,.9)" }}>{v}</span>
                </div>
              ))}
            </div>

            <a href={WA} target="_blank" rel="noreferrer" className="btn-red"
              style={{ display:"inline-flex", alignItems:"center", gap:10, color:W, fontFamily:OSWALD, fontWeight:600, fontSize:13, letterSpacing:"0.1em", textTransform:"uppercase", padding:"16px 30px", borderRadius:4, textDecoration:"none" }}>
              <WAIcon size={16}/> Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BRANDS MARQUEE
      ══════════════════════════════════════════════════════ */}
      <div style={{ background:"#111", borderTop:"1px solid rgba(255,255,255,.05)", borderBottom:"1px solid rgba(255,255,255,.05)", paddingTop:14, paddingBottom:20 }}>
        <div style={{ fontFamily:OSWALD, fontWeight:500, fontSize:10, letterSpacing:"0.26em", textTransform:"uppercase", color:"rgba(255,255,255,.18)", textAlign:"center", marginBottom:14, padding:"6px 0 0" }}>
          Brands We Service
        </div>
        <div className="mq-root" style={{ overflow:"hidden" }}>
          <div className="mq-back">
            {BRANDS.map((b,i)=>(
              <div key={i} style={{ display:"inline-flex", alignItems:"center", gap:20, padding:"0 24px" }}>
                <span style={{ fontFamily:OSWALD, fontWeight:600, fontSize:13, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,.2)" }}>{b}</span>
                <span style={{ display:"inline-block", width:3, height:3, borderRadius:"50%", background:`rgba(224,27,27,.4)` }}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          SERVICES  — image cards, 4-col grid
      ══════════════════════════════════════════════════════ */}
      <section id="services" style={{ background:W, padding:"112px 0 0" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:52, flexWrap:"wrap", gap:20 }}>
            <div>
              <OL>Expert Solutions</OL>
              <SH light={false} style={{ color:BK }}>Professional<br />Services</SH>
            </div>
            <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily:OSWALD, fontWeight:600, fontSize:12, letterSpacing:"0.14em", textTransform:"uppercase", color:R, textDecoration:"none", border:`1.5px solid ${R}`, padding:"12px 22px", borderRadius:4, whiteSpace:"nowrap" }}>
              View All Services <ArrowRight size={14}/>
            </a>
          </div>
        </div>

        {/* 4-col grid flush to edges */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:0 }}>
          {SERVICES.map((s,i)=>(
            <div
              key={s.id}
              className="svc"
              style={{ aspectRatio:"3/4", background:"#111", position:"relative" }}
              onMouseEnter={()=>setActiveService(i)}
              onMouseLeave={()=>setActiveService(null)}
            >
              <img src={IMG[s.id]} alt={s.title.replace("\n"," ")}/>
              <div className="svc-overlay"/>
              <div style={{ position:"absolute", inset:0, padding:"24px 22px", display:"flex", flexDirection:"column", justifyContent:"flex-end", zIndex:1 }}>
                {/* num */}
                <div style={{ fontFamily:OSWALD, fontWeight:700, fontSize:11, letterSpacing:"0.18em", color:"rgba(255,255,255,.4)", marginBottom:10 }}>{s.num}</div>
                <h3 style={{ fontFamily:OSWALD, fontWeight:700, fontSize:19, color:W, lineHeight:1.18, marginBottom:10, textTransform:"uppercase", whiteSpace:"pre-line" }}>{s.title}</h3>
                <p style={{ fontFamily:DM, fontSize:12, color:"rgba(255,255,255,.65)", lineHeight:1.7, marginBottom:14 }}>{s.desc}</p>
                <div className="svc-learn" style={{ display:"flex", alignItems:"center", gap:7, fontFamily:OSWALD, fontWeight:600, fontSize:12, letterSpacing:"0.12em", textTransform:"uppercase", color:R }}>
                  Learn More <ArrowRight size={14} color={R}/>
                </div>
              </div>
              {/* Red accent line on hover — top */}
              {activeService===i && <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:R, zIndex:2 }}/>}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY CHOOSE US  — sticky left + cards right
      ══════════════════════════════════════════════════════ */}
      <section style={{ background:BK, padding:"112px 32px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1.15fr", gap:80, alignItems:"start" }}>

          {/* Left sticky */}
          <div style={{ position:"sticky", top:90 }}>
            <OL>Why Choose Us</OL>
            <SH style={{ marginBottom:24 }}>
              Premium Workshop<br/>Standards,<br/><span style={{ color:R }}>Every Time.</span>
            </SH>
            <p style={{ fontSize:15, color:"rgba(255,255,255,.44)", lineHeight:1.85, marginBottom:44 }}>
              We don't just fix cars — we build trust. Every vehicle comes with a transparent report, honest communication, and work that stands behind itself.
            </p>

            {/* Direct support card */}
            <div style={{ background:"#151515", border:"1px solid rgba(255,255,255,.08)", borderRadius:8, padding:28 }}>
              <div style={{ fontFamily:OSWALD, fontWeight:500, fontSize:10, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,.28)", marginBottom:10 }}>Direct Support</div>
              <div style={{ fontFamily:OSWALD, fontWeight:700, fontSize:24, color:W, marginBottom:10, textTransform:"uppercase", letterSpacing:"0.02em" }}>Need Help Right Now?</div>
              <p style={{ fontFamily:DM, fontSize:13, color:"rgba(255,255,255,.44)", lineHeight:1.76, marginBottom:22 }}>
                Reach our advisors directly for immediate diagnostics, appointment scheduling, or parts support.
              </p>
              <a href="tel:+254700000000"
                style={{ display:"flex", alignItems:"center", gap:12, background:"rgba(224,27,27,.1)", border:"1px solid rgba(224,27,27,.25)", borderRadius:6, padding:"13px 18px", textDecoration:"none", marginBottom:10, color:W }}>
                <Phone size={16}/><span style={{ fontFamily:OSWALD, fontWeight:600, fontSize:16, letterSpacing:"0.04em" }}>+254 700 000 000</span>
              </a>
              <a href={WA} target="_blank" rel="noreferrer" className="btn-red"
                style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:9, color:W, fontFamily:OSWALD, fontWeight:600, fontSize:13, letterSpacing:"0.1em", textTransform:"uppercase", padding:"13px 18px", borderRadius:6, textDecoration:"none", marginTop:10 }}>
                <WAIcon size={16}/> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right grid — 2×3 */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
            {[
              { label:"Skilled Technicians",       desc:"Highly qualified mechanics specialising in modern vehicle diagnostics and complex repairs." },
              { label:"Genuine OEM Parts",          desc:"Direct-sourced authentic spare parts to ensure durability and preserve your vehicle's value." },
              { label:"Transparent Pricing",        desc:"Full cost breakdown before any work begins. You approve — we execute. No hidden charges." },
              { label:"Fast Turnaround",            desc:"Efficient workshop workflows so your vehicle is serviced, checked, and returned promptly." },
              { label:"Walk-ins Welcome",           desc:"Booked or not, drive in and we'll attend to you. No appointment needed to get help." },
              { label:"Fleet & Commercial Support", desc:"Tailored service programs for fleet owners and commercial vehicle operators across Nairobi." },
            ].map((w,i)=>(
              <div key={i} className="why-card" style={{ background:"#111", borderRadius:8, padding:"24px 20px" }}>
                <div style={{ width:38, height:38, background:"rgba(224,27,27,.12)", borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14, color:R }}>
                  <CheckIcon size={17}/>
                </div>
                <h3 style={{ fontFamily:OSWALD, fontWeight:600, fontSize:15, color:W, marginBottom:8, textTransform:"uppercase", letterSpacing:"0.06em" }}>{w.label}</h3>
                <p style={{ fontFamily:DM, fontSize:13, color:"rgba(255,255,255,.38)", lineHeight:1.76 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════════════ */}
      <section style={{ background:"#F7F7F7", padding:"112px 32px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:72 }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:12, marginBottom:16 }}>
              <span style={{ display:"inline-block", width:28, height:2, background:R }}/>
              <span style={{ fontFamily:OSWALD, fontWeight:500, fontSize:11, letterSpacing:"0.24em", textTransform:"uppercase", color:R }}>The Process</span>
              <span style={{ display:"inline-block", width:28, height:2, background:R }}/>
            </div>
            <SH light={false} style={{ color:BK }}>
              From Booking to <span style={{ color:R }}>Back on the Road</span>
            </SH>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:0, position:"relative" }}>
            {/* Connector */}
            <div style={{ position:"absolute", top:32, left:"12.5%", right:"12.5%", height:1, background:`linear-gradient(90deg, ${R}, rgba(224,27,27,.15))` }}/>
            {[
              { n:"01", t:"Book or Walk In",    d:"Message us on WhatsApp or simply drive in. No waiting, no queuing — we attend to you on arrival." },
              { n:"02", t:"Vehicle Check-In",   d:"Our team logs and inspects your vehicle. A full diagnostic report is shared with you before anything begins." },
              { n:"03", t:"Approved Repair",    d:"Work only starts after your explicit approval. You'll know the cost, timeline, and parts used." },
              { n:"04", t:"Drive Away Confident",d:"We notify you when done. Quality-checked, tested, and ready. Your vehicle back in peak condition." },
            ].map((s,i)=>(
              <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", padding:"0 20px" }}>
                <div style={{ width:64, height:64, borderRadius:"50%", background:"#F7F7F7", border:`2px solid ${R}`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:26, position:"relative", zIndex:1, boxShadow:`0 0 0 8px #F7F7F7` }}>
                  <span style={{ fontFamily:OSWALD, fontWeight:700, fontSize:20, color:R }}>{s.n}</span>
                </div>
                <h3 style={{ fontFamily:OSWALD, fontWeight:600, fontSize:14, color:BK, marginBottom:10, textTransform:"uppercase", letterSpacing:"0.08em" }}>{s.t}</h3>
                <p style={{ fontFamily:DM, fontSize:13, color:"#888", lineHeight:1.78 }}>{s.d}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign:"center", marginTop:64 }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-red"
              style={{ display:"inline-flex", alignItems:"center", gap:10, color:W, fontFamily:OSWALD, fontWeight:600, fontSize:13, letterSpacing:"0.1em", textTransform:"uppercase", padding:"16px 36px", borderRadius:4, textDecoration:"none" }}>
              <WAIcon size={16}/> Book Your Appointment Now
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section style={{ background:BK, padding:"112px 32px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:56, flexWrap:"wrap", gap:24 }}>
            <div>
              <OL>Client Reviews</OL>
              <SH>Trusted by<br/>Nairobi Drivers</SH>
            </div>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:6 }}>
              <div style={{ display:"flex", gap:4 }}>{[...Array(5)].map((_,i)=><Star key={i}/>)}</div>
              <div style={{ fontFamily:OSWALD, fontWeight:600, fontSize:16, color:W, letterSpacing:"0.05em" }}>4.9 / 5.0</div>
              <div style={{ fontFamily:DM, fontSize:12, color:"rgba(255,255,255,.3)", letterSpacing:"0.08em", textTransform:"uppercase" }}>Verified Customer Reviews</div>
            </div>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:16 }}>
            {TESTIMONIALS.map((t,i)=>(
              <div key={i} className="t-card" style={{ background:"#111", borderRadius:8, padding:34, display:"flex", flexDirection:"column", gap:20 }}>
                <div style={{ display:"flex", gap:4 }}>{[...Array(5)].map((_,j)=><Star key={j}/>)}</div>
                <p style={{ fontFamily:DM, fontSize:15, color:"rgba(255,255,255,.74)", lineHeight:1.86, fontStyle:"italic", flex:1 }}>
                  "{t.text}"
                </p>
                <div style={{ display:"flex", alignItems:"center", gap:14, borderTop:"1px solid rgba(255,255,255,.07)", paddingTop:20 }}>
                  <div style={{ width:44, height:44, borderRadius:"50%", background:"rgba(224,27,27,.14)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:OSWALD, fontWeight:700, fontSize:15, color:R, flexShrink:0 }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontFamily:OSWALD, fontWeight:600, fontSize:15, color:W, letterSpacing:"0.04em" }}>{t.name}</div>
                    <div style={{ fontFamily:DM, fontSize:11, color:"rgba(255,255,255,.28)", letterSpacing:"0.08em", textTransform:"uppercase", marginTop:3 }}>{t.tag}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA STRIP
      ══════════════════════════════════════════════════════ */}
      <section style={{ background:R, padding:"88px 32px", position:"relative", overflow:"hidden" }}>
        {/* Diagonal texture */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"repeating-linear-gradient(-52deg,transparent,transparent 36px,rgba(0,0,0,.055) 36px,rgba(0,0,0,.055) 72px)" }}/>
        {/* Big faded text background */}
        <div style={{ position:"absolute", right:-20, top:"50%", transform:"translateY(-50%)", fontFamily:OSWALD, fontWeight:700, fontSize:"clamp(80px,14vw,180px)", color:"rgba(0,0,0,.08)", letterSpacing:"0.02em", textTransform:"uppercase", whiteSpace:"nowrap", userSelect:"none", pointerEvents:"none" }}>
          BOOK NOW
        </div>
        <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", display:"flex", alignItems:"center", justifyContent:"space-between", gap:40, flexWrap:"wrap" }}>
          <div>
            <h2 style={{ fontFamily:OSWALD, fontWeight:700, fontSize:"clamp(32px,5vw,58px)", color:W, letterSpacing:"0.02em", textTransform:"uppercase", lineHeight:1.0, marginBottom:14 }}>
              Ready to Book<br/>Your Service?
            </h2>
            <p style={{ fontFamily:DM, fontSize:16, color:"rgba(255,255,255,.8)", lineHeight:1.7, maxWidth:440 }}>
              Same-day slots available. Walk-ins always welcome. WhatsApp us now and we'll confirm within minutes.
            </p>
          </div>
          <div style={{ display:"flex", gap:14, flexWrap:"wrap", flexShrink:0 }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wht"
              style={{ display:"flex", alignItems:"center", gap:10, color:R, fontFamily:OSWALD, fontWeight:700, fontSize:13, letterSpacing:"0.1em", textTransform:"uppercase", padding:"17px 30px", borderRadius:4, textDecoration:"none", whiteSpace:"nowrap" }}>
              <WAIcon size={16}/> WhatsApp Us
            </a>
            <a href="#" className="btn-ghost"
              style={{ display:"flex", alignItems:"center", gap:10, color:"rgba(255,255,255,.85)", fontFamily:OSWALD, fontWeight:700, fontSize:13, letterSpacing:"0.1em", textTransform:"uppercase", padding:"17px 30px", borderRadius:4, border:"2px solid rgba(255,255,255,.4)", textDecoration:"none", whiteSpace:"nowrap" }}>
              Book Online <ArrowRight size={15}/>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LOCATION
      ══════════════════════════════════════════════════════ */}
      <section style={{ background:BK, padding:"112px 32px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1.35fr", gap:72, alignItems:"start" }}>
          <div>
            <OL>Find Us</OL>
            <SH style={{ marginBottom:40 }}>Visit the Garage</SH>

            {[
              { icon:<MapPin size={17}/>, label:"Address",         val:"Enterprise Road, Industrial Area", sub:"Between Dakar & Funzi Rd, Nairobi, Kenya" },
              { icon:<Clock size={17}/>,  label:"Working Hours",    val:"Mon – Sat: 8:00 AM – 6:30 PM",     sub:"Sunday: Emergency support available · Walk-ins welcome" },
              { icon:<Phone size={17}/>,  label:"Call or WhatsApp", val:"+254 700 000 000",                 sub:"Direct line for bookings and urgent vehicle queries" },
            ].map((d,i)=>(
              <div key={i} style={{ display:"flex", gap:16, alignItems:"flex-start", marginBottom:28, paddingBottom:28, borderBottom: i<2 ? "1px solid rgba(255,255,255,.07)" : "none" }}>
                <div style={{ width:42, height:42, background:"rgba(224,27,27,.1)", border:`1px solid rgba(224,27,27,.22)`, borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", color:R, flexShrink:0 }}>
                  {d.icon}
                </div>
                <div>
                  <div style={{ fontFamily:OSWALD, fontWeight:500, fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,.22)", marginBottom:4 }}>{d.label}</div>
                  <div style={{ fontFamily:OSWALD, fontWeight:600, fontSize:16, color:W, letterSpacing:"0.04em", marginBottom:4 }}>{d.val}</div>
                  <div style={{ fontFamily:DM, fontSize:13, color:"rgba(255,255,255,.38)", lineHeight:1.6 }}>{d.sub}</div>
                </div>
              </div>
            ))}

            <a href={WA} target="_blank" rel="noreferrer" className="btn-red"
              style={{ display:"inline-flex", alignItems:"center", gap:10, color:W, fontFamily:OSWALD, fontWeight:600, fontSize:13, letterSpacing:"0.1em", textTransform:"uppercase", padding:"14px 28px", borderRadius:4, textDecoration:"none", marginTop:12 }}>
              <WAIcon size={16}/> Get in Touch
            </a>
          </div>

          {/* Map */}
          <div style={{ borderRadius:8, overflow:"hidden", border:"1px solid rgba(255,255,255,.08)", position:"relative" }}>
            {/* Replace with actual embed from Google Maps → Share → Embed map */}
            <iframe
              title="Kelijah Auto Garage Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.093898986786!2d36.81819571558793!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22693c689%3A0x5be89fb2f9da77b3!2sNairobi!5e0!3m2!1sen!2ske!4v1680000000000!5m2!1sen!2ske"
              width="100%" height="460"
              style={{ border:0, display:"block" }}
              allowFullScreen loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer style={{ background:"#070707", borderTop:"1px solid rgba(255,255,255,.06)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"72px 32px 32px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1.7fr 1fr 1fr 1fr", gap:52, paddingBottom:52, borderBottom:"1px solid rgba(255,255,255,.07)", marginBottom:32 }}>

            {/* Brand */}
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:18 }}>
                <div style={{ width:40, height:40, background:R, borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", color:W }}>
                  <ToolIcon size={18}/>
                </div>
                <div>
                  <div style={{ fontFamily:OSWALD, fontWeight:700, fontSize:16, color:W, letterSpacing:"0.09em", textTransform:"uppercase", lineHeight:1 }}>Kelijah</div>
                  <div style={{ fontFamily:DM, fontSize:9, color:"rgba(255,255,255,.28)", letterSpacing:"0.16em", textTransform:"uppercase", marginTop:3 }}>Auto Spares & Garage</div>
                </div>
              </div>
              <p style={{ fontFamily:DM, fontSize:13, color:"rgba(255,255,255,.3)", lineHeight:1.88, marginBottom:24, maxWidth:260 }}>
                Nairobi's trusted garage for precision diagnostics, honest repairs, and genuine spare parts. Your car is in good hands.
              </p>
              <div style={{ fontFamily:OSWALD, fontWeight:500, fontSize:11, color:"rgba(255,255,255,.18)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:20 }}>
                Mon–Sat 8AM–6:30PM · Sunday Emergency
              </div>
              {/* Social stubs */}
              <div style={{ display:"flex", gap:10 }}>
                {["FB","IG","WA","TT"].map(s=>(
                  <a key={s} href="#"
                    style={{ width:34, height:34, border:"1px solid rgba(255,255,255,.1)", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:OSWALD, fontWeight:700, fontSize:11, color:"rgba(255,255,255,.28)", textDecoration:"none", letterSpacing:"0.04em" }}>
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Top Services */}
            <div>
              <div style={{ fontFamily:OSWALD, fontWeight:600, fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", color:W, marginBottom:22 }}>Top Services</div>
              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:12 }}>
                {["Engine Diagnostics","Full Vehicle Servicing","Brake Repair","Suspension & Steering","Clutch & Gearbox","Electrical Diagnostics","Battery Services","Oil & Filter"].map(l=>(
                  <li key={l}><a href="#" style={{ fontFamily:DM, fontSize:13, color:"rgba(255,255,255,.3)", textDecoration:"none" }}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Main Pages */}
            <div>
              <div style={{ fontFamily:OSWALD, fontWeight:600, fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", color:W, marginBottom:22 }}>Main Pages</div>
              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:12 }}>
                {["Home","Services","About Us","Book Appointment","Contact Us"].map(l=>(
                  <li key={l}><a href="#" style={{ fontFamily:DM, fontSize:13, color:"rgba(255,255,255,.3)", textDecoration:"none" }}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div style={{ fontFamily:OSWALD, fontWeight:600, fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", color:W, marginBottom:22 }}>Contact</div>
              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:13 }}>
                {[
                  {icon:<Phone size={13}/>, text:"+254 700 000 000"},
                  {icon:<Phone size={13}/>, text:"+254 700 000 001"},
                  {icon:<WAIcon size={13}/>, text:"WhatsApp Support"},
                  {icon:<MapPin size={13}/>, text:"Industrial Area, Nairobi"},
                  {icon:<Clock size={13}/>, text:"Mon–Sat 8:00–18:30"},
                ].map((c,i)=>(
                  <li key={i} style={{ display:"flex", alignItems:"center", gap:9 }}>
                    <span style={{ color:"rgba(224,27,27,.7)", flexShrink:0 }}>{c.icon}</span>
                    <span style={{ fontFamily:DM, fontSize:13, color:"rgba(255,255,255,.3)" }}>{c.text}</span>
                  </li>
                ))}
                <li style={{ marginTop:6 }}>
                  <a href="#" style={{ fontFamily:OSWALD, fontWeight:600, fontSize:12, color:R, textDecoration:"none", letterSpacing:"0.08em", display:"flex", alignItems:"center", gap:6 }}>
                    Open Map <ArrowRight size={12} color={R}/>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:10 }}>
            <span style={{ fontFamily:DM, fontSize:12, color:"rgba(255,255,255,.18)" }}>© 2024 Kelijah Auto Spares & Garage. All rights reserved.</span>
            <span style={{ fontFamily:DM, fontSize:12, color:"rgba(255,255,255,.18)" }}>
              Built by <span style={{ color:R }}>Athanas Muinde</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}