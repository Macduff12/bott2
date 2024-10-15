"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Head from 'next/head';

interface User {
  fullName?: string;
  email: string;
  studentNumber?: string;
  phone?: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          router.push('/signin');
          return;
        }

        const response = await fetch('http://localhost:3005/api/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Не вдалося отримати дані профілю');
        }

        const userData: User = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Помилка під час завантаження даних користувача:', error);
        setError('Не вдалося завантажити дані користувача.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  const handleSignOut = () => {
    localStorage.removeItem('access_token');
    router.push('/signin');
  };

  const handleRetrySignIn = () => {
    router.push('/signin');
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/images/logohubfav.png" type="image/png" sizes="32x32" />
      </Head>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
          {loading && (
            <div className="flex items-center justify-center min-h-screen">
              <p className="text-xl text-gray-600">Завантаження...</p>
            </div>
          )}
          {error && (
            <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
              <p className="text-xl text-red-600">Не вдалося завантажити дані користувача.</p>
              <p className="text-lg text-gray-600">Спробуйте знову увійти в аккаунт.</p>
              <button
                onClick={handleRetrySignIn}
                className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200"
              >
                Увійти
              </button>
            </div>
          )}
          {user && !loading && (
            <div>
              <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Ваш Профіль</h1>
              <div className="space-y-4">
                {user.fullName && ( // Виправлено тут
                  <div className="flex justify-between p-4 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Ім'я:</span>
                    <span className="text-gray-900">{user.fullName}</span>
                  </div>
                )}
                <div className="flex justify-between p-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Email:</span>
                  <span className="text-gray-900">{user.email}</span>
                </div>
                {user.studentNumber && (
                  <div className="flex justify-between p-4 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">ID Студента:</span>
                    <span className="text-gray-900">{user.studentNumber}</span>
                  </div>
                )}
                {user.phone && (
                  <div className="flex justify-between p-4 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Телефон:</span>
                    <span className="text-gray-900">{user.phone}</span>
                  </div>
                )}
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => router.push('/update-profile')}
                  className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200"
                >
                  Редагувати профіль
                </button>
                <button
                  onClick={handleSignOut}
                  className="mt-4 w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-700 transition duration-200"
                >
                  Вийти
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
