import HeroM from "../components/About/HeroM";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navigation/Navbar";
import Products2 from "../components/Products/Products";
import ScrollToTopButton from "../components/Uconstruction/ScrollToTopButton";

function Products() {
  return (
    <>
      <Navbar />
      <HeroM
        cName='heroM'
        title='Our Products'
        text='Discover a Range of High-Quality Steel Solutions Tailored for Your Projects'
        heroMType='image' // Specify the type as 'video'
        heroMSource={require('../assets/productsbg.jpeg')} // Provide the video path
        buttonText="Send ur inquiry"
        url="/"
        btnClass="show"
      >
    
      </HeroM>
      <Products2/>
    
      <ScrollToTopButton/>
      <Footer/>
      
    </>
  );
  }
  
  export default Products;
  
