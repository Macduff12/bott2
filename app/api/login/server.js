const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 6000;

// Налаштування для читання JSON
app.use(bodyParser.json());

const filePath = './users.json';

// Функція для зчитування користувачів з JSON-файлу
const readUsersFromFile = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Функція для запису користувачів в JSON-файл
const writeUsersToFile = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const users = readUsersFromFile();
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
