// pages/api/user.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface User {
  name: string;
  email: string;
  studentID?: string;
  phone?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { email } = req.query;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ message: 'Невірний запит' });
    }

    try {
      const filePath = path.resolve('data/users.json');
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const users: User[] = JSON.parse(fileContent);

      const user = users.find(user => user.email === email);

      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(404).json({ message: 'Користувача не знайдено' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Внутрішня помилка сервера' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Метод ${req.method} не дозволено`);
  }
}
