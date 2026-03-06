import { Code2, Grid, Home, Mail } from 'lucide-react';

import type { NavigationItem } from '@/shared/types/portfolio';

export const navigationItems: ReadonlyArray<NavigationItem> = [
  { id: 'inicio', label: 'Inicio', icon: Home, theme: 'blue' },
  { id: 'proyectos', label: 'Proyectos', icon: Grid, theme: 'purple' },
  { id: 'laboratorio', label: 'Sobre mí ', icon: Code2, theme: 'cyan' },
  { id: 'contacto', label: 'Contacto', icon: Mail, theme: 'orange' },
] as const;
