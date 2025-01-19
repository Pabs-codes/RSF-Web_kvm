import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Error from '../components/Uconstruction/Error';
import Footer from '../components/Footer/Footer';
import ScrollToTopButton from '../components/Uconstruction/ScrollToTopButton';


// import './Projects.css'; 

function Projects() {
  return (
    <>
      <Navbar />
      <Error/>
      <ScrollToTopButton/>
      <Footer/>
    </>
  );
}

export default Projects;
