export interface Habit {
  id: string;
  name: string;
  category: string;
  icon: string;
  frequency: 'daily' | 'weekly' | 'specific';
  completedToday: boolean;
  progress: number;
  goal: number;
  streak: number;
  time?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedDate?: string;
  locked: boolean;
  progress: number;
  total: number;
}

export interface DayStatus {
  date: Date;
  isToday: boolean;
  score: number; // 0-100
  label: string;
}