import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars as BarsIcon, FaTimes as TimesIcon } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/85 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Simple Red/Gold Logo */}
        <Link
          to="/"
          className="text-xl font-['Orbitron'] font-extrabold tracking-widest text-[#ffd700] hover:text-red-500 transition-colors"
        >
          SOUMYA
        </Link>

        {/* Large screen nav items */}
        <div className="hidden md:flex items-center gap-6 font-['Orbitron'] text-xs uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors py-1 ${
                isActive(link.path)
                  ? "text-[#ffd700] font-bold border-b border-[#ffd700]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors"
        >
          {mobileOpen ? <TimesIcon size={18} /> : <BarsIcon size={18} />}
        </button>

      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-black px-6 py-6 flex flex-col gap-4 font-['Orbitron'] text-xs tracking-widest uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`transition-colors py-1 ${
                isActive(link.path) ? "text-[#ffd700] font-bold" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

    </header>
  );
}

export default Navbar;