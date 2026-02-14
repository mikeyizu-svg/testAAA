import { Habit, Achievement } from './types';

export const mockHabits: Habit[] = [
  {
    id: '1',
    name: 'Drink Water',
    category: 'health',
    icon: 'droplet',
    frequency: 'daily',
    completedToday: true,
    progress: 1,
    goal: 1,
    streak: 24,
    time: '8:00 AM'
  },
  {
    id: '2',
    name: 'Read 30 mins',
    category: 'mind',
    icon: 'book',
    frequency: 'daily',
    completedToday: false,
    progress: 15,
    goal: 30,
    streak: 12,
  },
  {
    id: '3',
    name: 'Morning Workout',
    category: 'fitness',
    icon: 'dumbbell',
    frequency: 'daily',
    completedToday: false,
    progress: 0,
    goal: 45,
    streak: 5,
    time: '7:30 AM'
  },
  {
    id: '4',
    name: 'Meditation',
    category: 'mind',
    icon: 'flower',
    frequency: 'daily',
    completedToday: false,
    progress: 0,
    goal: 1,
    streak: 8,
    time: '9:00 AM'
  },
  {
    id: '5',
    name: 'Sleep Early',
    category: 'health',
    icon: 'moon',
    frequency: 'daily',
    completedToday: false,
    progress: 0,
    goal: 1,
    streak: 3
  }
];

export const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: '7-Day Streak',
    description: 'Complete all habits for 7 days in a row.',
    icon: 'flame',
    earnedDate: 'Oct 12',
    locked: false,
    progress: 7,
    total: 7
  },
  {
    id: '2',
    title: 'Early Bird',
    description: 'Complete a morning habit before 8 AM.',
    icon: 'sun',
    earnedDate: 'Oct 10',
    locked: false,
    progress: 1,
    total: 1
  },
  {
    id: '3',
    title: 'Hydration Hero',
    description: 'Drink 2L of water daily for a week.',
    icon: 'droplet',
    earnedDate: 'Oct 08',
    locked: false,
    progress: 7,
    total: 7
  },
  {
    id: '4',
    title: 'Habit Master',
    description: 'Maintain a 30-day streak.',
    icon: 'medal',
    locked: true,
    progress: 24,
    total: 30
  },
  {
    id: '5',
    title: 'Night Owl',
    description: 'Complete a habit after 10 PM.',
    icon: 'moon',
    locked: true,
    progress: 0,
    total: 1
  },
  {
    id: '6',
    title: 'Zen Master',
    description: 'Complete 50 meditation sessions.',
    icon: 'flower',
    locked: true,
    progress: 32,
    total: 50
  }
];