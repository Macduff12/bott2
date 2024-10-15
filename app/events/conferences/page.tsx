import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";

const ConferencesPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
        <div className="w-full max-w-6xl p-6 bg-white rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Конференції</h1>
            <p className="text-xl text-gray-700">
              Конференції – це унікальна можливість для професіоналів та ентузіастів обмінятися досвідом.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Конференція з технологій
              </h2>
              <p className="text-gray-600 mb-4">
                Досліджуйте новітні технології та інновації в світі ІТ.
              </p>
              <Link href="/events/conferences/1">
                <button className="py-3 px-6 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors">
                  Детальніше
                </button>
              </Link>
              <p className="mt-2 text-gray-500">
                <Link href="https://techconference.com" className="text-blue-600 hover:underline">
                  Дивитися сайт конференції
                </Link>
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Конференція з дизайну
              </h2>
              <p className="text-gray-600 mb-4">
                Обговоріть тенденції та кращі практики в сфері дизайну.
              </p>
              <Link href="/events/conferences/2">
                <button className="py-3 px-6 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors">
                  Детальніше
                </button>
              </Link>
              <p className="mt-2 text-gray-500">
                <Link href="https://designconference.com" className="text-blue-600 hover:underline">
                  Дивитися сайт конференції
                </Link>
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Конференція з маркетингу
              </h2>
              <p className="text-gray-600 mb-4">
                Зустріч для маркетологів для обміну стратегіями та інсайтами.
              </p>
              <Link href="/events/conferences/3">
                <button className="py-3 px-6 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors">
                  Детальніше
                </button>
              </Link>
              <p className="mt-2 text-gray-500">
                <Link href="https://marketingconference.com" className="text-blue-600 hover:underline">
                  Дивитися сайт конференції
                </Link>
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Конференція з розвитку кар'єри
              </h2>
              <p className="text-gray-600 mb-4">
                Отримайте поради щодо кар'єрного зростання та професійного розвитку.
              </p>
              <Link href="/events/conferences/4">
                <button className="py-3 px-6 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors">
                  Детальніше
                </button>
              </Link>
              <p className="mt-2 text-gray-500">
                <Link href="https://careerconference.com" className="text-blue-600 hover:underline">
                  Дивитися сайт конференції
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Майбутні конференції</h3>
            <p className="text-gray-600 mb-4">
              Ознайомтеся з запланованими конференціями та приєднуйтесь до нас!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Конференція з аналітики даних
              </h2>
              <p className="text-gray-600 mb-4">
                Досліджуйте нові методи та інструменти для аналізу даних.
              </p>
              <Link href="/events/conferences/5">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
              <p className="mt-2 text-gray-500">
                <Link href="https://dataanalyticsconference.com" className="text-blue-600 hover:underline">
                  Дивитися сайт конференції
                </Link>
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Конференція з кібербезпеки
              </h2>
              <p className="text-gray-600 mb-4">
                Обговоріть важливі питання та виклики у сфері кібербезпеки.
              </p>
              <Link href="/events/conferences/6">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
              <p className="mt-2 text-gray-500">
                <Link href="https://cybersecurityconference.com" className="text-blue-600 hover:underline">
                  Дивитися сайт конференції
                </Link>
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Конференція з нових технологій
              </h2>
              <p className="text-gray-600 mb-4">
                Відкрийте для себе останні інновації та тренди.
              </p>
              <Link href="/events/conferences/7">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
              <p className="mt-2 text-gray-500">
                <Link href="https://newtechnologiesconference.com" className="text-blue-600 hover:underline">
                  Дивитися сайт конференції
                </Link>
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Конференція з управління проектами
              </h2>
              <p className="text-gray-600 mb-4">
                Отримайте знання про сучасні підходи до управління проектами.
              </p>
              <Link href="/events/conferences/8">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
              <p className="mt-2 text-gray-500">
                <Link href="https://projectmanagementconference.com" className="text-blue-600 hover:underline">
                  Дивитися сайт конференції
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Реєстрація на конференції</h3>
            <p className="text-gray-600">
              Не пропустіть шанс отримати нові знання та досвід!
            </p>
            <Link href="/register">
              <button className="mt-4 py-3 px-6 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-colors">
                Зареєструватися
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConferencesPage;
