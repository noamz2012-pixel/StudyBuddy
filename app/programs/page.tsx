'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Navigation from '@/components/Navigation';

export default function ProgramsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  if (loading || !user) return null;

  const samplePrograms = [
    {
      id: 1,
      name: 'תוכנית כושר למתחילים',
      duration: '8 שבועות',
      level: 'מתחיל',
      description: 'תוכנית אימונים מקיפה למתחילים',
    },
    {
      id: 2,
      name: 'בניית שרירים',
      duration: '12 שבועות',
      level: 'מתקדם',
      description: 'תוכנית אימונים להגדלת מסת שריר',
    },
    {
      id: 3,
      name: 'ירידה במשקל',
      duration: '10 שבועות',
      level: 'בינוני',
      description: 'תוכנית אימונים וקרדיו לירידה במשקל',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">תוכניות אימון 📋</h1>
        
        {/* Active Program */}
        <div className="bg-dark-600 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-primary mb-4">תוכנית פעילה</h2>
          <p className="text-gray-400 text-center py-8">אין תוכנית פעילה כרגע</p>
        </div>
        
        {/* Programs Library */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">ספריית תוכניות</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samplePrograms.map((program) => (
              <div key={program.id} className="bg-dark-600 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">{program.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-400">
                    <span className="text-primary-light">משך: </span>
                    {program.duration}
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="text-primary-light">רמה: </span>
                    {program.level}
                  </p>
                  <p className="text-sm text-gray-400">{program.description}</p>
                </div>
                <button className="w-full py-2 px-4 bg-primary hover:bg-primary/80 rounded-lg transition-colors">
                  הפעל תוכנית
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
