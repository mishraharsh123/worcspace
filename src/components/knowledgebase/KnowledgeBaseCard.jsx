import { MoreVertical } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function KnowledgeBaseCard({ title, description, createdOn, onDelete }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      className="bg-white rounded-lg flex flex-col justify-between transition-shadow hover:shadow-md cursor-pointer"
      style={{ border: "1px solid #e5e7eb", padding: "20px", minHeight: "180px" }}
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          <div className="relative" ref={ref}>
            <button
              onClick={e => { e.stopPropagation(); setOpen(o => !o); }}
              className="text-gray-400 hover:text-gray-600 transition-colors p-0.5 rounded"
            >
              <MoreVertical size={16} />
            </button>
            {open && (
              <div
                className="absolute right-0 top-6 bg-white rounded-md py-1 z-10"
                style={{ border: "1px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", width: "112px" }}
              >
                <button className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50">Edit</button>
                <button
                  className="w-full text-left px-3 py-1.5 text-xs text-red-500 hover:bg-red-50"
                  onClick={onDelete}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {description}
        </p>
      </div>
      <p className="text-xs text-gray-400 mt-4">
        Created On: <span className="text-gray-500">{createdOn}</span>
      </p>
    </div>
  );
}
