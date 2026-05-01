
# SigmaGPT 🤖

A full-stack AI-powered chat application inspired by ChatGPT, built with React and Node.js. SigmaGPT leverages the Groq API with the LLaMA 3.3 70B model to deliver fast, intelligent responses with a clean and modern UI.

## 🚀 Features

- **Real-time AI Chat** — Powered by Groq's ultra-fast LLaMA 3.3 70B model
- **Markdown Support** — Responses rendered with syntax-highlighted code blocks
- **Chat History** — All conversations saved and retrieved from MongoDB
- **Thread Management** — Create, switch, and delete chat threads
- **Typing Animation** — Word-by-word response animation for a natural feel
- **Responsive Design** — Clean dark UI inspired by ChatGPT

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- React Markdown + Rehype Highlight
- CSS3

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- Groq API (LLaMA 3.3 70B)

## 📁 Project Structure

```
Project2/
├── Frontend/          # React application
│   └── src/
│       ├── App.jsx
│       ├── Sidebar.jsx
│       ├── ChatWindow.jsx
│       └── Chat.jsx
└── Backend/           # Express API server
    ├── server.js
    ├── routes/
    ├── models/
    └── utils/
```

## 🌐 Live Demo

- **Frontend:** https://sigmagpt-frontend-y15c.onrender.com
- **Backend API:** https://project2-yuj2.onrender.com

## ⚙️ Environment Variables

Create a `.env` file in the `Backend` folder:

```
MONGODB_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
```

## 🏃 Getting Started

### Backend
```bash
cd Backend
npm install
node server.js
```

### Frontend
```bash
cd Frontend
npm install
npm run dev
```

## 👨‍💻 Author

**Yusuf** — Built with ❤️
```

