import { Bell, Search, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-4 gap-4"
      style={{ backgroundColor: "#1E1B4B", height: "56px" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 shrink-0" style={{ width: "208px" }}>
        <div
          className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
          style={{ backgroundColor: "#4F46E5" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-white font-semibold text-sm tracking-wide">Worcspace</span>
        <button
          className="flex items-center gap-1 rounded px-2 py-1 ml-1 shrink-0"
          style={{ backgroundColor: "rgba(255,255,255,0.09)" }}
        >
          <span className="text-white text-xs whitespace-nowrap">Worcspace 1</span>
          <ChevronDown size={11} style={{ color: "rgba(255,255,255,0.6)" }} />
        </button>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-lg mx-auto relative">
        <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.4)" }} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-md pl-8 pr-14 py-[7px] text-sm focus:outline-none"
          style={{
            backgroundColor: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "white",
          }}
        />
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono rounded px-1"
          style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.3)" }}
        >
          ⌘K
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 ml-auto">
        <button style={{ color: "rgba(255,255,255,0.5)" }} className="hover:text-white transition-colors">
          <Bell size={17} />
        </button>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold select-none"
          style={{ backgroundColor: "#4F46E5" }}
        >
          GK
        </div>
      </div>
    </header>
  );
}
