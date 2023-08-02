import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../images/footerLogo.png';
import '../css/footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <Container>
        <div className="content">
          <div className="logoPart">
            <a href="#">
              <img src={Logo} alt="Logo" />
            </a>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="listPart">
            <h3 className="listTitle">
              New to sharing?
            </h3>
            <ul className="list">
              <li className="listItem"><a href="#">Why flat sharing</a></li>
              <li className="listItem"><a href="#">The guide to flat sharing</a></li>
              <li className="listItem"><a href="#">How to rent your room</a></li>
              <li className="listItem"><a href="#">How to find your room</a></li>
            </ul>
          </div>
          <div className="listPart">
            <h3 className="listTitle">
              About us
            </h3>
            <ul className="list">
              <li className="listItem"><a href="#">About Flatpulse</a></li>
              <li className="listItem"><a href="#">News</a></li>
              <li className="listItem"><a href="#">Terms & Conditions</a></li>
              <li className="listItem"><a href="#">Privacy Policy</a></li>
              <li className="listItem"><a href="#">Cookies Policy</a></li>
            </ul>
          </div>
          <div className="listPart">
            <h3 className="listTitle">
              Support
            </h3>
            <ul className="list">
              <li className="listItem"><a href="#">Contact Us</a></li>
              <li className="listItem"><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="socialMediaPart">
            <h2 className="listTitle">
              Follow us
            </h2>
            <div className="socialMedia">
              <div><a href="#" className="facebook"></a></div>
              <div><a href="#" className="instagram"></a></div>
              <div><a href="#" className="linckedIn"></a></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer