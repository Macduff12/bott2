// pages/financial-aid.tsx

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { FC } from "react";

const FinancialAid: FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pt-5">
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Фінансові поради</h1>
            <p className="text-2xl text-gray-700">
              Ось кілька варіантів фінансової допомоги, які можуть бути корисні для студентів:
            </p>
          </div>
          <div className="space-y-8">
            {/* Scholarships */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">Стипендії</h2>
              <p className="text-gray-600 mb-4">
                Стипендії можуть покривати частину або всю вартість навчання. Вони часто надаються на основі академічних досягнень, соціального статусу або специфічних інтересів.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li><strong>Національні стипендії:</strong> Для студентів, які навчаються на території країни.</li>
                <li><strong>Міжнародні стипендії:</strong> Для студентів, які навчаються за кордоном.</li>
                <li><strong>Спеціалізовані стипендії:</strong> Для студентів, які навчаються за певними спеціальностями.</li>
              </ul>
            </div>

            {/* Grants */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">Гранти</h2>
              <p className="text-gray-600 mb-4">
                Гранти часто надаються на основі фінансових потреб і можуть допомогти покрити витрати на навчання, книги та інші навчальні матеріали.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li><strong>Урядові гранти:</strong> Фінансування від державних органів.</li>
                <li><strong>Гранти від фондів:</strong> Фінансування від неурядових організацій та фондів.</li>
                <li><strong>Гранти від університетів:</strong> Фінансування від вашого навчального закладу.</li>
              </ul>
            </div>

            {/* Loans */}
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">Кредити</h2>
              <p className="text-gray-600 mb-4">
                Студентські кредити можуть допомогти покрити витрати на навчання, проте важливо розуміти умови погашення та відсотки.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li><strong>Урядові кредити:</strong> Кредити з пільговими умовами від держави.</li>
                <li><strong>Приватні кредити:</strong> Кредити від банків і фінансових установ.</li>
                <li><strong>Рефінансування:</strong> Можливість зміни умов кредиту для полегшення погашення.</li>
              </ul>
            </div>

            {/* Work Opportunities */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">Робота під час навчання</h2>
              <p className="text-gray-600 mb-4">
                Підробіток може бути корисним для покриття витрат на навчання і життя. Розгляньте такі можливості:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li><strong>Робота на кампусі:</strong> Можливість працювати в бібліотеці, лабораторіях або адміністративних відділах університету.</li>
                <li><strong>Парт-тайм робота:</strong> Часткова зайнятість поза кампусом, наприклад, в кафе, магазинах або як фрілансер.</li>
                <li><strong>Стажування:</strong> Можливість отримати досвід в обраній галузі і отримувати за це фінансову компенсацію.</li>
              </ul>
            </div>

            {/* Financial Planning */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">Фінансове планування</h2>
              <p className="text-gray-600 mb-4">
                Планування вашого бюджету може допомогти уникнути фінансових труднощів. Розгляньте ці поради:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li><strong>Складання бюджету:</strong> Визначте свої доходи і витрати, щоб знати, скільки ви можете витратити.</li>
                <li><strong>Використання фінансових додатків:</strong> Мобільні додатки можуть допомогти відстежувати витрати і планувати фінанси.</li>
                <li><strong>Фінансові консультації:</strong> Консультації з фінансовим радником можуть допомогти вам краще зрозуміти фінансові можливості та обов'язки.</li>
              </ul>
            </div>

            {/* Scholarships and Grants Applications */}
            <div className="bg-teal-50 p-6 rounded-lg shadow-md">
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">Як подати заявку на стипендії та гранти</h2>
              <p className="text-gray-600 mb-4">
                Подання заявки на фінансову допомогу може бути складним процесом. Ось кілька кроків, які допоможуть вам:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li><strong>Дослідження можливостей:</strong> Розгляньте всі доступні варіанти і вимоги до кожного типу допомоги.</li>
                <li><strong>Підготовка документів:</strong> Переконайтеся, що у вас є всі необхідні документи, такі як академічні записи, рекомендації і мотиваційний лист.</li>
                <li><strong>Заповнення заявок:</strong> Уважно заповнюйте заявки і дотримуйтесь всіх вказівок.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FinancialAid;
