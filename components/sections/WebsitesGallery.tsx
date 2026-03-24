import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { websitesSection } from "@/lib/content";

export function WebsitesGallery() {
  const { sectionEyebrow, featuredBadge, items } = websitesSection;

  return (
    <section
      id="work"
      className="py-16 scroll-mt-24"
      aria-labelledby="work-heading"
    >
      <div className="container mx-auto px-6">
        <div className="mb-6 flex justify-end">
          <h2
            id="work-heading"
            className="text-sm font-medium text-muted-foreground"
          >
            {sectionEyebrow}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((site) => (
            <Card
              key={site.id}
              className={cn(
                "transition-all duration-300",
                site.active
                  ? "scale-105 border border-white/10 bg-black/30 shadow-2xl backdrop-blur-xl hover:scale-[1.02] hover:border-cyan-500/30"
                  : "hover:border-white/15 hover:bg-white/5"
              )}
            >
              <CardContent className="flex flex-col items-center justify-center p-8">
                {site.active && featuredBadge ? (
                  <span className="mb-4 text-xs font-medium text-white/80">
                    {featuredBadge}
                  </span>
                ) : null}
                <div className="mb-4 flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-12 w-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5"
                    />
                  ))}
                </div>
                <span
                  className={cn(
                    "text-sm",
                    site.active ? "text-white" : "text-muted-foreground"
                  )}
                >
                  {site.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
