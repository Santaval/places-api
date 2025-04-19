import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DB_CONNECTION_STRING) {
  throw new Error('DB_CONNECTION_STRING is not defined in .env file');
}

const pool = mysql.createPool(process.env.DB_CONNECTION_STRING);

export default pool; 