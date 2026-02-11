'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Navigation from '@/components/Navigation';

export default function ProfilePage() {
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
        <h1 className="text-4xl font-bold text-primary mb-8">פרופיל 👤</h1>
        
        {/* User Info */}
        <div className="bg-dark-600 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold text-primary mb-4">פרטים אישיים</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400">אימייל</p>
              <p className="text-lg text-white">{user.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">סטטוס אימות</p>
              <p className="text-lg text-white">
                {user.emailVerified ? (
                  <span className="text-primary">✓ מאומת</span>
                ) : (
                  <span className="text-yellow-500">⚠ ממתין לאימות</span>
                )}
              </p>
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="bg-dark-600 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold text-primary mb-4">סטטיסטיקות</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-dark-700 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-400 mb-2">אימונים סה"כ</p>
              <p className="text-2xl font-bold text-primary">0</p>
            </div>
            <div className="bg-dark-700 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-400 mb-2">ימים ברצף</p>
              <p className="text-2xl font-bold text-primary">0</p>
            </div>
            <div className="bg-dark-700 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-400 mb-2">משקל נוכחי</p>
              <p className="text-2xl font-bold text-primary">--</p>
            </div>
            <div className="bg-dark-700 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-400 mb-2">שינוי משקל</p>
              <p className="text-2xl font-bold text-primary">--</p>
            </div>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="bg-dark-600 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-primary mb-4">הישגים 🏆</h2>
          <p className="text-gray-400 text-center py-8">אין הישגים עדיין - המשך לאמן!</p>
        </div>
      </main>
    </div>
  );
}
