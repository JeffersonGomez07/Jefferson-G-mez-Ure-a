import { Github } from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: ReadonlyArray<SocialLink> = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/JeffersonGomez07',
    icon: Github,
  },
] as const;
