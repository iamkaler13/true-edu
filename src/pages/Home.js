import HomeFold from "../components/HomeFold";
import MyApp from "../components/MyApp";
import Connect from "../components/Connect";
import HeighLight from "../components/HeighLight";
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
      <HeighLight />
      <LatestBook />
      <MyApp />

      <Connect />
    </div>
  );
};

export default Home;
