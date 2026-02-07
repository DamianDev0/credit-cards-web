import { useState } from "react";

interface CodeSnippetProps {
  code: string;
}

export function CodeSnippet({ code }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-fit">
      {/* Top bar */}
      <div className="flex items-center justify-between rounded-t-xl border border-(--color-glass-border) bg-white/[0.03] px-4 py-2.5">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <button
          onClick={handleCopy}
          className="text-(--color-text-gray) transition-colors hover:text-(--color-text-white)"
        >
          {copied ? (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>
      {/* Code area */}
      <pre className="rounded-b-xl border-x border-b border-(--color-glass-border) bg-(--color-card-dark) px-4 py-3">
        <code className="font-mono text-sm text-(--color-accent)">
          {code}
        </code>
      </pre>
    </div>
  );
}
