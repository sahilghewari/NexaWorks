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
  options?: any;
};

export default function TiltCard({ children, options, className }: TiltCardProps) {
  const tiltRef = useRef<TiltHTMLElement | null>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options || {
        max: 12,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }

    return () => {
      tiltRef.current?.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}
