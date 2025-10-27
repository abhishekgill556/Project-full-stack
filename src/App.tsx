import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Book from './Components/book/book'
import { Blog } from './Components/blog/Blog'
import Reviews from './Components/Reviews/ReviewsPage'
import Footer from './Components/Footer/footer'
import ServicesPage from './Components/Pages/ServicesPage'
import { MyBlogs } from './Components/Pages/Blogpage'
import StylistsPage from './Components/Pages/StylistsPage'
import { useState } from 'react'
import type { BlogPost } from './types/blogpost'
import { blogPosts as initialPosts } from './data/blogData'

function App() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/stylists" element={<StylistsPage />} />
          <Route path="/blog" element={<Blog posts={posts} setPosts={setPosts} />} />
          <Route path="/blog/my-posts" element={<MyBlogs posts={posts} setPosts={setPosts} />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        <Book />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
