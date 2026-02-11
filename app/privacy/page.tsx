export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">מדיניות פרטיות</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. מידע שאנו אוספים</h2>
            <p>
              FitTrack אוספת מידע שאתה מספק בעת השימוש באפליקציה, כולל פרטי חשבון,
              נתוני כושר ותזונה, מדידות גוף והיסטוריית אימונים.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. שימוש במידע</h2>
            <p>
              אנו משתמשים במידע שנאסף כדי לספק ולשפר את שירותי האפליקציה,
              לספק המלצות מותאמות אישית, ולשלוח התראות ותזכורות.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. אבטחת מידע</h2>
            <p>
              אנו משתמשים בטכנולוגיות אבטחה מתקדמות כדי להגן על המידע שלך,
              כולל הצפנת נתונים ואימות מאובטח דרך Firebase Authentication.
            </p>
          </section>
        </div>
        
        <div className="mt-12">
          <a href="/" className="text-primary hover:text-primary-light">
            ← חזרה לדף הבית
          </a>
        </div>
      </div>
    </div>
  );
}
