import { gsap } from 'gsap';
import type { ComponentType } from 'react';
import { useEffect, useRef } from 'react';

import { navigationThemeClasses } from '@/shared/config/themeTokens';
import { cn } from '@/shared/lib/cn';
import type { NavigationTheme } from '@/shared/types/portfolio';

interface NavItemProps {
  label: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  theme: NavigationTheme;
  isActive: boolean;
  onClick: () => void;
}

export const NavItem = ({ label, icon: Icon, theme, isActive, onClick }: NavItemProps) => {
  const itemRef = useRef<HTMLButtonElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const themeClasses = navigationThemeClasses[theme];

  useEffect(() => {
    const item = itemRef.current;
    const dot = dotRef.current;

    if (!item || !dot) return;

    const context = gsap.context(() => {
      gsap.to(dot, {
        scale: isActive ? 1 : 0,
        autoAlpha: isActive ? 1 : 0,
        duration: isActive ? 0.38 : 0.2,
        ease: isActive ? 'back.out(1.9)' : 'power2.out',
      });

      if (isActive) {
        gsap.fromTo(
          item,
          { filter: 'brightness(0.9)' },
          {
            filter: 'brightness(1)',
            duration: 0.4,
            ease: 'power2.out',
            clearProps: 'filter',
          },
        );
      }
    }, item);

    return () => {
      context.revert();
    };
  }, [isActive]);

  return (
    <button
      ref={itemRef}
      data-nav-item
      onClick={onClick}
      className={cn(
        'group relative mb-3 flex w-full items-center gap-3.5 overflow-hidden rounded-2xl px-3 py-3.5 text-left transition-colors duration-300',
        isActive
          ? `${themeClasses.active} ${themeClasses.glow}`
          : 'text-zinc-200/95 hover:bg-zinc-900/75',
      )}
    >
      <div
        className={cn(
          'relative z-10 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300',
          isActive
            ? themeClasses.iconBackground
            : 'bg-zinc-900/85 text-zinc-500 group-hover:bg-zinc-800/90 group-hover:text-zinc-200',
        )}
      >
        <Icon size={19} strokeWidth={isActive ? 2.4 : 2} />
      </div>

      <span
        className={cn(
          'relative z-10 text-base font-semibold tracking-wide transition-colors duration-300',
          isActive ? 'text-white' : 'text-zinc-100/90 group-hover:text-white',
        )}
      >
        {label}
      </span>

      <div
        ref={dotRef}
        className={cn('absolute right-4 h-2 w-2 rounded-full', themeClasses.dot)}
        style={{ transform: 'scale(0)', opacity: 0 }}
      />
    </button>
  );
};
