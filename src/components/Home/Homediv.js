import rsf from "../../assets/rsf.jpg";
import rsf2 from "../../assets/rsf2.png";
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import three from "../../assets/3.jpg";
import { Link } from 'react-router-dom';

import './Homediv.css';

import { useEffect, useRef } from "react";




const Homediv = () => {
  // Create a reference to the div you want to apply the fade-in effect
  const fadeInSection = useRef(null);

  // Use useEffect to trigger the fade-in effect when the component mounts
  useEffect(() => {
    const handleScroll = () => {
      // Get the top position of the element
      const topPos = fadeInSection.current.getBoundingClientRect().top;
      // Check if the top position is within the viewport
      const isVisible = topPos < window.innerHeight - 50;
      // Add the "active" class if the element is visible
      if (isVisible) {
        fadeInSection.current.classList.add("active");
        // Remove the event listener to avoid unnecessary checks
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Add event listener for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return ( 

        
        <div className={`homediv fade-in`} ref={fadeInSection}>
            <h1>Rupasinghe Steels</h1>
            <p>
            Welcome to <b> Rupasinghe Steels & Fabrications Pvt Ltd,</b>
             your trusted partner for premium Civil/Steel
              Construction, Pre-Engineered/Fabricated Steel 
              Buildings, Roofing, Cladding, and Gutter 
              solutions across Sri Lanka. Specializing 
              in both pre-engineered and conventional 
               building construction, our dedicated team
                guarantees engineering excellence and co
                st-effective solutions, ensuring swift co
                nstruction with minimal labor. From indus
                trial to domestic projects, Rupasinghe S
                teels & Fabrications delivers tailored se
                rvices, addressing budget constraints and
                 future expansion needs. Choose us for un
                 paralleled quality and expertise in the 
                 construction industry.
                
            </p>

            <div className="first-des">
            <div className="des-text">
            <h2> Who Are We?</h2>
            <p> Experience traditional quality and reliability 
                coupled with design flexibility and personalized 
                service that has earned us an outstanding reputat
                ion in the Construction industry. Customer satisfa
                ction is our priority, and we take pride in consis
                tently delivering exceptional results.<br/> <br/>

Rupasinghe Steels & Fabrications has a proven track
record in constructing various steel structures,
including but not limited to school buildings,
healthcare facilities, and social care center 
buildings for organizations like the UN. Whether 
it's factories, warehouses, or office buildings,
we offer value-for-money solutions that meet th
e diverse needs of our clientele. Choose Rupasi
nghe Steels & Fabrications for excellence in co
nstruction and unparalleled customer satisfaction.
</p>

<Link to="/about">
  <button className="contact-button"> Read more  → </button>
</Link>
            </div>
        

        <div className="image">
            <img alt="img" src={rsf}/>
            <img alt="img" src={rsf2}/>
            </div>
        </div>



        <div className="what-we-do">
  <h3>- What We Do -</h3>
  <h2>Rupasinghe Steels Factory</h2>

  <div className="cards">
    <div className="card">
      <img alt="Card 1" src={one} />
      <h4> Prefabricate Steel Buildings
 </h4>
 <p> Swift and cost-effective construction with pre-engineered steel buildings, offering flexibility, durability, and efficient use of resources. </p>
    </div>

    <div className="card">
      <img alt="Card 2" src={two} />
      <h4>Commercial Buildings
 </h4>
 <p>Tailored steel solutions for commercial spaces, combining durability, functionality, and aesthetic appeal to enhance business environments.</p>
    </div>

    <div className="card">
      <img alt="Card 3" src={three} />
      <h4>Multi storied steel Buildings.</h4>
<p>Modern, efficient, and versatile multi-storied steel structures for optimized space utilization and structural strength. </p>
    </div>

    
  </div>

</div>



           
        </div>

        

        
    )
}
export default Homediv;