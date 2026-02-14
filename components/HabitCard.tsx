import React, { useState } from 'react';
import { Check, Droplets, BookOpen, Dumbbell, Moon, Flower2, Clock } from 'lucide-react';
import { Habit } from '../types';
import clsx from 'clsx';

const iconMap: Record<string, React.FC<any>> = {
  droplet: Droplets,
  book: BookOpen,
  dumbbell: Dumbbell,
  moon: Moon,
  flower: Flower2,
  clock: Clock
};

interface HabitCardProps {
  habit: Habit;
}

const HabitCard: React.FC<HabitCardProps> = ({ habit }) => {
  const [checked, setChecked] = useState(habit.completedToday);
  const Icon = iconMap[habit.icon] || Droplets;

  const getIconColor = (category: string) => {
    switch (category) {
      case 'health': return 'text-blue-400 bg-blue-500/10';
      case 'mind': return 'text-purple-400 bg-purple-500/10';
      case 'fitness': return 'text-orange-400 bg-orange-500/10';
      default: return 'text-teal-400 bg-teal-500/10';
    }
  };

  const colorClass = getIconColor(habit.category);

  return (
    <div className={clsx(
      "group relative rounded-2xl p-4 flex items-center gap-4 transition-all border border-transparent",
      checked ? "bg-surface border-primary/20" : "bg-surface border-white/5 hover:border-white/10"
    )}>
      <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center", colorClass)}>
        <Icon size={24} />
      </div>

      <div className="flex-1">
        <h3 className={clsx("font-bold text-sm", checked ? "text-primary" : "text-gray-100")}>
          {habit.name}
        </h3>
        {habit.goal > 1 && !checked ? (
           <div className="flex items-center gap-2 mt-1">
             <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={clsx("h-full rounded-full", categoryColor(habit.category))} 
                  style={{ width: `${(habit.progress / habit.goal) * 100}%` }}
                ></div>
             </div>
             <p className="text-xs text-gray-400">{habit.progress}/{habit.goal} {habit.category === 'mind' ? 'min' : ''}</p>
           </div>
        ) : (
          <p className={clsx("text-xs mt-0.5", checked ? "text-primary/70" : "text-gray-400")}>
            {checked ? "Goal Reached!" : (habit.time || "Anytime")}
          </p>
        )}
      </div>

      <button
        onClick={() => setChecked(!checked)}
        className={clsx(
          "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300",
          checked ? "bg-primary border-primary" : "border-gray-600 hover:border-primary/50"
        )}
      >
        <Check 
          size={16} 
          className={clsx(
            "text-background-dark transition-all duration-300", 
            checked ? "opacity-100 scale-100" : "opacity-0 scale-50"
          )} 
          strokeWidth={4}
        />
      </button>
    </div>
  );
};

const categoryColor = (cat: string) => {
  if (cat === 'mind') return 'bg-purple-400';
  if (cat === 'health') return 'bg-blue-400';
  if (cat === 'fitness') return 'bg-orange-400';
  return 'bg-teal-400';
};

export default HabitCard;