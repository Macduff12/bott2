import React, { useEffect, useState } from "react";

interface Course {
  id: string;
  name: string;
  description: string;
}

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Замість реального API викликання, завантажуємо дані з JSON
    const fetchCourses = async () => {
      try {
        const response = await fetch("./components/courses.json"); // Шлях до вашого JSON файлу
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="space-y-4">
      {courses && courses.length > 0 ? (
        courses.map((course) => (
          <div key={course.id} className="p-4 border border-gray-200 rounded-md">
            <h2 className="text-xl font-semibold">{course.name}</h2>
            <p className="mt-2 text-gray-600">{course.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">Курси не знайдені.</p>
      )}
    </div>
  );
};

export default CourseList;
