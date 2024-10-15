"use client";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const weatherApiKey = "539b3381223bfa7da1ac2c0aab7637d2"; // Ключ для погоди
  const newsApiKey = "e90b380c0ea644599417b336e6bec16e"; // Ключ для новин

  const handleSendMessage = async () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" }
      ]);

      let botResponse = "";

      switch (true) {
        case input.toLowerCase().startsWith("переклад"):
          botResponse = await handleTranslation(input);
          break;
        case input.toLowerCase() === "привіт":
          botResponse = "👋 Привіт! Як я можу допомогти вам сьогодні?";
          break;
        case input.toLowerCase() === "як справи?":
          botResponse = "😊 У мене все добре, дякую! А у вас?";
          break;
        case input.toLowerCase() === "допомога":
          botResponse = "🆘 Я можу допомогти з наступними командами:\n1. 'привіт'\n2. 'як справи?'\n3. 'погода [місто]'\n4. 'новини'\n5. 'переклад [мова] [текст]'\n6. 'інформація'\n7. 'мета'\n8. 'послуги'\n9. 'контакти'\n🔍 Просто введіть одну з цих команд!";
          break;
        case input.toLowerCase().startsWith("погода"):
          const city = input.split(" ")[1];
          if (!city) {
            botResponse = "🏙️ Будь ласка, введіть місто для перевірки погоди, наприклад, 'погода Київ'.";
          } else {
            botResponse = await fetchWeather(city);
          }
          break;
        case input.toLowerCase() === "новини":
          botResponse = await fetchNews();
          break;
        case input.toLowerCase() === "інформація":
          botResponse = "📋 Ми - команда, що прагне допомогти вам з усіма вашими запитаннями та потребами.";
          break;
        case input.toLowerCase() === "мета":
          botResponse = "🎯 Наша мета - забезпечити найкращий сервіс та підтримку для наших користувачів.";
          break;
        case input.toLowerCase() === "послуги":
          botResponse = "🛠️ Ми пропонуємо різноманітні послуги, включаючи переклад, інформацію про погоду, а також підтримку по різним запитанням.";
          break;
        case input.toLowerCase() === "контакти":
          botResponse = "📞 Зв'яжіться з нами за електронною поштою: support@example.com";
          break;
        case input.toLowerCase() === "фідбек":
          botResponse = "✍️ Ми цінуємо вашу думку! Ви можете залишити відгук на нашому сайті.";
          break;
        default:
          botResponse = "❓ Вибачте, я не розумію цю команду. Введіть 'допомога', щоб побачити доступні команди.";
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" }
      ]);
      setInput("");
    }
  };

  const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      const { main, weather } = response.data;
      return `☀️ Погода в місті ${city}: ${main.temp}°C, ${weather[0].description}.`;
    } catch (error) {
      return "❌ На жаль, я не зміг знайти інформацію про погоду для цього міста.";
    }
  };

  const fetchNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=ua&apiKey=${newsApiKey}`;

    try {
      const response = await axios.get(url);
      const articles = response.data.articles.slice(0, 5);
      const newsMessages = articles.map(article => `📰 ${article.title}\n🔗 [Деталі](${article.url})`).join("\n\n");
      return newsMessages || "❌ Наразі немає доступних новин.";
    } catch (error) {
      return "❌ На жаль, сталася помилка під час отримання новин.";
    }
  };

  const handleTranslation = async (input) => {
    const parts = input.split(" ");
    if (parts.length < 3) {
      return "📝 Будь ласка, введіть команду у форматі 'переклад [мова] [текст]'.";
    }

    const targetLang = parts[1];
    const textToTranslate = parts.slice(2).join(" ");

    try {
      const response = await axios.post('https://libretranslate.com/translate', {
        q: textToTranslate,
        source: "auto",
        target: targetLang,
        format: "text"
      });

      return `🔤 Переклад: ${response.data.translatedText}`;
    } catch (error) {
      return "❌ На жаль, сталася помилка під час перекладу. Спробуйте ще раз.";
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-200 pt-5">
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-2 animate-bounce">🤖 Чат-бот</h1>
            <p className="text-2xl text-gray-700">Питайте, і я допоможу вам! 🌟</p>
          </div>
          <div className="border rounded-lg h-96 overflow-y-auto p-4 bg-gray-100 mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-2 rounded-lg transform transition-transform duration-300 ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white animate-pulse"
                      : "bg-gray-300 text-black animate-fadeIn animate-slideIn"
                  }`}
                >
                  {message.text.split('\n').map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Напишіть ваше повідомлення..."
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-blue-600 text-white font-bold rounded-lg px-4 hover:bg-blue-700 transition flex items-center transform hover:scale-105"
            >
              <FaPaperPlane className="mr-1" />
              Відправити
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-in;
        }

        .animate-pulse {
          animation: pulse 1s infinite;
        }
      `}</style>
    </>
  );
};

export default Home;
