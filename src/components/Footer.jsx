import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getServices, getPostsByFirst } from "../services/index";
import phoneIcon from "../assets/images/footer-phone-icon.svg";
import locationIcon from "../assets/images/footer-location-icon.svg";
import emailIcon from "../assets/images/footer-mail-icon.svg";
import instagramIcon from "../assets/images/footer-instagram-icon.svg";
import linkedinIcon from "../assets/images/footer-linkedin-icon.svg";
import moment from "moment";
import "moment/locale/tr";
import "../assets/styles/components/Footer.css"
moment.locale("tr");

function Footer() {
  const [servicesArray, setServicesArray] = useState([]);
  const [lastPosts, setLastPosts] = useState([]);

  useEffect(async () => {
    const services = (await getServices()) || [];
    setServicesArray(services);
    const lastPostsData = (await getPostsByFirst(2)) || [];
    setLastPosts(lastPostsData);
  }, []);

  const servicesHalf = Math.round(servicesArray.length / 2);
  const services1 = servicesArray.slice(0, servicesHalf);
  const services2 = servicesArray.slice(servicesHalf);

  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-news">
            <h6 className="footer-news-title">Güncel Başlıklar</h6>
            {lastPosts.map((post) => (
              <div className="footer-news-card" key={post.id}>
                <p className="footer-news-card-title text-center">
                  {post.title}
                </p>
                <p className="footer-text text-center">{post.excerpt}</p>
                <div className="footer-news-card-date text-center">
                  {moment(post.date).format("DD.MM.YYYY")}
                </div>
              </div>
            ))}
          </div>
          <div className="footer-about-us-and-contact">
            <div className="footer-about-us">
              <h6>İletişim</h6>
              <div className="footer-location">
                <img src={phoneIcon} alt="Phone Icon" />
                <span className="footer-location-text">0 (232) 435 15 43</span>
              </div>
              <div className="footer-location">
                <img src={emailIcon} alt="email icon" />
                <span className="footer-location-text">
                  info@referanshukukburosu.com
                </span>
              </div>
              <div className="footer-location">
                <img src={locationIcon} alt="location icon" />
                <span className="footer-location-text">
                  Mansuroğlu Mahallesi, 295/2 Sokak No:1/1 Ege Sun Plaza A Blok
                  K:3 D:326 Bayraklı / İzmir
                </span>
              </div>
              <Link to="https://www.instagram.com/referanshukukburosu/">
                <a>
                  <div className="footer-location">
                    <img src={instagramIcon} alt="instagram icon" />
                    <span className="footer-location-text">
                      referanshukukburosu
                    </span>
                  </div>
                </a>
              </Link>
              <div className="footer-location">
                <img src={linkedinIcon} alt="linkedin icon" />
                <span className="footer-location-text">
                  referanshukukburosu
                </span>
              </div>
            </div>
          </div>
          <div className="footer-services">
            <h6>HİZMETLER</h6>
            <div className="footer-services-box">
              <ul className="footer-list">
                {services1.map((service) => (
                  <li key={service.node.slug}>
                    <Link to={`/hizmetlerimiz/${service.node.slug}`}>
                      <a>{service.node.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="footer-list">
                {services2.map((service) => (
                  <li key={service.node.slug}>
                    <Link to={`/hizmetlerimiz/${service.node.slug}`}>
                      <a>{service.node.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <div className="social-icon-box"></div>
            <span>Tüm hakları saklıdır. 2022 Referans Hukuk Bürosu</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
