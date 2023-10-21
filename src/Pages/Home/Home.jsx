import Banner from "../../components/Banner/Banner";
import CTA from "../../components/CTA/CTA";
import Category from "../../components/Category/Category";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";
import Switcher from "../../components/ThemeSwitcher/switcher";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <CTA />
      <Feature />
      <Switcher />
      <Footer />
    </div>
  );
};

export default Home;
