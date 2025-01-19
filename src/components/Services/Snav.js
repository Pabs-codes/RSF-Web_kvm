import React, { useState } from 'react';
import './Snav.css';
import S0 from './S0';
import Error from '../Uconstruction/Error';
import img from '../../assets/customerservice.jpg';
import wsm1 from '../../assets/wsm1.jpg'
import wsm2 from '../../assets/wsm2.jpeg'
import wsm3 from '../../assets/wsm3.jpg'

import wsm4 from '../../assets/wsm4.jpg'
import wsm5 from '../../assets/wsm5.jpg'
import wsm6 from '../../assets/wsm6.jpg'


const Snav = ({ onSelect, selectedItem }) => {
  return (
    <div className="S-navi">
      <ul className="Sulclass">
        <li className={`Snavclass ${selectedItem === 'Steel Structures' ? 'active' : ''}`}>
          <a href="#Steel Structures" className="Snavclass" onClick={() => onSelect('Steel Structures')}>
           Product
          </a>
        </li>
        <li className={`Snavclass ${selectedItem === 'Comprehensive Services' ? 'active' : ''}`}>
          <a href="#Comprehensive Services" className="Snavclass" onClick={() => onSelect('Comprehensive Services')}>
            Comprehensive Services
          </a>
        </li>
        <li className={`Snavclass ${selectedItem === 'Commerce' ? 'active' : ''}`}>
          <a href="#Commerce" className="Snavclass" onClick={() => onSelect('Commerce')}>
            Commerce
          </a>
        </li>
        <li className={`Snavclass ${selectedItem === 'Trade and Export' ? 'active' : ''}`}>
          <a href="#Trade and Export" className="Snavclass" onClick={() => onSelect('Trade and Export')}>
            Trade and Export
          </a>
        </li>
      </ul>
    </div>
  );
};


const SteelStructures = () => {
  return (
    <div>
  <S0 />
    </div>
  );
};

const ComprehensiveServices = () => {
  return (
    <div className='cs-container'>
      <div className="cs-column">
        <h2 className='cs-heading1'> Comprehensive Services Overview - Rupasinghe Steels</h2>

        <h2 className="cs-heading">ARCHITECTURAL DESIGN</h2>
        <p className="cs-paragraph">
          At Rupasinghe Steels, we carefully listen to our customers' desires and needs. Our professional and experienced team will craft a plan encompassing unique ideas, efficient timelines, and optimal costs to deliver top-notch construction and services.
        </p>

        <h2 className="cs-heading">DESIGN & QUOTATION</h2>
        <p className="cs-paragraph">
          Under the banner of "Passion & Vision - Rupasinghe Steels' Corporate Culture," our team, driven by responsibility and dedication, continually proposes impressive and practical solutions. These efforts aim to help customers optimize costs and foster high levels of trust and value in our collaboration.
        </p>

        <h2 className="cs-heading">COLLABORATION - CONTRACT SIGNING</h2>
        <p className="cs-paragraph">
          Contract signing at Rupasinghe Steels goes beyond legal aspects; it's a commitment based on trust. We aspire to bring forth the best and most significant projects, surpassing our own past successes.
        </p>

        <h2 className="cs-heading">TECHNICAL DRAWINGS</h2>
        <p className="cs-paragraph">
          For Rupasinghe Steels, it's not just about design; it's about infusing creativity and innovation. With an engineering team boasting nearly 20 years of experience and staying abreast of modern advancements, we leverage our diverse international exposure for a competitive advantage.
        </p>
        
      </div>

      <div className="cs-column">
     
      
        <img className='custoimg' src={img} alt='customer'></img>
        <h2 className="cs-heading">MANUFACTURING AND PROCESSING</h2> 
        <ul>
          <li>Rupasinghe Steels Structural Manufacturing Plant</li>
          <li>Rupasinghe Steels Sheet Production Plant</li>
          <li>Rupasinghe Steels Purlin Production Plant</li>
        </ul> <br/>
        <p className="cs-paragraph">
          Our three main plants ensure meticulous processing with strict quality control. The combination of our closed and upgraded production process, alongside investments in modernization, positions Rupasinghe Steels as a market leader, creating brand value and competitiveness.
        </p>

        <h2 className="cs-heading">CONSTRUCTION AND ERECTION</h2>
        <p className="cs-paragraph">
          Every steel component undergoes quality inspection at the factory before transportation to the construction site. Rupasinghe Steels pays special attention to transportation, construction, installation, and exportation, considering each stage a critical factor. Our experienced construction team prioritizes care, risk prevention, and occupational safety for all involved.
        </p>
      </div>
    </div>
  );
};






const Commerce = () => {
  return (
    <div className='Commerce-container'>
      <div className='left-content'>
        <h2 className='commerce-heading'>SUPPLYING MATERIALS - CATERING TO THE STEEL STRUCTURE INDUSTRY</h2>

        <p className='commerce-paragraph'>
          Rupasinghe Steels specializes in delivering comprehensive solutions, encompassing consultancy, design, manufacturing, and construction of pre-engineered steel buildings, along with top-notch steel structural products for both domestic and international markets. We are steadfast in our pursuit of excellence, aiming to create superior projects through professional services, thereby elevating the value of Sri Lankan construction and championing the Rupasinghe Steels brand.
        </p>

        <p className='commerce-paragraph'>
          Furthermore, our commitment extends to the provision of steel materials to support diverse projects and constructions, showcasing a robust facet of Rupasinghe Steels.
        </p>

        <h3 className='commerce-subheading'>1. WELDED STEEL MESH</h3>
        <p className='commerce-paragraph'>
          Renowned as welded wire mesh, this type of mesh is crafted from cold-drawn iron and meticulously welded to form interconnected mesh panels. Welded steel mesh finds extensive use in protective fencing and concrete reinforcement. In the contemporary construction landscape, welded steel mesh proves to be a versatile alternative, effectively replacing the traditional hand-tying of steel bars.
        </p>
        <div className='commerce-images'>
        <img src={wsm1} className='commerce-productimage' alt='wsm' />
    <img src={wsm2} className='commerce-productimage' alt='wsm' />
    <img src={wsm3} className='commerce-productimage' alt='wsm' />

</div>

      </div>

      <div className='right-content'>
       

        <h3 className='commerce-subheading'>2. RAW MATERIALS FOR STRUCTURAL STEEL</h3>
        <p className='commerce-paragraph'>
          The primary ingredients for structural steel production at Rupasinghe Steels comprise hot-rolled steel plates and structural steel sections. These essential materials are sourced through strategic partnerships with reputable manufacturers, ensuring clear origins and adherence to stringent technical standards.
        </p>
        <div className='commerce-images'>
    <img src={wsm4} className='commerce-productimage' alt='wsm' />
  <img src={wsm5} className='commerce-productimage' alt='wsm' />
  <img src={wsm6} className='commerce-productimage' alt='wsm' />
  </div>
      </div>
    </div>
  );
};

const TradeAndExport = () => {
  return (
      <div>
         

          <Error/>
      <p>EXPORT - PACKAGING AND LOGISTICS SERVICES</p>
      <p>
        One of the prominent and strongly developed activities of Rupasinghe Steels is the export of processed and
        quality-inspected steel components to foreign markets.
      </p>
      <p>
        In addition to manufacturing and constructing pre-engineered steel buildings and steel structures domestically,
        Rupasinghe Steels is currently serving in the processing of steel components for export to numerous major partners in
        Asia.
      </p>
      <h2>DELIVERY PLAN</h2>
      <p>I-WEB</p>
      {/* ... (repeat the same pattern for other sections) */}
    </div>
  );
};

const App = () => {
  // Set 'Steel Structures' as the default selected item
  const [selectedItem, setSelectedItem] = useState('Steel Structures');

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
     <Snav onSelect={handleSelect} selectedItem={selectedItem} />

      {/* Render content based on the selected item */}
      {selectedItem && (
        <div>
          {selectedItem === 'Steel Structures' && <SteelStructures />}
          {selectedItem === 'Comprehensive Services' && <ComprehensiveServices />}
          {selectedItem === 'Commerce' && <Commerce />}
          {selectedItem === 'Trade and Export' && <TradeAndExport />}
        </div>
      )}
    </div>
  );
};

export default App;
