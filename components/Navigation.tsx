'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navItems = [
    { href: '/dashboard', label: 'לוח בקרה', icon: '📊' },
    { href: '/nutrition', label: 'תזונה', icon: '🍽️' },
    { href: '/workouts', label: 'אימונים', icon: '💪' },
    { href: '/progress', label: 'התקדמות', icon: '📈' },
    { href: '/programs', label: 'תוכניות', icon: '📋' },
    { href: '/profile', label: 'פרופיל', icon: '👤' },
    { href: '/settings', label: 'הגדרות', icon: '⚙️' },
  ];

  if (!user) return null;

  return (
    <nav className="bg-dark-800 border-b border-dark-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link href="/dashboard" className="text-2xl font-bold text-primary">
              FitTrack 💪
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-primary text-white'
                    : 'text-gray-300 hover:bg-dark-600 hover:text-white'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
          
          <button
            onClick={handleSignOut}
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-dark-600 rounded-md transition-colors"
          >
            יציאה
          </button>
        </div>
      </div>
    </nav>
  );
}
