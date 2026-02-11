import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import HeroSearch from "../components/HeroSearch";
import SearchTools from "../components/SearchTools";
import RealEstateTool from "../components/RealEstateTool";
import PropertySection from "../components/PropertySection";
import AppPromo from "../components/AppPromo";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <HeroSearch />
      <SearchTools />
      <RealEstateTool />

      
      <PropertySection title="Featured Property" isFirst />
      <PropertySection title="Listed as Urgent" />
      <PropertySection title="Recently Listed" />

      
      <AppPromo />

      <Footer />
    </>
  );
};

export default Home;
