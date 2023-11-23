import React from "react";
import Home from "./pages/Home.js";
import ContactUs from "./pages/ContactUs.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./features/Navbar/Navbar.js";
import Footer from "./features/Footer/Footer.js";
import Product from "./pages/Books.js";
import Publish from "./pages/Publish.js";
import WheretoBuy from "./pages/WheretoBuy.js"
import PrivacyPolicy from "./pages/PrivacyPolicy.js"
import Ourteam from "./pages/Ourteam.js"
import Aboutus from "./pages/Aboutus.js"
import SingleProduct from "./pages/SingleProduct.js";
function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="mx-auto max-w-7xl py-0 sm:py-0 sm:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/books" element={<Product />} />
          <Route path="/publish-with-us" element={<Publish />} />
          <Route path="/where-to-buy" element={<WheretoBuy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about-us" element={<Aboutus/>} />
          <Route path="/our-team" element={<Ourteam />} />
          <Route path="/books/:slug" element={<SingleProduct />} />


        </Routes>
      </div>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
