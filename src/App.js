import React from "react";
import Home from "./pages/Home.js";
import ContactUs from "./pages/ContactUs.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./features/Navbar/Navbar.js";
import Footer from "./features/Footer/Footer.js";
import Product from "./pages/Product.js";

import Publish from "./pages/Publish.js";
import WheretoBuy from "./pages/WheretoBuy.js";
import Privacypociy from "./pages/Privacypociy.js";
import Whoweare from "./pages/Whoweare.js";
import Ourmission from "./pages/Ourmission.js";
import Aboutus from "./pages/Aboutus.js";
import Ourteam from "./pages/Ourteam.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="mx-auto max-w-7xl py-0 sm:py-0 sm:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/publish-with-us" element={<Publish />} />
          <Route path="/where-to-buy" element={<WheretoBuy />} />
          <Route path="/privacy-policy" element={<Privacypociy />} />
          <Route path="/who-we-are" element={<Whoweare />} />
          <Route path="/our-mission" element={<Ourmission />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/our-team" element={<Ourteam />} />


        </Routes>
      </div>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
