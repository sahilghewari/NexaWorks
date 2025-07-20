"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { CircleCheckBig } from 'lucide-react';

export default function HeroCTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // You can handle the form submission here (API call, etc)
  };

  return (
    <section className="bg-[#F5F5F5] rounded-2xl px-8 py-16 md:py-20 text-center">
      <h1 className="text-[#31312f] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-12">
        Join 10+ growing businesses that prefer NexaWorks to build their
        brands.
      </h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="cursor-pointer bg-[#31312f] text-[#F5F5F5] hover:bg-[#C8C8C8] hover:text-[#31312f] px-8 py-3 text-lg font-medium rounded-lg"
          >
            Request a Quote
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[450px] p-0 bg-[#E4E4E4]">
          <div className="">
            {submitted ? (
              <div className="text-center p-4">
                <div className="text-green-600 font-semibold mb-2 flex flex-row items-center justify-center gap-2">
                  <CircleCheckBig className="w-5 h-5 text-green-600" />
                  <h2>Thank you!</h2>
                </div>
                <div>
                  <h2 className="text-gray-500">We have received your request and will contact you soon.</h2>
                </div>
              </div>
            ) : (
              <div>
                <div className="">
                  <div className="bg-[#C8C8C8] text-[#31312f] p-3 text-center rounded-t-lg text-sm font-medium px-20">
                    GET IN TOUCH WITH OUR EXPERTS TO TURN YOUR IDEA INTO
                    REALITY.
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 px-12 py-5 flex flex-col items-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-[#E4E4E4] rounded px-3 py-2 bg-[#F5F5F5] text-[#31312f]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-[#E4E4E4] rounded px-3 py-2 bg-[#F5F5F5] text-[#31312f]"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-[#E4E4E4] rounded px-3 py-2 bg-[#F5F5F5] text-[#31312f]"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-[#E4E4E4] rounded px-3 py-2 min-h-[80px] bg-[#F5F5F5] text-[#31312f]"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-36 bg-[#31312f] hover:bg-[#C8C8C8] text-[#F5F5F5] py-6 mt-20 text-lg font-medium cursor-pointer"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
