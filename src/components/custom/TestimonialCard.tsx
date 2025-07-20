import Image, { StaticImageData } from "next/image"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  avatar: string | StaticImageData
}

export default function TestimonialCard({ quote, name, title, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-[#F5F5F5] rounded-2xl p-8 shadow-lg border border-[#E4E4E4] max-w-sm mx-auto h-full flex flex-col">
      <div className="flex-1">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={avatar || "/placeholder.svg"}
              alt={name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <blockquote className="text-[#31312f] text-center mb-8 leading-relaxed">&quot;{quote}&quot;</blockquote>
      </div>

      <div className="text-center">
        <h4 className="font-semibold text-[#31312f] text-lg">{name}</h4>
        <p className="text-[#C8C8C8] text-sm mt-1">{title}</p>
      </div>
    </div>
  )
}
