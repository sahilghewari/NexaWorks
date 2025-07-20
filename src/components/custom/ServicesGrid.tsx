import { Lightbulb, Cpu, Megaphone } from "lucide-react"
import ServiceCard from "./ServiceCard"

const services = [
  {
    id: "AS",
    title: "Automation Solutions",
    description:
    "Streamline operations with custom automation solutions to boost efficiency and reduce costs.",
    icon: Megaphone,
    position: "bottom-center",
  },
  {
    id: "CS",
    title: "Cloud Solutions",
    description:
      "Deploy scalable, secure cloud-based applications and infrastructure for flexibility and growth.",
    icon: Lightbulb,
    position: "top-left",
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
              className="bg-gradient-to-br from-stone-50 to-stone-00 border-stone-200"
            />
          </div>

          <div className="md:col-span-1">
            <ServiceCard title={services[2].title} description={services[2].description} icon={services[2].icon} />
          </div>
        </div>
      </div>
    </section>
  )
}
