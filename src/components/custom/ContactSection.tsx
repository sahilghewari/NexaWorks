"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CircleCheckBig, Mail } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const benefits = [
    "45 minutes of free consultation",
    "A strict non-disclosure agreement",
    "Free market & competitive analysis",
    "Suggestions on revenue models & planning",
    "Detailed feature list document",
    "No obligation proposal",
    "Action plan to kick start your project",
  ]

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 md:px-8 bg-[#F5F5F5]">
      <div className="max-w-4xl sm:max-w-5xl md:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
        {/* Left side - Benefits */}
        <div className="mb-10 lg:mb-0">
          <h2 className="text-[#31312f] text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Lets Build Something Great Together. 🤝
          </h2>
          <p className="text-[#C8C8C8] mb-6 sm:mb-8 text-base sm:text-lg">Here is what you will get for submitting your contact details.</p>

          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-row items-center space-x-2 sm:space-x-3">
                <div>
                  <CircleCheckBig className="w-5 h-5 sm:w-6 sm:h-6 text-[#31312f]" />
                </div>
                <span className="text-[#31312f] text-sm sm:text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#31312f]" />
              <a href="mailto:Hello@NexaWorks.tech" className="text-[#31312f] text-sm sm:text-base">Hello@NexaWorks.tech</a>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full max-w-md mx-auto lg:w-[500px] lg:h-[700px]">
          <div className="bg-[#C8C8C8] text-[#31312f] p-4 sm:p-6 rounded-t-2xl text-center">
            <h3 className="text-lg sm:text-xl font-semibold">GET IN TOUCH WITH OUR EXPERTS TO TURN YOUR IDEA INTO REALITY.</h3>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#E4E4E4] p-4 sm:p-6 rounded-b-2xl space-y-3 sm:space-y-4">
            <Input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="bg-[#F5F5F5] border-[#E4E4E4] text-[#31312f] text-sm sm:text-base"
              required
            />

            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-[#F5F5F5] border-[#E4E4E4] text-[#31312f] text-sm sm:text-base"
              required
            />

            <Input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-[#F5F5F5] border-[#E4E4E4] text-[#31312f] text-sm sm:text-base"
              required
            />

            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-[#F5F5F5] border-[#E4E4E4] min-h-[100px] sm:min-h-[120px] text-[#31312f] text-sm sm:text-base"
              required
            />

            <Button
              type="submit"
              className="w-full bg-[#31312f] hover:bg-[#C8C8C8] text-[#F5F5F5] py-2 sm:py-3 text-base sm:text-lg font-medium cursor-pointer"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
