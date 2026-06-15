# 🚀 Soni Gupta — Portfolio

> Full Stack Developer Portfolio | MERN Stack | React · Node.js · MongoDB

[![Live Demo](https://img.shields.io/badge/Live-Demo-64ffda?style=for-the-badge&logo=vercel&logoColor=0a192f)](https://your-portfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-GitGurls-64ffda?style=for-the-badge&logo=github&logoColor=0a192f)](https://github.com/GitGurls)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Soni_Gupta-64ffda?style=for-the-badge&logo=linkedin&logoColor=0a192f)](https://www.linkedin.com/in/soni-gupta-54b075329)

---

## ✨ Features

- **Brittany Chiang-inspired design** — dark navy theme, green accent, sticky sidebar
- **Sticky left sidebar** with active section navigation (desktop)
- **Typewriter animation** — rotating role titles
- **Cursor spotlight effect** — subtle green glow follows mouse
- **Scroll progress bar** — top green progress indicator
- **Working contact form** — saves to MongoDB + email notification via Nodemailer
- **Blog section** — full CRUD, stored in MongoDB
- **Smooth scroll animations** — Intersection Observer powered fade-ins
- **MVC Architecture** — clean backend structure
- **Mobile responsive** — hamburger menu, full-width mobile layout

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS, Framer Motion |
| Backend | Node.js, Express.js, MVC Pattern |
| Database | MongoDB Atlas, Mongoose |
| Auth/Security | JWT ready, Helmet, Rate Limiting |
| Real-time | WebSockets (ws) — used in Chess project |
| Deploy | Vercel (frontend) + Render (backend) |
| Tools | Git, GitHub, Postman, VS Code |

---

## 📁 Folder Structure

```
soni-portfolio/
├── client/                    ← React frontend (Vercel)
│   ├── public/
│   │   └── soni-pro.jpeg      ← Your profile photo
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx       ← Sticky sidebar + typewriter
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── BlogPost.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vercel.json            ← SPA routing fix
│   ├── tailwind.config.js
│   └── package.json
│
├── server/                    ← Node.js/Express backend (Render)
│   ├── controllers/
│   │   ├── contactController.js
│   │   └── blogController.js
│   ├── models/
│   │   ├── Contact.js
│   │   └── Blog.js
│   ├── routes/
│   │   ├── contactRoutes.js
│   │   └── blogRoutes.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── config/
│   │   └── db.js
│   ├── .env.example
│   └── index.js
│
├── .gitignore
└── README.md
```

---

## 🚀 Local Setup

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the repo
```bash
git clone https://github.com/GitGurls/soni-portfolio.git
cd soni-portfolio
```

### 2. Setup Backend
```bash
cd server
npm install

# Create .env from example
cp .env.example .env
# Fill in your MongoDB URI and email config in .env

npm run dev
# Server runs on http://localhost:5000
```

### 3. Setup Frontend
```bash
cd client
npm install

# Create .env from example
cp .env.example .env
# Set VITE_API_URL=http://localhost:5000

npm run dev
# Frontend runs on http://localhost:5173
```

---

## 🌐 Deployment

### Frontend → Vercel
```bash
cd client
npm run build

# Push to GitHub → connect repo on vercel.com
# Add env variable: VITE_API_URL = https://your-backend.onrender.com
```

### Backend → Render
```
1. Go to render.com → New Web Service
2. Connect your GitHub repo
3. Root directory: server
4. Build command: npm install
5. Start command: node index.js
6. Add environment variables from .env.example
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Health check |
| `POST` | `/api/contact` | Submit contact form |
| `GET` | `/api/contact` | Get all messages |
| `GET` | `/api/blog` | Get all blog posts |
| `GET` | `/api/blog/:id` | Get single blog post |
| `POST` | `/api/blog` | Create blog post |
| `PUT` | `/api/blog/:id` | Update blog post |
| `DELETE` | `/api/blog/:id` | Delete blog post |

---

## 🎨 Design Reference

Inspired by [Brittany Chiang's portfolio](https://brittanychiang.com) — adapted with personal branding, impact metrics, and blog functionality.

**Color Palette:**
- Background: `#0a192f` (Navy)
- Card bg: `#112240` (Navy Light)
- Accent: `#64ffda` (Green)
- Text: `#ccd6f6` (Slate Light)
- Subtext: `#8892b0` (Slate)

---

## 🔮 Upcoming

- [ ] Add personal resume PDF
- [ ] Replace AnonShield with next project
- [ ] Add blog posts
- [ ] Custom domain

---

Made with ❤️ by **Soni Gupta** — Lucknow, India
