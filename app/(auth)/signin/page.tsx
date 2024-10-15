"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);  // Очищуємо попередні помилки

    try {
      const response = await fetch('http://localhost:3005/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Login result:', result); // Логування результату

        // Перевіряємо наявність accessToken у відповіді
        if (result.accessToken) {
          // Зберігаємо токени доступу та refresh в локальному сховищі
          localStorage.setItem('access_token', result.accessToken);
          localStorage.setItem('refresh_token', result.refreshToken);
          localStorage.setItem('userEmail', result.user.email); // Зберігаємо email

          // Перенаправляємо користувача на сторінку профілю
          console.log('Redirecting to profile'); // Додати лог
          router.push('/profile');
        } else {
          setError(result.message || 'Невідома помилка. Спробуйте ще раз.');
        }
      } else if (response.status === 400) {
        setError('Неправильний email або пароль.');
      } else {
        const errorResult = await response.json();
        setError(errorResult.message || 'Помилка при запиті на сервер. Спробуйте ще раз.');
      }
    } catch (err) {
      console.error('Помилка при вході:', err);
      setError('Сталася помилка при вході. Спробуйте ще раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Увійти - UniverHub</title>
        <meta name="description" content="Сторінка входу для студентів та викладачів UniverHub." />
      </Head>
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Увійдіть у UniverHub</h1>
        <p className="mt-2 text-gray-600">Створіть нові можливості для співпраці та навчання.</p>
      </div>
      {/* Форма */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
              Електронна пошта
            </label>
            <input
              id="email"
              className="form-input w-full py-2 border border-gray-300 rounded-md"
              type="email"
              placeholder="ваша@пошта.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="password">
              Пароль
            </label>
            <input
              id="password"
              className="form-input w-full py-2 border border-gray-300 rounded-md"
              type="password"
              autoComplete="on"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            className={`w-full py-2 px-4 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold rounded-md shadow transition duration-200`}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Завантаження...' : 'Увійти'}
          </button>
        </div>
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </form>
      {/* Нижнє посилання */}
      <div className="mt-6 text-center">
        <Link className="text-sm text-blue-600 underline hover:no-underline" href="/reset-password">
          Забули пароль?
        </Link>
      </div>
      {/* Додаткове посилання для реєстрації */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-700">Ще не маєте акаунту?</p>
        <Link className="text-sm text-blue-600 underline hover:no-underline" href="/signup">
          Зареєструватись
        </Link>
      </div>
    </>
  );
}
