import React, { useEffect, useRef } from 'react';
import "./Homedivtwo.css";
// import rsf from "../assets/rsf.jpg";
// import rsf2 from "../assets/rsf2.png";
import one from "../../assets/why (4).png";
import two from "../../assets/why (5).png";
import three from "../../assets/why (2).png";
import four from "../../assets/why (1).png";
import five from "../../assets/why (6).png";
import six from "../../assets/why (3).png";

const Homedivtwo = () => {
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
    <div className={`Homedivtwo fade-in`} ref={fadeInSection}>
      <div className="why-choose-us2">
        <h3>- Why Choose Rupasinghe Steels -</h3>
        <h2>Rupasinghe Steels BUILDING CONTRACTORS (PRIVATE) LIMITED</h2>

        <div className="cards2">
          {/* Card 1 */}
          <div className="card2">
            <img alt="Card 1" src={one} />
            {/* <h4>Reliability and Trustworthiness</h4> */}
            <p>Professional Standards for Individuals</p>
          </div>

          {/* Card 2 */}
          <div className="card2">
            <img alt="Card 2" src={two} />
            {/* <h4>Professional Expertise</h4> */}
            <p>Establishing Professionalism at Scale</p>
          </div>

          {/* Card 3 */}
          <div className="card2">
            <img alt="Card 3" src={three} />
            {/* <h4>Skilled and Experienced Team</h4> */}
            <p>Sutras for Professional Excellence</p>
          </div>

          {/* Card 4 */}
          <div className="card2">
            <img alt="Card 4" src={four} />
            {/* <h4>State-of-the-Art Facilities</h4> */}
            <p>Integration of Modern Advanced Machines in the Steel Industry</p>
          </div>

          {/* Card 5 */}
          <div className="card2">
            <img alt="Card 5" src={five} />
            {/* <h4>Customer-Centric Approach</h4> */}
            <p>Meeting the Needs of Domestic and International Clients</p>
          </div>

          {/* Card 6 */}
          <div className="card2">
            <img alt="Card 6" src={six} />
            {/* <h4>Technological Advancements</h4> */}
            <p>Embracing Technological Advancements and Aesthetics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homedivtwo;
