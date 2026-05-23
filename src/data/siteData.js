/**
 * siteData.js
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for ALL site content.
 * Components never hardcode text, links, or configuration.
 * Update content here — UI updates everywhere automatically.
 * ─────────────────────────────────────────────────────────────
 */

// ── Contact & Business Info ───────────────────────────────────
export const BUSINESS = {
  name:         "Kelijah Auto Spares & Garage",
  shortName:    "Kelijah",
  tagline:      "Driving Performance. Delivering Reliability.",
  phone1:       "+254 700 000 000",
  phone2:       "+254 700 000 001",
  email:        "info@kelijahauto.co.ke",
  address:      "Enterprise Road, Industrial Area",
  addressFull:  "Enterprise Road, Industrial Area, Between Dakar & Funzi Rd, Nairobi, Kenya",
  hours:        "Mon – Sat: 8:00 AM – 6:30 PM",
  hoursSunday:  "Sunday: Emergency support available",
  established:  "2024",
  city:         "Nairobi, Kenya",
  // WhatsApp — number only, no + or spaces
  waNumber:     "254700000000",
  // Google Maps embed src — replace with actual embed URL from Google Maps
  mapEmbedSrc:  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.093898986786!2d36.81819571558793!3d-1.2920659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22693c689%3A0x5be89fb2f9da77b3!2sNairobi!5e0!3m2!1sen!2ske!4v1680000000000!5m2!1sen!2ske",
};

// ── WhatsApp link builder ─────────────────────────────────────
/**
 * Builds a WhatsApp deep link with an optional pre-filled message.
 * @param {string} message - Plain text message (will be URI encoded)
 * @returns {string} Full WhatsApp URL
 */
export const buildWALink = (message = "Hello Kelijah Auto, I would like to book an appointment.") =>
  `https://wa.me/${BUSINESS.waNumber}?text=${encodeURIComponent(message)}`;

// Default booking link (used in nav, hero, CTA strip)
export const WA_LINK = buildWALink();

// ── Navigation Links ──────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",             path: "/"            },
  { label: "Services",         path: "/services"    },
  { label: "About",            path: "/#about"      },
  { label: "Contact",          path: "/#location"   },
];

// ── Stats (Hero section) ──────────────────────────────────────
export const STATS = [
  { number: "500+", label: "Vehicles Serviced"  },
  { number: "8+",   label: "Years Experience"   },
  { number: "8",    label: "Service Categories" },
  { number: "100%", label: "Transparent Pricing"},
];

// ── Services ──────────────────────────────────────────────────
/**
 * Each service has:
 *  - slug:      used for dynamic routing /services/:slug
 *  - num:       display number "01" – "08"
 *  - title:     short display title (can include \n for line break in cards)
 *  - fullTitle: clean title used in headings, meta, WhatsApp messages
 *  - desc:      one-line summary shown on cards
 *  - longDesc:  paragraph shown on the service detail page
 *  - steps:     how we deliver this service (service detail page)
 *  - faqs:      accordion items on service detail page
 *  - image:     Unsplash URL — replace with client photos later
 */
export const SERVICES = [
  {
    slug:      "engine-diagnostics",
    num:       "01",
    title:     "Engine Diagnostics\n& Mechanical Repairs",
    fullTitle: "Engine Diagnostics & Mechanical Repairs",
    desc:      "Accurate fault detection and dependable mechanical repair for petrol and diesel engines.",
    longDesc:  "Our engine diagnostic service uses professional-grade OBD-II scan tools to pinpoint faults quickly and accurately. Whether it's a persistent warning light, rough idle, loss of power, or unusual noise — we identify the root cause and repair it properly, not temporarily.",
    steps: [
      { num: "01", title: "Initial Scan",        desc: "We connect diagnostic equipment to read all fault codes across engine, transmission, and ancillary systems." },
      { num: "02", title: "Physical Inspection",  desc: "A hands-on check of belts, hoses, fluids, mounts, and visible components to catch what scanners miss." },
      { num: "03", title: "Quote & Approval",     desc: "We present a full written quote. Work only begins after your explicit approval." },
      { num: "04", title: "Repair & Road Test",   desc: "Repairs completed using quality parts. Vehicle road-tested before handover." },
    ],
    faqs: [
      { q: "How long does a diagnostic take?",             a: "A standard OBD-II diagnostic scan takes 30–60 minutes. Complex issues may require additional time for physical inspection." },
      { q: "Do I need to book or can I walk in?",          a: "Both. Walk-ins are welcome and we'll attend to you promptly. Booking via WhatsApp ensures a dedicated bay is ready for you." },
      { q: "Will I be charged if nothing is found?",       a: "Yes, a diagnostic fee applies regardless — it covers technician time and equipment use. We'll always tell you upfront." },
      { q: "What engine types do you work on?",            a: "Petrol and diesel engines across all major brands — Japanese, European, and American vehicles." },
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
  },
  {
    slug:      "vehicle-servicing",
    num:       "02",
    title:     "Full Vehicle Servicing\n& Preventive Maintenance",
    fullTitle: "Full Vehicle Servicing & Preventive Maintenance",
    desc:      "Scheduled maintenance programs that protect performance, reliability, and resale value.",
    longDesc:  "Regular servicing is the single most effective way to extend your vehicle's lifespan and protect its resale value. Our full service covers all manufacturer-recommended checks and replacements, documented and returned to you in writing.",
    steps: [
      { num: "01", title: "Service Assessment",   desc: "We review your vehicle's service history and manufacturer schedule to determine what's due." },
      { num: "02", title: "Full Inspection",      desc: "60-point inspection covering fluids, filters, brakes, tyres, lights, steering, and electrical systems." },
      { num: "03", title: "Parts & Labour Quote", desc: "Transparent itemised quote before any parts are ordered or work begins." },
      { num: "04", title: "Service & Sign-Off",   desc: "All work completed, documented, and signed off with a service record update." },
    ],
    faqs: [
      { q: "How often should I service my car?",           a: "Every 5,000 km for older vehicles or those using conventional oil. Every 10,000–15,000 km for newer vehicles with synthetic oil. Check your owner's manual." },
      { q: "What's included in a full service?",           a: "Oil and filter change, air filter, cabin filter, brake fluid check, tyre pressure, battery test, all fluid top-ups, lights, wipers, and a full inspection report." },
      { q: "Do you use genuine parts?",                    a: "Yes. We use OEM or high-quality aftermarket parts approved for your vehicle's make and model." },
    ],
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
  },
  {
    slug:      "brake-system",
    num:       "03",
    title:     "Brake System\nInspection & Repair",
    fullTitle: "Brake System Inspection & Repair",
    desc:      "Safety-focused brake diagnostics, replacement, and restoration for confident stopping.",
    longDesc:  "Your brakes are the most critical safety system on your vehicle. We perform comprehensive brake inspections covering pads, discs, callipers, brake fluid, and ABS sensors — and repair or replace only what is genuinely necessary.",
    steps: [
      { num: "01", title: "Visual & Physical Check", desc: "Wheel-off inspection of pads, discs, callipers, and brake lines for wear, damage, and leaks." },
      { num: "02", title: "Brake Fluid Test",         desc: "Moisture content and boiling point tested — contaminated fluid is a safety risk." },
      { num: "03", title: "ABS & Sensor Check",       desc: "Electronic scan of ABS module and wheel speed sensors for fault codes." },
      { num: "04", title: "Repair & Test Drive",      desc: "Repairs completed. Brake performance verified on a test drive before handover." },
    ],
    faqs: [
      { q: "What are signs my brakes need attention?",     a: "Squealing or grinding sounds, a soft or spongy pedal, pulling to one side, vibration when braking, or the brake warning light coming on." },
      { q: "How long do brake pads last?",                 a: "Typically 30,000–70,000 km depending on driving style, vehicle weight, and pad quality. City driving wears them faster." },
      { q: "Can I drive with worn brakes?",                a: "No. Worn brakes are a serious safety hazard. If you suspect brake problems, book immediately or drive in." },
    ],
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
  },
  {
    slug:      "suspension-steering",
    num:       "04",
    title:     "Suspension &\nSteering Services",
    fullTitle: "Suspension & Steering Services",
    desc:      "Restored ride stability, steering response, and handling confidence on any road.",
    longDesc:  "Nairobi roads are demanding on suspension and steering components. We diagnose and repair shock absorbers, struts, ball joints, tie rods, bushings, and power steering systems — restoring ride quality and handling safety.",
    steps: [
      { num: "01", title: "Ride & Handling Assessment", desc: "Test drive to identify symptoms — pulling, bouncing, vibration, or poor steering response." },
      { num: "02", title: "Undercarriage Inspection",   desc: "Vehicle raised for hands-on inspection of all suspension and steering components." },
      { num: "03", title: "Parts & Quote",              desc: "Failed components identified, parts sourced, quote presented for approval." },
      { num: "04", title: "Repair & Alignment Check",   desc: "Components replaced. Wheel alignment checked and corrected where required." },
    ],
    faqs: [
      { q: "How do I know if my suspension is failing?",   a: "Excessive bouncing, a rough or noisy ride, uneven tyre wear, vehicle pulling to one side, or a loose/vague steering feel." },
      { q: "Do you do wheel alignment?",                   a: "We check alignment as part of suspension work. For standalone alignment, please call ahead to confirm availability." },
      { q: "Is suspension repair urgent?",                 a: "Yes. Failed suspension components affect vehicle control and can cause tyre blowouts and accidents." },
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    slug:      "clutch-gearbox",
    num:       "05",
    title:     "Clutch &\nGearbox Repair",
    fullTitle: "Clutch & Gearbox Repair",
    desc:      "Transmission and clutch repair to restore smooth shifting and drivetrain efficiency.",
    longDesc:  "Clutch and gearbox faults range from simple adjustments to full rebuilds. We work on manual and automatic transmissions across all major vehicle brands, diagnosing accurately before recommending any repair to avoid unnecessary expense.",
    steps: [
      { num: "01", title: "Symptom Diagnosis",     desc: "Road test and diagnostic scan to identify whether the issue is clutch, gearbox, or drivetrain related." },
      { num: "02", title: "Component Inspection",  desc: "Clutch plate, pressure plate, release bearing, gearbox oil, and linkages inspected." },
      { num: "03", title: "Repair Quote",          desc: "Itemised quote. We'll explain what failed, why, and what the repair involves." },
      { num: "04", title: "Rebuild & Road Test",   desc: "Repair or replacement completed. Extended road test to verify smooth operation." },
    ],
    faqs: [
      { q: "What are signs of clutch failure?",            a: "Slipping clutch (engine revs don't translate to speed), difficulty engaging gears, burning smell, or a clutch pedal that sits too high or low." },
      { q: "Can you repair automatic gearboxes?",          a: "Yes. We work on both manual and automatic transmissions including fluid flushes, solenoid replacements, and full rebuilds." },
      { q: "How long does a clutch replacement take?",     a: "Typically half a day to a full day depending on the vehicle. We'll give you a time estimate when you book." },
    ],
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&q=80",
  },
  {
    slug:      "electrical-diagnostics",
    num:       "06",
    title:     "Electrical System\nDiagnostics",
    fullTitle: "Electrical System Diagnostics",
    desc:      "Comprehensive electrical troubleshooting for sensors, lighting, charging, and wiring.",
    longDesc:  "Modern vehicles are 60% software and electronics. Intermittent faults, warning lights, dead electrics, and parasitic battery drain all require systematic diagnosis. We use professional scan tools and wiring diagrams to find the fault — not guess at it.",
    steps: [
      { num: "01", title: "Full System Scan",      desc: "All ECU modules scanned for stored and pending fault codes across the entire vehicle network." },
      { num: "02", title: "Circuit Testing",       desc: "Voltage, continuity, and resistance tests on affected circuits using workshop-grade equipment." },
      { num: "03", title: "Fault Isolation",       desc: "Root cause confirmed before any parts are recommended. We don't replace components on guesswork." },
      { num: "04", title: "Repair & Code Clear",   desc: "Fault repaired, codes cleared, system retested to confirm resolution." },
    ],
    faqs: [
      { q: "Can you fix intermittent electrical faults?",  a: "Yes, though intermittent faults take longer to diagnose. We use data logging to capture the fault condition and confirm the cause." },
      { q: "What electrical systems do you cover?",        a: "Charging system, starter, lighting, sensors, ECU/TCU, body control modules, CAN bus faults, and wiring harness damage." },
      { q: "My car won't start — is it electrical?",       a: "Often yes. Could be the battery, alternator, starter motor, or an immobiliser fault. Drive in or call us and we'll advise." },
    ],
    image: "https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?w=800&q=80",
  },
  {
    slug:      "battery-services",
    num:       "07",
    title:     "Battery Testing\n& Replacement",
    fullTitle: "Battery Testing & Replacement",
    desc:      "Quick battery health checks and same-day replacement with quality-guaranteed batteries.",
    longDesc:  "A failing battery causes more than a no-start. It stresses the alternator, corrupts ECU memory, and causes intermittent electrical faults. We test battery health accurately and replace with the correct specification battery for your vehicle.",
    steps: [
      { num: "01", title: "Battery Load Test",     desc: "Professional conductance test measures true battery capacity — not just voltage." },
      { num: "02", title: "Charging System Check", desc: "Alternator output and voltage regulator tested to ensure the charging system is healthy." },
      { num: "03", title: "Replacement",           desc: "Correct-spec battery fitted. Old battery disposed of responsibly." },
      { num: "04", title: "ECU Reset",             desc: "Where required, ECU and power window/sunroof memories reset after battery change." },
    ],
    faqs: [
      { q: "How long does a battery last?",                a: "Typically 3–5 years in Nairobi's climate. Heat accelerates battery degradation significantly." },
      { q: "Can I get a battery replaced same day?",       a: "Yes. We carry stock of common battery sizes. Walk in or WhatsApp ahead to confirm availability for your vehicle." },
      { q: "Do you dispose of the old battery?",           a: "Yes. We handle responsible disposal of the old battery at no extra charge." },
    ],
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
  },
  {
    slug:      "oil-change",
    num:       "08",
    title:     "Oil Change &\nFilter Replacement",
    fullTitle: "Oil Change & Filter Replacement",
    desc:      "Fast, clean oil and filter changes using the right grade for your engine type.",
    longDesc:  "An oil change is the simplest and most impactful thing you can do for your engine. We use the correct oil grade and specification for your vehicle, replace the oil and fuel filters, and carry out a complimentary safety check with every visit.",
    steps: [
      { num: "01", title: "Vehicle Check-In",      desc: "Mileage logged, current oil grade noted, correct replacement oil confirmed for your engine." },
      { num: "02", title: "Drain & Replace",       desc: "Old oil fully drained, sump plug cleaned and reinstalled, new filter fitted, fresh oil added to spec." },
      { num: "03", title: "Complimentary Check",   desc: "Tyre pressures, all fluid levels, and visible underbonnet components checked at no extra cost." },
      { num: "04", title: "Service Sticker",       desc: "Next service mileage and date recorded. Service sticker applied to windscreen." },
    ],
    faqs: [
      { q: "How often should I change my oil?",           a: "Every 5,000 km for conventional oil, every 10,000–15,000 km for full synthetic. More frequently if you do a lot of city driving." },
      { q: "Does oil grade matter?",                      a: "Absolutely. Using the wrong viscosity can damage engine components. We always use the grade specified by your manufacturer." },
      { q: "How long does an oil change take?",           a: "30–45 minutes for a standard oil change including our complimentary safety check." },
    ],
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
  },
];

// ── Trust Marquee Items ───────────────────────────────────────
export const TRUST_ITEMS = [
  "Certified Technicians",
  "Genuine OEM Parts",
  "Transparent Pricing",
  "Fast Turnaround",
  "Walk-ins Welcome",
  "Fleet Servicing",
  "Same-Day Repairs",
  "No Hidden Charges",
];

// ── Brands We Service ─────────────────────────────────────────
export const BRANDS = [
  "Toyota", "Subaru", "Nissan", "Mazda", "Honda",
  "Mercedes-Benz", "Land Rover", "Mitsubishi",
  "Isuzu", "Volkswagen", "BMW", "Ford",
];

// ── Why Choose Us ─────────────────────────────────────────────
export const WHY_US = [
  {
    label: "Skilled Technicians",
    desc:  "Highly qualified mechanics specialising in modern vehicle diagnostics and complex repairs.",
  },
  {
    label: "Genuine OEM Parts",
    desc:  "Direct-sourced authentic spare parts to ensure durability and preserve your vehicle's value.",
  },
  {
    label: "Transparent Pricing",
    desc:  "Full cost breakdown before any work begins. You approve — we execute. No hidden charges.",
  },
  {
    label: "Fast Turnaround",
    desc:  "Efficient workshop workflows so your vehicle is serviced, checked, and returned promptly.",
  },
  {
    label: "Walk-ins Welcome",
    desc:  "Booked or not, drive in and we'll attend to you. No appointment needed to get help.",
  },
  {
    label: "Fleet & Commercial Support",
    desc:  "Tailored service programs for fleet owners and commercial vehicle operators across Nairobi.",
  },
];

// ── How It Works Steps ────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    num:   "01",
    title: "Book or Walk In",
    desc:  "Message us on WhatsApp or simply drive in. No waiting, no queuing — we attend to you on arrival.",
  },
  {
    num:   "02",
    title: "Vehicle Check-In",
    desc:  "Our team logs and inspects your vehicle. A full diagnostic report is shared with you before anything begins.",
  },
  {
    num:   "03",
    title: "Approved Repair",
    desc:  "Work only starts after your explicit approval. You'll know the cost, timeline, and parts used.",
  },
  {
    num:   "04",
    title: "Drive Away Confident",
    desc:  "We notify you when done. Quality-checked, tested, and ready. Your vehicle back in peak condition.",
  },
];

// ── Testimonials ──────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    initials: "JM",
    name:     "James Mwangi",
    tag:      "Subaru Forester · Westlands",
    text:     "Brought my car in with a noise I'd been ignoring for months. Diagnosed in under an hour and fixed same day. Honest people, fair price — exactly what you want from a garage.",
  },
  {
    initials: "AK",
    name:     "Amina Kariuki",
    tag:      "Toyota Prado · Karen",
    text:     "They explained every single thing before touching the car. No pressure, no inflated cost. My Prado drives like it's brand new. I refer everyone I know here.",
  },
  {
    initials: "DN",
    name:     "David Njoroge",
    tag:      "Nissan X-Trail · Kilimani",
    text:     "Booked via WhatsApp and the whole experience was seamless. No jargon, no nonsense. This is genuinely how a modern garage should operate.",
  },
  {
    initials: "MW",
    name:     "Mercy Wanjiku",
    tag:      "Mazda CX-5 · Lavington",
    text:     "The team walked me through every step of the service. My braking confidence was immediate after the repair. Haven't been anywhere else since.",
  },
];

// ── Booking Form — Service Options ───────────────────────────
// Used to populate the <select> on the BookAppointment page.
// Derived from SERVICES so they always stay in sync.
export const SERVICE_OPTIONS = SERVICES.map(s => s.fullTitle);

// ── About Section — Core Values ──────────────────────────────
export const CORE_VALUES = [
  "Integrity",
  "Excellence",
  "Reliability",
  "Customer Focus",
  "Innovation",
];

// ── Footer columns ────────────────────────────────────────────
export const FOOTER_SERVICES = [
  "Engine Diagnostics",
  "Full Vehicle Servicing",
  "Brake Repair",
  "Suspension & Steering",
  "Clutch & Gearbox",
  "Electrical Diagnostics",
  "Battery Services",
  "Oil & Filter",
];

export const FOOTER_PAGES = [
  { label: "Home",              path: "/"                  },
  { label: "Services",          path: "/services"          },
  { label: "About Us",          path: "/#about"            },
  { label: "Book Appointment",  path: "/book-appointment"  },
  { label: "Contact Us",        path: "/#location"         },
];