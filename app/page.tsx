import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-primary">
            FitTrack 💪
          </h1>
          <p className="text-2xl text-primary-light">
            אפליקציית מעקב כושר מקיפה
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ברוכים הבאים ל-FitTrack - האפליקציה המתקדמת למעקב אחר כושר, תזונה ואימונים
          </p>
          
          <div className="flex gap-4 justify-center mt-8">
            <Link 
              href="/auth/login"
              className="px-6 py-3 bg-primary hover:bg-primary/80 rounded-lg font-semibold transition-colors"
            >
              התחברות
            </Link>
            <Link 
              href="/auth/register"
              className="px-6 py-3 bg-dark-600 hover:bg-dark-700 border border-primary rounded-lg font-semibold transition-colors"
            >
              הרשמה
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 bg-dark-600 rounded-lg">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-primary mb-2">מעקב תזונה</h3>
              <p className="text-gray-400">
                עקוב אחר קלוריות, חלבון, פחמימות ושומנים
              </p>
            </div>
            
            <div className="p-6 bg-dark-600 rounded-lg">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold text-primary mb-2">אימונים</h3>
              <p className="text-gray-400">
                נהל תוכניות אימון ועקוב אחר ההתקדמות
              </p>
            </div>
            
            <div className="p-6 bg-dark-600 rounded-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-primary mb-2">התקדמות</h3>
              <p className="text-gray-400">
                גרפים וסטטיסטיקות מפורטות של המסע שלך
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
