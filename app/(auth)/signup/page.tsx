'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studentNumber, setStudentID] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Додано стан для навантаження
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Почати завантаження

    const newUser = { fullName, email, studentNumber, phone, password };

    try {
      const response = await fetch('http://localhost:3005/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (response.ok) {
        const accessToken = data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        router.push('/profile');
      } else {
        setErrorMessage(data.error || 'Помилка при реєстрації');
      }
    } catch (error) {
      console.error('Unexpected error during registration:', error);
      setErrorMessage('Сталася непередбачена помилка');
    } finally {
      setLoading(false); // Завершити завантаження
    }
  };

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-center">Приєднуйтесь до UniverHub</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {[
            { id: 'fullName', label: 'Повне ім\'я', value: fullName, setValue: setName, type: 'text', placeholder: 'Ваше ім\'я' },
            { id: 'email', label: 'Електронна пошта університету', value: email, setValue: setEmail, type: 'email', placeholder: 'ваша@університет.com' },
            { id: 'studentNumber', label: 'Студентський номер', value: studentNumber, setValue: setStudentID, type: 'text', placeholder: 'Ваш студентський номер' },
            { id: 'phone', label: 'Телефон', value: phone, setValue: setPhone, type: 'text', placeholder: '(+XXX) XXX-XXXX' },
            { id: 'password', label: 'Пароль', value: password, setValue: setPassword, type: 'password', placeholder: '••••••••', autoComplete: 'on' }
          ].map(({ id, label, value, setValue, type, placeholder, autoComplete }) => (
            <div key={id}>
              <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor={id}>
                {label}
              </label>
              <input
                id={id}
                className="form-input w-full py-2"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                autoComplete={autoComplete}
              />
            </div>
          ))}
        </div>
        {errorMessage && (
          <div className="mt-4 text-red-600">
            {errorMessage}
          </div>
        )}
        
        <div className="mt-6 space-y-3">
          <button 
            className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
            disabled={loading} // Вимкнути кнопку під час завантаження
          >
            {loading ? 'Зареєструватися...' : 'Зареєструватися'}
          </button>
          <div className="text-center text-sm italic text-gray-400">Або</div>
          <button className="btn w-full bg-gradient-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
            Продовжити з GitHub
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Реєструючись, ви погоджуєтесь з{" "}
          <a className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline" href="#0">
            Умовами використання
          </a>{" "}
          та{" "}
          <a className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline" href="#0">
            Політикою конфіденційності
          </a>
          .
        </p>
      </div>
    </>
  );
}
