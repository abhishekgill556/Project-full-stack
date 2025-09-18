import './App.css'
import Header from './Components/Header/Header'
import Services from './Components/Services/Services'
import Book from './Components/book/book'
import Stylist from './Components/stylist/stylist'
import Blog from './Components/blog/Blog'
import Footer from './Components/Footer/footer'

function App() {
 
 
  return (
    <>
      <div>
        <Header/>
        <Services/>
        <Book/>
        <Stylist/>
        <Blog/>
        <Footer/> 
      </div>
     
    </>
  )
}
 
export default App