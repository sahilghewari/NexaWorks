'use client';

import { useRef, useEffect, ReactNode } from 'react';
import VanillaTilt from 'vanilla-tilt';

// Extend the HTMLDivElement type to include `vanillaTilt`
interface TiltHTMLElement extends HTMLDivElement {
  vanillaTilt: {
    destroy: () => void;
  };
}

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  options?: Record<string, unknown>;
};

export default function TiltCard({ children, options, className }: TiltCardProps) {
  const tiltRef = useRef<TiltHTMLElement | null>(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, options || {
        max: 12,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }

    return () => {
      tiltNode?.vanillaTilt?.destroy();
    };
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}
