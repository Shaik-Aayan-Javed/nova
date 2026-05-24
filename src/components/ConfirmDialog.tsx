import { Save, X } from "lucide-react";

interface Props {
  isOpen: boolean;
  fileName: string;
  onSave: () => void;
  onDiscard: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({ isOpen, fileName, onSave, onDiscard, onCancel }: Props) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/30" onClick={onCancel} />

      {/* Dialog */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-80 flex flex-col
                      border border-editor-border rounded-xl shadow-2xl overflow-hidden fade-in"
           style={{ background: "rgb(var(--c-sidebar) / 0.96)", backdropFilter: "blur(32px) saturate(1.8)" }}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-editor-border/40 shrink-0">
          <span className="text-xs font-semibold text-editor-fg tracking-wide">Unsaved Changes</span>
          <button onClick={onCancel} className="text-editor-comment hover:text-editor-fg transition-colors">
            <X size={13} />
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-4">
          <p className="text-xs text-editor-comment mb-4">
            Do you want to save changes to <span className="text-editor-fg font-mono">{fileName}</span>?
          </p>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={onSave}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs text-white
                         bg-editor-accent/80 hover:bg-editor-accent transition-colors"
            >
              <Save size={11} />
              Save
            </button>
            <button
              onClick={onDiscard}
              className="flex-1 px-3 py-2 rounded-lg text-xs text-editor-fg
                         bg-editor-bg border border-editor-border/60 hover:border-editor-accent/50
                         transition-colors"
            >
              Discard
            </button>
            <button
              onClick={onCancel}
              className="flex-1 px-3 py-2 rounded-lg text-xs text-editor-comment
                         hover:text-editor-fg hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
