
import React from 'react';
import { Shield, Briefcase, Heart, Home, Gavel, Globe, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { title: 'Corporate Law', icon: <Briefcase size={22} />, desc: 'Strategic counsel for mergers, acquisitions, and compliance.' },
    { title: 'Family Matters', icon: <Heart size={22} />, desc: 'Discreet and compassionate management of personal estates.' },
    { title: 'Criminal Defense', icon: <Gavel size={22} />, desc: 'Vigorous defense strategies for high-stakes criminal litigation.' },
    { title: 'Private Equity', icon: <Home size={22} />, desc: 'Structuring and securing major real estate transactions.' },
    { title: 'IP Protection', icon: <Shield size={22} />, desc: 'Global protection for patents, trademarks, and creative assets.' },
    { title: 'Immigration', icon: <Globe size={22} />, desc: 'Seamless cross-border movement for executives and families.' },
  ];

  return (
    <div className="bg-[#0a0a0a] py-32 border-t border-white/5">
      <div className="container mx-auto px-6 text-center mb-24 reveal">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-legal-gold"></div>
          <span className="text-legal-gold uppercase tracking-[0.4em] text-[10px] font-bold">Specialized Practices</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">Expertise That Inspires <br /> Confidence</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          We offer a comprehensive suite of legal solutions tailored for individuals 
          and organizations navigating complex regulatory environments.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="reveal group p-12 rounded-[2.5rem] bg-[#121212] border border-white/5 hover:border-legal-gold/30 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(197,160,89,0.1)] transition-all duration-700 ease-out">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-legal-gold mb-8 group-hover:bg-legal-gold group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-white font-serif text-2xl mb-4 group-hover:text-legal-gold transition-colors duration-500">{service.title}</h3>
              <p className="text-white/70 leading-relaxed mb-8 text-sm font-medium">{service.desc}</p>
              
              <a href="#" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/80 group-hover:text-legal-gold transition-all duration-500">
                Practice Details 
                <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-legal-gold transition-all duration-500"></div>
                <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white transition-all duration-500" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;