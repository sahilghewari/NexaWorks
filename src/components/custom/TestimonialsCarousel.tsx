"use client"

import { useState, useEffect } from "react"
import TestimonialCard from "./TestimonialCard"
import image1 from "@/assests/images.jpeg"
import image2 from "@/assests/images2.jpeg"
import image3 from "@/assests/images3.jpeg"
import image4 from "@/assests/images4.jpeg"

const testimonials = [
	{
		id: 1,
		quote:
			"Any team would find the Whiteboard App a difficult project to undertake. I'm glad we went with NexaWorks for the App development, which is currently shipped in our Android TV.",
		name: "Vinod Rajpal",
		title: "Project Manager, Whiteboard App.",
		avatar: image1,
	},
	{
		id: 2,
		quote:
			"NexaWorks has met all of our project requirements on time. They are highly recommended because they function as your in-house team.",
		name: "Rachiket Arya",
		title: "Co-founder and CTO, Jackett",
		avatar: image2,
	},
	{
		id: 3,
		quote:
			"NexaWorks, in my opinion, is one of the accolades it has received. I have confidence in this group to reach new heights in the foreseeable future.",
		name: "Dr.Chet Trivedy",
		title: "Chief Medical Advisor, Trust (WCT)",
		avatar: image3,
	},
	{
		id: 4,
		quote:
			"Working with NexaWorks has been an exceptional experience. Their attention to detail and commitment to quality is unmatched.",
		name: "Sarah Johnson",
		title: "CEO, TechStart Inc.",
		avatar: image4,
	},
	{
		id: 5,
		quote:
			"The team at NexaWorks delivered beyond our expectations. Their innovative approach helped us achieve our goals faster.",
		name: "Michael Chen",
		title: "CTO, InnovateLab",
		avatar: image2,
	},
]

export default function TestimonialsCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isAutoPlaying, setIsAutoPlaying] = useState(true)

	// Auto-play functionality
	useEffect(() => {
		if (!isAutoPlaying) return

		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
			)
		}, 4000) // Change slide every 4 seconds

		return () => clearInterval(interval)
	}, [isAutoPlaying])

	const goToSlide = (index: number) => {
		setCurrentIndex(index)
		setIsAutoPlaying(false) // Stop auto-play when user manually navigates

		// Resume auto-play after 10 seconds
		setTimeout(() => setIsAutoPlaying(true), 10000)
	}

	const getVisibleTestimonials = () => {
		const visible = []
		for (let i = 0; i < 3; i++) {
			const index = (currentIndex + i) % testimonials.length
			visible.push(testimonials[index])
		}
		return visible
	}

	return (
		<section className="py-16 px-6 bg-[#F5F5F5]">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						<span className="text-[#31312f]">Clients are talking</span>
						<br />
						<span className="text-[#C8C8C8]">and they sound happy</span>
					</h2>
				</div>

				{/* Testimonials Grid */}
				<div className="grid md:grid-cols-3 gap-8 mb-12">
					{getVisibleTestimonials().map((testimonial, index) => (
						<div
							key={`${testimonial.id}-${currentIndex}`}
							className="transform transition-all duration-500 ease-in-out"
							style={{
								animationDelay: `${index * 0.1}s`,
							}}
						>
							<TestimonialCard
								quote={testimonial.quote}
								name={testimonial.name}
								title={testimonial.title}
								avatar={testimonial.avatar}
							/>
						</div>
					))}
				</div>

				{/* Pagination Dots */}
				<div className="flex justify-center space-x-2">
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentIndex
									? "bg-[#C8C8C8] scale-125"
									: "bg-[#E4E4E4] hover:bg-[#C8C8C8]"
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
