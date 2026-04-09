import React from 'react';
import partners from '../../assets/1.png';
import './Partners.css';

const Partners = () => {
  return (
    <div className="partners-container">
      <h2 className="partners-heading">CORPORATION PARTNERS</h2>
      <img loading="lazy" decoding="async" className="partners-image" alt="partners" src={partners} />
    </div>
  );
}

export default Partners;
