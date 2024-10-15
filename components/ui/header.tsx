"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from './logo';

const Header: React.FC = () => {
  const [top, setTop] = useState<boolean>(true);
  const [activePath, setActivePath] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem('access_token');
      setIsAuthenticated(!!token);
    };

    // Перевірка автентифікації при завантаженні компонента
    checkAuthentication();

    // Оновлення автентифікації при зміні в localStorage
    window.addEventListener('storage', checkAuthentication);

    // Оновлення фону при прокручуванні
    const scrollHandler = () => {
      setTop(window.pageYOffset <= 10);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('storage', checkAuthentication);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
    router.push('/signin');
  };

  return (
    <header className={`fixed top-2 z-30 w-full md:top-6 ${top ? '' : 'bg-white'}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <Logo />
            <span className="text-xl font-bold">UniverHub</span>
          </div>

          <nav className="flex flex-1 items-center justify-end gap-3">
            <Link 
              href="/" 
              className={`btn-sm ${activePath === '/' ? 'bg-gray-200 text-gray-900' : 'bg-white text-gray-800'} shadow hover:bg-gray-50`}
              onClick={() => setActivePath('/')}
            >
              Home
            </Link>
            <Link 
              href="/university" 
              className={`btn-sm ${activePath === '/university' ? 'bg-gray-200 text-gray-900' : 'bg-white text-gray-800'} shadow hover:bg-gray-50`}
              onClick={() => setActivePath('/university')}
            >
              University
            </Link>
            <Link 
              href="/courses" 
              className={`btn-sm ${activePath === '/courses' ? 'bg-gray-200 text-gray-900' : 'bg-white text-gray-800'} shadow hover:bg-gray-50`}
              onClick={() => setActivePath('/courses')}
            >
              Courses
            </Link>
            <Link 
              href="/events" 
              className={`btn-sm ${activePath === '/events' ? 'bg-gray-200 text-gray-900' : 'bg-white text-gray-800'} shadow hover:bg-gray-50`}
              onClick={() => setActivePath('/events')}
            >
              Events
            </Link>
            {!isAuthenticated && (
              <Link 
                href="/signin" 
                className={`btn-sm ${activePath === '/signin' ? 'bg-gray-200 text-gray-900' : 'bg-gray-800 text-gray-200'} shadow hover:bg-gray-900`}
                onClick={() => setActivePath('/signin')}
              >
                Login
              </Link>
            )}
            {isAuthenticated && (
              <>
                <Link 
                  href="/profile"
                  className={`btn-sm ${activePath === '/profile' ? 'bg-gray-200 text-gray-900' : 'bg-white text-gray-800'} shadow hover:bg-gray-50`}
                  onClick={() => setActivePath('/profile')}
                >
                  Profile
                </Link>
                <button 
                  onClick={handleLogout}
                  className="btn-sm bg-red-600 text-white shadow hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
