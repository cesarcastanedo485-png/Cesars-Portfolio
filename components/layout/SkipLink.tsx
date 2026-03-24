/** First focusable control: jumps past repetitive navigation (WCAG 2.4.1). */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[100] -translate-y-[200%] rounded-md bg-cyan-950 px-4 py-2 text-sm text-cyan-100 outline-none ring-cyan-400 transition-transform focus:translate-y-0 focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0e17]"
    >
      Skip to main content
    </a>
  );
}
