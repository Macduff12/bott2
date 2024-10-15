"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Head from 'next/head';

const UpdateProfile = () => {
  const [user, setUser] = useState<{ fullName?: string; studentNumber?: string; phone?: string; }>({});
  const [initialUserData, setInitialUserData] = useState<{ fullName?: string; studentNumber?: string; phone?: string; }>({});
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

        const userData = await response.json();
        setUser(userData);
        setInitialUserData(userData); // Зберігаємо початкові дані
      } catch (error) {
        console.error('Помилка під час завантаження даних користувача:', error);
        setError('Не вдалося завантажити дані користувача.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem('access_token');

    if (!token) {
      router.push('/signin');
      return;
    }

    // Створюємо об'єкт з оновленими полями
    const updatedUserData = {};
    if (user.fullName !== initialUserData.fullName) {
      updatedUserData.fullName = user.fullName;
    }
    if (user.studentNumber !== initialUserData.studentNumber) {
      updatedUserData.studentNumber = user.studentNumber;
    }
    if (user.phone !== initialUserData.phone) {
      updatedUserData.phone = user.phone;
    }

    if (Object.keys(updatedUserData).length === 0) {
      alert('Немає змін для оновлення.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3005/api/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserData),
      });

      if (!response.ok) {
        throw new Error('Не вдалося оновити профіль');
      }

      alert('Профіль успішно оновлено');
      router.push('/profile');
    } catch (error) {
      console.error('Помилка під час оновлення профілю:', error);
      setError('Не вдалося оновити профіль.');
    }
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
            <p className="text-xl text-gray-600">Завантаження...</p>
          )}
          {error && (
            <p className="text-xl text-red-600">{error}</p>
          )}
          {user && !loading && (
            <form onSubmit={handleSubmit}>
              <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Редагувати Профіль</h1>
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold text-gray-700">Ім'я:</label>
                  <input
                    type="text"
                    name="fullName"
                    value={user.fullName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">ID Студента:</label>
                  <input
                    type="text"
                    name="studentNumber"
                    value={user.studentNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">Телефон:</label>
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200"
                >
                  Оновити профіль
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateProfile;
