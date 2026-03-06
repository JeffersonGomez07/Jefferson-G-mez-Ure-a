import { Suspense, lazy, useCallback, useState } from 'react';

import { ContactSection } from '@/features/contact/components/ContactSection';
import { HeroSection } from '@/features/hero/components/HeroSection';
import { LabSection } from '@/features/lab/components/LabSection';
import { NavigationDrawer } from '@/features/navigation/components/NavigationDrawer';
import { TopNav } from '@/features/navigation/components/TopNav';
import { ProjectsSection } from '@/features/projects/components/ProjectsSection';
import { useSectionNavigation } from '@/shared/hooks/useSectionNavigation';
import type { SectionId } from '@/shared/types/portfolio';

const ThreeVoidBackground = lazy(async () => {
  const module = await import('@/shared/components/background/ThreeVoidBackground');
  return { default: module.ThreeVoidBackground };
});

export const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { activeSection, scrollToSection } = useSectionNavigation();

  const handleNavigate = useCallback(
    (id: SectionId) => {
      scrollToSection(id);
    },
    [scrollToSection],
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-black font-body text-zinc-100 selection:bg-indigo-500 selection:text-white">
      <Suspense fallback={null}>
        <ThreeVoidBackground />
      </Suspense>

      <TopNav onOpenMenu={() => setMenuOpen(true)} />

      <NavigationDrawer
        isOpen={isMenuOpen}
        activeSection={activeSection}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <LabSection />
        <ContactSection />
      </main>
    </div>
  );
};
