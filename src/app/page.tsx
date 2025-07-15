"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesGrid from "../components/custom/ServicesGrid"
// import { useEffect } from 'react';
// import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     lerp: 0.1, // Adjust for smoothness
  //     // smooth: true,
  //   });

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);
  return (
    <>
    <div className=" min-h-screen bg-[#31312F]">
      

      <div className="hero ml-8 pt-20">
        <h1 className="text-[#F5F5F5] uppercase text-7xl font-thin">
          we just dont create software
        </h1>
        <h1 className="text-[#F5F5F5] uppercase text-7xl font-thin">
          we creates experiences
        </h1>
        <p className="text-[#F5F5F5] uppercase text-xl font-thin ml-2">
          have a idea lets build
        </p>
        <button className="mt-2.5 cursor-pointer text-[#F5F5F5] px-4 py-2 bg-transparent border border-white rounded-full hover:bg-[#F5F5F5] hover:text-[#31312F] transition">
          Lets Connect
        </button>
      </div>

    </div>
      <div className="min-h-screen bg-white">
        <div className="mt-20 ml-8 mb-10">
          <h1 className="text-[#31312f] uppercase text-9xl font-thin">we provide</h1>
          <h1 className="text-[#31312f] uppercase text-9xl font-thin">solutions for</h1>
          <h1 className="text-[#C8C8C8] uppercase text-9xl font-thin">web development</h1>
        </div>
          <ServicesGrid/>
      </div>
      </>
  );
}
