"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Plus, Minus } from "lucide-react"

interface AnimatedFAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  variant?: "default" | "modern" | "minimal"
}

export function AnimatedFAQItem({ question, answer, isOpen, onToggle, variant = "default" }: AnimatedFAQItemProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  const variants = {
    default: {
      container: "border border-gray-200 rounded-xl bg-white",
      button: "w-full px-6 py-5 text-left hover:bg-gray-50",
      icon: ChevronDown,
    },
    modern: {
      container: "bg-white rounded-2xl shadow-lg border-l-4 border-[#9c7bfd]",
      button: "w-full px-8 py-6 text-left hover:bg-orange-50",
      icon: isOpen ? Minus : Plus,
    },
    minimal: {
      container: "border-b border-gray-200 last:border-b-0",
      button: "w-full py-6 text-left hover:bg-gray-50 px-4",
      icon: ChevronDown,
    },
  }

  const currentVariant = variants[variant]
  const IconComponent = currentVariant.icon

  return (
    <div className={`overflow-hidden transition-all duration-300 ${currentVariant.container}`}>
      <button
        onClick={onToggle}
        className={`${currentVariant.button} transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#9c7bfd] focus:ring-inset`}
        aria-expanded={isOpen}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
          <IconComponent
            className={`w-5 h-5 text-[#9c7bfd] transition-all duration-300 flex-shrink-0 ${
              variant === "default" && isOpen ? "rotate-180" : ""
            } ${variant === "modern" ? "scale-110" : ""}`}
          />
        </div>
      </button>

      <div style={{ height: `${height}px` }} className="transition-all duration-300 ease-in-out overflow-hidden">
        <div ref={contentRef} className="px-6 pb-5 pt-2">
          <div className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{answer}</div>
        </div>
      </div>
    </div>
  )
}
