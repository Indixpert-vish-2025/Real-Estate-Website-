import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import HeroSearch from "../components/HeroSearch";
import SearchTools from "../components/SearchTools";
import RealEstateTool from "../components/RealEstateTool";
import PropertySection from "../components/PropertySection"
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <HeroSearch />
      <SearchTools />
      <RealEstateTool />
      <PropertySection/>
      <Footer />
    </>
  );
};

export default Home;
