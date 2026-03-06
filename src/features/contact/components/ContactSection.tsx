import { MessageCircle } from 'lucide-react';

import { Reveal } from '@/shared/components/animations/Reveal';

export const ContactSection = () => {
  return (
    <section
      id="contacto"
      className="relative mx-auto flex max-w-screen-2xl flex-col items-center px-6 py-40 text-center md:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[128px]" />

      <Reveal>
        <h2 className="mb-10 font-display text-5xl font-bold tracking-tighter text-white md:text-8xl">
          CONTÁCTAME
        </h2>

        <a
          href="https://wa.me/50671736440"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:bg-zinc-100 active:scale-95"
        >
          Iniciar Proyecto <MessageCircle size={20} className="text-indigo-600" />
        </a>
      </Reveal>

      <div className="mt-32 flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 font-mono text-sm text-zinc-600 md:flex-row">
        <p className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
          SYSTEMS OPERATIONAL
        </p>
      </div>
    </section>
  );
};
