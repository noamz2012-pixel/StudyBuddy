'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Navigation from '@/components/Navigation';

export default function NutritionPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [meals, setMeals] = useState<any[]>([]);

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
        <h1 className="text-4xl font-bold text-primary mb-8">תזונה 🍽️</h1>
        
        {/* Daily Macros Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-dark-600 p-6 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">קלוריות</h3>
            <div className="text-2xl font-bold text-primary">0 / 2000</div>
            <div className="w-full bg-dark-700 rounded-full h-2 mt-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
          
          <div className="bg-dark-600 p-6 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">חלבון</h3>
            <div className="text-2xl font-bold text-primary">0 / 150g</div>
            <div className="w-full bg-dark-700 rounded-full h-2 mt-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
          
          <div className="bg-dark-600 p-6 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">פחמימות</h3>
            <div className="text-2xl font-bold text-primary">0 / 250g</div>
            <div className="w-full bg-dark-700 rounded-full h-2 mt-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
          
          <div className="bg-dark-600 p-6 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">שומנים</h3>
            <div className="text-2xl font-bold text-primary">0 / 70g</div>
            <div className="w-full bg-dark-700 rounded-full h-2 mt-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>
        
        {/* Add Meal Button */}
        <div className="mb-6">
          <button className="px-6 py-3 bg-primary hover:bg-primary/80 rounded-lg font-semibold transition-colors">
            + הוסף ארוחה
          </button>
        </div>
        
        {/* Meals List */}
        <div className="bg-dark-600 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-primary mb-4">ארוחות היום</h2>
          {meals.length === 0 ? (
            <p className="text-gray-400 text-center py-8">לא נרשמו ארוחות היום</p>
          ) : (
            <div className="space-y-4">
              {meals.map((meal, index) => (
                <div key={index} className="bg-dark-700 p-4 rounded-lg">
                  <p className="text-white">{meal.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
