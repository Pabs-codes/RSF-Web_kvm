import Hero from "../components/Home/Hero";
import Homediv from "../components/Home/Homediv";
import Homedivtwo from "../components/Home/Homedivtwo";
import Navbar from "../components/Navigation/Navbar";
import Services from "../components/Home/Services";
import Recentprojects from "../components/Home/Recentprojects";
import Count from "../components/Home/Count";
import Footer from "../components/Footer/Footer";
import Partners from "../components/Home/Partners";
import ScrollToTopButton from "../components/Uconstruction/ScrollToTopButton";


function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Homediv/>
    <Services/>
    <Homedivtwo/>
    <Recentprojects/>
    <Count/>
    <Partners/>
    <ScrollToTopButton/>
    <Footer/>
    

    </>
  );
}

export default Home;
