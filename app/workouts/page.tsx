'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Navigation from '@/components/Navigation';

export default function WorkoutsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  if (loading || !user) return null;

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">אימונים 💪</h1>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-dark-600 p-6 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">אימונים השבוע</h3>
            <div className="text-3xl font-bold text-primary">0 / 5</div>
          </div>
          
          <div className="bg-dark-600 p-6 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">סך הכל אימונים</h3>
            <div className="text-3xl font-bold text-primary">0</div>
          </div>
          
          <div className="bg-dark-600 p-6 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">רצף אימונים</h3>
            <div className="text-3xl font-bold text-primary">0 ימים</div>
          </div>
        </div>
        
        {/* Start Workout Button */}
        <div className="mb-6">
          <button className="px-6 py-3 bg-primary hover:bg-primary/80 rounded-lg font-semibold transition-colors">
            🏋️ התחל אימון חדש
          </button>
        </div>
        
        {/* Workout History */}
        <div className="bg-dark-600 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-primary mb-4">היסטוריית אימונים</h2>
          <p className="text-gray-400 text-center py-8">אין אימונים קודמים להצגה</p>
        </div>
      </main>
    </div>
  );
}
