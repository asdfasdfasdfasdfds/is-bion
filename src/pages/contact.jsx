import React from "react";
import Form from "../components/Form";
import HeroPage from "../components/HeroPage";
import contactHeroPageImage from "../assets/images/main-page-hero.jpeg";
import phoneIcon from "../assets/images/phone-icon.svg";
import locationIcon from "../assets/images/location-icon.svg";
import emailIcon from "../assets/images/mail-icon.svg";
import "../assets/styles/pages/contact.css";

function contact() {
  return (
    <>
      <HeroPage src={contactHeroPageImage} title={"İletişim"} />
      <div className="contact-container">
        <div className="contact-box">
          <div className="head-office">
            <div className="head-office-title">İletişim Bilgilerimiz</div>
            <div className="head-office-location">
              <div className="head-office-location-icon">
                <img src={phoneIcon} alt="phone icon" />
              </div>
              <span className="head-office-location-text">
                0 (232) 435 15 43
              </span>
            </div>
            <div className="head-office-location">
              <div className="head-office-location-icon">
                <img src={locationIcon} alt="location icon" />
              </div>
              <span className="head-office-location-text">
                Mansuroğlu Mahallesi, 295/2 Sokak No:1/1 Ege Sun Plaza A Blok
                K:3 D:326 Bayraklı / İzmir
              </span>
            </div>
            <div className="head-office-location">
              <div className="head-office-location-icon">
                <img src={emailIcon} alt="email icon" />
              </div>
              <span className="head-office-location-text">
                info@referanshukukburosu.com
              </span>
            </div>
          </div>
          <Form />
        </div>
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3124.6515593316194!2d27.179877!3d38.4495166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b962af70aaa9cf%3A0x42b468af3a1fb0a6!2sEGE%20Sun%20Plaza!5e0!3m2!1str!2str!4v1647182039090!5m2!1str!2str"
            width="100%"
            height="100%"
            loading="lazy"
            title="mapFrame"
            className="map"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default contact;
