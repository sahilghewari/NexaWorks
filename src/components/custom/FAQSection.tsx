"use client"

import { useState } from "react"
import FAQItem from "./FAQItem"

interface FAQ {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
    {
        id: 1,
        question: "What services do you provide?",
        answer:
            "We offer mobile app development, web development, UI/UX design, digital marketing, AI solutions, and progressive web apps. Our team creates custom solutions for your business.",
    },
    {
        id: 2,
        question: "How long does it take to build a mobile app?",
        answer:
            "Simple apps usually take 2-3 months. More complex apps may take 4-6 months or longer. We&lsquo;ll give you a clear timeline after our first consultation.",
    },
    {
        id: 3,
        question: "Do you offer support after launch?",
        answer:
            "Yes, we provide ongoing support and maintenance, including bug fixes, updates, and feature improvements. We have packages to fit different needs and budgets.",
    },
    {
        id: 4,
        question: "How does your development process work?",
        answer:
            "We use an agile approach: research, planning, design, development, testing, launch, and support. We keep you updated at every step.",
    },
    {
        id: 5,
        question: "Can you help publish my app to app stores?",
        answer:
            "Absolutely! We handle the submission for both Apple App Store and Google Play, including preparing assets and managing the review process.",
    },
    {
        id: 6,
        question: "Do you work with startups?",
        answer:
            "Yes, we work with startups and established companies. We offer flexible options and can help with MVPs, funding, and scaling.",
    },
    {
        id: 7,
        question: "What technologies do you use?",
        answer:
            "We use modern tech like React Native, Flutter, Swift, Kotlin, React.js, Node.js, Python, and cloud platforms. We pick the best tools for your project.",
    },
    {
        id: 8,
        question: "How do you keep my app and data secure?",
        answer:
            "Security is important to us. We use encryption, secure APIs, authentication, regular audits, and follow regulations like GDPR. We also give you security advice.",
    },
]

interface FAQSectionProps {
  title?: string
  subtitle?: string
  allowMultipleOpen?: boolean
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services and process",
  allowMultipleOpen = false,
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const handleToggle = (id: number) => {
    if (allowMultipleOpen) {
      setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#F5F5F5] to-[#E4E4E4]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#31312f] mb-4">{title}</h2>
          <p className="text-xl text-[#31312f]/70 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="transform transition-all duration-300 hover:scale-[1.01]"
              style={{
                animationDelay: `${faqs.indexOf(faq) * 0.1}s`,
              }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems.includes(faq.id)}
                onToggle={() => handleToggle(faq.id)}
              />
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-[#F5F5F5] rounded-2xl p-8 shadow-lg border border-[#E4E4E4]">
            <h3 className="text-2xl font-semibold text-[#31312f] mb-4">Still have questions?</h3>
            <p className="text-[#31312f]/70 mb-6">
              Can&lsquo;t find the answer you&lsquo;re looking for? Our team is here to help you with any questions about our
              services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cursor-pointer bg-[#31312f] hover:bg-[#44443f] text-[#F5F5F5] px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Contact Support
              </button>
              <button className="cursor-pointer border border-[#31312f] text-[#31312f] hover:bg-[#E4E4E4] px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

