// app/api/login/route.ts

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const usersFilePath = path.join(process.cwd(), 'data', 'users.json');

export async function POST(request: Request) {
  const { email, password } = await request.json();
  
  try {
    // Читання користувачів з файлу JSON
    const usersData = fs.readFileSync(usersFilePath, 'utf-8');
    const users = JSON.parse(usersData);

    // Перевірка користувача
    const user = users.find((u: any) => u.email === email && u.password === password);
    
    if (user) {
      // Успішний вхід
      return NextResponse.json({ success: true });
    } else {
      // Неправильний користувач або пароль
      return NextResponse.json({ success: false, message: 'Неправильна електронна пошта або пароль' });
    }
  } catch (error) {
    console.error('Error processing login:', error);
    return NextResponse.json({ success: false, message: 'Сталася помилка при вході. Спробуйте ще раз.' });
  }
}
