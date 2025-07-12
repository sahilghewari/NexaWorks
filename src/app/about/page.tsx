"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Heart, Music, Camera } from "lucide-react"

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

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Python",
    "Git",
    "Figma",
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="about-section text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a love for creating beautiful, functional digital experiences
          </p>
        </div>

        {/* Story Section */}
        <div className="about-section mb-16">
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">My Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
  <p>
    👋 Hey! Im Pavan, a passionate full-stack developer based in India. My journey into tech began with a deep curiosity
    for how apps work behind the scenes 🧐 and that curiosity quickly turned into a career I love.
  </p>
  <p>
    I specialize in building modern, responsive web and mobile applications using technologies like React, Next.js, Node.js,
    and React Native. Whether its crafting seamless user interfaces or structuring efficient APIs, ☺️ I enjoy solving real-world
    problems with clean and scalable code.
  </p>
  <p>
    Recently, Ive been focused on cross-platform app development using React Native, creating apps that work beautifully on both
    Android 📱 and iOS 🍎. I also have experience with MongoDB, SQL, and cloud integrations that support robust backend services.
  </p>
  <p>
    When Im not coding, I enjoy exploring new tools, brainstorming product ideas, and occasionally binge-watching dev content
    or motivational podcasts and sometimes jamming with my guitar 🎸. I believe great tech is built with passion, clarity, and a lot of coffee!
  </p>
</div>

            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="about-section skills-section mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <Badge
                key={skill}
                className="skill-badge bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm font-medium hover:shadow-lg transition-shadow duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div className="about-section interests-section">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">When Im Not Coding</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="interest-card bg-white/70 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Coffee</h3>
                <p className="text-sm text-gray-600">Balancing caffeine levels and clean code</p>
              </CardContent>
            </Card>

            <Card className="interest-card bg-white/70 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Fitness</h3>
                <p className="text-sm text-gray-600">At gym with my buddy shaping our body along with our future</p>
              </CardContent>
            </Card>

            <Card className="interest-card bg-white/70 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Music</h3>
                <p className="text-sm text-gray-600">Playing guitar and discovering new artists across all genres</p>
              </CardContent>
            </Card>

            <Card className="interest-card bg-white/70 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Photography</h3>
                <p className="text-sm text-gray-600">Capturing urban landscapes and candid street moments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
