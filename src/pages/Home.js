import React, { Fragment } from "react";
import Navbar from "../features/Navbar/Navbar";
import { ProductList } from "../features/Productlist/ProductList";

const Home = () => {
  return (
    <Fragment>
      <Navbar>
        <ProductList />
      </Navbar>
    </Fragment>
  );
};

export default Home;
