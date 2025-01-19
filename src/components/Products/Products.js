import data from './data.json';
import { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
  const [filter, setFilter] = useState('Structural_steel');
  const [isVisible, setIsVisible] = useState(false);
  const [showInfoMessage, setShowInfoMessage] = useState(false);
 
  useEffect(() => {
    // Set isVisible to false before changing the filter
    setIsVisible(false);

    // After a short delay, set isVisible to true to trigger the fade-in effect
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Adjust the delay as needed

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [filter]);

  const handleMoreInfoClick = () => {
    // You can perform additional actions here if needed
    setShowInfoMessage(true);
 // Set a timeout to hide the info message after a certain duration (e.g., 3000 milliseconds or 3 seconds)
 setTimeout(() => {
  setShowInfoMessage(false);
}, 5000);
};

  

  return (
    <section className="products section" id="products">
      <div className="products__container">
        <h2 className="section__title">
          Explore our durable steel products and <br />
          choose the perfect solution for your project
        </h2>

        <ul className="products__filters">
        <li
            className={`products__item  ${filter === 'Structural_steel' && 'active-product'}`}
            onClick={() => setFilter('Structural_steel')}
            data-filter=""
          >
            <h3 className="products__title">Structural Steel</h3>
            <span className="products__stock">15 products</span>
          </li>

          <li
            className={`products__item products__line ${filter === 'Roofing_solutions' && 'active-product'}`}
            onClick={() => setFilter('Roofing_solutions')}
            data-filter=""
          >
            <h3 className="products__title">Roofing Solutions</h3>
            <span className="products__stock">8 products</span>
            
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => setFilter('Cladding_sheets')}
            data-filter=""
          >
            <h3 className="products__title">Cladding Sheets</h3>
            <span className="products__stock">4 products</span>
          </li>
        </ul>

        <div className="products__content grid">
          {data.categories.map((category, index) => {
            return (
              category.category === filter && (
                <article className={`products__card main-menu ${isVisible ? 'fade-in active' : 'fade-in'}`} key={index}>
                  <div className="products__shape">
                    <img src={category.imageUrl} alt="" className="products__img" />
                  </div>
                  <div className="products__data">
                    <h2 className="products__name1">{category.name}</h2>
                    <h3 className="products__availability">{category.availability}</h3>
                    {/* <h3 className="products__size2">{category.size2}</h3> */}
                    <h4 className="products__details">{category.details}</h4>
                    {/* <h5 className="products__details2">{category.details2}</h5> */}
                    <h5 className="products__details2">{category.moreInfo}</h5>
                    <button className="products__button2" onClick={handleMoreInfoClick}>
                    Click here for more info
                  </button>

                   {/* Conditionally render the info message */}
                   {showInfoMessage && (
                    <p className="info-message">not available at the moment , <br/> please contact us for more details.</p>
                  )}

                 
                  </div>
                </article>
              )
            );
          })}

          
        </div>
      </div>
    </section>
  );
};

export default Products;
