import { ProjectCard } from '@/features/projects/components/ProjectCard';
import { Reveal } from '@/shared/components/animations/Reveal';
import { SectionHeading } from '@/shared/components/ui/SectionHeading';
import { projects } from '@/shared/data/projects';
import { cn } from '@/shared/lib/cn';

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="relative mx-auto max-w-screen-2xl px-6 py-32 md:px-12">
      <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 rounded-full bg-blue-900/10 blur-[96px]" />

      <Reveal>
        <SectionHeading indexLabel="[ 01 ]" title="Proyectos Seleccionados" />
      </Reveal>

      <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delayMs={100 * ((index % 3) + 1)}
            blur={false}
            className={cn(project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1')}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
