import { footerContent } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/10 py-10 text-center text-sm text-muted-foreground"
      role="contentinfo"
    >
      <p>
        © {year} {footerContent.copyright}
      </p>
      <p className="mt-2 max-w-xl mx-auto text-xs opacity-80">
        {footerContent.note}
      </p>
    </footer>
  );
}
