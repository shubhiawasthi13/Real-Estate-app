import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../services/context/AuthContext"; // adjust path

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate(); // ✅ use here

  const handleLogout = async () => {
    await logout();       // sign out from Firebase
    navigate("/login");   // redirect to login page
    setMenuOpen(false);   // close mobile menu if open
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Buy", path: "/buy" },
    { name: "Rent", path: "/rent" },
    { name: "Sell", path: "/sell" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://propbot-real-estate-app.netlify.app/logo.png"
            alt="logo"
            className="w-6 h-6"
          />
          <span className="text-xl font-bold text-gray-800">PropBot</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-small relative">
          {links.map((link) => (
            <li key={link.name} className="relative pb-1">
              <Link
                to={link.path}
                onClick={() => setActive(link.name)}
                className={`cursor-pointer ${
                  active === link.name ? "text-blue-600" : "hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
              {active === link.name && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Auth Button */}
        {user ? (
          <button
            onClick={handleLogout} // ✅ navigate after logout
            className="hidden md:flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
          >
            Logout - {user.displayName}
          </button>
        ) : (
          <Link
            to="/register"
            className="hidden md:flex items-center gap-2 bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-900 transition"
          >
            Login / Register
            <span className="flex items-center justify-center w-4 h-4 rounded-full border border-white">
              <ArrowRight size={16} className="text-white" />
            </span>
          </Link>
        )}

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[60px] left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => {
                    setActive(link.name);
                    setMenuOpen(false);
                  }}
                  className={`cursor-pointer ${
                    active === link.name
                      ? "text-blue-600"
                      : "hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {user ? (
              <button
                onClick={handleLogout} // ✅ navigate after logout
                className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition w-fit"
              >
                Logout {user.displayName}
              </button>
            ) : (
              <Link
                to="/register"
                className="flex items-center gap-2 bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-900 transition w-fit"
              >
                Login / Register
                <span className="flex items-center justify-center w-4 h-4 rounded-full border border-white">
                  <ArrowRight size={16} className="text-white" />
                </span>
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
