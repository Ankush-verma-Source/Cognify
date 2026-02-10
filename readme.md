# 🧠 Cognify – Intelligent Amplified

> A comprehensive AI-powered learning platform combining advanced data analytics, intelligent content generation, and interactive study tools.

[![GitHub](https://img.shields.io/badge/GitHub-Cognify-181717?logo=github&logoColor=white)](https://github.com/Ankush-verma-Source/Cognify)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-5.1-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white)](https://www.python.org/)

---

## 📖 Overview

Cognify is a fullstack intelligent learning platform designed to transform how students interact with educational content. By leveraging cutting-edge AI models and advanced data analytics, Cognify provides:

- 🤖 **AI-Powered Content Generation**: MCQs, flashcards, quizzes, and summaries
- 📊 **Advanced Data Visualization**: Interactive EDA dashboards with intelligent insights
- 💻 **Code Analysis Tools**: Explain and review code with AI-driven feedback
- 🎯 **Personalized Learning**: Customizable difficulty levels and focus areas
- ☁️ **Cloud-Synchronized**: MongoDB Atlas for seamless cross-device access

---

## 🏗️ Project Structure

```
cognify/
├── backend/          # Node.js + Express API server
│   ├── controllers/  # Business logic layer
│   ├── routes/       # API route definitions
│   ├── models/       # MongoDB schemas
│   ├── services/     # AI integration services
│   ├── python_services/ # Python EDA engine
│   └── utils/        # Helper functions
│
├── frontend/         # React + Vite UI
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Application pages
│   │   ├── api/         # Axios configuration
│   │   └── constants/   # App constants
│   └── public/       # Static assets
│
└── README.md         # This file
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 22.x or higher
- Python 3.x with pip
- MongoDB Atlas account (or local MongoDB)
- API Keys: OpenAI and/or Google Gemini

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/Ankush-verma-Source/Fullstack_Projects.git
cd muj
```

#### 2. Setup Backend
```bash
cd backend
npm install
pip install pandas numpy scipy openpyxl
```

Create a `.env` file in the `backend/` directory:
```env
PORT=5050
NODE_ENV=development
SECRET=your_jwt_secret_here

# MongoDB Atlas
MONGODB_URI=mongodb+srv://<username>:<password>@cognify.znnoqkq.mongodb.net/cognify?retryWrites=true&w=majority&appName=cognify
DB_USER=your_db_username
DB_PASSWORD=your_db_password

# AI API Keys
GEMINI_API_KEY=your_gemini_key
OPENAI_API_KEY=your_openai_key
GROQ_API_KEY=your_groq_key

# Cloudinary (for file uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
```

Start the backend server:
```bash
npm start
# Server runs on http://localhost:5050
```

#### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
# Application runs on http://localhost:5173
```

---

## ✨ Features

### 🎓 Learning Tools
- **MCQ Generator**: Create custom multiple-choice questions from any document
- **Flashcard Creator**: Generate interactive study cards with customizable difficulty
- **Quiz Builder**: Build comprehensive quizzes with mixed question types
- **AI Summarizer**: Get concise summaries with adjustable length and tone

### 📊 Data Analytics
- **Visual EDA**: Automated exploratory data analysis with interactive charts
- **Smart Insights**: AI-generated observations and recommendations
- **Custom Dashboards**: Tailored visualizations based on dataset characteristics
- **Export Support**: Download analysis reports and visualizations

### 💻 Developer Tools
- **Code Explainer**: Get detailed explanations of code snippets
- **Code Reviewer**: Receive AI-powered code review and optimization suggestions
- **Multi-Language Support**: Works with Python, JavaScript, Java, C++, and more

### 🔐 User Management
- **JWT Authentication**: Secure token-based authentication
- **Personal Library**: Save and organize generated content
- **Profile Management**: Update user information and preferences
- **Cloud Sync**: Access your content from any device

---

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern UI library with hooks
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Premium animations
- **Recharts**: Interactive data visualizations
- **Lucide Icons**: Modern icon library
- **Axios**: HTTP client for API calls

### Backend
- **Node.js 22**: JavaScript runtime
- **Express 5.1**: Web application framework
- **MongoDB Atlas**: Cloud database
- **Mongoose**: MongoDB ODM
- **JWT**: Secure authentication
- **Multer + Cloudinary**: File upload handling
- **Python**: Data analysis engine

### AI Integration
- **OpenAI GPT**: Advanced language models
- **Google Gemini**: Multimodal AI capabilities
- **Groq**: High-performance inference

---

## 📚 API Documentation

### Authentication Endpoints
```
POST   /signup         - Register new user
POST   /login          - User login
GET    /logout         - User logout
```

### Content Generation
```
POST   /user/generate/mcq          - Generate MCQs
POST   /user/generate/flashcards   - Create flashcards
POST   /user/generate/quiz         - Build quiz
POST   /user/generate/summary      - Generate summary
POST   /user/generate/code-tools   - Analyze code
POST   /user/generate/analysis     - Data analysis
POST   /user/generate/visualize    - Data visualization
```

### Dashboard
```
GET    /dashboard                  - Get all user content
GET    /dashboard/view/:id         - View specific content
GET    /dashboard/filter?type=X    - Filter by content type
DELETE /dashboard/delete/:id       - Delete content
DELETE /dashboard/delete-all       - Delete all content
GET    /dashboard/profile          - Get user profile
POST   /dashboard/profile          - Update profile
```

---

## 🔧 Configuration

### Environment Variables

The application requires specific environment variables for both backend and frontend. Refer to individual README files in `/backend` and `/frontend` for detailed configuration instructions.

### Python Dependencies

The backend requires Python packages for data analysis:
```bash
pip install pandas numpy scipy openpyxl
```

---

## 🚀 Deployment

### Live Application

**Frontend:** https://cognifylearning.vercel.app  
**Backend API:** https://cognify-backend-tcqj.onrender.com  
**GitHub:** https://github.com/Ankush-verma-Source/Cognify

### Deploy Your Own Instance

#### Frontend (Vercel)

1. **Fork this repository**
2. **Go to [vercel.com](https://vercel.com/)** and sign in with GitHub
3. **Import your forked repository**
4. **Configure:**
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Add Environment Variable:**
   - Name: `VITE_API_URL`
   - Value: Your backend URL (e.g., `https://your-backend.onrender.com`)
6. **Deploy!**

#### Backend (Render)

1. **Go to [render.com](https://render.com/)** and sign in with GitHub
2. **Create New Web Service** and connect your repository
3. **Configure:**
   - Root Directory: `backend`
   - Build Command: `pip install pandas numpy scipy openpyxl && npm install`
   - Start Command: `npm start`
4. **Add Environment Variables:**
   ```
   NODE_ENV=production
   SECRET=<generate-64-char-secret>
   MONGODB_URI=<your-mongodb-atlas-uri>
   GEMINI_API_KEY=<your-key>
   OPENAI_API_KEY=<your-key>
   GROQ_API_KEY=<your-key>
   HUGGINGFACE_TOKEN=<your-token>
   CLOUDINARY_CLOUD_NAME=<your-name>
   CLOUDINARY_KEY=<your-key>
   CLOUDINARY_SECRET=<your-secret>
   ```
5. **Deploy!**

#### Database (MongoDB Atlas)

1. **Create account** at [mongodb.com](https://www.mongodb.com/cloud/atlas)
2. **Create a cluster** (free tier available)
3. **Set up database user** and password
4. **Configure Network Access:** Allow access from anywhere (0.0.0.0/0)
5. **Get connection string** and add to backend environment variables

### Post-Deployment

1. **Update Frontend:** Add backend URL to Vercel environment variables
2. **Redeploy Frontend:** Trigger redeploy in Vercel dashboard
3. **Test:** Visit your frontend URL and test signup/login
4. **Verify:** Check browser console for no CORS errors

### Troubleshooting

**CORS Errors:**
- Ensure backend `app.js` includes your Vercel domain in CORS config
- Clear browser cache and try again

**503 Service Unavailable:**
- Render free tier spins down after 15 min inactivity
- First request takes 30-60 seconds to wake up

**API Calls to Localhost:**
- Verify `VITE_API_URL` is set in Vercel
- Redeploy frontend after adding environment variable

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is developed for educational purposes.

---

## 👨‍💻 Developer

**Ankush Verma**
- GitHub: [@Ankush-verma-Source](https://github.com/Ankush-verma-Source)

---

## 🙏 Acknowledgments

- OpenAI for GPT models
- Google for Gemini AI
- MongoDB Atlas for cloud database
- Cloudinary for media management
- All open-source contributors

---

**Built with ❤️ for learners everywhere**
