import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";

const MeetupsPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
        <div className="w-full max-w-6xl p-6 bg-white rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Майбутні мітапи</h1>
            <p className="text-xl text-gray-700">
              Мітапи – це чудова можливість зустрітися з однодумцями та обмінятися ідеями.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Мітап стартапів
              </h2>
              <p className="text-gray-600 mb-4">
                Обговоріть свої ідеї та проекти на мітапі, присвяченому стартапам.
              </p>
              <Link href="/events/meetups/1">
                <button className="py-3 px-6 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Мітап по дизайну UX/UI
              </h2>
              <p className="text-gray-600 mb-4">
                Візьміть участь у мітапі, де професіонали UX/UI діляться своїм досвідом.
              </p>
              <Link href="/events/meetups/2">
                <button className="py-3 px-6 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Мітап для розробників
              </h2>
              <p className="text-gray-600 mb-4">
                Зустріч для розробників, щоб обговорити нові технології та інструменти.
              </p>
              <Link href="/events/meetups/3">
                <button className="py-3 px-6 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Мітап для фахівців з маркетингу
              </h2>
              <p className="text-gray-600 mb-4">
                Долучайтеся до обговорення сучасних стратегій та тенденцій у маркетингу.
              </p>
              <Link href="/events/meetups/4">
                <button className="py-3 px-6 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Мітап по аналітиці даних
              </h2>
              <p className="text-gray-600 mb-4">
                Вивчайте нові методи аналізу даних разом із провідними експертами.
              </p>
              <Link href="/events/meetups/5">
                <button className="py-3 px-6 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Мітап з управління проектами
              </h2>
              <p className="text-gray-600 mb-4">
                Обговоріть найкращі практики управління проектами з професіоналами.
              </p>
              <Link href="/events/meetups/6">
                <button className="py-3 px-6 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Мітап з кібербезпеки
              </h2>
              <p className="text-gray-600 mb-4">
                Долучайтеся до обговорення актуальних питань кібербезпеки.
              </p>
              <Link href="/events/meetups/7">
                <button className="py-3 px-6 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Мітап з нових технологій
              </h2>
              <p className="text-gray-600 mb-4">
                Досліджуйте нові технології та інновації разом із експертами.
              </p>
              <Link href="/events/meetups/8">
                <button className="py-3 px-6 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Відгуки учасників</h3>
            <p className="text-gray-600 mb-2">
              "Чудова можливість для обміну ідеями!" - Олена, учасниця мітапу з UX/UI.
            </p>
            <p className="text-gray-600 mb-2">
              "Дуже корисні поради від експертів!" - Іван, учасник мітапу для розробників.
            </p>
            <p className="text-gray-600 mb-2">
              "Незабутній досвід!" - Марія, учасниця мітапу стартапів.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MeetupsPage;
