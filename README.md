# MERN Stack History Agenda Application

## Introduction

A full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to create and manage historical memories/notes. The application features user authentication, CRUD operations for memories, and a responsive user interface.

## Features

- **User Authentication**
  - Sign up with email, first name, and last name
  - Secure login with JWT tokens
  - Protected routes and user sessions
  - Profile page showing user details

- **Memory Management**
  - Create new memories with title, author, content, and optional image
  - View all memories in a responsive grid layout
  - Update existing memories
  - Delete memories
  - Timestamps for creation and updates

- **User Interface**
  - Modern and responsive design
  - Navigation header with authentication status
  - Form validation and error handling
  - Success notifications

## Technologies Used

### Frontend
- React.js
- React Router for navigation
- Axios for API requests
- Bootstrap for styling
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB for database
- Mongoose ODM
- JWT for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/ozgucdlg/mernStackHistoryAgenda.git
cd mernStackHistoryAgenda
```

2. Install backend dependencies
```bash
cd server
npm install
```

3. Install frontend dependencies
```bash
cd ../client
npm install
```

4. Create a .env file in the server directory with:
```
MONGODB_URI=mongodb://127.0.0.1:27017/AniKutusu
JWT_SECRET=mernstack-history-agenda-secret-key-2024
```

### Running the Application

1. Start the backend server (from the server directory)
```bash
node index.js
```
The server will run on http://localhost:5000

2. Start the frontend development server (from the client directory)
```bash
npm start
```
The application will open in your browser at http://localhost:3000

## API Endpoints

### Authentication
- POST `/api/users/signup` - Register a new user
- POST `/api/users/signin` - Login user

### Memories
- GET `/api/memos` - Get all memories
- POST `/api/memos` - Create a new memory
- PUT `/api/memos/:id` - Update a memory
- DELETE `/api/memos/:id` - Delete a memory

## Project Structure

```
mernStackHistoryAgenda/
├── client/                 # Frontend React application
│   ├── public/
│   └── src/
│       ├── components/     # Reusable components
│       ├── screens/       # Page components
│       └── App.js         # Main application component
└── server/                # Backend Node.js/Express application
    ├── db/               # Database models
    ├── routers/         # API routes
    └── index.js         # Server entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Ozguc Dalga - [GitHub](https://github.com/ozgucdlg)

Project Link: [https://github.com/ozgucdlg/mernStackHistoryAgenda](https://github.com/ozgucdlg/mernStackHistoryAgenda)

