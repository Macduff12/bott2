"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

interface Course {
  id?: string; // Додано для можливості редагування
  name: string;
  description: string;
}

const CourseForm: React.FC<{
  newCourse: Course;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onAdd: (courseId?: string) => void; // Додано параметр для ID курсу
  isEditing: boolean;
  courseId?: string; // Додано для ID курсу
}> = ({ newCourse, onChange, onAdd, isEditing, courseId }) => (
  <div className="form-container mb-4 p-8 border border-gray-300 rounded-lg shadow-2xl bg-white max-w-lg mx-auto transform transition-all hover:scale-105 hover:shadow-2xl hover:border-blue-500 duration-500">
    <h2 className="text-3xl font-extrabold mb-6 text-center text-gradient bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">{isEditing ? "Редагувати курс" : "Додати новий курс"}</h2>
    <div className="mb-6">
      <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Назва курсу</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Назва курсу"
        value={newCourse.name}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-400 focus:outline-none shadow-sm hover:shadow-md hover:border-blue-400 transition-all"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="description" className="block mb-2 font-semibold text-gray-700">Опис курсу</label>
      <textarea
        id="description"
        name="description"
        placeholder="Опис курсу"
        value={newCourse.description}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-400 focus:outline-none shadow-sm h-32 resize-none hover:shadow-md hover:border-blue-400 transition-all"
      />
    </div>
    <button
      onClick={() => onAdd(courseId)} // Передати ID курсу для редагування
      className="w-full py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-lg hover:from-green-500 hover:to-blue-600 transition-transform duration-300 transform hover:scale-110 shadow-lg"
    >
      {isEditing ? "Зберегти зміни" : "Додати курс"}
    </button>
  </div>
);

const CourseList: React.FC<{ courses: Course[]; onEdit: (course: Course) => void }> = ({ courses, onEdit }) => (
  <div className="course-list mt-8">
    {courses.length > 0 ? (
      <ul className="space-y-4">
        {courses.map((course, index) => (
          <li key={index} className="mb-4 p-6 border border-gray-200 rounded-lg shadow-md bg-white transform transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold text-gray-800">{course.name}</h3>
            <p className="text-gray-600">{course.description}</p>
            <button onClick={() => onEdit(course)} className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
              Переглянути/Редагувати
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-center text-gray-600">Курси ще не додані.</p>
    )}
  </div>
);

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [newCourse, setNewCourse] = useState<Course>({ name: "", description: "" });
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false); // Стан для редагування
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null); // ID курсу для редагування

  // Функція для отримання курсів з API
  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:3005/api/courses");
      if (!response.ok) {
        throw new Error("Не вдалося отримати курси");
      }
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Виклик функції fetchCourses при першому рендерингу
  useEffect(() => {
    fetchCourses();
  }, []);

  const handleCourseInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewCourse({ ...newCourse, [event.target.name]: event.target.value });
  };

  const handleAddOrUpdateCourse = async (courseId?: string) => {
    if (newCourse.name && newCourse.description) {
      try {
        const method = courseId ? "PUT" : "POST"; // Визначення методу в залежності від редагування
        const url = courseId ? `http://localhost:3005/api/courses/${courseId}` : "http://localhost:3005/api/courses";

        const response = await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCourse),
        });

        if (!response.ok) {
          throw new Error(courseId ? "Не вдалося оновити курс" : "Не вдалося додати курс");
        }

        const addedOrUpdatedCourse = await response.json();
        
        if (courseId) {
          // Оновлення курсу в списку
          setCourses(courses.map(course => (course.id === courseId ? addedOrUpdatedCourse : course)));
        } else {
          // Додати новий курс до списку
          setCourses([...courses, addedOrUpdatedCourse]);
        }

        setNewCourse({ name: "", description: "" });
        setShowForm(false);
        setIsEditing(false); // Скидання стану редагування
        setEditingCourseId(null); // Скидання ID курсу
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Будь ласка, заповніть усі поля.");
    }
  };

  const handleEditCourse = (course: Course) => {
    setNewCourse(course); // Заповнити форму даними курсу
    setShowForm(true); // Показати форму
    setIsEditing(true); // Встановити режим редагування
    setEditingCourseId(course.id); // Встановити ID курсу
  };

  return (
    <div className="wrapper">
      <Header />
      <link rel="stylesheet" href="css/main.css" />
      <script src="libs/gsap/gsap.min.js" defer></script>
      <script src="libs/gsap/ScrollTrigger.min.js" defer></script>
      <script src="libs/gsap/ScrollSmoother.min.js" defer></script>
      <script src="js/app.js" defer></script>

      <div className="content">
        <header className="main-header">
          <div className="layers">
            <div className="layer__header">
              <div className="layers__caption">Розкрий свій потенціал</div>
              <div className="layers__title">Розширюй свої знання</div>
            </div>
            <div className="layer layers__base" style={{ backgroundImage: 'url(img/layer-base.png)' }}></div>
            <div className="layer layers__middle" style={{ backgroundImage: 'url(img/layer-middle.png)' }}></div>
            <div className="layer layers__front" style={{ backgroundImage: 'url(img/layer-front.png)' }}></div>
          </div>
        </header>

        <article className="main-article" style={{ backgroundImage: 'url(img/dungeon.jpg)' }}>
          <div className="container mx-auto p-4">
            <div className="flex justify-between">
              <h1 className="text-5xl font-bold mb-8 text-white">Курси</h1>
              <button onClick={() => setShowForm(!showForm)} className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                {showForm ? "Сховати форму" : "Додати новий курс"}
              </button>
            </div>

            {showForm && (
              <CourseForm
                newCourse={newCourse}
                onChange={handleCourseInputChange}
                onAdd={handleAddOrUpdateCourse}
                isEditing={isEditing}
                courseId={editingCourseId} // Передати ID курсу
              />
            )}

            <CourseList courses={courses} onEdit={handleEditCourse} />
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
