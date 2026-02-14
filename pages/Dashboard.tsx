import React, { useState } from 'react';
import HabitCard from '../components/HabitCard';
import { mockHabits } from '../mockData';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number>(23);

  const weekDays = [
    { day: 'M', date: 21 },
    { day: 'T', date: 22 },
    { day: 'W', date: 23 },
    { day: 'T', date: 24 },
    { day: 'F', date: 25 },
    { day: 'S', date: 26 },
  ];

  return (
    <div className="min-h-screen bg-background text-white pb-32">
      {/* Header */}
      <header className="pt-12 px-6 pb-4 flex justify-between items-start sticky top-0 bg-background/95 backdrop-blur-sm z-20">
        <div>
          <p className="text-sm font-medium text-gray-400 mb-1">Good Morning,</p>
          <h1 className="text-2xl font-bold tracking-tight">Alex Turner 👋</h1>
        </div>
        <div className="relative">
          <div className="w-12 h-12 rounded-full p-0.5 border-2 border-primary/30">
            <img 
              src="https://picsum.photos/200/200" 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
        </div>
      </header>

      {/* Calendar Strip */}
      <div className="px-6 py-4">
        <div className="flex justify-between items-center text-sm font-medium text-gray-400 mb-4">
          <span>October 2023</span>
          <button 
            onClick={() => setSelectedDate(23)} 
            className="text-primary cursor-pointer hover:text-primary-dark transition-colors"
          >
            Today
          </button>
        </div>
        <div className="flex justify-between items-center gap-2">
          {weekDays.map((d, i) => {
            const isActive = selectedDate === d.date;
            return (
              <button 
                key={i}
                onClick={() => setSelectedDate(d.date)}
                className={`flex flex-col items-center justify-center w-11 h-16 rounded-2xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary text-background shadow-glow scale-110 font-bold z-10' 
                    : 'bg-surface border border-white/5 text-gray-500 hover:bg-surface-light hover:scale-105'
                }`}
              >
                <span className="text-xs mb-1 opacity-80">{d.day}</span>
                <span className="text-lg">{d.date}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Daily Goal */}
      <div className="px-6 py-2 mb-6">
        <div className="bg-surface rounded-2xl p-4 flex items-center justify-between border border-white/5 shadow-lg">
          <div>
            <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Daily Goal</p>
            <p className="text-sm text-gray-300">You're <span className="text-white font-bold">60%</span> done today!</p>
          </div>
          <div className="w-24 h-2 bg-black/40 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[60%] rounded-full shadow-glow"></div>
          </div>
        </div>
      </div>

      {/* Habits List */}
      <div className="px-6 space-y-4">
        <h2 className="text-lg font-bold mb-2">
           {selectedDate === 23 ? 'Your Habits' : `Habits for Oct ${selectedDate}`}
        </h2>
        {/* In a real app, you would filter habits by date here. 
            For this UI demo, we show the same mock habits to populate the list. */}
        {mockHabits.map(habit => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-96 bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none -z-10"></div>
    </div>
  );
};

export default Dashboard;