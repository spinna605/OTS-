"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageCircle,
  Printer,
  Network,
  Server,
  Headphones,
  Wrench,
  Users,
  Settings,
  Monitor,
  Shield,
  Clock,
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

const MAIN_SERVICES = [
  {
    icon: <Printer className="w-6 h-6" />,
    iconBg: "#e6f4f0",
    iconColor: "#1a6b50",
    title: "Printer & Copier Repairs",
    desc: "Expert repairs and maintenance for all major printer brands",
    pricing: "From $25 per service call",
    features: [
      "Canon printer repairs and maintenance",
      "HP LaserJet and InkJet servicing",
      "Ricoh multifunction device support",
      "Kyocera document solutions",
      "Nashua office equipment service",
      "Gestetner digital systems repair",
      "On-site and workshop repairs",
      "Genuine parts and consumables",
    ],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    iconBg: "#fef9e7",
    iconColor: "#a07c10",
    title: "Preventive Maintenance & Service Contracts",
    desc: "Proactive maintenance to prevent costly breakdowns and downtime",
    pricing: "Monthly contracts from $50",
    features: [
      "Regular scheduled maintenance visits",
      "Comprehensive system health checks",
      "Cleaning and calibration services",
      "Parts replacement before failure",
      "Performance optimization",
      "Priority support for contract clients",
      "Detailed maintenance reports",
      "Cost-effective annual contracts",
    ],
  },
  {
    icon: <Network className="w-6 h-6" />,
    iconBg: "#e6f0f8",
    iconColor: "#1a4d7a",
    title: "Network Setup & Troubleshooting",
    desc: "Complete network infrastructure design, setup, and ongoing support",
    pricing: "From $100 per project",
    features: [
      "Network design and planning",
      "Router and switch configuration",
      "WiFi setup and optimization",
      "Network security implementation",
      "Cable installation and management",
      "Network performance monitoring",
      "Troubleshooting and repairs",
      "Network documentation",
    ],
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    iconBg: "#e6f4f0",
    iconColor: "#1a6b50",
    title: "Remote IT Support",
    desc: "24/7 remote assistance using industry-leading remote access tools",
    pricing: "From $30 per hour",
    features: [
      "AnyDesk remote support",
      "RustDesk secure connections",
      "TeamViewer professional support",
      "Real-time problem resolution",
      "Software installation and updates",
      "System optimization",
      "User training and guidance",
      "Emergency after-hours support",
    ],
  },
  {
    icon: <Server className="w-6 h-6" />,
    iconBg: "#fef9e7",
    iconColor: "#a07c10",
    title: "Hardware & Server Installation",
    desc: "Professional installation and configuration of servers and IT hardware",
    pricing: "From $150 per installation",
    features: [
      "Server installation and setup",
      "Hardware procurement and installation",
      "System configuration and optimization",
      "Data migration services",
      "Backup and recovery solutions",
      "Hardware monitoring setup",
      "Performance tuning",
      "Documentation and training",
    ],
  },
  {
    icon: <Users className="w-6 h-6" />,
    iconBg: "#e6f0f8",
    iconColor: "#1a4d7a",
    title: "IT Training & Consultancy",
    desc: "Professional training and strategic IT consultancy services",
    pricing: "From $75 per hour",
    features: [
      "Staff IT training programs",
      "Software training sessions",
      "IT strategy consultation",
      "Technology planning and roadmaps",
      "Best practices implementation",
      "Security awareness training",
      "Workflow optimization",
      "Custom training materials",
    ],
  },
];

const ADDITIONAL = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Workflow & Inventory Management",
    desc: "Streamline your business processes with custom workflow solutions",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "System Monitoring",
    desc: "Proactive monitoring to prevent issues before they impact your business",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity Solutions",
    desc: "Comprehensive security measures to protect your business data",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Emergency Support",
    desc: "24/7 emergency support for critical business systems",
  },
];

const BRANDS = ["Canon", "HP", "Ricoh", "Kyocera", "Nashua", "Gestetner"];

const PROCESS = [
  {
    step: "01",
    title: "Contact Us",
    desc: "Call, email, or WhatsApp us with your IT issue or service request",
  },
  {
    step: "02",
    title: "Assessment",
    desc: "We assess your needs and provide a clear quote and timeline",
  },
  {
    step: "03",
    title: "Service Delivery",
    desc: "Our certified technicians provide professional service on-site or remotely",
  },
  {
    step: "04",
    title: "Follow-up",
    desc: "We ensure everything works perfectly and provide ongoing support",
  },
];

export default function ServicesPage() {
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
                    color: href === "/services" ? "#00C4A0" : "#6b7280",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00C4A0")
                  }
                  onMouseLeave={(e) => {
                    if (href !== "/services")
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
        {/* Premium IT hero background */}
        <img
          src="https://raw.createusercontent.com/a4916713-1b1a-4897-a252-1fe3b23e7ac3/"
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
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Our Services
          </h1>
          <p
            className="text-xl md:text-2xl font-bold mb-5"
            style={{ color: "#F5C518" }}
          >
            Comprehensive IT Solutions for Your Business
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            From printer repairs to network setup, we provide complete IT
            support to keep your business running smoothly.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Core Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Professional IT services designed to meet the needs of small to
              mid-sized businesses
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {MAIN_SERVICES.map((svc, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: svc.iconBg, color: svc.iconColor }}
                  >
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {svc.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">{svc.desc}</p>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "#e6f4f0", color: "#1a6b50" }}
                    >
                      {svc.pricing}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {svc.features.map((f, fi) => (
                    <div
                      key={fi}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#00C4A0" }}
                      ></div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="py-20" style={{ background: "#f7fafa" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Supported Printer Brands
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Certified to service and repair all major printer and copier
              brands
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {BRANDS.map((brand, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="text-4xl mb-3">🖨️</div>
                <div className="font-bold text-gray-900 text-sm">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional Services
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto text-sm">
              Specialized solutions to enhance your business operations
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADDITIONAL.map((svc, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="flex justify-center mb-4"
                  style={{ color: "#00E5FF" }}
                >
                  {svc.icon}
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">
                  {svc.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Our Service Process
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Simple, efficient, and transparent service delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS.map((item, i) => (
              <div key={i} className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md"
                  style={{
                    background: "linear-gradient(145deg, #0a2e2e, #1a5252)",
                  }}
                >
                  <span
                    className="text-xl font-extrabold"
                    style={{ color: "#F5C518" }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
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
            Need IT Support?
          </h2>
          <p className="text-gray-500 text-sm mb-10">
            Get in touch today for a free consultation and quote for your IT
            service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-lg font-extrabold text-sm hover:opacity-90"
              style={{ background: "#F5C518", color: "#1a1a1a" }}
            >
              Request Quote
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
