# 🤖 ReviewMaster AI | Intelligent Customer Feedback System

![Project Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Python%20%7C%20FastAPI%20%7C%20Gemini%20AI-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)

**ReviewMaster AI** is a next-generation automated dashboard designed to streamline customer support workflows. It leverages **Google's Gemini 2.5 Flash** model to analyze customer feedback in real-time, detect sentiment patterns, and generate context-aware response strategies instantly.

---

## 📸 Project Showcase

![Dashboard Interface](/AI-Analyzer/ai-review-dashboard/frontend/frontend/public//AIAnalyzer.jpg)
*(Replace this link with your actual dashboard screenshot)*

---

## ✨ Key Features

### 🧠 Advanced AI Analysis
* **Sentiment Detection:** Instantly classifies reviews as **Positive**, **Negative**, or **Neutral** using Natural Language Processing (NLP).
* **Key Signal Extraction:** Automatically identifies and highlights the main points (complaints or praises) within long text blocks.

### 💬 Smart Response Generation
Generates three distinct drafts for every review to match the brand's voice:
1.  **Professional:** Formal and polite, suitable for corporate communication.
2.  **Friendly:** Warm and casual, perfect for social media engagement.
3.  **Concise:** Short and direct acknowledgments for quick processing.

### 🎨 Modern UI/UX Architecture
* **Glassmorphism Design:** Premium dark-mode interface with translucent cards and neon accents.
* **Reactive Experience:** Built with **React + Vite** for instant feedback and smooth animations.
* **One-Click Actions:** Copy responses to clipboard instantly with a single click.

---

## 🛠️ Tech Stack

### Frontend
* **Framework:** React 18 (Vite)
* **Styling:** Tailwind CSS (v3) with custom animations & glassmorphism utilities.
* **Icons:** Lucide React.
* **State Management:** React Hooks.

### Backend
* **API Framework:** FastAPI (Python 3.10+) for high-performance async processing.
* **AI Engine:** Google Generative AI (Gemini 1.5 Flash).
* **Server:** Uvicorn (ASGI).

---

## 🚀 Installation & Setup Guide

Follow these steps to run the project locally.

### Prerequisites
* Node.js (v16+)
* Python (v3.9+)
* A Google Cloud API Key for Gemini.

### 1. Clone the Repository
```bash
git clone [https://github.com/B-D-2409/AI-Analyzer.git](https://github.com/B-D-2409/AI-Analyzer.git)
cd review-master-ai
```

## 2. Backend Setup (Python)

### Navigate to the backend directory and install dependencies:
```
cd backend
# Create a virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install requirements
pip install -r requirements.txt
```

**Configuration: Create a .env file in the backend folder:**
```
GOOGLE_API_KEY=your_actual_gemini_api_key_here
```

**Run the Server:**
```
uvicorn main:app --reload
# The API will start at http://localhost:8000
```

## 3. Frontend Setup (React)

### Open a new terminal, navigate to the frontend directory:
```
cd frontend
npm install
```

**Configuration: Create a .env file in the frontend folder:**
```
VITE_API_URL=http://localhost:8000/analyze
```

**Run the Client:**
```
npm run dev
# Open http://localhost:5173 to view the app
```


## 📂 Project Structure
```
ai-review-dashboard/
├── backend/
│   ├── __pycache__/
│   ├── .env
│   ├── .gitignore
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button.jsx
│   │   │   ├── ResponseCard.jsx
│   │   │   ├── SentimentBadge.jsx
│   │   │   └── TextArea.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── .gitignore
└── README.md
```







# 👨‍💻 Author
### Borislav D. Full-Stack Developer | AI Automation Specialist
**Expert in building scalable web applications and integrating Large Language Models (LLMs) into business workflows.**

### 🤝 Connect & Hire

Created by **Borislav D.** - Full Stack Developer.

> 🚀 **Open for work!** Like this project? Let's build something together.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/https://github.com/B-D-2409)
[![Upwork](https://img.shields.io/badge/Upwork-6FDA44?style=for-the-badge&logo=Upwork&logoColor=white)](https://www.upwork.com/freelancers/https://www.upwork.com/freelancers/~01029fadae889f78c6)

