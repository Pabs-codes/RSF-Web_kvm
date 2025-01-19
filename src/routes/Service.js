import HeroM from "../components/About/HeroM";
import Footer from "../components/Footer/Footer";
import Snav from "../components/Services/Snav";




import Navbar from "../components/Navigation/Navbar";
import ScrollToTopButton from "../components/Uconstruction/ScrollToTopButton";



function Service() {
  return (
    <>
    <Navbar />
    <HeroM
      cName='heroM'
      title='Our Services.'
      text='Explore Our Diverse Services in Design, Construction, and Fabrication Excellence'
      heroMType='video' // Specify the type as 'video'
      heroMSource={require('../assets/bgvid3.mp4')} // Provide the video path
      buttonText="Send us a message"
      url="/"
      btnClass="show">
    </HeroM>
    <ScrollToTopButton/>
    <Snav/>
 
   
    
    
     
    
    <Footer/>
  </>
  );
}

export default Service;
