import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const coursesFilePath = path.resolve('./app/courses/components/courses.json');

export async function POST(request: Request) {
  try {
    const course = await request.json();

    // Перевірка даних
    if (!course.id || !course.name || !course.description) {
      return NextResponse.json({ message: 'Неправильний формат даних' }, { status: 400 });
    }

    // Зчитування поточного вмісту файлу
    const fileData = fs.readFileSync(coursesFilePath, 'utf8');
    const courses = JSON.parse(fileData);

    // Додавання нового курсу
    courses.push(course);

    // Запис нових даних у файл
    fs.writeFileSync(coursesFilePath, JSON.stringify(courses, null, 2));

    return NextResponse.json({ message: 'Курс успішно додано' });
  } catch (error) {
    console.error('Error adding course:', error);
    return NextResponse.json({ message: 'Помилка при додаванні курсу' }, { status: 500 });
  }
}
