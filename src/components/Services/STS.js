

import React from 'react';
import './STS.css'; 
import sts1 from '../../assets/STS1.png'

const STS = () => {
  return (
    <div className="sts-container">
      <div className="truss-system">
        <h2 className="section-heading-sts">Standard Truss System</h2>
        <p className="description">
          A standard truss system is a structural framework composed of triangular units. Trusses are commonly used in engineering and construction to support loads over a span. The triangular shape is crucial in distributing forces efficiently, making trusses strong and stable. The primary components of a standard truss system include:
        </p>
        <ol className="truss-components">
          <li><strong>Top Chord:</strong> <br/>The upper horizontal member of the triangular truss structure. </li><br/>
          <li><strong>Bottom Chord:</strong> <br/>The lower horizontal member of the triangular truss structure. </li><br/>
          <li><strong>Web Members:</strong><br/> The diagonal members connecting the top and bottom chords, forming triangular patterns. These members contribute to the stability and strength of the truss.</li><br/>
        </ol>
        <p className="description">
          The triangular shape of a truss is essential because it provides inherent stability and prevents deformation under load. The top chord typically experiences compression forces, while the bottom chord experiences tension forces. The diagonal web members transfer these forces efficiently, minimizing the impact of external loads.
        </p>
        <p className="description">
          Standard truss systems find applications in various engineering and construction projects, including the design of roofs, bridges, towers, and other structures where a lightweight yet strong support system is required. Different types of trusses, such as Pratt trusses or Howe trusses, may vary in the arrangement and orientation of their components, but the fundamental triangular structure remains a key feature in each design.
        </p>

     
        <img className="truss-image" src={sts1} alt="Standard Truss System" />
        <p className='refp'> - Standard truss system - </p>
        
      </div>


   

     
    </div>
  );
};

export default STS;
