import type { LucideIcon } from 'lucide-react';

export type SectionId = 'inicio' | 'proyectos' | 'laboratorio' | 'contacto';
export type ProjectSize = 'small' | 'large';
export type ProjectTheme =
  | 'blue'
  | 'indigo'
  | 'cyan'
  | 'emerald'
  | 'orange'
  | 'rose'
  | 'yellow'
  | 'violet';
export type NavigationTheme = 'blue' | 'purple' | 'cyan' | 'orange';

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  theme: ProjectTheme;
  link: string;
  previewImage: string;
  size: ProjectSize;
}

export interface NavigationItem {
  id: SectionId;
  label: string;
  icon: LucideIcon;
  theme: NavigationTheme;
}
