"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageCircle,
  Award,
  Users,
  Clock,
  CheckCircle,
  Bot,
  Shield,
  Zap,
} from "lucide-react";

const LOGO =
  "https://dtvoeevhaseb5.cloudfront.net/user-uploads/91e27c1e-1948-4630-a9af-e63afd9e0b1c.png";

const NAV = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/projects", "Projects"],
  ["/blog", "Blog"],
  ["/contracts", "Contracts"],
];

const EXPERTISE = [
  "Canon Printers & Copiers",
  "HP LaserJet & InkJet Systems",
  "Ricoh Multifunction Devices",
  "Kyocera Document Solutions",
  "Nashua Office Equipment",
  "Gestetner Digital Systems",
  "Network Infrastructure",
  "Server Administration",
  "Cybersecurity Solutions",
  "Managed IT Services",
  "Remote Support Solutions",
  "IT Training & Consultancy",
];

const WHY = [
  {
    icon: "📍",
    title: "Local Expertise",
    desc: "Deep understanding of Zimbabwe's business environment and IT needs",
  },
  {
    icon: "⚡",
    title: "Rapid Response",
    desc: "Same-day on-site visits and immediate remote support within minutes",
  },
  {
    icon: "💰",
    title: "Cost-Effective",
    desc: "Competitive pricing with transparent service contracts and no hidden fees",
  },
  {
    icon: "🛡️",
    title: "Preventive Approach",
    desc: "Proactive maintenance contracts that prevent costly unexpected downtime",
  },
];

export default function AboutPage() {
  const [open, setOpen] = useState(false);
  const wa = "263715689056";
  const waMsg = encodeURIComponent(
    "Hello! I'd like to inquire about your IT services.",
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${wa}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all"
        style={{
          background: "#25D366",
          boxShadow: "0 4px 24px rgba(37,211,102,0.55)",
        }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
      <a
        href="/troubleshoot"
        className="fixed bottom-6 right-5 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-all"
        style={{
          background: "#00C4A0",
          color: "#fff",
          boxShadow: "0 4px 24px rgba(0,196,160,0.55)",
        }}
      >
        <Bot className="w-5 h-5" />
        <span>AI Help</span>
      </a>

      {/* Header */}
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
                  className="text-sm font-medium transition-colors"
                  style={{ color: href === "/about" ? "#00C4A0" : "#6b7280" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00C4A0")
                  }
                  onMouseLeave={(e) => {
                    if (href !== "/about")
                      e.currentTarget.style.color = "#6b7280";
                  }}
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
                className="px-5 py-2 rounded-lg text-white text-sm font-bold hover:opacity-90 transition-opacity"
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

      {/* Hero */}
      <section
        className="relative overflow-hidden text-white text-center py-24"
        style={{
          background:
            "linear-gradient(145deg, #0a2e2e 0%, #1a5252 45%, #0d3838 100%)",
        }}
      >
        {/* Premium hero background */}
        <img
          src="https://raw.createusercontent.com/f27cc245-6f26-4691-90db-eedc79546cd2/"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
        />
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: 0.05 }}
        >
          <img
            src={LOGO}
            alt=""
            className="w-[420px] h-[420px] object-contain"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
            style={{
              background: "rgba(245,197,24,0.2)",
              border: "1px solid rgba(245,197,24,0.5)",
              color: "#F5C518",
            }}
          >
            <Award className="w-3.5 h-3.5" /> Your Trusted ICT Partner in
            Zimbabwe
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            About Office Tech Solutions
          </h1>
          <p
            className="text-xl md:text-2xl font-bold mb-5"
            style={{ color: "#F5C518" }}
          >
            19+ Years of ICT Excellence
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            With over 19 years of ICT experience, Office Tech Solutions provides
            professional printer, computer, network, cybersecurity, and managed
            IT services to businesses throughout Zimbabwe.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-12 border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
            {[
              { stat: "19+", label: "Years ICT Experience", gold: false },
              { stat: "500+", label: "Satisfied Clients", gold: true },
              { stat: "6+", label: "Printer Brands", gold: false },
              { stat: "24/7", label: "Support Available", gold: false },
            ].map((a, i) => (
              <div key={i} className="px-4">
                <div
                  className="text-3xl md:text-4xl font-extrabold mb-1"
                  style={{ color: a.gold ? "#F5C518" : "#1a3d3d" }}
                >
                  {a.stat}
                </div>
                <div className="text-xs md:text-sm font-medium text-gray-500">
                  {a.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6"
                style={{ background: "#e6f4f0", color: "#1a6b50" }}
              >
                <Users className="w-3.5 h-3.5" /> Meet Our Founder
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                Sinclair Karim
              </h2>
              <p
                className="text-base font-semibold mb-6"
                style={{ color: "#00C4A0" }}
              >
                Founder & Lead ICT Technician
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Sinclair Karim has over 19 years of ICT experience and leads
                Office Tech Solutions with a simple mission: to provide
                reliable, professional IT and printer services that keep
                businesses running smoothly.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                With extensive expertise across leading printer brands including
                Canon, HP, Ricoh, Kyocera, Nashua, Gestetner, and many more!
                We've expanded our services to cover complete IT infrastructure
                needs — from network setup to server installation and remote
                support.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we proudly serve small to mid-sized businesses across
                Harare and Zimbabwe, keeping offices running smoothly with
                reliable, professional service.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "19+ Years ICT Experience",
                  "Certified Printer Technician",
                  "Network Infrastructure Specialist",
                  "Cybersecurity Consultant",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "#00C4A0" }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{
                background: "linear-gradient(145deg, #0a2e2e 0%, #1a5252 100%)",
              }}
            >
              <div className="p-10 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-white/20 shadow-xl">
                  <img
                    src={LOGO}
                    alt="Office Tech Solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">
                  Sinclair Karim
                </h4>
                <p className="text-sm mb-6" style={{ color: "#00E5FF" }}>
                  Founder & Lead ICT Technician
                </p>
                <div className="space-y-2">
                  {[
                    "Canon · HP · Ricoh · Kyocera",
                    "Nashua · Gestetner & More",
                    "Network & Server Specialist",
                    "Cybersecurity & Remote Support",
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="text-sm text-gray-300 py-2 rounded-lg px-3"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20" style={{ background: "#f7fafa" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Our Expertise
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Certified and experienced across all major brands and enterprise
              technologies
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {EXPERTISE.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#00C4A0" }}
                />
                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Zimbabwe's most trusted IT and printer service provider
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

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Mission & Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                bg: "#e6f4f0",
                ic: "#1a6b50",
                title: "Our Mission",
                text: "To provide reliable, professional IT and printer services that keep Zimbabwe's businesses running smoothly. We are committed to delivering exceptional technical support, preventive maintenance, and innovative solutions that help our clients focus on their core business operations.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                bg: "#e6f0f8",
                ic: "#1a4d7a",
                title: "Our Vision",
                text: "To be Zimbabwe's leading IT service provider, recognized for our technical excellence, customer-first approach, and innovative solutions. We envision a future where every business has access to reliable, affordable IT support that drives growth and productivity.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: item.bg, color: item.ic }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#f7fafa" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">
            Experience the difference that 19+ years of ICT expertise can make
            for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
            <a
              href="tel:+263715689056"
              className="flex items-center gap-3 text-gray-700 hover:text-[#00C4A0] font-medium text-sm transition-colors"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "#e6f4f0" }}
              >
                <Phone className="w-4 h-4" style={{ color: "#00C4A0" }} />
              </div>
              +263 715 689 056
            </a>
            <a
              href="mailto:ifixofficequip@gmail.com"
              className="flex items-center gap-3 text-gray-700 hover:text-[#00C4A0] font-medium text-sm transition-colors"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "#e6f4f0" }}
              >
                <Mail className="w-4 h-4" style={{ color: "#00C4A0" }} />
              </div>
              ifixofficequip@gmail.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-lg font-extrabold text-sm hover:opacity-90 transition-opacity"
              style={{ background: "#F5C518", color: "#1a1a1a" }}
            >
              Get In Touch
            </a>
            <a
              href={`https://wa.me/${wa}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-lg font-bold text-sm text-white bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                Professional IT and printer services across Zimbabwe. Sinclair
                Karim has over 19 years of ICT experience.
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
                  ["/contracts", "Contracts"],
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
                  +263 715 689 056
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
              </div>
            </div>
          </div>
          <div
            className="mt-10 pt-6 text-center text-gray-600 text-xs"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            &copy; 2025 Office Tech Solutions — Harare, Zimbabwe. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
