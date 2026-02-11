'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Navigation from '@/components/Navigation';

export default function ProgressPage() {
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
        <h1 className="text-4xl font-bold text-primary mb-8">התקדמות 📈</h1>
        
        {/* Weight Tracking */}
        <div className="bg-dark-600 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold text-primary mb-4">מעקב משקל</h2>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-400">משקל נוכחי</p>
              <p className="text-3xl font-bold text-primary">-- kg</p>
            </div>
            <button className="px-4 py-2 bg-primary hover:bg-primary/80 rounded-lg transition-colors">
              עדכן משקל
            </button>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-400">
            גרף משקל יופיע כאן
          </div>
        </div>
        
        {/* Body Measurements */}
        <div className="bg-dark-600 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold text-primary mb-4">מדידות גוף</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-dark-700 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-400 mb-2">חזה</p>
              <p className="text-xl font-bold text-primary">-- cm</p>
            </div>
            <div className="bg-dark-700 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-400 mb-2">מותניים</p>
              <p className="text-xl font-bold text-primary">-- cm</p>
            </div>
            <div className="bg-dark-700 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-400 mb-2">ירכיים</p>
              <p className="text-xl font-bold text-primary">-- cm</p>
            </div>
            <div className="bg-dark-700 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-400 mb-2">זרועות</p>
              <p className="text-xl font-bold text-primary">-- cm</p>
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="bg-dark-600 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-primary mb-4">סטטיסטיקות</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-dark-700 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">ממוצע קלוריות יומי</p>
              <p className="text-2xl font-bold text-primary">0</p>
            </div>
            <div className="bg-dark-700 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">ממוצע חלבון יומי</p>
              <p className="text-2xl font-bold text-primary">0g</p>
            </div>
            <div className="bg-dark-700 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">אימונים בחודש</p>
              <p className="text-2xl font-bold text-primary">0</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
