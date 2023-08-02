import React from 'react';
import { Container } from 'react-bootstrap';
import AboutUsImgOne from '../../images/homePage/AboutUs-Img-one.png';
import AboutUsImgtwo from '../../images/homePage/AboutUs-Img-Two.png';
import MoreSectionImgOne from '../../images/homePage/MoreSection-Image-One.png';
import MoreSectionImgTwo from '../../images/homePage/MoreSection-Image-Two.png';
import "../../css/homePage.css";

const Landing = () => {
  return (
    <div>
      <section className='BannerSection'>
        <div className="overlayer">
          <Container>
            <h2 className="title">
              Find your next flatmate in a heartbeat!
            </h2>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="buttonPart">
              <button className="btn yellow">
                Create a room listing for free
              </button>
              <button className="btn black">
                Create a roommate profile for free
              </button>
            </div>
          </Container>
        </div>
      </section>

      <section className="AboutUs">
        <Container>
          <div className="content">
            <div className="mobileHeader">
              <h2 className="headerText ">
                About Flatpulse
              </h2>
            </div>
            <div className="imagePart">
              <img src={AboutUsImgOne} alt="Image" className='ImageOne' />
              <img src={AboutUsImgtwo} alt="Image" />
            </div>
            <div className="textPart">
              <h2 className="headerText">
                About Flatpulse
              </h2>
              <p className="text space">
                Welcome to Flatpulse, the premier online platform for finding and sharing flats with like-minded individuals. Our website is dedicated to providing you with the best possible experience in your search for the perfect flatmate or roommate.
              </p>
              <p className="text">
                At Flatpulse, we understand that finding a suitable living arrangement can be a daunting task. That's why we have created a platform that is both easy to use and highly effective. Our user-friendly interface allows you to browse through a wide selection of flats, filtering by location, price range, and other preferences.
              </p>

              <button className="btn">
                Find out more!
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="MoreSection">
        <Container>
          <div className="content">
            <div className="imagePart">
              <div className="image">
                <img src={MoreSectionImgOne} alt="Image" />
              </div>
              <div className="image">
                <img src={MoreSectionImgTwo} alt="Image" />
              </div>
            </div>
            <div className="textPart">
              <h2 className="headerText">
                New to Flatsharing?
              </h2>
              <p className="text">
                At Flatpulse, our mission is to make the process of finding a flat or a flatmate as simple and stress-free as possible. Whether you're a student, a young professional, or a seasoned traveler, we have the perfect solution for you. Join our community today and start exploring the endless possibilities of flat sharing!
              </p>
              <button className="btn">
                Find out more!
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Landing