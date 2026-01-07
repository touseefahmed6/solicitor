
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Scale } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    company: ['About Us', 'Careers', 'Client Testimonials', 'Legal Blog', 'Terms of Service'],
    locations: ['Lawyers in Sydney', 'Lawyers in Melbourne', 'Lawyers in Brisbane', 'Lawyers in Perth', 'View All Locations'],
  };

  // Fix: Defined ListItem with React.FC to correctly support intrinsic props like 'key'
  const ListItem: React.FC<{ text: string }> = ({ text }) => (
    <li>
      <a 
        href="#" 
        className="group/item flex items-center text-sm text-white/60 hover:text-white transition-all duration-300"
      >
        <span className="w-0 h-[1px] bg-legal-gold group-hover/item:w-4 mr-0 group-hover/item:mr-3 transition-all duration-300 opacity-0 group-hover/item:opacity-100"></span>
        <span className="group-hover/item:translate-x-1 transition-transform duration-300">{text}</span>
      </a>
    </li>
  );

  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 group">
              <div className="relative flex items-center justify-center mr-2">
                <div className="absolute inset-[-2px] border border-legal-gold/20 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-8 h-8 bg-legal-gold rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 z-10 shadow-[0_0_15px_rgba(197,160,89,0.2)]">
                  <Scale size={16} className="text-black" strokeWidth={2.5} />
                </div>
              </div>
              <div className="text-white font-serif font-bold text-xl tracking-widest uppercase">LEXPREMIUM</div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-8 max-w-xs font-medium">
              Pioneering legal excellence through strategic counsel and unyielding advocacy. Your global partner in complex legal landscapes.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 hover:border-white/30 border border-transparent hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
              Company
              <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-legal-gold"></div>
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map(link => <ListItem key={link} text={link} />)}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
              Find Lawyers
              <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-legal-gold"></div>
            </h4>
            <ul className="space-y-4">
              {footerLinks.locations.map(link => <ListItem key={link} text={link} />)}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-legal-gold"></div>
            </h4>
            <ul className="space-y-5 text-sm text-white/60">
              <li>
                <a href="mailto:info@lexpremium.design" className="group/contact flex items-center gap-3 hover:text-white transition-colors">
                  <span className="text-legal-gold group-hover/contact:scale-125 transition-transform">@</span> 
                  <span className="border-b border-transparent group-hover/contact:border-legal-gold/50 transition-all">info@lexpremium.design</span>
                </a>
              </li>
              <li>
                <a href="tel:+61211000000" className="group/contact flex items-center gap-3 hover:text-white transition-colors">
                  <span className="text-legal-gold font-bold group-hover/contact:scale-125 transition-transform">P:</span> 
                  <span className="border-b border-transparent group-hover/contact:border-legal-gold/50 transition-all">+61 211 000 000</span>
                </a>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="text-legal-gold font-bold mt-1">L:</span>
                <span className="hover:text-white transition-colors cursor-default">
                  123 Legal Plaza, Central Business District, <br /> Sydney, NSW 2000
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
            © 2024 LexPremium Solicitors. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-600 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-legal-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-legal-gold transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
