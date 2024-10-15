// pages/api/signup.js

const fs = require('fs');
const path = require('path');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const filePath = path.join(process.cwd(), 'data', 'users.json');

    let existingData = [];
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      existingData = JSON.parse(fileContent);
    } catch (err) {
      // File does not exist, starting with an empty array
    }

    existingData.push(data);

    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    res.status(200).json({ message: 'User registered successfully!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
