import { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';

import { TiltCard } from '@/shared/components/effects/TiltCard';
import { TechIcon } from '@/shared/components/icons/TechIcon';
import { projectThemeClasses } from '@/shared/config/themeTokens';
import { cn } from '@/shared/lib/cn';
import type { Project } from '@/shared/types/portfolio';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const theme = projectThemeClasses[project.theme];
  const Icon = project.icon;
  const isLarge = project.size === 'large';
  const [previewFailed, setPreviewFailed] = useState(false);

  return (
    <a href={project.link} target="_blank" rel="noreferrer" className="block h-full">
      <TiltCard className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#05070d] transition-all duration-500 hover:border-white/15 hover:shadow-2xl hover:shadow-black/60">
        <div className={cn('relative w-full overflow-hidden transition-all duration-700', isLarge ? 'h-48' : 'h-40')}>
          {!previewFailed && (
            <img
              src={project.previewImage}
              alt={`Vista previa de ${project.title}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top brightness-[0.72] contrast-110 saturate-[0.9] transition-transform duration-700 group-hover:scale-105"
              onError={() => setPreviewFailed(true)}
            />
          )}

          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-br transition-opacity duration-500',
              previewFailed ? 'opacity-80 group-hover:opacity-95' : 'opacity-35 group-hover:opacity-45',
              theme.headerGradient,
            )}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/75" />

          <Icon
            size={isLarge ? 180 : 120}
            className={cn(
              'absolute -bottom-4 -right-4 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12',
              theme.iconBackground,
            )}
          />

          <div className="absolute bottom-4 left-6 rounded-2xl border border-white/10 bg-black/40 p-3 shadow-lg backdrop-blur-xl transition-transform duration-300 group-hover:scale-110">
            <Icon size={24} className={theme.iconForeground} />
          </div>

          <div className="absolute right-6 top-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <Eye size={12} /> Live Demo
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-1 flex-col border-t border-white/10 bg-[#06090f] p-6 md:p-8">
          <div className="mb-4">
            <div className="mb-2 flex items-center justify-between">
              <span className={cn('text-[10px] font-bold uppercase tracking-[0.2em]', theme.subtitle)}>
                {project.subtitle}
              </span>
              <ArrowUpRight size={16} className="text-zinc-600 transition-colors duration-300 group-hover:text-white" />
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 group-hover:bg-clip-text group-hover:text-transparent md:text-3xl">
              {project.title}
            </h3>
          </div>

          <p className="mb-8 flex-1 text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-zinc-900/50 px-2.5 py-1.5 text-[10px] font-bold uppercase text-zinc-500 transition-all duration-300 group-hover:border-white/10 group-hover:bg-white/5 group-hover:text-zinc-300"
              >
                <TechIcon tag={tag} className="h-3 w-3 opacity-70" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </TiltCard>
    </a>
  );
};
