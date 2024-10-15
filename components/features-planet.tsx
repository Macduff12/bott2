"use client";
import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import { useState } from "react";

export default function FeaturesPlanet() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Основні функції додатку
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                <div className="relative animate-spin-slow">
                  <Image
                    className="rounded-full bg-gray-900"
                    src={PlanetImg}
                    width={400}
                    height={400}
                    alt="Planet"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="absolute w-3 h-3 bg-red-500 rounded-full"
                      style={{ top: '10%', left: '30%' }}
                      onMouseEnter={() => setHoveredFeature('userProfiles')}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      {hoveredFeature === 'userProfiles' && (
                        <div className="absolute bg-gray-800 text-white p-2 rounded-md text-xs">
                          Профілі користувачів
                        </div>
                      )}
                    </div>
                    <div
                      className="absolute w-3 h-3 bg-green-500 rounded-full"
                      style={{ top: '60%', left: '50%' }}
                      onMouseEnter={() => setHoveredFeature('messages')}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      {hoveredFeature === 'messages' && (
                        <div className="absolute bg-gray-800 text-white p-2 rounded-md text-xs">
                          Система обміну повідомленнями
                        </div>
                      )}
                    </div>
                    {/* Add more dots here */}
                  </div>
                </div>
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM4 2h8v12H4V2z" />
                </svg>
                <span>Профілі користувачів</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Кожен користувач має свій профіль з особистою інформацією, аватаром, статусом (студент, викладач, адміністрація) та контактними даними. Можливість редагування профілю та налаштувань приватності.
              </p>
            </article>
            <article className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM4 2h8v12H4V2z" />
                </svg>
                <span>Система обміну повідомленнями</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Приватні повідомлення та групові чати, форуми для обговорень на різні теми, сповіщення про нові повідомлення та важливі події.
              </p>
            </article>
            <article className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM4 2h8v12H4V2z" />
                </svg>
                <span>Управління розкладом</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Перегляд розкладу лекцій, семінарів і лабораторних занять, можливість додавання подій у календар та синхронізація з зовнішніми календарями.
              </p>
            </article>
            <article className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM4 2h8v12H4V2z" />
                </svg>
                <span>Управління курсами та завданнями</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Викладачі створюють курси, додають матеріали та завдання, студенти переглядають матеріали, завантажують завдання та отримують оцінки. Сповіщення про нові завдання, дедлайни та оновлення.
              </p>
            </article>
            <article className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
               <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM4 2h8v12H4V2z" />
                </svg>
                <span>Групові проекти та співпраця</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Створення груп для роботи над проектами, інструменти для спільної роботи, такі як спільні документи та дошки обговорень.
              </p>
            </article>
            <article className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM4 2h8v12H4V2z" />
                </svg>
                <span>Аналітика та звітність</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Можливість перегляду статистики, створення звітів про успішність студентів, відвідуваність занять та інші важливі показники.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
