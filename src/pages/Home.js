import React, { Fragment } from "react";
import Navbar from "../features/Navbar/Navbar";
import { ProductList } from "../features/Productlist/ProductList";
import Homefold from "../components/Homeabove";
import SellBook from "../components/SellBook";
import { BrowserRouter } from "react-router-dom";
const Home = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <Homefold/>
        <SellBook/>
        {/* <ProductList /> */}
      </Navbar>
    </BrowserRouter>
  );
};

export default Home;
