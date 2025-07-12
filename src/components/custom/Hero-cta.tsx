import { Button } from "@/components/ui/button"

export default function HeroCTA() {
  return (
    <section className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl px-8 py-16 md:py-20 text-center">
      <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-12">
        Join 1,000+ growing businesses that prefer Banao to build their brands.
      </h1>
      <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-lg">
        Request a Quote
      </Button>
    </section>
  )
}
