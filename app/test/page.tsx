"use client";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { useState } from "react";

const SpecialityTest = () => {
  // Стан для питань та відповідей
  const questions = [
    {
      question: "Які види діяльності вам більше до вподоби?",
      options: [
        "Розв'язувати математичні задачі",
        "Проводити експерименти в лабораторії",
        "Спілкуватися з людьми та допомагати їм",
        "Створювати нові ідеї та продукти",
      ],
      answer: 0,
    },
    {
      question: "Яка діяльність вас найбільше захоплює?",
      options: [
        "Проводити дослідження",
        "Писати коди програм",
        "Співати або грати на інструментах",
        "Займатися мистецтвом або дизайном",
      ],
      answer: 1,
    },
    {
      question: "В якому середовищі ви хочете працювати?",
      options: [
        "У лабораторії або офісі",
        "На свіжому повітрі",
        "В студії або на сцені",
        "В команді, працюючи над проектами",
      ],
      answer: 2,
    },
    {
      question: "Які предмети вам подобалися в школі?",
      options: [
        "Математика та фізика",
        "Хімія та біологія",
        "Література та мови",
        "Мистецтво та музика",
      ],
      answer: 0,
    },
    {
      question: "Що ви вважаєте найважливішим у своїй кар'єрі?",
      options: [
        "Фінансова стабільність",
        "Креативність та самовираження",
        "Допомога іншим",
        "Можливість розвиватися та вчитися",
      ],
      answer: 3,
    },
    {
      question: "Який стиль навчання вам більше підходить?",
      options: [
        "Практичний підхід",
        "Теоретичне навчання",
        "Групова робота",
        "Індивідуальна робота",
      ],
      answer: 2,
    },
    {
      question: "Що вам подобається робити у вільний час?",
      options: [
        "Читати наукові книги",
        "Вивчати нові технології",
        "Займатися волонтерством",
        "Створювати мистецькі проекти",
      ],
      answer: 1,
    },
    {
      question: "Який з цих предметів ви б хотіли вивчати в університеті?",
      options: [
        "Інженерія",
        "Медицина",
        "Психологія",
        "Графічний дизайн",
      ],
      answer: 0,
    },
    {
      question: "Як ви ставитеся до роботи в команді?",
      options: [
        "Мені подобається працювати в команді",
        "Я віддаю перевагу самостійній роботі",
        "Я можу працювати в обох варіантах",
        "Я не люблю працювати з іншими",
      ],
      answer: 2,
    },
    {
      question: "Які навички ви вважаєте своїми сильними?",
      options: [
        "Аналітичні навички",
        "Комунікаційні навички",
        "Креативність",
        "Технічні навички",
      ],
      answer: 3,
    },
    {
      question: "Яку роль ви зазвичай берете на себе в групових проектах?",
      options: [
        "Лідер",
        "Організатор",
        "Виконавець",
        "Критик",
      ],
      answer: 0,
    },
    {
      question: "Що вас найбільше мотивує в навчанні?",
      options: [
        "Можливість практичного застосування знань",
        "Розвиток творчих здібностей",
        "Допомога іншим",
        "Досягнення високих оцінок",
      ],
      answer: 2,
    },
    {
      question: "Які технології вам цікаві?",
      options: [
        "Штучний інтелект",
        "Веб-розробка",
        "Біотехнології",
        "Мистецтво та дизайн",
      ],
      answer: 0,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (index: number) => {
    setUserAnswers([...userAnswers, index]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsSubmitted(true);
      generateResult();
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setIsSubmitted(false);
    setResult(null);
  };

  const generateResult = () => {
    const counts = {
      engineer: 0,
      doctor: 0,
      psychologist: 0,
      artist: 0,
    };

    userAnswers.forEach((answer, index) => {
      if (answer === 0 || answer === 1) counts.engineer++;
      if (answer === 1 || answer === 2) counts.doctor++;
      if (answer === 3 || answer === 4) counts.psychologist++;
      if (answer === 0 || answer === 3) counts.artist++;
    });

    const highestCount = Math.max(counts.engineer, counts.doctor, counts.psychologist, counts.artist);

    if (highestCount === counts.engineer) {
      setResult("Ви можете стати інженером!");
    } else if (highestCount === counts.doctor) {
      setResult("Ви можете стати лікарем!");
    } else if (highestCount === counts.psychologist) {
      setResult("Ви можете стати психологом!");
    } else if (highestCount === counts.artist) {
      setResult("Ви можете стати художником або дизайнером!");
    } else {
      setResult("Ваші відповіді вказують на різні спеціальності. Розгляньте всі варіанти!");
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pt-5">
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">Пройдіть тест, щоб визначитися зі своєю спеціальністю</h1>
            {isSubmitted ? (
              <div className="text-2xl text-gray-700">
                <p>{result}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={handleRetry}>
                  Пройти знову
                </button>
                <Link href="/">
                  <button className="ml-4 mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded">
                    Повернутися на головну
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <p className="text-xl text-gray-700">Запитання {currentQuestion + 1} з {questions.length}</p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{questions[currentQuestion].question}</h2>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition"
                      onClick={() => handleAnswer(index)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpecialityTest;
