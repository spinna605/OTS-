"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Network,
  Server,
  Headphones,
  Wrench,
  Users,
  Menu,
  X,
  MessageCircle,
  Bot,
  Zap,
  Settings,
} from "lucide-react";

const LOGO =
  "https://dtvoeevhaseb5.cloudfront.net/user-uploads/91e27c1e-1948-4630-a9af-e63afd9e0b1c.png";

const SERVICES = [
  {
    icon: <Wrench className="w-6 h-6" />,
    iconBg: "#e6f4f0",
    iconColor: "#1a6b50",
    title: "Printer Repairs & Maintenance",
    desc: "Expert servicing for Canon, HP, Ricoh, Kyocera, Nashua, and Gestetner printers and copiers.",
  },
  {
    icon: <Network className="w-6 h-6" />,
    iconBg: "#fef9e7",
    iconColor: "#a07c10",
    title: "Network Setup & Support",
    desc: "Professional network installation, configuration, and troubleshooting for businesses of all sizes.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    iconBg: "#e6f0f8",
    iconColor: "#1a4d7a",
    title: "Remote IT Support",
    desc: "Fast, reliable remote assistance via AnyDesk, RustDesk, and TeamViewer — anytime you need it.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    iconBg: "#fef9e7",
    iconColor: "#a07c10",
    title: "Server Installation",
    desc: "Complete hardware and server setup, configuration, migration, and ongoing maintenance support.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    iconBg: "#e6f0f8",
    iconColor: "#1a4d7a",
    title: "Service Contracts",
    desc: "Preventive maintenance plans to keep all your equipment running at peak performance year-round.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    iconBg: "#e6f4f0",
    iconColor: "#1a6b50",
    title: "IT Training & Consultancy",
    desc: "Empower your team with hands-on IT training and strategic technology guidance.",
  },
];

const WHY = [
  {
    icon: "🏆",
    title: "19+ Years ICT Experience",
    desc: "Proven expertise built over 19 years of ICT service delivering results for Zimbabwean businesses.",
  },
  {
    icon: "⚡",
    title: "Fast Response Time",
    desc: "Same-day on-site service for urgent issues. Remote support within minutes.",
  },
  {
    icon: "🔧",
    title: "All Major Brands",
    desc: "Certified to service Canon, HP, Ricoh, Kyocera, Nashua, and Gestetner.",
  },
  {
    icon: "🛡️",
    title: "Service Contracts",
    desc: "Affordable maintenance contracts that prevent costly unexpected breakdowns.",
  },
];

const NAV = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/projects", "Projects"],
  ["/blog", "Blog"],
  ["/contracts", "Contracts"],
];

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const wa = "263715689056";
  const waMsg = encodeURIComponent(
    "Hello! I'd like to inquire about your IT services.",
  );

  return (
    <div className="min-h-screen bg-white">
      {/* ── Floating WhatsApp ── */}
      <a
        href={`https://wa.me/${wa}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
        style={{
          background: "#25D366",
          boxShadow: "0 4px 24px rgba(37,211,102,0.55)",
        }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* ── Floating TechBot ── */}
      <a
        href="/troubleshoot"
        className="fixed bottom-6 right-5 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm shadow-xl transition-all hover:scale-105"
        style={{
          background: "#00C4A0",
          color: "#fff",
          boxShadow: "0 4px 24px rgba(0,196,160,0.55)",
        }}
      >
        <Bot className="w-5 h-5" />
        <span>AI Help</span>
      </a>

      {/* ════════════════════════ HEADER ════════════════════════ */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <a href="/" className="flex items-center gap-3">
              <img
                src={LOGO}
                alt="Logo"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#00C4A0]/30"
              />
              <div className="hidden sm:block">
                <div className="font-extrabold text-gray-900 text-base leading-tight">
                  Office Tech Solutions
                </div>
                <div className="text-[11px] text-gray-500 leading-tight">
                  Keeping Your Office Running Smoothly
                </div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-7">
              {NAV.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm font-medium text-gray-600 hover:text-[#00C4A0] transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="/troubleshoot"
                className="text-sm font-semibold flex items-center gap-1 transition-colors hover:opacity-80"
                style={{ color: "#00C4A0" }}
              >
                <Bot className="w-4 h-4" /> AI Help
              </a>
              <a
                href="/contact"
                className="px-5 py-2 rounded-lg text-white text-sm font-bold transition-all hover:opacity-90"
                style={{ background: "#1a3d3d" }}
              >
                Contact Us
              </a>
            </nav>

            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {open && (
            <div className="md:hidden pb-4 border-t border-gray-100 pt-3">
              <nav className="flex flex-col gap-3">
                {NAV.map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="text-gray-700 font-medium text-sm"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="/troubleshoot"
                  className="text-sm font-semibold flex items-center gap-1"
                  style={{ color: "#00C4A0" }}
                >
                  <Bot className="w-4 h-4" /> AI Help
                </a>
                <a
                  href="/contact"
                  className="inline-block px-5 py-2 rounded-lg text-white text-sm font-bold w-fit"
                  style={{ background: "#1a3d3d" }}
                >
                  Contact Us
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ════════════════════════ HERO ════════════════════════ */}
      <section
        className="relative overflow-hidden text-white text-center py-24"
        style={{
          background:
            "linear-gradient(145deg, #0a2e2e 0%, #1a5252 45%, #0d3838 100%)",
        }}
      >
        {/* AI-generated hero background */}
        <img
          src="https://raw.createusercontent.com/dbffcc5e-0d34-4d80-8cdc-8ea368ae1372/"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none select-none"
        />

        {/* Network dot pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.2" fill="#00E5FF" />
              <line
                x1="30"
                y1="30"
                x2="60"
                y2="0"
                stroke="#00E5FF"
                strokeWidth="0.4"
              />
              <line
                x1="30"
                y1="30"
                x2="60"
                y2="60"
                stroke="#00E5FF"
                strokeWidth="0.4"
              />
              <line
                x1="30"
                y1="30"
                x2="0"
                y2="60"
                stroke="#00E5FF"
                strokeWidth="0.4"
              />
              <line
                x1="30"
                y1="30"
                x2="0"
                y2="0"
                stroke="#00E5FF"
                strokeWidth="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Watermark logo */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: 0.06 }}
        >
          <img
            src={LOGO}
            alt=""
            className="w-[420px] h-[420px] object-contain"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo badge — enlarged ~57% vs original */}
          <div className="flex justify-center mb-8">
            <div
              className="w-44 h-44 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20"
              style={{ background: "rgba(0,20,40,0.6)" }}
            >
              <img
                src={LOGO}
                alt="Office Tech Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3 leading-tight">
            Office Tech Solutions
          </h1>
          <p
            className="text-xl md:text-2xl font-extrabold mb-4"
            style={{ color: "#F5C518" }}
          >
            Keeping Your Office Running Smoothly
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Expert IT Support · Printer Maintenance · Network Solutions — across
            Zimbabwe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-lg font-extrabold text-sm transition-all hover:opacity-90 shadow-lg"
              style={{ background: "#F5C518", color: "#1a1a1a" }}
            >
              Request Service
            </a>
            <a
              href="/services"
              className="px-8 py-3.5 rounded-lg font-bold text-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════ STATS BAR ════════════════════════ */}
      <section className="bg-white py-12 border-b border-gray-100 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center divide-x divide-gray-100">
            <div className="px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-gray-900">
                19+
              </div>
              <div className="text-xs md:text-sm font-medium text-gray-500 mt-1">
                Years Experience
              </div>
            </div>
            <div className="px-4">
              <div
                className="text-4xl md:text-5xl font-extrabold"
                style={{ color: "#F5C518" }}
              >
                500+
              </div>
              <div className="text-xs md:text-sm font-medium text-gray-500 mt-1">
                Happy Clients
              </div>
            </div>
            <div className="px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-gray-900">
                24/7
              </div>
              <div className="text-xs md:text-sm font-medium text-gray-500 mt-1">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ CORE SERVICES ════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Our Core Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Comprehensive IT and printer solutions tailored for your business
              needs in Zimbabwe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ background: s.iconBg, color: s.iconColor }}
                >
                  {s.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {s.desc}
                </p>
                <a
                  href="/services"
                  className="text-sm font-semibold transition-colors hover:underline"
                  style={{ color: "#1a3d3d" }}
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ TECHBOT PROMO ════════════════════════ */}
      <section className="py-16" style={{ background: "#f7fafa" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row"
            style={{
              background: "linear-gradient(135deg, #0a2e2e 0%, #1a5252 100%)",
            }}
          >
            {/* Left: logo area */}
            <div className="hidden md:flex items-center justify-center w-52 flex-shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <img src={LOGO} alt="" className="w-44 h-44 object-contain" />
              </div>
              <div className="relative w-24 h-24 rounded-full ring-4 ring-white/20 overflow-hidden">
                <img src={LOGO} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Right: content */}
            <div className="flex-1 p-8 md:p-10 text-white">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{
                  background: "rgba(245,197,24,0.18)",
                  border: "1px solid rgba(245,197,24,0.5)",
                  color: "#F5C518",
                }}
              >
                <Zap className="w-3 h-3" /> New Feature — Free AI
                Troubleshooting
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                Fix IT Problems Instantly with{" "}
                <span style={{ color: "#00E5FF" }}>TechBot AI</span>
              </h2>
              <p className="text-gray-300 text-sm mb-6 max-w-lg leading-relaxed">
                Step-by-step guided troubleshooting for paper jams, offline
                printers, slow computers &amp; more. Available 24/7, completely
                free — no waiting, no call needed.
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {[
                  "🖨️ Paper Jams",
                  "📶 Network Issues",
                  "🖥️ Slow PC",
                  "🔌 Printer Offline",
                  "🔧 Identify Problem",
                ].map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      color: "#cbd5e1",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/troubleshoot"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                  style={{ background: "#F5C518", color: "#1a1a1a" }}
                >
                  <Bot className="w-4 h-4" /> Try TechBot — It's Free
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-white/30 text-white transition-all hover:bg-white/10"
                >
                  Book a Technician
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ WHY CHOOSE US ════════════════════════ */}
      <section
        className="py-20 text-white relative overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #0a2e2e 0%, #1a5252 50%, #0d3838 100%)",
        }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none">
          <img src={LOGO} alt="" className="w-80 h-80 object-contain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Why Choose Office Tech Solutions?
            </h2>
            <p className="text-gray-300 max-w-lg mx-auto text-sm">
              Zimbabwe's most trusted IT and printer service provider since 2009
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((w, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="text-4xl mb-4">{w.icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{w.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ CONTACT CTA ════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">
            Contact us today for a free consultation. Our expert team is ready
            to help you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
            <a
              href="tel:+263715689056"
              className="flex items-center gap-3 text-gray-700 hover:text-[#00C4A0] font-medium text-sm transition-colors"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#e6f4f0" }}
              >
                <Phone className="w-4 h-4" style={{ color: "#00C4A0" }} />
              </div>
              +263715689056
            </a>
            <a
              href="mailto:ifixofficequip@gmail.com"
              className="flex items-center gap-3 text-gray-700 hover:text-[#00C4A0] font-medium text-sm transition-colors"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#e6f4f0" }}
              >
                <Mail className="w-4 h-4" style={{ color: "#00C4A0" }} />
              </div>
              ifixofficequip@gmail.com
            </a>
            <div className="flex items-center gap-3 text-gray-700 font-medium text-sm">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#e6f4f0" }}
              >
                <MapPin className="w-4 h-4" style={{ color: "#00C4A0" }} />
              </div>
              Harare, Zimbabwe
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-lg font-extrabold text-sm transition-all hover:opacity-90"
              style={{ background: "#F5C518", color: "#1a1a1a" }}
            >
              Request Service
            </a>
            <a
              href={`https://wa.me/${wa}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-lg font-bold text-sm text-white bg-green-600 hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
            <a
              href="mailto:ifixofficequip@gmail.com"
              className="px-8 py-3.5 rounded-lg font-bold text-sm border-2 border-gray-200 text-gray-700 hover:border-gray-400 flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════ FOOTER ════════════════════════ */}
      <footer className="py-14" style={{ background: "#0a2020" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={LOGO}
                  alt="Logo"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
                />
                <div>
                  <div className="font-extrabold text-white text-base">
                    Office Tech Solutions
                  </div>
                  <div className="text-xs text-gray-400">
                    Keeping Your Office Running Smoothly
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Professional IT and printer services for businesses across
                Zimbabwe. Sinclair Karim has over 19 years of ICT experience
                delivering reliable tech solutions.
              </p>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-green-600 hover:bg-green-500 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                </a>
                <a
                  href="mailto:ifixofficequip@gmail.com"
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <Mail className="w-4 h-4 text-gray-300" />
                </a>
                <a
                  href="tel:+263715689056"
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <Phone className="w-4 h-4 text-gray-300" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                Pages
              </h4>
              <ul className="space-y-2">
                {[
                  ["/about", "About Us"],
                  ["/services", "Services"],
                  ["/projects", "Projects"],
                  ["/blog", "Blog"],
                  ["/troubleshoot", "AI Help"],
                  ["/contact", "Contact"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-gray-400 hover:text-[#00E5FF] text-sm transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+263715689056"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#00E5FF] text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-[#00C4A0]" />{" "}
                  +263715689056
                </a>
                <a
                  href="mailto:ifixofficequip@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#00E5FF] text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-[#00C4A0]" />{" "}
                  ifixofficequip@gmail.com
                </a>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-[#00C4A0]" />{" "}
                  Harare, Zimbabwe
                </div>
                <a
                  href={`https://wa.me/${wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0 text-green-500" />{" "}
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          <div
            className="mt-10 pt-6 text-center text-gray-600 text-xs"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            &copy; 2024 Office Tech Solutions — Harare, Zimbabwe. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
