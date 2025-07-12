import { Lightbulb, Code, Smartphone, Monitor, Cpu, Megaphone, ChevronDown } from "lucide-react"
import ServiceCard from "./ServiceCard"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "discover",
    title: "Discover",
    description:
      "We conduct a thorough market research, competitor analysis, target audience, and clients' requirement.",
    icon: Lightbulb,
    position: "top-left",
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Design and developing immersive web applications and portals to drive digital transformation.",
    icon: Code,
    position: "center",
  },
  {
    id: "app-dev",
    title: "App Development",
    description: "We implement functionalities to bring the App into life.",
    icon: Smartphone,
    position: "top-right",
  },
  {
    id: "designing",
    title: "Designing",
    description: "We create a research-driven design to visualize and dive deep in your industry.",
    icon: Monitor,
    position: "bottom-left",
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "We constantly measure our efforts to engage new customers, increase ROI, and achieve unique business goals.",
    icon: Megaphone,
    position: "bottom-center",
  },
  {
    id: "ai",
    title: "Artificial intelligence",
    description: "Redefining speed with precision to maximize enterprise value with AI, ML, and RPA solutions.",
    icon: Cpu,
    position: "bottom-right",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-16 px-6 bg-white">
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
              className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200"
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
        <div className="text-center">
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 bg-transparent"
          >
            Show more
            <ChevronDown className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
