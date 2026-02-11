'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Navigation from '@/components/Navigation';

export default function SettingsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [calorieGoal, setCalorieGoal] = useState(2000);
  const [proteinGoal, setProteinGoal] = useState(150);
  const [units, setUnits] = useState('metric');
  const [reminders, setReminders] = useState(true);
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  if (loading || !user) return null;

  const handleSave = () => {
    alert('הגדרות נשמרו בהצלחה!');
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">הגדרות ⚙️</h1>
        
        {/* Goals Settings */}
        <div className="bg-dark-600 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold text-primary mb-4">יעדים יומיים</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                יעד קלוריות יומי
              </label>
              <input
                type="number"
                value={calorieGoal}
                onChange={(e) => setCalorieGoal(Number(e.target.value))}
                className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                יעד חלבון יומי (גרם)
              </label>
              <input
                type="number"
                value={proteinGoal}
                onChange={(e) => setProteinGoal(Number(e.target.value))}
                className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
              />
            </div>
          </div>
        </div>
        
        {/* Units Settings */}
        <div className="bg-dark-600 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold text-primary mb-4">יחידות מדידה</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-3 space-x-reverse">
              <input
                type="radio"
                name="units"
                value="metric"
                checked={units === 'metric'}
                onChange={(e) => setUnits(e.target.value)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-white">מטרי (ק"ג, ס"מ)</span>
            </label>
            <label className="flex items-center space-x-3 space-x-reverse">
              <input
                type="radio"
                name="units"
                value="imperial"
                checked={units === 'imperial'}
                onChange={(e) => setUnits(e.target.value)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-white">אימפריאל (lbs, inches)</span>
            </label>
          </div>
        </div>
        
        {/* Notifications Settings */}
        <div className="bg-dark-600 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold text-primary mb-4">התראות והתזכורות</h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-white">תזכורות מתוזמנות</span>
              <input
                type="checkbox"
                checked={reminders}
                onChange={(e) => setReminders(e.target.checked)}
                className="w-6 h-6 text-primary focus:ring-primary rounded"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-white">הודעות דחיפה</span>
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="w-6 h-6 text-primary focus:ring-primary rounded"
              />
            </label>
          </div>
        </div>
        
        {/* Save Button */}
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-primary hover:bg-primary/80 rounded-lg font-semibold transition-colors"
        >
          שמור הגדרות
        </button>
      </main>
    </div>
  );
}
