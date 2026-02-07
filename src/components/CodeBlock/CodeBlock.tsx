import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

interface FileTab {
  title: string;
  code: string;
  language?: string;
}

interface CodeBlockProps {
  files: FileTab[];
  className?: string;
}

const font = "'Space Mono', 'Fira Code', 'JetBrains Mono', monospace";

const customTheme = {
  ...nightOwl,
  'pre[class*="language-"]': {
    ...nightOwl['pre[class*="language-"]'],
    background: "transparent",
    margin: 0,
    padding: "1.25rem",
    fontSize: "0.78rem",
    lineHeight: "1.7",
    fontFamily: font,
  },
  'code[class*="language-"]': {
    ...nightOwl['code[class*="language-"]'],
    background: "transparent",
    fontFamily: font,
  },
};

function getLanguage(fileName: string): string {
  const ext = fileName.split(".").pop()?.toLowerCase();
  const map: Record<string, string> = {
    js: "javascript",
    jsx: "jsx",
    ts: "typescript",
    tsx: "tsx",
    css: "css",
    json: "json",
  };
  return map[ext || ""] || "typescript";
}

export function CodeBlock({ files, className = "" }: CodeBlockProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeFile = files[activeIndex];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(activeFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[#ffffff08] bg-[#262335] shadow-[0_0_60px_-12px_rgba(139,92,246,0.25)] ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#ffffff08] bg-[#241b2f] px-3 py-2.5 sm:px-5 sm:py-3">
        <div className="flex items-center gap-4">
          {/* macOS dots */}
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>

          {/* File tabs */}
          {files.length > 1 && (
            <div className="flex gap-1">
              {files.map((file, i) => (
                <button
                  key={file.title}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-md px-3 py-1 font-mono text-xs transition-colors ${
                    i === activeIndex
                      ? "bg-white/8 text-white/80"
                      : "text-white/30 hover:text-white/60"
                  }`}
                >
                  {file.title}
                </button>
              ))}
            </div>
          )}

          {/* Single file label */}
          {files.length === 1 && (
            <span className="font-mono text-xs text-white/30">
              {files[0].title}
            </span>
          )}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-white/30 transition-colors hover:bg-white/5 hover:text-white/70"
        >
          {copied ? (
            <>
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-mono text-[11px]">Copied</span>
            </>
          ) : (
            <>
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span className="font-mono text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={activeFile.language || getLanguage(activeFile.title)}
          style={customTheme}
        >
          {activeFile.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
