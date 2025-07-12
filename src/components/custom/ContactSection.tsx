"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Mail, Phone } from "lucide-react"

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
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Benefits */}
        <div>
          <h2 className="text-orange-500 text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let's Build Something Great Together. 🤝
          </h2>
          <p className="text-gray-600 mb-8">Here is what you will get for submitting your contact details.</p>

          <div className="space-y-4 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Hello@Banao.tech</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">+91-99000-36467</span>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div>
          <div className="bg-orange-500 text-white p-6 rounded-t-2xl text-center">
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

            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                <div className="w-6 h-4 bg-orange-500 relative">
                  <div className="absolute top-0 left-0 w-6 h-1.5 bg-orange-500"></div>
                  <div className="absolute top-1.5 left-0 w-6 h-1 bg-white"></div>
                  <div className="absolute top-2.5 left-0 w-6 h-1.5 bg-green-600"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-blue-800 rounded-full bg-white">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-blue-800"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-6 bg-blue-800"></div>
                  </div>
                </div>
              </div>
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-white border-gray-200 pl-12"
                required
              />
            </div>

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
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-medium"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
