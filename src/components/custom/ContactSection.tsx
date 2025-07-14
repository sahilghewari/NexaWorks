"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CircleCheckBig, Mail, Phone } from "lucide-react"

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
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Benefits */}
        <div>
          <h2 className="text-[#9c7bfd] text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Lets Build Something Great Together. 🤝
          </h2>
          <p className="text-gray-600 mb-8">Here is what you will get for submitting your contact details.</p>

          <div className="space-y-4 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-row items-center space-x-3">
                <div className="">
                  <CircleCheckBig className="w-6 h-6 text-green-500" />
                </div>
                <span className="text-gray-800 text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Hello@NexaWorks.tech</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">+91-99000-36467</span>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div>
          <div className="bg-[#C8B6FF] text-purple-800 p-6 rounded-t-2xl text-center">
            <h3 className="text-xl font-semibold">GET IN TOUCH WITH OUR EXPERTS TO TURN YOUR IDEA INTO REALITY.</h3>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-b-2xl space-y-4">
            <Input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="bg-white border-gray-200"
              required
            />

            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-white border-gray-200"
              required
            />

              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-white border-gray-200"
                required
              />

            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-white border-gray-200 min-h-[120px]"
              required
            />

            <Button
              type="submit"
              className="w-full bg-[#B8C0FF] hover:bg-[#C8B6FF] text-purple-800 py-3 text-lg font-medium cursor-pointer"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
