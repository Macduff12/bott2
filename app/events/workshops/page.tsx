import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";

const WorkshopsPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
        <div className="w-full max-w-6xl p-6 bg-white rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Воркшопи</h1>
            <p className="text-xl text-gray-700">
              Практичні воркшопи для підвищення ваших професійних навичок.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Воркшоп з програмування */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <img
                src="/images/programming.jpeg"
                alt="Воркшоп з програмування"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Воркшоп з програмування
              </h2>
              <p className="text-gray-600 mb-4">
                Дізнайтеся про останні тренди у програмуванні та вдоскональте свої навички з експертами.
              </p>
              <p className="text-gray-500 mb-4">Дата: 15 жовтня 2024</p>
              <p className="text-gray-500 mb-4">Час: 10:00 - 13:00</p>
              <div className="flex space-x-4">
                <Link href="/events/workshops/1">
                  <button className="py-3 px-6 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-300">
                    Детальніше
                  </button>
                </Link>
                <Link href="/register/workshop/1">
                  <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors duration-300">
                    Реєстрація
                  </button>
                </Link>
              </div>
            </div>

            {/* Воркшоп з дизайну */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <img
                src="/images/design.jpg"
                alt="Воркшоп з дизайну"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Воркшоп з дизайну
              </h2>
              <p className="text-gray-600 mb-4">
                Опануйте нові методи та інструменти для створення сучасних дизайнів.
              </p>
              <p className="text-gray-500 mb-4">Дата: 20 жовтня 2024</p>
              <p className="text-gray-500 mb-4">Час: 14:00 - 17:00</p>
              <div className="flex space-x-4">
                <Link href="/events/workshops/2">
                  <button className="py-3 px-6 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-300">
                    Детальніше
                  </button>
                </Link>
                <Link href="/register/workshop/2">
                  <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors duration-300">
                    Реєстрація
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Секція відгуків */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Відгуки учасників</h2>
            <p className="text-gray-600 mb-2">"Цей воркшоп був надзвичайно корисним! Дякую!" - Олексій</p>
            <p className="text-gray-600 mb-2">"Я отримав багато нових знань і навичок!" - Анна</p>
            <p className="text-gray-600">"Відмінний досвід і професійні інструктори!" - Ігор</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkshopsPage;
