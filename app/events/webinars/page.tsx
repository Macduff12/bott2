import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";

const WebinarsPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
        <div className="w-full max-w-6xl p-6 bg-white rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Вебінари 📚</h1>
            <p className="text-xl text-gray-700">
              Онлайн-вебінари для здобуття нових знань у різних сферах. 🌟
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Existing Webinars */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Вебінар з бізнесу 💼
              </h2>
              <p className="text-gray-600 mb-4">
                Дізнайтеся про новітні стратегії управління бізнесом на вебінарі від експертів.
              </p>
              <Link href="https://youtu.be/l4XBJVIO22s?si=L_Qmg3BotpmjvRMs">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Вебінар з маркетингу 📈
              </h2>
              <p className="text-gray-600 mb-4">
                Поглибте свої знання у маркетингу з онлайн-лекціями від провідних спеціалістів.
              </p>
              <Link href="https://www.youtube.com/live/JfDfJhW0u8s?si=Kc_QTZz92BY4Iz6t">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Вебінар з програмування 💻
              </h2>
              <p className="text-gray-600 mb-4">
                Вивчайте нові мови програмування та технології з досвідченими наставниками.
              </p>
              <Link href="https://www.youtube.com/live/hrEDr2lOE_w?si=AMjci1w3sBHkriK7">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Вебінар з особистісного розвитку 🌱
              </h2>
              <p className="text-gray-600 mb-4">
                Розвивайте свої навички та досягайте нових вершин у житті та кар'єрі.
              </p>
              <Link href="https://www.youtube.com/live/N-jLd4UHRMc?si=166CnSlhqNfsn2gb">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Вебінар з фінансів 💰
              </h2>
              <p className="text-gray-600 mb-4">
                Досліджуйте секрети управління особистими фінансами з експертами.
              </p>
              <Link href="https://youtu.be/rFxLb026Jbc?si=30mGWE9HbbgyoESH">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Вебінар з графічного дизайну 🎨
              </h2>
              <p className="text-gray-600 mb-4">
                Поглибте свої навички в графічному дизайні з практичними заняттями.
              </p>
              <Link href="https://osvita.diia.gov.ua/courses/graphic-designer">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Вебінар з охорони здоров'я 🏥
              </h2>
              <p className="text-gray-600 mb-4">
                Дізнайтеся про здоровий спосіб життя та профілактику захворювань.
              </p>
              <Link href="https://www.youtube.com/watch?v=g1IPG6zlmgI">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Вебінар з екології 🌍
              </h2>
              <p className="text-gray-600 mb-4">
                Обговорення сучасних екологічних викликів та їх розв'язання.
              </p>
              <Link href="https://www.youtube.com/watch?v=Q1VvaUNn2TU">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            {/* New Webinars */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Вебінар з підприємництва 🚀
              </h2>
              <p className="text-gray-600 mb-4">
                Досліджуйте основи успішного підприємництва та стартапів.
              </p>
              <Link href="https://employers.org.ua/announcements/id298">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Вебінар з проектного управління 📊
              </h2>
              <p className="text-gray-600 mb-4">
                Навчіться управляти проектами ефективно з професіоналами.
              </p>
              <Link href="https://prometheus.org.ua/course/course-v1:Prometheus+BASICPM101+2022_T1">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Вебінар з штучного інтелекту 🤖
              </h2>
              <p className="text-gray-600 mb-4">
                Досліджуйте можливості та виклики штучного інтелекту.
              </p>
              <Link href="https://www.youtube.com/watch?v=P5gPDjnWjto">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
                </button>
              </Link>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Вебінар з кібербезпеки 🔐
              </h2>
              <p className="text-gray-600 mb-4">
                Зрозумійте основи кібербезпеки та захисту даних.
              </p>
              <Link href="https://www.youtube.com/watch?v=uid_HUZG12k">
                <button className="py-3 px-6 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                  Детальніше
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

export default WebinarsPage;
