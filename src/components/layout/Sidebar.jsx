import { Bot, Cpu, Library, Send, Monitor, AlignJustify, Zap, Briefcase, PlayCircle, Shield, BookOpen, KeyRound, Building2, Plug, ScrollText } from "lucide-react";

const myProjects = [
  { label: "Agents", icon: Bot },
  { label: "AI Models", icon: Cpu },
  { label: "Library", icon: Library },
];

const orchestrator = [
  { label: "Published", icon: Send },
  { label: "Machines", icon: Monitor },
  { label: "Queues", icon: AlignJustify },
  { label: "Triggers", icon: Zap },
  { label: "Jobs", icon: Briefcase },
  { label: "Executions", icon: PlayCircle },
  { label: "Vault", icon: Shield },
  { label: "Knowledge Base", icon: BookOpen, active: true },
  { label: "Key Store", icon: KeyRound },
];

const admin = [
  { label: "Tenant", icon: Building2 },
  { label: "Integrations", icon: Plug },
  { label: "Audit Logs", icon: ScrollText },
];

function NavItem({ item }) {
  const Icon = item.icon;
  return (
    <li>
      <a
        href="#"
        style={item.active ? { backgroundColor: "#EEF2FF", color: "#4F46E5" } : {}}
        className={`flex items-center gap-3 px-4 py-[7px] text-sm rounded-md mx-2 transition-colors ${
          item.active ? "font-medium" : "text-gray-600 hover:bg-gray-100"
        }`}
        onClick={e => e.preventDefault()}
      >
        <Icon size={15} style={{ color: item.active ? "#4F46E5" : "#6b7280", flexShrink: 0 }} />
        <span>{item.label}</span>
      </a>
    </li>
  );
}

function Section({ title, items }) {
  return (
    <div className="mb-1">
      <p className="px-6 pt-4 pb-1 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
        {title}
      </p>
      <ul className="space-y-0.5">
        {items.map(item => <NavItem key={item.label} item={item} />)}
      </ul>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside
      className="fixed top-14 left-0 bottom-0 bg-white border-r border-gray-200 overflow-y-auto"
      style={{ width: "208px" }}
    >
      <nav className="pt-2 pb-6">
        <Section title="My Projects" items={myProjects} />
        <Section title="Orchestrator" items={orchestrator} />
        <Section title="Admin" items={admin} />
      </nav>
    </aside>
  );
}
