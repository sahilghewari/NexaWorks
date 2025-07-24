"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // ✅ Next.js router hook

export default function HeroCTA() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/contact"); // ✅ Navigates to /contact route
  };

  return (
    <section className="bg-[#F5F5F5] rounded-2xl px-8 py-16 md:py-20 text-center">
      <h1 className="text-[#31312f] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-12">
        Join 10+ growing businesses that prefer NexaWorks to build their
        brands.
      </h1>
      <Button
        size="lg"
        onClick={handleRedirect}
        className="cursor-pointer bg-[#31312f] text-[#F5F5F5] hover:bg-[#C8C8C8] hover:text-[#31312f] px-8 py-3 text-lg font-medium rounded-lg"
      >
        Request a Quote
      </Button>
    </section>
  );
}
