"use client";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  // Animation states
  const [animateMap, setAnimateMap] = useState(false);
  const [animateUniversity, setAnimateUniversity] = useState(false);
  const [animateTest, setAnimateTest] = useState(false);
  const [animateInfo, setAnimateInfo] = useState(false);
  const [animatePlan, setAnimatePlan] = useState(false);
  const [animateFinancial, setAnimateFinancial] = useState(false);
  const [animateChatbot, setAnimateChatbot] = useState(false);
  const [animateCalculator, setAnimateCalculator] = useState(false);
  const [animateRecommendations, setAnimateRecommendations] = useState(false);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pt-5">
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-2">Ласкаво просимо до UniverHub</h1>
            <p className="text-2xl text-gray-700">
              Ваш універсальний помічник у світі освіти. Ось що ви можете зробити:
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-6">
              <div className="text-center bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Університети</h2>
                <p className="text-gray-600 mb-4">
                  Перегляньте список університетів, щоб знайти найкращий варіант для вашого навчання.
                </p>
                <Link href="/universitylist">
                  <button
                    className={`py-5 px-10 bg-blue-600 text-white font-bold rounded-full shadow-xl relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
                    onMouseEnter={() => setAnimateUniversity(true)}
                    onMouseLeave={() => setAnimateUniversity(false)}
                  >
                    <span className="text-3xl">🎓</span>
                    <span className="text-xl ml-2">Пошук університетів</span>
                    <div className={`absolute inset-0 border-4 border-blue-300 rounded-full transition-transform duration-300 ease-in-out ${
                      animateUniversity ? "transform scale-110" : "transform scale-0"
                    }`}></div>
                  </button>
                </Link>
              </div>
              <div className="text-center bg-yellow-50 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Тест</h2>
                <p className="text-gray-600 mb-4">
                  Пройдіть тест щоб визначитися зі своєю спеціальністю.
                </p>
                <Link href="/test">
                  <button
                    className={`py-5 px-10 bg-yellow-600 text-white font-bold rounded-full shadow-xl relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
                    onMouseEnter={() => setAnimateTest(true)}
                    onMouseLeave={() => setAnimateTest(false)}
                  >
                    <span className="text-3xl">📝</span>
                    <span className="text-xl ml-2">Пройти тест</span>
                    <div className={`absolute inset-0 border-4 border-yellow-300 rounded-full transition-transform duration-300 ease-in-out ${
                      animateTest ? "transform scale-110" : "transform scale-0"
                    }`}></div>
                  </button>
                </Link>
              </div>
              <div className="text-center bg-red-50 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Мапа</h2>
                <p className="text-gray-600 mb-4">
                  Використовуйте нашу інтерактивну мапу для пошуку важливих місць та об'єктів.
                </p>
                <Link href="/map">
                  <button
                    className={`py-5 px-10 bg-red-600 text-white font-bold rounded-full shadow-xl relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
                    onMouseEnter={() => setAnimateMap(true)}
                    onMouseLeave={() => setAnimateMap(false)}
                  >
                    <span className="text-3xl">🗺️</span>
                    <span className="text-xl ml-2">Переглянути мапу</span>
                    <div className={`absolute inset-0 border-4 border-red-300 rounded-full transition-transform duration-300 ease-in-out ${
                      animateMap ? "transform scale-110" : "transform scale-0"
                    }`}></div>
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="text-center bg-teal-50 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Фінансові поради</h2>
                <p className="text-gray-600 mb-4">
                  Інформацію про стипендії, гранти, кредити та інші фінансові можливості для студентів.
                </p>
                <Link href="/financial-aid">
                  <button
                    className={`py-5 px-10 bg-teal-600 text-white font-bold rounded-full shadow-xl relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
                    onMouseEnter={() => setAnimateFinancial(true)}
                    onMouseLeave={() => setAnimateFinancial(false)}
                  >
                    <span className="text-3xl">💸</span>
                    <span className="text-xl ml-2">Фінансова допомога</span>
                    <div className={`absolute inset-0 border-4 border-teal-300 rounded-full transition-transform duration-300 ease-in-out ${
                      animateFinancial ? "transform scale-110" : "transform scale-0"
                    }`}></div>
                  </button>
                </Link>
              </div>
              <div className="text-center bg-orange-50 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Чат-бот</h2>
                <p className="text-gray-600 mb-4">
                  Консультація щодо процесу вступу, спеціальностей та вибору університету за допомогою чат-бота.
                </p>
                <Link href="/chatbot">
                  <button
                    className={`py-5 px-10 bg-orange-600 text-white font-bold rounded-full shadow-xl relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
                    onMouseEnter={() => setAnimateChatbot(true)}
                    onMouseLeave={() => setAnimateChatbot(false)}
                  >
                    <span className="text-3xl">🤖</span>
                    <span className="text-xl ml-2">Запустити чат-бота</span>
                    <div className={`absolute inset-0 border-4 border-orange-300 rounded-full transition-transform duration-300 ease-in-out ${
                      animateChatbot ? "transform scale-110" : "transform scale-0"
                    }`}></div>
                  </button>
                </Link>
              </div>
              <div className="text-center bg-indigo-50 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Калькулятор вступу</h2>
                <p className="text-gray-600 mb-4">
                  Розрахуйте свої шанси на вступ до конкретного університету на основі результатів тестів та інших критеріїв.
                </p>
                <Link href="/admission-calculator">
                  <button
                    className={`py-5 px-10 bg-indigo-600 text-white font-bold rounded-full shadow-xl relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
                    onMouseEnter={() => setAnimateCalculator(true)}
                    onMouseLeave={() => setAnimateCalculator(false)}
                  >
                    <span className="text-3xl">📊</span>
                    <span className="text-xl ml-2">Використати калькулятор</span>
                    <div className={`absolute inset-0 border-4 border-indigo-300 rounded-full transition-transform duration-300 ease-in-out ${
                      animateCalculator ? "transform scale-110" : "transform scale-0"
                    }`}></div>
                  </button>
                </Link>
              </div>
              <div className="text-center bg-pink-50 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Персоналізовані рекомендації</h2>
                <p className="text-gray-600 mb-4">
                  Отримуйте рекомендації щодо університетів та програм на основі результатів вашого тесту.
                </p>
                <Link href="/recommendations">
                  <button
                    className={`py-5 px-10 bg-pink-600 text-white font-bold rounded-full shadow-xl relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
                    onMouseEnter={() => setAnimateRecommendations(true)}
                    onMouseLeave={() => setAnimateRecommendations(false)}
                  >
                    <span className="text-3xl">✨</span>
                    <span className="text-xl ml-2">Отримати рекомендації</span>
                    <div className={`absolute inset-0 border-4 border-pink-300 rounded-full transition-transform duration-300 ease-in-out ${
                      animateRecommendations ? "transform scale-110" : "transform scale-0"
                    }`}></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
