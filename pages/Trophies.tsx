import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Flame, Sun, Droplet, Lock, Medal, Moon, Flower2, Footprints, BookOpen, Share2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockAchievements } from '../mockData';
import { Achievement } from '../types';

const iconMap: Record<string, any> = {
  flame: Flame,
  sun: Sun,
  droplet: Droplet,
  medal: Medal,
  moon: Moon,
  flower: Flower2,
  walk: Footprints,
  book: BookOpen
};

const Trophies: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTrophy, setSelectedTrophy] = useState<Achievement | null>(null);

  const totalUnlocked = mockAchievements.filter(a => !a.locked).length;
  const progressPercent = (totalUnlocked / mockAchievements.length) * 100; // Adjusted for visual

  return (
    <div className="min-h-screen bg-background text-white pb-24 relative">
       <header className="px-6 pt-12 pb-6 flex flex-col gap-4 z-10">
         <div className="flex justify-between items-start">
           <div>
             <h1 className="text-2xl font-bold mb-1 tracking-tight">Trophy Cabinet</h1>
             <p className="text-gray-400 text-sm">Level 5 • Consistency King</p>
           </div>
           <div className="h-12 w-12 rounded-full border-2 border-primary p-0.5 overflow-hidden shadow-glow">
              <img src="https://picsum.photos/200/200?random=1" className="w-full h-full object-cover rounded-full" alt="Avatar"/>
           </div>
         </div>

         <div className="bg-surface rounded-xl p-4 border border-primary/20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
           <div className="flex justify-between items-end mb-2 relative z-10">
             <span className="text-sm font-semibold text-primary">{totalUnlocked} / {mockAchievements.length} Unlocked</span>
             <span className="text-xs text-gray-400">24% Complete</span>
           </div>
           <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden relative z-10">
              <div className="h-full bg-primary rounded-full shadow-glow" style={{width: '24%'}}></div>
           </div>
         </div>

         <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            <button className="px-5 py-2 rounded-full bg-primary text-black font-bold text-sm shadow-glow whitespace-nowrap">All</button>
            <button className="px-5 py-2 rounded-full bg-surface border border-gray-700 text-gray-300 text-sm font-medium whitespace-nowrap">Earned</button>
            <button className="px-5 py-2 rounded-full bg-surface border border-gray-700 text-gray-300 text-sm font-medium whitespace-nowrap">Locked</button>
         </div>
       </header>

       <main className="px-6 pb-6">
         <div className="grid grid-cols-2 gap-4">
            {mockAchievements.map(achievement => {
              const Icon = iconMap[achievement.icon] || Medal;
              return (
                <div 
                  key={achievement.id}
                  onClick={() => !achievement.locked && setSelectedTrophy(achievement)}
                  className={`group relative bg-surface rounded-xl p-4 border flex flex-col items-center justify-center gap-3 aspect-square transition-all
                    ${achievement.locked ? 'border-gray-800 opacity-60' : 'border-primary/30 shadow-lg cursor-pointer hover:shadow-glow hover:scale-[1.02]'}`}
                >
                  <div className="absolute top-3 right-3">
                    {achievement.locked 
                      ? <Lock size={14} className="text-gray-500" />
                      : <CheckCircle2 size={14} className="text-primary opacity-80" />
                    }
                  </div>
                  
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center relative
                    ${achievement.locked ? 'bg-gray-800 grayscale' : 'bg-primary/10 shadow-glow'}`}>
                     <Icon size={28} className={achievement.locked ? 'text-gray-400' : 'text-primary'} />
                     {!achievement.locked && <div className="absolute inset-0 bg-primary/20 blur-md rounded-full"></div>}
                  </div>

                  <div className="text-center">
                    <h3 className={`font-bold text-sm leading-tight mb-1 ${achievement.locked ? 'text-gray-300' : 'text-white'}`}>{achievement.title}</h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide">
                      {achievement.locked ? achievement.description.slice(0, 15) + '...' : `Earned ${achievement.earnedDate}`}
                    </p>
                  </div>
                </div>
              );
            })}
         </div>
       </main>
       
       {/* Modal Overlay */}
       {selectedTrophy && (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 animate-in fade-in duration-200">
            <div className="w-full max-w-sm bg-[#1a2e20] border border-primary p-6 rounded-2xl shadow-2xl relative">
               <button onClick={() => setSelectedTrophy(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                 <X size={24} />
               </button>
               <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center shadow-[0_0_30px_rgba(19,236,91,0.3)] mb-6 relative">
                     {React.createElement(iconMap[selectedTrophy.icon], { size: 48, className: "text-primary" })}
                     <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse"></div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedTrophy.title}</h2>
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Unlocked</span>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {selectedTrophy.description}
                  </p>
                  <button className="w-full py-3 bg-primary hover:bg-green-400 text-black font-bold rounded-lg shadow-glow transition-colors flex items-center justify-center gap-2">
                    <Share2 size={18} />
                    Share Achievement
                  </button>
               </div>
            </div>
         </div>
       )}
    </div>
  );
};

export default Trophies;