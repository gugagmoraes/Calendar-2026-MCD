export type VideoTheme = 'PERNAS' | 'GLUTEOS' | 'ABDOMINAIS' | 'HIIT';

export type VideoStatus = 'TODO' | 'DOING' | 'DONE';

export interface ReferenceVideo {
  id: string;
  title: string;
  metrics: string;
  note: string;
  link: string;
}

export interface ProductionData {
  thumbnail: string;
  music: string;
  tags: string[];
  publishTime: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface VideoData {
  id: string;
  date: string; // ISO format YYYY-MM-DD
  dayOfWeek: string;
  displayDate: string; // e.g., "07 JAN"
  theme: VideoTheme;
  title: string;
  status: VideoStatus;
  structure: string[];
  why: string[];
  references: ReferenceVideo[];
  production: ProductionData;
  checklist: ChecklistItem[];
}

export interface AppState {
  videos: VideoData[];
  filterTheme: VideoTheme | 'ALL';
  filterStatus: VideoStatus | 'ALL';
  searchQuery: string;
  darkMode: boolean;
}