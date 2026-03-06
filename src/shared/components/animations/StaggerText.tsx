import { useEffect, useState } from 'react';

import { cn } from '@/shared/lib/cn';

interface StaggerTextProps {
  text: string;
  className?: string;
  delayMs?: number;
}

export const StaggerText = ({ text, className, delayMs = 0 }: StaggerTextProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 100 + delayMs);
    return () => window.clearTimeout(timer);
  }, [delayMs]);

  return (
    <div className={cn('flex flex-wrap overflow-hidden', className)}>
      {text.split('').map((character, index) => (
        <span
          key={`${character}-${index}`}
          className="inline-block transition-all duration-1000 ease-smooth"
          style={{
            transform: mounted ? 'translateY(0) scale(1)' : 'translateY(100%) scale(1.1)',
            opacity: mounted ? 1 : 0,
            filter: mounted ? 'blur(0px)' : 'blur(12px)',
            transitionDelay: `${index * 30}ms`,
          }}
        >
          {character === ' ' ? '\u00A0' : character}
        </span>
      ))}
    </div>
  );
};
