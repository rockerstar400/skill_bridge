import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Icons ke liye

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About', href: '#about', active: false },
    { name: 'Services', href: '#services', active: false },
    { name: 'Contact', href: '#contact', active: false },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-md py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <div className="flex items-center">
          <a href="/">
            {/* YAHAN APNA PNG PATH DAALEIN */}
            <img 
              src="/path-to-your-logo.png" 
              alt="Skill Bridge Logo" 
              className="h-10 md:h-12 w-auto object-contain"
              onError={(e) => { e.target.src = "https://via.placeholder.com/150x50?text=SKILL+BRIDGE"; }} // Fallback agar image na mile
            />
          </a>
        </div>
        
        {/* CENTER LINKS (Desktop) */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[15px] font-semibold transition-all duration-300 hover:text-[#F99D2B] ${
                link.active ? 'text-[#F99D2B]' : 'text-slate-800'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-800 p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-6 px-10 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-bold ${
                link.active ? 'text-[#F99D2B]' : 'text-slate-800'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;