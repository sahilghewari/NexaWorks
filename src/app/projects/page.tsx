"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Taskimg from '@/assests/adIos.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".projects-header", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })

      // Project cards animation
      gsap.fromTo(
        ".project-card",
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
          },
        },
      )

      // Hover animations for project cards
      const cards = document.querySelectorAll(".project-card")
      cards.forEach((card) => {
        const tl = gsap.timeline({ paused: true })
        tl.to(card, { y: -10, scale: 1.02, duration: 0.3, ease: "power2.out" })

        card.addEventListener("mouseenter", () => tl.play())
        card.addEventListener("mouseleave", () => tl.reverse())
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const projects = [
    {
      title: "Task Manager",
      description:
        "Simple android/ios app that allows user to manage their tasks",
      image: Taskimg,
      technologies: ['React Native', 'Firebase', 'Redux', 'Tailwind CSS'],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    // {
    //   title: "Task Management App",
    //   description:
    //     "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: true,
    // },
    // {
    //   title: "Weather Dashboard",
    //   description:
    //     "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   technologies: ["Vue.js", "D3.js", "Weather API", "CSS3"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   title: "Portfolio Website",
    //   description:
    //     "A responsive portfolio website with smooth animations and modern design principles. Built with performance in mind.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   technologies: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   title: "Social Media Dashboard",
    //   description:
    //     "Analytics dashboard for social media management with data visualization and automated reporting features.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   technologies: ["React", "Chart.js", "Node.js", "PostgreSQL"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   title: "Recipe Finder App",
    //   description:
    //     "A recipe discovery app with ingredient-based search, nutritional information, and meal planning features.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   technologies: ["React Native", "Firebase", "Recipe API", "Redux"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
  ]

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="projects-header text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating digital experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={`project-card bg-white/70 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    Featured
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-300 hover:bg-gray-50">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
