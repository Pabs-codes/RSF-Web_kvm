import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/" className="navbar-logo" onClick={() => window.location.reload()}>
        <h1 className="navbar-logo">
          <span className="word1">Rupasinghe</span>
          <span className="word2"> Steels</span>
        </h1>
        </Link>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i> {item.title}
              </Link>
            </li>
          ))}

          <div className="social-buttons">
            <a href="https://wa.me/+94777751550" target="_blank" rel="noopener noreferrer">
              <button className="whatsapp-button">
                <FaWhatsapp />
              </button>
            </a>
            <a href="https://www.facebook.com/rupasinghesteels" target="_blank" rel="noopener noreferrer">
              <button className="facebook-button">
                <FaFacebook />
              </button>
            </a>
            <a href="https://www.instagram.com/rupasinghesteels" target="_blank" rel="noopener noreferrer">
              <button className="instagram-button">
                <FaInstagram />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/rupasinghesteels" target="_blank" rel="noopener noreferrer">
              <button className="linkedin-button">
                <FaLinkedin />
              </button>
            </a>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;






