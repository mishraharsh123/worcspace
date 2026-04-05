import {
  Bot, Cpu, Library, Send, Monitor, AlignJustify,
  Zap, Briefcase, PlayCircle, Shield, BookOpen,
  KeyRound, Building2, Plug, ScrollText
} from "lucide-react";

export const myProjects = [
  { label: "Agents", icon: Bot },
  { label: "AI Models", icon: Cpu },
  { label: "Library", icon: Library },
];

export const orchestrator = [
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

export const admin = [
  { label: "Tenant", icon: Building2 },
  { label: "Integrations", icon: Plug },
  { label: "Audit Logs", icon: ScrollText },
];
