
import React from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="bg-[#121212] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-legal-gold"></div>
                <span className="text-legal-gold uppercase tracking-[0.3em] text-[10px] font-bold">Get in Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-10">Request A Free <br /> Consultation</h2>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/70 block mb-3 font-bold">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#1a1a1a] border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-legal-gold/60 focus:ring-1 focus:ring-legal-gold/30 transition-all duration-300" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/70 block mb-3 font-bold">Contact Number</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#1a1a1a] border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-legal-gold/60 focus:ring-1 focus:ring-legal-gold/30 transition-all duration-300" 
                      placeholder="+61 --- --- ---" 
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/70 block mb-3 font-bold">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-[#1a1a1a] border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-legal-gold/60 focus:ring-1 focus:ring-legal-gold/30 transition-all duration-300" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/70 block mb-3 font-bold">Interested Service</label>
                  <div className="relative">
                    <select className="w-full bg-[#1a1a1a] border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-legal-gold/60 focus:ring-1 focus:ring-legal-gold/30 transition-all duration-300 appearance-none cursor-pointer">
                      <option className="bg-[#121212]">Select A Service</option>
                      <option className="bg-[#121212]">Corporate Law</option>
                      <option className="bg-[#121212]">Family Matters</option>
                      <option className="bg-[#121212]">Real Estate</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <button type="submit" className="group flex items-center gap-4 bg-legal-gold text-black font-bold uppercase tracking-widest text-[11px] px-12 py-5 rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500">
                  Submit Inquiry
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
            
            <div className="relative hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop" 
                alt="Office" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#121212]"></div>
              
              <div className="absolute bottom-12 right-12 text-right">
                <p className="text-legal-gold font-serif text-3xl mb-4">"Defending your <br /> legacy with honor."</p>
                <div className="flex flex-col items-end">
                  <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.3em]">— Managing Partner</span>
                  <div className="w-12 h-px bg-legal-gold mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
