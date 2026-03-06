import { useEffect, useState } from 'react';

import { cn } from '@/shared/lib/cn';

interface TypewriterTextProps {
  text: string;
  className?: string;
  typingDelayMs?: number;
  deletingDelayMs?: number;
  pauseMs?: number;
  startDelayMs?: number;
}

export const TypewriterText = ({
  text,
  className,
  typingDelayMs = 72,
  deletingDelayMs = 48,
  pauseMs = 2500,
  startDelayMs = 0,
}: TypewriterTextProps) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHasStarted(true), startDelayMs);
    return () => window.clearTimeout(timer);
  }, [startDelayMs]);

  useEffect(() => {
    if (!hasStarted) return;

    let timer = 0;

    if (!isDeleting && currentText.length < text.length) {
      timer = window.setTimeout(
        () => setCurrentText(text.slice(0, currentText.length + 1)),
        typingDelayMs,
      );
    } else if (!isDeleting && currentText.length === text.length) {
      timer = window.setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && currentText.length > 1) {
      timer = window.setTimeout(
        () => setCurrentText(text.slice(0, currentText.length - 1)),
        deletingDelayMs,
      );
    } else if (isDeleting && currentText.length === 1) {
      timer = window.setTimeout(() => setIsDeleting(false), 450);
    }

    return () => window.clearTimeout(timer);
  }, [
    currentText,
    deletingDelayMs,
    hasStarted,
    isDeleting,
    pauseMs,
    text,
    typingDelayMs,
  ]);

  return (
    <span className={cn('inline-block min-h-[1.5em]', className)}>
      {currentText}
      <span className="ml-1 animate-pulse font-bold text-indigo-500">|</span>
    </span>
  );
};
