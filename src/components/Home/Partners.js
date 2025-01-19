import React from 'react';
import partners from '../../assets/1.png';
import './Partners.css';

const Partners = () => {
  return (
    <div className="partners-container">
      <h2 className="partners-heading">CORPORATION PARTNERS</h2>
      <img className="partners-image" alt="partners" src={partners} />
    </div>
  );
}

export default Partners;
