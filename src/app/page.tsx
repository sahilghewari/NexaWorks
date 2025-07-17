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
    <section className="min-h-screen bg-[#31312F] flex flex-col justify-center items-center">
  <div className="w-full max-w-7xl flex flex-row items-center justify-between px-8 py-20">
    {/* Left Column: Text */}
    <div className="w-1/2 flex flex-col justify-center">
      <h1 className="text-[#F5F5F5] font-extrabold text-[3rem] md:text-[3.5rem] lg:text-[3.75rem] xl:text-[4rem] leading-tight mb-4">
        Transforming Ideas into Exceptional Software Experiences
      </h1>
      <p className="text-[#C8C8C8] text-lg md:text-xl lg:text-2xl mb-6">
        We deliver secure, scalable software, AI, and automation solutions tailored to your business at competitive prices.
      </p>
      <div className="flex flex-row gap-4 mb-6">
        <button className="bg-[#FF3F33] text-[#31312F] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#FFD6FF] transition">
          Get a Free Quote
        </button>
        <button className="border border-[#f5f5f5] text-[#f5f5f5] px-6 py-3 rounded-full hover:bg-[#f5f5f5] hover:text-[#31312F] transition">
          Discover Our Services
        </button>
      </div>
      {/* Trust signals */}
      <div className="flex flex-row gap-6 mt-2">
        <span className="text-[#F5F5F5] text-base font-medium flex items-center gap-2">
          <svg width="18" height="18" fill="none" stroke="#F5F5F5" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg> Secure & Scalable
        </span>
        <span className="text-[#F5F5F5] text-base font-medium flex items-center gap-2">
          <svg width="18" height="18" fill="none" stroke="#F5F5F5" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8"/></svg> AI & Automation
        </span>
        <span className="text-[#F5F5F5] text-base font-medium flex items-center gap-2">
          <svg width="18" height="18" fill="none" stroke="#F5F5F5" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20"/></svg> Affordable Pricing
        </span>
      </div>
    </div>
    {/* Right Column: Visual */}
    <div className="w-1/2 flex justify-center items-center relative">
      <img src="/images/Logo1.png" alt="NexaWorks Logo" className=" object-contain rounded-2xl shadow-2xl transition-transform duration-700 hover:scale-105" />
    </div>
  </div>
</section>
      <div className="min-h-screen bg-white">
        <div className="mt-20 ml-8 mb-10">
          <h1 className="text-[#31312f] uppercase text-9xl font-thin">we provide</h1>
          <h1 className="text-[#31312f] uppercase text-9xl font-thin">solutions for</h1>
          <h1 className="text-[#C8C8C8] uppercase text-9xl font-thin">Your Business</h1>
        </div>

        <div className="mt-10 bg-[#31312f]">
          <ServicesGrid />
        </div>
      </div>
      </>
  );
}
