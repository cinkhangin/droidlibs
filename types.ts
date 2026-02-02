
export enum Category {
  NETWORKING = 'Networking',
  DI = 'Dependency Injection',
  UI = 'UI & Animations',
  DATABASE = 'Database & Persistence',
  IMAGE_LOADING = 'Image Loading',
  CONCURRENCY = 'Concurrency',
  UTILS = 'Utilities',
  TESTING = 'Testing',
  ARCHITECTURE = 'Architecture',
  DEVTOOLS = 'DevTools'
}

export interface Library {
  id: string;
  name: string;
  creator: string;
  logo?: string;
  category: Category;
  description: string;
  stars: number;
  latestVersion: string;
  website: string;
  implementation: {
    groovy: string;
    kts: string;
    versionCatalog: string;
  };
  pros: string[];
  cons: string[];
  alternatives: string[];
  commonIssues: {
    problem: string;
    fix: string;
  }[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  links?: { title: string; uri: string }[];
}

export enum SponsorTier {
  TEXT = 'TEXT',
  SILVER = 'SILVER',
  GOLD = 'GOLD'
}

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  logo?: string; // Base64 or URL
  url: string;
}
