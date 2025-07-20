"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroCTA from "@/components/custom/Hero-cta";
import ContactSection from "@/components/custom/ContactSection";
// import TestimonialsCarousel from "@/components/custom/TestimonialsCarousel";
import ServicesGrid from "@/components/custom/ServicesGrid";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        ".hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-cta",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power3.out" }
      );

      // Floating animation for hero elements
      gsap.to(".float", {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Features animation on scroll
      gsap.fromTo(
        ".feature-card",
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Smooth scroll to #contact if hash is present on mount
    if (typeof window !== "undefined" && window.location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#31312f]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-8 relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-32 h-32 xs:w-40 xs:h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-[#C8C8C8] to-[#E4E4E4] rounded-full opacity-20 float"></div>
          <div
            className="absolute -bottom-12 -left-12 w-24 h-24 xs:w-48 xs:h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-[#C8C8C8] to-[#F5F5F5] rounded-full opacity-20 float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 xs:w-32 xs:h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-[#E4E4E4] to-[#C8C8C8] rounded-full opacity-10 float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="text-center z-10 w-full max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-4xl mx-auto px-2 sm:px-4">
          <h1 className="hero-title text-5xl xs:text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#fff] to-[#626262] bg-clip-text text-transparent mb-4 sm:mb-6">
            Welcome to NexaWorks
          </h1>
          <p className="hero-subtitle text-lg xs:text-base sm:text-xl md:text-2xl text-[#C8C8C8] mb-6 sm:mb-8 max-w-xs xs:max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
            Let automation do the heavy lifting
          </p>
          <div className="hero-cta flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center items-center w-full">
            <Link href="/contact" className="w-full xs:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-36 xs:w-auto border-2 border-[#31312f] text-[#31312f] hover:bg-[#E4E4E4] hover:border-[#C8C8C8] hover:text-[#31312f] px-4 xs:px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 cursor-pointer"
              >
                Let&apos;s Talk
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-12 sm:py-20 px-4 sm:px-6 md:px-8 bg-[#F5F5F5]">
        <div className="max-w-xl sm:max-w-3xl md:max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 bg-[#31312f] bg-clip-text text-transparent">
            Our Services
          </h2>
          <ServicesGrid/>
        </div>
      </section>

      {/* <TestimonialsCarousel /> */}

      <div className="container my-16 sm:my-32 md:my-40 mx-auto px-4 sm:px-6 py-8">
        <HeroCTA />
      </div>

      <ContactSection />
    </div>
  );
}
