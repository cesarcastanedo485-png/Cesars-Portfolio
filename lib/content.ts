import portfolio from "@/content/portfolio.json";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type WebsiteItem = {
  id: number;
  label: string;
  active: boolean;
};

export type GameItem = {
  id: number;
  title: string;
  price: string;
  sourceAvailable: boolean;
  /** When set with sourceAvailable, "Source Available" is a real link */
  sourceHref?: string;
  gradient: string;
  iconSrc?: string;
  iconAlt?: string;
};

export const site = portfolio.site;
export const nav = portfolio.nav as {
  brandLabel: string;
  links: NavLink[];
};
export const heroContent = portfolio.hero as {
  screenReaderTitle: string;
  titlePart1: string;
  titlePart2: string;
  tagline: string;
};

export type HeroContentProps = typeof heroContent;
export const websitesSection = portfolio.websites as {
  sectionEyebrow: string;
  /** Shown on the highlighted (active) card only */
  featuredBadge?: string;
  items: WebsiteItem[];
};
export const quoteContent = portfolio.quote as { text: string };
export const gamesSection = portfolio.games as {
  sectionTitle: string;
  sectionEyebrow: string;
  items: GameItem[];
};
export const footerContent = portfolio.footer as {
  copyright: string;
  note: string;
};
