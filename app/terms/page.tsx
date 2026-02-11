export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">תנאי שירות</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. קבלת התנאים</h2>
            <p>
              בשימוש באפליקציית FitTrack, אתה מסכים לתנאי השירות המפורטים להלן. 
              אם אינך מסכים לתנאים אלה, אנא אל תשתמש באפליקציה.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. שימוש באפליקציה</h2>
            <p>
              FitTrack מספקת כלים למעקב כושר, תזונה ואימונים. השימוש באפליקציה הוא 
              באחריותך הבלעדית. המידע המוצג באפליקציה הוא למטרות מידע בלבד ואינו 
              מהווה ייעוץ רפואי מקצועי.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. חשבון משתמש</h2>
            <p>
              אתה אחראי לשמירה על סודיות פרטי החשבון שלך ולכל הפעילויות המתבצעות 
              תחת חשבונך. עליך להודיע לנו מיד על כל שימוש לא מורשה בחשבונך.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. פרטיות</h2>
            <p>
              השימוש שלך באפליקציה כפוף גם למדיניות הפרטיות שלנו. אנא קרא את 
              מדיניות הפרטיות שלנו כדי להבין כיצד אנו אוספים ומשתמשים במידע שלך.
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
