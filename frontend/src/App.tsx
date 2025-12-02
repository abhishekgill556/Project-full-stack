import "./App.css";
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Book from "./Components/book/book";
import { Blog } from "./Components/blog/Blog";
import Reviews from "./Components/Reviews/ReviewsPage";
import Footer from "./Components/Footer/footer";
import ServicesPage from "./Components/Pages/ServicesPage";
import { MyBlogs } from "./Components/Pages/Blogpage";
import StylistsPage from "./Components/Pages/StylistsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* ---------------- PUBLIC ROUTES ---------------- */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/stylists" element={<StylistsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reviews" element={<Reviews />} />

          {/* ---------------- AUTH ROUTES ---------------- */}
          <Route
            path="/login"
            element={<SignIn routing="path" path="/login" />}
          />
          <Route
            path="/register"
            element={<SignUp routing="path" path="/register" />}
          />

          {/* ---------------- PROTECTED ROUTE ---------------- */}
          <Route
            path="/blog/my-posts"
            element={
              <>
                <SignedIn>
                  <MyBlogs />
                </SignedIn>

                <SignedOut>
                  <RedirectToSignIn redirectUrl="/blog/my-posts" />
                </SignedOut>
              </>
            }
          />
        </Routes>

        {/* Footer + Booking always visible */}
        <Book />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
