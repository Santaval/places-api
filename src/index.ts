import express from 'express';
import dotenv from 'dotenv';
import pool from './config/database';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Test database connection
app.get('/countries', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM countries');
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.get('/states/:countryID', async (req, res) => {
    try {
      const connection = await pool.getConnection();
      const [rows] = await connection.query('SELECT * FROM states WHERE country_id = ?', [req.params.countryID]);
      connection.release();
      res.json(rows);
    } catch (error) {
      console.error('Database connection failed:', error);
      res.status(500).json({ error: 'Database connection failed' });
    }
  });

app.get('/cities/:stateID', async (req, res) => {
    try {
      const connection = await pool.getConnection();
      const [rows] = await connection.query('SELECT * FROM cities WHERE state_id = ?', [req.params.stateID]);
      connection.release();
      res.json(rows);
    } catch (error) {
      console.error('Database connection failed:', error);
      res.status(500).json({ error: 'Database connection failed' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 