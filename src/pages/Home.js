import Navbar from "../features/Navbar/Navbar";
import { ProductList } from "../features/Productlist/ProductList";
import Homefold from "../components/Homeabove";
import SellBook from "../components/SellBook";
import { BrowserRouter } from "react-router-dom";
import Footer from "../features/Footer/Footer";
import Myapp from "../components/Myapp";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl py-0 sm:py-0 sm:px-0">
    
        <Homefold/>
        <Myapp/>
        <SellBook/>
</div>
  );
};

export default Home;
