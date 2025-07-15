import { Lightbulb, Code, Smartphone, Monitor, Cpu, Megaphone, ChevronDown } from "lucide-react"
import ServiceCard from "./ServiceCard"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "discover",
    title: "Discover",
    description:
      "Unlock insights with deep market research, competitor analysis, and tailored strategies for your business growth.",
    icon: Lightbulb,
    position: "top-left",
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Craft stunning, high-performance websites and portals that elevate your brand and engage users.",
    icon: Code,
    position: "center",
  },
  {
    id: "app-dev",
    title: "App Development",
    description: "Transform ideas into powerful mobile experiences with seamless functionality and beautiful design.",
    icon: Smartphone,
    position: "top-right",
  },
  {
    id: "designing",
    title: "Designing",
    description: "Bring your vision to life with creative, research-driven designs that captivate and inspire.",
    icon: Monitor,
    position: "bottom-left",
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Accelerate growth with data-driven marketing strategies that attract, engage, and convert your audience.",
    icon: Megaphone,
    position: "bottom-center",
  },
  {
    id: "ai",
    title: "Artificial intelligence",
    description: "Empower your business with intelligent automation and AI solutions for smarter decision-making.",
    icon: Cpu,
    position: "bottom-right",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-16 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Top Row */}
          <div className="md:col-span-1">
            <ServiceCard title={services[0].title} description={services[0].description} icon={services[0].icon} />
          </div>

          <div className="md:col-span-1">
            <ServiceCard
              title={services[1].title}
              description={services[1].description}
              icon={services[1].icon}
              className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
            />
          </div>

          <div className="md:col-span-1">
            <ServiceCard title={services[2].title} description={services[2].description} icon={services[2].icon} />
          </div>

          {/* Bottom Row */}
          <div className="md:col-span-1">
            <ServiceCard title={services[3].title} description={services[3].description} icon={services[3].icon} />
          </div>

          <div className="md:col-span-1">
            <ServiceCard title={services[4].title} description={services[4].description} icon={services[4].icon} />
          </div>

          <div className="md:col-span-1">
            <ServiceCard title={services[5].title} description={services[5].description} icon={services[5].icon} />
          </div>
        </div>

        {/* Show More Button */}
        {/* <div className="text-center">
          <Button
            variant="outline"
            className="border-purple-500 text-purple-500 hover:bg-purple-50 px-8 py-3 bg-transparent"
          >
            Show more
            <ChevronDown className="ml-2 w-4 h-4" />
          </Button>
        </div> */}
      </div>
    </section>
  )
}
