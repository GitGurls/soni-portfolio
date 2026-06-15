const Blog = require('../models/Blog')

// GET /api/blog — all published posts
const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Blog.find({ published: true })
      .select('-content')
      .sort({ createdAt: -1 })
    res.json(posts)
  } catch (error) {
    next(error)
  }
}

// GET /api/blog/:id — single post
const getPost = async (req, res, next) => {
  try {
    const post = await Blog.findById(req.params.id)
    if (!post || !post.published) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.json(post)
  } catch (error) {
    next(error)
  }
}

// POST /api/blog — create post
const createPost = async (req, res, next) => {
  try {
    const { title, excerpt, content, tags, readTime } = req.body
    if (!title || !content || !excerpt) {
      return res.status(400).json({ message: 'title, excerpt, and content are required' })
    }
    const post = await Blog.create({ title, excerpt, content, tags, readTime })
    res.status(201).json(post)
  } catch (error) {
    next(error)
  }
}

// PUT /api/blog/:id — update post
const updatePost = async (req, res, next) => {
  try {
    const post = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!post) return res.status(404).json({ message: 'Post not found' })
    res.json(post)
  } catch (error) {
    next(error)
  }
}

// DELETE /api/blog/:id — delete post
const deletePost = async (req, res, next) => {
  try {
    const post = await Blog.findByIdAndDelete(req.params.id)
    if (!post) return res.status(404).json({ message: 'Post not found' })
    res.json({ message: 'Post deleted' })
  } catch (error) {
    next(error)
  }
}

module.exports = { getAllPosts, getPost, createPost, updatePost, deletePost }
