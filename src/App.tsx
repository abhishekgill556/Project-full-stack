import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router'
import Header from './Components/Header/Header'
import Services from './Components/Services/Services'
import Book from './Components/book/book'
import Stylist from './Components/stylist/stylist'
import Blog from './Components/blog/Blog'
import Reviews from './Components/Reviews/Reviews'
import Footer from './Components/Footer/footer'
import ServicesPage from './Components/Pages/ServicePage';

function App() {
 
 
  return (
    <>
      <div>
        <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
        <Services/>
        <Book/>
        <Stylist/>
        <Blog/>
        <Reviews/>
        <Footer/> 
      </div>
     
    </>
  )
}
 
export default App