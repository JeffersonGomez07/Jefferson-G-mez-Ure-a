import { Menu } from 'lucide-react';

interface TopNavProps {
  onOpenMenu: () => void;
}

export const TopNav = ({ onOpenMenu }: TopNavProps) => {
  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
      <div className="mx-auto w-full max-w-screen-2xl px-6 pt-6 md:px-12 md:pt-8">
        <a
          href="#inicio"
          className="pointer-events-auto text-xl font-display font-bold tracking-tighter transition-opacity hover:opacity-70"
        >
          JeffGomez<span className="text-zinc-500">.dev</span>
        </a>
      </div>

      <button
        onClick={onOpenMenu}
        className="pointer-events-auto absolute right-4 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl text-zinc-100/95 transition-all duration-200 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 md:right-6 md:top-6 xl:right-8"
        aria-label="Abrir menu"
      >
        <Menu size={24} />
      </button>
    </nav>
  );
};
