import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Edit2, Droplet, Dumbbell, BookOpen, Flower2, Moon, Activity, Utensils, 
  Plus, Bell, Palette, ChevronRight, Heart, Brain, Briefcase, Tag 
} from 'lucide-react';

const NewHabit: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('health');
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [customCategoryName, setCustomCategoryName] = useState('');

  const categories = [
    { id: 'health', label: 'Health', icon: Heart },
    { id: 'fitness', label: 'Fitness', icon: Activity },
    { id: 'mind', label: 'Mind', icon: Brain },
    { id: 'productivity', label: 'Work', icon: Briefcase },
  ];
  
  return (
    <div className="min-h-screen bg-background text-white flex flex-col">
      <header className="px-6 py-5 pt-12 flex items-center justify-between sticky top-0 z-20 bg-background/80 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="text-gray-400 font-medium hover:text-white transition-colors">Cancel</button>
        <h1 className="text-lg font-bold absolute left-1/2 -translate-x-1/2">New Habit</h1>
        <div className="w-[50px]"></div>
      </header>

      <main className="flex-1 px-6 pb-24 overflow-y-auto pt-4">
        {/* Name Input */}
        <div className="mt-4 mb-8">
          <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Habit Name</label>
          <div className="relative">
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Drink Water"
              className="w-full bg-surface border-0 rounded-2xl py-5 pl-5 pr-12 text-xl font-bold placeholder:text-gray-600 focus:ring-2 focus:ring-primary shadow-lg transition-all text-white"
              autoFocus
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600">
              <Edit2 size={24} />
            </span>
          </div>
        </div>

        {/* Icon Selection */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Select Icon</label>
          <div className="grid grid-cols-4 gap-4">
            <button className="aspect-square rounded-2xl bg-primary text-background flex items-center justify-center shadow-glow transition-transform active:scale-95 ring-offset-2 ring-offset-background">
              <Droplet size={32} strokeWidth={2.5} />
            </button>
            {[Dumbbell, BookOpen, Flower2, Moon, Activity, Utensils].map((Icon, i) => (
              <button key={i} className="aspect-square rounded-2xl bg-surface hover:bg-white/5 text-gray-500 hover:text-primary flex items-center justify-center transition-all active:scale-95">
                <Icon size={32} strokeWidth={2} />
              </button>
            ))}
             <button className="aspect-square rounded-2xl bg-surface hover:bg-white/5 text-gray-500 hover:text-primary flex items-center justify-center transition-all active:scale-95 border-2 border-dashed border-gray-700">
                <Plus size={32} />
             </button>
          </div>
        </div>

        {/* Category Selection */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Category</label>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setCategory(cat.id);
                  setIsCustomCategory(false);
                }}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all border border-transparent ${
                  category === cat.id && !isCustomCategory
                    ? 'bg-primary text-background shadow-glow font-bold'
                    : 'bg-surface text-gray-400 hover:bg-white/5 hover:text-white hover:border-white/10'
                }`}
              >
                <cat.icon size={18} />
                {cat.label}
              </button>
            ))}
            <button
              onClick={() => setIsCustomCategory(true)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all border border-transparent ${
                isCustomCategory
                  ? 'bg-primary text-background shadow-glow font-bold'
                  : 'bg-surface text-gray-400 hover:bg-white/5 hover:text-white hover:border-white/10'
              }`}
            >
              <Tag size={18} />
              Custom
            </button>
          </div>
          
          {isCustomCategory && (
            <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <input
                type="text"
                value={customCategoryName}
                onChange={(e) => setCustomCategoryName(e.target.value)}
                placeholder="Enter custom category name..."
                className="w-full bg-surface border border-white/10 rounded-xl py-4 px-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                autoFocus
              />
            </div>
          )}
        </div>

        {/* Frequency */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Frequency</label>
          <div className="bg-surface p-1.5 rounded-2xl flex">
            <button className="flex-1 py-3 px-4 rounded-xl bg-primary text-background font-bold text-sm transition-all shadow-sm">Daily</button>
            <button className="flex-1 py-3 px-4 rounded-xl text-gray-400 hover:bg-white/5 font-medium text-sm transition-all">Weekly</button>
            <button className="flex-1 py-3 px-4 rounded-xl text-gray-400 hover:bg-white/5 font-medium text-sm transition-all">Specific</button>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Details</label>
          
          <div className="bg-surface rounded-2xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <Bell size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">Reminder</span>
                <span className="text-xs text-gray-400">08:00 AM</span>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="bg-surface rounded-2xl p-5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-900/30 text-blue-400 flex items-center justify-center">
                <Palette size={20} />
              </div>
              <span className="font-bold text-white">Theme Color</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary border-2 border-gray-700 shadow-sm"></div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          </div>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background via-background to-transparent pt-12">
         <button className="w-full bg-primary text-background font-bold text-lg py-4 rounded-2xl shadow-glow hover:shadow-lg hover:-translate-y-1 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <Plus size={24} strokeWidth={3} />
            Create Habit
         </button>
      </div>
    </div>
  );
};

export default NewHabit;