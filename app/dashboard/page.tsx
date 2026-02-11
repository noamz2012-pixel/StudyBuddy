'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Navigation from '@/components/Navigation';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-primary text-2xl">טוען...</div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">לוח בקרה 📊</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Calories Card */}
          <div className="bg-dark-600 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">קלוריות היום</h3>
              <span className="text-2xl">🔥</span>
            </div>
            <div className="text-3xl font-bold text-primary">0 / 2000</div>
            <div className="mt-2 text-sm text-gray-400">נשארו 2000 קלוריות</div>
          </div>
          
          {/* Protein Card */}
          <div className="bg-dark-600 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">חלבון היום</h3>
              <span className="text-2xl">🥩</span>
            </div>
            <div className="text-3xl font-bold text-primary">0 / 150g</div>
            <div className="mt-2 text-sm text-gray-400">נשארו 150g חלבון</div>
          </div>
          
          {/* Workouts Card */}
          <div className="bg-dark-600 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">אימונים השבוע</h3>
              <span className="text-2xl">💪</span>
            </div>
            <div className="text-3xl font-bold text-primary">0 / 5</div>
            <div className="mt-2 text-sm text-gray-400">נשארו 5 אימונים</div>
          </div>
          
          {/* Weight Card */}
          <div className="bg-dark-600 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">משקל נוכחי</h3>
              <span className="text-2xl">⚖️</span>
            </div>
            <div className="text-3xl font-bold text-primary">-- kg</div>
            <div className="mt-2 text-sm text-gray-400">עדכן משקל</div>
          </div>
          
          {/* Active Program Card */}
          <div className="bg-dark-600 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">תוכנית פעילה</h3>
              <span className="text-2xl">📋</span>
            </div>
            <div className="text-xl font-bold text-primary">אין תוכנית פעילה</div>
            <div className="mt-2 text-sm text-gray-400">בחר תוכנית אימון</div>
          </div>
          
          {/* Quick Actions Card */}
          <div className="bg-dark-600 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">פעולות מהירות</h3>
              <span className="text-2xl">⚡</span>
            </div>
            <div className="space-y-2">
              <button className="w-full py-2 px-4 bg-primary hover:bg-primary/80 rounded-md text-sm transition-colors">
                רשום ארוחה
              </button>
              <button className="w-full py-2 px-4 bg-dark-700 hover:bg-dark-800 rounded-md text-sm transition-colors">
                התחל אימון
              </button>
            </div>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-primary mb-4">פעילות אחרונה</h2>
          <div className="bg-dark-600 p-6 rounded-lg">
            <p className="text-gray-400 text-center py-8">אין פעילות אחרונה להצגה</p>
          </div>
        </div>
      </main>
    </div>
  );
}
