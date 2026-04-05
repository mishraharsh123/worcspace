Worcspace — Knowledge Base UI:

A pixel-perfect React implementation of the Worcspace Knowledge Base management interface.

🔗 Live Demo: (https://worcspace-mu.vercel.app/)

Tech Stack:

React 19 — Functional components + hooks
Vite 8 — Build tool & dev server
Tailwind CSS v4 — Utility-first styling
Lucide React — Icons

Features:

3-column Knowledge Base card grid
Create New modal (right-slide panel) with Name, Description, Vector Store & Embedding Model fields
Live search filter
Pagination with rows-per-page control
Per-card context menu (Edit / Delete)
Esc to close modal, click-outside support

Project Structure:
src/
├── components/
│   ├── layout/          # Header, Sidebar
│   ├── knowledgebase/   # KnowledgeBaseCard, CreateKnowledgeBaseModal
│   └── ui/              # Pagination
├── pages/               # KnowledgeBasePage
└── data/                # navItems, knowledgeBases (seed data)

Getting Started:

bashgit clone https://github.com/mishraharsh123/worcspace.git

cd worcspace

npm install

npm run dev

Open http://localhost:5173

Design Tokens
TokenValuePrimary#4F46E5Secondary#1E1B4B


MIT License
