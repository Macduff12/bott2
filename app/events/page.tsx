"use client";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { useState } from "react";

const EventsPage = () => {
  // Animation states for different events
  const [animateWorkshops, setAnimateWorkshops] = useState(false);
  const [animateWebinars, setAnimateWebinars] = useState(false);
  const [animateConferences, setAnimateConferences] = useState(false);
  const [animateMeetups, setAnimateMeetups] = useState(false);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
        <div className="w-full max-w-6xl p-6 bg-white rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">Події та Можливості</h1>
            <p className="text-2xl text-gray-700">
              Дізнайтеся про останні заходи та навчальні можливості, щоб покращити свої навички та знання.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Workshops */}
            <div className="text-center bg-blue-50 p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Воркшопи</h2>
              <p className="text-gray-600 mb-4">
                Практичні воркшопи з програмування, дизайну, менеджменту та інших дисциплін.
              </p>
              <Link href="/events/workshops">
                <button
                  className={`py-5 px-10 bg-blue-600 text-white font-bold rounded-full shadow-xl relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
                  onMouseEnter={() => setAnimateWorkshops(true)}
                  onMouseLeave={() => setAnimateWorkshops(false)}
                >
                  <span className="text-3xl">🛠️</span>
                  <span className="text-xl ml-2">Переглянути Воркшопи</span>
                  <div className={`absolute inset-0 border-4 border-blue-300 rounded-full transition-transform duration-300 ease-in-out ${
                    animateWorkshops ? "transform scale-110" : "transform scale-0"
                  }`}></div>
                </button>
              </Link>
            </div>

            {/* Webinars */}
            <div className="text-center bg-green-50 p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Вебінари</h2>
              <p className="text-gray-600 mb-4">
                Онлайн-вебінари від професіоналів на різні теми від IT до бізнесу.
              </p>
              <Link href="/events/webinars">
                <button
                  className={`py-5 px-10 bg-green-600 text-white font-bold rounded-full shadow-xl relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
                  onMouseEnter={() => setAnimateWebinars(true)}
                  onMouseLeave={() => setAnimateWebinars(false)}
                >
                  <span className="text-3xl">💻</span>
                  <span className="text-xl ml-2">Дізнатися більше</span>
                  <div className={`absolute inset-0 border-4 border-green-300 rounded-full transition-transform duration-300 ease-in-out ${
                    animateWebinars ? "transform scale-110" : "transform scale-0"
                  }`}></div>
                </button>
              </Link>
            </div>

            {/* Conferences */}
            <div className="text-center bg-yellow-50 p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Конференції</h2>
              <p className="text-gray-600 mb-4">
                Приєднуйтесь до міжнародних конференцій та поділіться своїм досвідом з іншими.
              </p>
              <Link href="/events/conferences">
                <button
                  className={`py-5 px-10 bg-yellow-600 text-white font-bold rounded-full shadow-xl relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
                  onMouseEnter={() => setAnimateConferences(true)}
                  onMouseLeave={() => setAnimateConferences(false)}
                >
                  <span className="text-3xl">🎤</span>
                  <span className="text-xl ml-2">Долучитися до конференції</span>
                  <div className={`absolute inset-0 border-4 border-yellow-300 rounded-full transition-transform duration-300 ease-in-out ${
                    animateConferences ? "transform scale-110" : "transform scale-0"
                  }`}></div>
                </button>
              </Link>
            </div>

            {/* Meetups */}
            <div className="text-center bg-purple-50 p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Мітапи</h2>
              <p className="text-gray-600 mb-4">
                Зустрічайтеся з однодумцями, обговорюйте ідеї та розширюйте свою мережу контактів.
              </p>
              <Link href="/events/meetups">
                <button
                  className={`py-5 px-10 bg-purple-600 text-white font-bold rounded-full shadow-xl relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
                  onMouseEnter={() => setAnimateMeetups(true)}
                  onMouseLeave={() => setAnimateMeetups(false)}
                >
                  <span className="text-3xl">🤝</span>
                  <span className="text-xl ml-2">Дізнатися про мітапи</span>
                  <div className={`absolute inset-0 border-4 border-purple-300 rounded-full transition-transform duration-300 ease-in-out ${
                    animateMeetups ? "transform scale-110" : "transform scale-0"
                  }`}></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
