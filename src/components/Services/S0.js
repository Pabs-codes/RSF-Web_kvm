import React, { useState  } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SS from './SS'; 
import "./S0.css";
import PESB from './PESB'; 
import STS from './STS'; 
import RW from './RW';
import CFS from './CFS';
import M from './M'


const S0 = () => {
  const steelStructure = 'steelStructure';
    const [selectedSection, setSelectedSection] = useState(steelStructure);
  
    const handleSectionClick = (section) => {
      setSelectedSection(section);
    };


    
 

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="scy" id="s">
    
      <div className="sco">
        <div className="sc">

          <div className="sg" onClick={() => handleSectionClick('steelStructure')}>
            <Slider {...sliderSettings}>
              <div>
                <div className="sib" >
                  <img src="./media/ST (1).jpg" alt="" className="zoomed-iN"  />
                </div>
              </div>
              {/* Add additional images for the slideshow */}
              <div>
                <div className="sib">
                  <img src="./media/ST (2).jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
              <div>
                <div className="sib">
                  <img src="./media/ST (3).jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
            </Slider>
        <h3 className="st" onClick={() => handleSectionClick('steelStructure')}>STEEL <br /> STRUCTURE</h3>
        </div>







          <div className="sg" onClick={() => handleSectionClick('preEngineeredBuildings')}>
            
            <Slider {...sliderSettings}>
              <div>
                
                <div className="sib">
                  <img src="./media/PESB (1).jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
              {/* Add additional images for the slideshow */}
              <div>
                <div className="sib">
                  <img src="./media/PESB (2).jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
              <div>
                <div className="sib">
                  <img src="./media/PESB (3).jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
            </Slider>
            <h3 className="st" onClick={() => handleSectionClick('preEngineeredBuildings')}>PRE-ENGINEERED <br /> STEEL BUILDINGS </h3>
          </div>






          <div className="sg" onClick={() => handleSectionClick('trussSystem')}>
            <Slider {...sliderSettings}>
              <div>
                <div className="sib">
                  <img src="./media/STS (1).jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
              {/* Add additional images for the slideshow */}
              <div>
                <div className="sib">
                  <img src="./media/STS (2).jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
              <div>
                <div className="sib">
                  <img src="./media/STS (3).jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
            </Slider>
            <h3 className="st" onClick={() => handleSectionClick('trussSystem')}>STANDARD <br /> TRUSS SYSTEM</h3>
          </div>








          <div className="sg" onClick={() => handleSectionClick('roofandwallcladding')}>
            <Slider {...sliderSettings}>
              <div>
                <div className="sib">
                  <img src="./media/RWC (1).jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
              {/* Add additional images for the slideshow */}
              <div>
                <div className="sib">
                  <img src="./media/RWC (2).jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
              <div>
                <div className="sib">
                  <img src="./media/RWC (3).jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
            </Slider>
            <h3 className="st">ROOF & WALL <br /> CLADDING SYSTEM</h3>
          </div>




          <div className="sg" onClick={() => handleSectionClick('CFS')}>
            <Slider {...sliderSettings}>
              <div>
                <div className="sib">
                  <img src="./media/\CFS (1).jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
              {/* Add additional images for the slideshow */}
              <div>
                <div className="sib">
                  <img src="./media/CFS (2).jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
              <div>
                <div className="sib">
                  <img src="./media/CFS (3).jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
            </Slider>
            <h3 className="st">COLD FORM <br /> SECONDARY</h3>
          </div>





          <div className="sg" onClick={() => handleSectionClick('Mezz')}>
            <Slider {...sliderSettings}>
              <div>
                <div className="sib">
                  <img src="./media/M.jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
              {/* Add additional images for the slideshow */}
              <div>
                <div className="sib">
                  <img src="./media/3.jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
              <div>
                <div className="sib">
                  <img src="./media/3.jpg" alt="" className="zoomed-iN" />
                </div>
              </div>
            </Slider>
            <h3 className="st">MEZZANINE <br /> &nbsp; </h3>
          </div>

            
        
        </div>

          {/* Render the selected section */}
          {selectedSection === 'steelStructure' && <SS />}
          {selectedSection === 'preEngineeredBuildings' && <PESB />}
          {selectedSection === 'trussSystem' && <STS />}
          {selectedSection === 'roofandwallcladding' && <RW/>}
          {selectedSection === 'CFS' && <CFS/>}
          {selectedSection === 'Mezz' && <M/>}
      </div>
    </div>
  );
};

export default S0;