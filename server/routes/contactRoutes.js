const express = require('express')
const router = express.Router()
const { submitContact, getAllContacts } = require('../controllers/contactController')
const rateLimit = require('express-rate-limit')

// Rate limit for contact form — 5 submissions per 15 min per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many messages sent. Please try again later.' }
})

router.post('/', contactLimiter, submitContact)
router.get('/', getAllContacts) // for admin use

module.exports = router
