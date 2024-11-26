export enum SitePaths {
  HOME = "/",
  ABOUT = "/about",
  PRICING = "/pricing",
  PLATFORM = "/platform",
}

export enum SiteNavigationLinks {
  ABOUT = "ABOUT US",
  PRICING = "PRICING",
  PLATFORM = "PLATFORM",
}

export interface SiteConfig {
  title: string;
  description: string;
  links: Record<keyof typeof SitePaths, string>;
}
