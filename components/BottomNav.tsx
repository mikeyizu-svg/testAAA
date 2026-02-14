import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Home, BarChart2, History, User, Plus } from 'lucide-react';
import clsx from 'clsx';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/stats', icon: BarChart2, label: 'Stats' },
    { path: 'FAB', icon: Plus, label: '' }, // Placeholder for FAB
    { path: '/journal', icon: History, label: 'History' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="absolute bottom-0 w-full bg-surface/95 backdrop-blur-xl border-t border-white/5 z-50 pb-6 pt-2">
      <div className="flex justify-between items-end px-6 relative">
        {navItems.map((item, index) => {
          if (item.path === 'FAB') {
            return (
              <div key="fab" className="relative -top-8 flex justify-center w-1/5">
                <button
                  onClick={() => navigate('/new-habit')}
                  className="w-16 h-16 bg-primary rounded-full shadow-glow flex items-center justify-center text-background border-4 border-background hover:scale-105 active:scale-95 transition-transform duration-200"
                >
                  <Plus size={32} strokeWidth={3} />
                </button>
              </div>
            );
          }

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  "flex flex-col items-center gap-1 w-1/5 pb-2 transition-colors",
                  isActive ? "text-primary" : "text-gray-500 hover:text-gray-300"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    size={24}
                    className={clsx(isActive && "drop-shadow-[0_0_8px_rgba(19,236,91,0.5)]")}
                  />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;