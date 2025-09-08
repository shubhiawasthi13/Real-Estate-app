export default function Footer() {
  return (
    <footer
      className="text-white py-12 px-6"
      style={{ backgroundColor: "#1E3A8ACC" }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Newsletter */}
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-[50px] leading-tight md:leading-[100%] tracking-[1px]">
          Get in Touch with Us
        </h2>

        <p className="max-w-xl mx-auto font-poppins font-normal text-lg sm:text-xl md:text-[32px] leading-relaxed md:leading-[43px] tracking-[0.64px] text-gray-200">
          Subscribe now for exclusive property insights and deals!
        </p>

        {/* Email Input */}
        <div className="flex justify-center">
          <div className="flex w-full max-w-lg rounded-full overflow-hidden bg-gray-200">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-2 text-gray-900 focus:outline-none text-base sm:text-lg"
            />
            <button className="px-5 sm:px-6 py-2 m-2 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-950 transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 items-center text-gray-200 text-sm gap-6 text-center md:text-left">
        {/* Logo - Left */}
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <img
            src="https://propbot-real-estate-app.netlify.app/f_logo.png"
            alt="logo"
            className="w-6 h-6"        
 />
          <span className="font-poppins font-bold text-lg sm:text-xl md:text-[22px]">
            PropBot
          </span>
        </div>

        {/* Links - Center */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <li className="hover:text-white cursor-pointer">For Sale</li>
          <li className="hover:text-white cursor-pointer">Rentals</li>
          <li className="hover:text-white cursor-pointer">New Projects</li>
          <li className="hover:text-white cursor-pointer">Property News</li>
        </ul>

        {/* Copyright - Right */}
        <p className="text-gray-300 text-center md:text-right text-sm sm:text-base md:text-[15px]">
          @2025 PropBot. All rights reserved
        </p>
      </div>
    </footer>
  );
}

