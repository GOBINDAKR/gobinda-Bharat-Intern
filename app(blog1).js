const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/blogDB', { useNewUrlParser: true, useUnifiedTopology: true });

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
});

const Blog = mongoose.model('Blog', blogSchema);

const dummyBlogs = [
  {
    title: 'Introduction to Computer Science',
    content: 'Computer science is the study of computers and computing technologies...',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'JavaScript Fundamentals',
    content: 'JavaScript is a versatile programming language commonly used for web development...',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Data Structures and Algorithms',
    content: 'Understanding data structures and algorithms is crucial for efficient programming...',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Artificial Intelligence Overview',
    content: 'Artificial Intelligence (AI) involves creating algorithms that mimic human intelligence...',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Cybersecurity Best Practices',
    content: 'Protecting computer systems and networks from cyber threats is essential for security...',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Web Development Trends in 2023',
    content: 'Explore the latest trends and technologies shaping the field of web development...',
    image: 'https://via.placeholder.com/300',
  },
];

Blog.insertMany(dummyBlogs, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Dummy blogs inserted successfully.');
  }
});

app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
