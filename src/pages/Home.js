import Homefold from "../components/Homeabove";
import SellBook from "../components/SellBook";
import Myapp from "../components/Myapp";
import Connect from "../components/Connect";
import Heighlight from "../components/Heighlight";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl py-0 sm:py-0 sm:px-0">
    
        <Homefold/>
        <Heighlight />

        <Myapp/>
        {/* <SellBook/> */}

<Connect/>

</div>
  );
};

export default Home;
