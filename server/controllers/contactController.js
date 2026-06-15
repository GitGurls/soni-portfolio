const Contact = require('../models/Contact')
const nodemailer = require('nodemailer')

// POST /api/contact
const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body

    // Validate
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' })
    }

    // Save to MongoDB
    const contact = await Contact.create({ name, email, message })

    // Send email notification (optional — works only if EMAIL env vars set)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          }
        })

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          subject: `📬 Portfolio Contact from ${name}`,
          html: `
            <h2>New message from your portfolio!</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
        })
      } catch (emailErr) {
        console.warn('Email notification failed (non-critical):', emailErr.message)
      }
    }

    res.status(201).json({ success: true, message: 'Message received!', id: contact._id })
  } catch (error) {
    next(error)
  }
}

// GET /api/contact (admin use)
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json({ success: true, count: contacts.length, data: contacts })
  } catch (error) {
    next(error)
  }
}

module.exports = { submitContact, getAllContacts }
