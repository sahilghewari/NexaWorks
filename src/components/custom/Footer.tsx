import { Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {

  return (
    <footer className="bg-[#31312F] border-t-4 border-[#f5f5f5] px-6 pt-12 pb-4 text-[#C8C8C8]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row md:items-start md:justify-between w-full">
        {/* Left Section: Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-6 md:mb-0">
          <Link href="/" className="mb-2">
            <Image src="/images/Logo.png" alt="NexaWorks Logo" width={110} height={40} className="h-auto" />
          </Link>
          <span className="text-[#F5F5F5] text-sm italic font-light">Exceptional Software. Affordable Prices.</span>
        </div>

        {/* Center Section: Navigation & Legal */}
        <div className="flex flex-col items-center md:items-center w-full md:w-2/5">
          <div className="flex flex-row gap-8 mb-2 flex-wrap justify-center">
            <Link href="/" className="hover:text-[#9c7bfd] font-semibold">Home</Link>
            <Link href="/services" className="hover:text-[#9c7bfd] font-semibold">Services</Link>
            <Link href="/about" className="hover:text-[#9c7bfd] font-semibold">About</Link>
            <Link href="/contact" className="hover:text-[#9c7bfd] font-semibold">Contact</Link>
          </div>
          <div className="flex flex-row gap-6 text-xs mt-2 mb-2 justify-center">
            <Link href="/privacy" className="hover:text-[#9c7bfd]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#9c7bfd]">Terms of Service</Link>
          </div>
        </div>

        {/* Right Section: Contact & Social */}
        <div className="flex flex-col items-center md:items-end w-full md:w-1/3 gap-2">
          <a href="mailto:contact@nexaworks.com" className="text-[#F5f5f5] text-sm hover:text-[#9c7bfd]">contact@nexaworks.com</a>
          {/* Optional phone number */}
          {/* <span className="text-sm">+1-800-NEXAWORKS</span> */}
          <Link href="/contact" className="mt-1 text-[#9c7bfd] font-semibold text-sm hover:underline">Get in Touch</Link>
          <div className="flex flex-row gap-3 mt-2">
            <a href="https://linkedin.com/company/nexaworks" target="_blank" rel="noopener" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-[#C8C8C8] hover:text-[#9c7bfd] transition" />
            </a>
            <a href="https://twitter.com/nexaworks" target="_blank" rel="noopener" aria-label="Twitter/X">
              <svg className="w-6 h-6 text-[#C8C8C8] hover:text-[#9c7bfd] transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
            <a href="https://github.com/nexaworks" target="_blank" rel="noopener" aria-label="GitHub">
              <svg className="w-6 h-6 text-[#C8C8C8] hover:text-[#9c7bfd] transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-4 border-t border-[#23222a] text-xs w-full">
        <span className="text-[#C8C8C8]">© 2025 NexaWorks.</span>
        <span className="text-[#C8C8C8] flex items-center gap-2 mt-2 md:mt-0">
          {/* Trust signals: Example AWS and Python logos, or text */}
          <Image src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" alt="AWS" width={40} height={16} className="h-4 w-auto" />
          <span className="text-[#F5f5f5]">Built by Top Talent</span>
        </span>
      </div>
    </footer>
  )
}
