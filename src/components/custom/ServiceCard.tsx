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
      className={`h-75 w-80 bg-[#F5F5F5] rounded-2xl p-8 shadow-lg border border-[#E4E4E4] text-center hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-[#E4E4E4] rounded-2xl flex items-center justify-center">
          <Icon className="w-8 h-8 text-[#31312f]" strokeWidth={1.5} />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-[#31312f] mb-4">{title}</h3>
      <p className="text-[#424242ff] leading-relaxed">{description}</p>
    </TiltCard>
  )
}
