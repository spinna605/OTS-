"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageCircle,
  Building,
  Calendar,
  CheckCircle,
  ArrowRight,
  Bot,
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

const STATS = [
  {
    number: "150+",
    label: "Projects Completed",
    desc: "Successfully delivered IT solutions",
  },
  {
    number: "500+",
    label: "Happy Clients",
    desc: "Satisfied businesses across Zimbabwe",
  },
  {
    number: "99.5%",
    label: "Success Rate",
    desc: "Projects completed on time and budget",
  },
  {
    number: "24/7",
    label: "Support Available",
    desc: "Round-the-clock technical assistance",
  },
];

const PROJECTS = [
  {
    title: "Multi-Location Printer Fleet Management",
    client: "Zimbabwe Retail Chain",
    category: "Printer Services",
    duration: "Ongoing",
    desc: "Comprehensive printer maintenance and support across 15 retail locations, including preventive maintenance contracts and 24/7 remote support.",
    services: [
      "Fleet assessment and optimization",
      "Preventive maintenance contracts",
      "Remote monitoring setup",
      "Staff training programs",
      "Parts and consumables management",
    ],
    results: [
      "40% reduction in printer downtime",
      "25% cost savings on consumables",
      "Standardized printer operations",
      "Improved customer service efficiency",
    ],
    emoji: "🏪",
  },
  {
    title: "Medical Practice IT Modernization",
    client: "Harare Medical Center",
    category: "Complete IT Solution",
    duration: "6 weeks",
    desc: "Full IT infrastructure modernization for a medical practice, including server migration, network security, and staff training on new systems.",
    services: [
      "Legacy system migration",
      "Network security implementation",
      "Backup and recovery solutions",
      "Compliance consulting",
      "Staff training and support",
    ],
    results: [
      "100% data migration success",
      "Enhanced patient data security",
      "Improved system reliability",
      "Streamlined workflow processes",
    ],
    emoji: "🏥",
  },
];

const CATEGORIES = [
  {
    category: "Network Infrastructure",
    projects: 45,
    desc: "Complete network setup and optimization projects",
  },
  {
    category: "Printer Services",
    projects: 60,
    desc: "Printer installations, repairs, and maintenance contracts",
  },
  {
    category: "Server Solutions",
    projects: 25,
    desc: "Server installations, migrations, and configurations",
  },
  {
    category: "IT Consulting",
    projects: 30,
    desc: "Strategic IT planning and optimization projects",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Office Tech Solutions transformed our IT infrastructure completely. Their professional approach and technical expertise exceeded our expectations.",
    author: "Sarah Mukamuri",
    position: "IT Manager",
    company: "Harare Financial Services",
  },
  {
    quote:
      "The printer maintenance contract has saved us thousands in downtime costs. Sinclair and his team are always responsive and professional.",
    author: "David Chikwanha",
    position: "Operations Manager",
    company: "Zimbabwe Retail Chain",
  },
  {
    quote:
      "Their remote support service is exceptional. We can focus on our patients while they handle all our IT needs seamlessly.",
    author: "Dr. Patricia Moyo",
    position: "Practice Owner",
    company: "Harare Medical Center",
  },
];

export default function ProjectsPage() {
  const [open, setOpen] = useState(false);
  const wa = "263715689056";
  const waMsg = encodeURIComponent(
    "Hello! I'd like to inquire about your IT services.",
  );

  return (
    <div className="min-h-screen bg-white">
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
                  style={{
                    color: href === "/projects" ? "#00C4A0" : "#6b7280",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00C4A0")
                  }
                  onMouseLeave={(e) => {
                    if (href !== "/projects")
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
                className="px-5 py-2 rounded-lg text-white text-sm font-bold hover:opacity-90"
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
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="prj-dots"
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
                x2="0"
                y2="60"
                stroke="#00E5FF"
                strokeWidth="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#prj-dots)" />
        </svg>
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
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Our Projects
          </h1>
          <p
            className="text-xl md:text-2xl font-bold mb-5"
            style={{ color: "#F5C518" }}
          >
            Successful IT Solutions Across Zimbabwe
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of successful IT projects and see how we've
            helped businesses across Zimbabwe improve their technology
            infrastructure and operations.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
            {STATS.map((s, i) => (
              <div key={i} className="px-4">
                <div
                  className="text-3xl md:text-4xl font-extrabold mb-1"
                  style={{ color: i === 1 ? "#F5C518" : "#1a3d3d" }}
                >
                  {s.number}
                </div>
                <div className="text-xs md:text-sm font-medium text-gray-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Featured Projects
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Showcasing our most impactful IT solutions and successful client
              partnerships
            </p>
          </div>
          <div className="space-y-12">
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 bg-white">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl">{p.emoji}</span>
                      <div>
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full"
                          style={{ background: "#e6f4f0", color: "#1a6b50" }}
                        >
                          {p.category}
                        </span>
                        <h3 className="text-2xl font-extrabold text-gray-900 mt-2">
                          {p.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex gap-6 mb-5">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Building className="w-4 h-4 text-[#00C4A0]" />
                        {p.client}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4 text-[#00C4A0]" />
                        {p.duration}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {p.desc}
                    </p>
                    <h4 className="font-bold text-gray-900 mb-3 text-sm">
                      Services Provided:
                    </h4>
                    <div className="space-y-2">
                      {p.services.map((s, si) => (
                        <div
                          key={si}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 flex-shrink-0 text-[#00C4A0]" />
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="p-8"
                    style={{
                      background:
                        "linear-gradient(145deg, #0a2e2e 0%, #1a5252 100%)",
                    }}
                  >
                    <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">
                      Project Results
                    </h4>
                    <div className="space-y-4">
                      {p.results.map((r, ri) => (
                        <div
                          key={ri}
                          className="flex items-start gap-3 text-gray-200 text-sm"
                        >
                          <ArrowRight
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: "#F5C518" }}
                          />
                          {r}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20" style={{ background: "#f7fafa" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Project Categories
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Our diverse portfolio spans across multiple IT service categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div
                  className="text-4xl font-extrabold mb-2"
                  style={{ color: "#1a3d3d" }}
                >
                  {c.projects}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">
                  {c.category}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 text-white relative overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #0a2e2e 0%, #1a5252 50%, #0d3838 100%)",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              What Our Clients Say
            </h2>
            <p className="text-gray-300 max-w-lg mx-auto text-sm">
              Real feedback from businesses we've helped transform their IT
              infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="text-4xl font-extrabold mb-4"
                  style={{ color: "#F5C518" }}
                >
                  "
                </div>
                <p className="text-gray-300 text-sm mb-6 italic leading-relaxed">
                  {t.quote}
                </p>
                <div
                  className="pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="font-bold text-white text-sm">{t.author}</div>
                  <div className="text-xs mt-1" style={{ color: "#00E5FF" }}>
                    {t.position}
                  </div>
                  <div className="text-xs text-gray-400">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-500 text-sm mb-10">
            Let us help you achieve similar results. Contact us today to discuss
            your IT needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-lg font-extrabold text-sm hover:opacity-90"
              style={{ background: "#F5C518", color: "#1a1a1a" }}
            >
              Start Your Project
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
                Professional IT and printer services across Zimbabwe. 19+ years
                of ICT experience.
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
