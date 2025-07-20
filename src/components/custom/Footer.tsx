export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-[#18181b] via-[#222226] to-[#2a2a2e] text-gray-400 py-12 px-4 border-t border-gray-800 overflow-hidden">
      {/* Universal NexaWorks background */}
      <span className="pointer-events-none select-none absolute inset-0 flex justify-center items-center z-0">
        <span className="text-center text-bg-gradient-to-r from-[#fff] to-[#626262] text-[80px] sm:text-[180px] md:text-[240px] font-bold leading-none opacity-10 whitespace-nowrap w-full">NexaWorks</span>
      </span>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        <span className="text-xs text-gray-200 mb-8">© 2025 NexaWorks. All rights reserved.</span>
        {/* Footer Links */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          {/* Services */}
          <div className="relative rounded-2xl shadow-lg p-8  backdrop-blur-[2px] bg-transparent flex flex-col items-start overflow-hidden">
            <h3 className="relative z-10 text-white font-semibold text-base sm:text-lg mb-2 sm:mb-4">Services</h3>
            <ul className="relative z-10 space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#00BFA6] font-semibold transition">Automation Solutions</a></li>
              <li><a href="#" className="hover:text-[#00BFA6] font-semibold transition">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-[#00BFA6] font-semibold transition">Artificial intelligence</a></li>
              <li><a href="#" className="hover:text-[#00BFA6] font-semibold transition">Website development</a></li>
              <li><a href="#" className="hover:text-[#00BFA6] font-semibold transition">Android / IOS app development</a></li>
              <li><a href="#" className="hover:text-[#00BFA6] font-semibold transition">Android app development</a></li>
            </ul>
          </div>
          {/* Industries */}
          <div className="relative rounded-2xl shadow-lg p-8  backdrop-blur-[2px] bg-transparent flex flex-col items-start overflow-hidden">
            <h3 className="relative z-10 text-white font-semibold text-base sm:text-lg mb-2 sm:mb-4">Industries</h3>
            <ul className="relative z-10 space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#00BFA6] font-semibold transition">Healthcare apps</a></li>
              <li><a href="#" className="hover:text-[#00BFA6] font-semibold transition">Education apps</a></li>
              <li><a href="#" className="hover:text-[#00BFA6] font-semibold transition">Restaurant apps</a></li>
            </ul>
          </div>
          {/* About Us */}
          <div className="relative rounded-2xl shadow-lg p-8  backdrop-blur-[2px] bg-transparent flex flex-col items-start overflow-hidden">
            <h3 className="relative z-10 text-white font-semibold text-base sm:text-lg mb-2 sm:mb-4">About Us</h3>
            <ul className="relative z-10 space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#00BFA6] font-semibold transition">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}