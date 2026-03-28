"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardFooter } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { gamesSection, type GameItem } from "@/lib/content";

const games: GameItem[] = gamesSection.items;

/** Summary + tech tags (price is rendered by the parent row). */
function GameMeta({ game }: { game: GameItem }) {
  return (
    <>
      {game.summary ? (
        <p className="text-xs leading-relaxed text-muted-foreground/95">
          {game.summary}
        </p>
      ) : null}
      {game.tags?.length ? (
        <ul
          className="flex flex-wrap gap-1.5"
          aria-label={`Tech for ${game.title}`}
        >
          {game.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/75"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

function SourceAvailableButton({ href }: { href?: string }) {
  const inner = (
    <>
      Source Available
      <motion.span
        initial={{ opacity: 0.6, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="ml-2 inline-flex"
        aria-hidden
      >
        <Sparkles className="h-4 w-4 text-yellow-400 group-hover:text-yellow-300" />
      </motion.span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "group inline-flex w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-950/30 sm:w-auto"
        )}
      >
        {inner}
      </Link>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      disabled
      className="w-full cursor-not-allowed opacity-60 sm:w-auto"
      title="Add sourceHref in content/portfolio.json when the repo is public"
    >
      Source coming soon
    </Button>
  );
}

export function GamesGallery() {
  return (
    <section
      id="games"
      className="py-16 scroll-mt-24"
      aria-labelledby="games-heading"
    >
      <div className="container mx-auto px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 id="games-heading" className="text-2xl font-bold">
            {gamesSection.sectionTitle}
          </h2>
          <span className="text-sm text-muted-foreground">
            {gamesSection.sectionEyebrow}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => {
            const isIconApp = Boolean(game.iconSrc);

            if (isIconApp && game.iconSrc) {
              return (
                <Card
                  key={game.id}
                  className="group overflow-hidden border-white/10 bg-black/40 transition-all hover:border-white/20"
                >
                  {/* Art = icon only — fill box edge-to-edge; object-contain = max scale, never clipped */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#06080f]">
                    <Image
                      src={game.iconSrc}
                      alt={game.iconAlt ?? game.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="box-border object-contain object-center p-0"
                    />
                    {/* Title on top of the icon */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent px-3 pb-3 pt-16 sm:px-4 sm:pb-4 sm:pt-20">
                      <h3 className="text-center text-base font-semibold leading-snug tracking-tight text-white sm:text-lg [text-shadow:0_2px_12px_rgba(0,0,0,0.9),0_0_20px_rgba(0,212,255,0.25)]">
                        {game.title}
                      </h3>
                    </div>
                  </div>
                  {/* Meta + actions — separate from the icon, minimal chrome */}
                  <div className="flex flex-col gap-2.5 border-t border-white/5 bg-black/50 px-4 py-3">
                    <p className="text-xs text-muted-foreground">{game.price}</p>
                    <GameMeta game={game} />
                    {game.sourceAvailable && (
                      <SourceAvailableButton href={game.sourceHref} />
                    )}
                  </div>
                </Card>
              );
            }

            return (
              <Card
                key={game.id}
                className="group overflow-hidden border-white/10 transition-all hover:border-white/20"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${game.gradient}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {game.title && (
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-semibold text-white">
                        {game.title}
                      </h3>
                    </div>
                  )}
                </div>
                <CardFooter className="flex flex-col items-start gap-3 border-t border-white/10 bg-black/20 p-4">
                  <div className="flex w-full flex-col gap-2">
                    <span className="text-sm font-medium text-foreground">
                      {game.price}
                    </span>
                    <GameMeta game={game} />
                  </div>
                  {game.sourceAvailable && (
                    <SourceAvailableButton href={game.sourceHref} />
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
