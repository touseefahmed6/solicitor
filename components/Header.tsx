
import React from 'react';
import { Mail, Phone, Scale, Clock } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Find Lawyers', href: '#about' },
    { name: 'Contact us', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-[#0d0d0d]/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-4">
          {/* Top Bar - Enhanced Visibility */}
          <div className={`flex justify-between items-center text-[11px] border-b border-white/10 pb-3 overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? 'h-0 opacity-0 mb-0 border-none' : 'h-7 opacity-100 mb-2'}`}>
            <div className="flex gap-8">
              <a href="mailto:info@lexpremium.design" className="flex items-center gap-2.5 group/top transition-all duration-300 text-white hover:text-legal-gold font-medium">
                <Mail size={14} className="text-legal-gold group-hover/top:scale-110 transition-transform" /> 
                <span className="tracking-wider group-hover/top:translate-x-0.5 transition-transform">info@lexpremium.design</span>
              </a>
              <a href="tel:+61211000000" className="flex items-center gap-2.5 group/top transition-all duration-300 text-white hover:text-legal-gold border-l border-white/10 pl-8 font-medium">
                <Phone size={14} className="text-legal-gold group-hover/top:scale-110 transition-transform" /> 
                <span className="tracking-wider group-hover/top:translate-x-0.5 transition-transform">+61 211 000 000</span>
              </a>
            </div>
            {/* Working Hours */}
            <div className="flex items-center gap-2 text-white cursor-default transition-all duration-300 group/top">
              <Clock size={14} className="text-legal-gold group-hover/top:scale-110 transition-transform" />
              <span className="tracking-[0.15em] uppercase font-bold text-[10px]">Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>

          {/* Main Nav */}
          <div className="flex justify-between items-center">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center">
                {/* Decorative Outer Circle */}
                <div className="absolute inset-[-4px] border border-legal-gold/30 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                {/* Logo Circle */}
                <div className="w-10 h-10 bg-legal-gold rounded-full flex items-center justify-center group-hover:rotate-[15deg] transition-transform duration-500 shadow-[0_0_20px_rgba(197,160,89,0.3)] z-10">
                  <Scale size={22} className="text-black" strokeWidth={2.5} />
                </div>
              </div>
              <div className="leading-tight">
                <div className="text-white font-serif font-bold text-lg tracking-widest uppercase group-hover:text-legal-gold transition-colors duration-500">LEXPREMIUM</div>
                <div className="text-[10px] text-white uppercase tracking-[0.2em] font-medium">Solicitors & Attorneys</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link text-xs text-gray-400 hover:text-white transition-colors font-semibold uppercase tracking-widest py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <button className="relative overflow-hidden group bg-transparent border border-white/10 px-8 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-500">
              <span className="relative z-10 text-white group-hover:text-black transition-colors duration-500">Free Consultation</span>
              <div className="absolute inset-0 bg-legal-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
