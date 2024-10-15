"use client";

import { useState, useEffect } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

interface University {
  id: number;
  name: string;
  type: string;
  subordination: string;
  educationType: string;
  city: string;
  phoneNumbers: string[];
  website: string;
  email: string[];
  description: string;
}

const UniversityList = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [newUniversity, setNewUniversity] = useState<Partial<University>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUniversities = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3005/api/universities');
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setUniversities(data);
      } catch (error) {
        setError("Failed to fetch universities.");
      } finally {
        setLoading(false);
      }
    };
    fetchUniversities();
  }, []);

  const handleUniversityClick = (university: University) => {
    setSelectedUniversity(university);
  };

  const handleBackToList = () => {
    setSelectedUniversity(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const uniqueCities = Array.from(new Set(universities.map((university) => university.city)));

  const filteredUniversities = universities.filter((university) =>
    (university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     university.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCity === "" || university.city === selectedCity)
  );

  const handleAddUniversity = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newUniversity.name) {
      setError("University name is required.");
      return;
    }
    try {
      const response = await fetch('http://localhost:3005/api/universities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUniversity),
      });
      const addedUniversity = await response.json();
      setUniversities((prev) => [...prev, addedUniversity]);
      setNewUniversity({});
      setError(null); // Clear error message
    } catch (error) {
      setError("Failed to add university.");
    }
  };

  if (loading) return <p>Loading universities...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pt-5">
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
          {!selectedUniversity ? (
            <>
              <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Університети</h1>
              <div className="mb-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Пошук університетів..."
                  className="p-2 border border-gray-300 rounded-md w-full mb-4"
                />
                <div className="mb-4">
                  <label htmlFor="city" className="block text-gray-700 mb-2">Місто</label>
                  <select
                    id="city"
                    value={selectedCity}
                    onChange={handleCityChange}
                    className="p-2 border border-gray-300 rounded-md w-full"
                  >
                    <option value="">Виберіть місто</option>
                    {uniqueCities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
              <ul>
                {filteredUniversities.length > 0 ? (
                  filteredUniversities.map((university) => (
                    <li
                      key={university.id}
                      className="mb-4 p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleUniversityClick(university)}
                    >
                      <h2 className="text-2xl font-semibold text-gray-800">{university.name}</h2>
                      <p className="text-gray-600">{university.city}</p>
                      <a
                        href={university.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Перейти на сайт
                      </a>
                    </li>
                  ))
                ) : (
                  <p className="text-center text-gray-600">Нічого не знайдено.</p>
                )}
              </ul>

              {/* Форма для додавання нового університету */}
              <form onSubmit={handleAddUniversity} className="mt-6">
                <h2 className="text-xl font-bold mb-4">Додати університет</h2>
                <input
                  type="text"
                  placeholder="Назва університету"
                  onChange={(e) => setNewUniversity({ ...newUniversity, name: e.target.value })}
                  className="p-2 border border-gray-300 rounded-md w-full mb-2"
                />
                <input
                  type="text"
                  placeholder="Тип"
                  onChange={(e) => setNewUniversity({ ...newUniversity, type: e.target.value })}
                  className="p-2 border border-gray-300 rounded-md w-full mb-2"
                />
                <input
                  type="text"
                  placeholder="Підпорядкування"
                  onChange={(e) => setNewUniversity({ ...newUniversity, subordination: e.target.value })}
                  className="p-2 border border-gray-300 rounded-md w-full mb-2"
                />
                <input
                  type="text"
                  placeholder="Тип освіти"
                  onChange={(e) => setNewUniversity({ ...newUniversity, educationType: e.target.value })}
                  className="p-2 border border-gray-300 rounded-md w-full mb-2"
                />
                <input
                  type="text"
                  placeholder="Місто"
                  onChange={(e) => setNewUniversity({ ...newUniversity, city: e.target.value })}
                  className="p-2 border border-gray-300 rounded-md w-full mb-2"
                />
                <input
                  type="text"
                  placeholder="Телефон"
                  onChange={(e) => setNewUniversity({ ...newUniversity, phoneNumbers: e.target.value.split(",") })}
                  className="p-2 border border-gray-300 rounded-md w-full mb-2"
                />
                <input
                  type="text"
                  placeholder="Веб-сайт"
                  onChange={(e) => setNewUniversity({ ...newUniversity, website: e.target.value })}
                  className="p-2 border border-gray-300 rounded-md w-full mb-2"
                />
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setNewUniversity({ ...newUniversity, email: e.target.value.split(",") })}
                  className="p-2 border border-gray-300 rounded-md w-full mb-2"
                />
                <textarea
                  placeholder="Опис"
                  onChange={(e) => setNewUniversity({ ...newUniversity, description: e.target.value })}
                  className="p-2 border border-gray-300 rounded-md w-full mb-2"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Додати
                </button>
                {error && <p className="text-red-500">{error}</p>}
              </form>
            </>
          ) : (
            <div>
              <button
                onClick={handleBackToList}
                className="text-blue-600 hover:underline mb-4"
              >
                Назад до списку
              </button>
              <h2 className="text-2xl font-bold">{selectedUniversity.name}</h2>
              <p className="mt-2 text-gray-700">Тип: {selectedUniversity.type}</p>
              <p className="mt-2 text-gray-700">Підпорядкування: {selectedUniversity.subordination}</p>
              <p className="mt-2 text-gray-700">Тип освіти: {selectedUniversity.educationType}</p>
              <p className="mt-2 text-gray-700">Місто: {selectedUniversity.city}</p>
              <p className="mt-2 text-gray-700">Телефон: {selectedUniversity.phoneNumbers.join(", ")}</p>
              <p className="mt-2 text-gray-700">Email: {selectedUniversity.email.join(", ")}</p>
              <p className="mt-4">{selectedUniversity.description}</p>
              <a
                href={selectedUniversity.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2"
              >
                Перейти на сайт
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UniversityList;
