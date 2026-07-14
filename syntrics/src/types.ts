export type PageType = 'home' | 'about' | 'services' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'smartphone' | 'globe' | 'layout' | 'code' | 'cpu' | 'database';
  tags: string[];
  approach?: string;
  workflow?: {
    phase: string;
    title: string;
    details: string;
  }[];
}
