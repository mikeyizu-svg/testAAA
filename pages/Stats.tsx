import React from 'react';
import { Flame, TrendingUp, Trophy, Lightbulb } from 'lucide-react';

const Stats: React.FC = () => {

  // Mock data for heatmap
  const heatmapData = Array.from({ length: 28 }, (_, i) => {
    // Random intensity 0-4
    if (i === 27) return 0; // Today empty
    return Math.floor(Math.random() * 5);
  });

  const getIntensityClass = (level: number) => {
    switch(level) {
      case 0: return 'bg-surface-light border border-white/5';
      case 1: return 'bg-primary/20';
      case 2: return 'bg-primary/40';
      case 3: return 'bg-primary/70';
      case 4: return 'bg-primary shadow-glow';
      default: return 'bg-surface-light';
    }
  };

  return (
    <div className="min-h-screen bg-background text-white pb-32">
      <header className="relative px-6 pt-12 pb-4 flex items-center justify-center z-10 w-full">
        <h1 className="text-lg font-bold tracking-tight">Insights</h1>
      </header>

      <main className="px-6 space-y-8 pt-4">
        {/* Streak Hero */}
        <section className="text-center py-4 relative group">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
           <div className="relative z-10 flex flex-col items-center">
             <div className="w-20 h-20 rounded-full bg-surface border border-primary/20 shadow-lg flex items-center justify-center mb-4">
               <Flame size={48} className="text-primary drop-shadow-[0_0_10px_rgba(19,236,91,0.6)]" fill="currentColor" />
             </div>
             <h2 className="text-5xl font-extrabold text-white tracking-tight mb-1">15 <span className="text-lg font-medium text-gray-400">Days</span></h2>
             <p className="text-sm font-medium text-primary uppercase tracking-widest">Current Streak</p>
             <p className="text-xs text-gray-400 mt-2">You're on fire! Keep it going.</p>
           </div>
        </section>

        {/* Mini Stats */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-surface p-4 rounded-2xl border border-white/5">
            <div className="flex items-center space-x-2 mb-2 text-gray-400">
               <div className="text-primary/80"><Trophy size={18} /></div>
               <span className="text-xs font-semibold uppercase">Total Habits</span>
            </div>
            <div className="text-2xl font-bold">142</div>
            <div className="text-xs text-green-500 flex items-center mt-1">
              <TrendingUp size={12} className="mr-1" /> +12%
            </div>
          </div>
          <div className="bg-surface p-4 rounded-2xl border border-white/5">
             <div className="flex items-center space-x-2 mb-2 text-gray-400">
               <div className="text-primary/80"><Trophy size={18} /></div>
               <span className="text-xs font-semibold uppercase">Best Day</span>
            </div>
            <div className="text-2xl font-bold">Tue</div>
            <div className="text-xs text-gray-400 mt-1">Most consistent</div>
          </div>
        </section>

        {/* Heatmap */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-lg font-bold">Consistency</h3>
            <span className="text-xs text-gray-400 bg-surface px-2 py-1 rounded border border-white/10">This Month</span>
          </div>
          <div className="bg-surface p-5 rounded-2xl border border-white/5">
             <div className="grid grid-cols-7 gap-1 mb-2 text-center text-[10px] text-gray-500 uppercase">
               {['M','T','W','T','F','S','S'].map((d,i) => <div key={i}>{d}</div>)}
             </div>
             <div className="grid grid-cols-7 gap-2">
                {heatmapData.map((intensity, i) => (
                  <div key={i} className={`aspect-square rounded-md ${getIntensityClass(intensity)} transition-all duration-300 hover:scale-110`}></div>
                ))}
             </div>
             <div className="flex justify-between items-center mt-4 text-[10px] text-gray-400">
               <span>Less</span>
               <div className="flex gap-1">
                 {[1,2,3,4].map(l => <div key={l} className={`w-2 h-2 rounded-sm ${getIntensityClass(l)}`}></div>)}
               </div>
               <span>More</span>
             </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section>
          <h3 className="text-lg font-bold mb-4">Focus Areas</h3>
          <div className="bg-surface p-6 rounded-2xl border border-white/5 space-y-6">
            {[
              { label: 'Health', val: 85, color: 'bg-primary' },
              { label: 'Mind', val: 60, color: 'bg-primary/60' },
              { label: 'Productivity', val: 92, color: 'bg-primary/90' }
            ].map(area => (
              <div key={area.label}>
                 <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${area.color}`}></span> {area.label}
                    </span>
                    <span className="font-bold text-gray-300">{area.val}%</span>
                 </div>
                 <div className="w-full h-3 bg-black/30 rounded-full overflow-hidden">
                    <div className={`h-full ${area.color} rounded-full`} style={{ width: `${area.val}%`}}></div>
                 </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Tip */}
        <div className="bg-gradient-to-r from-surface to-background border border-primary/20 p-5 rounded-2xl relative overflow-hidden">
           <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10 flex gap-4 items-start">
             <div className="p-2 bg-primary/10 rounded-lg text-primary">
               <Lightbulb size={24} />
             </div>
             <div>
               <h4 className="font-bold text-white mb-1">Tip of the day</h4>
               <p className="text-xs text-gray-300 leading-relaxed">Consistency beats intensity. It's better to do 5 minutes every day than 1 hour once a week.</p>
             </div>
           </div>
        </div>

      </main>
    </div>
  );
};

export default Stats;