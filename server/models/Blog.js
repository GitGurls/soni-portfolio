const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title too long'],
  },
  excerpt: {
    type: String,
    required: [true, 'Excerpt is required'],
    trim: true,
    maxlength: [500, 'Excerpt too long'],
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
  tags: [{
    type: String,
    trim: true,
  }],
  readTime: {
    type: String,
    default: '5 min read',
  },
  published: {
    type: Boolean,
    default: true,
  },
  slug: {
    type: String,
    unique: true,
    sparse: true,
  }
}, { timestamps: true })

module.exports = mongoose.model('Blog', blogSchema)
