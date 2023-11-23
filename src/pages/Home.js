import HomeFold from "../components/HomeFold";
import Myapp from "../components/Myapp";
import Connect from "../components/Connect";
import Heighlight from "../components/Heighlight";
import LatestBook from "../components/LatestBook";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="mx-auto max-w-7xl py-0 sm:py-0 sm:px-0">
      <HomeFold />
      <Heighlight />
      <LatestBook />
      <Myapp />

      <Connect />
    </div>
  );
};

export default Home;
