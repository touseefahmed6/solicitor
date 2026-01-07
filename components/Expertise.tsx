
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <div className="py-32 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group perspective-1000">
          <div className="absolute -inset-6 bg-legal-gold/5 rounded-[3rem] transition-all duration-1000 group-hover:bg-legal-gold/10 group-hover:scale-105 group-hover:-rotate-1"></div>
          <div className="relative z-10 overflow-hidden rounded-[3rem] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
              alt="Legal Team" 
              className="w-full aspect-[4/5] md:aspect-[4/3] object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
          </div>
          
          {/* Floating Experience Badge - Refined to match screenshot */}
          <div className="absolute -bottom-6 -right-6 z-20 bg-[#1a1a1a]/90 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl border border-white/5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 min-w-[180px]">
             <div className="text-legal-gold font-serif text-4xl font-bold leading-none mb-2">25+</div>
             <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] leading-tight">Years of <br /> Professional Practice</div>
          </div>
        </div>
        
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-10 bg-legal-gold"></div>
            <span className="text-legal-gold uppercase tracking-[0.3em] text-[10px] font-bold">Elite Strategic Counsel</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-[1.15]">
            Global Perspective <br /> 
            <span className="italic font-light">Local Expertise</span>
          </h2>
          
          <p className="text-gray-400 leading-relaxed text-lg mb-10">
            We operate at the intersection of traditional values and modern legal challenges. 
            Our partners combine decades of experience with a forward-thinking approach 
            to protect your interests in an evolving global landscape.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-legal-gold/20 hover:bg-[#1a1a1a] transition-all duration-500 group">
              <h4 className="text-white font-serif text-3xl mb-1 italic group-hover:text-legal-gold transition-colors">95.0%</h4>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Case Success Rate</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-legal-gold/20 hover:bg-[#1a1a1a] transition-all duration-500 group">
              <h4 className="text-white font-serif text-3xl mb-1 italic group-hover:text-legal-gold transition-colors">4.9/5</h4>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Client Satisfaction</p>
            </div>
          </div>
          
          <button className="flex items-center gap-4 group">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] group-hover:text-legal-gold transition-colors duration-500">Firm Methodology</span>
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-legal-gold transition-all duration-500 group-hover:scale-110">
              <ArrowUpRight size={18} className="text-white group-hover:text-white transition-colors duration-500" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expertise;