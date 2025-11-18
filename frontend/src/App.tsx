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
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/stylists" element={<StylistsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/my-posts" element={<MyBlogs />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>

        <Book />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
