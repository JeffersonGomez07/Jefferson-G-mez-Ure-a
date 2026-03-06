import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  repeat?: boolean;
  rootMargin?: string;
}

export const useScrollReveal = <T extends HTMLElement>(
  options: UseScrollRevealOptions = {},
): [RefObject<T | null>, boolean] => {
  const { threshold = 0.15, repeat = false, rootMargin = '0px 0px -50px 0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!repeat) {
            observer.unobserve(entry.target);
          }
          return;
        }

        if (repeat) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [repeat, rootMargin, threshold]);

  return [ref, isVisible];
};
