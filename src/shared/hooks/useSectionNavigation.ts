import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { SectionId } from '@/shared/types/portfolio';

const SECTION_IDS: ReadonlyArray<SectionId> = ['inicio', 'proyectos', 'laboratorio', 'contacto'];

const VIEWPORT_MARKER_RATIO = 0.36;

export const useSectionNavigation = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('inicio');
  const rafIdRef = useRef<number | null>(null);

  const scrollToSection = useCallback((id: SectionId) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (section): section is HTMLElement => Boolean(section),
    );

    if (!sections.length) return;

    const getActiveFromViewport = (): SectionId => {
      const marker = window.innerHeight * VIEWPORT_MARKER_RATIO;
      let candidate: SectionId = 'inicio';

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= marker) {
          candidate = section.id as SectionId;
          continue;
        }
        break;
      }

      const reachedBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (reachedBottom) {
        return 'contacto';
      }

      return candidate;
    };

    const updateActiveSection = () => {
      setActiveSection((current) => {
        const next = getActiveFromViewport();
        return current === next ? current : next;
      });
    };

    const scheduleUpdate = () => {
      if (rafIdRef.current !== null) return;

      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = null;
        updateActiveSection();
      });
    };

    updateActiveSection();

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('load', scheduleUpdate);

    return () => {
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }

      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('load', scheduleUpdate);
    };
  }, []);

  return useMemo(
    () => ({
      activeSection,
      scrollToSection,
    }),
    [activeSection, scrollToSection],
  );
};
