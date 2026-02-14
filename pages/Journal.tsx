import React from 'react';
import { Filter, ChevronLeft, ChevronRight, Check, X, Droplets, Footprints, Flower2, Book, Code } from 'lucide-react';

const Journal: React.FC = () => {
  const dates = [
    { d: 'M', n: 23, active: false },
    { d: 'T', n: 24, active: false },
    { d: 'W', n: 25, active: true },
    { d: 'T', n: 26, active: false },
    { d: 'F', n: 27, active: false },
    { d: 'S', n: 28, active: false },
    { d: 'S', n: 29, active: false },
  ];

  const historyData = [
    {
      date: '25', day: 'Wednesday', label: 'Today', progress: '4/6 Done',
      items: [
        { name: 'Drink 2L Water', time: '8:00 AM', status: 'done', icon: Droplets, color: 'text-indigo-400 bg-indigo-500/20' },
        { name: 'Morning Jog', time: '7:30 AM', status: 'done', icon: Footprints, color: 'text-orange-400 bg-orange-500/20' },
        { name: 'Meditation', time: '9:00 AM', status: 'done', icon: Flower2, color: 'text-pink-400 bg-pink-500/20' },
        { name: 'Read 10 pages', time: 'Missed', status: 'missed', icon: Book, color: 'text-emerald-400 bg-emerald-500/20' },
      ]
    },
    {
      date: '24', day: 'Tuesday', label: 'Yesterday', progress: '2/3 Done',
      items: [
        { name: 'Morning Jog', time: '7:45 AM', status: 'done', icon: Footprints, color: 'text-orange-400 bg-orange-500/20' },
        { name: 'Study Swift', time: 'Missed', status: 'missed', icon: Code, color: 'text-blue-400 bg-blue-500/20' },
        { name: 'Drink 2L Water', time: '10:00 PM', status: 'done', icon: Droplets, color: 'text-indigo-400 bg-indigo-500/20' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-white pb-32 flex flex-col">
       <header className="px-6 pt-12 pb-2 bg-background z-10 sticky top-0">
         <div className="flex justify-between items-center mb-6">
           <h1 className="text-2xl font-bold tracking-tight">Journal</h1>
           <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
             <Filter size={20} className="text-gray-400" />
           </button>
         </div>
         
         {/* Month Selector */}
         <div className="flex items-center justify-between bg-white/5 rounded-xl p-2 mb-2 border border-white/10">
            <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400"><ChevronLeft size={20} /></button>
            <span className="font-bold">October 2023</span>
            <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400"><ChevronRight size={20} /></button>
         </div>

         {/* Mini Calendar */}
         <div className="flex justify-between pt-4 pb-2 text-center text-xs text-gray-400 font-medium">
           {dates.map((d, i) => (
             <div key={i} className={`flex flex-col items-center gap-1 ${d.active ? 'text-primary' : 'opacity-50'}`}>
               <span>{d.d}</span>
               <div className={`w-8 h-8 flex items-center justify-center rounded-full ${d.active ? 'bg-primary/20 font-bold' : ''}`}>
                 {d.n}
               </div>
             </div>
           ))}
         </div>
       </header>

       <main className="flex-1 px-6 pt-4 relative">
          {/* Timeline Line */}
          <div className="absolute left-[43px] top-4 bottom-0 w-0.5 bg-white/10 -z-10"></div>

          {historyData.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-8">
               {/* Day Header */}
               <div className="flex items-center gap-4 mb-4 bg-background py-2 sticky top-[180px] z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 border-background shadow-lg
                    ${day.label === 'Today' ? 'bg-primary text-background shadow-glow' : 'bg-white/10 text-gray-400'}`}>
                    {day.date}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">{day.label === 'Today' || day.label === 'Yesterday' ? day.label : `Mon, Oct ${day.date}`}</h2>
                    <p className="text-xs text-gray-400">{day.day}, October</p>
                  </div>
                  <div className={`ml-auto text-xs font-semibold px-2 py-1 rounded 
                    ${day.label === 'Today' ? 'bg-primary/20 text-primary' : 'bg-white/10 text-gray-400'}`}>
                    {day.progress}
                  </div>
               </div>

               {/* Items */}
               <div className="space-y-3 pl-14">
                 {day.items.map((item, i) => (
                   <div key={i} className={`group flex items-center justify-between p-4 rounded-xl border border-white/5 transition-all shadow-sm
                     ${item.status === 'missed' ? 'bg-white/5 opacity-75 grayscale-[0.3]' : 'bg-white/5 hover:border-primary/50'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color}`}>
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-gray-100">{item.name}</h3>
                          <p className={`text-xs ${item.status === 'missed' ? 'text-red-400' : 'text-gray-400'}`}>{item.time}</p>
                        </div>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                        ${item.status === 'missed' ? 'bg-white/10 text-gray-500' : 'bg-primary text-background'}`}>
                         {item.status === 'missed' ? <X size={16} /> : <Check size={16} strokeWidth={3} />}
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          ))}

          {/* Loading dots at bottom */}
          <div className="flex justify-center py-6">
            <div className="w-2 h-2 rounded-full bg-white/20 mx-1 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-white/20 mx-1 animate-pulse delay-75"></div>
            <div className="w-2 h-2 rounded-full bg-white/20 mx-1 animate-pulse delay-150"></div>
          </div>
       </main>
    </div>
  );
};

export default Journal;