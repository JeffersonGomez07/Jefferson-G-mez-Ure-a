import { ChevronDown } from 'lucide-react';

import { Reveal } from '@/shared/components/animations/Reveal';
import { StaggerText } from '@/shared/components/animations/StaggerText';
import { TypewriterText } from '@/shared/components/animations/TypewriterText';
import { socialLinks } from '@/shared/data/social';

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative mx-auto flex min-h-screen max-w-screen-2xl flex-col justify-center px-6 pb-16 pt-24 md:px-12"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-[128px]" />

      <div className="relative mb-4">
        <h1 className="select-none font-display font-bold leading-tight tracking-tighter text-white opacity-90
          text-4xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
          <StaggerText text="Software Developer" delayMs={200} />
          <StaggerText text="Systems Engineering" delayMs={500} />
          <StaggerText text="Student" delayMs={800} />
        </h1>
      </div>

      <Reveal
        delayMs={800}
        className="mt-12 flex flex-col items-end justify-between gap-8 border-t border-white/10 pt-8 md:flex-row"
      >
        <div className="max-w-xl">
          <div className="h-20 text-lg font-light leading-relaxed text-zinc-300 md:h-auto">
            <span className="mb-2 block font-mono text-sm text-zinc-500">&gt; HELLO, I'M</span>
            <TypewriterText
              text="Jefferson Gómez Ureña."
              startDelayMs={1500}
              typingDelayMs={60}
              pauseMs={3000}
              deletingDelayMs={50}
              className="font-semibold text-white"
            />
            <br />
            <span className="text-zinc-400">
              Full Stack Developer enfocado en crear aplicaciones web eficientes, escalables y orientadas a soluciones reales.
            </span>
          </div>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
              >
                <Icon size={20} className="transition-transform group-hover:scale-110" />
                <span className="font-mono text-sm underline-offset-4 group-hover:underline">
                  {link.label.toUpperCase()}
                </span>
              </a>
            );
          })}
        </div>
      </Reveal>

      <div className="absolute bottom-12 left-6 animate-pulse text-zinc-600 md:left-12">
        <ChevronDown />
      </div>
    </section>
  );
};
