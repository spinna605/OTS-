"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageCircle,
  Calendar,
  User,
  ArrowRight,
  Bot,
  BookOpen,
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

const BLOG_POSTS = [
  {
    id: 1,
    title: "Printer Not Printing",
    emoji: "🖨️",
    excerpt:
      "Is your printer powered on but not printing? Follow these 5 steps to get it working again quickly.",
    category: "Troubleshooting Guide",
    date: "June 3, 2026",
    author: "Sinclair Karim",
    accentBg: "#fff1f0",
    accentColor: "#c41c00",
    content: `<h2>Printer Not Printing</h2><p>One of the most common office frustrations — your printer is on but nothing comes out. Here are 5 steps to resolve it.</p><h3>Step 1: Check the Power Connection</h3><p>Ensure the printer is fully powered on. Check that the power cable is securely connected to both the printer and the wall socket. Look for any indicator lights on the printer panel.</p><h3>Step 2: Confirm the Printer is Online</h3><p>On your computer, go to <strong>Settings → Printers & Scanners</strong>. Check that your printer status shows "Ready" or "Online". If it shows "Offline", right-click and select "Use Printer Online".</p><h3>Step 3: Verify Paper is Loaded</h3><p>Check the paper tray is loaded correctly with the right paper size. Make sure the paper guides are snug against the paper edges. Fan the paper before loading to prevent jams.</p><h3>Step 4: Check Toner / Ink Levels</h3><p>Low or empty toner/ink cartridges will prevent printing. Open your printer software or control panel to check consumable levels. Replace any empty cartridges.</p><h3>Step 5: Restart Printer and Computer</h3><p>Turn off both the printer and your computer completely. Wait 30 seconds, then power on the printer first, wait for it to fully initialize, then start your computer. Try printing again.</p><p><strong>Still not working?</strong> Contact Office Tech Solutions at +263 715 689 056 — we offer same-day remote support.</p>`,
  },
  {
    id: 2,
    title: "Slow Computer Performance",
    emoji: "🖥️",
    excerpt:
      "Is your computer running sluggishly? These 5 steps can dramatically improve speed without any cost.",
    category: "Troubleshooting Guide",
    date: "June 3, 2026",
    author: "Sinclair Karim",
    accentBg: "#e6f0f8",
    accentColor: "#1a4d7a",
    content: `<h2>Slow Computer Performance</h2><p>A slow computer drains productivity. Before calling for help, try these 5 steps to speed things up.</p><h3>Step 1: Restart the Computer</h3><p>Many people leave computers running for days or weeks. A fresh restart clears temporary files, flushes RAM, and applies pending updates. Restart and test performance.</p><h3>Step 2: Remove Unnecessary Startup Programs</h3><p>Open <strong>Task Manager → Startup</strong> tab (Windows) or <strong>System Preferences → Login Items</strong> (Mac). Disable programs you don't need to launch at startup. This can dramatically reduce boot time.</p><h3>Step 3: Run an Antivirus Scan</h3><p>Malware and viruses consume system resources silently. Run a full scan using Windows Defender or your installed antivirus. Remove any threats found and restart the computer.</p><h3>Step 4: Clear Temporary Files</h3><p>On Windows, press <strong>Win + R</strong>, type <strong>%temp%</strong> and delete all files. Also run <strong>Disk Cleanup</strong> from the Start menu.</p><h3>Step 5: Check Available Storage Space</h3><p>When a hard drive is more than 85% full, performance degrades significantly. Delete old files, empty the Recycle Bin, and move large files to an external drive.</p><p><strong>Need professional help?</strong> Call us on +263 715 689 056 for a full computer optimization service.</p>`,
  },
  {
    id: 3,
    title: "No Internet Connection",
    emoji: "📶",
    excerpt:
      "Lost internet access? Don't panic. Work through these 5 steps to restore your connection.",
    category: "Troubleshooting Guide",
    date: "June 3, 2026",
    author: "Sinclair Karim",
    accentBg: "#e6f4f0",
    accentColor: "#1a6b50",
    content: `<h2>No Internet Connection</h2><p>Internet outages can halt your entire office. Here's how to diagnose and fix most connection issues yourself.</p><h3>Step 1: Check Cables and Wi-Fi</h3><p>If using a wired connection, ensure the ethernet cable is securely plugged in. If on Wi-Fi, check that your device shows a connection and isn't in airplane mode.</p><h3>Step 2: Restart the Router</h3><p>Unplug your router and modem from power. Wait a full 60 seconds. Plug the modem in first, wait 30 seconds, then plug in the router. Wait 2 minutes before testing.</p><h3>Step 3: Verify ISP Connection</h3><p>Check whether the issue is with your Internet Service Provider. Log into your router admin panel (usually 192.168.1.1) and check the WAN/Internet status.</p><h3>Step 4: Test Another Device</h3><p>Try connecting a different device to the same network. If the other device works, the problem is with your specific computer's network settings, not the router.</p><h3>Step 5: Reset Network Settings</h3><p>On Windows: Open Command Prompt as Administrator and run <strong>netsh winsock reset</strong> then <strong>ipconfig /flushdns</strong>. Restart your computer.</p><p><strong>Persistent network issues?</strong> Our team specializes in network troubleshooting. Call +263 715 689 056.</p>`,
  },
  {
    id: 4,
    title: "Computer Won't Turn On",
    emoji: "⚡",
    excerpt:
      "Pressing the power button but nothing happens? Try these 5 checks before assuming the worst.",
    category: "Troubleshooting Guide",
    date: "June 3, 2026",
    author: "Sinclair Karim",
    accentBg: "#fef9e7",
    accentColor: "#a07c10",
    content: `<h2>Computer Won't Turn On</h2><p>A computer that won't power on is alarming but often has a simple cause. Work through these steps carefully.</p><h3>Step 1: Check the Power Source</h3><p>Ensure the wall socket is working by plugging in another device. If using a power strip, check its power switch and that it hasn't tripped. Try plugging the computer directly into the wall.</p><h3>Step 2: Verify the Power Cable</h3><p>For desktops, check both ends of the power cable. For laptops, try a different compatible charger if available and check the charging port for damage or debris.</p><h3>Step 3: Remove External Devices</h3><p>Disconnect all USB drives, external hard drives, printers, and other peripherals. Some devices can prevent a computer from booting properly.</p><h3>Step 4: Listen for Startup Sounds</h3><p>Press the power button and listen carefully. Beep codes indicate specific hardware failures. Note the pattern (e.g., 3 short beeps) and report this to a technician.</p><h3>Step 5: Contact Technical Support</h3><p>If none of the above steps work, the issue may be a failed power supply, motherboard, or RAM. Contact Office Tech Solutions immediately for diagnosis.</p><p><strong>Hardware emergency?</strong> Call us now on +263 715 689 056 for urgent support.</p>`,
  },
  {
    id: 5,
    title: "Printer Paper Jams",
    emoji: "📄",
    excerpt:
      "Paper jams are frustrating but fixable. Follow these 5 safe steps to clear any jam without damaging your printer.",
    category: "Troubleshooting Guide",
    date: "June 3, 2026",
    author: "Sinclair Karim",
    accentBg: "#f5f0ff",
    accentColor: "#6b21a8",
    content: `<h2>Printer Paper Jams</h2><p>Paper jams are one of the most common printer problems. Handle them carefully to avoid damaging internal components.</p><h3>Step 1: Remove Jammed Paper Carefully</h3><p>Turn off the printer first. Open all access panels and gently pull the jammed paper in the direction of the paper path — never yank it backwards. If the paper tears, carefully remove all fragments.</p><h3>Step 2: Check Paper Tray Alignment</h3><p>Remove all paper from the tray. Check for any torn pieces or debris. Reload paper properly, ensuring the stack is not overfilled (stay below the max fill line).</p><h3>Step 3: Inspect the Rollers</h3><p>Open the printer access panels and look at the feed rollers. Dirty or worn rollers are a leading cause of jams. Use a lint-free cloth lightly dampened with water to clean rubber rollers.</p><h3>Step 4: Use the Correct Paper Type</h3><p>Check your printer's specifications for supported paper weights and sizes. Using paper that is too thick, too thin, or the wrong size causes jams. Always use good quality, dry paper.</p><h3>Step 5: Restart the Printer</h3><p>After clearing the jam, close all panels, turn the printer back on, and wait for it to fully initialize. Print a test page. If the jam error persists, turn off and on again to reset the sensors.</p><p><strong>Recurring jams?</strong> This may indicate worn rollers or a deeper mechanical issue. Contact us at +263 715 689 056 for a maintenance check.</p>`,
  },
];

export default function BlogPage() {
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
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
                  style={{ color: href === "/blog" ? "#00C4A0" : "#6b7280" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00C4A0")
                  }
                  onMouseLeave={(e) => {
                    if (href !== "/blog")
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
        {/* Premium knowledge base hero background */}
        <img
          src="https://raw.createusercontent.com/c25804a7-de9e-41ac-8c3a-f46b6bbcf846/"
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
            <BookOpen className="w-3.5 h-3.5" /> IT Troubleshooting Guides
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            IT Troubleshooting Guides
          </h1>
          <p
            className="text-xl md:text-2xl font-bold mb-5"
            style={{ color: "#F5C518" }}
          >
            Step-by-Step Guides for Common IT Problems
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Professional troubleshooting advice from Sinclair Karim with 19+
            years of ICT experience. Follow each guide before calling for
            support.
          </p>
        </div>
      </section>

      {selectedPost ? (
        /* Single Post View */
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-8 inline-flex items-center gap-2 font-semibold text-sm hover:opacity-80 transition-opacity"
              style={{ color: "#00C4A0" }}
            >
              ← Back to Guides
            </button>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
              style={{
                background: selectedPost.accentBg,
                color: selectedPost.accentColor,
              }}
            >
              {selectedPost.category}
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">{selectedPost.emoji}</span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                {selectedPost.title}
              </h1>
            </div>
            <div className="flex items-center gap-4 text-gray-400 text-sm mb-10 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {selectedPost.date}
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {selectedPost.author}
              </div>
            </div>
            <div
              className="prose max-w-none text-gray-700 leading-relaxed"
              style={{ fontSize: "1rem" }}
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
            <div
              className="mt-16 rounded-2xl p-8 text-center"
              style={{
                background: "linear-gradient(145deg, #0a2e2e 0%, #1a5252 100%)",
              }}
            >
              <h3 className="text-2xl font-extrabold text-white mb-3">
                Still stuck? We can help.
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Contact our expert team for fast, professional support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-6 py-3 rounded-xl font-extrabold text-sm hover:opacity-90"
                  style={{ background: "#F5C518", color: "#1a1a1a" }}
                >
                  Book a Technician
                </a>
                <a
                  href={`https://wa.me/${wa}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Post List */
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col"
                >
                  <div
                    className="p-2"
                    style={{
                      background: "linear-gradient(145deg, #0a2e2e, #1a5252)",
                    }}
                  >
                    <div className="flex items-center gap-3 p-4">
                      <span className="text-4xl">{post.emoji}</span>
                      <div>
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{
                            background: post.accentBg,
                            color: post.accentColor,
                          }}
                        >
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-gray-400 text-xs mt-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-lg font-extrabold text-gray-900 mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </div>
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="inline-flex items-center gap-1 text-sm font-bold hover:opacity-80 transition-opacity"
                        style={{ color: "#00C4A0" }}
                      >
                        Read Guide <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Try AI Help promo */}
            <div
              className="mt-16 rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row"
              style={{
                background: "linear-gradient(135deg, #0a2e2e 0%, #1a5252 100%)",
              }}
            >
              <div className="flex-1 p-8 md:p-10 text-white">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
                  style={{
                    background: "rgba(245,197,24,0.18)",
                    border: "1px solid rgba(245,197,24,0.5)",
                    color: "#F5C518",
                  }}
                >
                  <Bot className="w-3 h-3" /> Free AI Troubleshooting
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
                  Can't find your answer? Try{" "}
                  <span style={{ color: "#00E5FF" }}>TechBot AI</span>
                </h3>
                <p className="text-gray-300 text-sm mb-6 max-w-md leading-relaxed">
                  Our AI troubleshooting assistant can guide you through any IT
                  problem in real-time. Available 24/7, completely free.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/troubleshoot"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
                    style={{ background: "#F5C518", color: "#1a1a1a" }}
                  >
                    <Bot className="w-4 h-4" /> Try TechBot — It's Free
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-white/30 text-white hover:bg-white/10 transition-colors"
                  >
                    Book a Technician
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
