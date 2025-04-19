# Places API

A simple Node.js TypeScript server with MySQL database connection.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure your database:
- Create a MySQL database named `places_db`
- Update the `.env` file with your database connection string:
  ```
  DB_CONNECTION_STRING=mysql://username:password@hostname:port/database_name
  PORT=3000
  ```
  
  Example:
  ```
  DB_CONNECTION_STRING=mysql://root:your_password@localhost:3306/places_db
  PORT=3000
  ```

## Development

To run the development server:
```bash
npm run dev
```

The server will start on port 3000 (or the port specified in your .env file).

## API Endpoints

- `GET /test-db`: Test the database connection

## Building for Production

To build the TypeScript code:
```bash
npm run build
```

To start the production server:
```bash
npm start
``` 