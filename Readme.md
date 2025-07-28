# EchoShare

EchoShare is a real-time communication platform that enables users to connect through chat and video calls. It features user authentication, friend management, and a responsive interface.

## Features

*   **User Authentication:** Secure sign-up, login, and logout functionalities.
*   **Real-time Chat:** Instant messaging between friends.
*   **Video Calls:** High-quality video communication.
*   **Friend Management:** Send and accept friend requests.
*   **Notifications:** Real-time alerts for new messages and friend requests.
*   **Responsive Design:** Optimized for various devices.

## 🚀 Live Demo

Check out the deployed version of the project: [EchoShare on Render](https://echoshare.onrender.com)

## Technologies Used

### Frontend

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool for modern web projects.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **DaisyUI:** A Tailwind CSS component library.
*   **Axios:** Promise-based HTTP client for the browser and Node.js.
*   **Zustand:** A small, fast, and scalable bearbones state-management solution.
*   **Stream Chat & Video SDK:** For real-time chat and video call functionalities.

### Backend

*   **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
*   **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
*   **MongoDB:** A NoSQL database for storing application data.
*   **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
*   **bcryptjs:** A library for hashing passwords.
*   **jsonwebtoken:** For implementing JSON Web Tokens for authentication.
*   **Stream Chat:** For backend integration with real-time chat.

## Setup and Installation

Follow these steps to set up and run the EchoShare project locally.

### Prerequisites

*   Node.js (v18 or higher)
*   npm (v8 or higher)
*   MongoDB (running instance or a cloud service like MongoDB Atlas)

### 1. Clone the Repository

```bash
git clone <repository_url>
cd EchoShare
```

### 2. Backend Setup

Navigate to the `backend` directory, install dependencies, and start the server.

```bash
cd backend
npm install
npm run dev
```

### 3. Frontend Setup

Open a new terminal, navigate to the `frontend` directory, install dependencies, and start the development server.

```bash
cd ../frontend
npm install
npm run dev
```

### 4. Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables:

```
PORT=5000
MONGODB_URI=<Your MongoDB Connection String>
JWT_SECRET=<A strong secret key for JWT>
STREAM_API_KEY=<Your Stream API Key>
STREAM_API_SECRET=<Your Stream API Secret>
```

Create a `.env` file in the `frontend` directory and add the following environment variables:

```
VITE_BACKEND_URL=http://localhost:5000
VITE_STREAM_API_KEY=<Your Stream API Key>
```

Replace `<repository_url>`, `<Your MongoDB Connection String>`, `<A strong secret key for JWT>`, `<Your Stream API Key>`, and `<Your Stream API Secret>` with your actual values.

## Usage

Once both the backend and frontend servers are running, open your web browser and navigate to `http://localhost:5000` (or the port you configured for the frontend).

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contributo
  
Sravan Kumar             

## License

This project is licensed under the MIT License.
