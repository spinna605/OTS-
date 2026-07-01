"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageCircle,
  Send,
  Bot,
  User,
  Printer,
  Wifi,
  Monitor,
  AlertTriangle,
  RefreshCw,
  Zap,
  Phone as PhoneIcon,
} from "lucide-react";
import useHandleStreamResponse from "@/utils/useHandleStreamResponse";

const LOGO =
  "https://dtvoeevhaseb5.cloudfront.net/user-uploads/91e27c1e-1948-4630-a9af-e63afd9e0b1c.png";

const SYSTEM_PROMPT = `You are a friendly and professional IT support assistant for Office Tech Solutions, a Zimbabwean-based IT and printer services company. Your name is "TechBot".

Your role is to help clients troubleshoot common IT and printer issues step by step. Be clear, patient, and encouraging. Always:

1. Ask one question at a time to diagnose the problem
2. Give numbered steps that are easy to follow
3. Use simple language — avoid too much jargon
4. After each set of steps, ask if the problem is resolved
5. If the issue is complex or hardware-related, recommend contacting Office Tech Solutions directly

You specialise in:
- Printer issues: paper jams, not printing, offline printers, poor print quality, ink/toner problems
- Brands you support: Canon, HP, Ricoh, Kyocera, Nashua, Gestetner
- Network issues: no internet, slow WiFi, devices not connecting
- Basic PC issues: slow computer, software crashes, not turning on
- Remote support guidance (AnyDesk, RustDesk, TeamViewer setup)

Company contact info (mention when the problem needs a technician):
- Phone: +263715689056
- WhatsApp: +263715689056
- Email: ifixofficequip@gmail.com
- Location: Harare, Zimbabwe

Escalation rule: If after 3-4 troubleshooting steps the issue persists, or if it requires physical inspection or part replacement, kindly suggest they contact the Office Tech Solutions team directly.

Format your responses using plain text. For steps, use numbered lists like:
1. First do this
2. Then do that

Keep responses concise but thorough — ideally under 150 words per reply.`;

const QUICK_TOPICS = [
  {
    icon: <Printer className="w-5 h-5" />,
    label: "Paper Jam",
    prompt: "My printer has a paper jam. How do I clear it safely?",
    color: "#FF6B6B",
  },
  {
    icon: <Printer className="w-5 h-5" />,
    label: "Not Printing",
    prompt: "My printer is not printing anything. What should I check first?",
    color: "#FFB347",
  },
  {
    icon: <Printer className="w-5 h-5" />,
    label: "Poor Print Quality",
    prompt:
      "My prints look faded, streaky or blurry. How do I fix the print quality?",
    color: "#A78BFA",
  },
  {
    icon: <Wifi className="w-5 h-5" />,
    label: "No Internet",
    prompt: "I have no internet connection. How do I diagnose and fix this?",
    color: "#34D399",
  },
  {
    icon: <Monitor className="w-5 h-5" />,
    label: "Slow Computer",
    prompt: "My computer is running very slowly. What can I do to speed it up?",
    color: "#60A5FA",
  },
  {
    icon: <Wifi className="w-5 h-5" />,
    label: "Printer Offline",
    prompt:
      "My printer shows as offline on my computer even though it's turned on. How do I fix this?",
    color: "#F472B6",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    label: "Identify My Problem",
    prompt:
      "I have a problem with my office equipment but I'm not sure what it is. Can you help me identify and diagnose it?",
    color: "#00E5FF",
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    label: "Printer Setup",
    prompt:
      "I need help setting up a printer on my computer or network. Where do I start?",
    color: "#FB923C",
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

function TypingIndicator() {
  return (
    <div
      className="flex items-center gap-1 px-4 py-3 rounded-2xl rounded-tl-none w-fit"
      style={{
        background: "rgba(0,33,71,0.9)",
        border: "1px solid rgba(0,229,255,0.2)",
      }}
    >
      <div className="flex gap-1 items-center">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{
              background: "#00E5FF",
              animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
      <style jsx global>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function Message({ role, content }) {
  const isBot = role === "assistant";
  return (
    <div className={`flex gap-3 ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot && (
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
          style={{ background: "#00E5FF" }}
        >
          <Bot className="w-4 h-4" style={{ color: "#001529" }} />
        </div>
      )}
      <div
        className="max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap"
        style={
          isBot
            ? {
                background: "rgba(0,33,71,0.9)",
                border: "1px solid rgba(0,229,255,0.2)",
                color: "#e2e8f0",
                borderTopLeftRadius: 4,
              }
            : {
                background: "#00E5FF",
                color: "#001529",
                borderTopRightRadius: 4,
              }
        }
      >
        {content}
      </div>
      {!isBot && (
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
          style={{
            background: "rgba(0,229,255,0.2)",
            border: "1px solid rgba(0,229,255,0.4)",
          }}
        >
          <User className="w-4 h-4" style={{ color: "#00E5FF" }} />
        </div>
      )}
    </div>
  );
}

export default function TroubleshootPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm TechBot, your Office Tech Solutions assistant.\n\nI can walk you through troubleshooting your printer, computer, or network issues step by step — right now, for free!\n\nChoose a topic below to get started, or just type your problem in your own words.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const whatsappNumber = "263715689056";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingMessage]);

  const handleFinish = useCallback((message) => {
    setMessages((prev) => [...prev, { role: "assistant", content: message }]);
    setStreamingMessage("");
    setIsLoading(false);
  }, []);

  const handleStreamResponse = useHandleStreamResponse({
    onChunk: setStreamingMessage,
    onFinish: handleFinish,
  });

  const sendMessage = useCallback(
    async (text) => {
      const userMessage = { role: "user", content: text };
      const updatedMessages = [...messages, userMessage];

      setMessages(updatedMessages);
      setInput("");
      setIsLoading(true);
      setHasStarted(true);

      try {
        const response = await fetch(
          "/integrations/chat-gpt/conversationgpt4",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...updatedMessages,
              ],
              stream: true,
            }),
          },
        );

        if (!response.ok) throw new Error("Request failed");
        handleStreamResponse(response);
      } catch (error) {
        console.error("AI error:", error);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "⚠️ Sorry, I'm having trouble connecting right now. Please try again, or contact our team directly:\n\n📞 +263715689056\n📧 ifixofficequip@gmail.com",
          },
        ]);
        setIsLoading(false);
      }
    },
    [messages, handleStreamResponse],
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input.trim());
  };

  const handleQuickTopic = (topic) => {
    if (isLoading) return;
    sendMessage(topic.prompt);
  };

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "👋 Hi again! I've reset our conversation. Choose a topic below or describe your problem to get started.",
      },
    ]);
    setStreamingMessage("");
    setIsLoading(false);
    setHasStarted(false);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/263715689056?text=${encodeURIComponent("Hi! I tried troubleshooting with TechBot but still need help.")}`}
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

      {/* White Header */}
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
                className="text-sm font-semibold flex items-center gap-1"
                style={{ color: "#00C4A0" }}
              >
                <Bot className="w-4 h-4" />
                AI Help
              </a>
              <a
                href="/contact"
                className="px-5 py-2 rounded-lg text-white text-sm font-bold hover:opacity-90"
                style={{ background: "#1a3d3d" }}
              >
                Contact Us
              </a>
            </nav>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
          {isMenuOpen && (
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
                  <Bot className="w-4 h-4" />
                  AI Help
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

      {/* Hero — updated to match design */}
      <section
        className="relative overflow-hidden text-white text-center py-20"
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
              id="trb-dots"
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
          <rect width="100%" height="100%" fill="url(#trb-dots)" />
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
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6"
            style={{
              background: "rgba(245,197,24,0.2)",
              border: "1px solid rgba(245,197,24,0.5)",
              color: "#F5C518",
            }}
          >
            <Zap className="w-4 h-4" />
            AI-Powered Troubleshooting — Free & Instant
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Fix It Yourself with{" "}
            <span style={{ color: "#00E5FF" }}>TechBot</span>
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get step-by-step guidance for printer jams, network issues, PC
            problems and more — no wait time, no call needed. If TechBot can't
            solve it, we will.
          </p>
        </div>
      </section>

      {/* Chat section — keep all existing chat logic, just update background */}
      <section className="py-8" style={{ background: "#f7fafa" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Topic Chips — hide after started */}
          {!hasStarted && (
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
                🔧 Common Issues — click to start:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {QUICK_TOPICS.map((topic, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickTopic(topic)}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl text-sm font-medium transition-all hover:scale-105 bg-white border border-gray-100 shadow-sm hover:shadow-md"
                    style={{ color: "#374151" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = topic.color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "#f3f4f6")
                    }
                  >
                    <span style={{ color: topic.color }}>{topic.icon}</span>
                    <span className="text-center leading-tight text-xs">
                      {topic.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Window */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            {/* Chat Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(145deg, #0a2e2e, #1a5252)",
                  }}
                >
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">TechBot</div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-xs text-gray-400">
                      Online — AI Troubleshooting Assistant
                    </span>
                  </div>
                </div>
              </div>
              {hasStarted && (
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:border-gray-400 transition-colors"
                >
                  <RefreshCw className="w-3 h-3" /> New Chat
                </button>
              )}
            </div>

            {/* Messages */}
            <div
              className="p-4 space-y-4 overflow-y-auto bg-gray-50"
              style={{ minHeight: "380px", maxHeight: "480px" }}
            >
              {messages.map((msg, i) => (
                <Message key={i} role={msg.role} content={msg.content} />
              ))}

              {/* Streaming message */}
              {streamingMessage && (
                <div className="flex gap-3 justify-start">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{
                      background: "linear-gradient(145deg, #0a2e2e, #1a5252)",
                    }}
                  >
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div
                    className="max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap bg-white border border-gray-100 text-gray-700 shadow-sm"
                    style={{ borderTopLeftRadius: 4 }}
                  >
                    {streamingMessage}
                    <span
                      className="inline-block w-1 h-3 ml-1 rounded-sm"
                      style={{ background: "#00C4A0" }}
                    />
                  </div>
                </div>
              )}

              {/* Typing indicator */}
              {isLoading && !streamingMessage && <TypingIndicator />}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex gap-3 p-4 bg-white border-t border-gray-100"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your problem or ask a question..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-xl text-sm border border-gray-200 outline-none focus:border-[#00C4A0] transition-colors bg-white text-gray-800 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-4 py-3 rounded-xl font-bold flex items-center gap-2 disabled:opacity-40 hover:opacity-90 transition-all"
                style={{ background: "#F5C518", color: "#1a1a1a" }}
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">Send</span>
              </button>
            </form>
          </div>

          {/* Quick topic chips AFTER chat started */}
          {hasStarted && (
            <div className="mt-4">
              <p className="text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">
                Switch topic:
              </p>
              <div className="flex flex-wrap gap-2">
                {QUICK_TOPICS.map((topic, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickTopic(topic)}
                    disabled={isLoading}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-600 hover:border-gray-400 transition-colors disabled:opacity-40"
                  >
                    <span style={{ color: topic.color }}>{topic.icon}</span>
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Escalation CTA */}
          <div
            className="mt-8 rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row"
            style={{
              background: "linear-gradient(135deg, #0a2e2e 0%, #1a5252 100%)",
            }}
          >
            <div className="flex-1 p-8 text-white">
              <h3 className="text-xl font-extrabold mb-2">
                Still stuck? Talk to a real technician.
              </h3>
              <p className="text-gray-300 text-sm mb-5">
                If TechBot can't solve it, our expert team is ready to help
                remotely or on-site — fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/263715689056?text=${encodeURIComponent("Hi! I tried troubleshooting with TechBot but still need help.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-green-600 hover:bg-green-700 text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
                <a
                  href="/contact"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
                  style={{ background: "#F5C518", color: "#1a1a1a" }}
                >
                  <PhoneIcon className="w-4 h-4" /> Book a Technician
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What TechBot Can Help With */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
            What TechBot Can Help With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "🖨️",
                title: "Paper Jams",
                desc: "Step-by-step jam clearing for all printer brands",
              },
              {
                icon: "📄",
                title: "Print Quality Issues",
                desc: "Fix streaks, fading, smearing and blurry prints",
              },
              {
                icon: "🔌",
                title: "Printer Offline",
                desc: "Get your printer showing as online in seconds",
              },
              {
                icon: "📶",
                title: "WiFi Problems",
                desc: "Diagnose and fix internet connectivity issues",
              },
              {
                icon: "🖥️",
                title: "Slow Computer",
                desc: "Speed up your PC with simple optimisation steps",
              },
              {
                icon: "🔧",
                title: "Identify Any Problem",
                desc: "Not sure what's wrong? TechBot will help diagnose it",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="font-bold text-gray-900 text-sm mb-1">
                    {item.title}
                  </div>
                  <div className="text-gray-500 text-xs leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
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
                  href="https://wa.me/263715689056"
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
                  <Phone className="w-4 h-4 flex-shrink-0 text-[#00C4A0]" />
                  +263 715 689 056
                </a>
                <a
                  href="mailto:ifixofficequip@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#00E5FF] text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-[#00C4A0]" />
                  ifixofficequip@gmail.com
                </a>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-[#00C4A0]" />
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
