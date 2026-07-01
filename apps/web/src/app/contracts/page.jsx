"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageCircle,
  CheckCircle,
  Download,
  FileText,
  Shield,
  Clock,
  Zap,
} from "lucide-react";

const PACKAGES = [
  {
    tier: "Bronze",
    subtitle: "Bi-Annual",
    price: "$180",
    period: "/year",
    color: "#CD7F32",
    borderColor: "rgba(205,127,50,0.4)",
    bgColor: "rgba(205,127,50,0.08)",
    icon: "🥉",
    visits: "2",
    visitLabel: "Maintenance Visits / Year",
    features: [
      "2 maintenance visits per year",
      "Printer maintenance",
      "Computer maintenance",
      "Network health checks",
      "Maintenance reports",
      "Parts and toner charged separately",
    ],
    contractKey: "Bi-Annual",
    contractPrice: "$180/year",
    discount: null,
  },
  {
    tier: "Silver",
    subtitle: "Quarterly",
    price: "$320",
    period: "/year",
    color: "#94a3b8",
    borderColor: "rgba(148,163,184,0.5)",
    bgColor: "rgba(148,163,184,0.08)",
    icon: "🥈",
    visits: "4",
    visitLabel: "Maintenance Visits / Year",
    popular: true,
    features: [
      "4 maintenance visits per year",
      "Printer maintenance",
      "Computer maintenance",
      "Network health checks",
      "Maintenance reports",
      "5% discount on parts and toners",
    ],
    contractKey: "Quarterly",
    contractPrice: "$320/year",
    discount: "5%",
  },
  {
    tier: "Gold",
    subtitle: "Annual Monthly",
    price: "$640",
    period: "/year",
    color: "#F5C518",
    borderColor: "rgba(245,197,24,0.5)",
    bgColor: "rgba(245,197,24,0.08)",
    icon: "🥇",
    visits: "12",
    visitLabel: "Maintenance Visits / Year",
    features: [
      "12 maintenance visits per year",
      "Printer maintenance",
      "Computer maintenance",
      "Network health checks",
      "Maintenance reports",
      "Priority support",
      "15% discount on parts and toners",
    ],
    contractKey: "Annual Monthly",
    contractPrice: "$640/year",
    discount: "15%",
  },
];

const NAV = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/services", "Services"],
  ["/projects", "Projects"],
  ["/blog", "Blog"],
  ["/contracts", "Contracts"],
  ["/contact", "Contact"],
];

const WA = "263715689056";
const WA_MSG = encodeURIComponent(
  "Hello! I'd like to request a maintenance contract.",
);

function generateContractHTML(pkg, clientName) {
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-ZW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const endDate = new Date(today);
  endDate.setFullYear(endDate.getFullYear() + 1);
  const endDateStr = endDate.toLocaleDateString("en-ZW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IT Maintenance Service Agreement — ${pkg.tier} Package</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Georgia, serif; color: #1a1a1a; line-height: 1.6; font-size: 11pt; }
  .header { text-align: center; padding: 32px 40px 24px; border-bottom: 3px solid #00475a; }
  .logo-row { display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 12px; }
  .logo-circle { width: 64px; height: 64px; border-radius: 50%; overflow: hidden; border: 2px solid #00475a; }
  .logo-circle img { width: 100%; height: 100%; object-fit: cover; }
  .company-name { font-size: 20pt; font-weight: bold; color: #00475a; letter-spacing: 0.5px; }
  .company-tagline { font-size: 10pt; color: #555; margin-top: 2px; }
  h1 { font-size: 16pt; color: #00475a; text-align: center; margin: 20px 0 4px; text-transform: uppercase; letter-spacing: 1px; }
  .package-badge { display: inline-block; background: #00475a; color: white; padding: 4px 20px; border-radius: 20px; font-size: 11pt; font-weight: bold; margin: 8px auto; text-align: center; }
  .content { padding: 24px 40px; }
  .ref-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-size: 10pt; color: #555; border: 1px solid #ddd; padding: 10px 16px; border-radius: 4px; background: #f9f9f9; }
  h2 { font-size: 12pt; color: #00475a; margin: 22px 0 8px; border-bottom: 1px solid #00475a; padding-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px; }
  .parties-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 12px 0; }
  .party-box { border: 1px solid #ddd; padding: 14px; border-radius: 4px; }
  .party-box h3 { font-size: 10pt; color: #00475a; margin-bottom: 8px; font-weight: bold; }
  .party-box p { font-size: 10pt; color: #333; margin-bottom: 3px; }
  .package-highlight { background: #f0f8fa; border: 2px solid #00475a; padding: 16px; border-radius: 6px; margin: 12px 0; text-align: center; }
  .package-highlight .pkg-name { font-size: 14pt; font-weight: bold; color: #00475a; }
  .package-highlight .pkg-price { font-size: 18pt; font-weight: bold; color: #1a1a1a; margin: 6px 0; }
  .package-highlight .pkg-detail { font-size: 10pt; color: #555; }
  p { margin-bottom: 8px; font-size: 11pt; }
  ul { margin: 8px 0 8px 20px; }
  ul li { margin-bottom: 4px; font-size: 11pt; }
  .included-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin: 10px 0; }
  .included-item { display: flex; align-items: flex-start; gap: 6px; font-size: 10pt; }
  .check { color: #00475a; font-weight: bold; flex-shrink: 0; }
  .signature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 30px; }
  .sig-block { border-top: 1px solid #333; padding-top: 10px; }
  .sig-block p { font-size: 10pt; color: #555; }
  .sig-line { margin-bottom: 40px; }
  .footer-bar { background: #00475a; color: white; text-align: center; padding: 10px; font-size: 9pt; margin-top: 30px; }
  table { width: 100%; border-collapse: collapse; margin: 10px 0; }
  table th { background: #00475a; color: white; padding: 8px; font-size: 10pt; text-align: left; }
  table td { padding: 7px 8px; font-size: 10pt; border-bottom: 1px solid #eee; }
  table tr:nth-child(even) td { background: #f9f9f9; }
  .payment-box { background: #fff8e6; border: 1px solid #f5c518; padding: 12px; border-radius: 4px; margin: 10px 0; }
  @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
</style>
</head>
<body>
<div class="header">
  <div class="logo-row">
    <div class="logo-circle">
      <img src="https://dtvoeevhaseb5.cloudfront.net/user-uploads/91e27c1e-1948-4630-a9af-e63afd9e0b1c.png" alt="OTS Logo" />
    </div>
    <div>
      <div class="company-name">Office Tech Solutions</div>
      <div class="company-tagline">Keeping Your Office Running Smoothly</div>
    </div>
  </div>
  <h1>IT &amp; Printer Preventative Maintenance<br/>Service Agreement</h1>
  <div style="text-align:center;margin-top:8px">
    <span class="package-badge">${pkg.tier} Package — ${pkg.subtitle}</span>
  </div>
</div>

<div class="content">
  <div class="ref-row">
    <span><strong>Agreement Date:</strong> ${dateStr}</span>
    <span><strong>Agreement Period:</strong> 12 Months</span>
    <span><strong>Expiry Date:</strong> ${endDateStr}</span>
  </div>

  <h2>1. Agreement Purpose</h2>
  <p>This IT &amp; Printer Preventative Maintenance Service Agreement ("Agreement") is entered into between Office Tech Solutions (OTS) and the Client named below. The purpose of this Agreement is to define the scope of preventative maintenance services, schedules, pricing, and responsibilities to ensure the Client's IT equipment remains in optimal working condition throughout the contract term.</p>

  <h2>2. Parties to the Agreement</h2>
  <div class="parties-grid">
    <div class="party-box">
      <h3>Service Provider</h3>
      <p><strong>Office Tech Solutions (OTS)</strong></p>
      <p>Harare, Zimbabwe</p>
      <p>Tel: +263 715 689 056</p>
      <p>Email: ifixofficequip@gmail.com</p>
    </div>
    <div class="party-box">
      <h3>Client</h3>
      <p><strong>${clientName || "[Client Name]"}</strong></p>
      <p>Company: ______________________</p>
      <p>Address: ______________________</p>
      <p>Tel: ______________________</p>
      <p>Email: ______________________</p>
    </div>
  </div>

  <h2>3. Selected Contract Package</h2>
  <div class="package-highlight">
    <div class="pkg-name">${pkg.tier} Package — ${pkg.subtitle}</div>
    <div class="pkg-price">${pkg.contractPrice}</div>
    <div class="pkg-detail">${pkg.visits} Maintenance ${parseInt(pkg.visits) === 1 ? "Visit" : "Visits"} per year${pkg.discount ? " · " + pkg.discount + " Discount on Parts &amp; Toners" : " · Parts and Toners Charged Separately"}</div>
  </div>

  <table>
    <tr><th>Package</th><th>Visits/Year</th><th>Price</th><th>Parts Discount</th></tr>
    <tr>
      <td>🥇 Gold — Annual Monthly</td>
      <td>12 visits</td>
      <td>$640/year</td>
      <td>15% discount</td>
    </tr>
    <tr>
      <td>🥈 Silver — Quarterly</td>
      <td>4 visits</td>
      <td>$320/year</td>
      <td>5% discount</td>
    </tr>
    <tr>
      <td>🥉 Bronze — Bi-Annual</td>
      <td>2 visits</td>
      <td>$180/year</td>
      <td>Charged separately</td>
    </tr>
  </table>

  <h2>4. Services Included</h2>
  <div class="included-grid">
    <div class="included-item"><span class="check">✓</span><span>Printer inspection and servicing (all major brands)</span></div>
    <div class="included-item"><span class="check">✓</span><span>Computer maintenance and optimization</span></div>
    <div class="included-item"><span class="check">✓</span><span>Network health checks and diagnostics</span></div>
    <div class="included-item"><span class="check">✓</span><span>Written maintenance reports after each visit</span></div>
    <div class="included-item"><span class="check">✓</span><span>Minor adjustments and calibrations</span></div>
    <div class="included-item"><span class="check">✓</span><span>Remote support between scheduled visits</span></div>
    ${pkg.discount ? `<div class="included-item"><span class="check">✓</span><span>${pkg.discount} discount on all parts and toner cartridges</span></div>` : ""}
    ${pkg.tier === "Gold" ? '<div class="included-item"><span class="check">✓</span><span>Priority support — guaranteed 4-hour response time</span></div>' : ""}
  </div>

  <h2>5. Contract Term &amp; Schedule</h2>
  <p>This Agreement commences on <strong>${dateStr}</strong> and expires on <strong>${endDateStr}</strong> (12 months). Maintenance visits shall be scheduled at mutually agreed dates. OTS will contact the Client at least 5 business days prior to each scheduled visit.</p>
  <ul>
    <li><strong>Bronze (Bi-Annual):</strong> 2 visits — approximately every 6 months</li>
    <li><strong>Silver (Quarterly):</strong> 4 visits — approximately every 3 months</li>
    <li><strong>Gold (Monthly):</strong> 12 visits — approximately once per month</li>
  </ul>

  <h2>6. Payment Terms</h2>
  <div class="payment-box">
    <p><strong>Total Contract Value:</strong> ${pkg.contractPrice}</p>
    <p><strong>Payment Options:</strong> Full payment upfront (5% discount) OR quarterly installments</p>
    <p><strong>Payment Methods:</strong> Bank transfer, ZIPIT, EcoCash, or cash</p>
    <p><strong>Invoice:</strong> OTS will issue an invoice within 5 business days of signing</p>
  </div>
  <p>Payment is due within 14 days of invoice date. Late payments may result in suspension of services. A formal receipt will be issued for all payments.</p>

  <h2>7. Client Responsibilities</h2>
  <ul>
    <li>Provide access to equipment on scheduled visit dates</li>
    <li>Inform OTS of any equipment issues as they arise</li>
    <li>Ensure a safe working environment for OTS technicians</li>
    <li>Make timely payment as per agreed schedule</li>
    <li>Not to engage other parties to service equipment under this agreement without written notice</li>
  </ul>

  <h2>8. Parts and Consumables</h2>
  <p>Parts, toner cartridges, drums, rollers, and other consumables are <strong>not included</strong> in the base contract price unless specified. Clients on the Silver or Gold package receive the specified percentage discount on all OTS-sourced parts and toners. Replacement parts will be quoted separately before installation.</p>

  <h2>9. Exclusions</h2>
  <p>This Agreement does not cover:</p>
  <ul>
    <li>Damage caused by misuse, power surges, or acts of nature</li>
    <li>Equipment not listed in the agreed inventory</li>
    <li>Major repairs or complete equipment replacement</li>
    <li>Third-party software licensing or subscriptions</li>
    <li>Internet service provider (ISP) connectivity issues</li>
  </ul>

  <h2>10. Limitation of Liability</h2>
  <p>OTS liability under this Agreement shall not exceed the total annual contract value. OTS is not liable for data loss — clients are advised to maintain regular backups. OTS provides no warranty on third-party parts beyond the manufacturer's warranty.</p>

  <h2>11. Termination</h2>
  <p>Either party may terminate this Agreement with 30 days written notice. In the event of early termination by the Client, a pro-rata refund may be issued at OTS's discretion based on services rendered. OTS may terminate immediately in the event of non-payment or breach of agreement terms.</p>

  <h2>12. Confidentiality</h2>
  <p>Both parties agree to keep confidential any proprietary or sensitive business information disclosed during the performance of this Agreement. OTS will not share client data or network configurations with any third party without written consent.</p>

  <h2>13. Governing Law</h2>
  <p>This Agreement is governed by the laws of the Republic of Zimbabwe. Any disputes shall be resolved through mutual negotiation. If unresolved, disputes shall be referred to the appropriate courts of Zimbabwe.</p>

  <h2>14. Signatures</h2>
  <p>By signing below, both parties agree to the terms and conditions set out in this Agreement.</p>

  <div class="signature-grid">
    <div class="sig-block">
      <p><strong>For Office Tech Solutions (OTS)</strong></p>
      <div class="sig-line">
        <br/><br/>
        <p>_______________________________</p>
        <p>Sinclair Karim — Founder &amp; Lead Technician</p>
        <p>Date: ___________________________</p>
      </div>
    </div>
    <div class="sig-block">
      <p><strong>For the Client</strong></p>
      <div class="sig-line">
        <br/><br/>
        <p>_______________________________</p>
        <p>Name: __________________________</p>
        <p>Title: ___________________________</p>
        <p>Date: ___________________________</p>
      </div>
    </div>
  </div>
</div>

<div class="footer-bar">
  Office Tech Solutions | +263 715 689 056 | ifixofficequip@gmail.com | Harare, Zimbabwe
</div>
</body>
</html>`;
}

export default function ContractsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [clientName, setClientName] = useState("");
  const [generating, setGenerating] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleRequestContract = (pkg) => {
    setSelectedPkg(pkg);
    setClientName("");
    setShowForm(true);
  };

  const handleGeneratePDF = async () => {
    if (!clientName.trim()) return;
    setGenerating(true);
    try {
      const html = generateContractHTML(selectedPkg, clientName);
      const response = await fetch("/integrations/pdf-generation/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: { html } }),
      });
      if (!response.ok) throw new Error("PDF generation failed");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      if (typeof document !== "undefined") {
        const a = document.createElement("a");
        a.href = url;
        a.download = `OTS_${selectedPkg.tier}_Contract_${clientName.replace(/\s+/g, "_")}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
      URL.revokeObjectURL(url);
      setShowForm(false);
    } catch (err) {
      console.error(err);
      alert("Could not generate PDF. Please try again or contact us directly.");
    }
    setGenerating(false);
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #001529 0%, #003366 100%)",
      }}
    >
      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${WA}?text=${WA_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
        style={{
          background: "#25D366",
          boxShadow: "0 4px 24px rgba(37,211,102,0.5)",
        }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Header */}
      <header
        className="sticky top-0 z-40"
        style={{
          background: "rgba(0,21,41,0.98)",
          borderBottom: "1px solid #003366",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a
              href="/"
              className="text-2xl font-bold"
              style={{ color: "#00E5FF" }}
            >
              Office Tech Solutions
            </a>
            <nav className="hidden md:flex space-x-6">
              {NAV.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="font-medium transition-colors text-sm"
                  style={{
                    color: href === "/contracts" ? "#00E5FF" : "#94a3b8",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00E5FF")
                  }
                  onMouseLeave={(e) => {
                    if (href !== "/contracts")
                      e.currentTarget.style.color = "#94a3b8";
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          {isMenuOpen && (
            <div
              className="md:hidden py-4"
              style={{ borderTop: "1px solid #003366" }}
            >
              <nav className="flex flex-col space-y-4">
                {NAV.map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="font-medium"
                    style={{
                      color: href === "/contracts" ? "#00E5FF" : "#94a3b8",
                    }}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #001529 0%, #003366 60%, #001529 100%)",
        }}
        className="text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "rgba(0,229,255,0.15)",
              border: "1px solid rgba(0,229,255,0.4)",
              color: "#00E5FF",
            }}
          >
            <Shield className="w-4 h-4" /> Preventative Maintenance Contracts
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Preventative Maintenance Contracts
          </h1>
          <p
            className="text-xl md:text-2xl mb-6 font-medium"
            style={{ color: "#00E5FF" }}
          >
            Protect Your Business Technology
          </p>
          <p className="text-lg max-w-3xl mx-auto text-gray-300 mb-4">
            Choose a maintenance plan that keeps your printers, computers, and
            network running at peak performance — preventing costly breakdowns
            before they happen.
          </p>
        </div>
      </section>

      {/* Benefits bar */}
      <section
        style={{ background: "rgba(0,51,102,0.3)" }}
        className="py-10 border-y border-[#003366]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                label: "Scheduled Visits",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                label: "Prevents Downtime",
              },
              { icon: <Zap className="w-6 h-6" />, label: "Priority Support" },
              {
                icon: <FileText className="w-6 h-6" />,
                label: "Written Reports",
              },
            ].map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div style={{ color: "#00E5FF" }}>{b.icon}</div>
                <span className="text-sm font-medium text-gray-300">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Packages */}
      <section className="py-20" style={{ background: "#001529" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Choose Your Package
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              All packages include printer maintenance, computer maintenance,
              network health checks, and written reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.tier}
                className="rounded-2xl overflow-hidden relative flex flex-col"
                style={{
                  background: pkg.popular
                    ? "rgba(0,33,71,0.95)"
                    : "rgba(0,33,71,0.75)",
                  border: `2px solid ${pkg.borderColor}`,
                  boxShadow: pkg.popular
                    ? "0 0 30px rgba(148,163,184,0.2)"
                    : "none",
                }}
              >
                {pkg.popular && (
                  <div
                    className="text-center py-2 text-xs font-bold tracking-widest uppercase"
                    style={{ background: pkg.color, color: "#001529" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl">{pkg.icon}</span>
                    <div>
                      <div className="text-xl font-extrabold text-white">
                        {pkg.tier}
                      </div>
                      <div className="text-sm" style={{ color: pkg.color }}>
                        {pkg.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-5xl font-extrabold text-white">
                      {pkg.price}
                    </span>
                    <span className="text-gray-400 ml-1">{pkg.period}</span>
                    <div
                      className="mt-2 text-sm font-semibold"
                      style={{ color: pkg.color }}
                    >
                      {pkg.visits} maintenance{" "}
                      {parseInt(pkg.visits) === 1 ? "visit" : "visits"} per year
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <CheckCircle
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: pkg.color }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => handleRequestContract(pkg)}
                    className="w-full py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                    style={{
                      background: pkg.color,
                      color:
                        pkg.tier === "Silver"
                          ? "#1a1a1a"
                          : pkg.tier === "Gold"
                            ? "#1a1a1a"
                            : "#fff",
                    }}
                  >
                    Request Contract
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            All contracts include a professional PDF agreement for signing.
            Custom packages available —
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hover:underline"
              style={{ color: "#00E5FF" }}
            >
              contact us
            </a>
            .
          </p>
        </div>
      </section>

      {/* PDF Form Modal */}
      {showForm && selectedPkg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.8)" }}
        >
          <div
            className="w-full max-w-md rounded-2xl p-8"
            style={{
              background: "#001A33",
              border: "1px solid rgba(0,229,255,0.3)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {selectedPkg.icon} {selectedPkg.tier} Package Contract
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {selectedPkg.contractPrice} · {selectedPkg.subtitle}
                </p>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name / Company Name *
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. ABC Company (Pvt) Ltd"
                className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 text-sm"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(0,229,255,0.25)",
                  outline: "none",
                }}
              />
            </div>

            <div
              className="p-4 rounded-lg mb-6"
              style={{
                background: "rgba(0,229,255,0.08)",
                border: "1px solid rgba(0,229,255,0.2)",
              }}
            >
              <p className="text-xs text-gray-300 leading-relaxed">
                A professional PDF agreement will be generated and downloaded.
                The agreement includes all terms, a signature section, and is
                ready for printing or electronic signing.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 py-3 rounded-xl text-sm font-semibold text-gray-300 border border-gray-600 hover:border-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleGeneratePDF}
                disabled={!clientName.trim() || generating}
                className="flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: "#00E5FF", color: "#001529" }}
              >
                {generating ? (
                  <>
                    <span
                      style={{
                        display: "inline-block",
                        width: 16,
                        height: 16,
                        border: "2px solid #001529",
                        borderTopColor: "transparent",
                        borderRadius: "50%",
                        animation: "spin 0.7s linear infinite",
                      }}
                    />
                    Generating...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" /> Download PDF
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAQ / What's Included */}
      <section style={{ background: "rgba(0,51,102,0.25)" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              What Happens at Each Visit?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Every scheduled maintenance visit follows our professional 5-point
              checklist
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                num: "01",
                title: "Equipment Check",
                desc: "Full inspection of printers, computers and network devices",
              },
              {
                num: "02",
                title: "Cleaning",
                desc: "Internal cleaning of printer components, fans, and vents",
              },
              {
                num: "03",
                title: "Testing",
                desc: "Print quality tests, speed tests, and connectivity checks",
              },
              {
                num: "04",
                title: "Optimization",
                desc: "Driver updates, settings adjustments, and tuning",
              },
              {
                num: "05",
                title: "Report",
                desc: "Written report with findings and recommendations",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="text-center p-6 rounded-2xl"
                style={{
                  background: "rgba(0,33,71,0.85)",
                  border: "1px solid rgba(0,229,255,0.2)",
                }}
              >
                <div
                  className="text-3xl font-extrabold mb-3"
                  style={{ color: "#00E5FF" }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #003366 0%, #001529 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Plan is Right For You?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us for a free consultation. We'll assess your equipment and
            recommend the best package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:+263715689056"
              className="flex items-center text-lg"
              style={{ color: "#00E5FF" }}
            >
              <Phone className="w-5 h-5 mr-2" /> +263 715 689 056
            </a>
            <a
              href="mailto:ifixofficequip@gmail.com"
              className="flex items-center text-lg"
              style={{ color: "#00E5FF" }}
            >
              <Mail className="w-5 h-5 mr-2" /> ifixofficequip@gmail.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "#00E5FF", color: "#001529" }}
            >
              Book Free Consultation
            </a>
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12"
        style={{ background: "#000D1A", borderTop: "1px solid #003366" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#00E5FF" }}
              >
                Office Tech Solutions
              </h3>
              <p className="text-gray-300 mb-4">
                Keeping Your Office Running Smoothly
              </p>
              <p className="text-gray-400">
                Professional IT and printer services across Zimbabwe. 19+ years
                of ICT experience.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  ["/about", "About Us"],
                  ["/services", "Services"],
                  ["/projects", "Projects"],
                  ["/contracts", "Contracts"],
                  ["/contact", "Contact"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-gray-400 hover:text-[#00E5FF] transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Contact Info
              </h4>
              <div className="space-y-2 text-gray-400">
                <a
                  href="tel:+263715689056"
                  className="flex items-center hover:text-[#00E5FF] transition-colors"
                >
                  <Phone
                    className="w-4 h-4 mr-2"
                    style={{ color: "#00E5FF" }}
                  />{" "}
                  +263 715 689 056
                </a>
                <a
                  href="mailto:ifixofficequip@gmail.com"
                  className="flex items-center hover:text-[#00E5FF] transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" style={{ color: "#00E5FF" }} />{" "}
                  ifixofficequip@gmail.com
                </a>
                <div className="flex items-center">
                  <MapPin
                    className="w-4 h-4 mr-2"
                    style={{ color: "#00E5FF" }}
                  />{" "}
                  Harare, Zimbabwe
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-8 pt-8 text-center text-gray-500"
            style={{ borderTop: "1px solid #003366" }}
          >
            <p>&copy; 2024 Office Tech Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style
        jsx
        global
      >{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
