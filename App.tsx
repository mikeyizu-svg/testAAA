import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Stats from './pages/Stats';
import Journal from './pages/Journal';
import Trophies from './pages/Trophies';
import Profile from './pages/Profile';
import NewHabit from './pages/NewHabit';
import BottomNav from './components/BottomNav';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  // Hide bottom nav on New Habit screen for immersive feel
  const showNav = location.pathname !== '/new-habit';

  return (
    <div className="flex justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-background min-h-screen relative flex flex-col shadow-2xl overflow-hidden">
        <main className={`flex-1 overflow-y-auto no-scrollbar ${showNav ? 'pb-24' : ''}`}>
          {children}
        </main>
        {showNav && <BottomNav />}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/trophies" element={<Trophies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new-habit" element={<NewHabit />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;