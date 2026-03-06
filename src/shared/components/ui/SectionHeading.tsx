import { ScrambleText } from '@/shared/components/animations/ScrambleText';
import { cn } from '@/shared/lib/cn';

interface SectionHeadingProps {
  indexLabel: string;
  title: string;
  className?: string;
}

export const SectionHeading = ({ indexLabel, title, className }: SectionHeadingProps) => {
  return (
    <div className={cn('mb-20 flex items-baseline gap-4', className)}>
      <h2 className="font-mono text-sm uppercase tracking-widest text-indigo-400 drop-shadow-[0_0_5px_rgba(129,140,248,0.5)]">
        {indexLabel}
      </h2>
      <ScrambleText text={title} className="text-2xl font-light text-white" />
    </div>
  );
};
