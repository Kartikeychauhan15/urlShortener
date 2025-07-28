# URL Shortener

A full-stack URL shortener application that allows users to create, manage, and track shortened URLs. Built with React (frontend), Express.js (backend), and MongoDB (database).

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [License](#license)

---

## Features

- Shorten long URLs with optional custom slugs
- User authentication (register, login, logout)
- Dashboard to view, copy, and track your URLs and click counts
- Responsive UI built with Tailwind CSS
- RESTful API for URL management
- Error handling and validation

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express.js, MongoDB, JWT, bcrypt
- **Database:** MongoDB (Atlas or local)
- **Other:** Vite (React build tool)

---

## Project Structure

```
urlShortener/
├── BACKEND/
│   ├── src/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── dao/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   ├── app.js
│   ├── package.json
│   └── .env
├── FRONTEND/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routing/
│   │   ├── store/
│   │   └── utils/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## Setup Instructions

### Backend

1. **Install dependencies:**
   ```sh
   cd BACKEND
   npm install
   ```

2. **Configure environment variables:**
   - Create a `.env` file in the `BACKEND` folder with the following:
     ```
     MONGO_URL=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     APP_URL=http://localhost:3000/
     ```

3. **Start the backend server:**
   ```sh
   npm run dev
   ```
   The backend will run on `http://localhost:3000`.

---

### Frontend

1. **Install dependencies:**
   ```sh
   cd FRONTEND
   npm install
   ```

2. **Start the frontend dev server:**
   ```sh
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`.

---

## Environment Variables

**Backend (`BACKEND/.env`):**
- `MONGO_URL` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT authentication
- `APP_URL` - Base URL for your app (e.g., `http://localhost:3000/`)

---

## Usage

1. Register a new account or log in.
2. Enter a long URL to shorten it.
3. Optionally, specify a custom slug.
4. View your dashboard to manage and track your URLs.