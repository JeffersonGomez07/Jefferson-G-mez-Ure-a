import { Box, Code2, Database, Layers, Server, Sparkles } from 'lucide-react';

interface TechIconProps {
  tag: string;
  className?: string;
}

export const TechIcon = ({ tag, className = 'h-3 w-3' }: TechIconProps) => {
  const normalized = tag.toLowerCase();

  if (normalized.includes('react') || normalized.includes('next')) {
    return <Layers className={className} />;
  }

  if (
    normalized.includes('sql') ||
    normalized.includes('redis') ||
    normalized.includes('firebase') ||
    normalized.includes('supabase')
  ) {
    return <Database className={className} />;
  }

  if (
    normalized.includes('node') ||
    normalized.includes('nest') ||
    normalized.includes('.net') ||
    normalized.includes('c#')
  ) {
    return <Server className={className} />;
  }

  if (normalized.includes('three') || normalized.includes('webgl') || normalized.includes('fiber')) {
    return <Box className={className} />;
  }

  if (normalized.includes('framer') || normalized.includes('gsap') || normalized.includes('motion')) {
    return <Sparkles className={className} />;
  }

  return <Code2 className={className} />;
};
