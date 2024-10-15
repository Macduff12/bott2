"use client";

import { useState } from "react";

export default function AddCourseForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newCourse = {
      id: Date.now().toString(),
      name,
      description,
    };

    try {
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const result = await response.json();
      if (result.message === 'Курс успішно додано') {
        setName("");
        setDescription("");
        setError(null);
      } else {
        setError('Помилка при додаванні курсу');
      }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Щось пішло не так');
        }
      }

  };

  return (
    <div className="mb-10 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Форма додавання курсу</h2>
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="course-name" className="block text-sm font-medium text-gray-700">Назва курсу</label>
          <input
            id="course-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="course-description" className="block text-sm font-medium text-gray-700">Опис курсу</label>
          <textarea
            id="course-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
        >
          Додати курс
        </button>
      </form>
    </div>
  );
}
