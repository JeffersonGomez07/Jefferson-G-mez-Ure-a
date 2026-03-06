import { Code2, Database, Layout, Server } from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

export interface StackCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const stackCategories: ReadonlyArray<StackCategory> = [
  {
    id: 'frontend',
    title: 'Frontend & UI',
    icon: Layout,
    items: [
      'HTML / CSS / JavaScript',
      'React / Next.js',
      'Responsive Design',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Core',
    icon: Server,
    items: [
      'Node.js',
      'Python',
      'C# (.NET)',
      'Java',
      'APIs REST / CRUD',
    ],
  },
  {
    id: 'data',
    title: 'Data & Cloud',
    icon: Database,
    items: [
      'SQL / PostgreSQL',
      'Git / GitHub / Bitbucket',
      'Postman / API Testing',
    ],
  },
    {
    id: 'architecture',
    title: 'Arquitectura & Metodologías',
    icon: Code2,
    items: [
      'Scrum / Metodologías Ágiles',
    ],
  },
  {
    id: 'tools',
    title: 'Herramientas & IDEs',
    icon: Code2,
    items: [
      'VS Code / Visual Studio Community',
      'IntelliJ IDEA / NetBeans',
      'Jira / Gestión de proyectos',
    ],
  },
] as const;