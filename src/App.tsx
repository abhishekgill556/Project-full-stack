import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
//import Services from './Components/Services/Services'
import Book from './Components/book/book'
//import Stylist from './Components/stylist/stylist'
import { Blog } from './Components/blog/Blog'
import Reviews from './Components/Reviews/ReviewsPage';
import Footer from './Components/Footer/footer'
import ServicesPage from './Components/Pages/ServicePage'
import { MyBlogs } from './Components/Pages/Blogpage'
import StylistsPage from "./Components/Pages/StylistsPage";
import { useState } from 'react'
import type { BlogPost } from './types/blogpost'
import { blogPosts as initialPosts } from './data/blogData'

function App() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [filterTerm, setFilterTerm] = useState<string>("");
  const [savedTerms, setSavedTerms] = useState<string[]>([]);

  const addSavedTerm = (term: string) => {
    const t = term.trim();
    if (!t) return;
    setSavedTerms(prev => (prev.includes(t) ? prev : [...prev, t]));
  };

  const removeSavedTerm = (term: string) => {
    setSavedTerms(prev => prev.filter(x => x !== term));
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/stylists" element={<StylistsPage filterTerm={filterTerm} setFilterTerm={setFilterTerm} savedTerms={savedTerms} addSavedTerm={addSavedTerm} removeSavedTerm={removeSavedTerm} />} />
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
