import portfolio from "@/content/portfolio.json";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type WorkLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type WorkItem = {
  id: number;
  title: string;
  /** Short line, e.g. “Product design · frontend” */
  role: string;
  summary: string;
  tags?: string[];
  featured?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  /** Used when `imageSrc` is omitted — Tailwind utilities after `bg-gradient-to-br`, e.g. `from-cyan-600/90 to-slate-950` */
  gradient?: string;
  links: WorkLink[];
};

export type GameItem = {
  id: number;
  title: string;
  price: string;
  /** Short blurb under the status line */
  summary?: string;
  tags?: string[];
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
  /** Optional line under the section heading */
  sectionIntro?: string;
  /** Shown on cards with `featured: true` */
  featuredBadge?: string;
  items: WorkItem[];
};
export const quoteContent = portfolio.quote as { text: string };
export const gamesSection = portfolio.games as {
  sectionTitle: string;
  sectionEyebrow: string;
  items: GameItem[];
};
export const contactContent = portfolio.contact as {
  sectionEyebrow: string;
  headline: string;
  body: string;
  /** Primary CTA; include @ for a mailto link */
  email?: string;
  emailButtonLabel?: string;
  /** Optional default subject line for the mailto link */
  emailSubject?: string;
  secondaryLinks?: WorkLink[];
};
export const footerContent = portfolio.footer as {
  copyright: string;
  note: string;
};
