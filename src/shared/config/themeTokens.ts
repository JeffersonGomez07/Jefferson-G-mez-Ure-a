import type { NavigationTheme, ProjectTheme } from '@/shared/types/portfolio';

export interface ProjectThemeClasses {
  headerGradient: string;
  iconBackground: string;
  subtitle: string;
  iconForeground: string;
}

export interface NavigationThemeClasses {
  active: string;
  iconBackground: string;
  dot: string;
  glow: string;
}

export const projectThemeClasses: Record<ProjectTheme, ProjectThemeClasses> = {
  blue: {
    headerGradient: 'from-blue-500/10 via-zinc-900 to-black',
    iconBackground: 'text-blue-500/10',
    subtitle: 'text-blue-400/80',
    iconForeground: 'text-blue-400',
  },
  indigo: {
    headerGradient: 'from-indigo-500/10 via-zinc-900 to-black',
    iconBackground: 'text-indigo-500/10',
    subtitle: 'text-indigo-400/80',
    iconForeground: 'text-indigo-400',
  },
  cyan: {
    headerGradient: 'from-cyan-500/10 via-zinc-900 to-black',
    iconBackground: 'text-cyan-500/10',
    subtitle: 'text-cyan-400/80',
    iconForeground: 'text-cyan-400',
  },
  emerald: {
    headerGradient: 'from-emerald-500/10 via-zinc-900 to-black',
    iconBackground: 'text-emerald-500/10',
    subtitle: 'text-emerald-400/80',
    iconForeground: 'text-emerald-400',
  },
  orange: {
    headerGradient: 'from-orange-500/10 via-zinc-900 to-black',
    iconBackground: 'text-orange-500/10',
    subtitle: 'text-orange-400/80',
    iconForeground: 'text-orange-400',
  },
  rose: {
    headerGradient: 'from-rose-500/10 via-zinc-900 to-black',
    iconBackground: 'text-rose-500/10',
    subtitle: 'text-rose-400/80',
    iconForeground: 'text-rose-400',
  },
  yellow: {
    headerGradient: 'from-yellow-500/10 via-zinc-900 to-black',
    iconBackground: 'text-yellow-500/10',
    subtitle: 'text-yellow-400/80',
    iconForeground: 'text-yellow-400',
  },
  violet: {
    headerGradient: 'from-violet-500/10 via-zinc-900 to-black',
    iconBackground: 'text-violet-500/10',
    subtitle: 'text-violet-400/80',
    iconForeground: 'text-violet-400',
  },
};

export const navigationThemeClasses: Record<NavigationTheme, NavigationThemeClasses> = {
  blue: {
    active:
      'bg-[linear-gradient(90deg,rgba(7,36,58,0.97)_0%,rgba(5,61,82,0.9)_58%,rgba(5,84,97,0.8)_100%)]',
    iconBackground: 'bg-[#08253c] text-[#2c89ff]',
    dot: 'bg-[#1f74ff] shadow-[0_0_10px_rgba(31,116,255,0.8)]',
    glow: 'shadow-[0_14px_36px_-16px_rgba(3,130,176,0.8)]',
  },
  purple: {
    active:
      'bg-[linear-gradient(90deg,rgba(27,28,68,0.95)_0%,rgba(45,34,82,0.9)_58%,rgba(58,36,94,0.82)_100%)]',
    iconBackground: 'bg-[#211d45] text-violet-300',
    dot: 'bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]',
    glow: 'shadow-[0_14px_36px_-16px_rgba(121,64,201,0.72)]',
  },
  cyan: {
    active:
      'bg-[linear-gradient(90deg,rgba(8,45,61,0.96)_0%,rgba(8,74,90,0.9)_58%,rgba(8,100,113,0.82)_100%)]',
    iconBackground: 'bg-[#07232c] text-cyan-300',
    dot: 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.85)]',
    glow: 'shadow-[0_14px_36px_-16px_rgba(6,167,186,0.72)]',
  },
  orange: {
    active:
      'bg-[linear-gradient(90deg,rgba(58,32,16,0.95)_0%,rgba(88,45,18,0.9)_58%,rgba(111,60,21,0.82)_100%)]',
    iconBackground: 'bg-[#2f1f13] text-amber-300',
    dot: 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.82)]',
    glow: 'shadow-[0_14px_36px_-16px_rgba(212,125,27,0.72)]',
  },
};
