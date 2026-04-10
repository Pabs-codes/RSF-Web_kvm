import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">

        <div className="info-section">
          <h2 className="info-heading">Address</h2>
          <p className="info-text">12 B Station Road, Wattala, Sri Lanka</p>
          <p className="info-text">Postal Code: 11300</p>
          <a
          className="map-link"
          href="https://www.google.com/maps/search/?api=1&query=12%20B%20Station%20Road%2C%20Wattala%2C%20Sri%20Lanka%2011300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
          </div>
        <div className="info-section">
          <h2 className="info-heading">Contact Numbers</h2>
          <p className="info-text">071 535 40 40</p>
        </div>
        <div className="info-section">
          <h2 className="info-heading">Email</h2>
          <p className="info-text">info@rupasinghesteels.com</p>
        </div>
        <div className="info-section">
          <h2 className="info-heading">Office Hours</h2>
          <p className="info-text">Weekdays: 9 AM - 5:30 PM</p>
        </div>
      
      </div>

      <div className="message-container">
        <h2 className="message-heading">Send us a Message</h2>
        <form>
          <label htmlFor="name" className="form-label">Your Name:</label> 
          <input type="text" id="name" name="name" className="form-input" required />

          <label htmlFor="email" className="form-label">Your Email:</label>
          <input type="email" id="email" name="email" className="form-input" required />

          <label htmlFor="message" className="form-label">Your Message:</label>
          <textarea id="message" name="message" className="form-textarea" required></textarea>
           <br/>
          <button type="submit" className="form-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;




