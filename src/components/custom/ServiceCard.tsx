import type { LucideIcon } from "lucide-react"
import TiltCard from "./TiltCard"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export default function ServiceCard({ title, description, icon: Icon, className = "" }: ServiceCardProps) {
  return (
    <TiltCard
      className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
          <Icon className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </TiltCard>
  )
}
