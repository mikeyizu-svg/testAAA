import React from 'react';
import { Edit, Trophy, Bell, Palette, HelpCircle, ChevronRight, LogOut } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white pb-32">
       <div className="flex items-center justify-between pt-12 px-6 pb-6">
         <h1 className="text-xl font-bold">Profile</h1>
         <button className="p-2 rounded-full hover:bg-surface transition-colors">
           <Edit size={20} className="text-gray-400" />
         </button>
       </div>

       <div className="flex flex-col items-center pt-4 pb-8">
         <div className="relative mb-4">
           <div className="w-28 h-28 rounded-full border-4 border-surface p-1 relative overflow-hidden">
             <img src="https://picsum.photos/300/300?grayscale" alt="User" className="w-full h-full object-cover rounded-full" />
           </div>
           <div className="absolute bottom-2 right-2 w-6 h-6 bg-surface rounded-full flex items-center justify-center">
             <div className="w-4 h-4 bg-primary rounded-full shadow-glow"></div>
           </div>
         </div>
         <h2 className="text-2xl font-bold tracking-tight mb-1">Alex Doe</h2>
         <div className="flex items-center gap-2 bg-surface/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-surface">
           <Trophy size={14} className="text-primary" />
           <span className="text-primary font-semibold text-sm">1,245 Habits Completed</span>
         </div>
       </div>

       <div className="px-6 mb-8">
         <div className="grid grid-cols-2 gap-4">
           <div className="bg-surface p-4 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-1">
             <span className="text-3xl font-bold text-white">24</span>
             <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Current Streak</span>
           </div>
           <div className="bg-surface p-4 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-1">
             <span className="text-3xl font-bold text-white">85%</span>
             <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Success Rate</span>
           </div>
         </div>
       </div>

       <div className="px-6 space-y-4">
         <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider px-2">Settings</h3>
         <div className="bg-surface rounded-2xl overflow-hidden shadow-sm border border-white/5">
           {[
             { icon: Bell, label: 'Reminders & Notifications' },
             { icon: Palette, label: 'Theme Settings', sub: 'Dark' },
             { icon: Trophy, label: 'Achievements' },
             { icon: HelpCircle, label: 'Help Center' },
           ].map((item, i) => (
             <button key={i} className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors group border-b border-white/5 last:border-0">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                   <item.icon size={20} />
                 </div>
                 <span className="font-medium text-base">{item.label}</span>
               </div>
               <div className="flex items-center gap-2">
                 {item.sub && <span className="text-xs text-gray-500">{item.sub}</span>}
                 <ChevronRight size={20} className="text-gray-400" />
               </div>
             </button>
           ))}
         </div>

         <div className="pt-4 pb-8">
           <button className="w-full py-3.5 rounded-xl border border-red-500/30 text-red-500 font-semibold hover:bg-red-500/10 transition-colors flex items-center justify-center gap-2 text-sm">
             <LogOut size={18} />
             Log Out
           </button>
           <p className="text-center text-xs text-gray-500 mt-6">Version 2.4.0 (Build 108)</p>
         </div>
       </div>
    </div>
  );
};

export default Profile;