import { useState } from 'react';

export function Dialog({ isOpen, onClose, title, children, actions = null }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 bg-black/40">
      <div className="bg-[#1a2847] border border-[#334155] rounded-lg shadow-2xl max-w-4xl w-full mx-4">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#334155]">
          <h2 className="text-xl font-semibold text-[#e2e8f0]">{title}</h2>
          <button
            onClick={onClose}
            className="text-[#94a3b8] hover:text-[#e2e8f0] text-2xl leading-none transition-colors"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>

        {/* Footer - Actions */}
        {actions && (
          <div className="flex gap-3 p-6 border-t border-[#334155] justify-end">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}

// Example usage hook
export function useDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(!isOpen),
  };
}
