import { useState, useMemo } from "react";
import { Search, Plus, FileQuestion } from "lucide-react";
import KnowledgeBaseCard from "../components/knowledgebase/KnowledgeBaseCard";
import CreateKnowledgeBaseModal from "../components/knowledgebase/CreateKnowledgeBaseModal";
import Pagination from "../components/ui/Pagination";

const SEED = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: "Test",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  createdOn: "14/07/2025",
}));

export default function KnowledgeBasePage() {
  const [items, setItems] = useState(SEED);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => items.filter(kb => kb.title.toLowerCase().includes(search.toLowerCase())),
    [items, search]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paged = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handleCreate = (form) => {
    setItems(prev => [{
      id: Date.now(),
      title: form.name,
      description: form.description || "No description provided.",
      createdOn: new Date().toLocaleDateString("en-GB"),
    }, ...prev]);
    setPage(1);
  };

  const handleDelete = (id) => {
    setItems(prev => prev.filter(kb => kb.id !== id));
  };

  const handleRowsChange = (n) => {
    setRowsPerPage(n);
    setPage(1);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "calc(100vh - 56px - 48px)" }}>
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-semibold text-gray-900" style={{ fontSize: "18px" }}>Knowledge Base</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
                className="text-sm placeholder:text-gray-400 rounded-md pl-8 pr-4 py-[7px] focus:outline-none transition-colors"
                style={{ border: "1px solid #d1d5db", width: "200px" }}
                onFocus={e => e.target.style.borderColor = "#4F46E5"}
                onBlur={e => e.target.style.borderColor = "#d1d5db"}
              />
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-1.5 text-white text-sm font-medium rounded-md transition-opacity hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#4F46E5", padding: "7px 16px" }}
            >
              <Plus size={15} />
              Create New
            </button>
          </div>
        </div>

        {/* Grid or Empty */}
        <div className="flex-1">
          {paged.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-300">
              <FileQuestion size={52} className="mb-3" />
              <p className="text-sm text-gray-400">No Knowledge Bases Found</p>
            </div>
          ) : (
            <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {paged.map(kb => (
                <KnowledgeBaseCard
                  key={kb.id}
                  title={kb.title}
                  description={kb.description}
                  createdOn={kb.createdOn}
                  onDelete={() => handleDelete(kb.id)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-6" style={{ borderTop: "1px solid #e5e7eb" }}>
          <Pagination
            total={filtered.length}
            page={page}
            rowsPerPage={rowsPerPage}
            totalPages={totalPages}
            onRowsChange={handleRowsChange}
            onPageChange={setPage}
          />
        </div>
      </div>

      {showModal && (
        <CreateKnowledgeBaseModal
          onClose={() => setShowModal(false)}
          onCreate={handleCreate}
        />
      )}
    </>
  );
}
