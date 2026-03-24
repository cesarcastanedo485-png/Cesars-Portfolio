/**
 * Minimal cyberpunk shimmer for root loading / Suspense — self-contained (CSS in-file).
 */
export default function Loading() {
  return (
    <div
      className="flex min-h-dvh flex-col bg-gradient-to-b from-[#0a0e17] to-black"
      aria-busy="true"
      aria-label="Loading portfolio"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes cp-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.cp-loading-shimmer {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(0, 212, 255, 0.22) 22%,
    rgba(255, 0, 170, 0.18) 48%,
    rgba(168, 85, 247, 0.2) 72%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 220% 100%;
  animation: cp-shimmer 2.3s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .cp-loading-shimmer {
    animation-duration: 4.5s;
    opacity: 0.85;
  }
}
`,
        }}
      />
      <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 py-12">
        {/* Primary “title” bar */}
        <div
          className="cp-loading-shimmer h-12 w-[min(88vw,18rem)] rounded-2xl md:h-14 md:w-[min(88vw,22rem)]"
          aria-hidden
        />
        {/* Secondary line */}
        <div
          className="cp-loading-shimmer h-3 w-[min(72vw,14rem)] rounded-full opacity-90"
          aria-hidden
        />
        {/* Accent pulse strip */}
        <div
          className="cp-loading-shimmer mt-2 h-1 w-24 rounded-full opacity-75"
          aria-hidden
        />
      </div>
    </div>
  );
}
