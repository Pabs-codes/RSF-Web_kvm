import React from 'react';
import './PESB.css'; 
import PESB2 from '../../assets/PESB2.jpg'

const PESB = () => {
  return (
    <div className="pesb-container">
      <div className='divone'>
        <h2 className="section-heading">INTRODUCTION OF PRE-ENGINEERED STEEL BUILDINGS</h2>
        <p>
          Pre-engineered Steel House is a type of house constructed using steel components, manufactured and assembled according to predetermined architectural and engineering drawings.
        </p>
        <p>
          The process of creating a complete product (including quality control and management) goes through three main stages: Design, component fabrication, and on-site assembly.
        </p>
        <p>
          The entire steel structure can be pre-engineered in advance and then delivered to the construction site for assembly within a relatively short period of time.
        </p>
        <p>
          If a project requires cost savings, fast construction, absolute quality control, and sustainability, Pre-engineered steel houses are the optimal choice.
        </p>
        {/* You can add an <img> tag for the image, replace 'image_source' with the actual source of your image */}
        <img className="pesb-image" src={PESB2} alt="Pre-engineered Steel House" />
        <p className='refp'> STRUCTURE OF PRE - ENGINEERED STEEL BUILDING </p>
        
      </div>

      <div className='divtwo'>
        <h2 className="section-heading">ADVANTAGES OF PRE-ENGINEERED STEEL BUILDINGS</h2>
        <ol>
          <li className='listclass'><b> Efficient Construction and Erection Schedule:</b> <br /> All components are precision-manufactured in the factory and transported to construction sites, significantly reducing construction time by at least two-thirds compared to traditional concrete buildings..</li>
          <li className='listclass'><b>Ability to Span Large Distances:</b><br/>Pre-engineered steel buildings can efficiently span distances of up to 100m, making them versatile for applications such as shopping malls, exhibition centers, airports, stadiums, and more.</li>
          <li className='listclass'><b>Cost Savings:</b><br/>The lightweight nature of steel buildings results in reduced foundation requirements, leading to substantial cost savings. Additionally, the shortened construction duration helps minimize labor costs on-site.</li>
          <li className='listclass'><b>Flexible Expansion Options:</b><br/>Components are seamlessly interconnected through bolts, enabling adaptable and cost-effective expansion strategies.</li>
          <li className='listclass'><b>Low Weight Design:</b><br/>Pre-engineered buildings boast a lighter weight compared to their concrete counterparts, alleviating structural loads and providing enhanced resistance to seismic forces.</li>
          <li className='listclass'><b>Material Flexibility:</b><br/>Suited for a variety of materials including cladding, wood, glass, and brick, offering versatility in design and construction options.</li>
         
        </ol>
      </div>
    </div>
  );
};

export default PESB;
