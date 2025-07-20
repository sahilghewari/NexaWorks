export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] h-[400px] px-6 flex flex-col justify-center items-center ">

        {/* bg header ////////// */}
               <h1 className="z-0 text-centre text-[#e8e8e8] text-[300px] font-bold">NexaWorks</h1>

         {/* Footer links //////////// */} 

        <div className="z-50 mt-[-350px] mb-36 grid grid-cols-2 md:grid-cols-3 gap-36">

          {/* Services */}
          <div>
            <h3 className="text-[#31312F] font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
                 Automation Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
Artificial intelligence
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
                  Website development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
                  Android / IOS app development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
                  Android app development
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-[#31312F] font-semibold text-lg mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
                  Healthcare apps
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
                  On demand apps
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
                  Finance apps
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
                  Entertainment apps
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
                  Social networking apps
                </a>
              </li> */}
              <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
                  Education apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
                  Restaurant apps
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
                  Real estate apps
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="text-[#31312F] hover:text-orange-600">
                  More...
                </a>
              </li> */}
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="text-[#31312F] font-semibold text-lg mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800 font-sembold">
                  About
                </a>
              </li>
            </ul>
          </div>

        </div>

    </footer>
  )
}