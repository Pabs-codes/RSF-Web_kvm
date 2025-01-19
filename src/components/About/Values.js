import React from 'react';
import './Values.css'; // Import your CSS file for styling

const Values = () => {
  return (
    <div className="values-container">
      <h1 className="values-title">CORE VALUES</h1>
      <ul className="values-list">
        <li className="value-item">
          <span className="value-number">1.</span> OPTIMISM
          <p>Foster a positive outlook, confront challenges with determination, and relentlessly pursue success.</p>
        </li>
        <li className="value-item">
          <span className="value-number">2.</span> ACCOUNTABILITY
          <p>Maintain a high standard of personal accountability, taking ownership of our work, and delivering impactful results for our clients.</p>
        </li>
        <li className="value-item">
          <span className="value-number">3.</span> COLLABORATION
          <p>In the words of an African proverb, "If you want to go fast, go alone. If you want to go far, go together."</p>
        </li>
        <li className="value-item">
          <span className="value-number">4.</span> INGENUITY
          <p>The path to success is illuminated by creativity and a commitment to embracing innovative solutions for a promising future.</p>
        </li>
        <li className="value-item">
          <span className="value-number">5.</span> EXCELLENCE
          <p>Excellence is not just a standard; it is the essence of our brand, reflected in the quality of our products and services.</p>
        </li>
        <li className="value-item">
          <span className="value-number">6.</span> ENDURANCE
          <p>Sustainability is not merely a goal but a relentless pursuit. Establishing enduring objectives and steadfastly achieving them forms the bedrock of our success.</p>
        </li>
      </ul>
    </div>
  );
};

export default Values;
