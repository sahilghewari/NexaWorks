"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { gsap } from "gsap"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Animate navigation on mount
    gsap.fromTo(
      ".nav-item",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
    )
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    // <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-16 gap-20">
    //       {/* Logo */}
    //       <Link href="/" className="nav-item">
    //         <div className="text-2xl font-bold bg-[#9c7bfd] bg-clip-text text-transparent">
    //           NexaWorks.tech
    //         </div>
    //       </Link>

    //       {/* Desktop Navigation using shadcn NavigationMenu */}
    //       <div className="hidden md:flex">
    //         <NavigationMenu>
    //           <NavigationMenuList className="space-x-0 space-y-0 flex gap-x-10">
    //             {navItems.map((item) =>
    //               item.name === "Projects" ? (
    //                 <NavigationMenuItem key={item.name}>
    //                   <NavigationMenuTrigger className={`nav-item px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
    //                     pathname === item.href
    //                       ? "bg-gradient-to-r from-[#9c7bfd] to-[#C8B6FF] text-white shadow-lg"
    //                       : "text-gray-700 cursor-pointer hover:text-purple-400 hover:bg-purple-50"
    //                   }`}>
    //                     {item.name}
    //                   </NavigationMenuTrigger>
    //                   <NavigationMenuContent>
    //                     <div className="fixed left-0 top-16 w-screen min-h-[300px] max-h-[80vh] overflow-auto bg-white z-50 flex justify-center items-start">
    //                       <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 p-6 w-full max-w-7xl">
    //                         {/* Web Development */}
    //                         <div>
    //                           <div className="text-[#9c7bfd] font-semibold mb-2">Web Development</div>
    //                           <ul className="border-l pl-4 space-y-1">
    //                             <li><NavigationMenuLink asChild><Link href="/projects/web-development">Web Development</Link></NavigationMenuLink></li>
    //                             {/* <li><NavigationMenuLink asChild><Link href="#">PHP/Laravel Development</Link></NavigationMenuLink></li> */}
    //                             <li><NavigationMenuLink asChild><Link href="#">MEAN Stack</Link></NavigationMenuLink></li>
    //                             <li><NavigationMenuLink asChild><Link href="/projects/web-development">NodeJs Development</Link></NavigationMenuLink></li>
    //                             <li><NavigationMenuLink asChild><Link href="/projects/web-development">ReactJs Development</Link></NavigationMenuLink></li>
    //                           </ul>
    //                         </div>
    //                         {/* App Development */}
    //                         <div>
    //                           <div className="text-[#9c7bfd] font-semibold mb-2">App Development</div>
    //                           <ul className="border-l pl-4 space-y-1">
    //                             {/* <li><NavigationMenuLink asChild><Link href="/projects/app-development">Progressive Web App Development</Link></NavigationMenuLink></li> */}
    //                             <li><NavigationMenuLink asChild><Link href="/projects/app-development">React Native App Development</Link></NavigationMenuLink></li>
    //                             {/* <li><NavigationMenuLink asChild><Link href="/projects/app-development">Android App Development</Link></NavigationMenuLink></li>
    //                             <li><NavigationMenuLink asChild><Link href="/projects/app-development">Flutter App Development</Link></NavigationMenuLink></li> */}
    //                           </ul>
    //                         </div>
    //                         {/* Marketing */}
    //                         <div>
    //                           <div className="text-[#9c7bfd] font-semibold mb-2">Marketing</div>
    //                           <ul className="border-l pl-4 space-y-1">
    //                             <li><NavigationMenuLink asChild><Link href="/projects/marketing">Digital Marketing</Link></NavigationMenuLink></li>
    //                             <li><NavigationMenuLink asChild><Link href="/projects/marketing">Social Media Marketing</Link></NavigationMenuLink></li>
    //                             {/* <li><NavigationMenuLink asChild><Link href="/projects/marketing">Content Marketing</Link></NavigationMenuLink></li> */}
    //                             <li><NavigationMenuLink asChild><Link href="/projects/marketing">Sales Strategy</Link></NavigationMenuLink></li>
    //                             {/* <li><NavigationMenuLink asChild><Link href="/projects/marketing">Leads Generation</Link></NavigationMenuLink></li> */}
    //                             {/* <li><NavigationMenuLink asChild><Link href="/projects/marketing">YouTube Marketing</Link></NavigationMenuLink></li>
    //                             <li><NavigationMenuLink asChild><Link href="/projects/marketing">Email Marketing</Link></NavigationMenuLink></li> */}
    //                           </ul>
    //                         </div>
    //                         {/* Design */}
    //                         <div>
    //                           <div className="text-[#9c7bfd] font-semibold mb-2 mt-8 lg:mt-0">Design</div>
    //                           <ul className="border-l pl-4 space-y-1">
    //                             <li><NavigationMenuLink asChild><Link href="/projects/design">Graphic Design</Link></NavigationMenuLink></li>
    //                             <li><NavigationMenuLink asChild><Link href="/projects/design">User Interface Design</Link></NavigationMenuLink></li>
    //                             {/* <li><NavigationMenuLink asChild><Link href="/projects/design">User Experience Design</Link></NavigationMenuLink></li>
    //                             <li><NavigationMenuLink asChild><Link href="/projects/design">User Experience Review</Link></NavigationMenuLink></li> */}
    //                           </ul>
    //                         </div>
    //                         {/* QA and DevOps */}
    //                         <div>
    //                           <div className="text-[#9c7bfd] font-semibold mb-2 mt-8 lg:mt-0">QA and DevOps</div>
    //                           <ul className="border-l pl-4 space-y-1">
    //                             {/* <li><NavigationMenuLink asChild><Link href="/projects/qa-and-devops">Quality Assurance and Consulting</Link></NavigationMenuLink></li> */}
    //                             <li><NavigationMenuLink asChild><Link href="/projects/qa-and-devops">Manual Testing</Link></NavigationMenuLink></li>
    //                             <li><NavigationMenuLink asChild><Link href="/projects/qa-and-devops">Pixel Perfect UI Testing</Link></NavigationMenuLink></li>
    //                             {/* <li><NavigationMenuLink asChild><Link href="/projects/qa-and-devops">Selenium Testing</Link></NavigationMenuLink></li>
    //                             <li><NavigationMenuLink asChild><Link href="/projects/qa-and-devops">Appium Automation</Link></NavigationMenuLink></li>
    //                             <li><NavigationMenuLink asChild><Link href="/projects/qa-and-devops">Test Automation in DevOps</Link></NavigationMenuLink></li> */}
    //                             {/* <li><NavigationMenuLink asChild><Link href="/projects/qa-and-devops">Server Monitoring and Alerts</Link></NavigationMenuLink></li> */}
    //                             <li><NavigationMenuLink asChild><Link href="/projects/qa-and-devops">DevOps Consulting</Link></NavigationMenuLink></li>
    //                           </ul>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </NavigationMenuContent>
    //                 </NavigationMenuItem>
    //               ) : (
    //                 <NavigationMenuItem key={item.name}>
    //                   <NavigationMenuLink asChild>
    //                     <Link
    //                       href={item.href}
    //                       className={`nav-item px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
    //                         pathname === item.href
    //                           ? "bg-gradient-to-r from-[#9c7bfd] to-[#C8B6FF] text-white shadow-lg"
    //                           : "text-gray-700 hover:text-purple-400 hover:bg-purple-50"
    //                       }`}
    //                     >
    //                       {item.name}
    //                     </Link>
    //                   </NavigationMenuLink>
    //                 </NavigationMenuItem>
    //               )
    //             )}
    //           </NavigationMenuList>
    //         </NavigationMenu>
    //       </div>

    //       {/* Mobile menu button */}
    //       <div className="md:hidden">
    //         <Button variant="ghost" size="sm" onClick={toggleMenu} className="nav-item">
    //           {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    //         </Button>
    //       </div>
    //     </div>

    //     {/* Mobile Navigation */}
    //     {isOpen && (
    //       <div className="md:hidden">
    //         <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md rounded-lg mt-2 shadow-lg">
    //           {navItems.map((item) => (
    //             <Link
    //               key={item.name}
    //               href={item.href}
    //               className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
    //                 pathname === item.href
    //                   ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
    //                   : "text-gray-700 hover:text-[#9c7bfd] hover:bg-purple-50"
    //               }`}
    //               onClick={() => setIsOpen(false)}
    //             >
    //               {item.name}
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </nav>
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-transperent">
            {/* Logo on the left */}
            <div className="flex items-center">
              <img
                src="https://i.postimg.cc/y6mgZBHc/Logo.png"
                alt="Website Logo"
                className="h-7 w-auto"
              />
              <span className="text-[#F5F5F5] ml-3 text-3xl font-bold">
                NEXAWORKS
              </span>
            </div>
            {/* Buttons on the right */}
            <div className="flex space-x-4">
              <button className="cursor-pointer px-4 py-2 text-[#31312F] bg-[#FF3F33] border border-[#FF3F33] rounded-full hover:bg-[#31312F] hover:border-[#F5F5F5] hover:text-[#F5F5F5] transition">
                Services
              </button>
              <button className="cursor-pointer text-[#F5F5F5] px-6 py-2 bg-transparent border border-[#F5F5F5] rounded-full hover:bg-white hover:text-[#31312F] transition">
                Works
              </button>
            </div>
          </nav>
  )
}
