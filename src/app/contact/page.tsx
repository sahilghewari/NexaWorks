"use client";

import { useState } from "react";

const CONTACT_INFO = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#00BFA6" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5"/><polyline points="17 8 12 13 7 8"/></svg>
    ),
    label: "Email",
    value: "hello@nexaworks.tech",
    href: "mailto:hello@nexaworks.tech",
  },
 
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#00BFA6" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a2 2 0 0 0-2.828 0l-4.243 4.243A8 8 0 1 1 21 12"/><circle cx="12" cy="12" r="3"/></svg>
    ),
    label: "Address",
    value: "Mumbai, India",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send message");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#424242ff] px-4 py-20">
      <div className="w-full max-w-5xl bg-[#222] rounded-2xl shadow-2xl border border-[#C8C8C8] flex flex-col md:flex-row overflow-hidden">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 bg-gradient-to-b from-[#31312f] to-[#232323] p-8 flex flex-col justify-between gap-8 border-b md:border-b-0 md:border-r border-[#393939]">
          <div>
            <h1 className="text-4xl font-bold text-[#F5F5F5] mb-2">Contact Us</h1>
            <p className="text-[#C8C8C8] mb-6 text-lg">We&apos;d love to hear from you! Fill out the form or reach us directly.</p>
            <div className="space-y-6">
              {CONTACT_INFO.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group hover:bg-[#232323] p-3 rounded-lg transition"
                >
                  <span className="flex-shrink-0">{info.icon}</span>
                  <span className="text-[#F5F5F5] font-medium group-hover:text-[#00BFA6] transition">{info.value}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <a href="https://linkedin.com/company/nexaworks-tech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#00BFA6] text-[#C8C8C8] transition">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 8a6 6 0 0 1 6 6v5h-4v-5a2 2 0 0 0-4 0v5h-4v-9h4v2"/></svg>
            </a>
            <a href="mailto:hello@nexaworks.tech" aria-label="Email" className="hover:text-[#00BFA6] text-[#C8C8C8] transition">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5"/><polyline points="17 8 12 13 7 8"/></svg>
            </a>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center bg-transparent backdrop-blur-lg">
          <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-4">Send us a message</h2>
          {submitted ? (
            <div className="text-center text-[#00BFA6] font-semibold text-lg py-8">Thank you for reaching out! We&apos;ll be in touch soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-[#F5F5F5] mb-2 font-medium" htmlFor="name">Name</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-[#31312f] text-[#F5F5F5] border border-[#C8C8C8] focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-[#F5F5F5] mb-2 font-medium" htmlFor="email">Email</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-[#31312f] text-[#F5F5F5] border border-[#C8C8C8] focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#F5F5F5] mb-2 font-medium" htmlFor="subject">Subject</label>
                <input
                  className="w-full px-4 py-3 rounded-lg bg-[#31312f] text-[#F5F5F5] border border-[#C8C8C8] focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-[#F5F5F5] mb-2 font-medium" htmlFor="message">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-[#31312f] text-[#F5F5F5] border border-[#C8C8C8] focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              {error && <div className="text-red-500 text-sm text-center">{error}</div>}
              <button
                type="submit"
                className="w-full bg-[#00BFA6] text-white font-semibold py-3 rounded-lg shadow hover:bg-[#00a38c] transition-all duration-300 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
