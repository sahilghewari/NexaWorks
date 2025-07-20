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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#31312f]/95 backdrop-blur-md border-b border-[#C8C8C8]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-20">
          {/* Logo */}
          <Link href="/" className="nav-item ">
            <div className="text-2xl font-bold text-[#F5F5F5] flex flex-row items-center gap-3">
              <img
              
              src='https://i.postimg.cc/y6mgZBHc/Logo.png'
              width={40}
              height={40}
              alt="NexaWorks Logo"
              />
              <h1>NexaWorks</h1>
            </div>
          </Link>

          {/* Desktop Navigation using shadcn NavigationMenu */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-0 space-y-0 flex gap-x-10">
                {navItems.map((item) =>
                  item.name === "Projects" ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className={`nav-item px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        pathname === item.href
                          ? "bg-[#f5f5f5] text-stone-900 shadow-lg"
                          : "text-stone-900 cursor-pointer hover:text-[#31312f] hover:bg-[#E4E4E4]"
                      }`}>
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="fixed left-0 top-16 w-screen min-h-[300px] max-h-[80vh] overflow-auto bg-[#424242ff] z-50 flex justify-center items-start">
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-6 w-full max-w-7xl">
                            {/* Web Development */}
                            <div>
                              <div className="text-[#C8C8C8] font-semibold mb-2">Web Development</div>
                              <ul className="border-l border-[#C8C8C8]/40 pl-4 space-y-1">
                                <li>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href="/projects/web-development"
                                      className="text-[#C8C8C8] hover:text-[#F5F5F5] transition-colors"
                                    >
                                      Website Development
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              </ul>
                            </div>
                            {/* App Development */}
                            <div>
                              <div className="text-[#C8C8C8] font-semibold mb-2">App Development</div>
                              <ul className="border-l border-[#C8C8C8]/40 pl-4 space-y-1">
                                {/* <li><NavigationMenuLink asChild><Link href="/projects/app-development">Progressive Web App Development</Link></NavigationMenuLink></li> */}
                                <li>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href="/projects/app-development"
                                      className="text-[#C8C8C8] hover:text-[#F5F5F5] transition-colors"
                                    >
                                      Android/Ios App Development
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                                {/* <li><NavigationMenuLink asChild><Link href="/projects/app-development">Android App Development</Link></NavigationMenuLink></li>
                                <li><NavigationMenuLink asChild><Link href="/projects/app-development">Flutter App Development</Link></NavigationMenuLink></li> */}
                              </ul>
                            </div>
                            {/* Design */}
                            <div>
                              <div className="text-[#C8C8C8] font-semibold mb-2 mt-8 lg:mt-0">Design</div>
                              <ul className="border-l border-[#C8C8C8]/40 pl-4 space-y-1">
                                <li>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href="/projects/design"
                                      className="text-[#C8C8C8] hover:text-[#F5F5F5] transition-colors"
                                    >
                                      UI/UX Design
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                                <li>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href="/projects/design"
                                      className="text-[#C8C8C8] hover:text-[#F5F5F5] transition-colors"
                                    >
                                      User Interface Design
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              </ul>
                            </div>
                            {/* QA and DevOps */}
                            <div>
                              <div className="text-[#C8C8C8] font-semibold mb-2 mt-8 lg:mt-0">QA and DevOps</div>
                              <ul className="border-l border-[#C8C8C8]/40 pl-4 space-y-1">
                                {/* <li><NavigationMenuLink asChild><Link href="/projects/qa-and-devops">Quality Assurance and Consulting</Link></NavigationMenuLink></li> */}
                                <li>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href="/projects/qa-and-devops"
                                      className="text-[#C8C8C8] hover:text-[#F5F5F5] transition-colors"
                                    >
                                      Manual Testing
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                                <li>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href="/projects/qa-and-devops"
                                      className="text-[#C8C8C8] hover:text-[#F5F5F5] transition-colors"
                                    >
                                      Pixel Perfect UI Testing
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                                {/* <li><NavigationMenuLink asChild><Link href="/projects/qa-and-devops">Selenium Testing</Link></NavigationMenuLink></li>
                                <li><NavigationMenuLink asChild><Link href="/projects/qa-and-devops">Appium Automation</Link></NavigationMenuLink></li>
                                <li><NavigationMenuLink asChild><Link href="/projects/qa-and-devops">Test Automation in DevOps</Link></NavigationMenuLink></li> */}
                                {/* <li><NavigationMenuLink asChild><Link href="/projects/qa-and-devops">Server Monitoring and Alerts</Link></NavigationMenuLink></li> */}
                                <li>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href="/projects/qa-and-devops"
                                      className="text-[#C8C8C8] hover:text-[#F5F5F5] transition-colors"
                                    >
                                      DevOps Consulting
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={`nav-item px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            pathname === item.href
                              ? "bg-[#31312f] text-[#F5F5F5] shadow-lg"
                              : "text-[#F5F5F5] hover:text-[#F5F5F5] hover:bg-[#31312f]"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="nav-item">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#31312f]/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-[#31312f] to-[#C8C8C8] text-[#F5F5F5]"
                      : "text-[#F5F5F5] hover:text-[#31312f] hover:bg-[#E4E4E4]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
