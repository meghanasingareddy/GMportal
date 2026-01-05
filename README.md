# GM Portal

GM Portal is a full-stack web application designed to display a “Good Morning” greeting page and collect basic user information through a simple and user-friendly form.

## Project Structure

- `/backend`: Node.js Express server.
- `/frontend`: React web application.

## Database Setup (PostgreSQL)

1.  **Install PostgreSQL:** If you don't have it installed, download and install it from [postgresql.org](https://www.postgresql.org/download/).

2.  **Create a database:**
    - Open the PostgreSQL interactive terminal (`psql`).
    - Run the following command to create a new database named `gmportal`:
      ```sql
      CREATE DATABASE gmportal;
      ```

3.  **Update connection string:**
    - Open the `backend/server.js` file.
    - Locate the `Pool` configuration and update the `user` and `password` to match your PostgreSQL credentials.
      ```javascript
      const pool = new Pool({
        user: 'your_postgres_user', // default is 'postgres'
        host: 'localhost',
        database: 'gmportal',
        password: 'your_password',
        port: 5432,
      });
      ```
    - The `users` table will be created automatically when you start the backend server.

## How to Run

### Backend

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the server:**
    ```bash
    npm start
    ```
    The server will start on `http://localhost:5000`.

### Frontend

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the React application:**
    ```bash
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.
