import React from 'react';
import './Footer.css'; // You can create a separate CSS file for your footer styles


const handleSubmit = (event) => {
  event.preventDefault();

  // Get values from form
  const email = event.target.email.value;
  const message = event.target.message.value;

  // Compose mailto link
  const mailtoLink = `mailto:info@rupasinghesteels.com?subject=New Inquiry&body=${encodeURIComponent(
    `Email: ${email}%0A%0AMessage: ${message}`
  )}`;

  // Open default email client
  window.location.href = mailtoLink;
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-address">
          <h4>Address</h4>
          <p>12 B Station Road,<br/> Wattala,<br/> Sri Lanka<br/> Postal Code: 11300</p>
          <a
    href="https://www.google.com/maps/search/?api=1&query=12%20B%20Station%20Road%2C%20Wattala%2C%20Sri%20Lanka%2011300"
    target="_top" 
    className="location-button"
  >
    View Location
  </a>
          
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>071 535 40 40</p>
          <p>Email: <br/>info@rupasinghesteels.com</p>
       
        <div className="social-icons">
          <a href="https://www.facebook.com/rupasinghesteels" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://wa.me/94715354040" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          <a href="https://www.instagram.com/rupasinghesteels" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/rupasinghesteels" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>

        </div>

        </div>
        <div className="footer-office">
          <h4>Office Hours</h4>
          <p>Weekdays:<br/> 9 AM - 5:30 PM</p>
        </div>

        <div className="footer-message">      
        <h4>Send us a message</h4>
           <form onSubmit={handleSubmit}>
  <input type="email" id="email" name="email" placeholder="Enter your email" />
  <textarea id="message" name="message" rows="4" placeholder="Enter your message"></textarea>
  <button type="submit">Send</button>
        </form>
       </div>


      </div>
     

   

<div className="footer-map">

      <iframe
          title="Rupasinghe Steels Location"
          src="https://www.google.com/maps?q=12%20B%20Station%20Road%2C%20Wattala%2C%20Sri%20Lanka%2011300&output=embed"
          width="100%"
          height="100"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
     

      <div className="footer-copyright">
  <p className="copyright-text">© 2025 Rupasinghe Steels & Fabrications Pvt Ltd. All rights reserved.</p>
        <p className="credit-text">Designed and developed by Stenco IT Solutions |</p>
</div>



    </footer>
  );
};

export default Footer;
