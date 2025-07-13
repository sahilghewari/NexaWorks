"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import HeroCTA from "@/components/custom/Hero-cta";
import Footer from "@/components/custom/Footer";
import ContactSection from "@/components/custom/ContactSection";
import TestimonialsCarousel from "@/components/custom/TestimonialsCarousel";
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-yellow-400 rounded-full opacity-20 float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10 float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto">
          <h1 className="hero-title text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#9c7bfd] to-[#b8a0ff] bg-clip-text text-transparent mb-6">
            Welcome to NexaWorks
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-500 mb-8 max-w-2xl mx-auto">
            We provide complete digital solutions: Websites, Apps, Video
            Editing, Designing, Marketing & more.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                size="lg"
                className="cursor-pointer bg-[#9c7bfd] hover:bg-[#9073e7] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#9c7bfd] text-[#9c7bfd] hover:bg-[#B8C0FF] hover:border-[#fff] hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer"
              >
                Let&apos;s Talk
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-[#9c7bfd] bg-clip-text text-transparent">
            Our Services
          </h2>
          <ServicesGrid/>
        </div>
      </section>

      <TestimonialsCarousel />

      <div className="container my-40 mx-auto px-4 py-8">
        <HeroCTA />
      </div>

      <ContactSection />

      <Footer />
    </div>
  );
}
