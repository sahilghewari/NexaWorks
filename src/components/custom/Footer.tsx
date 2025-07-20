export default function Footer() {
  return (
    <footer className="bg-[#31312f] overflow-x-hidden px-4 sm:px-6 flex flex-col justify-center items-center py-12 sm:py-16">
      {/* bg header ////////// */}
      <h1 className="z-0 text-center text-[#424242ff] text-[80px] xs:text-[120px] sm:text-[180px] md:text-[250px] font-bold leading-none mb-4 sm:mb-0">NexaWorks</h1>

      {/* Footer links //////////// */}
      <div className="z-10 w-full max-w-2xl sm:max-w-3xl md:max-w-5xl mx-auto mt-[-40px] sm:mt-[-120px] md:mt-[-200px] mb-12 sm:mb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-16 md:gap-24">
        {/* Services */}
        <div>
          <h3 className="text-[#f5f5f5] font-semibold text-base sm:text-lg mb-2 sm:mb-4">Services</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-200">
            <li>
              <a href="#" className="hover:text-gray-200 font-semibold">
                Automation Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 font-semibold">
                Cloud Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 font-semibold">
                Artificial intelligence
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 font-semibold">
                Website development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 font-semibold">
                Android / IOS app development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 font-semibold">
                Android app development
              </a>
            </li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="text-[#f5f5f5] font-semibold text-base sm:text-lg mb-2 sm:mb-4">Industries</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-200">
            <li>
              <a href="#" className="hover:text-gray-200 font-semibold">
                Healthcare apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 font-semibold">
                Education apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 font-semibold">
                Restaurant apps
              </a>
            </li>
          </ul>
        </div>

        {/* Portfolio */}
        <div>
          <h3 className="text-[#c5c5c5] font-semibold text-base sm:text-lg mb-2 sm:mb-4">About Us</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-200">
            <li>
              <a href="#" className="hover:text-gray-200 font-semibold">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}