import { useEffect, useState } from 'react';

import { useScrollReveal } from '@/shared/hooks/useScrollReveal';
import { cn } from '@/shared/lib/cn';

interface ScrambleTextProps {
  text: string;
  className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?";

export const ScrambleText = ({ text, className }: ScrambleTextProps) => {
  const [ref, isVisible] = useScrollReveal<HTMLSpanElement>({ threshold: 0.45, repeat: true });
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!isVisible) return;

    let iteration = 0;
    const interval = window.setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((character, index) => {
            if (index < iteration) return text[index];
            if (character === ' ') return ' ';
            return CHARS[Math.floor(Math.random() * CHARS.length)]!;
          })
          .join(''),
      );

      if (iteration >= text.length) {
        window.clearInterval(interval);
      }

      iteration += 0.5;
    }, 28);

    return () => {
      window.clearInterval(interval);
      setDisplayText(text);
    };
  }, [isVisible, text]);

  return (
    <span ref={ref} className={cn('inline-block', className)}>
      {displayText}
    </span>
  );
};
