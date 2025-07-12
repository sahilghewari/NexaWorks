import { Button } from "@/components/ui/button"

export default function HeroCTA() {
  return (
    <section className="bg-[#C8B6FF] rounded-2xl px-8 py-16 md:py-20 text-center">
      <h1 className="text-purple-800 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-12">
        Join 1,000+ growing businesses that prefer NexaWorks to build their brands.
      </h1>
      <Button size="lg" className="cursor-pointer bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-lg">
        Request a Quote
      </Button>
    </section>
  )
}
