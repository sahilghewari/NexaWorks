import { Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#C8B6FF] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with logo and social icons */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <div className="text-purple-800 text-2xl font-bold">
              <span className="text-purple-800">◊</span> NexaWorks
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Linkedin className="w-5 h-5 text-purple-800" />
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
              <Instagram className="w-5 h-5 text-purple-800" />
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <h3 className="text-purple-800 font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-purple-800 font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  iOS app development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Android app development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Website development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Digital marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  ReactJS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  NodeJS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Flutter app development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  UI / UX design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Progressive web app development
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-800 hover:text-orange-600">
                  More...
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-purple-800 font-semibold text-lg mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Healthcare apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  On demand apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Finance apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Entertainment apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Social networking apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Education apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Restaurant apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Real estate apps
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-800 hover:text-orange-600">
                  More...
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="text-purple-800 font-semibold text-lg mb-4">Portfolio</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Hummcare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  CP Plus
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Across the globe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  OlineO
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Hobbycue
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  The Wallrus Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  QueerSpot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Swoop Motors
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-800 hover:text-orange-600">
                  More...
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-purple-800 font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
