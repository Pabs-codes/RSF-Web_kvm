// Chart.js
import React from 'react';
import rsChart from '../../assets/rs chart.jpg';
import resChart from '../../assets/2.jpg';
import './Chart.css'; // Import the CSS file

const Chart = () => {
  return (
    <div className='chartContainer'>
      <div className='descriptionContainer'>
        <h5><span>Rupasinghe</span> Steels  | who are we ?</h5>

        <p>
           Your Trusted Partner in Pre-engineered Steel Buildings and Structures!
           <br/>    <br/>
           At Rupasinghe Steels, we specialize in providing comprehensive solutions
            for Pre-engineered Steel Buildings and Steel Structures. With a commitment 
            to customer satisfaction as the core value for long-term prosperity,
             Rupasinghe Steels is dedicated to delivering consistently 
             comprehensive and professional services for every project.
             <br/> 

             Rupasinghe Steels provides services throughout the entire process, 
             including  </p>

            <h4> Structural Design BOM / Material Purchasing Cutting of Structural steel according 
              to Design Grinding /Cup brush Drilling Welding Painting Quality Checking Erection </h4>
              <br/>
       <p>
              From accessories to components that make up a Pre-engineered steel building, 
              Rupasinghe Steels is dedicated to delivering the most perfect solutions to customers and partners.
      </p>

            <img className='mimg' src={resChart} alt="RS Chart" />
          <br/> <br/>



    <h5> <span>Rupasinghe</span> Steels | Our values</h5>

        <p>
        Founded by a team of experts with nearly 4 years of experience in the field of steel structures
         and industrial construction, Rupasinghe Steels and Fabrications Pvt Ltd is a leading entity in the industry.
          By 2024, Rupasinghe Steels and Fabrications has grown significantly with the contribution of over 80
           highly trained and experienced engineers and staff members.
           The growing number of collaborative partnerships throughout 
           the years stands as a testament to Rupasinghe Steels and Fabrications' sustainable Reputation - Professionalism.
        </p>
      </div>

      
      <div className='chartdiv'>
        <img src={rsChart} alt="RS Chart" />
        <p>- Organization Chart of Rupasinghe Steels & Fabrications pvt ltd -</p>
        <h3>

---

In addition to Pre-engineered steel buildings, Rupasinghe Steels provides comprehensive services that cover various stages, including consultation, design and permit acquisition, construction and erection, as well as the complete development of various types of structures such as warehouses, exhibition halls, commercial centers, exhibition centers, supermarkets, train stations, parking lots, and more.

In the construction steel supply market, Rupasinghe Steels has solidified strengths in the past years through various materials such as structural steel, steel plates, C-sections, Z-sections, galvanized sheets, cold-rolled sheets, colored sheets, and more, with fast service, availability, meeting all customer requirements.

Over the years, Rupasinghe Steels has consistently aimed to deliver construction solutions that adhere to the highest quality standards while optimizing cost-efficiency for customers. By doing so, Rupasinghe Steels actively contributes to the expansion of the Pre-engineered steel building market and generates positive value for society.

---

Feel free to adapt it further if needed to fit your specific context or preferences..
        </h3>
      </div>

     



    

    </div>

   
  );
};

export default Chart;
