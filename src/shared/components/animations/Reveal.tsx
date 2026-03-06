import type { ReactNode } from 'react';

import { useScrollReveal } from '@/shared/hooks/useScrollReveal';
import { cn } from '@/shared/lib/cn';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  blur?: boolean;
  scale?: boolean;
  once?: boolean;
}

export const Reveal = ({
  children,
  className,
  delayMs = 0,
  blur = true,
  scale = true,
  once = true,
}: RevealProps) => {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
    repeat: !once,
  });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        'transform-gpu transition-all duration-1000 ease-smooth',
        isVisible
          ? 'translate-y-0 scale-100 opacity-100 blur-0'
          : cn('translate-y-12 opacity-0', blur && 'blur-sm', scale && 'scale-[0.96]'),
        className,
      )}
    >
      {children}
    </div>
  );
};
