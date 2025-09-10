export default function Footer() {
  return (
    <footer
      className="text-white py-12 px-6"
      style={{ backgroundColor: "#1E3A8ACC" }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Headline */}
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-[50px] leading-snug sm:leading-tight md:leading-[75px] tracking-[1px] mx-auto text-center">
          Get in Touch with Us
        </h2>

        {/* Paragraph */}
        <p
          className="font-poppins font-normal text-lg sm:text-xl md:text-[32px] leading-7 sm:leading-9 md:leading-[43px] tracking-[0.02em] mx-auto text-center text-gray-200"
          style={{ maxWidth: "515px" }}
        >
          Subscribe now for exclusive property insights and deals!
        </p>

        {/* Email Input */}
        <div className="flex flex-col sm:flex-row w-full max-w-[602px] h-auto sm:h-[65px] mx-auto rounded-[34px] overflow-hidden bg-[#D9D9D9] items-center justify-center gap-2 px-2 py-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-2 sm:py-0 h-[50px] sm:h-full font-poppins font-normal text-base sm:text-lg md:text-[18px] leading-[100%] tracking-[0px] focus:outline-none text-gray-900 rounded-[34px] w-full sm:w-auto"
          />
          <button className="bg-blue-900 text-white font-poppins font-normal text-lg sm:text-xl md:text-[24px] leading-7 sm:leading-9 md:leading-[43px] tracking-[0.02em] hover:bg-blue-950 transition rounded-[99px] px-5 py-2 flex items-center justify-center w-full sm:w-[148px]">
            Submit
          </button>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 items-center text-gray-200 gap-6 text-center md:text-left">
        {/* Logo - Left */}
        <div className="flex items-center gap-2 justify-center md:justify-start w-full md:w-[176px] h-[41px]">
          <img
            src="https://propbot-real-estate-app.netlify.app/f_logo.png"
            alt="logo"
            className="w-6 h-6"
          />
          <span className="font-poppins font-bold text-base sm:text-lg md:text-[22px] leading-[100%] tracking-[0.02em]">
            PropBot
          </span>
        </div>

        {/* Links - Center */}
        <ul className="flex flex-nowrap justify-center gap-3 sm:gap-6 overflow-x-auto md:overflow-visible">
          {["For Sale", "Rentals", "New Projects", "Property News"].map(
            (link) => (
              <li
                key={link}
                className="hover:text-white cursor-pointer whitespace-nowrap font-poppins font-normal text-sm sm:text-base md:text-[16px] leading-[43px] tracking-[0.02em]"
              >
                {link}
              </li>
            )
          )}
        </ul>

        {/* Copyright - Right */}
        <p className="text-gray-300 text-center md:text-right text-sm sm:text-base md:text-[20px] leading-[43px] tracking-[0.02em] font-poppins font-normal mt-4 md:mt-0">
          @2025 PropBot. All rights reserved
        </p>
      </div>
    </footer>
  );
}
