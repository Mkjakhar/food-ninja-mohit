import Hero from "../components/Hero";
import Footer from "../components/common/Footer";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
