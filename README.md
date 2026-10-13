# SigmaGPT 🤖

**SigmaGPT** is a full-stack AI-powered chat application inspired by ChatGPT. Built with React.js, Node.js, Express.js, and MongoDB, it integrates the Groq API to deliver fast AI-generated responses through a clean, responsive dark-themed interface.

🔗 **Live Demo:** [SigmaGPT](https://sigmagpt-frontend-y15c.onrender.com)

## ✨ Features

- **AI-Powered Conversations** — Generate responses using Groq-hosted language models.
- **Markdown Rendering** — Display formatted text, lists, and code blocks with syntax highlighting.
- **Persistent Chat History** — Store and retrieve conversations using MongoDB.
- **Thread Management** — Create, switch between, and delete conversations.
- **Typing Animation** — Display responses with a word-by-word animation.
- **Responsive UI** — Modern dark-themed interface inspired by ChatGPT.
- **REST API** — Communicate between the React frontend and Express backend.

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Markdown
- Rehype Highlight
- Highlight.js
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Groq API

### Deployment
- Render
- GitHub

## 📂 Project Structure

```text
SigmaGPT/
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Sidebar.jsx
│   │   ├── ChatWindow.jsx
│   │   └── Chat.jsx
│   ├── package.json
│   └── vite.config.js
│
├── Backend/
│   ├── models/
│   │   └── Thread.js
│   ├── routes/
│   │   └── chat.js
│   ├── utils/
│   │   └── openai.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🌐 Live Deployment

- **Frontend:** https://sigmagpt-frontend-y15c.onrender.com
- **Backend:** https://project2-yuj2.onrender.com

## ⚙️ Environment Variables

Create a `.env` file inside the `Backend` directory:

```env
MONGODB_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
```

Replace the placeholder values with your actual MongoDB connection string and Groq API key.

**Security:** Never commit your `.env` file or expose API keys in your frontend code or public repository.

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- Node.js and npm
- MongoDB database (local or MongoDB Atlas)
- A Groq API key

### 1. Clone the Repository

```bash
git clone https://github.com/Yusuf8957/SigmaGPT.git
cd SigmaGPT
```

### 2. Set Up the Backend

```bash
cd Backend
npm install
```

Create the `.env` file in the `Backend` directory and configure the required environment variables.

Start the backend server:

```bash
npm start
```

If your `Backend/package.json` does not define a `start` script, run:

```bash
node server.js
```

The backend runs on the configured port, using `8080` locally by default.

### 3. Set Up the Frontend

Open a new terminal:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal.

**Note:** Ensure the frontend API configuration points to your local backend during development and the deployed backend in production.

## 🔐 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Backend health message |
| GET | `/api/threads` | Retrieve all chat threads |
| GET | `/api/threads/:threadId` | Retrieve messages for a thread |
| POST | `/api/chat` | Send a message and receive an AI response |
| DELETE | `/api/threads/:threadId` | Delete a chat thread |
| POST | `/api/test` | Test thread creation |

## 👨‍💻 Author

**Yusuf**

Built with ❤️ using React, Node.js, MongoDB, and Groq.

---

⭐ If you find this project interesting, consider giving the repository a star!
