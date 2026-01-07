
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0 scale-110 animate-[pulse_8s_infinite_alternate]">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
          alt="Legal Background"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8 animate-in slide-in-from-left-10 duration-700">
            <div className="h-[1px] w-12 bg-legal-gold"></div>
            <span className="text-legal-gold uppercase tracking-[0.4em] text-[10px] font-bold">Premier Legal Partnership</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-[1] animate-in slide-in-from-bottom-10 duration-1000">
            Redefining <br />
            <span className="italic text-legal-gold/90 font-light">Legal Excellence</span>
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-medium animate-in fade-in duration-1000 delay-300">
            Precision in practice. Integrity in counsel. We deliver elite representation across complex jurisdictions with unyielding dedication.
          </p>
          
          <div className="flex flex-wrap gap-8 items-center animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
            <button className="flex items-center gap-4 group">
              <div className="relative overflow-hidden bg-white/5 border border-white/10 group-hover:border-legal-gold/50 px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 shadow-xl group-hover:shadow-legal-gold/10">
                <span className="relative z-10 text-white group-hover:text-legal-gold transition-colors duration-500">Begin Consultation</span>
                <div className="absolute inset-0 bg-legal-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="w-14 h-14 rounded-full border border-legal-gold/30 flex items-center justify-center group-hover:bg-legal-gold group-hover:border-legal-gold transition-all duration-500 group-hover:scale-110">
                <ArrowRight size={20} className="text-legal-gold group-hover:text-white transition-colors duration-500 group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none">
        <h2 className="text-[25vw] font-serif leading-none -mb-10 translate-x-10 translate-y-10">JUSTICE</h2>
      </div>
    </div>
  );
};

export default Hero;