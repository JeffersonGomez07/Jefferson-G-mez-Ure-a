import type { HTMLAttributes, MouseEvent, ReactNode } from 'react';
import { useRef, useState } from 'react';

import { cn } from '@/shared/lib/cn';

interface TiltCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const TiltCard = ({ children, className, ...props }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setRotation({
      x: ((y - rect.height / 2) / rect.height / 2) * -3,
      y: ((x - rect.width / 2) / rect.width / 2) * 3,
    });

    setPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const reset = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      className={cn(
        'relative transform-gpu transition-transform duration-300 ease-out',
        className,
      )}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.01 : 1}, ${isHovered ? 1.01 : 1}, 1)`,
      }}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-2xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,0.06) 0%, transparent 50%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
