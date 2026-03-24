import { quoteContent } from "@/lib/content";

export function QuoteSection() {
  return (
    <section className="py-16" aria-label="Quote">
      <div className="container mx-auto px-6 text-center">
        <blockquote className="font-serif text-xl italic md:text-2xl">
          <span className="bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">
            &ldquo;{quoteContent.text}&rdquo;
          </span>
        </blockquote>
      </div>
    </section>
  );
}
