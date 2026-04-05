import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Pagination({ total, page, rowsPerPage, onRowsChange, onPageChange, totalPages }) {
  const navButtons = [
    { Icon: ChevronsLeft, action: () => onPageChange(1), disabled: page === 1 },
    { Icon: ChevronLeft, action: () => onPageChange(page - 1), disabled: page === 1 },
    { Icon: ChevronRight, action: () => onPageChange(page + 1), disabled: page === totalPages },
    { Icon: ChevronsRight, action: () => onPageChange(totalPages), disabled: page === totalPages },
  ];

  return (
    <div className="flex items-center justify-between px-1 py-3 text-sm text-gray-500">
      <span className="text-xs">{total} rows</span>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="text-xs">Rows per page</span>
          <select
            value={rowsPerPage}
            onChange={e => onRowsChange(Number(e.target.value))}
            className="text-xs rounded px-2 py-0.5 focus:outline-none"
            style={{ border: "1px solid #d1d5db" }}
          >
            {[5, 10, 20, 50].map(n => <option key={n}>{n}</option>)}
          </select>
        </div>
        <span className="text-xs">page {page} of {totalPages}</span>
        <div className="flex items-center gap-1">
          {navButtons.map(({ Icon, action, disabled }, i) => (
            <button
              key={i}
              onClick={action}
              disabled={disabled}
              className="flex items-center justify-center rounded hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ width: 26, height: 26, border: "1px solid #d1d5db" }}
            >
              <Icon size={12} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
