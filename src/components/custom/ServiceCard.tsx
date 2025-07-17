import type { LucideIcon } from "lucide-react"
import TiltCard from "./TiltCard"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export default function ServiceCard({ title, icon: Icon, className = "" }: ServiceCardProps) {
  return (
    <TiltCard
      className={`h-45 w-80 bg-white rounded-2xl p-8  border border-[#31312f] text-center duration-300 ${className}`}
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-[#31312f] rounded-2xl flex items-center justify-center">
          <Icon className="w-8 h-8 text-[#F5F5F5]" strokeWidth={1.5} />
        </div>
      </div>

      <h3 className="text-4xl text-gray-900 mb-4">{title}</h3>
      {/* <p className="text-gray-600 leading-relaxed">{description}</p> */}
    </TiltCard>
  )
}
