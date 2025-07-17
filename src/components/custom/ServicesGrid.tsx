
import { Code, BrainCircuit, Workflow, Cloud } from "lucide-react"
import ServiceCard from "./ServiceCard"

const services = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "Build tailored, scalable software solutions to meet your unique business needs, from web apps to enterprise systems.",
    keyHighlight: "Scalable, user-centric solutions at affordable prices.",
    icon: Code,
    cta: { text: "Learn More", link: "/services/custom-software" },
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning Solutions",
    description:
      "Leverage AI to create intelligent systems for predictive analytics, automation, and personalized experiences.",
    keyHighlight: "Cutting-edge AI for smarter business decisions.",
    icon: BrainCircuit,
    cta: { text: "Explore AI Solutions", link: "/services/ai-ml" },
  },
  {
    id: "automation",
    title: "Business Process Automation",
    description:
      "Streamline operations with custom automation solutions to boost efficiency and reduce costs.",
    keyHighlight: "Affordable automation for seamless workflows.",
    icon: Workflow,
    cta: { text: "Automate Now", link: "/services/automation" },
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description:
      "Deploy scalable, secure cloud-based applications and infrastructure for flexibility and growth.",
    keyHighlight: "Cost-effective, scalable cloud technology.",
    icon: Cloud,
    cta: { text: "Go Cloud", link: "/services/cloud" },
  },
]


export default function ServicesGrid() {
  return (
    <section className="py-16 px-6 bg-[#31312F]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#23222a] rounded-2xl p-6 flex flex-col items-start shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-4">
                <service.icon className="w-10 h-10 text-[grey]" />
              </div>
              <h3 className="text-[#f5f5f5] font-bold text-xl mb-2 font-sans">
                {service.title}
              </h3>
              <p className="text-[#C8C8C8] text-base mb-2 text-left">
                {service.description}
              </p>
              <div className="text-[grey] italic text-sm mb-4 font-semibold">
                {service.keyHighlight}
              </div>
              <a
                href={service.cta.link}
                className="cursor-pointer px-4 py-2 text-[#31312F] bg-[#FF3F33] border border-[#FF3F33] rounded-full hover:bg-[#31312F] hover:border-[#F5F5F5] hover:text-[#F5F5F5] transition"
              >
                {service.cta.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
