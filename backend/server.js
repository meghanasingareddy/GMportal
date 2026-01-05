const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { Pool } = require('pg');

const app = express();
const port = 5000;

// PostgreSQL connection setup
// IMPORTANT: Replace with your actual database credentials
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gmportal',
  password: 'password', // Replace with your password
  port: 5432,
});

// Create table if it doesn't exist
const createTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            phone VARCHAR(20) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            submission_timestamp TIMESTAMPTZ DEFAULT NOW()
        );
    `;
    try {
        await pool.query(query);
        console.log("Table 'users' is ready.");
    } catch (error) {
        console.error('Error creating table:', error);
    }
};
createTable();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Good Morning! The server is running.');
});

// API endpoint for form submission
app.post('/api/submit', async (req, res) => {
    const { name, phone, email } = req.body;

    // Basic validation
    if (!name || !phone || !email) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        const query = 'INSERT INTO users (name, phone, email) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, phone, email];
        const result = await pool.query(query, values);
        console.log('Data inserted:', result.rows[0]);
        res.status(201).json({ success: true, message: 'Form submitted successfully!', data: result.rows[0] });
    } catch (error) {
        console.error('Error inserting data:', error);
        // Handle unique constraint violation for email
        if (error.code === '23505') {
            return res.status(409).json({ success: false, message: 'This email address has already been submitted.' });
        }
        res.status(500).json({ success: false, message: 'An error occurred while submitting the form.' });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
