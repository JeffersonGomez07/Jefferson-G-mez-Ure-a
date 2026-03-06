import { Reveal } from '@/shared/components/animations/Reveal';
import { SectionHeading } from '@/shared/components/ui/SectionHeading';
import { stackCategories } from '@/shared/data/stack';

export const LabSection = () => {
  return (
    <section
      id="laboratorio"
      className="relative overflow-hidden border-y border-white/5 bg-zinc-900/20 py-32 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />

      <div className="relative z-10 mx-auto grid max-w-screen-2xl gap-20 px-6 md:grid-cols-2 md:px-12">
        <Reveal>
          <SectionHeading indexLabel="[ 02 ]" title="Sobre mí" className="mb-8" />

        <p className="text-2xl font-light leading-snug text-zinc-300 md:text-3xl">
          Desarrollo aplicaciones web modernas enfocadas en rendimiento, buenas prácticas
          y soluciones reales. Me interesa crear software que sea eficiente, escalable y
          útil para las personas.
        </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 pt-10 sm:grid-cols-2">
          {stackCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Reveal key={category.id} delayMs={200 + index * 100}>
                <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  <Icon size={14} />
                  {category.title}
                </h3>

                <ul className="space-y-2 text-sm font-light text-zinc-300">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="cursor-default transition-all hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
