"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cardImages = [
  "https://cataas.com/cat",
  "https://loremflickr.com/400/300",
  "https://loremflickr.com/500/300",
  "https://loremflickr.com/350/300",
  "https://loremflickr.com/250/300",
];

export default function StickyCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    let dfCardsTL = gsap.timeline();
    let dfCards = cardRefs.current;
    gsap.set(dfCards, { position: "absolute" });

    ScrollTrigger.create({
      animation: dfCardsTL,
      trigger: containerRef.current,
      start: "top top",
      end: "+=4000",
      pin: true,
      scrub: 1,
    });

    dfCards.forEach((e, i) => {
      if (i !== dfCards.length - 1) {
        dfCardsTL.to(e, {
          clipPath: "inset(0px 0px 100%)",
        });
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center border-4 border-red-500"
    >
      {/* Optionally add a left-side column here if needed */}
      <div className="flex flex-col w-1/2 h-full relative">
        {cardImages.map((img, i) => (
          <div
            key={i}
            ref={el => {
              cardRefs.current[i] = el;
            }}
            className={`absolute w-full h-[600px] bg-center bg-cover`}
            style={{ backgroundImage: `url(${img})`, zIndex: 10 - i }}
          />
        ))}
      </div>
    </div>
  );
}
