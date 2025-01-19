import React, { useEffect, useRef, useState } from "react";
// import { Link } from 'react-router-dom';
import "./Recentprojects.css";
import one from "../../assets/prsf1 (1).jpg";
import two from "../../assets/prsf1 (2).jpg";
import three from "../../assets/prsf1 (3).jpg";
import four from "../../assets/prsf1 (4).jpg";
import five from "../../assets/prsf1 (5).jpg";
import six from "../../assets/prsf1 (6).jpg";
import seven from "../../assets/prsf1 (7).jpg";
import eight from "../../assets/prsf1 (8).jpg";
import nine from "../../assets/prsf1 (9).jpg";
import ten from "../../assets/prsf1 (10).jpg";
import eleven from "../../assets/prsf1 (11).jpg";
import twelve from "../../assets/prsf1 (12).jpg";

const cardData = [
  {
    image: one,
    title: "Prefabricate Steel Buildings",
    description: "Swift and cost-effective construction with pre-engineered steel buildings, offering flexibility, durability, and efficient use of resources."
  },
  {
    image: two,
    title: "Commercial Buildings",
    description: "Tailored steel solutions for commercial spaces, combining durability, functionality, and aesthetic appeal to enhance business environments."
  },
  {
    image: three,
    title: "Multi storied steel Buildings.",
    description: "Modern, efficient, and versatile multi-storied steel structures for optimized space utilization and structural strength."
  },
  {
    image: four,
    title: "Commercial Buildings",
    description: "Tailored steel solutions for commercial spaces, combining durability, functionality, and aesthetic appeal to enhance business environments."
  },
  {
    image: five,
    title: "Multi storied steel Buildings.",
    description: "Modern, efficient, and versatile multi-storied steel structures for optimized space utilization and structural strength."
  },
  {
    image: six,
    title: "Commercial Buildings",
    description: "Tailored steel solutions for commercial spaces, combining durability, functionality, and aesthetic appeal to enhance business environments."
  },
  {
    image: seven,
    title: "Multi storied steel Buildings.",
    description: "Modern, efficient, and versatile multi-storied steel structures for optimized space utilization and structural strength."
  },
  {
    image: eight,
    title: "Commercial Buildings",
    description: "Tailored steel solutions for commercial spaces, combining durability, functionality, and aesthetic appeal to enhance business environments."
  },
  {
    image: nine,
    title: "Multi storied steel Buildings.",
    description: "Modern, efficient, and versatile multi-storied steel structures for optimized space utilization and structural strength."
  },
  {
    image: ten,
    title: "Commercial Buildings",
    description: "Tailored steel solutions for commercial spaces, combining durability, functionality, and aesthetic appeal to enhance business environments."
  },
  {
    image: eleven,
    title: "Multi storied steel Buildings.",
    description: "Modern, efficient, and versatile multi-storied steel structures for optimized space utilization and structural strength."
  },
  {
    image: twelve,
    title: "Multi storied steel Buildings.",
    description: "Modern, efficient, and versatile multi-storied steel structures for optimized space utilization and structural strength."
  },
  // Add more cardd data as needed
];

const Recentprojects = () => {
    const [currentGroup, setCurrentGroup] = useState(0);
    const fadeInSection = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const topPos = fadeInSection.current.getBoundingClientRect().top;
        const isVisible = topPos < window.innerHeight - 50;
  
        if (isVisible) {
          fadeInSection.current.classList.add("active");
          window.removeEventListener("scroll", handleScroll);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      // Auto-play the slideshow every 5 seconds
      const intervalId = setInterval(() => {
        handleSwipeUp();
      }, 5000);
  
      // Cleanup the interval when the component unmounts
      return () => {
        clearInterval(intervalId);
      };
    }, [currentGroup]);
  
    const handleSwipeUp = () => {
      setCurrentGroup((prevGroup) => (prevGroup + 1) % Math.ceil(cardData.length / 3));
    };
  

  return (
    <div className={`homediv fade-in`} ref={fadeInSection}>
      

      

      <div className="whatt-we-do">
        {/* <h3> suppp</h3> */}
        <h2>- Our Recent Projects -</h2>

        <div className="cardss">
          {cardData.slice(currentGroup * 3, currentGroup * 3 + 3).map((cardd, index) => (
            <div className="cardd" key={index}>
              <img alt={`Card ${index + 1}`} src={cardd.image} />
              <h4>{cardd.title}</h4>
              <p>{cardd.description}</p>
            </div>
          ))}
        </div>

        <button className="swipe-button" onClick={handleSwipeUp}>
          Slide ↗
        </button>
      </div>
    </div>
  );
};

export default Recentprojects;
