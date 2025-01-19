import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

const slideShowData = [
  {
    text: "Design & Build",
    paragraphs: [
      "Crafting visionary spaces from concept to completion, our services seamlessly integrate creativity with precision for a tailored and functional outcome.",
    ],
  },
  {
    text: "Building Construction",
    paragraphs: [
      "Specializing in construction that embodies durability, innovation, and aesthetic appeal, ensuring structures stand the test of time.",
    ],
  },
  {
    text: "Custom Fabrication",
    paragraphs: [
      "Tailored to your unique needs, our services bring your ideas to life with precision, creating bespoke solutions reflecting your distinct vision.",
    ],
  },
  {
    text: "Structural Steel Fabrication",
    paragraphs: [
      "Setting the foundation for strength and stability, our expertise and cutting-edge technology deliver robust solutions for diverse projects.",
    ],
  },
  {
    text: "Maintenance and Repair",
    paragraphs: [
      "Committed to the longevity of your investments, our services provide timely and efficient solutions, ensuring resilient and functional structures.",
    ],
  },
  {
    text: "Sheet Metal Fabrication",
    paragraphs: [
      "Mastering the art of sheet metal, our fabrication services offer versatile solutions, merging form with function to meet industry demands with precision and innovation.",
    ],
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideShowData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCallNowClick = () => {
    const phoneNumber = "+94777751550"; // Replace with your actual phone number
    const telLink = `tel:${phoneNumber}`;

    // Open the default phone app with the provided phone number
    window.open(telLink, "_blank");
  };


  

  return (
    <div className="hero">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={require("../../assets/bgvid1.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-text">
        <h1>{slideShowData[currentSlide].text}</h1>
        {slideShowData[currentSlide].paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <button className="c-button" onClick={handleCallNowClick}>
          Call Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
