import Banner from "../../components/Banner/Banner";
import CTA from "../../components/CTA/CTA";
import Category from "../../components/Category/Category";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <CTA />
      <Feature />
      <Footer/>
    </div>
  );
};

export default Home;
