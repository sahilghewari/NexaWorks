"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for content sections
      gsap.fromTo(
        ".about-section",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      )

      // Skills animation
      gsap.fromTo(
        ".skill-badge",
        { scale: 0, rotation: 180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".skills-section",
            start: "top 80%",
          },
        },
      )

      // Interests cards animation
      gsap.fromTo(
        ".interest-card",
        { y: 50, opacity: 0, rotationY: 45 },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".interests-section",
            start: "top 80%",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen font-inter bg-gradient-to-br from-[#18181b] via-[#222226] to-[#2a2a2e] py-0 px-0">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-br from-[#111] to-[#222]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111]/90 to-[#222]/90 z-0 animate-gradient-move"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight animate-slide-in">We build the future, one MVP at a time.</h1>
          <p className="text-base sm:text-xl text-gray-400 mb-8 animate-fade-in">Helping startups launch, scale, and automate with confidence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#work" className="inline-block bg-white text-[#111] px-8 py-3 rounded-full font-semibold shadow hover:bg-[#00BFA6] hover:text-white transition-all duration-300">View Our Work</a>
            <a href="#contact" className="inline-block bg-[#222] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#00BFA6] transition-all duration-300">Talk to Us</a>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="max-w-5xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-800">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Mission</h2>
          <span className="text-lg text-gray-400 font-medium mb-4 border-l-4 border-[#00BFA6] pl-4">“Build lean. Deliver fast. Automate always.”</span>
        </div>
        <div className="border-l border-gray-600 pl-8">
          <p className="text-base sm:text-lg text-gray-300 mb-2">NexaWorks helps early-stage companies build, launch, and scale with world-class software and automation. We believe in lean teams, rapid delivery, and empowering founders globally.</p>
          <div className="h-1 w-16 bg-[#00BFA6] rounded-full mt-4 animate-bar"></div>
        </div>
      </section>

      {/* The NexaWorks Edge */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-[#2a2a2e] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-[#00BFA6]/40 transition-all duration-300">
          <span className="text-4xl text-gray-400 mb-2"><svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg></span>
          <h4 className="font-bold text-white mb-2">MVP-first Thinking</h4>
          <p className="text-gray-400 text-sm">We specialize in lean, fast MVPs so founders can validate and grow.</p>
        </div>
        <div className="bg-[#2a2a2e] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-[#00BFA6]/40 transition-all duration-300">
          <span className="text-4xl text-gray-400 mb-2"><svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/></svg></span>
          <h4 className="font-bold text-white mb-2">Automation DNA</h4>
          <p className="text-gray-400 text-sm">Every solution is built with automated workflows and scale in mind.</p>
        </div>
        <div className="bg-[#2a2a2e] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-[#00BFA6]/40 transition-all duration-300">
          <span className="text-4xl text-gray-400 mb-2"><svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20"/></svg></span>
          <h4 className="font-bold text-white mb-2">Talent Incubator</h4>
          <p className="text-gray-400 text-sm">We train our interns on real-world products before deploying them on client work.</p>
        </div>
        <div className="bg-[#2a2a2e] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-[#00BFA6]/40 transition-all duration-300">
          <span className="text-4xl text-gray-400 mb-2"><svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 12a10 10 0 0020 0"/></svg></span>
          <h4 className="font-bold text-white mb-2">Global Vision</h4>
          <p className="text-gray-400 text-sm">While rooted in India, we build for global users, markets, and scalability.</p>
        </div>
      </section>

      {/* Story / Timeline */}
      <section className="max-w-3xl mx-auto py-16 px-4 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Our Story</h2>
        <div className="relative w-full flex flex-col items-center">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-700 -translate-x-1/2"></div>
          <div className="space-y-12 w-full">
            {/* Timeline entries */}
            <div className="flex items-center w-full animate-timeline-entry">
              <div className="w-1/2 text-right pr-8">
                <div className="inline-block bg-[#222] text-white px-4 py-2 rounded-xl shadow">2025: Founded in Mumbai</div>
              </div>
              <div className="relative w-8 h-8 flex items-center justify-center">
                <span className="block w-4 h-4 rounded-full bg-[#00BFA6] shadow-lg animate-glow"></span>
              </div>
              <div className="w-1/2 pl-8"></div>
            </div>
            <div className="flex items-center w-full animate-timeline-entry">
              <div className="w-1/2 text-right pr-8"></div>
              <div className="relative w-8 h-8 flex items-center justify-center">
                <span className="block w-4 h-4 rounded-full bg-[#00BFA6] shadow-lg animate-glow"></span>
              </div>
              <div className="w-1/2 pl-8">
                <div className="inline-block bg-[#222] text-white px-4 py-2 rounded-xl shadow">Launched in-house product incubation program</div>
              </div>
            </div>
            <div className="flex items-center w-full animate-timeline-entry">
              <div className="w-1/2 text-right pr-8">
                <div className="inline-block bg-[#222] text-white px-4 py-2 rounded-xl shadow">First 2 clients</div>
              </div>
              <div className="relative w-8 h-8 flex items-center justify-center">
                <span className="block w-4 h-4 rounded-full bg-[#00BFA6] shadow-lg animate-glow"></span>
              </div>
              <div className="w-1/2 pl-8"></div>
            </div>
            <div className="flex items-center w-full animate-timeline-entry">
              <div className="w-1/2 text-right pr-8"></div>
              <div className="relative w-8 h-8 flex items-center justify-center">
                <span className="block w-4 h-4 rounded-full bg-[#00BFA6] shadow-lg animate-glow"></span>
              </div>
              <div className="w-1/2 pl-8">
                <div className="inline-block bg-[#222] text-white px-4 py-2 rounded-xl shadow">Grew to 15+ members</div>
              </div>
            </div>
            <div className="flex items-center w-full animate-timeline-entry">
              <div className="w-1/2 text-right pr-8">
                <div className="inline-block bg-[#222] text-white px-4 py-2 rounded-xl shadow">Mission:Automate 50+ business workflows by 2026.</div>
              </div>
              <div className="relative w-8 h-8 flex items-center justify-center">
                <span className="block w-4 h-4 rounded-full bg-[#00BFA6] shadow-lg animate-glow"></span>
              </div>
              <div className="w-1/2 pl-8"></div>
            </div>
          </div>
        </div>
      </section>



      {/* Our Values */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="backdrop-blur-sm bg-white/10 border border-gray-700 rounded-2xl p-8 flex flex-col items-center text-center">
          <span className="text-3xl text-gray-400 mb-2"><svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/></svg></span>
          <h4 className="font-bold text-white mb-2">Transparency</h4>
          <p className="text-gray-400 text-sm">We share how we work, what we charge, and what you get.</p>
        </div>
        <div className="backdrop-blur-sm bg-white/10 border border-gray-700 rounded-2xl p-8 flex flex-col items-center text-center">
          <span className="text-3xl text-gray-400 mb-2"><svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg></span>
          <h4 className="font-bold text-white mb-2">Execution</h4>
          <p className="text-gray-400 text-sm">We get things done—fast, clean, and production-ready.</p>
        </div>
        <div className="backdrop-blur-sm bg-white/10 border border-gray-700 rounded-2xl p-8 flex flex-col items-center text-center">
          <span className="text-3xl text-gray-400 mb-2"><svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20"/></svg></span>
          <h4 className="font-bold text-white mb-2">Innovation</h4>
          <p className="text-gray-400 text-sm">We stay ahead with AI, automation, and product thinking.</p>
        </div>
        <div className="backdrop-blur-sm bg-white/10 border border-gray-700 rounded-2xl p-8 flex flex-col items-center text-center">
          <span className="text-3xl text-gray-400 mb-2"><svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 12a10 10 0 0020 0"/></svg></span>
          <h4 className="font-bold text-white mb-2">Collaboration</h4>
          <p className="text-gray-400 text-sm">We build long-term relationships, not just apps.</p>
        </div>
      </section>

      {/* Trusted By / Worked With */}
      

      {/* Call to Action */}
      <section className="w-full py-16 px-4 bg-[#111] rounded-2xl shadow-lg text-center mt-16">
        <h2 className="text-3xl font-bold text-white mb-4">Have a vision? Let’s make it real.</h2>
        <p className="text-lg text-gray-400 mb-8">Reach out for MVPs, automations, or strategic tech builds.</p>
        <a href="#contact" className="inline-block bg-[#00BFA6] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-[#00BFA6]/40 transition-all duration-300">Start a Conversation</a>
      </section>
    </div>
  )
}
