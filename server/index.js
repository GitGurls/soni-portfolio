require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorHandler')
const contactRoutes = require('./routes/contactRoutes')
const blogRoutes = require('./routes/blogRoutes')

const app = express()
const PORT = process.env.PORT || 5000

// Connect to MongoDB
connectDB()

// Security middleware
app.use(helmet())

// CORS — allow your Vercel frontend
app.use(cors({
  origin: [
    process.env.CLIENT_URL,
    'http://localhost:5173',
    'http://localhost:3000',
  ].filter(Boolean),
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}))

// Body parsing
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true }))

// Logging
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Soni Portfolio API is running 🚀' })
})

// Routes
app.use('/api/contact', contactRoutes)
app.use('/api/blog', blogRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

// Error handler
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
