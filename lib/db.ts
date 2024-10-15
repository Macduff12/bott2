// lib/db.ts
import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: '127.0.0.1',
  user: 'gs271399',
  password: 'Qe0qiY0vqJnU',
  database: 'gs271399', // Змініть на назву вашої бази даних
});

export default pool;
