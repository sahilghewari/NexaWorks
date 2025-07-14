"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
  isOpen?: boolean
  onToggle?: () => void
}

export default function FAQItem({ question, answer, isOpen = false, onToggle }: FAQItemProps) {
  const [internalOpen, setInternalOpen] = useState(isOpen)

  const handleToggle = () => {
    if (onToggle) {
      onToggle()
    } else {
      setInternalOpen(!internalOpen)
    }
  }

  const isExpanded = onToggle ? isOpen : internalOpen

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={handleToggle}
        className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9c7bfd] focus:ring-inset"
        aria-expanded={isExpanded}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 pt-2">
          <div className="text-gray-600 leading-relaxed">{answer}</div>
        </div>
      </div>
    </div>
  )
}
