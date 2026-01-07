
import React from 'react';
import { Scale, Users, MapPin, Headphones } from 'lucide-react';
import { Stat } from '../types';

const Stats: React.FC = () => {
  const stats: Stat[] = [
    { value: '16+', label: 'Practice Areas', icon: <Scale size={20} /> },
    { value: '45+', label: 'Senior Partners', icon: <Users size={20} /> },
    { value: '12', label: 'Global Offices', icon: <MapPin size={20} /> },
    { value: '24/7', label: 'Client Support', icon: <Headphones size={20} /> },
  ];

  return (
    <div className="bg-[#111111] py-24 relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-legal-gold/40 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group reveal">
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-8 group-hover:border-legal-gold/50 transition-all duration-700 group-hover:scale-110 shadow-lg">
                <div className="text-white group-hover:text-legal-gold transition-colors duration-500">
                  {stat.icon}
                </div>
              </div>
              <div className="text-5xl font-serif font-bold text-white mb-3 tracking-tighter group-hover:text-legal-gold transition-colors duration-700">{stat.value}</div>
              <div className="text-white/70 text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
