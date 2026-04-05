import { X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const VECTOR_STORES = ["Qdrant", "Pinecone", "Weaviate", "Chroma"];
const EMBEDDING_MODELS = ["text-embedding-ada-002", "text-embedding-3-small", "text-embedding-3-large"];

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full text-sm text-gray-800 placeholder:text-gray-400 rounded-md px-3 py-2 focus:outline-none transition-colors";
const inputStyle = { border: "1px solid #d1d5db" };
const inputFocusStyle = { border: "1px solid #4F46E5" };

function Input({ placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={inputCls}
      style={focused ? inputFocusStyle : inputStyle}
    />
  );
}

function Textarea({ placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      rows={4}
      className={`${inputCls} resize-none`}
      style={focused ? inputFocusStyle : inputStyle}
    />
  );
}

function Select({ value, onChange, options }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`${inputCls} appearance-none pr-8`}
        style={focused ? inputFocusStyle : inputStyle}
      >
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
      <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  );
}

export default function CreateKnowledgeBaseModal({ onClose, onCreate }) {
  const [form, setForm] = useState({
    name: "", description: "", vectorStore: "Qdrant", embeddingModel: "text-embedding-ada-002"
  });
  const [nameError, setNameError] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handler = e => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const set = k => e => {
    setForm(f => ({ ...f, [k]: e.target.value }));
    if (k === "name") setNameError(false);
  };

  const handleCreate = () => {
    if (!form.name.trim()) { setNameError(true); return; }
    onCreate(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex" style={{ animation: "fadeIn 0.15s ease" }}>
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}} @keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}`}</style>

      {/* Backdrop */}
      <div
        className="flex-1"
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="bg-white h-full flex flex-col"
        style={{ width: "440px", animation: "slideIn 0.2s ease", boxShadow: "-4px 0 24px rgba(0,0,0,0.12)" }}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4" style={{ borderBottom: "1px solid #f3f4f6" }}>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">Create New Knowledge Base</h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Best for quick answers from documents, websites and text files.
              </p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors mt-0.5">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 px-6 py-5 space-y-5 overflow-y-auto">
          <Field label="Name (Cannot be edited later)" required>
            <Input placeholder="Name" value={form.name} onChange={set("name")} />
            {nameError && <p className="text-xs text-red-500 mt-1">Name is required</p>}
          </Field>

          <Field label="Description">
            <Textarea placeholder="Description" value={form.description} onChange={set("description")} />
          </Field>

          <Field label="Vector Store" required>
            <Select value={form.vectorStore} onChange={set("vectorStore")} options={VECTOR_STORES} />
          </Field>

          <Field label="LLM Embedding Model" required>
            <Select value={form.embeddingModel} onChange={set("embeddingModel")} options={EMBEDDING_MODELS} />
          </Field>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 flex justify-end" style={{ borderTop: "1px solid #f3f4f6" }}>
          <button
            onClick={handleCreate}
            className="text-white text-sm font-medium px-6 py-2 rounded-md transition-opacity hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#4F46E5" }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
