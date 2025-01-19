import HeroM from "../components/About/HeroM";
import Navbar from "../components/Navigation/Navbar";
import '../components/About/HeroM.css';

import LeftNavi from "../components/About/LeftNavi";

import Footer from "../components/Footer/Footer";
import ScrollToTopButton from "../components/Uconstruction/ScrollToTopButton";


function About() {
  return (
    <>
      <Navbar />
      <HeroM
        cName='heroM'
        title='Rupasinghe Steels & Fabrications Pvt Ltd.'
        text='Elevate Your Projects With Quality Steel And Dependable Solutions'
        heroMType='video' // Specify the type as 'video'
        heroMSource={require('../assets/bgvid4.mp4')} // Provide the video path
        buttonText="Send us a message"
        url="/"
        btnClass="show"
      >
    
      </HeroM>
      <LeftNavi/>
      <ScrollToTopButton/>
   
    
     <Footer/>

    </>
  );
}

export default About;
