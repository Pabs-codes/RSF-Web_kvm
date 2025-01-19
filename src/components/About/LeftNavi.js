import React, {useState , useEffect} from 'react';
import './LeftNavi.css';
import Chart from "../About/Chart"
import Vision from "../About/Vision";
import Values from "../About/Values";
import Policy from "../About/Policy";
import Corporate from "../About/Corporate";


const LeftNavi = ({ onSelect, selectedItem }) => {
  return (
    <div className="left-navi">
      <ul className="ulclass">

        <li className={`navclass ${selectedItem === 'Overview' ? 'active' : ''}`}>
          <a href="#overview" className="navclass" onClick={() => onSelect('Overview')}>
            Overview</a></li>

            <li className={`navclass ${selectedItem === 'VisionMission' ? 'active' : ''}`}>
          <a href="#vision-mission" className="navclass" onClick={() => onSelect('VisionMission')}>
            Vision - Mission</a></li>

            <li className={`navclass ${selectedItem === 'CoreValues' ? 'active' : ''}`}>
          <a href="#core-values" className="navclass" onClick={() => onSelect('CoreValues')}>
            Core Values</a></li>

            <li className={`navclass ${selectedItem === 'QualityPolicy' ? 'active' : ''}`}>
          <a href="#quality-policy" className="navclass"onClick={() => onSelect('QualityPolicy')}>
            Quality Policy</a></li>

            <li className={`navclass ${selectedItem === 'CorporateCulture' ? 'active' : ''}`}>
          <a href="#corporate-culture" className="navclass"onClick={() => onSelect('CorporateCulture')}>
            Corporate Culture</a></li>

      </ul>
    </div>
  );
};

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item || 'Overview'); // If item is null, set it to 'Overview'
  };

  useEffect(() => {
    // Set 'Overview' as the default selected item when the component mounts
    handleSelect('Overview');
  }, []); // Empty dependency array ensures this effect runs only once on mount


  return (
    <div className="app-selected-item">
      <LeftNavi onSelect={handleSelect} selectedItem={selectedItem} />
      {/* Render content based on the selected item */}
      {selectedItem && (
        <div>
          {selectedItem !== 'hideText' && (
            <h2>{selectedItem}</h2>
          )}
    
          {selectedItem === 'Overview' && (
            <Chart/>
          )}

          {selectedItem === 'VisionMission' && (
            <Vision/>
          )}
          {selectedItem === 'CoreValues' && (
            <Values/>
          )}
          {selectedItem === 'QualityPolicy' && (
            <Policy/>
          )}
          {selectedItem === 'CorporateCulture' && (
            <Corporate/>
          )}
        </div>
      )}
    </div>
  );
};

export default App;